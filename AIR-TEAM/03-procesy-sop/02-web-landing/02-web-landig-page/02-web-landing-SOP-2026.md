# Web & landing page – SOP (pracovní postup)

#marketing #sop #web

**Vlastník:** Digital specialist – Tomáš Hrdina
**Vazba na Proces:** `02-web-landing-PROCES-2026.md`
**ClickUp list:** Web & landing page

---

## Kdy použít tento postup

Použij tento postup při každé změně na webu:
- aktualizace stávající stránky (texty, obrázky),
- nová stránka nebo landing page,
- zalistování nového produktu (viz také `02b-zalistovani-produktu-SOP-2026.md`),
- změna nebo přidání formuláře.

---

## Krok 1: Přijetí požadavku

1. Otevři ClickUp → seznam **Web & landing page**.
2. Zkontroluj, zda požadavek obsahuje:
   - [ ] Co přesně se má změnit (text, obrázky, struktura)
   - [ ] Proč (kontext a cíl)
   - [ ] Deadline
   - [ ] Odkaz na stávající stránku (pokud úprava)
3. Pokud chybí informace, **nerozpracovávej** – napiš zadavateli o doplnění.
4. Nastav task na stav **In Progress** a přiřaď si ho.

---

## Krok 2: Určení typu práce

| Typ požadavku | Kdo realizuje | Poznámka |
|---|---|---|
| Aktualizace textu/obrázků | Digital specialist | Přímá editace v CMS |
| Nová stránka / landing page | Digital specialist + Grafický designér | Potřeba brief + návrh |
| Nový produkt (zalistování) | Digital specialist | Viz `02b-zalistovani-produktu-SOP-2026.md` |
| Formulář (nový nebo úprava) | Digital specialist | Specifikace polí a workflow |

---

## Krok 3: Aktualizace / úprava (přímé změny)

1. Přihlas se do CMS / HubSpotu.
2. Otevři příslušnou stránku v editaci.
3. Proveď změny dle zadání.
4. Uložit jako **draft** – nepublikovat bez kontroly.
5. Přejdi na Krok 5 (QA).

---

## Krok 4: Nová stránka nebo landing page

### 4.1 Brief grafiky (pokud je potřeba vizuál)

Pošli e-mail grafickému designérovi:

```
Předmět: Brief – grafika pro landing page [název]

Ahoj,
potřebuji vizuál pro landing page [název].

Účel: [co stránka dělá]
Cílovka: [kdo ji uvidí]
Formát: [hero banner, šířka × výška]
Reference: [odkaz nebo příklady]
Deadline: [datum]

Texty pro vizuál: [vložit]
```

### 4.2 Vytvoření stránky v CMS

1. Přejdi do CMS → Nová stránka / Landing page.
2. Nastav:
   - [ ] URL slug (malá písmena, pomlčky, bez diakritiky)
   - [ ] Meta title a meta description (SEO)
   - [ ] H1 nadpis odpovídající obsahu
   - [ ] CTA tlačítko s UTM parametry (pokud kampaňová stránka)
3. Vlož připravený obsah a grafiku.
4. Nastav uložení jako **draft**.

---

## Krok 5: QA checklist před publikací

- [ ] Texty odpovídají zadání a jsou bez překlepů
- [ ] Obrázky jsou ve správném rozlišení, nahrány bez pomalého načítání
- [ ] Mobilní zobrazení – zkontroluj na telefonu
- [ ] Všechny odkazy a tlačítka fungují
- [ ] UTM parametry jsou na všech proklikávacích odkazech (pokud kampaň)
- [ ] Meta title a meta description jsou vyplněny
- [ ] Formuláře fungují a odesílají správně do HubSpotu
- [ ] Stránka nepublikuje citlivé interní informace

---

## Krok 6: Publikace

1. Změň stav draftu na **Published**.
2. Ověř živou URL – projdi stránku jako návštěvník.
3. Ulož odkaz na stránku do ClickUp tasku.
4. Informuj zadavatele: „Hotovo, živá URL: [odkaz]."
5. Přepni task na **Done**.

---

## Krok 7: Formuláře – specifický postup

1. Specifikuj pole: název, typ (text, email, dropdown), povinné/volitelné.
2. Nastav workflow v HubSpotu:
   - [ ] Notifikační e-mail (kdo dostane upozornění na nové vyplnění)
   - [ ] Auto-response zákazníkovi (pokud relevantní)
   - [ ] Pipeline záznam / deal creation (pokud obchodní formulář)
3. Otestuj formulář: vyplň a odešli testovací data.
4. Ověř, že data dorazila do HubSpotu.
5. Smaž testovací záznam.

---

## Krizové scénáře

| Problém | Řešení |
|---------|--------|
| Stránka po publikaci vypadá špatně | Vrať do draft, oprav, publikuj znovu |
| Formulář neposílá data do HubSpotu | Zkontroluj mapování polí a HubSpot integration key |
| Zadavatel chce urgentní změnu bez briefu | Trvej na minimálním zadání – URL, co změnit, deadline |
| Grafika nedodána včas | Informuj zadavatele o posunu, nabídni textovou verzi bez obrázku |

---

## Nástroje

- CMS webu (hlavní editace)
- HubSpot (formuláře, UTM tracking)
- ClickUp – list Web & landing page
- Google PageSpeed / mobilní náhled – QA kontrola

---

## Odkazy

- `02-web-landing-PROCES-2026.md` – přehled procesu, RACI, SLA
- `02b-zalistovani-produktu-SOP-2026.md` – zalistování nových produktů
- `09-grafika-foto-video-PROCES-2026.md` – grafika pro web
- `06-promo-akce-PROCES-2026.md` – landing page pro promo akce
