# CRM & automatizace – SOP (pracovní postup)

#marketing #sop #crm

**Vlastník:** Digital specialist
**Vazba na Proces:** `15-crm-automatizace-PROCES-2026.md`
**ClickUp list:** CRM & automatizace

---

## Část A: Správa kontaktů v HubSpotu

### A1: Import nových kontaktů

1. Připrav CSV soubor: povinné sloupce `Jméno`, `Příjmení`, `E-mail`, `Firma`.
2. Přejdi do HubSpotu → Kontakty → Import.
3. Vlož CSV a mapuj sloupce na HubSpot vlastnosti.
4. Nastav možnost deduplikace (HubSpot porovná dle e-mailu).
5. Po importu zkontroluj prvních 10 záznamů ručně.
6. Přidej tag / vlastnost `Zdroj importu` s datem.

### A2: Čistění dat (čtvrtletně)

**Checklist čistění:**
- [ ] Smazat nebo sloučit duplicitní kontakty (HubSpot Deduplicate tool)
- [ ] Aktualizovat kontakty bez e-mailu (chybí klíčová data) – doplnit nebo archivovat
- [ ] Zkontrolovat `Unsubscribed` kontakty – ponechat, nemažeme (právní důvod)
- [ ] Zkontrolovat kontakty bez aktivity >12 měsíců – označit jako `Low Engagement`
- [ ] Ověřit vlastnosti `Benefit Program Level`, `Segment`, `Country` u obchodně aktivních kontaktů

---

## Část B: Segmentace a listy

### B1: Typy listů v HubSpotu

| Typ listu | Kdy použít | Příklad |
|-----------|------------|---------|
| **Static list** | Pro jednorázové akce (import, kampaň k datu) | „Veletrh DSEI 2026 – návštěvníci" |
| **Smart list** | Pro opakující se segmenty, automaticky aktualizovaný | „Aktivní zákazníci CZ – otevřeli e-mail za 30 dní" |

### B2: Povinné filtry pro marketingové smart listy

Každý smart list určený pro e-mailové kampaně musí mít:
- `Marketing email opt-in = true` (nebo ekvivalentní)
- `Email = is known`
- `Email bounced = false`

---

## Část C: Nastavení workflow a automatizací

### C1: Základní postup před vytvořením workflow

1. Definuj trigger: Co spustí workflow? (vyplnění formuláře, vlastnost kontaktu, datum, …)
2. Definuj cíl: Kdy kontakt opustí workflow? (konverze, kliknutí, změna stavu)
3. Zmapuj sekvenci kroků: flowchart na papíře nebo v ClickUp.
4. Schval s Marketing managerem před vytvořením v HubSpotu.

### C2: Krok za krokem – nové workflow v HubSpotu

1. HubSpot → Automatizace → Workflow → Nový workflow.
2. Vyber typ: Contact-based / Deal-based / dle potřeby.
3. Nastav trigger (enrollment criteria).
4. Přidej kroky (actions):
   - Delay (vždy přidej – minimálně 1 den u e-mailových sekvencí)
   - Send email
   - Set property value
   - Create task (pro Sales notifikace)
5. Nastav Goal (exit condition při dosažení cíle).
6. **Otestuj na testovacím kontaktu** před aktivací.
7. Aktivuj a zdokumentuj v ClickUp (název, trigger, scope, owner).

### C3: Povinné nastavení každého e-mailového workflow

- [ ] Delay nastaven (ne ihned, min. 1 pracovní den)
- [ ] „Skip weekends" aktivováno (pokud B2B)
- [ ] Exit condition nastavena (odhlášení nebo konverze)
- [ ] Testovací odeslání provedeno
- [ ] Workflow pojmenováno dle konvence: `[typ]-[segment]-[rok]`

---

## Část D: Integrace

### D1: Kontrolní checklist integrace (měsíčně)

- [ ] HubSpot ↔ Web formuláře: test odeslání formuláře → záznam v HubSpotu
- [ ] HubSpot ↔ GA4: konverzní akce se správně zaznamenávají
- [ ] HubSpot ↔ E-shop: objednávky se správně mapují na kontakty
- [ ] HubSpot ↔ ClickUp: pokud integrace existuje, test fungující synchronizace

### D2: Nová integrace – postup

1. Zdokumentuj požadavek v ClickUp.
2. Ověř dostupnost nativního HubSpot konektoru nebo nutnost Zapier/Make.
3. Nastavení otestovat v staging/testovacím prostředí.
4. Po úspěšném testu nasadit do produkce.
5. Dokumentovat integraci: zdroj dat, cíl, frekvence, zodpovídá.

---

## Část E: HubSpot správa vlastností (properties)

### Nová custom property

1. HubSpot → Settings → Properties → Create property.
2. Pojmenuj dle konvence: `[oblast]_[nazev]` (lowercase, podtržítko).
3. Vyber správný typ (text, číslo, dropdown, datum).
4. Přidej do relevantního záznamu view a forms.
5. Zdokumentuj v ClickUp (k čemu slouží, kdo ji plní).

---

## Krizové scénáře

| Problém | Řešení |
|---------|--------|
| Workflow odeslal e-mail špatnému segmentu | Okamžitě pozastavit workflow; zjistit počet zasažených; eskalovat na Marketing managera |
| Integrace přestala fungovat | Zkontrolovat API klíč / OAuth token; restartovat konektor; pokud nefunguje >24h eskalovat na IT |
| Duplicitní kontakty se hromadí | Spustit HubSpot Deduplicate; zjistit zdroj duplicit; opravit mapování |

---

## Nástroje

- HubSpot CRM
- Zapier / Make (integrace)
- GA4
- ClickUp – list CRM & automatizace

---

## Odkazy

- `15-crm-automatizace-PROCES-2026.md` – přehled procesu, RACI, SLA
- `08-email-marketing-SOP-2026.md` – e-mailové kampaně v HubSpotu
