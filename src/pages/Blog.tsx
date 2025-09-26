import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

// Blog post translations
const blogPostsTranslations = {
  post4: {
    title: {
      no: "Deling av den perfekte Pinsa: En deilig duo",
      en: "Sharing the Perfect Pinsa: A Delicious Duo",
      it: "Condividere la Pinsa Perfetta: Un Delizioso Duo"
    },
    excerpt: {
      no: "Det er noe spesielt med å dele en nylaget, smakfull rett med noen du bryr deg om. Pinsa er den perfekte delbare retten.",
      en: "There's something special about sharing a freshly made, flavorful dish with someone you care about. Pinsa is the perfect shareable dish.",
      it: "C'è qualcosa di speciale nel condividere un piatto appena preparato e saporito con qualcuno a cui tieni. La Pinsa è il piatto perfetto da condividere."
    },
    content: {
      no: `
      Det er noe spesielt med å dele en nylaget, smakfull rett med noen du bryr deg om. Hvis du leter etter det ideelle måltidet å nyte sammen, ikke se lenger enn Pinsa—et italiensk flatbrød som er lett, luftig og uendelig tilpassbart. Best av alt, en godt dimensjonert Pinsa er nok til å tilfredsstille to sultne appetitten, noe som gjør det til den perfekte delbare retten.

      **Hva er Pinsa?**

      Med opprinnelse fra Italia, spesielt Roma, er Pinsa en tradisjonell type flatbrød som har skapt bølger verden over. Den er kjent for sin unike deig, som kombinerer en blanding av hvete-, ris- og soyamel, noe som resulterer i en lett, sprø skorpe med et mykt indre. Takket være en lang gjæringsprosess kan Pinsa skilte med en fordøyelig, luftig tekstur som skiller den fra tradisjonell pizza.

      **Hvorfor Pinsa er perfekt for deling**

      En av de mange grunnene til at Pinsa skinner som et fellesskap måltid er dens størrelse og allsidighet. Dens brede, runde form gjør det enkelt å kutte i skiver, omtrent som en pizza—bare med en lettere, sprøere skorpe. Å dele en Pinsa føles mer intimt og avslappet, enten du er på date, deler med en venn, eller nyter et familiemåltid. I tillegg gjør dens tiltalende utseende og variasjon av toppinger det til en fest for sansene.

      **Anbefalte toppinger for deling**

      Når det gjelder toppinger, er variasjon livets krydder. Her er noen klassiske og folkekjære kombinasjoner:

      • **Margherita**: Tomatsaus, fersk mozzarella, basilikum, en skvett olivenolje. Enkel og tidløs.
      • **Prosciutto og ruccola**: Tynne skiver prosciutto, fersk ruccola, et dryss parmesan etter steking.
      • **Sopp og urter**: Sauterte sopp, hvitløk, timian og et dryss ost.
      • **Grønnsakselsker**: Paprika, oliven, artisjokker, rødløk og et hint av oregano.

      Vurder å lage halv-og-halv Pinsa med forskjellige toppinger for å tilfredsstille ulike smaker, noe som gjør det enda mer morsomt og delt!

      **Paringsforslag**

      Forbedre din Pinsa-opplevelse med de rette drikkene og tilbehøret:

      • En sprø italiensk hvitvin som Pinot Grigio eller Vermentino
      • Lette øl eller et forfriskende brus med sitron
      • En fersk blandet salat eller antipasto-fat på siden

      **Serveringstips**

      Når din Pinsa er bakt til perfeksjon, la den hvile i noen minutter før du skjærer. Bruk en skarp pizzaskjærer eller en stor kniv for å kutte i kiler. Server varm, med en side olivenolje eller balsamicoeddik for dypping, og oppmuntre alle til å ta en skive og dele gleden.

      **Konklusjon**

      Å dele en Pinsa handler ikke bare om mat—det handler om å skape minner og nyte godt selskap over gode smaker. Kombinasjonen av dens herlige tekstur, tilpassbare toppinger og lett-å-dele størrelse gjør det til en ideell rett for to eller flere. Så neste gang du planlegger en koselig middag eller en uformell sammenkomst, vurder å bestille eller lage en Pinsa. Det er en deilig måte å knytte bånd over et måltid som er like lett og tilfredsstillende som det er deilig.

      Bon appétit!
      `,
      en: `
      There's something special about sharing a freshly made, flavorful dish with someone you care about. If you're looking for the ideal meal to enjoy together, look no further than Pinsa—an Italian flatbread that's light, airy, and endlessly customizable. Best of all, a well-sized Pinsa is enough to satisfy two hungry appetites, making it the perfect shareable dish.

      **What is Pinsa?**

      Originating from Italy, particularly Rome, Pinsa is a traditional type of flatbread that has been making waves worldwide. It's known for its unique dough, which combines a blend of wheat, rice, and soy flours, resulting in a light, crisp crust with a tender interior. Thanks to a long fermentation process, Pinsa boasts a digestible, airy texture that sets it apart from the traditional pizza.

      **Why Pinsa is Perfect for Sharing**

      One of the many reasons Pinsa shines as a communal meal is its size and versatility. Its broad, round shape makes it easy to cut into slices, much like a pizza—only with a lighter, crunchier crust. Sharing a Pinsa feels more intimate and relaxed, whether you're on a date, sharing with a friend, or enjoying a family meal. Plus, its appealing look and variety of toppings make it a feast for the senses.

      **Recommended Toppings for Sharing**

      When it comes to toppings, variety is the spice of life. Here are some classic and crowd-pleasing combinations:

      • **Margherita**: Tomato sauce, fresh mozzarella, basil, a drizzle of olive oil. Simple and timeless.
      • **Prosciutto and Arugula**: Thin slices of prosciutto, fresh arugula, a sprinkle of parmesan after baking.
      • **Mushrooms and Herbs**: Sautéed mushrooms, garlic, thyme, and a sprinkle of cheese.
      • **Vegetable Lovers**: Bell peppers, olives, artichokes, red onions, and a hint of oregano.

      Consider making half-and-half Pinsa with different toppings to cater to various tastes, making it even more fun and shared!

      **Pairing Suggestions**

      Enhance your Pinsa experience with the right drinks and sides:

      • A crisp Italian white wine like Pinot Grigio or Vermentino
      • Light beers or a refreshing sparkling water with lemon
      • A fresh mixed salad or antipasto platter on the side

      **Serving Tips**

      Once your Pinsa is baked to perfection, let it rest for a few minutes before slicing. Use a sharp pizza cutter or a large knife to cut into wedges. Serve hot, with a side of olive oil or balsamic vinegar for dipping, and encourage everyone to grab a slice and share the joy.

      **In Conclusion**

      Sharing a Pinsa isn't just about food—it's about creating memories and enjoying good company over great flavors. The combination of its delightful texture, customizable toppings, and easy-to-share size makes it an ideal dish for two or more. So next time you're planning a cozy dinner or a casual get-together, consider ordering or making a Pinsa. It's a delicious way to bond over a meal that's as light and satisfying as it is tasty.

      Bon appétit!
      `,
      it: `
      C'è qualcosa di speciale nel condividere un piatto appena preparato e saporito con qualcuno a cui tieni. Se stai cercando il pasto ideale da gustare insieme, non cercare oltre la Pinsa—un pane piatto italiano che è leggero, arioso e infinitamente personalizzabile. Soprattutto, una Pinsa ben dimensionata è sufficiente per soddisfare due appetiti affamati, rendendola il piatto perfetto da condividere.

      **Cos'è la Pinsa?**

      Originaria dell'Italia, in particolare di Roma, la Pinsa è un tipo tradizionale di pane piatto che sta facendo scalpore in tutto il mondo. È nota per il suo impasto unico, che combina una miscela di farine di grano, riso e soia, risultando in una crosta leggera e croccante con un interno tenero. Grazie a un lungo processo di fermentazione, la Pinsa vanta una consistenza digeribile e ariosa che la distingue dalla pizza tradizionale.

      **Perché la Pinsa è Perfetta per Condividere**

      Una delle tante ragioni per cui la Pinsa brilla come pasto comunitario è la sua dimensione e versatilità. La sua forma ampia e rotonda la rende facile da tagliare a fette, proprio come una pizza—solo con una crosta più leggera e croccante. Condividere una Pinsa si sente più intimo e rilassato, che tu sia ad un appuntamento, condividendo con un amico, o gustando un pasto in famiglia. Inoltre, il suo aspetto accattivante e la varietà di condimenti la rendono una festa per i sensi.

      **Condimenti Raccomandati per Condividere**

      Quando si tratta di condimenti, la varietà è il sale della vita. Ecco alcune combinazioni classiche e apprezzate dalla folla:

      • **Margherita**: Salsa di pomodoro, mozzarella fresca, basilico, un filo d'olio d'oliva. Semplice e senza tempo.
      • **Prosciutto e Rucola**: Fette sottili di prosciutto, rucola fresca, una spolverata di parmigiano dopo la cottura.
      • **Funghi ed Erbe**: Funghi saltati, aglio, timo e una spolverata di formaggio.
      • **Amanti delle Verdure**: Peperoni, olive, carciofi, cipolle rosse e un tocco di origano.

      Considera di fare una Pinsa metà e metà con condimenti diversi per soddisfare vari gusti, rendendola ancora più divertente e condivisa!

      **Suggerimenti per l'Abbinamento**

      Migliora la tua esperienza Pinsa con le bevande e i contorni giusti:

      • Un vino bianco italiano frizzante come Pinot Grigio o Vermentino
      • Birre leggere o un'acqua frizzante rinfrescante con limone
      • Un'insalata mista fresca o un piatto di antipasti a parte

      **Consigli per Servire**

      Una volta che la tua Pinsa è cotta alla perfezione, lasciala riposare per alcuni minuti prima di affettarla. Usa un tagliapizza affilato o un coltello grande per tagliare a spicchi. Servi calda, con un contorno di olio d'oliva o aceto balsamico per intingere, e incoraggia tutti a prendere una fetta e condividere la gioia.

      **In Conclusione**

      Condividere una Pinsa non riguarda solo il cibo—riguarda la creazione di ricordi e il godersi la buona compagnia sui grandi sapori. La combinazione della sua deliziosa consistenza, condimenti personalizzabili e dimensione facile da condividere la rende un piatto ideale per due o più persone. Quindi la prossima volta che stai pianificando una cena accogliente o un incontro informale, considera di ordinare o fare una Pinsa. È un modo delizioso per legare su un pasto che è tanto leggero e soddisfacente quanto gustoso.

      Bon appétit!
      `
    }
  },
  post3: {
    title: {
      no: "Pinsa vs. DIGG Pizza – derfor er La Spiserias Pinsa i Tønsberg helt unik",
      en: "Pinsa vs. DIGG Pizza – why La Spiseria's Pinsa in Tønsberg is completely unique",
      it: "Pinsa vs. DIGG Pizza – perché la Pinsa di La Spiseria a Tønsberg è completamente unica"
    },
    excerpt: {
      no: "Ekte Pinsa Romana fra La Spiseria: 72 timers heving, 75 % hydrering & premium italienske råvarer. Se hvorfor den skiller seg fra DIGG Pizza.",
      en: "Authentic Pinsa Romana from La Spiseria: 72 hours rising, 75% hydration & premium Italian ingredients. See why it differs from DIGG Pizza.",
      it: "Autentica Pinsa Romana da La Spiseria: 72 ore di lievitazione, 75% di idratazione e ingredienti italiani premium. Scopri perché si differenzia dalla DIGG Pizza."
    },
    content: {
      no: `
      I Norge kjenner mange til DIGG Pizza – et raskt, rimelig konsept med rund surdeigspizza på 3–5 minutter. Men hos La Spiseria i Tønsberg serverer vi noe helt annet: Originale Pinsa Romana. La oss se nærmere på fem nøkkelforskjeller.

      **1. Pinsa er et beskyttet varemerke**

      «Pinsa Romana» er registrert som internasjonalt varemerke av Di Marco-familien. Det betyr at navnet kun kan brukes dersom du følger den offisielle oppskriften og prosessen:

      • 3-mel-blanding (hvete, ris & soyabønne)
      • Oval/avlang form
      • Heving i minst 72 timer
      • Hydrering ≥ 75 %
      • Stekes på stein ved moderat temperatur (ca. 300 °C)

      Resultatet er en lett, luftig bunn som er sprø utenpå og myk inni.

      **2. Deig & hydrering – vitenskapen bak crunch og letthet**

      En høyere vannprosent gjør deigen mer porøs. Med ≥ 75 % hydrering får pinsa-bunnen mikroskopiske luftlommer som gir:

      • Ekstra sprø skorpe
      • Silkemyk kjerne
      • Bedre fordøyelighet – mindre "bloat"-følelse etter måltidet

      Til sammenligning annonserer DIGG Pizza en klassisk surdeig – god, men langt lavere i hydrering enn pinsa-standarden.

      **3. Premium italienske råvarer i hver bit**

      Vi importerer DOP-sertifiserte tomater, bøffel-mozzarella, parmaskinke & EVO-olje direkte fra Italia. Den kvalitetshevingen – pluss lengre produksjonstid – gjør pinsaen dyrere å lage, men smaksopplevelsen løftes vesentlig over en rask, lavpris DIGG-pizza.

      **4. Prosess & detaljfokus = pris med mening**

      72 timers kaldheving binder gluten bedre, bryter ned stivelse og utvikler naturlig umami. Den tiden – kombinert med råvarekost – forklarer premium-prisen på vår pinsa. Du betaler for håndverk, ikke hurtigmat.

      **5. DIGG Pizza – raskt, rimelig og populært**

      DIGG-kjeden ble lansert for å gi "pizza på farten" til lav pris. De bruker rund, håndstrukket surdeig og norske favoritt-ingredienser, stekt og servert på fem minutter. Det er supert til kjapp lunsj, men en helt annen kategori enn en håndverksbakt pinsa.

      **Hvorfor velge Pinsa hos La Spiseria?**

      • Lett & luftig – ingen tung mage
      • Sprø skorpe, saftig midtparti
      • Italienske topp-ingredienser
      • Ekte romersk håndverk i hjertet av Tønsberg

      Kom innom La Spiseria i Øvre Langgate og smak forskjellen selv!

      **Ofte stilte spørsmål**

      **Hva er Pinsa Romana?**
      En beskyttet romersk mattradisjon: 3-mel-deig, ≥ 75 % hydrering og 72 timers heving.

      **Er Pinsa sunnere enn vanlige pizzaer?**
      Den høye hydreringen og lange fermenteringen bryter ned gluten og stivelse, noe mange opplever som lettere for magen.

      **Hvor kan jeg spise Pinsa i Vestfold?**
      Hos La Spiseria, Tønsberg sentrum – besøk oss på Øvre Langgate 42 eller bestill online.
      `,
      en: `
      In Norway, many know DIGG Pizza – a fast, affordable concept with round sourdough pizza in 3–5 minutes. But at La Spiseria in Tønsberg, we serve something completely different: Original Pinsa Romana. Let's look closer at five key differences.

      **1. Pinsa is a protected trademark**

      "Pinsa Romana" is registered as an international trademark by the Di Marco family. This means the name can only be used if you follow the official recipe and process:

      • 3-flour blend (wheat, rice & soybean)
      • Oval/elongated shape
      • Rising for at least 72 hours
      • Hydration ≥ 75%
      • Baked on stone at moderate temperature (approx. 300°C)

      The result is a light, airy base that's crispy outside and soft inside.

      **2. Dough & hydration – the science behind crunch and lightness**

      A higher water percentage makes the dough more porous. With ≥ 75% hydration, the pinsa base gets microscopic air pockets that provide:

      • Extra crispy crust
      • Silky soft core
      • Better digestibility – less "bloated" feeling after the meal

      In comparison, DIGG Pizza advertises a classic sourdough – good, but much lower in hydration than the pinsa standard.

      **3. Premium Italian ingredients in every bite**

      We import DOP-certified tomatoes, buffalo mozzarella, Parma ham & EVO oil directly from Italy. This quality elevation – plus longer production time – makes pinsa more expensive to make, but the taste experience is significantly elevated above a fast, low-price DIGG pizza.

      **4. Process & detail focus = price with meaning**

      72-hour cold rising binds gluten better, breaks down starch and develops natural umami. That time – combined with ingredient costs – explains the premium price of our pinsa. You pay for craftsmanship, not fast food.

      **5. DIGG Pizza – fast, affordable and popular**

      The DIGG chain was launched to provide "pizza on the go" at a low price. They use round, hand-stretched sourdough and Norwegian favorite ingredients, baked and served in five minutes. It's great for a quick lunch, but a completely different category than a handcrafted pinsa.

      **Why choose Pinsa at La Spiseria?**

      • Light & airy – no heavy stomach
      • Crispy crust, juicy center
      • Italian top ingredients
      • Authentic Roman craftsmanship in the heart of Tønsberg

      Visit La Spiseria at Øvre Langgate and taste the difference yourself!

      **Frequently Asked Questions**

      **What is Pinsa Romana?**
      A protected Roman food tradition: 3-flour dough, ≥ 75% hydration and 72 hours rising.

      **Is Pinsa healthier than regular pizzas?**
      The high hydration and long fermentation breaks down gluten and starch, which many experience as easier on the stomach.

      **Where can I eat Pinsa in Vestfold?**
      At La Spiseria, Tønsberg center – visit us at Øvre Langgate 42 or order online.
      `,
      it: `
      In Norvegia, molti conoscono DIGG Pizza – un concetto veloce e conveniente con pizza a lievito madre rotonda in 3-5 minuti. Ma alla Spiseria di Tønsberg, serviamo qualcosa di completamente diverso: l'originale Pinsa Romana. Esaminiamo più da vicino cinque differenze chiave.

      **1. La Pinsa è un marchio protetto**

      "Pinsa Romana" è registrata come marchio internazionale dalla famiglia Di Marco. Ciò significa che il nome può essere utilizzato solo se si segue la ricetta e il processo ufficiali:

      • Miscela di 3 farine (grano, riso e soia)
      • Forma ovale/allungata
      • Lievitazione per almeno 72 ore
      • Idratazione ≥ 75%
      • Cotta su pietra a temperatura moderata (circa 300°C)

      Il risultato è una base leggera e ariosa che è croccante fuori e morbida dentro.

      **2. Impasto e idratazione – la scienza dietro croccantezza e leggerezza**

      Una percentuale d'acqua più alta rende l'impasto più poroso. Con un'idratazione ≥ 75%, la base della pinsa ottiene sacche d'aria microscopiche che forniscono:

      • Crosta extra croccante
      • Nucleo setoso e morbido
      • Migliore digeribilità – meno sensazione di "gonfiore" dopo il pasto

      In confronto, DIGG Pizza pubblicizza un lievito madre classico – buono, ma molto più basso in idratazione rispetto allo standard della pinsa.

      **3. Ingredienti italiani premium in ogni morso**

      Importiamo pomodori certificati DOP, mozzarella di bufala, prosciutto di Parma e olio EVO direttamente dall'Italia. Questo innalzamento della qualità – più il tempo di produzione più lungo – rende la pinsa più costosa da fare, ma l'esperienza gustativa è significativamente elevata rispetto a una pizza DIGG veloce e a basso prezzo.

      **4. Processo e focus sui dettagli = prezzo con significato**

      La lievitazione a freddo di 72 ore lega meglio il glutine, scompone l'amido e sviluppa umami naturale. Quel tempo – combinato con i costi degli ingredienti – spiega il prezzo premium della nostra pinsa. Paghi per l'artigianato, non per il fast food.

      **5. DIGG Pizza – veloce, conveniente e popolare**

      La catena DIGG è stata lanciata per fornire "pizza da asporto" a basso prezzo. Usano lievito madre rotondo tirato a mano e ingredienti norvegesi preferiti, cotti e serviti in cinque minuti. È ottimo per un pranzo veloce, ma una categoria completamente diversa da una pinsa artigianale.

      **Perché scegliere la Pinsa alla Spiseria?**

      • Leggera e ariosa – niente stomaco pesante
      • Crosta croccante, centro succoso
      • Ingredienti italiani di prima qualità
      • Autentico artigianato romano nel cuore di Tønsberg

      Visita La Spiseria in Øvre Langgate e assaggia tu stesso la differenza!

      **Domande Frequenti**

      **Cos'è la Pinsa Romana?**
      Una tradizione culinaria romana protetta: impasto a 3 farine, idratazione ≥ 75% e lievitazione di 72 ore.

      **La Pinsa è più sana delle pizze normali?**
      L'alta idratazione e la lunga fermentazione scompongono glutine e amido, cosa che molti sperimentano come più facile per lo stomaco.

      **Dove posso mangiare la Pinsa nel Vestfold?**
      Alla Spiseria, centro di Tønsberg – visitaci in Øvre Langgate 42 o ordina online.
      `
    }
  },
  post1: {
    title: {
      no: "La Pinseria & Big Ben: En Perfekt Kombinasjon i Hjertet av Tønsberg",
      en: "La Pinseria & Big Ben: A Perfect Combination in the Heart of Tønsberg",
      it: "La Pinseria & Big Ben: Una Combinazione Perfetta nel Cuore di Tønsberg"
    },
    excerpt: {
      no: "Opplev den unike kombinasjonen av autentisk italiensk pinsa og Tønsbergs mest tradisjonsrike pub.",
      en: "Experience the unique combination of authentic Italian pinsa and Tønsberg's most traditional pub.",
      it: "Vivi la combinazione unica di autentica pinsa italiana e il pub più tradizionale di Tønsberg."
    },
    content: {
      no: `
      La Pinseria og Big Ben har skapt en unik kulinarisk og sosial opplevelse midt på Torvet i Tønsberg. I overetasjen finner du La Pinseria, hvor du kan nyte autentisk italiensk pinsa med ferske, kvalitetsråvarer, mens den legendariske Big Ben Pub holder til i første etasje.

      Big Ben, som har vært en institusjon i Tønsberg siden 1991, er kjent for sin varme atmosfære, live-musikk og det trivelige miljøet. Puben har etablert seg som et av byens mest populære møtesteder, og de historiske lokalene midt i Tønsberg sentrum gir en helt spesiell ramme for både lokale stamgjester og tilreisende.

      Kombinasjonen av La Pinseria og Big Ben er perfekt for de varme sommerdagene på Torvet. Her kan du starte kvelden med deilig pinsa og forfriskende drikke på vår uteterrasse, mens du nyter live-musikk og den livlige atmosfæren fra puben under. Ferske råvarer møter tradisjon og moderne italiensk matkultur i perfekt harmoni med pubens sjarmerende miljø.

      For de som ønsker en fullkommen opplevelse, anbefaler vi å starte kvelden hos oss med en autentisk pinsa, før man fortsetter nedover trappen til Big Ben for en hyggelig kveld med god drikke og levende musikk. Dette er en unik kombinasjon som du bare finner midt på Torvet i Tønsberg - byens beste møtested for god mat, drikke og sosial atmosfære.

      Vi er stolte av å kunne tilby denne unike opplevelsen sammen med Big Ben, og ønsker både gamle og nye gjester velkommen til å oppleve det beste av både italiensk matkultur og tradisjonell pubatmosfære under samme tak.
      `,
      en: `
      La Pinseria and Big Ben have created a unique culinary and social experience right on Torvet in Tønsberg. Upstairs you'll find La Pinseria, where you can enjoy authentic Italian pinsa with fresh, quality ingredients, while the legendary Big Ben Pub is located on the ground floor.

      Big Ben, which has been an institution in Tønsberg since 1991, is known for its warm atmosphere, live music and pleasant environment. The pub has established itself as one of the city's most popular meeting places, and the historic premises in the center of Tønsberg provide a special setting for both local regulars and visitors.

      The combination of La Pinseria and Big Ben is perfect for warm summer days on Torvet. Here you can start the evening with delicious pinsa and refreshing drinks on our outdoor terrace, while enjoying live music and the lively atmosphere from the pub below. Fresh ingredients meet tradition and modern Italian food culture in perfect harmony with the pub's charming environment.

      For those who want a complete experience, we recommend starting the evening with us with an authentic pinsa, before continuing down the stairs to Big Ben for a pleasant evening with good drinks and live music. This is a unique combination that you will only find in the middle of Torvet in Tønsberg - the city's best meeting place for good food, drinks and social atmosphere.

      We are proud to offer this unique experience together with Big Ben, and welcome both old and new guests to experience the best of both Italian food culture and traditional pub atmosphere under one roof.
      `,
      it: `
      La Pinseria e il Big Ben hanno creato un'esperienza culinaria e sociale unica proprio a Torvet a Tønsberg. Al piano superiore troverai La Pinseria, dove potrai gustare l'autentica pinsa italiana con ingredienti freschi e di qualità, mentre il leggendario Big Ben Pub si trova al piano terra.

      Il Big Ben, che è un'istituzione a Tønsberg dal 1991, è noto per la sua atmosfera calda, la musica dal vivo e l'ambiente piacevole. Il pub si è affermato come uno dei luoghi d'incontro più popolari della città, e i locali storici nel centro di Tønsberg offrono un ambiente speciale sia per i clienti abituali che per i visitatori.

      La combinazione di La Pinseria e Big Ben è perfetta per le calde giornate estive su Torvet. Qui puoi iniziare la serata con una deliziosa pinsa e bevande rinfrescanti sulla nostra terrazza all'aperto, mentre ti godi la musica dal vivo e l'atmosfera vivace del pub sottostante. Gli ingredienti freschi incontrano la tradizione e la moderna cultura alimentare italiana in perfetta armonia con l'ambiente affascinante del pub.

      Per chi desidera un'esperienza completa, consigliamo di iniziare la serata da noi con un'autentica pinsa, prima di scendere le scale fino al Big Ben per una piacevole serata con buone bevande e musica dal vivo. Questa è una combinazione unica che troverai solo nel centro di Torvet a Tønsberg - il miglior punto d'incontro della città per buon cibo, bevande e atmosfera sociale.

      Siamo orgogliosi di offrire questa esperienza unica insieme a Big Ben, e diamo il benvenuto sia ai vecchi che ai nuovi ospiti per vivere il meglio della cultura alimentare italiana e dell'atmosfera tradizionale del pub sotto lo stesso tetto.
      `
    }
  },
  post2: {
    title: {
      no: "Hva gjør Pinsa så spesiell? Forskjellen mellom Pinsa og Pizza",
      en: "What Makes Pinsa So Special? The Difference Between Pinsa and Pizza",
      it: "Cosa Rende la Pinsa Così Speciale? La Differenza tra Pinsa e Pizza"
    },
    excerpt: {
      no: "Oppdag den fascinerende forskjellen mellom autentisk italiensk pinsa og tradisjonell pizza - fra deig til tekstur.",
      en: "Discover the fascinating difference between authentic Italian pinsa and traditional pizza - from dough to texture.",
      it: "Scopri l'affascinante differenza tra l'autentica pinsa italiana e la pizza tradizionale - dall'impasto alla consistenza."
    },
    content: {
      no: `
      Mange lurer på hva som egentlig skiller pinsa fra pizza. Begge kommer fra Italia, begge har italienske røtter, men forskjellene er faktisk ganske betydelige og går helt tilbake til selve deigen.

      **Deigen - Hjertet av forskjellen**

      Den største forskjellen ligger i deigsammensetningen. Mens tradisjonell pizza lages med hvetemel, består pinsa-deig av en blanding av hvetemel, soyamel og rismel. Denne unike kombinasjonen gir pinsa dens karakteristiske lett og luftige tekstur.

      **Den tradisjonelle tilberedningen**

      Den tradisjonelle tilberedningen av den italienske hovedstadens spesialitet består av en blanding av tre mel (hvete, soya og ris) og krever en 72-timers fermentering, som gir pinsa en lett og sprø deig. Siden patentering i begynnelsen av det nåværende årtusenet, har den romerske pinsa gradvis blitt introdusert i menyene til de beste restaurantene og har allerede blitt en av Italias typiske retter.

      **Fermentering og tekstur**

      Pinsa-deigen fermenteres i opptil 72 timer, betydelig lenger enn pizza-deig. Dette lange fermentering-prosessen gjør pinsa lettere å fordøye og gir den en mer kompleks smak. Resultatet er en bunn som er sprø utenpå og utrolig lett og luftig inni.

      **Formen og tykkelsen**

      I motsetning til pizzaens runde form, har pinsa en oval, rustikk form. Den er også tynnere enn de fleste pizzaer, men likevel mer luftig på grunn av den unike deigsammensetningen og fermentering-prosessen.

      **Næringsverdi**

      På grunn av den lengre fermenteringen og den unike mel-blandingen, har pinsa lavere gluten-innhold og er lettere å fordøye enn tradisjonell pizza. Den har også færre kalorier per porsjon.

      **Opprinnelse og tradisjon**

      Mens pizza har sine røtter i Napoli, kommer pinsa fra det antikke Roma. "Pinsa" kommer fra det latinske ordet "pinsere" som betyr å strekke eller å spre - en perfekt beskrivelse av hvordan deigen behandles.

      **Oppmerksomheten og kvaliteten på de valgte ingrediensene**

      Det som virkelig skiller pinsa fra andre brød er oppmerksomheten og kvaliteten på ingrediensene som velges. Hver komponent er nøye utvalgt for å skape den perfekte harmonien av smaker og teksturer.

      Hos La Pinseria tilbyr vi autentisk pinsa laget etter tradisjonelle oppskrifter, med ferske italienske ingredienser som skaper en unik smaksopplevelse du ikke finner noe annet sted i Tønsberg.
      `,
      en: `
      Many wonder what actually distinguishes pinsa from pizza. Both come from Italy, both have Italian roots, but the differences are actually quite significant and go all the way back to the dough itself.

      **The Dough - The Heart of the Difference**

      The biggest difference lies in the dough composition. While traditional pizza is made with wheat flour, pinsa dough consists of a mixture of wheat flour, soy flour, and rice flour. This unique combination gives pinsa its characteristic light and airy texture.

      **Traditional Preparation**

      The traditional preparation of the Italian capital consists of a mixture of three flours (wheat, soy and rice) and requires a 72-hour fermentation, which gives the pinsa a light and crispy dough. Since its patenting at the beginning of the current millennium, the Roman pinsa has been gradually introduced into the menus of the best restaurants and has already become one of the typical dishes of Italy.

      **Fermentation and Texture**

      Pinsa dough is fermented for up to 72 hours, significantly longer than pizza dough. This long fermentation process makes pinsa easier to digest and gives it a more complex flavor. The result is a base that is crispy on the outside and incredibly light and airy on the inside.

      **Shape and Thickness**

      Unlike pizza's round shape, pinsa has an oval, rustic shape. It's also thinner than most pizzas, but still more airy due to the unique dough composition and fermentation process.

      **Nutritional Value**

      Due to the longer fermentation and unique flour blend, pinsa has lower gluten content and is easier to digest than traditional pizza. It also has fewer calories per serving.

      **Origin and Tradition**

      While pizza has its roots in Naples, pinsa comes from ancient Rome. "Pinsa" comes from the Latin word "pinsere" which means to stretch or to spread - a perfect description of how the dough is handled.

      **The attention and the quality of the ingredients chosen**

      What truly sets pinsa apart from other breads is the attention and the quality of the ingredients chosen. Each component is carefully selected to create the perfect harmony of flavors and textures.

      At La Pinseria, we offer authentic pinsa made according to traditional recipes, with fresh Italian ingredients that create a unique taste experience you won't find anywhere else in Tønsberg.
      `,
      it: `
      Molti si chiedono cosa distingua effettivamente la pinsa dalla pizza. Entrambe vengono dall'Italia, entrambe hanno radici italiane, ma le differenze sono in realtà piuttosto significative e risalgono all'impasto stesso.

      **L'Impasto - Il Cuore della Differenza**

      La differenza più grande sta nella composizione dell'impasto. Mentre la pizza tradizionale è fatta con farina di grano, l'impasto della pinsa è composto da una miscela di farina di grano, farina di soia e farina di riso. Questa combinazione unica conferisce alla pinsa la sua caratteristica consistenza leggera e ariosa.

      **Preparazione Tradizionale**

      La preparazione tradizionale della specialità della capitale italiana consiste in una miscela di tre farine (frumento, soia e riso) e richiede una fermentazione di 72 ore, che conferisce alla pinsa un impasto leggero e croccante. Dalla sua brevettazione all'inizio del millennio corrente, la pinsa romana è stata gradualmente introdotta nei menu dei migliori ristoranti ed è già diventata uno dei piatti tipici d'Italia.

      **Fermentazione e Consistenza**

      L'impasto della pinsa fermenta fino a 72 ore, significativamente più lungo dell'impasto della pizza. Questo lungo processo di fermentazione rende la pinsa più facile da digerire e le conferisce un sapore più complesso. Il risultato è una base croccante all'esterno e incredibilmente leggera e ariosa all'interno.

      **Forma e Spessore**

      A differenza della forma rotonda della pizza, la pinsa ha una forma ovale e rustica. È anche più sottile della maggior parte delle pizze, ma comunque più ariosa grazie alla composizione unica dell'impasto e al processo di fermentazione.

      **Valore Nutrizionale**

      A causa della fermentazione più lunga e della miscela unica di farine, la pinsa ha un contenuto di glutine più basso ed è più facile da digerire rispetto alla pizza tradizionale. Ha anche meno calorie per porzione.

      **Origine e Tradizione**

      Mentre la pizza ha le sue radici a Napoli, la pinsa proviene dall'antica Roma. "Pinsa" deriva dalla parola latina "pinsere" che significa allungare o stendere - una descrizione perfetta di come viene trattato l'impasto.

      **L'attenzione e la qualità degli ingredienti scelti**

      Ciò che distingue veramente la pinsa da altri pani è l'attenzione e la qualità degli ingredienti scelti. Ogni componente è accuratamente selezionato per creare la perfetta armonia di sapori e consistenze.

      Alla Pinseria, offriamo pinsa autentica preparata secondo ricette tradizionali, con ingredienti italiani freschi che creano un'esperienza gustativa unica che non troverai da nessun'altra parte a Tønsberg.
      `
    }
  }
};

// Blog posts with translated content - now with SEO-friendly slugs
export const blogPosts = [
  {
    id: "4",
    slug: "deling-av-den-perfekte-pinsa",
    title: blogPostsTranslations.post4.title,
    excerpt: blogPostsTranslations.post4.excerpt,
    date: "2024-07-12",
    readTime: "7 min",
    content: blogPostsTranslations.post4.content,
    image: "/la-spiseria/lovable-uploads/dbfc0743-9bbf-42c3-9e50-3c4026e68073.png"
  },
  {
    id: "3",
    slug: "pinsa-vs-digg-pizza",
    title: blogPostsTranslations.post3.title,
    excerpt: blogPostsTranslations.post3.excerpt,
    date: "2024-06-15",
    readTime: "6 min",
    content: blogPostsTranslations.post3.content,
    image: "/la-spiseria/lovable-uploads/1877237c-a570-4e24-867d-27095905ac48.png"
  },
  {
    id: "2",
    slug: "forskjellen-mellom-pinsa-og-pizza",
    title: blogPostsTranslations.post2.title,
    excerpt: blogPostsTranslations.post2.excerpt,
    date: "2024-05-20",
    readTime: "5 min",
    content: blogPostsTranslations.post2.content,
    image: "/la-spiseria/lovable-uploads/6bdba3b0-8300-47ab-a084-964d808727b6.png"
  },
  {
    id: "1",
    slug: "la-pinseria-big-ben-kombinasjon",
    title: blogPostsTranslations.post1.title,
    excerpt: blogPostsTranslations.post1.excerpt,
    date: "2024-04-28",
    readTime: "4 min",
    content: blogPostsTranslations.post1.content,
    image: "https://bigbentbg.no/wp-content/uploads/2017/06/BigBen_20.jpg"
  }
];

const Blog = () => {
  const { language } = useLanguage();
  
  // Translated page title
  const pageTitle = {
    no: "Blogg",
    en: "Blog",
    it: "Blog"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 bg-pinseria-cream/20 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 font-italian text-black">{pageTitle[language]}</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blogg/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title[language]}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold mb-3 text-black group-hover:text-pinseria-red transition-colors">
                    {post.title[language]}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt[language]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative images */}
        <img 
          src="https://lapinseria.at/wp-content/uploads/2024/10/draw-pinsa.png"
          alt=""
          className="block absolute right-0 bottom-12 w-48 opacity-10 -z-0 scale-x-[-1]"
        />
        <img 
          src="https://lapinseria.at/wp-content/uploads/2024/10/tiramisu-2.png"
          alt=""
          className="block absolute left-0 top-12 w-48 opacity-10 -z-0"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
