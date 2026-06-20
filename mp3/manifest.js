// Dodaj nowe utwory tutaj — index.html wczyta je automatycznie
// "lyrics" jest opcjonalne — wpisz tekst piosenki jako string (działa lokalnie, bez CORS)
var SPRAWY = [
  {
    "file": "pomoz.mp3",
    "title": "Porucznik Columbo pyta… — Nowe zagadki"
  },
  {
    "file": "rower.mp3",
    "title": "Sprawa nr 26: Zagadka z Wypożyczalni Rowerów",
    "lyrics": `[Intro]
[Sfx: Sound of lock snapping, dramatic orchestral hit]
[Spoken, crying and devastated shopkeeper] Mamma mia... No... Szopa otwarta... Wszystkie moje rowery zniknęły...
[Sfx: Old phone dialing, slow ringing tone]
[Spoken, weeping into phone] Pronto?... Policja?... Ukradli mi wszystko... Basta, to dla mnie koniec, to katastrofa...
[Spoken, calm authoritative radio filter] Calma, signore. Przyjmujemy zgłoszenie. Wysyłamy na molo naszego najlepszego człowieka. Perfetto. 
[Heavy staccato strings fade in, dark slow pulse]

[Verse 1 - Monotonous Interrogation]
[Mid-tempo tense rhythm, ticking clock sound]
[Spoken monotonously, bored detective voice] Proszę o fakty. Co dokładnie zniknęło z tej szopy?
[Quiet, weeping and broken voice] Trzy rowery po dwieście pięćdziesiąt złotych... i kasy osiemdziesiąt... Łączna strata to osiemset trzydzieści... to nie był żaden gratis...
[Spoken monotonously] Rozumiem. Czy świadek kogoś widział w nocy na molo?
[Quiet, weeping and broken voice] Si... Świadek widział go dokładnie o dwudziestej trzeciej czterdzieści... Ale strażnik zamknął molo wcześniej, o dwudziestej drugiej piętnaście...
[Spoken monotonously] Ile powietrza w szopie? Jaka była tam temperatura?
[Quiet, weeping and broken voice] Szopa ma dwadzieścia metrów sześciennych objętości... dla jednego solo człowieka powietrza starczy tam na dwadzieścia godzin... Rano było piętnaście stopni, w południe wzrosło o osiem, czyli dwadzieścia trzy stopnie Celsjusza... Sto dziewięć stopni Fahrenheita to przecież czterdzieści trzy stopnie Celsjusza...
[Spoken monotonously] Jak szybko uciekał? Jaki był obwód śladu opon?
[Quiet, weeping and broken voice] Rower przejechał trzydzieści metrów w sześć sekund... to pięć metrów na sekundę prędkości... Jeden pełny obrót na piasku to półtora metra obwodu koła... Mamma mia, proszę go złapać...

[Chorus]
[Massive dramatic orchestral drop]
[Powerful echoing child chorus]
To nie klasyczny kryminał, gdzie winny ukrywa twarz,
To Howcatchem! Howcatchem! – od początku go masz!
Gdy detektyw już odchodzi, gdy zamyka drzwi,
Odwraca się nagle... w oczach błysk się tli...
[Stop all instruments]
[Sudden dry whisper] Scusi... jeszcze jedna rzecz...
[Heavy beats explode back in]
I całe alibi idzie w precz!

[Verse 2 - Fast Data Aggregation]
[Tempo speeds up drastically, aggressive orchestral score, rapid fire delivery]
Analiza danych, pronto! Woda wrze przy stu stopniach, stare wino tlen brązowi!
Sól kuchenna to sód i chlor, żaden bandito nas nie omami!
Trzej świadkowie mówili dwanaście, osiem i dziewiętnaście minut – trzydzieści dziewięć minut rozmów bez wykrętów!
Zarobek za cztery godziny i dwa rowery to sto dwadzieścia złotych, szukamy rzekomych talentów!
Synonim do słowa detektyw to śledczy, słowo drapiąc to imiesłów w tej czarnej serii!
Włoskie grazie to dziękuję, pasta to makaron, a ciao to i cześć, i do widzenia w tej miejskiej dżungli!
Podejrzany ma to w nosie, bo Columbo wydaje się rozkojarzony, błąd, to genialny mistrz!
Trik na zaskoczenie to dodatkowe pytanie, stary znoszony płaszcz i wszystko jasne w mig!
Złodziej ukradł o dwudziestej drugiej, Columbo był o pierwszej piętnaście – trzy godziny i piętnaście minut po szkodzie!
Peugeot waży tysiąc sto, plus dwie osoby po sześćdziesiąt kilo – łączna masa tysiąc dwieście dwadzieścia w tej kradzieży przygodzie!
Dym z cygara to dwutlenek węgla, niezdarny, ale genialny to epitet dla mistrza tej gry!

[Bridge]
[Deep bass drone, eerie piano notes]
[Rapid fire call and response]
Kto tu rządzi? Nasz capo di tutti capi!
Kto ukradł rowery? Ten bandito się gapi!
Signore Henderson krzyczy, na molo totalna afera,
Prego, proszę bardzo, cała prawda odkryta!
To była ruda, wielka i groźna vendetta,
A teraz czas na finał, czeka nas już meta!
Na powitanie i pożegnanie jedno słowo znam:
[Shouted by chorus] CIAO! CIAO! CIAO!

[Outro]
[Tempo slows down, heavy dramatic orchestral chords]
[Sfx: sirens fade out]
Genialny, ale niezdarny – epitet na karcie lśni
Sprawa dwadzieścia sześć rozwiązana, zamykam testu drzwi
[Spoken, radio filter] Arrivederci, buona notte! Sprawa zamknięta. Wynik testu: maksymalny.
[Single dark final piano note]
[Sfx: bike bell ring in the dark]`
  },
  {
    "file": "spryt.mp3",
    "title": "Co zrobiłby Porucznik?"
  },
  {
    "file": "sherlock.mp3",
    "title": "Sherlock Holmes",
    "lyrics": `[Intro]
Londyn śpi pod mgłą gęstą jak atrament,
Gdzieś przy Baker Street pali się jeszcze lampa...

[Zwrotka 1]
Dwieście dwadzieścia jeden B, na piętrze błyszczy świeczka,
Tam mieszka mistrz detekcji, dla którego sprawa każda jest lekka.
Lupa w dłoni, fajka w ustach, skrzypce gdzieś przy oknie,
Doktor Watson pióro macza, gdy zagadka rośnie.
Plama błota, krzywy guzik, zegarek bez łańcuszka —
Dla innych nic, dla Holmsa cała historia ludzka!

[Refren] 🎵
Ele-men-tarne! — szepcze mgła nad miastem,
Każdy ślad ma swoją baśń, trzeba tylko patrzeć!
Ba-ker Street, dwieście dwadzieścia jeden B,
Tam, gdzie fakty łączą się w jeden wielki klucz!
Ele-men-tarne, mój drogi przyjacielu,
Dedukcja to nie magia — to uwaga i cierpliwość, o-o-oo!

[Zwrotka 2]
Inspektor Lestrade drapie się po głowie, nic nie rozumie,
A Holmes już wie, kto, jak i czemu — w jednej chwili, w locie!
Mycroft, brat, w klubie siedzi, leniwy, lecz bystrzejszy jeszcze,
Profesor Moriarty knuje plany w mrocznej, cichej wieży.

...uważaj na cień, co pada nie tam, gdzie powinien...
...uważaj na krok, co brzmi inaczej niż reszta...

[Refren]
[Bridge] 🎶 (nagła zmiana dynamiki, smyczki w górę, potem cisza)
Wodospad Reichenbach! Skrzypce grają cicho...

...ale prawda zawsze wraca, choćby mgła ją kryła,
Detektyw nie umiera, dopóki pamięć żywa!

[Zwrotka 3]
Pies wyje na bagnach Dartmoor, mgła się snuje nisko,
Lecz na strach nie ma miejsca, gdy rozum widzi wszystko.
Skarb, list, fałszywy ślad, kwadrat i jego przekątna —
Dwadzieścia pięć zagadek, a prawda jest już jasna!

Bo dedukcja to nie magia, to uważne, ciche oko,
Co dostrzega to, co inni omijają szerokim krokiem!

[Refren — wersja finałowa, pełna orkiestra]
Ele-men-tarne! — krzyczy cały Londyn,
Każdy ślad ma swoją baśń, Ty już to rozumiesz!
Ba-ker Street, dwieście dwadzieścia jeden B,
Tam, gdzie fakty łączą się w jeden wielki klucz!

[Outro]
Drogi detektywie, świetnie dziś spisałeś/aś się,
Sherlock Holmes z Baker Street ściska dłoń, mówiąc: „brawo, to wszystko!”`
  },
  {
    "file": "chemia1.mp3",
    "title": "Chemia 1",
    "lyrics": `[Style of Music: dark jazz noir, minimalist ambient suspense, slow-tempo lounge, melancholic detective atmosphere, soft saxophone, brushed drums, quiet piano notes, rainy night mood]

[Intro]
[Sfx: Sound of heavy rain against window glass, distant rolling thunder]
[Sfx: Slow, lazy double bass starts, brushed snare drum pattern]
[Soft whispered voice]
[Sighing and deeply sad]
W ciemnościach archiwum... cienie drżą niepokojąco. 
Ktoś tu był. Akta leżą rozrzucone na wilgotnej podłodze, bezwzględnie zbezczeszczone. 
Ślady substancji... płynów nieznanych... rozsypany biały proszek na dnie szuflady. 
Zimno przenika do szpiku kości. Wszystko zniszczone.

[Verse 1 - Slow Interrogation]
[Quiet monotone voice]
[Sfx: Gentle piano chords, muted trumpet in the background]
Usiądź naprzeciwko mnie. W tym przyciemnionym gabinecie mgła papierosowa unosi się leniwie. 
Odpowiedz skrupulatnie na moje pytania. Musimy rozwikłać tę zawiłość pierwiastków i cieni. 
Co ukrywa ta biała, skrystalizowana struktura? Sól kuchenna, chlorek sodu... z jakiego składa się pierwiastka oprócz sodu? 
[Soft whispered voice]: Z chloru, panie śledczy. Z bezlitosnego chloru. 
A kiedy płomień trawi dowody, niszcząc nienagannie czystą przestrzeń... jaki gaz powstaje głównie podczas spalania? 
[Sighing and deeply sad]: Dwutlenek węgla... unosi się w mroku, dusi prawdę. 
[Quiet monotone voice]: Oddychamy głęboko, by przeżyć ten koszmar. Jaki gaz pobieramy z powietrza, by utrzymać tętno? 
[Soft whispered voice]: Tlen... czysty tlen daje nam siłę, by mówić.

[Chorus]
[Sfx: Music swells slightly, saxophone plays a melancholic, slow melody]
Chemia w pracy policji... 
Badamy ślady, substancje ukryte w mroku nocy. 
To nieodzowna rzetelność, która prowadzi nas przez labirynt kłamstw. 
[Stop all instruments]
[Soft, breathy whisper]
Jeszcze jedna rzecz...
[Sfx: Laze, sparse piano notes return, accompanied by slow double bass]
Coś niepodważalnie wisi w powietrzu.

[Verse 2 - Calm Data Aggregation]
[Sfx: Brushed drums resume, soft lounge tempo]
[Quiet monotone voice]
Posłuchajmy szeptu nauki. Jak nazywamy najprostszą substancję, której nie da się już rozłożyć na prostsze, jak tlen, węgiel czy żelazo? 
To pierwiastek... bezsprzecznie, fundament wszelkiego stworzenia. 
W jakiej temperaturze woda zaczyna wrzeć, gdy ciśnienie trzyma nas przy ziemi? Sto stopni... sto stopni Celsjusza zamienia ciecz w ulotną parę. 
A ta nauka, która bada substancje i ich tajemne przemiany, gdy technik z lupą pochyla się nad stołem? 
To chemia... nasza jedyna broń przeciwko chaosowi. 
Największa część powietrza, którym oddychamy w tym dusznym pokoju... to azot, dławiący, cichy azot.

[Chorus]
[Sfx: Melancholic saxophone and soft piano harmony]
Chemia w pracy policji... 
Badamy ślady, substancje ukryte w mroku nocy. 
To nieodzowna rzetelność, która prowadzi nas przez labirynt kłamstw. 
[Stop all instruments]
[Soft, breathy whisper]
Jeszcze jedna rzecz...
[Sfx: Lazy piano notes return, slow and heavy]
Prawda rozprzestrzenia się powoli.

[Bridge]
[Sfx: Only a quiet piano and a very soft, sweeping brush on the snare]
[Soft whispered voice]
Pamiętasz ten prosty eksperyment? Gdy zmieszasz ocet z sodą oczyszczoną... powstaje piana i bąbelki gazu. To buzuje jak nasze podejrzenia. 
Lód, woda i para wodna... to przecież ta sama substancja, tylko stany skupienia mienią się w świetle latarni. 
Żaden rzezimieszek nie ucieknie przed logiką tych faktów. 
Komu przydaje się ta wiedza? Piosenkarzowi? Malarzowi? 
Nie... lekarzowi policyjnemu, który skrupulatnie bada próbki na miejscu zdarzenia.

[Outro]
[Sfx: Muted trumpet fades out, sound of rain becomes more prominent]
[Quiet monotone voice]
Zagadka rozwiązana. Układanka kompletna. 
Nienaganna rzetelność intelektu triumfuje w tę deszczową noc. 
Zamykam akta. Wynik jest czysty, niepodważalny... dziesięć na dziesięć. 
[Soft whispered voice]
Sprawa zamknięta... 
[Sfx: Final lone piano note, sound of footsteps fading into the rain]
[Fade to silence]`
  },
  {
    "file": "fiz1.mp3",
    "title": "Fizyka 1",
    "lyrics": `[Style of Music: cinematic crime thriller, police chase, detective noir, urban night atmosphere, police sirens, radio chatter, suspense, dramatic orchestral score]

[Intro]
[Sfx: Sound of a heavy glass shop window smashing and metal rattling]
[Spoken, crying and devastated shopkeeper] Mamma mia... No... Witryna rozbita... Wszystko zniszczone, uciekali z miejsca zdarzenia...
[Sfx: Old rotary phone dialing, slow anxious ringing tone]
[Spoken, weeping into phone] Pronto?... Policja?... Świadek przy telefonie. Szybki pojazd przemknął przez ulicę! Basta, to totalne casino, uciekają z łupem...
[Spoken, calm authoritative radio filter] Calma, signore. Przyjmujemy oficjalne zgłoszenie. Wysyłamy na miejsce naszego najlepszego człowieka, pronto! Perfetto.
[Heavy staccato strings fade in, dark suspenseful bass pulse]

[Verse 1 - Monotonous Interrogation]
[Mid-tempo tense rhythm, ticking clock sound]
[Spoken monotonously, bored detective voice] Proszę o konkretne fakty, signore. Co zarejestrował radar na miejscu zdarzenia?
[Quiet, weeping and broken voice] Pojazd przejechał dokładnie sto metrów w dziesięć sekund[cite: 3]... Jaka to prędkość, pytam?... To dziesięć metrów na sekundę strachu[cite: 3]... to nie był żaden darmowy gratis...
[Spoken monotonously] Rozumiem. Jak poruszał się ten uciekający samochód na prostej drodze?
[Quiet, weeping and broken voice] Si... Samochód jechał ze stałą prędkością sześćdziesiąt kilometrów na godzinę przez równe dwie godziny[cite: 3]... Ile kilometrów przejechał, uciekając przed nami[cite: 3]?... Sto dwadzieścia kilometrów solo przejechał[cite: 3]... Mamma mia...
[Spoken monotonously] Podaj mi parametry środowiskowe. Co pokazał przyrząd pomiarowy?
[Quiet, weeping and broken voice] Termometr na miejscu zdarzenia pokazał rano osiemnaście stopni Celsjusza[cite: 3]... a w południe ta temperatura wzrosła jeszcze o pięć stopni[cite: 3]... W południe pokazywał dwadzieścia trzy stopnie Celsjusza[cite: 3]... słońce paliło nasze nadzieje...
[Spoken monotonously] Jakich fizycznych narzędzi użyliście do zabezpieczenia tych drobnych śladów?
[Quiet, weeping and broken voice] Lupa, której użył policjant, pomogła nam bardzo... powiększyć obraz[cite: 3]... Odciski palców na miejscu zdarzenia bada się proszkiem daktyloskopijnym i lupą[cite: 3]... Wszystko zniszczone, proszę złapać tego bandito...

[Chorus]
[Massive dramatic orchestral drop, heavy brass horns]
[Powerful echoing child chorus]
To nie klasyczny kryminał, gdzie winny ukrywa twarz,
To Howcatchem! Howcatchem! – od początku go masz!
Gdy detektyw już odchodzi, gdy zamyka drzwi,
Odwraca się nagle... w oczach błysk się tli...
[Stop all instruments]
[Sudden dry whisper] Scusi... jeszcze jedna rzecz...
[Heavy beats explode back in with driving percussion]
I całe alibi idzie w precz!

[Verse 2 - Fast Data Aggregation]
[Tempo speeds up drastically, aggressive orchestral score, rapid fire rap delivery]
Analiza danych, pronto! W jednostce metr na sekundę mierzymy prędkość w tym rewirze[cite: 3]!
Przyrząd do mierzenia temperatury to termometr, zapisz to na czarnym papierze[cite: 3]!
Woda zamarza w temperaturze zero stopni Celsjusza, lód skuwa całe miasto[cite: 3]!
Co przyciąga przedmioty do ziemi i sprawia, że upuszczony przedmiot spada na dno[cite: 3]?
Za to odpowiada grawitacja, niewidzialna siła, która bandito na dno sprowadzi[cite: 3]!
Jednostką masy jest kilogram, żaden fałszywy świadek nas nie wprowadzi w błąd[cite: 3]!
Sto metrów dzielone przez dziesięć sekund daje dziesięć metrów na sekundę prędkości[cite: 3]!
Sześćdziesiąt kilometrów na godzinę razy dwie godziny daje sto dwadzieścia kilometrów w całości[cite: 3]!
Osiemnaście stopni plus pięć stopni daje dwadzieścia trzy stopnie w południowym raporcie[cite: 3]!
Lupa powiększa obraz, a proszek daktyloskopijny ujawnia linie na ciemnym eskorcie[cite: 3]!
Włoskie grazie to dziękuję, pasta to makaron, ciao na powitanie i pożegnanie w tej nocnej dżungli!
Detektyw zbiera dowody, fizyka na służbie, koniec tej przestępczej rundy!

[Bridge]
[Deep bass drone, eerie piano notes, rising tension]
[Rapid fire call and response]
Kto tu rządzi? Nasz capo di tutti capi!
Kto ukradł dowody? Ten bandito się gapi!
Signore Henderson płacze, ale sprawa już rozbita,
Prego, proszę bardzo, cała fizyczna prawda odkryta!
To była wielka, zuchwała i groźna vendetta,
A teraz czas na finał, czeka nas już meta!
Na powitanie i pożegnanie jedno słowo znam:
[Shouted by chorus] CIAO! CIAO! CIAO!

[Outro]
[Tempo slows down, heavy dramatic orchestral chords, fading strings]
[Sfx: Police sirens fading out into the city night]
Fizyka na służbie policji, akta zamknięte na klucz,
Dziesięć punktów na dziesięć zdobyte, z mroku się wyklucz.
[Spoken, radio filter] Arrivederci, buona notte! Sprawa oficjalnie zamknięta. Wynik testu: maksymalny.
[Single dark final piano note]
[Sfx: Single bike bell ring in the dark]`
  },
  {
    "file": "polski1.mp3",
    "title": "Polski 1",
    "lyrics": `[Style of Music: spokojny mroczny jazz, minimalistyczne zawieszenie, powolne brzmienie salonowe, melancholijna atmosfera śledcza, ciche brzmienie saksofonu, szczotkowane bębny, subtelne dźwięki fortepianu, nastrój deszczowej nocy]

[Intro]
[Soft whispered voice]
[Sighing and deeply sad]

Przyprószony księżyc rozszczelniał zasznurowane szuflady,
bezsprzecznie dostrzegłem zbezczeszczenie zapisanych składni.
Skrupulatnie przeszukiwałem pożółkłe skorowidze,
rozprzestrzenianie szeptów brzmiało przeraźliwie cicho.
Przygnębiony, zrezygnowany,
wyszeptałem przez zaciśnięte szczęki:
„Któż naruszył przechrzczone świadectwa…”

[Verse 1 - Slow Interrogation]
[Quiet monotone voice]

Przy przyćmionym świetle siedział śledczy,
bezwzględnie, lecz nienagannie dociekliwy.
Powiedział przeciągle:

„Jak brzmi podobne określenie detektywa?”

Odrzekłem szeptliwie:
„Śledczy… bezsprzecznie śledczy…”

„Jak nazwać opowieść o przestępstwie,
której zawiłość trzeba rozwikłać?”

„Kryminał…”

„Która część mowy określa czynność,
gdy ktoś notuje, pyta, przemierza?”

„Czasownik…”

„Któż widział zdarzenie?”

„Świadek…”

„Które słowo określa osobę?”

„Policjant, niepodważalnie policjant…”

„Ile liter zawiera wyraz detektyw?”

„Osiem…
osiem liter, skrzętnie policzonych…”

[Chorus]
[Soft singing]

Szeleszczący deszcz spływał po szybach,
rzęsiste brzmienia drżały w ciszy.
Rzetelność, przezorność i spostrzegawczość
rozświetlały zmurszałe zapiski.

[Stop all instruments]
[Soft, breathy whisper]

Jeszcze jedna rzecz…

Powolne dźwięki fortepianu
powracały przez przymglone przestrzenie,
a rozedrgane wspomnienia
snuły się niespiesznie.

[Verse 2 - Calm Data Aggregation]

Skrupulatny śledczy zestawiał szczegóły,
z przejrzystością i przezornością.

„Na końcu pytania,
bezsprzecznie umieszczamy pytajnik…”

„Szybki jest przymiotnikiem,
określa właściwość i przejrzystość…”

„Krótki opis zdarzenia,
sporządzony przez policjanta,
to notatka służbowa…”

„A dokładny opis,
sporządzony z niezwykłą rzetelnością,
pomaga analitykowi policji…”

Rozszczepione przypuszczenia
ustępowały przejrzystym wyjaśnieniom.
Nawet przebrzmiałe szelesty
nie mogły przeszkodzić dociekliwości.

[Bridge]

Przez zasznurowane archiwum
przesuwał się deszczowy półmrok.
Rzezimieszek pozostawił ślady,
lecz przeświadczenie było niezachwiane.

Spostrzegawczość,
nieprzejednana rzetelność,
przezorność i skrupulatność
rozszyfrowały zawiłości.

Bezsprzecznie.
Niepodważalnie.
Nienagannie.

[Outro]
[Soft whispered voice]

Zamknąłem skoroszyty,
przyciszyłem szeleszczące kartki.
Wynik był przejrzysty,
dziesięć na dziesięć.

Deszcz szemrał za oknem,
a ja wyszeptałem:

„Sprawa zakończona…
bezwzględnie dzięki rzetelności…”

I tylko cichy szmer
przypominał o przeszłości.`
  },
  {
    "file": "rekomendacja.mp3",
    "title": "Rekomendacja"
  },
  {
    "file": "wloski1.mp3",
    "title": "Włoski 1",
    "lyrics": `[Style of Music: dark jazz noir, minimalist ambient suspense, slow-tempo lounge, melancholic detective atmosphere, soft saxophone, brushed drums, quiet piano notes, rainy night mood]

[Intro]
[Sfx: Sound of heavy rain against window glass, distant rolling thunder]
[Sfx: Slow, lazy double bass starts, brushed snare drum pattern]
[Soft whispered voice]
[Sighing and deeply sad]
W ciemnościach archiwum... cienie drżą niepokojąco.
Ktoś tu był. Akta leżą rozrzucone na wilgotnej podłodze, bezwzględnie zbezczeszczone.
Włoskie ślady... notatki rozrzucone w mroku.
Zimno przenika do szpiku kości. Wszystko zniszczone.

[Verse 1 - Slow Interrogation]
[Quiet monotone voice]
[Sfx: Gentle piano chords, muted trumpet in the background]
Usiądź naprzeciwko mnie. W tym przyciemnionym gabinecie mgła papierosowa unosi się leniwie.
Odpowiedz skrupulatnie na moje pytania. Musimy rozwikłać tę językową zawiłość i cienie.
Gdy podejrzany milczy, a potem nagle rzuca ciche słowo podziękowania...
Jak po włosku powiemy „dziękuję”? Każdy to wie.
[Soft whispered voice]: Grazie... panie śledczy. Słyszę to nienagannie czyste „grazie”.
[Quiet monotone voice]: A to słynne, uniwersalne zawołanie, które krąży po ulicach Rzymu?
Włoskie słowo „ciao”... co ono bezsprzecznie oznacza w kryminalnej praktyce?
[Sighing and deeply sad]: To i „cześć”, i „do widzenia”... na powitanie i pożegnanie, gdy świadek znika w mgle.
[Quiet monotone voice]: Kiedy na miejsce zdarzenia zajeżdżają czarne wozy... na karoserii lśni napis.
Jak brzmi słowo „policja” w tym melodyjnym języku? Jest tak bliskie naszemu.
[Soft whispered voice]: Polizia... nienaganna, rzetelna polizia pilnuje porządku.

[Chorus]
[Sfx: Music swells slightly, saxophone plays a melancholic, slow melody]
Podstawy włoskiego w pracy policji...
Badamy akta, słowa ukryte w mroku deszczowej nocy.
To nieodzowna rzetelność, która prowadzi nas przez labirynt kłamstw.
[Stop all instruments]
[Soft, breathy whisper]
Jeszcze jedna rzecz...
[Sfx: Lazy, sparse piano notes return, accompanied by slow double bass]
Coś niepodważalnie wisi w powietrzu.

[Verse 2 - Calm Data Aggregation]
[Sfx: Brushed drums resume, soft lounge tempo]
[Quiet monotone voice]
Posłuchajmy szeptu faktów. Gdy wchodzisz do pokoju przesłuchań, musisz zachować profesjonalizm.
Jak kulturalnie powiesz „przepraszam”, gdy zaczynasz skrupulatne rozpytanie?
Wpisz to jedno słowo: scusi... tak, to bezwzględnie scusi otwiera ludzkie umysły.
Podejrzenia rosną. Zadajesz proste pytanie, na które oczekujesz jasnej deklaracji.
Co oznacza to krótkie, stanowcze, włoskie słowo „sì”?
To oznacza „tak”... niepodważalnie „tak” przyznaje rację śledczemu.
A jego całkowite przeciwieństwo, gdy rzezimieszek zaprzecza zarzutom?
„Nie” to po prostu „no”... krótkie, chłodne „no”.
Gdy witamy kogoś o poranku, zanim słońce przebije się przez żaluzje, mówimy buongiorno.
To piękne, klasyczne „dzień dobry”.

[Chorus]
[Sfx: Melancholic saxophone and soft piano harmony]
Podstawy włoskiego w pracy policji...
Badamy akta, słowa ukryte w mroku deszczowej nocy.
To nieodzowna rzetelność, która prowadzi nas przez labirynt kłamstw.
[Stop all instruments]
[Soft, breathy whisper]
Jeszcze jedna rzecz...
[Sfx: Lazy piano notes return, slow and heavy]
Prawda rozprzestrzenia się powoli.

[Bridge]
[Sfx: Only a quiet piano and a very soft, sweeping brush on the snare]
[Soft whispered voice]
Zastanówmy się nad formą zapisu. Analityk policji bada strukturę tekstu.
Gdybyśmy zapisali to powitanie jako dwa osobne wyrazy: „buon giorno”... ile słów bezsprzecznie widzisz przed sobą?
Dwa słowa... chociaż dziś zazwyczaj łączymy je w jeden spójny zwrot.
Teraz musimy namierzyć kryjówkę. Gdzie ukrywa się sprawca? Gdzie jest dom podejrzanego?
Po włosku dom to po prostu casa... bezpieczna, cicha casa.
Komu przydaje się ta wiedza w codziennym rozprzestrzenianiu sprawiedliwości?
Kucharzowi? Piosenkarzowi? Nie... policjantowi, który skrupulatnie pomaga włoskim turystom.

[Outro]
[Sfx: Muted trumpet fades out, sound of rain becomes more prominent]
[Quiet monotone voice]
Zagadka rozwiązana. Językowa układanka kompletna.
Nienaganna rzetelność intelektu triumfuje w tę deszczową noc.
Zamykam akta. Wynik jest czysty, niepodważalny... dziesięć na dziesięć.
[Soft whispered voice]
Sprawa zamknięta... ciao.
[Sfx: Final lone piano note, sound of footsteps fading into the rain]
[Fade to silence]`
  }
];
