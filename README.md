# AIR TEAM – Repozitář marketingové dokumentace

> Poslední reorganizace: 21. 3. 2026

Tento repozitář obsahuje veškerou marketingovou dokumentaci, strategie, výstupní materiály a aplikace skupiny AIR TEAM.

---

## Struktura repozitáře

### AIR-TEAM/
Vše o společnosti AIR TEAM jako celku. Slouží jako **základna znalostí** – ovlivňuje tvorbu všech ostatních dokumentů.

| Podsložka | Obsah |
|---|---|
| `01-strategie/` | Marketingová strategie, growth, KPI, content mapy |
| `02-znacky/PilotStyle/` | Strategie, messaging, tone of voice značky PilotStyle |
| `02-znacky/Aerospec/` | Strategie, messaging, tone of voice značky Aerospec |
| `03-procesy-sop/` | SOPy a pracovní postupy (sociální sítě, eventy, PPC…) |
| `04-korporatni-identita/` | Loga, barvy, vizuální styl, brand guidelines |
| `05-firemni-hodnoty-a-etika/` | Firemní hodnoty, etický kodex |
| `06-tone-of-voice/` | Master tone of voice, archetyp Hrdina |
| `07-divize/` | Popis každé divize (E-shop, Holding, Intel, JetConcept, Service) |
| `08-partneri/` | Klíčoví partneři (Garmin apod.) |

---

### TEMPLATE/
Šablony pro nástroje. **Neovlivňují** tvorbu obsahu – jsou to prázdné vzory k vyplnění.

| Podsložka | Obsah |
|---|---|
| `ClickUp/` | Šablony tasků, veletrhů, custom fields |
| `HubSpot/` | Šablony e-mailů, workflows |
| `Gmail/` | Šablony e-mailů |
| `AI-prompty/` | AI prompt library pro procesy |

---

### PROJEKTY/
Výstupní dokumenty per divize (posty, newslettery, briefy, kampaně, brožury).
**Jsou izolované – neovlivňují obsah AIR-TEAM/.**

Pojmenování souborů: `[číslo-divize]-[YYYY-MM-DD]-[popis].md`

| Složka | Divize |
|---|---|
| `01-AIR-TEAM/` | Projekty pro AIR TEAM jako celek |
| `02-Smart-Suply/` | Smart Suply |
| `03-Upgrade/` | Upgrade |
| `04-ATS-Servis/` | ATS Servis |
| `05-Intel/` | Intel |
| `06-PilotStyle/` | PilotStyle |
| `07-Aerospec/` | Aerospec |
| `08-AIR-TEAM-holding/` | AIR TEAM Holding |
| `09-HR/` | HR |
| `10-Jet-Concept/` | Jet Concept |

---

### APLIKACE/
Kódové aplikace označené číslem divize. (Zatím prázdné – připraveno pro budoucí aplikace.)

---

### REPORTING/
Výstupy a reporty určené pro vedení společnosti.

Pojmenování souborů: `[YYYY-MM-DD]-[popis].md`

| Složka | Obsah |
|---|---|
| `vedeni/` | Měsíční marketingové reporty, KPI reporty, struktura týmu |

---

### MARKETING-TEAM/
Vše týkající se marketingového týmu – podřízení, hodnocení výkonu, weekly reports, interní komunikace, HR pozice.

---

### ARCHIV/
Archivované staré složky (git submoduly) z doby před reorganizací. Slouží jako záloha.

---

## Pravidla pro přidávání nových dokumentů

1. **Výstupní dokumenty** (posty, briefy, kampaně) → `PROJEKTY/[číslo-divize]/`
2. **Šablony** → `TEMPLATE/[nástroj]/`
3. **Strategie a guidelines** → `AIR-TEAM/[podsložka]/`
4. **Reporty pro vedení** → `REPORTING/vedeni/` – pojmenování `[YYYY-MM-DD]-[název].md`
5. **Týmové dokumenty** → `MARKETING-TEAM/`

### Pojmenování v PROJEKTY/
```
[číslo-divize]-[YYYY-MM-DD]-[popis].md
```
Příklady:
- `06-2026-03-21-bose-kampan-newsletter-cz.md`
- `01-2026-04-01-linkedin-post-garmin.md`
- `07-2026-03-15-brozura-cessna-172s-EN.md`
