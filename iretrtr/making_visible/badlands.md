## (bad)lands

![Layers of rock stand visible in the badlands in Badlands National Park.](https://i.imgur.com/b52oLOb.jpg)

**parole chiave** <br>altruismo, condivisione, comunità

**concept**<br>
Le comunità online sono *luoghi* a tutti gli effetti, luoghi di aggregazione e di scambio, a volte di conflitto, altre volte di rifugio.

*Se ti dico che la città cui tende il mio viaggio è discontinua nello spazio e nel tempo, ora più rada ora più densa, tu non devi credere che si possa smettere di cercarla.* (Italo Calvino - Le Città Invisibili)

Che aspetto hanno le community? Una comunità virtuale viene generata e "tenuta in vita" dagli utenti che ne fanno parte, è ovunque e in nessun luogo allo stesso tempo. Nasce con l'interazione tra utenti ed è sempre in divenire fintantoché tale interazione segue nell'essere presente. Le relazioni che si creano vanno oltre il semplice scambio di opinioni o aiuto reciproco. *Luogo* simbolo delle community è l'internet forum, punto di aggregazione e spesso di produzione di artefatti visivi, testuali e/o artistici legati a un argomento di interesse comune. Le community possono essere considerate città, città con i propri abitanti che intrattengono scambi e relazioni, con visitatori che vanno e vengono, città che crescono rapidamente o in modo lento, che mutano, correndo il pericolo di diventare città fantasma, a volte inaccessibili ma sempre immortali.

*(bad)lands* è una cartografia interattiva e mutevole che ha lo scopo di formalizzare, visualizzare e concretizzare gli scambi degli utenti su forum online, sottolineando così l'importanza di tali community.

**dati**<br>
*Reddit*: caso studio scelto per la selezione dei dati. Perché Reddit? Il fatto se Reddit possa essere considerato un "forum" a tutti gli effetti è discussione ancora aperta. Certamente sposa alcuni aspetti dei più classici forum (subreddit non sono altro che subforum, al cui interno trovare singoli thread di discussione), contrariamente ai forum introduce un sistema di votazione e risposta diretta attraverso commenti (distaccandosi dal classico "quote"). Non è un "forum ufficiale" e per questo il contenuto viene generato totalmente dagli utenti, spesso senza essere eccessivamente mediato. Non c'è dubbio però che sia uno dei *luoghi* di aggregazione e condivisione più frequentati online al cui interno possono essere identificate comunità di ogni genere, ospita grandi community così come community di nicchia.


reddit API [+](https://www.reddit.com/dev/api)
<br>reddit JSON [+](https://github.com/reddit-archive/reddit/wiki/JSON)
<br>Pusher Realtime Reddit API [+](https://blog.pusher.com/pusher-realtime-reddit-api/)
<br>pushshift reddit directory contents [+](http://files.pushshift.io/reddit/)

aggiungendo `.json` al URL di un singolo subreddit è possibile leggerne (alcuni) dati. Stesso criterio può essere applicato ad ogni altro URL reddit per acquisire dati JSON di quella data pagina.
<br> es: https://www.reddit.com/r/lifeisstrange/top.json

Reddit è la *badland*.<br>
• Ogni subreddit costituisce una città, un insediamento.<br>
• Il nome del subreddit dà il nome alla città.<br>
• Gli iscritti a un subreddit rappresentano la popolazione di tale insediamento dettandone le dimensioni.<br>
• Se il subreddit è NSFW viene etichettato come "off limits".<br>
• All'interno dell'insediamento troviamo una serie di luoghi di interesse dettati dai topic.<br>
• I voti ricevuti da un topic ne denotano la rilevanza, più un topic è rilevante più è alta la sua quota.<br>
• La quantità di commenti sotto un determinato topic ne denota la popolarità, più un topic è popolare più gravita verso il centro della mappa.<br>
• Gli utenti attivi negli ultimi 15 minuti vengono rapprensentati con pallini in movimento, gravitano attorno al luogo di interesse dove è stata riscontrata l'ultima azione da loro compiuta (es. topic votato/commentato) e si spostano di accordo. Se sono solo attivi senza aver compiuto nessuna azione sono fermi al centro della mappa.<br>
• Cliccando su un pallino (un utente) ne visualizzo le relazioni con gli altri *abitanti*.<br>
• La quantità di parole positive e negative all'interno dei contenuti testuali di tale subreddit denotano la presenza o assenza di flora e fauna dell'insediamento.<br>
• Gli utenti bannati costituiscono un insediamento a sé.<br>

**what is it?** *(bad)lands* è un sito web che visualizza una cartografia interattiva e mutevole della community di Reddit. Tale mappa è navigabile ed esplorabile ma non modificabile direttamente, si espande ogni volta che nasce una nuova community. La sua morfologia cambia nel tempo a seconda delle interazioni tra utenti.

**how does it work?** I dati, presenti in un file JSON, vengono letti e trasformati da un algoritmo per visualizzare tutti gli insediamenti (subreddit) presenti sulla mappa principale. La dimensione degli insediamenti varia ed è data dal numero di abitanti (subbers) di tali insediamenti. Al centro della mappa troviamo gli insediamenti più popolosi, a mano a mano che ci spostiamo verso i confini troviamo insediamenti meno popolosi (comunità di nicchia). Cliccando su un insediamento si apre la sua cartografia personale. Da questa visualizzazione possiamo vedere la quantità, la rilevanza, e la popolarità dei luoghi di interesse. I pallini bianchi rappresentano gli abitanti che si muovono di luogo di interesse in luogo di interesse. Cliccando su un pallino, appare una rete di relazioni che lo collega ad altri abitanti. La scala cromatica e la presenza o assenza di fauna e flora denotano la sicurezza del luogo (la positività o negatività delle discussioni presenti in tale community).

**what does it mean?** *(bad)lands* vuole sottolineare l'importanza delle comunità online. Tali comunità vengono così visualizzate sotto forma di città tenute in vita dall'interazione tra utenti. Attraverso questa operazione si tenta di restituire una leggittimità e serietà agli scambi online. Il mio tempo sulla rete non è tempo perso, ma è il tempo di un viaggio verso l'esplorazione di nuovi mondi. La mia esplorazione potrà portarmi in un territorio sicuro e amichevole così come potrebbe avvenire il contrario. Sono le community online intrinsecamente artificiose e negative, o così come nella vita sta a me scegliere in che modo relazionarmi con gli altri, e con quali "altri" relazionarmi?

**what if?** Cosa succederebbe se tale mappa, per gli utenti registrati, diventasse un nuovo strumento di navigazione?

**design fiction**
<br>In un futuro le comunità online sono le nostre vere città. Grazie a un dispositivo di realtà aumentata è possibile rimanere in contatto con il mondo concreto attorno a noi. Sopra la morfologia della nostra *città concreta*, però, viene aggiunto un nuovo layer che per colori, materiali, forme rispecchia lo stato della nostra comunità. La città diviene così viva e cambia e muta grazie alle interazioni tra gli utenti. I *topic* diventano veri e propri luoghi di aggregazione, vengono rimappati sulla *città concreta* diventando così luoghi a cui è possibile accedere fisicamente per incontrarsi con gli altri. La lingua non è più una barriera grazie alla traduzione istantanea, la comunicazione avviene verbalmente. Per finire è inoltre possibile accedere a una riconfigurazione passata degli scambi potendo assistere così alle discussioni che sono avvenute in nostra assenza.

**reference**<br>
personal Knowledge database, Santiago Ortiz [+](http://intuitionanalytics.com/other/knowledgeDatabase/#i=256)<br>
Map of Tenderness [+](https://media.gucci.com/content/DiaryHeroArticle_Standard_1600x812/1445360417/DiaryHeroArticle_issue03-map_001_Default.jpg)<br>
Dreams [+](http://dreams.mediamolecule.com/)
<br> Realtime Reddit API (demo app) [+](http://files.pushshift.io/reddit/) [+](http://realtime-reddit-demo.herokuapp.com/) [+](https://github.com/pusher-community/pusher-realtime-reddit-demo)
<br> Generating fantasy maps [+](http://mewo2.com/notes/terrain/)
<br> Uncharted Atlas [+](https://twitter.com/unchartedatlas)
