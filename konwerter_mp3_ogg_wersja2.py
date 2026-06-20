import os
import threading
import tkinter as tk
from tkinter import filedialog, messagebox, ttk
from pydub import AudioSegment


# Obsługiwane formaty wejściowe i ich domyślne wyjście + możliwe cele
FORMATS = {
    ".mp3": {"label": "MP3",  "load": "mp3", "default_out": ".ogg", "targets": [".ogg", ".mp4"]},
    ".ogg": {"label": "OGG",  "load": "ogg", "default_out": ".mp3", "targets": [".mp3", ".mp4"]},
    ".mp4": {"label": "MP4",  "load": "mp4", "default_out": ".mp3", "targets": [".mp3", ".ogg"]},
}

ALL_EXTENSIONS = list(FORMATS.keys())  # [".mp3", ".ogg", ".mp4"]

EXPORT_PARAMS = {
    ".mp3": {"format": "mp3"},
    ".ogg": {"format": "ogg"},
    ".mp4": {"format": "mp4", "codec": "aac"},
}


class KonwerterAudio:
    def __init__(self, root):
        self.root = root
        self.root.title("Konwerter Audio (MP3 / OGG / MP4)")
        self.root.geometry("580x420")
        self.root.resizable(False, False)

        self.selected_files = []
        self.detected_ext = None          # rozszerzenie wykryte z wybranych plików
        self.target_ext = tk.StringVar()  # cel konwersji

        # ── Wybór plików ──────────────────────────────────────────────
        tk.Label(root, text="1.  Wybierz pliki do konwersji:",
                 font=("Arial", 10, "bold")).pack(pady=(18, 4))

        self.btn_select = tk.Button(
            root, text="Wybierz pliki…",
            command=self.select_files,
            bg="#2196F3", fg="white", padx=10, pady=5, font=("Arial", 10)
        )
        self.btn_select.pack()

        tk.Label(root, text="(obsługiwane formaty: MP3, OGG, MP4)",
                 font=("Arial", 8), fg="#666").pack()

        # Lista wybranych plików
        frame_list = tk.Frame(root)
        frame_list.pack(pady=6, padx=20, fill="both")
        scrollbar = tk.Scrollbar(frame_list, orient="vertical")
        self.listbox = tk.Listbox(
            frame_list, height=5, selectmode="extended",
            yscrollcommand=scrollbar.set, font=("Arial", 9)
        )
        scrollbar.config(command=self.listbox.yview)
        scrollbar.pack(side="right", fill="y")
        self.listbox.pack(side="left", fill="both", expand=True)

        # ── Cel konwersji (dynamiczny) ────────────────────────────────
        self.frame_target = tk.Frame(root)
        self.frame_target.pack(pady=(8, 2))

        self.lbl_target = tk.Label(
            self.frame_target,
            text="2.  Konwertuj do formatu:",
            font=("Arial", 10, "bold")
        )
        self.lbl_target.pack(side="left", padx=(0, 12))

        self.radio_buttons = []   # przechowujemy referencje żeby móc odświeżać

        self.frame_radios = tk.Frame(root)
        self.frame_radios.pack()

        # ── Przycisk START ────────────────────────────────────────────
        self.btn_start = tk.Button(
            root, text="▶  Rozpocznij konwersję",
            command=self.start_conversion_thread,
            bg="#4CAF50", fg="white", padx=12, pady=6,
            font=("Arial", 10, "bold"), state="disabled"
        )
        self.btn_start.pack(pady=(10, 4))

        # ── Pasek postępu ─────────────────────────────────────────────
        self.progress = ttk.Progressbar(root, orient="horizontal",
                                        length=520, mode="determinate")
        self.progress.pack(pady=4)

        self.status_label = tk.Label(root, text="Status: Wybierz pliki…",
                                     fg="blue", font=("Arial", 9))
        self.status_label.pack()

    # ─────────────────────────────────────────────────────────────────
    def select_files(self):
        filetypes = [
            ("Pliki audio/wideo", "*.mp3 *.ogg *.mp4"),
            ("MP3", "*.mp3"),
            ("OGG", "*.ogg"),
            ("MP4", "*.mp4"),
            ("Wszystkie pliki", "*.*"),
        ]
        files = filedialog.askopenfilenames(title="Wybierz pliki audio", filetypes=filetypes)
        if not files:
            return

        # Wykryj format na podstawie pierwszego pliku
        ext = os.path.splitext(files[0])[1].lower()
        if ext not in FORMATS:
            messagebox.showerror(
                "Nieobsługiwany format",
                f"Format '{ext}' nie jest obsługiwany.\nObsługiwane: MP3, OGG, MP4."
            )
            return

        # Sprawdź czy wszystkie pliki mają ten sam format
        mixed = [f for f in files if os.path.splitext(f)[1].lower() != ext]
        if mixed:
            messagebox.showwarning(
                "Różne formaty",
                "Wszystkie wybrane pliki muszą mieć ten sam format.\n"
                "Wybierz pliki tylko jednego typu na raz."
            )
            return

        self.selected_files = list(files)
        self.detected_ext = ext

        self.listbox.delete(0, tk.END)
        for f in self.selected_files:
            self.listbox.insert(tk.END, os.path.basename(f))

        self._build_target_radios(ext)
        self.btn_start.config(state="normal")
        fmt_label = FORMATS[ext]["label"]
        self.status_label.config(
            text=f"Wybrano {len(self.selected_files)} plik(ów) [{fmt_label}]. Wybierz cel konwersji."
        )

    # ─────────────────────────────────────────────────────────────────
    def _build_target_radios(self, src_ext):
        """Odświeża radio-buttony celu konwersji na podstawie formatu źródłowego."""
        for w in self.frame_radios.winfo_children():
            w.destroy()
        self.radio_buttons.clear()

        targets = FORMATS[src_ext]["targets"]
        default = FORMATS[src_ext]["default_out"]
        self.target_ext.set(default)

        for t in targets:
            label = FORMATS[t]["label"]
            rb = tk.Radiobutton(
                self.frame_radios,
                text=f"→  {label}",
                variable=self.target_ext,
                value=t,
                font=("Arial", 10)
            )
            rb.pack(side="left", padx=18)
            self.radio_buttons.append(rb)

    # ─────────────────────────────────────────────────────────────────
    def convert_files(self):
        src_ext = self.detected_ext
        dst_ext = self.target_ext.get()
        fmt_info = FORMATS[src_ext]
        export_params = EXPORT_PARAMS[dst_ext].copy()

        files = self.selected_files
        total = len(files)
        self.progress["maximum"] = total
        self.progress["value"] = 0

        errors = []
        for index, src_path in enumerate(files):
            name = os.path.basename(src_path)
            self.status_label.config(text=f"Konwertowanie: {name}")
            self.root.update_idletasks()

            dst_path = os.path.splitext(src_path)[0] + dst_ext
            try:
                audio = AudioSegment.from_file(src_path, format=fmt_info["load"])
                fmt = export_params.pop("format")
                audio.export(dst_path, format=fmt, **export_params)
            except Exception as e:
                errors.append(f"{name}: {e}")
                print(f"Błąd: {name} → {e}")

            self.progress["value"] = index + 1
            self.root.update_idletasks()

        ok = total - len(errors)
        src_label = FORMATS[src_ext]["label"]
        dst_label = FORMATS[dst_ext]["label"]
        msg = f"Gotowe! Przetworzono {ok}/{total} plik(ów) [{src_label} → {dst_label}]."
        if errors:
            msg += "\n\nBłędy:\n" + "\n".join(errors)
            messagebox.showwarning("Zakończono z błędami", msg)
        else:
            messagebox.showinfo("Sukces", msg)

        self.reset_ui()

    # ─────────────────────────────────────────────────────────────────
    def start_conversion_thread(self):
        if not self.selected_files:
            messagebox.showwarning("Brak plików", "Najpierw wybierz pliki do konwersji.")
            return
        if self.detected_ext == self.target_ext.get():
            messagebox.showwarning(
                "Ten sam format",
                "Format źródłowy i docelowy są identyczne. Zmień cel konwersji."
            )
            return
        self.btn_select.config(state="disabled")
        self.btn_start.config(state="disabled")
        thread = threading.Thread(target=self.convert_files, daemon=True)
        thread.start()

    # ─────────────────────────────────────────────────────────────────
    def reset_ui(self):
        self.btn_select.config(state="normal")
        self.btn_start.config(state="disabled")
        self.status_label.config(text="Status: Gotowe ✓")
        self.progress["value"] = 0
        self.selected_files = []
        self.detected_ext = None
        self.listbox.delete(0, tk.END)
        for w in self.frame_radios.winfo_children():
            w.destroy()


if __name__ == "__main__":
    root = tk.Tk()
    app = KonwerterAudio(root)
    root.mainloop()
