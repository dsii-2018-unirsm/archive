# The flow towards Europe #  

**anno — 2015**

**design — Lucify e Ville Saarinen**   

**project — The flow towards europe**         

![The flow towards Europe](https://i.imgur.com/PRnkjsP.gif)

### what’s — ###

L'Europa sta vivendo la più grande crisi dei rifugiati dalla seconda guerra mondiale. Sulla base dei dati dell'agenzia per i rifugiati delle Nazioni Unite (UNHCR), Ville Saarinen e Juho Ojala nel team finlandese di Lucify, cercano di chiarire le l'entità della crisi. Il progetto di visualizzazione grafica di dati è una mappa che mostra il flusso dei richiedenti asilo verso i paesi europei nel tempo. La visualizzazione è pensata per fornire una comprensione intuitiva del fenomeno nelle sue dimensioni di larga scala; percorsi o tempi di percorrenza non sono volutamente accurati. É presente anche un digramma di flusso che mostra il tasso totale dei provenienti e richiedenti asilo nei diversi paesi.
[+](https://www.lucify.com/the-flow-towards-europe/)

### how does it work — ###

Ogni punto dovrebbe idealmente rappresentare una persona, tuttavia vista la mole di dati il grafico risulterebbe troppo affollato e servirebbero prestazioni che non tutti i browser supportano, per questo ogni punto mobile sulla mappa rappresenta da 25 a 50 persone, a seconda delle caratteristiche del dispositivo su cui vengono visualizzate. Passando il mouse sui paesi vengono mostrati i dettagli. Cliccando su un paese si blocca la selezione. I conteggi mostrati al passaggio del mouse rappresentano il numero di persone che hanno lasciato o sono arrivati in un paese da gennaio 2012 a dicembre 2017. Il set di dati è basato su rapporti sui richiedenti asilo mensili. É stato assegnato a ciascun rifugiato una velocità casuale tra 4 e 6 km/h ed è stata calcolata la data di inizio tenendo in considerazione la lunghezza del viaggio, la velocità e la data di arrivo. Naturalmente, i rifugiati si spostano con diversi mezzi, tra cui camminare, volare o andare in barca, in treno o in auto. Per questo motivo la lunghezza del viaggio è stata calcolata approssimando una velocità media di 5 km/h.
Nella seconda visualizzazione è stato scelto un diagramma di Sankey (1) con interazioni appropriate per concentrarsi sui singoli paesi.
L’implementazione è stata fatta in D3, PixiJS e la processazione dei dati in Ruby. Il codice sorgente della visualizzazione è disponibile in open source.
[+](https://github.com/lucified/lucify-refugees)

### what does it mean — ###
Il progetto prende in esame dati del periodo compreso fra gennaio 2012 e dicembre 2015, e poi essere integrati fino a dicembre 2017. A fine 2010 e inizio del 2011 si descriveva il fenomeno giornalisticamente come "primavera araba" per indicare le proteste e la serie di agitazioni cominciate in quale periodo che rapidamente si è evoluto in conflitti violenti in diversi paesi, con la Siria come la più colpita. Questo e molti altri fattori politici, umanitari, economici e ambientali hanno innescato il recente numero elevato di migranti in cerca di rifugio nell'Unione europea (UE). Anche se la maggior parte degli individui sfollati con la forza è ospitata nei loro paesi d'origine o all'interno della regione (ad esempio in Pakistan, Iran, Turchia e Libano), tuttavia, un numero insolitamente alto di migranti si è trasferito in Europa negli ultimi anni. Forse questa è una delle ragioni che hanno spinto la creazione di questo progetto. Durante il recente picco, nel 2015 e nel 2016, oltre 1,2 milioni di persone hanno presentato domanda di asilo nell'UE in ciascuno di questi anni (Eurostat, 2017a), circa il doppio di chi lo ha fatto nel 2014, suscitando polemiche politiche mentre le società europee hanno faticato a concordare su come gestire il flusso di migrazione. La questione della migrazione divide i cittadini europei, che hanno opinioni divergenti su ciò che costituisce una risposta efficace e giusta. Il recente voto sulla Brexit nel Regno Unito è considerato da alcuni come un esempio di come le questioni migratorie abbiano avuto un impatto negativo sulla popolarità del progetto UE nel suo complesso.
Dal lavoro dunque traspare l’intenzione di raggruppare e interpretare una mole di dati relativi al fenomeno dei richiedenti asilo che in qualche modo si contrappone al perenne bombardamento mediatico al quale siamo purtroppo abituati.
Il problema dei rifugiati rimane comunque una grave questione irrisolta per l’umanità.
Vedere visivamente mezzo milione di richiedenti asilo fa riflettere e ci fa capire la mole di questo fenomeno.

### what if — ###
Il progetto pur parlando di migrazione prende in esame una sola fetta di territori riconducibili all’Europa, perché non estendere il lavoro integrando, per esempio, il Nord America? Inoltre sarebbe interessante mostrare i principali eventi che potrebbero aver permesso la migrazione, mettendo in evidenza la causa.

**note —**

1 È basato sull'esempio Sankey di Mike Bostock.

**fonti dei dati —**

Dati mensili dei richiedenti asilo disponibili online presso l'UNHCR. [+](http://popstats.unhcr.org/en/asylum_seekers_monthly)
[+](http://data.unhcr.org/syrianrefugees/regional.php)


