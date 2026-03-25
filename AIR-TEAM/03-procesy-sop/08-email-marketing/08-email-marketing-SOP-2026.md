# Email marketing – SOP (pracovní postup)

#marketing #sop #email

**Vlastník:** (doplnit – Email specialist)
**Vazba na Proces:** `08-email-marketing-PROCES-2026.md`
**ClickUp list:** Email marketing (složka Kampaně & Promo)

---

## Typy e-mailů

| Typ | Popis | Zodpovídá |
|-----|-------|-----------|
| Newsletter | Pravidelný, dle content plánu | Content + Email specialist |
| Kampaňový e-mail | Promo akce, launch produktu | Digital specialist |
| HubSpot workflow | Automatizovaná sekvence | Email / Digital specialist |
| Transakcional | Potvrzení, notifikace (e-shop) | IT + Email specialist |

---

## Krok 1: Brief

### Co musí brief obsahovat
- [ ] Typ e-mailu (newsletter / kampaně / workflow)
- [ ] Cíl (prodej, registrace, awareness, follow-up)
- [ ] Segment (komu se posílá – HubSpot list nebo vlastnost)
- [ ] Obsah a CTA (co má příjemce udělat)
- [ ] Grafika potřeba? (ano/ne – brief do `09-grafika-foto-video-PROCES-2026.md`)
- [ ] Termín odeslání
- [ ] Jazykové mutace (CZ / EN / DE / …)

---

## Krok 2: Příprava obsahu

### Struktura e-mailu
1. **Předmět** (max 50 znaků) + **Preheader** (max 90 znaků)
   - Předmět musí jasně říkat, co příjemce získá
   - Preheader rozšiřuje předmět, ne ho opakuje
2. **Hero sekce** – vizuál nebo headline nad záhybem (viditelné bez scrollování)
3. **Jádro obsahu** – max 3 sekce, každá s jasným CTA
4. **Zápatí** – kontakt, unsubscribe link (povinný), adresa firmy

### Šablona předmětu e-mailu

| Situace | Vzor předmětu |
|---------|---------------|
| Promo akce | `[Brand] akce do [datum] – [benefit]` |
| Nový produkt | `Nové [produkt] – dostupné nyní` |
| Newsletter | `AIR TEAM: [téma 1] a [téma 2] – [měsíc]` |
| Follow-up | `Navazujeme – [kontext]` |

---

## Krok 3: Nastavení v HubSpotu

1. Přihlaš se do HubSpotu → Marketing → Email → Create email.
2. Vyber šablonu nebo vytvoř novou.
3. Vyplň:
   - [ ] Předmět a preheader
   - [ ] Sender name a sender email (nereply vs. jméno osoby)
   - [ ] HubSpot Campaign (přiřadit ke kampani)
4. Vlož obsah a grafiku.
5. Nastav segmentaci:
   - [ ] Send to: konkrétní list nebo aktivní kontakty dle vlastností
   - [ ] Exclude: odhlášené, bounce, neaktivní (>12 měsíců bez otevření)
6. UTM parametry: HubSpot je přidá automaticky pokud je kampaň nastavena.

---

## Krok 4: A/B test (doporučeno pro kampaňové e-maily)

- Testuj vždy jen jednu proměnnou: předmět NEBO CTA NEBO obrázek.
- Velikost testovací skupiny: min. 20 % listu na každou variantu.
- Vítěz: po 4 hodinách od odeslání (open rate / CTR).
- Dokumentuj výsledky testu v ClickUp tasku.

---

## Krok 5: QA checklist před odesláním

- [ ] Mobilní zobrazení (hero + CTA viditelné bez scrollu)
- [ ] Rendering v Gmailu (test přes Litmus nebo skutečné testovací adresy)
- [ ] Všechny URL funkční a mají UTM parametry
- [ ] Unsubscribe link je přítomen a funkční
- [ ] Sender jméno a e-mail odpovídají obsahu (ne noreply pro osobní zprávy)
- [ ] Segment je správný (pošli si testovací email sám/a sobě)
- [ ] Personalizace funguje (pokud `{{ contact.firstname }}` je použito)
- [ ] Gramika a fakta jsou zkontrolovány

### Postup testovacího odeslání
1. Klikni **Send test email** → vlož min. 3 testovací adresy (Gmail, Outlook, Firemní).
2. Projdi e-mail na mobilu.
3. Klikni na všechna tlačítka.
4. Zkontroluj zobrazení obrázků (i při blokovaných obrázcích – alt text).

---

## Krok 6: Odeslání a monitoring

**Optimální čas odeslání (orientačně):**
- B2B: Úterý–čtvrtek, 08:00–10:00 nebo 14:00–16:00
- E-shop (B2C): Čtvrtek–pátek, 17:00–19:00

**Po odeslání (prvních 60 minut):**
- Zkontroluj HubSpot dashboard: doručitelnost, první open rate.
- Pokud bounce rate > 5 % → zastavit a zkontrolovat seznam.

---

## Krok 7: Reporting

Vyhodnoť do 7 dní po odeslání:

```
Typ e-mailu: [název]
Datum odeslání: 
Segment (počet příjemců): 

Výsledky (Excluding Bots):
- Open rate: 
- CTR: 
- Unsubscribe rate: 
- Bounce rate: 
- Top clicked links: 

Splnění cíle: Ano / Částečně / Ne
Poznámka k výsledkům:
```

---

## Krok 8: Správa workflow a automatizací

**Při vytváření nového workflow:**
1. Definuj trigger (event, vlastnost kontaktu, datum).
2. Nastav delay (výchozí: 1 pracovní den, ne přes víkend).
3. Nastav exit conditions (odhlášení, konverze, vlastnost změněna).
4. Otestuj workflow na testovacím kontaktu.
5. Dokumentuj workflow v ClickUp (název, trigger, scope, zodpovídá).

---

## Krizové scénáře

| Problém | Řešení |
|---------|--------|
| E-mail odeslán špatnému segmentu | Okamžitě informovat Marketing managera; připravit omluvu / follow-up |
| Nefunkční odkaz v odeslaném e-mailu | Opravit landing page; poslat follow-up e-mail s opravou |
| Vysoký unsubscribe rate (>1 %) | Přezkoumat segment, frekvenci a relevanci obsahu |
| HubSpot výpadek při plánovaném odeslání | Dokumentovat, odeslat manuálně nebo posunout termín |

---

## Nástroje

- HubSpot (email builder, workflow, reporting)
- Litmus nebo testovací e-maily (rendering QA)
- GA4 (konverzní tracking)
- ClickUp – list Email marketing

---

## Odkazy

- `08-email-marketing-PROCES-2026.md` – přehled procesu, RACI, SLA
- `06-promo-akce-PROCES-2026.md` – promo akce (email jako kanál)
- `03-blogy-clanky-SOP-2026.md` – obsah pro newsletter
