# #BALANCE
#azione #reazione #cambiamento #inquinamento #ambiente
![Imgur](https://i.imgur.com/JLznfj3.jpg)

**Componenti del progetto**<br>

* 3 Contenitori
* Inchiostro nero
* Piantine
(In foto contenitori del prototipo)
* Software: processing/lettura dati 
* Software: arduino/lettura dati-apertura valvole
* Pavegen/generatore elettrico (Piezo per prototipazione)
* Elettropompe/arduino

**Dati**<br>
* Hashtag Instagram<br>
* Impulsi elettrici, pavegen (Piezo per prototipazione)
![Imgur](https://i.imgur.com/OHHux4t.jpg)
![Imgur](https://i.imgur.com/uIpVXnC.jpg)

**Cos'è?**<br>
#balance è una installazione fisica che vuole porre l’attenzione sui temi di inquinamento prodotto dalle interazioni digitali e sul tema di azione, cambiamento.
Ad ogni azione digitale infatti corrisponde un qualcos’altro che genera un cambiamento sul mondo reale, fisico.
Riflettere sulle azioni che compiamo e delle quali non vediamo le conseguenze. 

**Come funziona?**<br>
Balance prevede l’istallazione in luogo fisico, una piazza o un luogo pubblico, con l’intento di stare sotto l’occhio dei cittadini. 
Il progetto ideale prevede una parte hardware e una software. 
La parte hardware si compone di tre contenitori posti uno sull’altro, quasi a formare una clessidra, collegati tra di loro con delle valvole che si aprono e chiudono.
Dentro il primo contenitore, quello più in alto è contenuto del liquido scuro, dentro il secondo, quello centrale invece sono contenute delle piante nella forma di un piccolo orto. L’ultimo contenitore, quello più in basso è vuoto. 
La valvola che fa da raccordo ai due contenitori inferiori è collegata a una serie di piezo elettrici posti sotto una superficie calpestabile di fronte all’istallazione.
La parte software è invece basata su un algoritmo che ricerca in tempo reale contenuti pubblicati sul web da utenti, con il tema di voler salvaguardare la natura, e ad ogni nuovo contenuto invia un impulso di apertura alla prima valvola. 
La seconda valvola invece per poter essere aperta ha bisogno che venga generata una certa quantità di energia dalle persone.
Ogni qualvolta il sistema legge un contenuto relativo alla natura, apre la valvola che lascia cadere il liquido scuro per un numero di secondi ben definito e va ad inquinare l’ambiente salubre delle piante. Il liquido scuro simboleggia il ribaltamento dell’azione dell’utente, il quale, pubblicando un contenuto online con l’intento di sensibilizzare alla salvaguardia dell’ambiente, sta in realtà generando l’opposto ossia inquinamento. 
Le persone per poter sbloccare la valvola più in basso, sono costrette a faticare, a produrre energia elettrica tramite calpestio della superficie sotto la quale sono posti i generatori piezoelettrici.
Sono dunque costrette a faticare, compiere delle azioni per poter rimediare o comunque prendere posizione e salvare le piante.
Balance è un progetto controverso e aperto a più chiavi di lettura. È sia una riflessione dal punto di vista di ciò che stiamo facendo al mondo in senso negativo, sia su quello che potremmo fare con le nostre azioni per generare qualcosa di positivo e rimediare .
È inoltre una riflessione sulle azioni che compiamo ogni giorno e sulla modalità con cui le compiamo. Non basta un post, una foto per cambiare le cose, o per meglio dire non serve per cambiarle in meglio. Bisogna agire, fare realmente qualcosa di concreto.
  **Prototipo**
 Come già detto, Balance è costituita da una parte hardware e una software.
La parte hardware si compone di tre contenitori in plexiglass con il retro in forex, posti uno sull’altro, quasi a formare una clessidra, collegati tra di loro con delle valvole solenoidi comandate tramite arduino. Vi sono inoltre un display e dei piezo elettrici connessi ad arduino.
Balance attraverso un algoritmo scritto in processing e tramite Temboo, ricerca in tempo reale gli hashtag pubblicati su instagram e ad ogni nuovo hashtag relativo al preservare la natura, salvarla e amarla, produce l’effetto inverso, apre la prima valvola posta in alto, rilascia il liquido scuro sulla piantina e stampa su un display l’hashtag che ha generato l’azione.
È stato scelto l’hashtag perchè la forma più semplice per condensare degli argomenti per tematica. 
Man mano che il livello di hashtag sale, sempre più liquido viene rilasciato fino a salire di livello.


L’interazione utente / Balance è prevista dal punto di vista di fare un qualcosa per poter cambiare le cose, un azione.
Riaprire la valvola dell’ultimo contenitore e quindi liberare la piantina dal liquido che la farebbe morire. Le persone sono costrette a faticare, devono generare un tot di energia per ogni nuovo hashtag pubblicato. 
Il sistema di generazione di energia del prototipo, è costituito da un piezo elettrico collegato ad arduino, al quale sono anche collegati dei led usati come indicatori di stato.
Il piezo elettrico che serve ad attivare la seconda valvola, è posto sotto un involucro di resina. 
È stato scelto per la capacità di generare energia grazie soltanto alla deformazione meccanica. Ad ogni nuova deformazione,  un impulso elettrico è inviato ad arduino il quale ogni venti impulsi accende un led.
Ogni qual volta la barra dei led è completa, la valvola si aprirà per quattro secondi, liberando la pianta da pò di liquido nero.  

Il ciclo dell’istallazione non ha una modalità prestabilita di conclusione, sono le azioni delle persone a deciderne il destino. La piantina potrebbe morire soffocata dall’inchiostro nero oppure continuare a vivere, dipende dalle azioni delle persone durante la durata dell’istallazione.


**Cosa significa?**<br>
Significa voler richiamare l'attenzione sul fatto che anche le nuove tecnologie e l'uso smodato di esse sta generando cambiamenti che al pari dell'inquinamento "tradizionale" (mi si passi il termine) stanno avendo un impatto notevole sul mondo e che dobbiamo agire in qualche modo per cambiare le cose.

**Cosa succederebbe se?**<br>
Se si aggiungesse una data visualization su un monitor man mano che si aggiorna lo stato dell'istallazione si potrebbe avere anche un'idea più chiara della situazione della piantina e dell'ammontare di energia che ci vuole per aiutarla.


