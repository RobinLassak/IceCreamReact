# Ice Cream React - Školní cvičení

**Autor:** Robin Lassak  
**Vytvořeno jako:** Školní cvičení v Reactu

## Přehled aplikace

Ice Cream React je interaktivní webová aplikace vytvořená v Reactu, která demonstruje práci s různými typy formulářových elementů, state managementem a responzivním designem. Aplikace simuluje objednávkový systém pro zmrzlinu s matematickou kalkulačkou a funkcionalitou pro práci se soubory.

## Technologie

- **React 19.0.0** - Moderní JavaScript knihovna pro UI
- **Vite 6.1.0** - Rychlý build tool a dev server
- **Bootstrap 5.3.3** - CSS framework pro responzivní design
- **ESLint** - Linting nástroj pro kvalitu kódu

## Architektura aplikace

### Hlavní komponenty

Aplikace je rozdělena do modulárních komponent:

#### 1. **App.jsx** - Hlavní komponenta
- Spravuje globální state aplikace
- Obsahuje logiku pro všechny interakce
- Implementuje responzivní layout s Bootstrap grid systémem

#### 2. **Formulářové komponenty**

**RbGroup.jsx** - Radio button skupina
- Výběr příchutě zmrzliny (vanilková, čokoládová, míchaná)
- Responzivní zobrazení s flexbox layoutem

**ChbGroup.jsx** - Checkbox skupina  
- Výběr přídavků (kousky oříšků, čoko hoblinky, karamelové krupinky)
- Podporuje více výběrů současně

**TextBox.jsx** - Textové input pole
- Pro zadání sčítanců v kalkulačce
- Centrování labelů a inputů

**NumImp.jsx** - Numerické input pole
- Pro zadání počtu kopečků (max. 4)
- Validace vstupních hodnot

**Select.jsx** - Dropdown menu
- Výběr druhu zmrzliny (smetanová, jogurtová, nízkotučná)
- Responzivní šířka

**Range.jsx** - Range slider
- Nastavení místa na disku (0-100%)
- Real-time aktualizace hodnoty

#### 3. **UI komponenty**

**Button.jsx** - Univerzální tlačítko
- Tlačítka "Sečti" a "Stahni soubor"
- Konzistentní styling a výška

**TextArea.jsx** - Víceřádkové textové pole
- Pro zobrazení obsahu nahraného souboru
- Nastavitelná výška

**File.jsx** - File upload komponenta
- Nahrávání textových souborů
- Čtení obsahu pomocí FileReader API

**ProgressBar.jsx** - Progress bar
- Animovaný progress bar pro simulaci instalace
- Bootstrap styling s pruhy a animací

**Clock.jsx** - Digitální hodiny
- Real-time zobrazení aktuálního času
- Aktualizace každou sekundu

**Image.jsx** - Obrázková komponenta
- Podmíněné zobrazení obrázků
- Nastavitelná šířka

## Funkcionalita

### 1. **Objednávka zmrzliny**
- Výběr příchutě (radio buttons)
- Výběr přídavků (checkboxes)
- Nastavení počtu kopečků (1-4)
- Výběr druhu zmrzliny (dropdown)
- Dynamické zobrazení objednávky

### 2. **Matematická kalkulačka**
- Zadání dvou sčítanců pomocí promptů při spuštění
- Real-time aktualizace hodnot v input polích
- Výpočet součtu s validací
- Zobrazení výsledku

### 3. **Práce se soubory**
- Nahrávání textových souborů
- Zobrazení obsahu v TextArea po stisknutí tlačítka
- Podpora UTF-8 kódování

### 4. **Simulace instalace**
- Odpočítávání od 20 sekund
- Animovaný progress bar
- Real-time aktualizace stavu

### 5. **Systémové informace**
- Zobrazení aktuálního času
- Indikátor místa na disku
- Synchronizace s range sliderem

## Design a responzivita

### Responzivní breakpointy
- **Malé displeje (≤991px)**: Formulář nahoře, elementy pod sebou
- **Velké displeje (≥992px)**: Formulář vycentrovaný vertikálně

### Bootstrap grid systém
- **Dvousloupcový layout** na velkých displejích
- **Jednosloupcový layout** na malých displejích
- **Symetrické šířky** pro všechny elementy

### Styling
- **Světle modré pozadí** (`bg-info-subtle`)
- **Světle žlutý formulář** (`bg-warning-subtle`)
- **Centrované labely** nad všemi elementy
- **Konzistentní výšky** tlačítek a inputů

## State Management

Aplikace používá React hooks pro state management:

```javascript
// Hlavní stavy
const [prichut, setPrichut] = useState("vanilkova");
const [pridavky, setPridavky] = useState([]);
const [kopecky, setKopecky] = useState("");
const [druh, setDruh] = useState("nizkotucna");
const [disk, setDisk] = useState(40);
const [odpocitavani, setOdpocitavani] = useState(20);
const [scitanec1, setScitanec1] = useState("");
const [scitanec2, setScitanec2] = useState("");
const [text, setText] = useState("");
const [soubor, setSoubor] = useState("");
const [vysledek, setVysledek] = useState("");
```

### useRef pro optimalizaci
```javascript
const promptyZobrazeny = useRef(false);
```
Zabrání opakovanému zobrazování promptů při re-renderu.

## Responzivní funkce

### Mobilní optimalizace
- **Flexbox layout** pro radio buttons a checkboxes
- **Responzivní šířky** inputů a tlačítek
- **Centrované elementy** na malých displejích
- **Plná šířka** na mobilních zařízeních

### Desktop optimalizace
- **Dvousloupcový layout** pro lepší využití prostoru
- **Vertikální centrování** formuláře
- **Symetrické zarovnání** tlačítek

## Spuštění aplikace

### Předpoklady
- Node.js (verze 16 nebo vyšší)
- npm nebo yarn

### Instalace
```bash
# Klonování repository
git clone [repository-url]
cd IceCreamReact

# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev
```

### Build pro produkci
```bash
npm run build
npm run preview
```

## Struktura projektu

```
src/
├── components/          # React komponenty
│   ├── Button.jsx      # Univerzální tlačítko
│   ├── ChbGroup.jsx    # Checkbox skupina
│   ├── Clock.jsx       # Digitální hodiny
│   ├── File.jsx        # File upload
│   ├── Image.jsx       # Obrázková komponenta
│   ├── NumImp.jsx      # Numerický input
│   ├── ProgressBar.jsx # Progress bar
│   ├── Range.jsx       # Range slider
│   ├── RbGroup.jsx     # Radio button skupina
│   ├── Select.jsx      # Dropdown menu
│   ├── TextArea.jsx    # Víceřádkové textové pole
│   └── TextBox.jsx     # Textový input
├── App.jsx             # Hlavní komponenta
├── App.css             # Styly aplikace
├── index.css           # Globální styly
└── main.jsx            # Entry point
```

## Vzdělávací cíle

Tato aplikace demonstruje:

1. **React základy**
   - Komponenty a props
   - State management s hooks
   - Event handling
   - Lifecycle metody (useEffect)

2. **Moderní JavaScript**
   - ES6+ syntaxe
   - Arrow funkce
   - Destructuring
   - Template literals

3. **Responzivní design**
   - Bootstrap grid systém
   - CSS media queries
   - Flexbox layout
   - Mobile-first přístup

4. **Web APIs**
   - FileReader API
   - setInterval/clearInterval
   - Date API

5. **Best practices**
   - Modulární architektura
   - Komponentní design
   - Clean code principy
   - ESLint konfigurace

## Klíčové funkce

### Prompt systém
Aplikace při spuštění zobrazí dva prompty pro zadání sčítanců:
```javascript
useEffect(() => {
  if (!promptyZobrazeny.current) {
    let temp1;
    while (temp1 === null || isNaN(temp1) || temp1.trim() === "") {
      temp1 = prompt("Zadejte prvního člena součtu");
    }
    setScitanec1(temp1);
    // ... podobně pro druhý sčítanec
  }
}, []);
```

### File handling
```javascript
const handleChange = (ev) => {
  const file = ev.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const text = e.target.result;
      handleData(text, id);
    };
  }
};
```

### Timer systém
```javascript
useEffect(() => {
  if (odpocitavani > 0) {
    const casovac = setInterval(() => {
      setOdpocitavani((prevOdpocitavani) => prevOdpocitavani - 1);
    }, 1000);
    return () => clearInterval(casovac);
  }
}, [odpocitavani]);
```

## Závěr

Ice Cream React je komplexní školní projekt, který demonstruje praktické použití Reactu v reálné aplikaci. Kombinuje různé aspekty moderního webového vývoje včetně state managementu, responzivního designu a práce s webovými API. Projekt slouží jako výborný příklad pro studenty, kteří se učí React a chtějí pochopit, jak vytvořit plně funkční webovou aplikaci.

---

**Vytvořeno:** 2025  
**Autor:** Robin Lassak  
**Účel:** Školní cvičení v Reactu