# PPC kampaně – SOP (pracovní postup)

#marketing #sop #ppc

**Vlastník:** Digital specialist – Tomáš Hrdina
**Vazba na Proces:** `07-ppc-kampane-PROCES-2026.md`
**ClickUp list:** PPC Kampaně (složka Kampaně & Promo)

---

## Krok 1: Brief a přijetí požadavku

### Co musí brief obsahovat
- [ ] Cíl kampaně (prodej, leady, awareness, retargeting)
- [ ] Cílová skupina (geografie, věk, zájmy, B2B/B2C)
- [ ] Měsíční / celkový rozpočet
- [ ] Platforma (Google Ads, Meta Ads, Sklik, LinkedIn Ads)
- [ ] Landing page (odkaz nebo zadání nové – viz `02-web-landing-SOP-2026.md`)
- [ ] Kreativy (texty a obrázky – kdo dodá a kdy)
- [ ] Deadline spuštění

Pokud brief není kompletní, nerozpracovávej kampaň.

---

## Krok 2: Příprava kampaně

### 2.1 UTM naming convention

Všechny URL musí mít UTM parametry ve formátu:

```
utm_source = [google / meta / sklik / linkedin]
utm_medium = [cpc / paid_social / display]
utm_campaign = [nazev-kampane-rok-mes]
utm_content = [varianta-kreatiry nebo cílova-skupina]
```

Příklad:
```
utm_source=google&utm_medium=cpc&utm_campaign=airteam-garmin-avionika-2026-04&utm_content=broad-match
```

### 2.2 Nastavení v platformě

**Google Ads:**
1. Nová kampaň → vyber typ (Search / Display / Performance Max).
2. Nastav cílení: geografie, jazyk, zařízení.
3. Nastav denní rozpočet a bidding strategii.
4. Vlož klíčová slova (broad, phrase, exact) s negativními klíčovými slovy.
5. Vytvoř reklamy: min. 2 varianty (A/B test headline).
6. Nastav tracking: konverzní akce v GA4 propojit přes Google Tag.

**Meta Ads:**
1. Business Manager → Ads Manager → Nová kampaň.
2. Cíl kampaně: Traffic / Conversions / Lead generation.
3. Ad Set: cílení, umístění (Feed, Stories, Reels), denní budget.
4. Kreativy: 1 video + 1 statický vizuál (carousel pokud produktová).
5. Pixel: ověř, že Meta Pixel fires na landing page.

---

## Krok 3: Pre-launch checklist

- [ ] Landing page je live a načítá se správně (mobil + desktop)
- [ ] UTM parametry jsou na všech odkazech
- [ ] Konverzní tracking je aktivní (GA4 + platformový pixel)
- [ ] Reklamy prošly schválením platformy
- [ ] Budget je schválen Marketing managerem
- [ ] Negativní klíčová slova jsou nastavena (Google)
- [ ] A/B test varianty jsou nastaveny

---

## Krok 4: Spuštění a monitoring prvních 48 hodin

**Den 1 (spuštění):**
1. Spustit kampaň dle plánu.
2. Zkontroluj do 2 hodin: kampaně jsou aktivní, reklamy se zobrazují.
3. Ověř konverzní tracking: udělej testovací konverzi.

**Den 2 (první data):**
- Zkontroluj: imprese, kliky, CTR, CPC, konverze.
- Pokud CTR < 0,5 % (Search) → prever Headlines.
- Pokud CPC je výrazně nad průměrem → zkontroluj Quality Score.

---

## Krok 5: Průběžná optimalizace

| Frekvence | Akce |
|-----------|------|
| Denně | Kontrola výdajů vs. plánu |
| 2× týdně | Kontrola CTR, CPC, konverzí – eskaluj pokud výrazná odchylka |
| Týdně | Negativní klíčová slova, pozastavení neklikávaných reklam |
| Měsíčně | A/B test výsledky, aktualizace kreativ, přehodnocení cílení |

---

## Krok 6: Reporting

1. Exportuj data z platformy (Google Ads / Meta) za období.
2. Porovnej s cílovými KPI z briefu.
3. Vyplň reportovací šablonu v ClickUp:

```
Kampaň: [název]
Období: [od – do]
Platforma: [Google / Meta / Sklik]
Budget plán: [CZK] | Budget skutečnost: [CZK]

Výsledky:
- Imprese: 
- Kliky: 
- CTR: 
- CPC průměr: 
- Konverze: 
- CPA: 
- ROAS (pokud e-commerce): 

Klíčová zjištění:
1.
2.
3.

Doporučení pro další kolo:
```

4. Sdílej report s Marketing managerem a zadavatelem.

---

## Krizové scénáře

| Problém | Řešení |
|---------|--------|
| Kampaň čerpá budget příliš rychle | Snížit denní budget nebo pozastavit; informovat Marketing managera |
| Nulové konverze po 3 dnech | Zkontroluj tracking, landing page, relevanci reklam |
| Reklama odmítnuta platformou | Zkontroluj compliance pravidla, upravit text / obrázek |
| Chybné UTM = nečitelná data | Přepnout tracking co nejdříve; data z dané periody označit jako nevalidní |

---

## Nástroje

- Google Ads, Meta Ads Manager, Sklik
- GA4 (tracking, konverze)
- HubSpot (UTM, campaign attribution)
- ClickUp – list PPC Kampaně

---

## Odkazy

- `07-ppc-kampane-PROCES-2026.md` – přehled procesu, RACI, SLA
- `02-web-landing-SOP-2026.md` – landing page
- `06-promo-akce-PROCES-2026.md` – promo akce (PPC jako kanál)
