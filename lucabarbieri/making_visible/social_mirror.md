### social mirror: the intimate relationship with your posts ###
[Making visible 1.1 alpha]<br>

*#emotion #selfie #social #recognotion*<br>

*Social Mirror* è uno strumento integrato nei social networks per gestisce la componente emotiva degli utenti con lo scopo di organizzarne i ricordi. In base al rilevamento delle emozioni vengono riproposti post passati che hanno un peso emotivo positivo per l’utente stimolando le emozioni positive ad esse associate.</br>
Lo strumento prende in considerazione gli stati emotivi che l’utente aggiunge nel momento di creazione di un post e li mette in relazione con gli stati emotivi successivi per creare una timeline delle emozioni.</br>
Uno strumento di esplorazione delle emozioni.</br>

**Face tracking**<br>
Un sistema di riconoscimento facciale è una tecnologia in grado di identificare o verificare una persona da un’immagine digitale o da una sorgente video confrontando le caratteristiche facciali selezionate di una determinata immagine con facce all’interno di un database.

Il riconoscimento facciale è già utilizzato in tutto il mondo per esaminare, investigare e monitorare. In Cina, la polizia usa il riconoscimento facciale per identificare e svergognare pubblicamente le persone per il crimine di jaywalking [8]. 
Nel Regno Unito, il riconoscimento facciale è stato utilizzato in occasione di un festival culturale annuale indiano occidentale per identificare i festaioli in tempo reale. Negli Stati Uniti, più della metà di tutti gli adulti americani sono in un database di riconoscimento facciale che può essere utilizzato per indagini penali, semplicemente perché hanno una patente di guida.<br>
I governi non sono gli unici utilizzatori del riconoscimento facciale. I rivenditori usano la tecnologia nei loro negozi per identificare i sospetti taccheggiatori. Le applicazioni dei social media integrano sempre più il riconoscimento facciale nella loro esperienza utente; un’applicazione in Russia consente agli estranei di scoprire chi sei semplicemente scattando la tua foto.<br>
Un ulteriore livello di complessità e possibilità si ottiene se si considera il tracciamento delle emozioni in tempo reale.<br>

***Emotion tracking***<br>
Charles Darwin scrisse nel suo libro del 1872, “The Expression of the Emotions” che “le espressioni facciali delle emozioni sono universali”. <br>
La ricerca fondamentale sull’argomento è venuta da Paul Ekman, che ha aperto la strada alla ricerca sul riconoscimento delle emozioni negli anni ‘60. Il suo team di scienziati ha fornito ai soggetti del test foto di volti che mostravano diversi stati emotivi. I soggetti del test dovevano classificare gli stati emotivi che vedevano in ogni foto, da una lista predeterminata di possibili emozioni.<br>
Nel test si conferma che gli umani mostrano una coerenza universale nel riconoscere le emozioni. <br>

Il riconoscimento delle emozioni è un processo che gli umani compiono automaticamente, ma anche tecniche computazionali sono state sviluppate. <br>
Questo processo sfrutta le tecniche di più aree, come l’elaborazione del segnale, l’apprendimento automatico e la visione artificiale. Diverse metodologie e tecniche possono essere utilizzate per interpretare emozioni come le reti bayesiane, modelli a miscela gaussianae modelli di Markov nascosti. <br>

In questo panorama esistono alcuni servizi come Face API di Microsoft. Il servizio riconosce un’espressione facciale a partire da in un’immagine come input e restituisce una serie di sette parametri relativi alle emozioni : anger, contempt, disgust, fear,happiness, neutral, sadness, surprise. <br>

Per quanto riguarda i testi il servizio Tone Alalyzer progettato da IBM utilizza l’analisi del testo in tempo reale per rilevare i toni di gioia, paura, tristezza, rabbia, analitici, sicuri e incerti presenti in un determinato testo. <br>

Esiste una versione open source per il face tracking. CLMtrackr[15] si basa sugli algoritmi di Jason Saragih e Simon Lucey[16], più precisamente “Face Alignment through Subspace Constrained Mean-Shifts”.<br>
L’algoritmo si adatta al modello facciale utilizzando 70 piccoli classificatori. Data una posizione approssimativa iniziale, i classificatori cercano una regione piccola attorno a ciascun punto per una migliore adattabilità, e il modello viene quindi spostato in modo incrementale nella direzione per adattarsi gradualmente. <br>

Spin-off del MIT Media Lab è Affectiva, un’altra soluzione per il rilevamento di emozioni su larga scala delle emozioni in tempo reale. <br>
Su base di uno studio di Marko Tkalcic dell’Università di Bolzano ho scelto di utilizzare Affectiva perché è uno degli strumenti più performanti per il riconoscimento delle emozioni e viene ceduto in licenza gratuita a studenti. 
<br>
Pensiamo a tutti i luoghi in cui mostriamo la nostra faccia ogni giorno. I negozianti, le forze dell’ordine o gli estranei che possono catturarci in una foto. Trasformando questi dati possono essere usati per identificarci, rintracciarci o sorvegliarci. Questi usi del riconoscimento facciale valgono l’erosione della nostra privacy e i rischi persistenti di errata identificazione?<br><br>
Affectiva Face Tracking - Testing <br>
![face traking](https://i.imgur.com/TtNpEo7.png)


**Casi studio**<br>
**Collide** (synaesthetic art installation)<br>
2016, Onformative<br>
![Collide](https://i.imgur.com/eGxX7Xx.jpg)
Collide è un'installazione site-specific commissionata da Dolby Laboratories a San Francisco, "Collide" è un'esplorazione dei sensi trasformando i dati di movimento registrati in immagini e suoni astratti. Miscelando, invertendo ed eliminando le restrizioni di tempo e spazio, viene scoperta una nuova visione del corpo umano e della mente. Il lavoro è un'esperienza multisensoriale che esplora i soggetti da una prospettiva emotiva, esaminando la sensazione di essere immersi nel processo creativo e attenti al momento presente mentre i sensi si uniscono e diventano un tutt'uno.
[+](https://onformative.com/work/collide)

**Typeface**<br>
Mary Huang<br>
![Typeface](https://i.imgur.com/l8ReJji.png)
Il progetto Typeface è uno studio sul riconoscimento facciale e sulla progettazione tipografica, creando un carattere tipografico che corrisponde a ciascun individuo, come un ritratto tipografico. Un po 'simile al progetto Laika - carattere tipografico interattivo [+](http://www.nahornyj.com/lazypen.html)     
La sfida qui rappresentava i limiti del sistema di tipo geometrico, essendo in grado di consentire una grande quantità di variazioni mantenendo un livello generale di qualità nelle lettere. Questo è stato reso particolarmente difficile utilizzando lettere minuscole. [+](http://www.rhymeandreasoncreative.com/blog/?p=71)

**Google Faces**<br>
2013, Onformative   
![Google Faces](https://i.imgur.com/GyApHzr.jpg)
Google Faces è un agente di ricerca indipendente creato in openFrameworks che si libra sul mondo per individuare tutti i volti che sono nascosti sulla terra. Le applicazioni cercano l'immagine di un satellite dopo l'altra, in modo da alimentare l'algoritmo di rilevamento del volto con campioni di paesaggi. Una volta che l'agente ha completato la ricerca mondiale, passa al livello di zoom successivo e ricomincia da capo. [+](https://onformative.com/work/google-faces?p=lab/googlefaces/)Progetti correlati a questo sono il tracciamento di volti all'interno delle nuvole nel progetto Cloud di Shinseungback Kimiyonghun. [+](http://ssbkyh.com/works/cloud_face/)

**Il Progetto**<br>
**Cos'è**<br>
Software che aiuta le persone ad estrapolare emozioni partendo dai propri dati personali, in modo da avere un nuovo "metadato", quello delle emozioni. 
Un attacco hacking sta per cancellare tutti i tuoi contenuti online, la tua vita social è appesa tra la vita e la morte. In 60 secondi vengono compressi tutti i tuoi ricordi, che cosa proveresti? 
Il programma basandosi sulle tue immagini accumulate dell'hard disk te ne fa rivivere una parte. In breve tempo l'utente ripercorrerà la storia digitale e verrà tenuta traccia delle emozioni prodotte in base alle espressioni del volto. L'utente avrà la possibilità di fruire di una timeline navigabile delle proprie emozioni.    

**Cosa significa**<br>
Il progetto mira a rendere visibili le emozioni. Una interpretazione può essere quella di spronare le persone a riflettere che le emozioni suscitate da un ricordo non sono fisse e chiuse dentro un sorriso, ma sono più vicine al contesto e alle sensazioni che il ricordo induce. La relazione del contenuto all'emozione diviene portale per scaturire altro, in un'esplorazione sinestetica. 

**Come funziona**<br>
L'algoritmo di face traking analizza dei punti salienti del volto ed associa ad ogni immagine percepita dall'utente una emozione corrispondente. Le immagini sono scelte dando preferenza a quelle con cui c'è stata maggiore interazione (es. più like, più reactions, più condivisioni, ecc) e sono riprodotte temporalmente in modo omogeneo. L'output prodotto sarà una mappa generata secondo dei parametri. 
Partendo da una storia che è l'insieme delle tue emozioni si crea una sorta di diario delle emozioni dove puoi aggiungere scritte o voci. Il diario metterà in evidenza le emozioni positive, cercando di capirne l'intensità, in modo che siano facili da riconoscere. Le emozioni positive hanno il potere di aiutare le persone a superare momenti di difficoltà e dovrebbero darci la forza di andare avanti cercando di superare i brutti momenti. Infatti pensando e ricordi felici si predispone l'organismo a mettersi nella condizione di essere felice, e per esempio il corpo rilascia serotonina. 

**Cosa succederebbe se**<br>
Cosa succederebbe se l'output fosse un oggetto fisico o una scultura tridimensionale visibile in realtà aumentata? I dati raccolti potrebbero diventare movimenti di luci e suoni per un'installazione. 

**design fiction**<br>
La depressione è destinata a diventare il più grande carico di salute del mondo entro il 2030, e di conseguenza saranno sempre più frequenti i sistemi di analisi delle emozioni per capire in che stato emozionale siano gli individui. Questi fattori, oltre ad essere messi a disposizione da medici ed esperti, diventano un insieme di memorie tracciabili che producono una mappa delle emozioni su vasta scala e vengono forniti alle persone  quotidianamente dei suggerimenti sul come sopravvivere alla tristezza.    

**Dati**<br>
I materiali fotografici sono presi dall'hard disk del proprietario, e in futuro anche dai social. 
Per quanto riguarda il riconoscimento delle emozioni attraverso il volto Microsoft ha rilasciato una versione beta del servizio Face API. “Emoticon API” prende un'espressione facciale in un'immagine come input e restituisce una serie di parametri tradotte in una serie di emozioni per ciascun volto riconosciuto nell'immagine, oltre al riquadro di delimitazione per il viso.<br>
Le emozioni rilevate sono rabbia, disprezzo, disgusto, paura, felicità, neutralità, tristezza e sorpresa. Queste emozioni sono comprese interculturalmente e universalmente con particolari espressioni facciali. [+](https://azure.microsoft.com/en-us/services/cognitive-services/emotion/)    
Affectiva è un'altra soluzione per il rilevamento di ingaggi su larga scala. Offrono SDK e API per gli sviluppatori mobili e forniscono una buona analisi visiva per tracciare le espressioni nel tempo. [+](https://www.affectiva.com/how/how-it-works/)        
Per quanto riguarda i testi il servizio Tone Alalyzer progettato da IBM utilizza l'analisi linguistica per rilevare i toni di gioia, paura, tristezza, rabbia, analitici, sicuri e incerti presenti in un determinato testo. [+](https://tone-analyzer-demo.ng.bluemix.net)    
Per quanto riguarda i testi il servizio Tone Alalyzer progettato da IBM utilizza l'analisi linguistica per rilevare i toni di gioia, paura, tristezza, rabbia, analitici, sicuri e incerti presenti in un determinato testo. [+](https://tone-analyzer-demo.ng.bluemix.net)     

**Possibili output**<br>
- installazione immersiva dove le persone si mettono in relazione alle proprie emozioni esplorandole all'interno di un ambiente di realtà virtuale
- traduzione del diario emozionale in un oggetto fisico che un utente, anche non vedente, può esplorare con il tatto

**Sviluppi futuri**</br>
L’informatica è stata a lungo intrecciata con i sogni tecnologici della società. Il sogno delle case automatizzate si riferisce all’informatica onnipresente, proprio come il sogno delle macchine senzienti si riferisce all’intelligenza artificiale (AI). Un altro dei sogni della società è quello che le persone attraverso il computer possano diventare chiunque o qualunque cosa vogliamo essere. In parte questo è possibile ma la consapevolezza del cosa succede all’interno di questi algoritmi di riconoscimento è paradossalmente oscura. Rendere consapevoli le persone degli strumenti di automazione di tracciamento di dati personali non sono è soltanto utile nei social network ma può essere un discorso ampliato e divenire una normativa che gli sviluppatori sono tenuti a rispettare integrando grafici e modelli nelle applicazioni in modo che gli utenti possano abilitare o disabilitare facilmente e chiaramente funzioni specifiche esercitando le proprie libertà. 

**Fonti (principali)**<br>
Wednesday is Indigo Blue: Discovering the Brain of Synesthesia (with David Eagleman), Foreword by Dmitri Nabokov (2009). Cambridge: MIT Press. ISBN 978-0-262-01279-9   
Wilma Bucci, Psicoanalisi e scienza cognitiva. Una teoria del codice multiplo. G. Fioriti Editore, Roma 1999   

**annotazioni**<br>
Le emozioni negative influenzano il sistema immunitario compromettendo alcune cellule e peggiorando progressivamente l'individuo che è più esposto ad alcune malattie. 
Il carattere in informatica è un'unità minima di informazione che corrisponde ad un grafema, o un simbolo, della forma scritta di una lingua naturale. Questo minimo elemento può tenere traccia, e rendere visibili, lo stato d'animo in cui si sta scrivendo, in modo da tracciare una mappa che metta in luce le emozioni, una narrazione emotiva. 
Le emozioni diventando visibili insieme ad alcune parole chiave tentano di offrire un'esperienza sinestetica dove si aprono nuovi orizzonti espressivi. Uno strumento che apre l'esplorazione delle proprie emozioni.

**referenze progetto e utilities**<br>
Online metadata viewer [+](http://metapicz.com/#landing)<br>
Javascript Library for reading metadata from image [+](https://github.com/exif-js/exif-js)<br>
ex machina - ava session [+](https://ava-sessions.com) #emotiontracking #beautiful<br>
