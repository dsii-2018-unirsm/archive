
# fifteen

#mapping <br> #ephemeral <br> #instagram stories

***premessa***<br>

La ricerca è iniziata con il voler approfondire l'interesse verso gli artefatti visivi condivisi da utenti più o meno autorevoli nell'ambito del design. Studi di progettazione o singoli freelancer che contribuiscono nel tempo a definire modalità di comunicazione e senso estetico. A rendere per così dire ufficiale questo tipo di pubblicazione, il feed del proprio profilo, luogo nel quale è possibile tener traccia dei propri lavori in maniera permanente. Un'operazione del genere, si tratti di un profilo istituzionale o amatoriale, può richiedere una seria progettazione del "cosa", "come", "quando" pubblicare. Si potrebbe dire che dietro la maggioranza dei post di questo genere ci sia una sorta di senso di responsabilità e attenzione a guidare l'utente, al fine di costruire con coerenza il proprio profilo. Il luogo dove ciò avviene è Instagram, uno dei social più utilizzati in questo senso che conta ad oggi circa 800 milioni di utenti attivi in tutto il mondo. Sulla base di queste premesse, la ricerca è proseguita pensando a tutti quei media della piattaforma che non sono soggetti a una tale attenzione poiché i loro contenuti, significativamente meno rilevanti, non trovano posto nel proprio feed. Da qui nasce una riflessione su quei contenuti che, seppur contribuendo a costruire la propria identità online, sono visti dai più come modi per sperimentare, rendere note le proprie attività e tenere i propri follower in qualche modo aggiornati.

***instagram stories*** <br>

Instagram descrive la funzione stories come qualcosa che permette di "condividere i momenti della propria giornata, diversamente da quelli che si vogliono mantenere nel proprio profilo". La funzione permette di condividere foto e video di massimo 15 secondi che appaiono in un unico slideshow sotto forma di reel. I 15 secondi possono essere ripartiti in più di una story. È possibile accedere all'elenco di persone che ha visualizzato la propria story e rispondere con un'immagine o un video. Trascorse 24 ore dal momento della pubblicazione, la story non è più visibile. Analizzando un campione di 371 profili seguiti, si contano in un dato momento 54 stories, di cui 50 presumibilmente video o foto live e 4 caricamenti dalla gallery. Dei 50, 43 contengono informazioni aggiuntive come tag di altri utenti, hastag vari e hastag riferiti alla localizzazione, mentre sono 48 le stories composte da più di un video o una foto.


***concept*** <br>

Il progetto nasce da una riflessione sui temi dell'effimero, della leggerezza ed immaterialità connessi alla creazione e fruizione delle Instagram stories. Esse rappresentano brevi estratti dell'identità online di ciascun utente e nel loro insieme creano un agglomerato di territori da esplorare, fatto di contenuti che comprendono persone, luoghi e narrazioni. Con la facilità con cui vengono create, scompaiono e perdono conseguentemente ogni più infimo genere di importanza. Sarebbe interessante realizzare un sito web che contenga una visualizzazione cartografica che rappresenti le Instagram stories e i loro dati annessi, tenuta in vita dagli stessi utenti ed in grado di costruirsi e autodistruggersi ogni 24 ore. In questo modo si potrebbe rendere visibile i luoghi transitori che costituiscono la mappa stessa e la fugacità con cui essi si generano e svaniscono. Inoltre si potrebbe creare una cronologia che tenga traccia degli aspetti fondamentali della cartografie generate in precedenza per dedurre trend e caratteristiche delle pubblicazioni. <br>

***obiettivi*** <br>

Il progetto vuole avvalersi dell'esperienza della catografia in qualità di supporto storicamente adatto a rapresentare la complessità e riunire concetti come eterogeneità, elementi naturali e sociali nella stessa immagine. L'intento è quello di utilizzare uno strumento utile ad indagare un contesto fatto di molteplici narrazioni e permettere all'utente di muoversi nello spazio, esplorare e idealmente cambiare scala della rappresentazione.

***casi studio*** <br>

Le parole di Lev Manovich, ricercatore ed autore del libro *Instagram and contemporary image*, aiutano a definire il campo d'indagine. 
>Instagram is used in hundreds of different ways by its hundreds of millions of users,
so any single answer to the question “what is it” will be insufficient. But we can ask a
different question: what is it in the context of media history? This question is more
approachable. Here is one way to answer it. Different elements of photo culture that
throughout 19th and 20th century were separate, now have been combined in a simple
platform. [...] Camera, photo paper, a darkroom, exhibition spaces
such as galleries, and publication venues such as magazines exist together in one hand-held
device. This single platform medium is remarkable development in the history of modern
media. It allows you to capture, edit, and publish photos, view photos of your friends,
discover other photos through search, interact with them (like, comment, repost, post to
other networks), enter into conversations with photo authors and others who left
comments, create photo collections, change their order, etc. all from a single device.

![](https://i.imgur.com/ao4X1rV.jpg) <br>
*Selection of Instagram photos shared by @tienphuc_ (Vietnam) Instagram and contemporary image, Lev Manovich, 2017* 
<br>
<br>
Inequaligram (Cultural Analytics Lab)
[+](http://noriyukisuzuki.com/ohMy.html) <br>
Sviluppato dal centro di ricerca Cultural Analytics Lab di Manovich, il progetto consiste in due visualizzazioni interattive delle Instagram images condivise a Manhattan in un periodo di 5 mesi ed ha come obiettivo confrontare la visibilità dei luoghi della città analizzando le condivisioni di turisti ed autoctoni.
<br>
<br>
Oh my () (Noriyuki Suzuki) [+](http://www.creativeapplications.net/arduino-2/oh-my-calling-for-god-in-48-languages-using-twitter-api/) <br>
Sebbene non si tratti di un progetto legato alla cartografia in senso stretto, Oh my () rappresenta un'interessante spunto di riflessione sul tema del rendere udibile una parola detta in un dato momento. L'intento del progetto è quello di superare i confini delle differenze linguistiche sfruttando le potenzialità di Internet. Prendendo in esame la parola "God", simbolo di diversità religiose e raziali, gli speaker che compongono l'installazione pronunciano la parola nell'appropriata lingua ogni volta che questa compare nelle API di Twitter. Gli speaker sono disposti in modo tale che la lingua corrisponda alla posizione geografica in cui viene parlata.<br>
<br>
Generating fantasy maps [+](https://mewo2.com/notes/terrain/)
<br>
***dataset*** 
<br>
 L'acquisizione dei dati avviene attraverso le API di Instagram. [+](https://github.com/mgp25/Instagram-API/blob/master/src/Request/Story.php) [+](https://github.com/CaliAlec/ChromeIGStory) [+](https://medium.com/@calialec/chrome-ig-story-bribing-the-instagram-story-api-with-cookies-c813e6dff911) [+](https://github.com/siongui/goigstorylink) [+](https://isdb.pw/about.html) [+](https://stackoverflow.com/questions/44318751/getting-instagram-story-in-php) <br> 
Elenco dei dati reperibili: <br>
* dati per ciascun utente:<br>
* nome utente (ha pubblicato una story: sì / no) <br>
* visualizzazione da parte di altri utenti <br>
* risposte alla story <br>
* tag altri utenti <br>
* hashtag location <br>
* altri hashtag <br>

dati reperibili in base ai follower di un preciso account:<br>
* numero di storie effettuate <br>
* la frequenza con cui vengono pubblicate <br>

Il dato relativo al numero di storie effettuate potrebbe corrispondere all'area della cartografia, mentre per ciascun utente autore di una story si potrebbe generare una sorta di insediamento e per ciascuna persona che l'ha visualizzata un abitante. Inoltre, attraverso i tag presenti nella descrizione del profilo, si potrebbe introdurre una classificazione (es. profilo commerciale o non) per capire se la storia è stata creata a fini promozionali o meno, in modo da ottenere una lettura qualitativa dietro la produzione di stories.


***reference visiva*** 
<br>
<br>
![](https://i.imgur.com/CRpiBl4.jpg)


***cos'è*** <br>

un sito web con cartografia navigabile formata dai dati relativi alle Instagram stories prodotte nell'arco delle 24 ore che contenga un archivio delle cartografie precedenti consultabili giorgio per giorno. <br>

***cosa significa*** <br>

Il progetto può significare rendere visibile la vastità e mutevolezza del prodotto story facendo trasparire a chi o cosa sono rivolti gli sguardi. Un'altra interpretazione può riguardare invece l'entità del fenomento che ha a che fare con l'affermazione della propria identità personale online e la propria autopromozione.

***come funziona*** <br>

La cartografia viene generata secondo parametri creati in base al web scraping dell'applicazione Instagram. I dati acquisiti (nome utente, visualizzazione da parte di altri utenti, risposte alla story etc.) vengono elaborati e trasformati in grandezze tali da definire la morfologia della mappa. Questa cambierà aspetto in base alla produzione e rimozione automatica delle stories. Ad un orario prestabilito, la mappa verrà "fotografata" ed inserita in un da database che fungerà da archivio delle cartografie. L'interfaccia navigabile è composta da un'area dedicata alla cartografia ed una timeline sottostante che permette di visualizzare le mappe precedenti in una versione che mantiene solamente alcuni paramentri (es.dimensione).   

***cosa succederebbe se*** <br>

Cosa succederebbe se l'output fosse un oggetto fisico? I dati raccolti potrebbero essere elaborati e trasformati in istruzioni che controllano il motorino di un camminatore che si muove lungo una superficie.

***design fiction*** <br>

Difficile immaginare il destino dei social più affermati in un futuro non troppo lontano. La nascita di Facebook, ad esempio, risale al 2004, mentre la prima versione di Instagram è di 8 anni fa e probabilmente nel 2010 non avremmo immaginato come si sarebbero evoluti. Nel 2050 il progetto potrebbe trasformarsi in un sistema di intelligenza artificiale che faccia da assistente personale agli utenti e li guidi nella costruzione del proprio io digitale.
