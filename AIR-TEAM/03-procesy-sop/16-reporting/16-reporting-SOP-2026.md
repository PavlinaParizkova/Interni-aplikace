# Reporting – SOP (pracovní postup)

#marketing #sop #reporting

**Vlastník:** Marketing manager – Pavlína Pařízková
**Vazba na Proces:** `16-reporting-PROCES-2026.md`
**ClickUp list:** Reporting (složka Strategie & Reporting & CRM)

---

## Část A: Týdenní dashboard (každé pondělí)

### Zdroje dat (5 minut)
1. HubSpot → Reports → Emailové kampaně za uplynulý týden.
2. GA4 → Porovnat týden/týden (web traffic, konverze).
3. LinkedIn / Meta / Instagram → Native analytics (dosah, engagement).
4. ClickUp → Zkontrolovat stav otevřených tasků.

### Výstup
- Dashboard aktualizovat nebo přidat komentář do ClickUp (Reporting folder).
- Pokud je výrazná odchylka (±30 % vs. průměr): okamžitě informovat Marketing managera.

---

## Část B: Měsíční report (do 5. každého měsíce)

### Krok 1: Sběr dat (1.–3. každého měsíce)

| Zdroj | Co exportovat |
|-------|---------------|
| HubSpot | E-mail výsledky (open rate excl. bots, CTR, unsubscribe), nové kontakty, zdroj leadů |
| GA4 | Sessiony, bounce rate, top pages, konverzní akce |
| LinkedIn | Dosah, engagement, follower growth |
| Meta / Instagram | Dosah, engagement rate, story views |
| Google Ads / Meta Ads | Imprese, CTR, CPC, konverze, spend |
| ClickUp | Počet uzavřených tasků (produktivita) |

### Krok 2: Vyplnění šablony měsíčního reportu

```
## Marketing report – [měsíc] [rok]

### Shrnutí (3 věty)
[Co bylo hlavní aktivitou měsíce. Co fungovalo. Co se řeší.]

### KPI přehled

| Metrika | Cíl | Výsledek | Trend |
|---------|-----|----------|-------|
| Nové kontakty (HubSpot) | | | ↑/↓/→ |
| E-mail open rate (excl. bots) | | | |
| E-mail CTR | | | |
| Web sessions | | | |
| LinkedIn dosah | | | |
| LinkedIn engagement rate | | | |
| PPC spend vs. budget | | | |
| PPC ROAS | | | |

### Klíčová zjištění
1.
2.
3.

### Aktivity proběhlé v měsíci
- [kampaně, eventy, publikace]

### Plán na příští měsíc
- Priorita 1:
- Priorita 2:
- Priorita 3:
```

### Krok 3: Distribuce
- Ulož report do ClickUp (Reporting folder) nebo Google Drive.
- Pošli přehled (ne celý report) Marketing managerovi a Sales leadovi.

---

## Část C: Kvartální report (do 10. po konci Q)

### Krok 1: Agregovat měsíční data

Sečti měsíční metriky za 3 měsíce do jednoho kvartálního přehledu.

### Krok 2: Vyhodnocení OKR

Pro každý OKR z kvartálního plánu (viz `14-strategicke-planovani-SOP-2026.md`):

```
OKR: [název]
Cíl: [KR1, KR2, KR3]
Výsledek: [co bylo dosaženo]
Splněno: Ano / Částečně (X %) / Ne
```

### Krok 3: Lessons Learned

Povinně zaznamenat:
- Co fungovalo a proč (min. 3 body)
- Co nefungovalo a proč (min. 3 body)
- Konkrétní doporučení pro Q+1

### Krok 4: Prezentace pro vedení

Formát: max. 5 slajdů nebo 1 stránka A4:
1. Výsledky vs. cíle (tabulka)
2. 3 klíčová zjištění
3. 3 doporučení pro Q+1
4. Navrhovaný budget / prioritní akce Q+1

---

## Část D: Post-campaign report

Vyplňuje owner kampaně do 5 pracovních dnů po konci kampaně.

### Šablona post-campaign reportu

```
Kampaň: [název]
Typ: [promo / event / PPC / email / …]
Období: [od] – [do]
Owner: [jméno]

## Výsledky

| KPI | Cíl | Výsledek | Splněno? |
|-----|-----|----------|----------|
| [primární KPI] | | | |
| [sekundární KPI 1] | | | |
| [sekundární KPI 2] | | | |

## Přehled kanálů
- E-mail: [open rate, CTR]
- Social: [dosah, engagements]
- PPC: [spend, ROAS]
- Web: [sessions na landing page]

## Klíčová zjištění
1.
2.
3.

## Lessons Learned
Co zopakovat:
Co změnit:
Co ukončit:

## Akční body pro příště
| Akce | Owner | Deadline |
|------|-------|----------|
| | | |
```

---

## Krizové scénáře

| Problém | Řešení |
|---------|--------|
| Data z HubSpotu jsou nekonzistentní | Zkontrolovat tracking setup; označit data z problémového období jako „unvalidated" |
| Report nebyl připraven včas | Odeslat stručný e-mail o posunu + důvod; dodat do 2 pracovních dní |
| Vedení požaduje data, která nesledujeme | Zaznamenat do ClickUp jako tracking requirement; nastavit pro příští period |

---

## Nástroje

- HubSpot Reports & Analytics
- GA4
- Google Data Studio / Looker Studio (vizualizace)
- ClickUp – Reporting folder
- Google Sheets / Slides (distribuce reportů)

---

## Odkazy

- `16-reporting-PROCES-2026.md` – přehled procesu, typy reportů, RACI
- `14-strategicke-planovani-SOP-2026.md` – plánování navazuje na reporting
- `06-promo-akce-PROCES-2026.md` – šablona post-campaign reportu pro promo akce
