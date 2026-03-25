# Manuál měsíčních reportů Marketing (OKR verze)

Praktický návod pro tvorbu měsíčního reportu marketingového oddělení AIR TEAM v nové struktuře zaměřené na OKR, výsledky a rozhodnutí.

## 1) Scope a účel

- Manuál je určený pouze pro marketingové oddělení.
- Report ukazuje posun vůči OKR, konkrétní výsledky, výzvy a potřeby vůči vedení.
- Ostatní týmy vstupují pouze v sekcích `Resource Needs` a `Decisions Needed`.

## 2) Meeting rámec a povinný prep

- Formát meetingu: 2 hodiny, poslední středa v měsíci (14:00).
- Účastníci: CEO, CFO, COO, HR, Sales Leads, Marketing, IT Lead, MRO Lead.
- Povinný prep: nejpozději 24 hodin před meetingem.
- Standard dodání podkladů:
  - monthly report,
  - OKR progress v dashboardu,
  - decision items s doporučením,
  - budget actuals vs plan (pokud relevantní).
- Operating rhythm:
  - pokud není prep včas, tým je přeskočen a řeší se 1:1,
  - všechny action items musí být v ClickUp do 24 hodin po meetingu,
  - každá akce má konkrétního ownera (ne název týmu).

## 3) Zdroj dat

Primární zdroj:
- `Marketing-operations-mapping/dokumenty/2026-03-09T10_57_46.684Z AIR TEAM.csv`

Používané sloupce:
- `Task Name`, `Parent Name`, `Assignee`, `Priority`, `Due Date`, `Date Updated`, `Date Closed`, `Report comment (short text)`.

## 4) Jak mapovat CSV na nový report

### OKR Progress
- Každý OKR navázat na skupinu úkolů (`Parent Name` nebo tematický blok).
- `KR1/KR2` vyjádřit jako `X/Y completed`:
  - `Y` = počet relevantních úkolů v rámci KR,
  - `X` = počet úkolů s vyplněným `Date Closed`.
- `% progress` počítat jako `(X / Y) * 100`.
- Barva statusu:
  - `Green`: >= 80 % a bez kritického blockeru,
  - `Yellow`: 50-79 % nebo mírné riziko termínu,
  - `Red`: < 50 % nebo kritický blocker/kapacitní problém.

### Key Wins This Month
- Uváděj 2-4 konkrétní výhry s dopadem.
- Ber primárně úkoly s `Date Closed` v reportovaném měsíci a zásadní milníky.

### Key Challenges
- Uváděj hlavní překážky, které zpomalují OKR.
- Každá výzva musí obsahovat:
  - co je problém,
  - co už děláme,
  - co ještě chybí.

### Top 3 Next Month
- Vybírej 3 priority s nejvyšším dopadem na OKR dalšího měsíce.
- Preferuj `URGENT/HIGH` úkoly a termínově kritické položky.

### Decisions Needed
- Piš rozhodnutí, která musí udělat vedení.
- Každý bod ve formátu: `Rozhodnutí + doporučení`.

### Resource Needs
- Uváděj jen skutečně potřebné zdroje:
  - `Budget` (částka + proč),
  - `Headcount` (role + proč),
  - `Jiné týmy` (co přesně a od koho).

### Doplňkový Team Update blok (pro meeting agendu)
- K reportu vždy doplň krátký blok pro sekci `Team updates`:
  - Top 3 priority tento měsíc (Done / In progress / Not started),
  - key wins (1-2),
  - blockery (co blokuje, kdo pomůže),
  - help needed (rozhodnutí, zdroje, cross-team).
- Tento blok drž stručný (max 6-8 řádků), aby se vešel do 5-6 min prezentace týmu.

## 5) Měsíční workflow přípravy

1. **T-3 dny**: odfiltruj marketingové úkoly z CSV za daný měsíc.
2. **T-2 dny**: seskup úkoly pod OKR a spočítej KR progres.
3. **T-2 dny**: vyber key wins a key challenges.
4. **T-1 den**: připrav top 3 priority, blockery a help needed pro Team updates.
5. **T-1 den**: připrav decisions needed a resource needs pro CEO blok.
6. **Den D**: odprezentuj report ve struktuře níže.
7. **Do 24 h po meetingu**: zapsat action items do ClickUp (`owner + deadline + status`).

## 6) Copy-paste šablona reportu

# [Tým] Monthly Report - [Měsíc Rok]

## Strategic Context Input (pro CEO)
- Vazba na Top 3 company priorities: [jak marketing přispěl]
- Klíčové změny od minula: [1-2 body]

## OKR Progress
- OKR 1: [Název] - [Green/Yellow/Red] - [% progress]
  - KR1: [X/Y completed]
  - KR2: [X/Y completed]
- OKR 2: [Název] - [Green/Yellow/Red] - [% progress]
  - KR1: [X/Y completed]
  - KR2: [X/Y completed]

## Key Wins This Month
1. [Konkrétní výhra + dopad]
2. [Konkrétní výhra + dopad]

## Key Challenges
1. [Výzva + co děláme]
2. [Výzva + co děláme]

## Top 3 Next Month
1. [Priorita]
2. [Priorita]
3. [Priorita]

## Decisions Needed
1. [Rozhodnutí + doporučení]

## Resource Needs (pokud nějaké)
- Budget: [částka + zdůvodnění]
- Headcount: [role + zdůvodnění]
- Jiné týmy: [co potřebujeme od koho]

## Team Updates Snapshot (na meeting)
- Top 3 priority tento měsíc: [Done/In progress/Not started]
- Key wins: [1-2 body]
- Blockery: [co blokuje + kdo pomůže]
- Help needed: [rozhodnutí/zdroje/cross-team]

## 7) Checklist kvality reportu

- [ ] Všechny OKR mají barvu i procento progresu.
- [ ] KR jsou vyjádřené měřitelně jako `X/Y completed`.
- [ ] Barvy OKR odpovídají pravidlu `Green >= 80`, `Yellow 50-79`, `Red < 50`.
- [ ] Key wins obsahují konkrétní dopad (ne jen popis aktivity).
- [ ] Key challenges popisují i nápravné kroky.
- [ ] Top 3 Next Month jsou navázané na OKR.
- [ ] Decisions Needed obsahuje doporučení.
- [ ] Resource Needs je konkrétní a kvantifikovaný.
- [ ] Team Updates Snapshot je připravený pro 5-6 min prezentaci.
- [ ] Action items jsou do 24 h po meetingu zapsané v ClickUp.
