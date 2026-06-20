import os
import threading
import tkinter as tk
from tkinter import filedialog, messagebox, ttk
from pydub import AudioSegment


class KonwerterAudio:
    def __init__(self, root):
        self.root = root
        self.root.title("Konwerter MP3 ↔ OGG")
        self.root.geometry("560x380")
        self.root.resizable(False, False)

        # ── Kierunek konwersji ──
        tk.Label(root, text="Kierunek konwersji:", font=("Arial", 10, "bold")).pack(pady=(20, 4))

        self.direction = tk.StringVar(value="mp3_to_ogg")
        frame_dir = tk.Frame(root)
        frame_dir.pack()
        tk.Radiobutton(frame_dir, text="MP3  →  OGG", variable=self.direction,
                       value="mp3_to_ogg", font=("Arial", 10)).pack(side="left", padx=20)
        tk.Radiobutton(frame_dir, text="OGG  →  MP3", variable=self.direction,
                       value="ogg_to_mp3", font=("Arial", 10)).pack(side="left", padx=20)

        # ── Wybór plików ──
        tk.Label(root, text="Wybierz pliki do konwersji:", font=("Arial", 10, "bold")).pack(pady=(18, 4))

        self.btn_select = tk.Button(
            root, text="Wybierz pliki…",
            command=self.select_files,
            bg="#2196F3", fg="white", padx=10, pady=5, font=("Arial", 10)
        )
        self.btn_select.pack()

        # Lista wybranych plików
        frame_list = tk.Frame(root)
        frame_list.pack(pady=8, padx=20, fill="both")

        scrollbar = tk.Scrollbar(frame_list, orient="vertical")
        self.listbox = tk.Listbox(
            frame_list, height=6, selectmode="extended",
            yscrollcommand=scrollbar.set, font=("Arial", 9)
        )
        scrollbar.config(command=self.listbox.yview)
        scrollbar.pack(side="right", fill="y")
        self.listbox.pack(side="left", fill="both", expand=True)

        self.selected_files = []

        # ── Przycisk START ──
        self.btn_start = tk.Button(
            root, text="▶  Rozpocznij konwersję",
            command=self.start_conversion_thread,
            bg="#4CAF50", fg="white", padx=12, pady=6,
            font=("Arial", 10, "bold"), state="disabled"
        )
        self.btn_start.pack(pady=(6, 4))

        # ── Pasek postępu ──
        self.progress = ttk.Progressbar(root, orient="horizontal", length=500, mode="determinate")
        self.progress.pack(pady=6)

        self.status_label = tk.Label(root, text="Status: Oczekiwanie…", fg="blue", font=("Arial", 9))
        self.status_label.pack()

    # ──────────────────────────────────────────
    def select_files(self):
        direction = self.direction.get()
        if direction == "mp3_to_ogg":
            filetypes = [("Pliki MP3", "*.mp3"), ("Wszystkie pliki", "*.*")]
        else:
            filetypes = [("Pliki OGG", "*.ogg"), ("Wszystkie pliki", "*.*")]

        files = filedialog.askopenfilenames(
            title="Wybierz pliki audio",
            filetypes=filetypes
        )
        if files:
            self.selected_files = list(files)
            self.listbox.delete(0, tk.END)
            for f in self.selected_files:
                self.listbox.insert(tk.END, os.path.basename(f))
            self.btn_start.config(state="normal")
            self.status_label.config(text=f"Wybrano {len(self.selected_files)} plik(ów).")

    # ──────────────────────────────────────────
    def convert_files(self):
        direction = self.direction.get()
        src_ext = ".mp3" if direction == "mp3_to_ogg" else ".ogg"
        dst_ext = ".ogg" if direction == "mp3_to_ogg" else ".mp3"
        fmt_out  = "ogg"  if direction == "mp3_to_ogg" else "mp3"
        load_fn  = AudioSegment.from_mp3 if direction == "mp3_to_ogg" else AudioSegment.from_ogg

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
                audio = load_fn(src_path)
                audio.export(dst_path, format=fmt_out)
            except Exception as e:
                errors.append(f"{name}: {e}")
                print(f"Błąd: {name} → {e}")

            self.progress["value"] = index + 1
            self.root.update_idletasks()

        # Podsumowanie
        ok = total - len(errors)
        msg = f"Gotowe! Przetworzono {ok}/{total} plik(ów)."
        if errors:
            msg += "\n\nBłędy:\n" + "\n".join(errors)
            messagebox.showwarning("Zakończono z błędami", msg)
        else:
            messagebox.showinfo("Sukces", msg)

        self.reset_ui()

    # ──────────────────────────────────────────
    def start_conversion_thread(self):
        if not self.selected_files:
            messagebox.showwarning("Brak plików", "Najpierw wybierz pliki do konwersji.")
            return
        self.btn_select.config(state="disabled")
        self.btn_start.config(state="disabled")
        thread = threading.Thread(target=self.convert_files, daemon=True)
        thread.start()

    def reset_ui(self):
        self.btn_select.config(state="normal")
        self.btn_start.config(state="disabled")
        self.status_label.config(text="Status: Gotowe ✓")
        self.progress["value"] = 0
        self.selected_files = []
        self.listbox.delete(0, tk.END)


if __name__ == "__main__":
    root = tk.Tk()
    app = KonwerterAudio(root)
    root.mainloop()
