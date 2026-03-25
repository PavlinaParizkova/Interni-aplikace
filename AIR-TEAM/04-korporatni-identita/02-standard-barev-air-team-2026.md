# Standard barev AIR TEAM 2026

#branding #barvy #design-system #airteam

Status: **ZÁVAZNÝ STANDARD (Single Source of Truth)**
Verze: **1.3**
Účinnost od: **2026-03-16**
Změny ve verzi 1.1 (2026-03-22): doplněna aplikační matice barev (tisk, digitál, polepy), tabulka CMYK/RGB pro výrobu, aktualizované odkazy na soubor design tokenů.
Změny ve verzi 1.2 (2026-03-24): doplněny oficiální CSS proměnné z live styleguidu (`--air-*`), sémantické a layoutové tokeny, typografie, spacing, breakpointy, border-radius; opravena URL styleguidu.
Změny ve verzi 1.3 (2026-03-24): přidána sekce 7 – WCAG kontrastní matice (AAA, AA, speciální použití, brand, zakázané kombinace) ze zdroje live.airteam.eu/atm/styleguide-colors.
Vlastník standardu: **Marketing manager / Brand manager**
Schvalovatelé: **Vedení společnosti**

---

## 1) Účel dokumentu

Tento dokument sjednocuje oficiální barevnou paletu AIR TEAM pro webové aplikace, marketingové materiály a interní dokumenty. Cílem je zajistit konzistentní vizuální identitu napříč všemi digitálními výstupy. Standard dále stanovuje **kombinace podkladů a korporátních prvků** (aplikace barev) a **orientační tiskové specifikace** (CMYK) vedle digitálních hodnot (HEX/RGB).

### Závazná pravidla
- Při konfliktu pravidel má tento dokument prioritu pro oblast barevnosti značky.
- Každá nová webová aplikace musí vycházet z tokenů v sekci `6) Implementace pro web`.
- Výjimka je možná pouze po schválení vlastníkem standardu a vedením.

---

## 2) Zdroj standardu

Barvy vycházejí z oficiálního ATM styleguidu:
- https://live.airteam.eu/atm/styleguide

CSS proměnné jsou definovány v produkční šabloně webu:
- https://live.airteam.eu/hubfs/hub_generated/template_assets/1/202064124573/1773149602580/template_main.min.css

Tento dokument převádí styleguide do praktického formátu pro opakované použití v dalších aplikacích.

---

## 3) Primární barvy (Core)

| Název | HEX | RGB | Doporučené použití |
| --- | --- | --- | --- |
| AIR TEAM Red | `#d51c17` | `rgb(213, 28, 23)` | primární CTA, zvýraznění, klíčové akcenty |
| AIR TEAM Blue | `#153151` | `rgb(21, 49, 81)` | hlavní brand barva, header, hlavní plochy |
| AIR TEAM White | `#ffffff` | `rgb(255, 255, 255)` | světlé pozadí, text na tmavém pozadí |
| AIR TEAM Black | `#1d1d1b` | `rgb(29, 29, 27)` | hlavní text, tmavé prvky UI |

### 3.1 Pantone ekvivalenty pro tisk

Pro tiskové materiály, reklamní předměty a výrobu brandovaných nosičů používat následující doporučené Pantone ekvivalenty hlavních značkových barev:

| Název | Digitální barva | Doporučený Pantone | Poznámka |
| --- | --- | --- | --- |
| AIR TEAM Blue | `#153151` | `Pantone 534 C` | doporučený ekvivalent pro potisk, merch a orientační tiskovou shodu |
| AIR TEAM Red | `#d51c17` | `Pantone 485 C` | doporučený ekvivalent pro potisk, merch a orientační tiskovou shodu |

Poznámka: Pantone převod je referenční tiskový ekvivalent. U reklamních předmětů a speciálních materiálů vždy požadovat co nejbližší shodu a ideálně náhled nebo fyzický vzorek před finální výrobou.

### 3.2 Aplikační matice barev

Pro maximální čitelnost a konzistenci značky v různých prostředích (tisk, digitál, polepy) platí následující pravidla kombinace podkladu a korporátních prvků. Názvy barev a tokeny odpovídají tabulkám v této kapitole a v kapitole `4) Rozšířená paleta`.

#### Primární varianta (světlý podklad)

- **Výchozí** pro úřední korespondenci a bílé tiskoviny.
- **Podklad:** AIR TEAM White (`#ffffff`).
- **Logo / text:** plnobarevné provedení AIR TEAM Blue (`#153151`) v kombinaci s AIR TEAM Red (`#d51c17`).

#### Inverzní varianta s červeným akcentem (kombinovaný podklad)

- **Použití:** marketingové materiály, letáky, digitální bannery, kde je na tmavém pozadí potřeba červené.
- **Podklad:** výhradně **Blue V1** (`#10253e`) – nikoli obecná „tmavá modrá“ bez této definice.
- **Prvky:** červené části loga (např. křídla) nebo zvýrazněný text v **AIR TEAM Red** (`#d51c17`).
- **Důvod:** odstín V1 (CMYK 100 / 80 / 40 / 57) poskytuje dostatečný jasový kontrast vůči červené; u základní tmavě modré (`#153151`) nelze tento kontrast spolehlivě zajistit.

#### High-contrast varianta (pouze modrá a bílá)

- **Použití:** technická dokumentace, certifikace (např. Part 21J, 21G, 145), kde není žádoucí červený akcent.
- **Podklad:** nejtmavší **AIR TEAM Blue** (`#153151`).
- **Prvky:** texty a loga v **AIR TEAM White** (`#ffffff`) nebo ve světlých odstínech **Black V3** / **Black V4** (`#d0d0d0`, `#e3e3e3`).
- **Omezení:** v této konfiguraci je **zakázáno** používat korporátní červenou kvůli nízkému kontrastu.

### 3.3 Technické hodnoty pro výrobu (tisk / digitál)

Orientační hodnoty pro separaci a digitální výstupy. U finálního tisku a speciálních materiálů doplňovat kontrolu podle §3.1 (Pantone) a tiskového proofu.

| Prvek | HEX | CMYK (tisk) | RGB (digitál) |
| --- | --- | --- | --- |
| Základní modrá | `#153151` | 100 / 80 / 40 / 37 | 21 / 49 / 81 |
| Podkladová V1 | `#10253e` | 100 / 80 / 40 / 57 | 16 / 37 / 62 |
| Korporátní červená | `#d51c17` | 9 / 98 / 100 / 1 | 213 / 28 / 23 |

RGB hodnoty vycházejí z oficiálního HEX; strojově čitelná stejná data jsou v souboru `05-air-team-color-tokens.json` (`productionSpecs`).

---

## 4) Rozšířená paleta

### 4.1 Blue variants

| Token | HEX | RGB |
| --- | --- | --- |
| Blue V1 | `#10253e` | `rgb(16, 37, 62)` |
| Blue V2 | `#1b3f67` | `rgb(27, 63, 103)` |
| Blue V3 | `#23517c` | `rgb(35, 81, 124)` |
| Blue V4 | `#507499` | `rgb(80, 116, 153)` |
| Blue V5 | `#93b3cf` | `rgb(147, 179, 207)` |

### 4.2 Blue alternates

| Token | HEX | RGB |
| --- | --- | --- |
| Blue A1 | `#302f2e` | `rgb(48, 47, 46)` |
| Blue A2 | `#2b4156` | `rgb(43, 65, 86)` |
| Blue A3 | `#323e49` | `rgb(50, 62, 73)` |
| Blue A4 | `#4d606f` | `rgb(77, 96, 111)` |
| Blue A5 | `#cddce8` | `rgb(205, 220, 232)` |

### 4.3 Black variants

| Token | HEX | RGB |
| --- | --- | --- |
| Black V1 | `#4a4a49` | `rgb(74, 74, 73)` |
| Black V2 | `#878787` | `rgb(135, 135, 135)` |
| Black V3 | `#d0d0d0` | `rgb(208, 208, 208)` |
| Black V4 | `#e3e3e3` | `rgb(227, 227, 227)` |

---

## 5) Praktické mapování barev v UI

### 5.1 Sémantické tokeny (live web – závazné názvy proměnných)

Toto jsou přesné CSS proměnné používané na produkčním webu AIR TEAM. Každá nová webová aplikace MUSÍ dodržovat tato přiřazení.

| CSS proměnná | Odkazuje na | Hodnota | Použití |
| --- | --- | --- | --- |
| `--primary-color` | `--air-red` | `#d51c17` | CTA tlačítka, primární akcent, hover stavy |
| `--primary-dark` | `--air-blue-v1` | `#10253e` | hover stav primárního prvku |
| `--primary-light` | `--air-blue-v5` | `#93b3cf` | světlé akcenty, focus ringy |
| `--secondary-color` | `--air-blue` | `#153151` | sekundární tlačítka, brand modrá |
| `--secondary-dark` | `--air-blue-v1` | `#10253e` | hover stav sekundárního prvku |
| `--secondary-light` | `--air-blue-v5` | `#93b3cf` | světlé akcenty sekundárního prvku |
| `--text-color` | `--air-black` | `#1d1d1b` | hlavní text |
| `--text-light` | `--air-black-v2` | `#878787` | popis, sekundární text, metadata |
| `--bg-color` | `--air-white` | `#ffffff` | výchozí pozadí stránek |
| `--bg-light` | `--air-black-v4` | `#e3e3e3` | světlé karty, zebra stripy, disabled prvky |
| `--border-color` | `--air-black-v3` | `#d0d0d0` | rámy, oddělovače, inputy |
| `--dark-bg` | `--air-blue-v1` | `#10253e` | tmavé sekce, dark-mode plochy, footery |
| `--dark-text` | `--air-white` | `#ffffff` | text na tmavém pozadí |

### 5.2 Kombinační pravidla pro tlačítka

| Typ tlačítka | Pozadí | Rámeček | Text | Hover pozadí |
| --- | --- | --- | --- | --- |
| `.btn-primary` | `--primary-color` (#d51c17) | `--primary-color` | bílá | 10 % tmavší červená |
| `.btn-secondary` | `--secondary-color` (#153151) | `--secondary-color` | bílá | `--secondary-dark` (#10253e) |
| `.btn-primary-inverted` | bílá | `--primary-color` | `--primary-color` | #d51c17 + bílý text |
| `.btn-secondary-inverted` | bílá | `--secondary-color` | `--secondary-color` | #153151 + bílý text |
| `.btn-white` | bílá | bílá | černá | 80 % bílá |
| `.btn-transparent` | rgba(0,0,0,0.2) + blur | bílá | bílá | rgba(255,255,255,0.2) |

### 5.3 Kombinační pravidla pro tabulky

| Styl | Záhlaví (`thead th`) | Řádky těla (`tbody tr`) | Zápatí (`tfoot`) |
| --- | --- | --- | --- |
| **Default** | pozadí `--air-blue-v5`, text bílý | liché: bílé pozadí, sudé: `--air-blue-a5` pozadí; text `--air-blue` | pozadí `--air-blue-v5`, text bílý |
| **`.table-light`** | pozadí `--air-black-v4`, text `--air-blue-v2` | všechny řádky bílé (`--air-white`), text `--air-blue-v2`; rozdíl jen v borderu `<td>`: liché `1px solid --air-blue-a5`, sudé `1px solid --air-blue-v5` | pozadí `--air-blue-a5`, text `--air-blue-v3` |
| **`.table-dark`** | pozadí `--air-blue`, text bílý | liché: pozadí `--air-blue-v4`, sudé: pozadí `--air-blue-v3`; text bílý | pozadí `--air-blue`, text bílý |

> **Klíčové:** U `.table-light` se alternace NEREALIZUJE barvou pozadí řádku, ale barvou **borderu na buňkách `<td>`**. Pozadí všech řádků zůstává bílé.

### 5.4 Interaktivní prvky – focus a validace

| Stav | Barva | CSS hodnota |
| --- | --- | --- |
| Focus ring (input) | modrá | `box-shadow: 0 0 0 3px rgba(80,116,153,0.1)` + `--air-blue-v4` border |
| Focus border | `--air-blue-v4` | `#507499` |
| Chyba / invalid | červená | `#e74c3c` (výjimka – není v primární paletě, slouží výhradně pro formulářové chyby) |
| Kód inline | červená | `#e74c3c` (totéž – výhradně pro `code` element) |

### 5.5 Mapování pro vlastní aplikace (sémantické zkratky)

Pro vnitřní aplikace mimo HubSpot styleguide lze použít zkrácené aliasy:

- `brand-primary`: AIR TEAM Blue (`#153151`)
- `brand-accent`: AIR TEAM Red (`#d51c17`)
- `text-primary`: AIR TEAM Black (`#1d1d1b`)
- `text-on-dark`: AIR TEAM White (`#ffffff`)
- `surface-muted`: Black V4 (`#e3e3e3`)
- `border-default`: Black V3 (`#d0d0d0`)
- `link-default`: Blue V3 (`#23517c`)
- `link-hover`: Blue V2 (`#1b3f67`)

---

## 6) Implementace pro web (copy/paste)

### 6.1 CSS custom properties – oficální live systém (`--air-*`)

Toto je **závazný zdrojový kód** přesně odpovídající produkčnímu webu AIR TEAM. Při tvorbě nových webových aplikací nebo šablon vždy vycházej z tohoto bloku.

```css
:root {
  /* === BARVY – Core === */
  --air-red: #d51c17;
  --air-blue: #153151;
  --air-white: #ffffff;
  --air-black: #1d1d1b;

  /* Blue variants */
  --air-blue-v1: #10253e;
  --air-blue-v2: #1b3f67;
  --air-blue-v3: #23517c;
  --air-blue-v4: #507499;
  --air-blue-v5: #93b3cf;

  /* Blue alternates */
  --air-blue-a1: #302f2e;
  --air-blue-a2: #2b4156;
  --air-blue-a3: #323e49;
  --air-blue-a4: #4d606f;
  --air-blue-a5: #cddce8;

  /* Black variants */
  --air-black-v1: #4a4a49;
  --air-black-v2: #878787;
  --air-black-v3: #d0d0d0;
  --air-black-v4: #e3e3e3;

  /* === SÉMANTICKÉ ALIASY – barvy === */
  --primary-color: var(--air-red);
  --primary-dark: var(--air-blue-v1);
  --primary-light: var(--air-blue-v5);
  --secondary-color: var(--air-blue);
  --secondary-dark: var(--air-blue-v1);
  --secondary-light: var(--air-blue-v5);
  --text-color: var(--air-black);
  --text-light: var(--air-black-v2);
  --bg-color: var(--air-white);
  --bg-light: var(--air-black-v4);
  --border-color: var(--air-black-v3);
  --dark-bg: var(--air-blue-v1);
  --dark-text: var(--air-white);

  /* === LAYOUT === */
  --page-width: 1400px;
  --menu-width: var(--page-width);
  --content-width: 1200px;
  --column-gap: 2.13%;
  --column-width-multiplier: 8.333;

  /* === BREAKPOINTY === */
  --desktop-bp: 1200px;
  --tablet-bp: 768px;
  --mobile-bp: 480px;

  /* === SPACING === */
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */

  /* === TYPOGRAFIE === */
  --font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-mono: "Courier New", Courier, monospace;
  --font-family-icons: "FontAwesome";

  /* === BORDER RADIUS === */
  --border-radius-sm: 3px;
  --border-radius: 5px;
  --border-radius-lg: 10px;
}
```

### 6.2 CSS custom properties – zkrácené aliasy pro vlastní aplikace (`--at-*`)

Pokud live webová šablona není základnou (např. interní nástroje, Next.js aplikace), lze použít zkrácené tokeny. Barvy MUSÍ být identické s hodnotami výše.

```css
:root {
  /* Core */
  --at-red: #d51c17;
  --at-blue: #153151;
  --at-white: #ffffff;
  --at-black: #1d1d1b;

  /* Blue variants */
  --at-blue-v1: #10253e;
  --at-blue-v2: #1b3f67;
  --at-blue-v3: #23517c;
  --at-blue-v4: #507499;
  --at-blue-v5: #93b3cf;

  /* Blue alternates */
  --at-blue-a1: #302f2e;
  --at-blue-a2: #2b4156;
  --at-blue-a3: #323e49;
  --at-blue-a4: #4d606f;
  --at-blue-a5: #cddce8;

  /* Black variants */
  --at-black-v1: #4a4a49;
  --at-black-v2: #878787;
  --at-black-v3: #d0d0d0;
  --at-black-v4: #e3e3e3;

  /* Semantic aliases for app use */
  --color-brand-primary: var(--at-blue);
  --color-brand-accent: var(--at-red);
  --color-text-primary: var(--at-black);
  --color-text-on-dark: var(--at-white);
  --color-surface-muted: var(--at-black-v4);
  --color-border-default: var(--at-black-v3);
}
```

### 6.3 Typografická škála (z live styleguidu)

| Úroveň | Mobile | Tablet (≥768px) | Desktop (≥1200px) | Váha |
| --- | --- | --- | --- | --- |
| H1 | 2rem | 2.5rem | 3rem | 700 |
| H2 | 1.75rem | 2rem | 2.25rem | 600 |
| H3 | 1.5rem | 1.75rem | 2rem | 600 |
| H4 | 1.25rem | 1.5rem | 1.625rem | 600 |
| H5 | 1.125rem | 1.25rem | 1.375rem | 600 |
| H6 | 1rem | 1.125rem | 1.25rem | 600 |
| Odstavec | 1rem | 1rem | 1rem | 400 |
| `.text-large` | 1.125rem | — | — | 400 |
| `.text-small` | 0.875rem | — | — | 400 |

Základní řádkování: `line-height: 1.6`. Písmo: **Poppins** (primárně), fallback systémová sans-serif.

### 6.4 Doporučení pro přístupnost

- U textu vždy držet kontrast minimálně WCAG AA.
- Červenou (`#d51c17`) nepoužívat jako jediný nosič informace (doplnit ikonou nebo textem).
- Pro malé texty na bílém pozadí preferovat tmavší odstíny (`#1d1d1b`, `#153151`, `#10253e`).
- Barva `#e74c3c` (formulářové chyby, inline `code`) není součástí primární palety – používá se výhradně pro systémové stavové prvky.

### 6.5 Tailwind (`tailwind.config.ts`)

```ts
import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        at: {
          red: "#d51c17",
          blue: "#153151",
          white: "#ffffff",
          black: "#1d1d1b",
          blueV1: "#10253e",
          blueV2: "#1b3f67",
          blueV3: "#23517c",
          blueV4: "#507499",
          blueV5: "#93b3cf",
          blueA1: "#302f2e",
          blueA2: "#2b4156",
          blueA3: "#323e49",
          blueA4: "#4d606f",
          blueA5: "#cddce8",
          blackV1: "#4a4a49",
          blackV2: "#878787",
          blackV3: "#d0d0d0",
          blackV4: "#e3e3e3",
        },
      },
    },
  },
} satisfies Config;
```

### 6.6 JSON design tokens

Pro sdílení napříč aplikacemi je připraven samostatný soubor ve formátu [Design Tokens Community Group](https://design-tokens.github.io/community-group/format/):

- [`AIR-TEAM/04-korporatni-identita/05-air-team-color-tokens.json`](05-air-team-color-tokens.json)

Soubor obsahuje kromě `color.core`, variant a `color.semantic` také **`applicationMatrix`** (aplikace barev podle §3.2) a **`productionSpecs`** (HEX, CMYK, RGB podle §3.3). Při rozporu mezi tímto markdown dokumentem a JSON upřednostnit tento standard; JSON udržovat s ním v souladu.

---

## 7) WCAG kontrastní matice

Zdroj: https://live.airteam.eu/atm/styleguide-colors – doplňuje §3.2 aplikační matice a §6.4 doporučení pro přístupnost.

Matice popisuje, které barevné kombinace jsou bezpečné pro text a UI prvky z hlediska WCAG (Web Content Accessibility Guidelines). Kontrast je uveden jako poměr (čím vyšší, tím lepší čitelnost).

### 7.1 Doporučené kombinace (WCAG AAA)

Vhodné pro jakýkoliv text (i drobný) na libovolném zařízení.

> **Poznámka k high-contrast variantě:** Pro čitelný obsah na nejtmavší modři používejte `#153151` + `#ffffff` (viz karta „Bílá na ATM Blue"). V této konfiguraci **nepoužívejte červenou** u textu ani běžných UI prvků.

| Kombinace | Text | Pozadí | Kontrast |
| --- | --- | --- | --- |
| ATM Black na Bílé | `#1d1d1b` | `#ffffff` | 16,6 : 1 |
| Blue V1 na Bílé | `#10253e` | `#ffffff` | 15,1 : 1 |
| ATM Blue na Bílé | `#153151` | `#ffffff` | 12,3 : 1 |
| Bílá na ATM Blue | `#ffffff` | `#153151` | 12,3 : 1 |
| Blue A1 na Bílé | `#302f2e` | `#ffffff` | 11,6 : 1 |
| Blue V1 na Blue A5 | `#10253e` | `#cddce8` | 10,2 : 1 |

### 7.2 Dobře použitelné kombinace (WCAG AA)

Standardní čitelnost – bezpečné pro běžný text i brandové prvky.

| Kombinace | Text | Pozadí | Kontrast |
| --- | --- | --- | --- |
| Bílá na ATM Red | `#ffffff` | `#d51c17` | 5,1 : 1 |
| ATM Red na Bílé | `#d51c17` | `#ffffff` | 5,1 : 1 |
| Blue V4 na Bílé | `#507499` | `#ffffff` | 4,9 : 1 |
| Blue V5 na ATM Blue | `#93b3cf` | `#153151` | 4,6 : 1 |

### 7.3 Pro speciální použití

Pouze pro **velký text (nad 24 px), ikony nebo deaktivované prvky**. Nesmí se použít pro běžný text v odstavcích ani v navigaci.

| Kombinace | Text / ikona | Pozadí | Kontrast |
| --- | --- | --- | --- |
| ATM Red na Black V4 | `#d51c17` | `#e3e3e3` | 4,1 : 1 |
| ATM Red na Blue A5 | `#d51c17` | `#cddce8` | 3,7 : 1 |
| Black V2 na Bílé | `#878787` | `#ffffff` | 3,6 : 1 |

### 7.4 Brand – pouze logo / schválené korporátní prvky

Není náhradou za WCAG u běžného textu. Červený akcent dle manuálu je na tmavém podkladu povolen **jen na AIR TEAM Blue V1 (`#10253e`)** u částí loga nebo zvýraznění definovaných brandem – **ne** pro běžné odstavce, navigaci ani CTA copy.

| Kombinace | Prvek | Pozadí | Kontrast | Podmínka použití |
| --- | --- | --- | --- | --- |
| ATM Red na Blue V1 | `#d51c17` | `#10253e` | (brand) | výhradně logo / schválené korporátní prvky |

### 7.5 Zakázané kombinace (text, ikony UI)

Kriticky nízký kontrast pro **běžný text a ikony v UI**. **Nepoužívat** pro žádný typ textu ani ikon.

> **Upozornění:** Červená na ATM Blue (`#153151`) zůstává u textu/UI zakázaná i tehdy, kdy by mohla vypadat jako brand prvek. Na **Blue V1 (`#10253e`)** smí červená figurovat jen jako brand akcent (viz §7.4).

| Kombinace | Text / ikona | Pozadí | Kontrast | Důvod zákazu |
| --- | --- | --- | --- | --- |
| ATM Red na ATM Blue | `#d51c17` | `#153151` | 2,4 : 1 | kriticky nízký kontrast |
| ATM Black na ATM Red | `#1d1d1b` | `#d51c17` | 3,3 : 1 | nesplňuje WCAG AA |
| Bílá na Blue V5 | `#ffffff` | `#93b3cf` | 2,2 : 1 | kriticky nízký kontrast |
| Black V3 na Bílé | `#d0d0d0` | `#ffffff` | 1,8 : 1 | kriticky nízký kontrast |

---

## 8) Kontrolní checklist před publikací

- [ ] Jsou použity pouze barvy z tohoto standardu?
- [ ] Jsou v aplikaci použity semantické tokeny (ne hardcoded barvy)?
- [ ] Splňuje text a UI prvky minimálně WCAG AA kontrast?
- [ ] Je CTA hierarchie konzistentní (`brand-primary` vs `brand-accent`)?
- [ ] Odpovídá výstup aktuální vizuální identitě AIR TEAM?

---

## 9) Návazné dokumenty

- `05-air-team-color-tokens.json` (design tokeny, matice, výrobní specifikace)
- `04-graficke-podklady-a-vizualni-smer-2026.md`
- `firemni-hodnoty-air-team.md`
- `strategie-loga-air-team-2026.md`
- `strategie-albatros-air-team-2026.md`
- `eticky-kodex-air-team-2026.md`

