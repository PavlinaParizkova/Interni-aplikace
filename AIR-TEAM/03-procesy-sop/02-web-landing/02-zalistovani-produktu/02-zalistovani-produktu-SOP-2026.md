# Zalistování nových produktů – SOP (pracovní postup)

#marketing #sop #web #produkty #seo #ppc

**Vlastník:** Digital specialist – Tomáš Hrdina
**Vazba na Proces:** `02b-zalistovani-produktu-PROCES-2026.md`
**ClickUp list:** Web & landing page → Zalistování produktů

---

## Kdy se tento postup používá

Při každém přidání nebo aktualizaci produktu na:
- e-shopu (Upgates nebo jiné CMS)
- produktových stránkách webu
- partnerských listinzích

---

## Krok 1: Příjem podkladů pro produkt

### Kdo dodává podklady
Obchod nebo produktový manažer.

### Povinné podklady (bez nich se nezačíná)
- [ ] Název produktu (obchodní i technický)
- [ ] Kategorie (kam na e-shopu patří)
- [ ] Krátký popis (1–3 věty pro výpis kategorií)
- [ ] Dlouhý popis / technická specifikace
- [ ] Parametry (rozměry, váha, kompatibilita, certifikace)
- [ ] Fotografie (min. 3 fotek, min. 1000 px, bílé pozadí) nebo pokyn na focení
- [ ] Doporučená prodejní cena (pokud se zobrazuje)
- [ ] Dostupnost / EAN / SKU
- [ ] Manuál nebo dokumentace (PDF, pokud relevantní)

### Pokud podklady chybí
Pošli e-mail zadavateli:

```
Ahoj,
k zalistování produktu [název] potřebuji doplnit:
- [seznam chybějících podkladů]

Deadline pro podklady: [datum]
Produkt nelze zalistovat bez těchto informací.
```

---

## Krok 2: Příprava fotografií

Pokud fotografie nejsou dodány nebo nesplňují standardy:
1. Založ task v ClickUp → Grafika&Foto&Video: „Produktová fotografie – [název produktu]"
2. Brief pro fotografa: viz `09-grafika-foto-video-SOP-2026.md`
3. Fotografie musí splňovat:
   - [ ] Min. 1000 × 1000 px (ideálně 2000 × 2000 px pro zoom)
   - [ ] Bílé nebo čisté neutrální pozadí
   - [ ] Bez loga vodoznaku (pokud to není brand standard)
   - [ ] Formát JPG, max. 500 KB po kompresi

---

## Krok 3: Analýza klíčových slov

> Tento krok provádíš při každém **novém** zalistování. Při aktualizaci stávajícího produktu krok přeskoč, pokud analýza proběhla v posledních 6 měsících.

### Kdy analýzu dělat
- Nový produkt (ještě nemá URL na webu)
- Produkt v kategorii bez organického trafficu (ověř v Search Console)
- Plánovaná PPC kampaň na tento produkt

### Nástroje

| Nástroj | K čemu |
|---------|--------|
| Google Keyword Planner | Objem hledání, CPC odhad pro PPC |
| Google Search Console | Co reálně přivádí traffic na podobné produkty |
| Ahrefs / Semrush | Analýza konkurence, keyword gap |
| Hledací lišta Google | Autocomplete, „Lidé se také ptají" |

### Co hledat

**Hlavní klíčové slovo** (1 na produkt) — obchodní intent:
- obsahuje název výrobce + model nebo typ produktu
- příklady: `garmin gi 275 koupit`, `efis displej do cessny`, `avionika pilot shop`

**Vedlejší klíčová slova** (2–4) — synonyma, alternativní výrazy:
- technické varianty názvu: `GI275`, `garmin gi-275`, `záložní palubní přístroj`
- use-case výrazy: `retrofit avioniky`, `upgrade kokpitu`

**Long-tail klíčová slova** — nízká konkurence, konkrétní záměr:
- `garmin gi 275 cena`, `gi 275 instalace cessna 172`, `certifikace efis displeje`

**Výstup analýzy — vyplň tabulku:**

```
| Klíčové slovo              | Hledanost/měs | Konkurence | Použití              |
|----------------------------|--------------|------------ |----------------------|
| [hlavní KW]                |              | nízká/stř/vys | H1, meta title       |
| [vedlejší KW 1]            |              |             | popis, parametry     |
| [vedlejší KW 2]            |              |             | alt text, slug       |
| [long-tail 1]              |              |             | FAQ nebo popis       |
| [long-tail 2]              |              |             | PPC negative list    |
```

Tabulku vlož jako komentář do ClickUp tasku produktu.

---

## Krok 4: Tvorba produktového textu – SEO

### 4.1 Produktový název (H1 / název v e-shopu)

**Vzorec:** `[Výrobce] [Model] – [Klíčový benefit nebo typ produktu]`

| Správně | Špatně |
|---------|--------|
| `Garmin GI 275 – záložní digitální palubní přístroj` | `GI275 avionika` |
| `Bose A20 – aktivní potlačení hluku, headset pro piloty` | `Bose headset letecký` |
| `Garmin GTX 345 – ADS-B transpondér s TCAS` | `Transpondér Garmin` |

**Pravidla:**
- Max 70 znaků
- Hlavní klíčové slovo na začátku (nebo co nejdříve)
- Výrobce + model vždy, pokud je produkt OEM (zákazníci hledají přesně)
- Typ produktu nebo klíčový benefit za pomlčkou

---

### 4.2 Krátký popis (výpis kategorií, max 3 věty)

**Vzorec:** Situace (pro koho) → co produkt řeší → klíčový parametr nebo certifikace

**Šablona:**
```
Pro [cílovka], kteří potřebují [problém nebo situace].
[Název produktu] [klíčová funkce nebo benefit].
[Technický detail nebo certifikace, která potvrzuje důvěryhodnost].
```

**Příklad:**
```
Pro piloty, kteří hledají spolehlivou zálohu přístrojů v kokpitu.
Garmin GI 275 je certifikovaný EFIS displej s intuitivním dotykovým ovládáním.
Plně TSO certifikovaný, kompatibilní s většinou letadel kategorie GA.
```

**Zakázáno v krátkém popisu:**
- „nejlepší", „špičkový", „revoluční" bez konkrétního důkazu
- interní zkratky bez vysvětlení
- cena nebo obchodní podmínky

---

### 4.3 Dlouhý popis (stránka produktu)

**Struktura:**

```
## [Název produktu] – [Krátký podnázev nebo claim]

[Úvod: 2–3 věty – pro koho je produkt a jaký problém řeší]

### Proč [Název produktu]

- [Benefit 1]: [1 věta vysvětlení]
- [Benefit 2]: [1 věta vysvětlení]
- [Benefit 3]: [1 věta vysvětlení]
- [Benefit 4 – volitelný]
- [Benefit 5 – volitelný]

### Technické parametry

| Parametr           | Hodnota |
|--------------------|---------|
| [Parametr 1]       | [hodnota + jednotka] |
| [Parametr 2]       | [hodnota] |
| Certifikace        | [TSO-C..., EASA, FAA] |
| Kompatibilita      | [typy letadel nebo systémů] |

### Certifikace a schválení

[1–2 věty o certifikacích a co to znamená pro zákazníka – bezpečnost, legálnost instalace]

[CTA věta: „Máte otázku k instalaci nebo kompatibilitě? Kontaktujte náš technický tým."]
```

**Pravidla pro odrážky:**
- Začínaj **benefitem**, ne technickou funkcí
  - Správně: „Přesná poloha i bez GPS signálu díky záložnímu AHRS"
  - Špatně: „Integrovaný AHRS modul"
- Každá odrážka max 1–2 věty
- Vyhni se opakování slov z nadpisu v každé odrážce

**Pravidla pro parametry:**
- Vždy uváděj jednotky (kg, mm, V, W, dB)
- Certifikace vypisuj přesně (TSO-C2e, ne jen „TSO")
- Kompatibilitu uváděj konkrétně (Cessna 172, PA-28, ne „různá letadla")

---

### 4.4 Meta title

**Vzorec:** `[Produktový název] | AIR TEAM`

| | Příklad |
|--|---------|
| Správně | `Garmin GI 275 – záložní EFIS displej \| AIR TEAM` |
| Špatně | `Produkt - AIR TEAM e-shop` |

**Pravidla:**
- Max 60 znaků (včetně ` | AIR TEAM`)
- Hlavní klíčové slovo co nejdříve
- Pipe `|` jako oddělovač značky

---

### 4.5 Meta description

**Vzorec:** `[Klíčový benefit]. [Certifikace nebo technický detail]. [CTA].`

**Šablona:**
```
[Produktový název] – [benefit pro pilota nebo techniku]. [Certifikace/kompatibilita]. Objednávejte online nebo se poraďte s naším týmem.
```

**Příklad:**
```
Garmin GI 275 – záložní EFIS displej s dotykovým ovládáním pro GA letadla. TSO certifikovaný, snadná instalace. Objednávejte online nebo se poraďte s naším týmem.
```

**Pravidla:**
- Max 156 znaků
- Obsahuje hlavní klíčové slovo
- Musí končit CTA výzvou (Objednávejte / Poraďte se / Zjistěte více)
- Nepsat jako seznam, psát jako větu nebo dvě věty

---

### 4.6 URL slug

**Vzorec:** `[vyrobce]-[model]-[typ-produktu]`

| Správně | Špatně |
|---------|--------|
| `garmin-gi-275-efis` | `gi275-produkt-123` |
| `bose-a20-headset-pilot` | `bose_A20_headset` |
| `garmin-gtx-345-adsb-transpondér` → `garmin-gtx-345-adsb` | `garmin-gtx-345-transpondér` (diakritika) |

**Pravidla:**
- Pouze malá písmena, bez diakritiky, oddělovač `-`
- Max 5–7 slov
- Nikdy neměnit slug po indexaci (přerušení SEO, nutné přesměrování 301)

---

### 4.7 Alt texty fotografií

**Vzorec:** `[Název produktu] – [co přesně na fotce vidíme]`

| Fotka | Alt text |
|-------|---------|
| Hlavní produktová (na bílém pozadí) | `Garmin GI 275 – digitální palubní přístroj EFIS` |
| Detail tlačítek nebo displeje | `Garmin GI 275 – dotykový displej, detail ovládání` |
| V kokpitu nebo při instalaci | `Garmin GI 275 – montáž v přístrojové desce Cessna 172` |
| Krabice / příslušenství | `Garmin GI 275 – obsah balení, kabeláž a montážní prvky` |

---

## Krok 5: PPC připravenost produktu

> Tento krok proveď vždy při zalistování nového produktu. Pokud produkt nebude v Google Shopping ani Search kampani, krok přeskoč – ale zaznamenej to do ClickUp tasku.

### 5.1 Google Shopping (Merchant Center) – kontrola feedu

Merchant Center feed se synchronizuje automaticky z e-shopu (Upgates → Merchant Center). Při zalistování ověř:

**Povinná pole feedu:**

| Pole | Hodnota / pravidlo |
|------|--------------------|
| `id` | SKU produktu (unikátní, neměnit po vytvoření) |
| `title` | Produktový název dle vzorce z Kroku 4.1 (max 150 znaků) |
| `description` | Dlouhý popis bez HTML tagů (max 5000 znaků) |
| `image_link` | URL hlavní fotky, HTTPS, min. 250×250 px |
| `price` | Cena s měnou (např. `4990 CZK`) – musí odpovídat ceně na webu |
| `brand` | Výrobce (Garmin, Bose, …) |
| `gtin` nebo `mpn` | GTIN (EAN/UPC) nebo MPN (výrobní číslo) – alespoň jedno |
| `product_type` | Dle kategorie e-shopu (př. `Avionika > Záložní přístroje`) |

**Checklist Shopping feedu:**
- [ ] Všechna povinná pole jsou vyplněna
- [ ] Cena v Merchant Center odpovídá ceně na webu (jinak odmítnutí)
- [ ] Hlavní fotka je na bílém pozadí bez loga přes produkt (Shopping odmítá watermarky)
- [ ] Produkt nemá stav `Disapproved` v Merchant Center (zkontroluj po zalistování)

### 5.2 Google Search Ads – RSA texty (Responsive Search Ads)

Při zalistování nového produktu připrav podklady pro PPC specialistu. Vyplň tabulku do ClickUp tasku:

**Vzorec Headline (max 30 znaků každý):**

```
Headline varianty (připrav min. 6):
H1: [Výrobce + Model]               → např. "Garmin GI 275"
H2: [Typ produktu]                  → "Záložní EFIS displej"
H3: [Klíčový benefit]               → "Certifikovaný pro GA"
H4: [Cílová skupina]                → "Pro piloty GA letadel"
H5: [Urgence nebo nabídka]          → "Skladem, rychlé dodání"
H6: [Důvěra]                        → "Autorizovaný prodejce"
```

**Vzorec Description (max 90 znaků každý):**

```
D1: [Benefit] + [Certifikace/důkaz]. [CTA].
    → "Záložní přístroj s TSO certifikací. Poraďte se s naším technikem."

D2: [Situace/problém] + [Řešení]. [CTA].
    → "Retrofit kokpitu bez kompromisů. Objednávejte online nebo volejte."
```

### 5.3 Negative keywords – doplnit při zalistování

Při přidání nového produktu do PPC kampání doplň negativní klíčová slova do příslušného ad setu:

**Standardní negatives pro produktové kampaně:**
- `zdarma`, `zadarmo`, `free`
- `návod`, `manuál pdf`, `download`, `ke stažení`
- `bazar`, `použitý`, `second hand`, `ojetý`
- `oprava`, `servis` (pokud neděláme servis tohoto produktu)
- jméno konkurenčního modelu (pokud není záměrem cílení na konkurenci)

**Akci:** Pošli PPC specialistovi e-mail nebo přidej komentář do ClickUp PPC tasku:

```
Ahoj,
zalistováváme nový produkt: [název].
URL: [odkaz]
Klíčová slova pro kampaň: [seznam z Kroku 3]
Navrhuji přidat negative keywords: [seznam]
RSA texty: [tabulka H1–H6 + D1–D2]
```

### 5.4 UTM parametry pro tracking

Pokud produkt má vlastní landing page nebo je součástí promo kampaně, nastav UTM:

```
utm_source=google
utm_medium=cpc
utm_campaign=[nazev-kampane]-[rok]-[mesic]
utm_content=[nazev-produktu-slug]
```

Příklad:
```
https://airteam.eu/garmin-gi-275-efis?utm_source=google&utm_medium=cpc&utm_campaign=avionika-2026-04&utm_content=garmin-gi-275
```

Odkaz s UTM vlož do ClickUp PPC tasku pro tracking výkonu produktu.

---

## Šablona produktového textu (copy/paste)

Vyplň tuto šablonu pro každý nový produkt před zalistováním:

```markdown
## Produktový text – [NÁZEV PRODUKTU]

### Analýza klíčových slov
Hlavní KW: 
Vedlejší KW: 
Long-tail KW: 

### Název produktu (H1)
[Výrobce] [Model] – [Benefit nebo typ produktu]
(max 70 znaků, KW na začátku)

### Krátký popis (výpis kategorií)
Pro [cílovka], kteří [situace].
[Název] [benefit].
[Certifikace nebo důkaz].

### Dlouhý popis

#### [Název produktu] – [Claim]

[Úvod 2–3 věty – pro koho a co řeší]

#### Proč [Název produktu]

- [Benefit 1]:
- [Benefit 2]:
- [Benefit 3]:
- [Benefit 4]:

#### Technické parametry

| Parametr     | Hodnota |
|--------------|---------|
|              |         |
| Certifikace  |         |
| Kompatibilita|         |

#### Certifikace a schválení
[1–2 věty]

[CTA věta]

### Meta title
[Produktový název] | AIR TEAM
(max 60 znaků)

### Meta description
[Benefit]. [Certifikace/detail]. [CTA].
(max 156 znaků)

### URL slug
[vyrobce]-[model]-[typ]

### Alt texty
Hlavní foto: 
Detail: 
V použití: 

### PPC – RSA Headlines (max 30 znaků)
H1:
H2:
H3:
H4:
H5:
H6:

### PPC – RSA Descriptions (max 90 znaků)
D1:
D2:

### Shopping feed – ověření
- [ ] title vyplněn dle vzorce
- [ ] gtin nebo mpn doplněno
- [ ] image_link funkční
- [ ] cena odpovídá webu
```

---

## Krok 6: Zalistování v e-shopu / CMS

1. Přihlaš se do admin.
2. Produkty → Přidat nový produkt.
3. Vyplň dle šablony z Kroku 4:
   - [ ] Název produktu (H1 dle vzorce)
   - [ ] Kategorie
   - [ ] Krátký popis (dle šablony 4.2)
   - [ ] Dlouhý popis (dle struktury 4.3)
   - [ ] Parametry a specifikace (tabulka)
   - [ ] Cena (pokud zobrazována)
   - [ ] EAN / SKU
   - [ ] Dostupnost
4. Nahraj fotografie (pořadí: hlavní bílé pozadí → detail → v použití).
5. Nastav URL slug, meta title, meta description (dle Kroku 4.4–4.6).
6. Nahraj manuál nebo dokumentaci (PDF link nebo příloha).
7. Nastav stav: **Draft** (nepublikovat bez QA).

---

## Krok 7: QA checklist před publikací

### Obsah a SEO
- [ ] Název produktu odpovídá vzorci (Výrobce + Model + Benefit), max 70 znaků
- [ ] Hlavní klíčové slovo je v H1
- [ ] Meta title ≤ 60 znaků a obsahuje hlavní klíčové slovo
- [ ] Meta description ≤ 156 znaků a obsahuje CTA
- [ ] Alt texty všech fotografií jsou vyplněny (popisné, ne jen „foto")
- [ ] URL slug je dle vzorce (malá písmena, bez diakritiky, pomlčky)
- [ ] Popis neobsahuje zakázané formulace (superlativy bez důkazu, interní ceny nebo marže)
- [ ] Certifikace jsou uvedeny přesně (TSO číslo, EASA, FAA)

### Vizuální a technická kontrola
- [ ] Název produktu je konzistentní (e-shop, web, cenník)
- [ ] Fotografie se správně zobrazují (žádná nechybí, žádná je pixelovaná)
- [ ] URL slug je správný a nevede na 404
- [ ] Cena je správná (pokud zobrazována)
- [ ] Kategorie je správná
- [ ] Produkt je viditelný ve správné kategorii ve frontend view (zkontroluj jako návštěvník)

### PPC (pokud je produkt součástí kampaní)
- [ ] Shopping feed: všechna povinná pole vyplněna, Merchant Center nevykazuje Disapproved
- [ ] RSA texty připraveny a předány PPC specialistovi
- [ ] Negative keywords doplněny do příslušné kampaně
- [ ] UTM parametr nastaven na produktové URL (pokud je landing page)

---

## Krok 8: Publikace a oznámení

1. Změň stav na **Publikováno**.
2. Zkopíruj živou URL a vlož do ClickUp tasku.
3. Informuj zadavatele (obchod):

```
Ahoj,
produkt [název] byl zalistován.

Živá URL: [odkaz]
E-shop kategorie: [kategorie]
Shopping feed: [aktivní / čeká na schválení v Merchant Center]
Pokud najdeš chybu, napiš do 24 hodin.
```

---

## Krok 9: Navazující komunikace (pokud nový produkt = novinka)

Pokud jde o nový produkt, zvaž:
- [ ] Web news / článek (viz `03-blogy-clanky-SOP-2026.md`)
- [ ] Social media post (viz `01-socialni-site-SOP-2026.md`)
- [ ] Emailová komunikace zákazníkům (viz `08-email-marketing-SOP-2026.md`)
- [ ] Aktualizace prezentace obchodního týmu

---

## Krizové scénáře

| Problém | Řešení |
|---------|--------|
| Fotografie jsou špatné kvality | Vrátit na focení; nezalistovat s nevyhovující fotografií |
| Cena je sporná | Nezobrazovat cenu; konzultovat s obchodem |
| Produkt zamítnut v Merchant Center | Otevřít Merchant Center → Issues; opravit konkrétní pole dle chybové zprávy |
| Slug už existuje (duplicitní URL) | Přidat výrobní řadu nebo rok: `garmin-gi-275-efis-r2` |
| Produkt byl zalistován chybně (špatná kategorie, popis) | Okamžitě opravit; informovat zadavatele; pokud slug změněn – nastavit 301 redirect |
| E-shop nedodá import produktů hromadně | Zalistovat manuálně nebo oslovit support |

---

## Nástroje

- E-shop admin (Upgates nebo jiné CMS)
- Google Merchant Center (Shopping feed)
- Google Keyword Planner / Ahrefs / Search Console (analýza KW)
- Google Drive (podklady a fotografie)
- ClickUp – list Web & landing page → Zalistování
- HubSpot (pokud product pages propojeny nebo UTM tracking)

---

## Odkazy

- `02b-zalistovani-produktu-PROCES-2026.md` – přehled procesu zalistování (zodpovědnosti, SLA, nástroje)
- `02-web-landing-PROCES-2026.md` – nadřazená oblast Web & landing page
- `02-web-landing-SOP-2026.md` – web a landing page obecný postup
- `09-grafika-foto-video-SOP-2026.md` – produktová fotografie
- `07-ppc-kampane-SOP-2026.md` – PPC kampaně (Google Ads, Meta)
- `AIR-TEAM/06-tone-of-voice/00-master-tone-of-voice-air-team-2026.md` – Tone of Voice pro produktové texty
