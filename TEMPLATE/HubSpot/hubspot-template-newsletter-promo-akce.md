# ŠABLONA: Newsletter – Promo akce (HubSpot)

> Tato šablona slouží pro tvorbu HTML newsletterů v HubSpotu pro promo akce (GWP, slevy, sezónní kampaně).
> Všechny hodnoty označené `[VELKÝMI PÍSMENY]` vyplň nebo nahraď. Instrukce psané kurzívou smaž před odesláním.
> Vychází ze struktury newsletteru Bose Spring 2026 (GWP SoundLink Micro).

---

## Závazné standardy

Každý výstup vytvořený z této šablony se **povinně řídí** těmito dokumenty:

1. **Tone of Voice:** [`AIR-TEAM/06-tone-of-voice/00-master-tone-of-voice-air-team-2026.md`](../../AIR-TEAM/06-tone-of-voice/00-master-tone-of-voice-air-team-2026.md)
   - Archetyp Hrdina: klidný, přesný, orientovaný na výsledek. Komunikační vzorec: **Situace → Akce → Výsledek**.
   - Preferovaný slovník: praxe, přesnost, spolehlivost, bezpečnost, výkon, připravenost.
   - Zakázaný slovník: revoluční, ultimátní, bezkonkurenční, synergie, implementovat, vágní fráze bez dat.
   - Slogan **YOUR MISSION. OUR TECHNOLOGY.** se nikdy nepřekládá ani neupravuje.

2. **Jazyk a pravopis:** [`.cursor/rules/cestina-pravopis.mdc`](../../.cursor/rules/cestina-pravopis.mdc)
   - Výstup je vždy v **češtině**, pokud zadání výslovně nepožaduje jiný jazyk.
   - Dodržuj český pravopis, gramatiku a přirozenou formulaci.
   - Anglicky ponechej pouze názvy produktů, značek a technické termíny bez vhodného českého ekvivalentu.
   - Před finalizací proveď pravopisnou kontrolu.

### Kontrolní checklist (povinný před odesláním)

Bez splnění checklistu není výstup považován za schválený.

- [ ] Je sdělení v souladu s archetypem Hrdina (klid, přesnost, orientace na výsledek)?
- [ ] Je jasně popsána situace, akce a výsledek?
- [ ] Je tón správný pro daný typ komunikace (externí promo email)?
- [ ] Obsahuje text ověřitelná fakta a reálný přínos?
- [ ] Je přítomný konkrétní další krok (CTA)?
- [ ] Zní text jako zkušený kolega z praxe – ne jako marketingový generátor?
- [ ] Je text bez zakázaného slovníku a zbytečné vaty?
- [ ] Je výstup napsán v češtině a pravopisně zkontrolován?
- [ ] Neobsahuje citlivé obchodní informace (marže, interní ceny)?
- [ ] Jsou podmínky akce schváleny právním / obchodním oddělením?

---

## Email metadata

### Subject line (A/B)

> *Napiš 2 varianty. A = přímý nákupní impuls (co zákazník dostane), B = emocionální benefit (co mu to přinese). Optimální délka: 45–60 znaků.*

A) `[PŘÍMÝ POPIS AKCE: produkt + benefit/dárek]`

B) `[EMOCIONÁLNÍ BENEFIT + příslib akce]`

### Preheader (A/B)

> *Doplňuje subject line, zobrazí se v náhledu emailu. Max. 90 znaků. Musí rozvinout subject, ne ho opakovat.*

A) `[Datum akce + co zákazník konkrétně získá]`

B) `[Benefit v kokpitu / v praxi + praktický bonus]`

### Název kampaně (interně)

> *Formát: `NL | [ZNAČKA] [ROK] | [TYP AKCE]`. Tento název se používá jako interní označení v HubSpotu.*

`NL | [ZNAČKA] [ROK] | [TYP AKCE – např. GWP / Sleva / Bundle]`

### Finální volba pro odeslání (go-live doporučení)

- Doporučený subject: **[A nebo B]**
- Doporučený preheader: **[A nebo B]**
- Důvod: *[Stručné zdůvodnění výběru – co lépe odpovídá tónu a cílovému segmentu]*

### HubSpot tracking (povinné)

> *Vyplň před vložením do HubSpotu. Použij malá písmena, bez mezer, slova odděluj podtržítky.*

- HubSpot campaign: `AT_[JAZYK]_[TRH]_[ZNAČKA]_[ROK]_[TYP AKCE]_[PRODUKT/IDENTIFIKÁTOR]`
- `utm_campaign`: `[značka]_[rok]_[typ_akce]_[produkt]`

> *Příklad: `AT_CZ_EU_Bose_Spring2026_GWP_SoundLinkMicro` / `bose_spring_2026_gwp_soundlink_micro`*

### CTA URL šablony (pro vložení do HubSpotu)

> *Každé CTA tlačítko musí mít vlastní UTM `utm_content`. Základ URL uprav dle webu, UTM parametry zachovej.*

- `[TEXT CTA 1 – primární]`
  `https://www.airteam.eu/[url-produktu-1]?utm_source=hubspot&utm_medium=email&utm_campaign=[utm_campaign]&utm_content=hero_cta_[produkt1]`

- `[TEXT CTA 2 – sekundární]`
  `https://www.airteam.eu/[url-produktu-2]?utm_source=hubspot&utm_medium=email&utm_campaign=[utm_campaign]&utm_content=hero_cta_[produkt2]`

- `[TEXT CTA 3 – terciární, kontakt/konzultace]`
  `https://www.airteam.eu/contact-us?utm_source=hubspot&utm_medium=email&utm_campaign=[utm_campaign]&utm_content=footer_contact`

> *Pokud se URL na webu liší, zachovej UTM parametry beze změny a uprav pouze základ URL.*

---

## Tělo newsletteru

### Hero nadpis

> *Psáno VERZÁLKAMI. Max. 8 slov. Vyjadřuje hlavní přínos – orientace na výsledek (Tone of Voice HRDINA).*

**[HLAVNÍ BENEFIT – VERZÁLKAMI. MAX. 8 SLOV.]**

### Hero podnadpis

> *Konkrétní produkt(y) + co zákazník získá navíc. Produkty zapisuj do `backtick` pro zvýraznění v HTML emailu.*

Pořiďte si `[PRODUKT 1]` nebo `[PRODUKT 2]` a získejte `[DÁREK / BENEFIT]` [jako dárek / se slevou X % / v ceně].

### Intro

> *Struktura povinná: Situace (co zákazník potřebuje zvládnout) → Akce (jak AIR TEAM pomáhá) → Výsledek (konkrétní přínos). Délka: 3–5 vět. Bez zakázaného slovníku (revoluční, bezkonkurenční, synergie…).*

[Situace: Popište reálnou potřebu zákazníka v provozu nebo v kokpitu. 1–2 věty.]
Od **[DATUM ZAČÁTKU]** do **[DATUM KONCE]** navíc běží [jarní / podzimní / sezónní] promoakce [ZNAČKA]:

- [Co zákazník koupí / udělá],
- [Co za to získá navíc].

### Benefit blok

> *Přesně 3 odrážky. Každá musí obsahovat konkrétní číselnou nebo ověřitelnou hodnotu. Bez vágních frází.*

**Co získáte navíc**

- [Benefit 1 – hodnota dárku nebo slevy, např. „Dárek v orientační hodnotě `[XXX USD/EUR]`"]
- [Benefit 2 – provozní přínos: komfort, bezpečnost, přesnost, efektivita]
- [Benefit 3 – technický parametr dárku nebo produktu: IP rating, výdrž baterie, certifikace…]

### CTA blok

> *Maximálně 3 CTA. Primární = hlavní produkt, sekundární = alternativní produkt, terciární = kontakt.*

- Primární CTA: `[TEXT TLAČÍTKA 1]`
- Sekundární CTA: `[TEXT TLAČÍTKA 2]`
- Terciární CTA: `[TEXT TLAČÍTKA 3 – např. Konzultace s AIR TEAM]`

### Podmínky (short form)

> *Povinná sekce. Vychází z podmínek schválených právním / obchodním oddělením. Nezjednodušuj ani nevynechávej.*

- Akce platí od **[DATUM ZAČÁTKU]** do **[DATUM KONCE]**
- Platí pro `[PRODUKT 1]` a `[PRODUKT 2]` za plnou cenu
- Max. [1] dárek / uplatnění slevy na transakci a max. [1] na domácnost
- Nelze kombinovat s jinou promoakcí
- [Dárek je zasílán odděleně po ověření nároku v rámci promoakce / Sleva se uplatňuje automaticky v košíku]

### FAQ

> *Vyber variantu podle typu akce (GWP nebo Sleva). Nepotřebnou variantu smaž. Otázky uprav dle konkrétní akce.*

---

#### Varianta A: GWP (Gift With Purchase – dárek k nákupu)

**Dostanu dárek spolu s [PRODUKTEM]?**
Ne, dárek nebude součástí balíku s [PRODUKTEM]. Bude odeslán samostatně po interním schválení a po skončení promoakce.

**Kdy mohu dárek očekávat?**
[DÁREK] bude doručen po ověření nákupu [v průběhu / do] [MĚSÍC A ROK].

**Kam bude dárek doručen?**
Po schválení bude dárek odeslán na [fakturační / dodací] adresu uvedenou při nákupu.

**Kdo hradí náklady na doručení dárku?**
Náklady na dopravu dárku hradí [zákazník – standardní poplatek za doručení / AIR TEAM – doprava zdarma].

---

#### Varianta B: Sleva / cashback

**Jak slevu uplatním?**
[Sleva se uplatní automaticky v košíku při splnění podmínek. / Zadejte kód `[PROMO KÓD]` při dokončení objednávky.]

**Lze slevu kombinovat s jinou akcí nebo věrnostním programem?**
Ne, tuto akci nelze kombinovat s jinými slevami ani věrnostním programem.

**Do kdy musím objednávku dokončit?**
Akce platí do **[DATUM KONCE]** včetně. Objednávky dokončené po tomto datu nárok na slevu nezakládají.

**Na jaké produkty sleva platí?**
Sleva platí na `[PRODUKT 1]` a `[PRODUKT 2]` za plnou cenu. [Na produkty v akci nebo výprodejové zboží se nevztahuje.]

---

### Footer věta

> *Jedna věta s výzvou k dalšímu kroku. Tón: klidný, přátelský, orientovaný na pomoc. Bez tlaku.*

[Chcete vybrat správnou variantu pro [vaše potřeby / váš způsob létání]? Napište nám a společně vybereme řešení, které vám bude sedět.]

---

## Plain-text verze (pro fallback)

> *Povinná součást emailu v HubSpotu. Musí obsahovat stejné informace jako HTML verze – bez formátování, bez obrázků.*

Předmět: [SUBJECT LINE – vybraná varianta A nebo B]

[INTRO věta shrnující nabídku a datum akce – 1–2 věty.]

[Rozvinutí benefitu a podmínek – 2–3 věty.]

Hlavní podmínky:
- max. [1] dárek / uplatnění na transakci
- max. [1] na domácnost
- nelze kombinovat s dalšími akcemi
- [dárek je zasílán odděleně po ověření nároku / sleva se uplatní automaticky]

FAQ:
- [Otázka 1]? [Odpověď 1.]
- [Otázka 2]? [Odpověď 2.]
- [Otázka 3]? [Odpověď 3.]
- [Otázka 4]? [Odpověď 4.]

CTA:
- [TEXT CTA 1]
- [TEXT CTA 2]
- [TEXT CTA 3]
