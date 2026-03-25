# Promo akce - pracovní postup + ClickUp template

#marketing #proces #kampane #promo

**Pro koho je dokument:** Marketing tým (digital, content, grafika), případně obchod jako zadavatel.  
**Vlastník dokumentu:** Pavlína Pařízková  
**Zodpovědná role procesu:** Digital specialist (owner promo kampaně)

---

## Cíl procesu

Nastavit jednotný postup od briefu po vyhodnocení promo akcí (e-shop, email, social, PPC), aby:

- každá akce měla jasné KPI a ownera,
- exekuce běžela bez ztráty informací mezi týmy,
- výsledky byly srovnatelné mezi trhy, jazyky a koly kampaně.

---

## Zodpovědnosti (RACI)

- **Owner kampaně (Digital specialist):** koordinace, timeline, tracking, reporting, finální vyhodnocení.
- **Content manager:** copy, předměty emailů, CTA textace, jazykové mutace.
- **Grafický designér:** bannery, hero vizuály, resize formáty, podklady pro email/web/social/PPC.
- **PPC specialista (pokud je zapojen):** nastavení kampaní, budget pacing, optimalizace.
- **Schvalovatel (Marketing manager):** finální schválení briefu, rozpočtu, kreativy a spuštění.

---

## Povinné vstupy před zahájením

- [ ] **Název promo akce** (jednoznačný, např. `Bose Last Call 2025`)
- [ ] **Značka / klient** (např. BOSE / BOEING)
- [ ] **Typ kampaně** (prodejní / produktová / obsahová / event follow-up / clearance)
- [ ] **Nabídka a podmínky** (co přesně zákazník získá, časová platnost, výjimky)
- [ ] **Cílová skupina** (trhy, jazyky, segmenty)
- [ ] **Cíl kampaně + KPI** (např. CTR, CVR, počet objednávek, tržby, ROAS)
- [ ] **Rozpočet po kanálech** (např. Meta 150 Kč/den, Google Ads, produkce)
- [ ] **Kanály** (email, social, PPC, web banner, landing page)
- [ ] **Termíny** (start, end, kontrolní body, deadline assetů)
- [ ] **Schvalovatelé** (kdo dává Go/No-Go)

Bez těchto vstupů se kampaň nepřepíná do stavu `Ready to Launch`.

---

## Proces krok za krokem

## 1) Brief a plán (T-14 až T-10)

- Owner založí ClickUp task podle šablony níže.
- Doplní povinné vstupy, KPI, rozpočet, trhy, jazyky a UTM naming.
- Potvrdí scope a schválení s Marketing managerem.

**Výstup:** schválený campaign brief + rozpad prací.

## 2) Produkce obsahu a grafiky (T-10 až T-5)

- Content připraví copy pro všechny kanály + jazykové mutace.
- Grafika připraví všechny formáty (email hero, social, PPC, web).
- Owner hlídá konzistenci claimu, CTA a podmínek promo.

**Výstup:** sada schválených kreativ a textů.

## 3) Tracking setup a QA (T-5 až T-2)

- Všechny odkazy musí mít UTM:
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
  - `utm_content`
- V HubSpotu propojit aktiva pod jednu campaign entitu.
- QA kontrola:
  - mobilní zobrazení (above the fold),
  - Gmail rendering,
  - funkčnost tlačítek a prokliků,
  - jazykové verze,
  - podmínky promo akce.

**Výstup:** QA checklist 100 % splněn.

## 4) Spuštění kampaně (T0)

- Spustit podle harmonogramu (typicky 18:00, pokud to dává smysl pro segment).
- Owner zkontroluje prvních 60 minut:
  - doručitelnost,
  - chyby odkazů,
  - výkyvy v metrikách.

**Výstup:** kampaň live + první kontrolní snapshot.

## 5) Operativní optimalizace (T+1 až T+X)

- Průběžná kontrola CTR, top kliků, zařízení, trhů a read time.
- U slabších segmentů upravit:
  - předmět/předheader,
  - délku textu,
  - umístění CTA,
  - kreativu pro mobil.

**Výstup:** log optimalizací a rozhodnutí.

## 6) Vyhodnocení a lessons learned (do 5 pracovních dnů po konci)

- Vyhodnotit výkon podle trhů, jazyků, zařízení a odkazů.
- Vždy reportovat variantu **Excluding Bots**.
- Porovnat výsledek s cíli a s předchozím kolem kampaně.
- Zapsat doporučení pro další kolo (co zopakovat / změnit / ukončit).

**Výstup:** finální report + akční plán s ownery a termíny.

---

## KPI rámec (povinné metriky)

**Primární KPI (dle cíle kampaně):**

- CTR / Click Rate
- CVR (konverze na e-shopu)
- Počet objednávek
- Tržby / ROAS

**Podpůrné KPI:**

- Open Rate (orientačně, vždy i Excluding Bots)
- Time spent viewing (Read / Skim / Glanced)
- Device split (mobil vs. desktop)
- Top clicked links (vítězné produkty/pozice)
- Časová distribuce interakcí (špička po odeslání, druhá vlna)

---

## Šablona pro ClickUp template

Níže je doporučené nastavení šablony tasku v ClickUp.

## A) Název template

`MKT | Promo akce | Brief -> Exekuce -> Vyhodnocení`

## B) Status workflow

`Brief` -> `Planning` -> `Production` -> `QA` -> `Ready to Launch` -> `Live` -> `Reporting` -> `Closed`

## C) Doporučená Custom Fields

- `Campaign Name` (text)
- `Brand/Client` (dropdown)
- `Campaign Type` (dropdown: Sale / Launch / Content / Last Call / Clearance)
- `Owner` (people)
- `Markets` (labels)
- `Languages` (labels)
- `Start Date` (date)
- `End Date` (date)
- `Budget Total` (money)
- `Budget Meta Daily` (money)
- `Goal KPI` (text)
- `Primary KPI Target` (number/text)
- `UTM Campaign` (text)
- `HubSpot Campaign ID` (text)
- `GA4 Linked` (checkbox)
- `External Links - Grafika` (url)
- `External Links - Eshop` (url)
- `External Links - CMS News` (url)
- `External Links - Newsletter HubSpot` (url)
- `Final Result` (dropdown: Win / Mixed / Under Target)

## D) Struktura subtasků

1. `01 Brief - vyplnit povinné vstupy`
2. `02 Copy - CZ/EN/DE/IT/HU/PL`
3. `03 Grafika - e-shop / CMS news / newsletter / social / PPC`
4. `04 E-shop - nasazení bannerů a promo prvků`
5. `05 CMS News update - článek/news k promo akci`
6. `06 Newsletter HubSpot - build, test, scheduling`
7. `07 Tracking - UTM + HubSpot mapping + GA4`
8. `08 QA - mobil + Gmail + odkazy + podmínky`
9. `09 Launch - spuštění a kontrola prvních 60 min`
10. `10 Průběžná optimalizace`
11. `11 Finální vyhodnocení + doporučení`

## E) Checklist před spuštěním (vlož jako checklist do tasku)

- [ ] Nabídka a podmínky jsou konzistentní ve všech kanálech
- [ ] Všechny odkazy mají UTM parametry
- [ ] Hero sekce a CTA jsou viditelné na mobilu bez scrollu
- [ ] Test v Gmailu je schválen
- [ ] Product obrázky jsou prolinkované
- [ ] Externí odkaz na grafiku je vložen v tasku
- [ ] Externí odkaz na e-shop implementaci je vložen v tasku
- [ ] Externí odkaz na CMS news update je vložen v tasku
- [ ] Externí odkaz na HubSpot newsletter je vložen v tasku
- [ ] Jazykové mutace jsou zkontrolované
- [ ] HubSpot campaign je správně přiřazená
- [ ] Schvalovatel dal finální Go

## F) Šablona popisu tasku (copy/paste do ClickUp)

```md
## 1) Campaign Brief
- Název kampaně:
- Značka/Klient:
- Typ kampaně:
- Nabídka:
- Platnost akce:
- Cílová skupina:
- Trhy/Jazyky:
- Kanály:

## 2) Cíl a KPI
- Business cíl:
- Primární KPI + target:
- Sekundární KPI:

## 3) Rozpočet
- Celkem:
- Meta:
- Google:
- Produkce:

## 4) Assety a exekuce
- Copy owner:
- Grafika owner:
- PPC owner:
- HubSpot owner:
- E-shop/CMS owner:
- Datum QA:
- Datum spuštění:

### 4.1 Grafika (povinné)
- E-shop formáty:
- CMS News formáty:
- Newsletter formáty:
- Externí odkaz na grafiku (Drive/Figma):

### 4.2 E-shop update (povinné)
- Co se nasazuje:
- URL e-shop stránky:
- Externí odkaz na implementační task:

### 4.3 CMS News update (povinné)
- Název news:
- URL článku/news:
- Externí odkaz na CMS task:

### 4.4 Newsletter HubSpot (povinné)
- Název newsletteru:
- Segment:
- Send time:
- Externí odkaz na HubSpot email:

## 5) Tracking
- UTM naming:
- HubSpot campaign:
- GA4 propojení:

## 6) Vyhodnocení (po kampani)
- Open Rate (Excluding Bots):
- CTR:
- CVR:
- Tržby:
- Top clicked links:
- Device split:
- Co fungovalo:
- Co nefungovalo:
- Lessons learned:

## 7) Akční plán dalšího kola
- Co zopakovat:
- Co změnit:
- Co ukončit:
- Owner + termín:
```

---

## G) miniverze (rychlý ClickUp template pro menší promo)

Použijte, pokud je promo jednodušší (1 trh, omezený rozpočet, minimum mutací), ale stále potřebujete pokrýt e-shop + CMS + newsletter + tracking.

### Doporučené statusy (miniverze)

`Brief` -> `Production` -> `QA` -> `Live` -> `Closed`

### Povinné položky (miniverze)

- Název kampaně
- Nabídka + platnost
- Cílovka
- Rozpočet
- KPI (min. 1 primární)
- Externí link na grafiku
- Externí link na e-shop update
- Externí link na CMS news
- Externí link na HubSpot newsletter

### miniverze - popis tasku (copy/paste)

```md
## 1) Brief
- Název kampaně:
- Nabídka + platnost:
- Cílovka:
- Kanály:
- KPI (1 hlavní):
- Rozpočet:

## 2) Exekuce (povinné linky)
- Grafika (externí link):
- E-shop update (externí link):
- CMS news update (externí link):
- Newsletter HubSpot (externí link):

## 3) QA před spuštěním
- [ ] UTM doplněné
- [ ] Mobil OK (hero + CTA)
- [ ] Odkazy funkční
- [ ] Schváleno

## 4) Rychlé vyhodnocení
- CTR:
- CVR / objednávky:
- Tržby:
- Co fungovalo:
- Co změnit příště:
```

---

## Reporting formát (po kampani)

Každé vyhodnocení musí obsahovat:

- stručné shrnutí cíle a výsledku,
- výsledky podle trhů/jazyků,
- srovnání 1. vlna vs. Last Call (pokud existuje),
- hlavní zjištění (max 5),
- konkrétní doporučení pro další iteraci,
- akční body s ownerem a deadlinem.

---

## H) Ucelený provozní postup (1 stránka)

Tento blok používejte jako hlavní operativní postup v každé promo akci.  
Pravidlo: pokud není splněn krok, task se nepřepíná do další fáze.

### 1) Brief (povinné vstupy)

- Název kampaně, nabídka a platnost
- Cílovka (trhy, jazyky, segmenty)
- Cíl + KPI (primární i sekundární)
- Rozpočet po kanálech
- Kanály (e-shop, CMS news, newsletter, social, PPC)
- Owner, schvalovatel, termíny

**Výstup:** vyplněný brief v ClickUp tasku.

### 2) Go/No-Go #1 (před produkcí)

- Schválení podmínek promo akce
- Potvrzení zásob a realizovatelnosti (OPS/warehouse)
- Potvrzení technické proveditelnosti (IT/Upgates/HubSpot)

**Výstup:** formální schválení `Go`.

### 3) Produkce assetů

- Copy a mutace
- Grafika (e-shop + CMS news + newsletter + social/PPC)
- Externí odkazy na podklady vložené v tasku

**Výstup:** schválené assety pro všechny aktivní kanály.

### 4) Tracking a technické nastavení

- UTM na všech odkazech
- HubSpot campaign přiřazená
- GA4 propojení a měření konverzí
- Otestovaný nákupní proces (včetně promo podmínek)

**Výstup:** tracking připraven a ověřen.

### 5) QA checklist (před spuštěním)

- Mobilní zobrazení (hero + CTA nad záhybem)
- Gmail rendering
- Funkční odkazy a CTA
- Správná platnost, podmínky a textace
- Schválení finální verze

**Výstup:** QA 100 %.

### 6) Spuštění + monitoring

- Launch podle plánu
- Kontrola prvních 60 minut
- Průběžná optimalizace podle dat (CTR, top kliky, device split)

**Výstup:** aktivně řízená kampaň bez kritických chyb.

### 7) Ukončení kampaně

- Deaktivace promo prvků (web, CMS, kódy, PPC, newsletter navazující komunikace)
- Archivace podkladů a odkazů
- Uzavření operativních tasků (včetně dárků/GWP, pokud součást akce)

**Výstup:** kampaně a systémy uvedené do standardního stavu.

### 8) Vyhodnocení + lessons learned

- KPI vs cíl (vždy `Excluding Bots`)
- Výsledky podle trhů/jazyků/zařízení
- Co fungovalo / co nefungovalo
- 3 akční body pro další kolo (owner + deadline)

**Výstup:** finální report a navazující akční plán.

### Uzavírací pravidlo tasku

Task lze přepnout do `Closed` pouze pokud:

- je vyplněná sekce vyhodnocení,
- jsou zapsané lessons learned,
- jsou založené minimálně 3 navazující akční kroky s ownerem a termínem.

---

## Nástroje

- HubSpot (email, campaign tracking, click map)
- GA4 (návaznost na e-shop konverze)
- ClickUp (řízení, template, odpovědnosti)
- Meta/Google Ads (placené kanály)
- Grafické nástroje (assety)

---

## Odkazy

- [[../PROCESY_A_POSTUPY]] – index procesů
- [[../MARKETING_TEAM_MAP]] – matice rolí
- [[01-socialni-site]] – sociální sítě
- [[07-ppc-kampane]] – PPC kampaně
- [[08-email-marketing]] – email marketing
- [[09-grafika-foto-video]] – grafika, foto, video
