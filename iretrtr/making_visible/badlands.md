## (bad)lands
[project repository](https://github.com/iretrtr/dsii-2018-unirsm.github.io/tree/master/iretrtr/making_visible)
<br>Il termine *badlands* sta a indicare un’area tipicamente arida in cui rocce sedimentarie e terreni ricchi di argilla sono stati erosi ampiamente da vento e acqua. Sono terreni ostici, diffcili da esplorare ma di una bellezza imprescindibile.

![Layers of rock stand visible in the badlands in Badlands National Park in South Dakota.](https://i.imgur.com/W4xC7Np.jpg)

**parole chiave** <br>altruismo, condivisione, comunità, cartografia

**concept**<br>
Le comunità online sono *luoghi* a tutti gli effetti, luoghi di aggregazione e di scambio, a volte di conflitto, altre volte di rifugio. Il *luogo* è uno spazio in cui vive una comunità che ne parla.

*Se ti dico che la città cui tende il mio viaggio è discontinua nello spazio e nel tempo, ora più rada ora più densa, tu non devi credere che si possa smettere di cercarla.* (Italo Calvino - Le Città Invisibili)

Che aspetto hanno le community? Una comunità virtuale viene generata e "tenuta in vita" dagli utenti che ne fanno parte, è ovunque e in nessun luogo allo stesso tempo. Nasce con l'interazione tra utenti ed è sempre in divenire fintantoché tale interazione segue nell'essere presente. Le relazioni che si creano vanno oltre il semplice scambio di opinioni o aiuto reciproco. *Luogo* simbolo delle community è l'internet forum, punto di aggregazione e spesso di produzione di artefatti visivi, testuali e/o artistici legati a un argomento di interesse comune. Le community possono essere considerate città, città con i propri abitanti che intrattengono scambi e relazioni, con visitatori che vanno e vengono, città che crescono rapidamente o in modo lento, che mutano, correndo il pericolo di diventare città fantasma, a volte inaccessibili ma sempre immortali. Due esempi chiave sono MySpace (2004) e LiveJournal (1999). MySpace, piattaforma social di punta, è stata oscurata dall’arrivo di Facebook e Twitter. LiveJournal, fulcro della fandom subculture, ha riscontrato un declino nll’ultimo decennio. La comunità non si è sciolta, è semplicemente migrata su altri siti (ArchiveOfOurOwn, Tumblr) rendendo LiveJournal una *ghost town*. Il materiale prodotto dagli utenti nel tempo è ancora presente, ma le interazioni sono un fantasma di ciò che erano.

Visualizzare le community online non è semplice, forse perché sono caratterizzate da una combinazione di fattori materiali e concettuali. Il primo passo per la concretizzazione di un luogo è metterlo su carta. Cartografare significa visualizzare informazioni geografiche, statistiche, demografiche, economiche, politiche, culturali di un dato luogo, informazioni non solo legate alla fisicità del luogo ma anche alla comunità che lo abita.

*(bad)lands* è una cartografia interattiva e mutevole delle community online con lo scopo di formalizzare, visualizzare e concretizzare gli scambi degli utenti. Il luogo viene così generato dai dati degli utenti, dalla loro presenza, dalla frequenza delle interazione, dalla quantità di discussioni prodotte. Il terreno è *vivo*, si modella nel tempo e si espande cambiando la sua morfologia.

Idealmente per ogni community online, e quindi per ogni internet forum, può essere realizzata una cartografia. I dati di tale community diventano la base per la generazione del luogo. In questo caso, per la realizzazione di un prototipo, è stato necessario identificare una specifica community su cui lavorare. La scelta è ricaduta su Reddit.

**dati**<br>
*Reddit*: caso studio scelto per la selezione dei dati. Perché Reddit? Il fatto se Reddit possa essere considerato un "forum" a tutti gli effetti è discussione ancora aperta. Certamente sposa alcuni aspetti dei più classici forum (subreddit non sono altro che subforum, al cui interno trovare singoli thread di discussione), contrariamente ai forum introduce un sistema di votazione e risposta diretta attraverso commenti (distaccandosi dal classico "quote"). Non è un "forum ufficiale" e per questo il contenuto viene generato totalmente dagli utenti, spesso senza essere eccessivamente mediato. Non c'è dubbio però che sia uno dei *luoghi* di aggregazione e condivisione più frequentati online al cui interno possono essere identificate comunità di ogni genere, ospita grandi community così come community di nicchia.

**querying Reddit**<br>
Per la realizzazione del prototipo si è deciso di visualizzare la cartografia di un dato subreddit, ovvero di una data community. Le informazioni pubbliche presenti su Reddit possono essere raccolte semplicemente digitando `.json` alla fine di qualsiasi URL Reddit, questa operazione restituisce appunto un file JSON. La URL tipica di un subreddit è la seguente: http://www.reddit.com/r/subreddit, dove subreddit è il nome unico di tale subreddit. I dati a cui si riesce a risalire sono numerosi e non tutti sono utili alla costruzione di una cartografia del luogo di tale subreddit. Dati inerenti a discussioni, temi, attività, traffico utenti possono essere raccolti ricorsivamente e all’occorrenza confrontati.

aggiungendo `.json` al URL di un singolo subreddit è possibile leggerne (alcuni) dati. Stesso criterio può essere applicato ad ogni altro URL reddit per acquisire dati JSON di quella data pagina.
<br> es: https://www.reddit.com/r/The_Donald/.json

reddit API [+](https://www.reddit.com/dev/api)
<br>reddit JSON [+](https://github.com/reddit-archive/reddit/wiki/JSON)
<br>Pusher Realtime Reddit API [+](https://blog.pusher.com/pusher-realtime-reddit-api/)
<br>pushshift reddit directory contents [+](http://files.pushshift.io/reddit/)

Reddit è la *badland*.<br>
• Ogni subreddit costituisce una città, un insediamento.<br>
• Il nome del subreddit dà il nome alla città.<br>
• Gli iscritti a un subreddit rappresentano la popolazione di tale insediamento dettando il livello di dettaglio della mappa di tale luogo.<br>
• All'interno dell'insediamento troviamo una serie di luoghi di interesse dettati dai topic.<br>
• I voti ricevuti da un topic ne denotano la rilevanza, più un topic è rilevante più è alta la sua quota.<br>
• La quantità di commenti sotto un determinato topic ne denota la popolarità, più un topic è popolare più gravita verso il centro della mappa.<br>
• Se il subreddit è NSFW viene etichettato come "off limits".<br>

*altre possibili implementazioni*
<br>• Gli utenti attivi negli ultimi 15 minuti vengono rapprensentati con pallini in movimento, gravitano attorno al luogo di interesse dove è stata riscontrata l'ultima azione da loro compiuta (es. topic votato/commentato) e si spostano di accordo. Se sono solo attivi senza aver compiuto nessuna azione sono fermi al centro della mappa.<br>
• La quantità di parole positive e negative all'interno dei contenuti testuali di tale subreddit denotano la presenza o assenza di flora e fauna dell'insediamento.<br>
• Gli utenti bannati costituiscono un insediamento a sé.<br>

**metafora visiva**
<br>L’obiettivo è quello di trovare una metafora visiva ideale, gli approcci possono essere molteplici e per un primo prototipo si è scelta la seguente strada: un subreddit identifica una comunità che discute di un determinato argomento, ogni subreddit definisce quindi un insediamento; gli iscritti a un subreddit rappresentano la popolazione di tale insediamento dettando il livello di dettaglio della mappa di tale luogo; all’interno dell’insediamento troviamo una serie di luoghi di interesse dettati dai topic, i voti ricevuti da un topic ne denotano la rilevanza, più un topic è rilevante più è alta la sua quota; la quantità di commenti sotto un determinato topic ne denota la popolarità. Il topic più popolare si concretizza nella capitale dell’insediamento. Inoltre la presenza di contenuti marcati come NSFW porta il territorio verso una colorazione di sfumature del rosso.

**generare una mappa**
<br>L’idea è quella di creare una cartografia plausibile, verosimile e non astratta, dando così una “fisicità” a un luogo che non esiste nello spazio reale. La forma della mappa di un insediamento (subreddit) viene generata basandosi su un diagramma di Voronoi di un insieme di punti nel piano, la quantità di punti che lo andranno a costituire è data dal numero della popolazione (subreddit subscribers). Vista l’enorme quantità di iscritti ai più popolari subreddit è stato necessario rimappare i valori su una scala da 10 a 1500, dove 10 è il numero minimo di tasselli del diagramma e 1500 il numero massimo. La scala originale va da un minimo di 1 iscritto a un massimo di 21,352,277 iscritti che corrisponde agli iscritti del subreddit più popolare al momento secondo redditmetrics.com (https://www.reddit.com/r/announcements/). Su tale tassellazione verranno delineati i confini dell'insediamento. Più è alto il numero della popolazione più i confini della mappa saranno definiti e "organici". Ogni tassello viene marcato come *land* o *water* così da delineare i confini di tale insediamento. Una volta identificato il territorio, su di esso vengono collocati i luoghi di interesse (topic). La capitale viene assegnata al luogo di interesse più frequentato, ovvero quello corrispondente al topic con il più alto numero di commenti. Di seguito vengono creati monti e pianure: i luoghi di interesse più rilevanti (topic con un alto score) avranno quota maggiore, gli altri di conseguenza. Ad ogni luogo di interesse viene assegnato un nome proprio generato dal titolo del rispettivo topic. La mappa viene elaborata dopo aver inserito nella casella di input il nome unico del subreddit di cui si desidera visualizzare la cartografia.

![Due diagrammi di Voronoi a confronto, i punti che li generano sono i subreddit_subscribers di quel dato subreddit](https://i.imgur.com/7bfhi1B.png)
<br>esempio di due diagrammi fondati sul numero di subreddit subscribers appartenenti a due subreddit differenti.<br>libreria utilizzata > semplificazione di p5.voronoi, Dozed12 [+](https://github.com/Dozed12/p5.voronoi)

![Due mappe generate a partire da due subreddit r/piracy e r/The_Donald](https://i.imgur.com/2AG7tNV.png)
<br>generazione della mappa, definizione del territorio e dei confini, studio sulla generazione di heightmap.

![Due mappe generate a partire da due subreddit r/piracy e r/WritingPrompts](https://i.imgur.com/Pdrtrag.png)
<br>generazione della mappa, definizione del territorio e dei confini, generazione nomi delle città, piccola legenda.

**generatore di nomi**
<br>I nomi delle singole città si basano sul testo del titolo del relativo topic. Il primo passo per la scrittura dell'algoritmo è stato quello di dividere le lettere di ogni singolo titolo in due array: vocali e consonanti. Questo passaggio è stato necessario per poi poter assemblare sillabe formate da consonante/vocale/consonante che accoppiate potessere creare una parola leggibile e riconducibile a un nome proprio (ovviamente in una lingua inventata). Per ogni topic viene così generato un nome unico e univoco che non cambierà nel tempo in quanto la scelta delle consonanti e vocali che andranno a comporre le sillabe per la nascita del nome non è casuale.

![Mappa del subreddit r/europe](https://i.imgur.com/kl8CIL1.png)

**Voronoi Tessellation references**
<br> Voronoi Tessellation, Mike Bostock [+](https://bl.ocks.org/mbostock/4060366)
<br> Voronoi diagram, Sepand Ansari [+](https://codepen.io/sepans/pen/Qbgaby)
<br> p5.voronoi, Dozed12 [+](https://github.com/Dozed12/p5.voronoi)
<br> Voronoi Tessellation, Azgaar [+](https://bl.ocks.org/Azgaar/4904e89c12c7347a9e1639edb7655e10) [+](https://bl.ocks.org/Azgaar/9f803911c6850d45334f1a47205b7294)

**what is it?** *(bad)lands* è un sito web che visualizza una cartografia interattiva e mutevole della community di Reddit. Tale mappa è navigabile ed esplorabile ma non modificabile direttamente, si espande ogni volta che nasce una nuova community. La sua morfologia cambia nel tempo a seconda delle interazioni tra utenti.

**how does it work?** I dati, presenti in un file JSON, vengono letti e trasformati da un algoritmo per visualizzare tutti gli insediamenti (subreddit) presenti sulla mappa principale. La dimensione degli insediamenti varia ed è data dal numero di abitanti (subbers) di tali insediamenti. Al centro della mappa troviamo gli insediamenti più popolosi, a mano a mano che ci spostiamo verso i confini troviamo insediamenti meno popolosi (comunità di nicchia). Cliccando su un insediamento si apre la sua cartografia personale. Da questa visualizzazione possiamo vedere la quantità, la rilevanza, e la popolarità dei luoghi di interesse. I pallini bianchi rappresentano gli abitanti che si muovono di luogo di interesse in luogo di interesse. Cliccando su un pallino, appare una rete di relazioni che lo collega ad altri abitanti. La scala cromatica e la presenza o assenza di fauna e flora denotano la sicurezza del luogo (la positività o negatività delle discussioni presenti in tale community).

**what does it mean?** *(bad)lands* vuole sottolineare l'importanza delle comunità online. Tali comunità vengono così visualizzate sotto forma di insediamenti tenuti in vita dall'interazione tra utenti. Attraverso questa operazione si tenta di restituire una leggittimità e serietà agli scambi online. Il mio tempo sulla rete non è tempo perso, ma è il tempo di un viaggio verso l'esplorazione di nuovi mondi. La mia esplorazione potrà portarmi in un territorio sicuro e amichevole così come potrebbe avvenire il contrario. Sono le community online intrinsecamente artificiose e negative, o così come nella vita sta a me scegliere in che modo relazionarmi con gli altri, e con quali "altri" relazionarmi?

**what if?** Cosa succederebbe se tale mappa fosse un mondo 3D che può essere tenuto in mano ed esplorato sollevando pezzi, aprendo porte, ruotando, girando come fosse un cubo di Rubik?

**design fiction**
<br>In un futuro le comunità online sono le nostre vere città. Grazie a un dispositivo di realtà aumentata è possibile rimanere in contatto con il mondo concreto attorno a noi. Sopra la morfologia della nostra *città concreta*, però, viene aggiunto un nuovo layer che per colori, materiali, forme rispecchia lo stato della nostra comunità. La città diviene così viva e cambia e muta grazie alle interazioni tra gli utenti. I *topic* diventano veri e propri luoghi di aggregazione, vengono rimappati sulla *città concreta* diventando così luoghi a cui è possibile accedere fisicamente per incontrarsi con gli altri. La lingua non è più una barriera grazie alla traduzione istantanea, la comunicazione avviene verbalmente. Per finire è inoltre possibile accedere a una riconfigurazione passata degli scambi potendo assistere così alle discussioni che sono avvenute in nostra assenza.

**project references**<br>
personal Knowledge database, Santiago Ortiz [+](http://intuitionanalytics.com/other/knowledgeDatabase/#i=256)<br>
Map of Tenderness [+](https://media.gucci.com/content/DiaryHeroArticle_Standard_1600x812/1445360417/DiaryHeroArticle_issue03-map_001_Default.jpg)<br>
Dreams, Media Molecule [+](http://dreams.mediamolecule.com/)
<br> Realtime Reddit API (demo app) [+](http://files.pushshift.io/reddit/) [+](http://realtime-reddit-demo.herokuapp.com/) [+](https://github.com/pusher-community/pusher-realtime-reddit-demo)
<br> Generating fantasy maps & naming languages, Martin O'Leary [+](http://mewo2.com/notes/terrain/) [+](http://mewo2.com/notes/naming-language/)
<br> Uncharted Atlas, Martin O'Leary [+](https://twitter.com/unchartedatlas)
<br> Polygonal Map Generation for Games, redblobgames [+](http://www-cs-students.stanford.edu/~amitp/game-programming/polygon-map-generation/#graphs)
<br> Planet, Oskar Stålberg [+](http://oskarstalberg.com/game/planet/planet.html)
<br> No Man's Sky, Hello Games [+](https://www.nomanssky.com/)
<br> No Man's Sky Procedural Content [+](http://3dgamedevblog.com/wordpress/?p=836)
<br> Here Dragons Abound, Scott Turner [+](https://heredragonsabound.blogspot.it/)
<br> Fantasy Map Generator, Azgaar [+](https://azgaar.github.io/Fantasy-Map-Generator/) [+](https://github.com/Azgaar/Fantasy-Map-Generator) [+](https://azgaar.wordpress.com/)

![badlands reference image](https://i.imgur.com/ngP0Fpe.png)
