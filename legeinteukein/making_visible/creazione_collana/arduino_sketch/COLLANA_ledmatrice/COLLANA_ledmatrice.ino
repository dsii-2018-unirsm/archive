//led matrice by legeinteukein 
 //2018 © legeinteukein, Daniele @Fupete and the course DSII2018 @UniRSM
 //github.com/fupete — github.com/dsii-2018-unirsm
 //Educational purposes, MIT License, 2018, San Marino


// dal tutorial https://create.arduino.cc/projecthub/unexpectedmaker/ultrasoniceyes-b9fd38?ref=platform&ref_id=424_trending___&offset=11


//led matrice 8x8 led rossi

const int triggerPort = 2;
const int echoPort = 3;


const int triggerPort_2 = 4;
const int echoPort_2 = 5;

#include "ht16k33.h"
 #include <Wire.h>
                  
// Define the class
HT16K33 HT;
HT16K33 HT2;

void setup() {
pinMode(triggerPort_2, OUTPUT);
pinMode(echoPort_2, INPUT);
pinMode(triggerPort, OUTPUT);
pinMode(echoPort, INPUT);

Serial.begin(57600);
Serial.print( "Sensore Ultrasuoni: ");

   HT.begin(0x70);
HT2.begin(0x72);
}

void loop() {
 uint8_t led;

 // VARIABILI  SENSORE 1
//porta bassa l'uscita del trigger
digitalWrite( triggerPort, LOW );
//invia un impulso di 10microsec su trigger
digitalWrite( triggerPort, HIGH );
delayMicroseconds( 10 );
digitalWrite( triggerPort, LOW );

long durata = pulseIn( echoPort, HIGH );

long distanza = 0.034 * durata / 2;

Serial.print("distanza: ");

//dopo 38ms è fuori dalla portata del sensore
if( durata > 38000 ){
Serial.println("Fuori portata   ");
}
else{ 
Serial.print(distanza); 
Serial.println(" cm     ");
}


//VARIABILI SENSORE 2

//porta bassa l'uscita del trigger
digitalWrite( triggerPort_2, LOW );
//invia un impulso di 10microsec su trigger
digitalWrite( triggerPort_2, HIGH );
delayMicroseconds( 10 );
digitalWrite( triggerPort_2, LOW );

long durata_2 = pulseIn( echoPort_2, HIGH );

long distanza_2 = 0.034 * durata_2 / 2;

Serial.print("distanza: ");

//dopo 38ms è fuori dalla portata del sensore
if( durata > 38000 ){
Serial.println("Fuori portata   ");
}
else{ 
Serial.print(distanza); 
Serial.println(" cm     ");
}



if(distanza < 40){
  
  
HT.setLedNow(7);
HT.setLedNow(18);
HT.setLedNow(17);
HT.setLedNow(16);
HT.setLedNow(37);
HT.setLedNow(36);
HT.setLedNow(35);
HT.setLedNow(34);
HT.setLedNow(33);
HT.setLedNow(32);
HT.setLedNow(49);
HT.setLedNow(48);
HT.setLedNow(50);
HT.setLedNow(51);
HT.setLedNow(52);
HT.setLedNow(53);
HT.setLedNow(54);
HT.setLedNow(67);
HT.setLedNow(66);
HT.setLedNow(65);
HT.setLedNow(68);
HT.setLedNow(69);
HT.setLedNow(70);
HT.setLedNow(86);
HT.setLedNow(85);
HT.setLedNow(84);
HT.setLedNow(83);
HT.setLedNow(82);
HT.setLedNow(81);
HT.setLedNow(99);
HT.setLedNow(100);
HT.setLedNow(101);
HT.setLedNow(102);
HT.setLedNow(98);
HT.setLedNow(97);
HT.setLedNow(114);
HT.setLedNow(115);
HT.setLedNow(116);
HT.setLedNow(117);
HT.setLedNow(118);



}
else {
HT.clearLedNow(7);
HT.clearLedNow(18);
HT.clearLedNow(17);
HT.clearLedNow(16);
HT.clearLedNow(37);
HT.clearLedNow(36);
HT.clearLedNow(35);
HT.clearLedNow(34);
HT.clearLedNow(33);
HT.clearLedNow(32);
HT.clearLedNow(49);
HT.clearLedNow(48);
HT.clearLedNow(50);
HT.clearLedNow(51);
HT.clearLedNow(52);
HT.clearLedNow(53);
HT.clearLedNow(54);
HT.clearLedNow(67);
HT.clearLedNow(66);
HT.clearLedNow(65);
HT.clearLedNow(68);
HT.clearLedNow(69);
HT.clearLedNow(70);
HT.clearLedNow(86);
HT.clearLedNow(85);
HT.clearLedNow(84);
HT.clearLedNow(83);
HT.clearLedNow(82);
HT.clearLedNow(81);
HT.clearLedNow(99);
HT.clearLedNow(100);
HT.clearLedNow(101);
HT.clearLedNow(102);
HT.clearLedNow(98);
HT.clearLedNow(97);
HT.clearLedNow(114);
HT.clearLedNow(115);
HT.clearLedNow(116);
HT.clearLedNow(117);
HT.clearLedNow(118);


  }
//Aspetta 500 microsecondi
delay(500);

if(distanza<70){
  
HT.setLedNow(7);
HT.setLedNow(18);
HT.setLedNow(17);
HT.setLedNow(16);
HT.setLedNow(37);
HT.setLedNow(36);
HT.setLedNow(35);
HT.setLedNow(34);
HT.setLedNow(33);
HT.setLedNow(32);
HT.setLedNow(49);
HT.setLedNow(48);
HT.setLedNow(50);
HT.setLedNow(51);
HT.setLedNow(52);
HT.setLedNow(53);
HT.setLedNow(54);

HT.setLedNow(66);
HT.setLedNow(65);


HT.setLedNow(82);
HT.setLedNow(81);

HT.setLedNow(98);
HT.setLedNow(97);
HT.setLedNow(114);

}

else {
  HT.clearLedNow(7);
HT.clearLedNow(18);
HT.clearLedNow(17);
HT.clearLedNow(16);
HT.clearLedNow(37);
HT.clearLedNow(36);
HT.clearLedNow(35);
HT.clearLedNow(34);
HT.clearLedNow(33);
HT.clearLedNow(32);
HT.clearLedNow(49);
HT.clearLedNow(48);
HT.clearLedNow(50);
HT.clearLedNow(51);
HT.clearLedNow(52);
HT.clearLedNow(53);
HT.clearLedNow(54);

HT.clearLedNow(66);
HT.clearLedNow(65);


HT.clearLedNow(82);
HT.clearLedNow(81);

HT.clearLedNow(98);
HT.clearLedNow(97);
HT.clearLedNow(114);
  }
//Aspetta 1000 microsecondi
delay(500);

if(distanza<120) {
  
HT.setLedNow(7);
HT.setLedNow(18);
HT.setLedNow(17);
HT.setLedNow(16);

HT.setLedNow(32);

HT.setLedNow(48);


}

else{
HT.clearLedNow(7);
HT.clearLedNow(18);
HT.clearLedNow(17);
HT.clearLedNow(16);

HT.clearLedNow(32);

HT.clearLedNow(48);
  }
  //Aspetta 1000 microsecondi
delay(500);




  

if(distanza_2 < 40){
  
  
HT2.setLedNow(7);
HT2.setLedNow(18);
HT2.setLedNow(17);
HT2.setLedNow(16);
HT2.setLedNow(37);
HT2.setLedNow(36);
HT2.setLedNow(35);
HT2.setLedNow(34);
HT2.setLedNow(33);
HT2.setLedNow(32);
HT2.setLedNow(49);
HT2.setLedNow(48);
HT2.setLedNow(50);
HT2.setLedNow(51);
HT2.setLedNow(52);
HT2.setLedNow(53);
HT2.setLedNow(54);
HT2.setLedNow(67);
HT2.setLedNow(66);
HT2.setLedNow(65);
HT2.setLedNow(68);
HT2.setLedNow(69);
HT2.setLedNow(70);
HT2.setLedNow(86);
HT2.setLedNow(85);
HT2.setLedNow(84);
HT2.setLedNow(83);
HT2.setLedNow(82);
HT2.setLedNow(81);
HT2.setLedNow(99);
HT2.setLedNow(100);
HT2.setLedNow(101);
HT2.setLedNow(102);
HT2.setLedNow(98);
HT2.setLedNow(97);
HT2.setLedNow(114);
HT2.setLedNow(115);
HT2.setLedNow(116);
HT2.setLedNow(117);
HT2.setLedNow(118);



}
else {
HT2.clearLedNow(7);
HT2.clearLedNow(18);
HT2.clearLedNow(17);
HT2.clearLedNow(16);
HT2.clearLedNow(37);
HT2.clearLedNow(36);
HT2.clearLedNow(35);
HT2.clearLedNow(34);
HT2.clearLedNow(33);
HT2.clearLedNow(32);
HT2.clearLedNow(49);
HT2.clearLedNow(48);
HT2.clearLedNow(50);
HT2.clearLedNow(51);
HT2.clearLedNow(52);
HT2.clearLedNow(53);
HT2.clearLedNow(54);
HT2.clearLedNow(67);
HT2.clearLedNow(66);
HT2.clearLedNow(65);
HT2.clearLedNow(68);
HT2.clearLedNow(69);
HT2.clearLedNow(70);
HT2.clearLedNow(86);
HT2.clearLedNow(85);
HT2.clearLedNow(84);
HT2.clearLedNow(83);
HT2.clearLedNow(82);
HT2.clearLedNow(81);
HT2.clearLedNow(99);
HT2.clearLedNow(100);
HT2.clearLedNow(101);
HT2.clearLedNow(102);
HT2.clearLedNow(98);
HT2.clearLedNow(97);
HT2.clearLedNow(114);
HT2.clearLedNow(115);
HT2.clearLedNow(116);
HT2.clearLedNow(117);
HT2.clearLedNow(118);


  }
//Aspetta 500 microsecondi
delay(500);

if(distanza_2 <70){
  
HT2.setLedNow(7);
HT2.setLedNow(18);
HT2.setLedNow(17);
HT2.setLedNow(16);
HT2.setLedNow(37);
HT2.setLedNow(36);
HT2.setLedNow(35);
HT2.setLedNow(34);
HT2.setLedNow(33);
HT2.setLedNow(32);
HT2.setLedNow(49);
HT2.setLedNow(48);
HT2.setLedNow(50);
HT2.setLedNow(51);
HT2.setLedNow(52);
HT2.setLedNow(53);
HT2.setLedNow(54);

HT2.setLedNow(66);
HT2.setLedNow(65);


HT2.setLedNow(82);
HT2.setLedNow(81);

HT2.setLedNow(98);
HT2.setLedNow(97);
HT2.setLedNow(114);

}

else {
  HT2.clearLedNow(7);
HT2.clearLedNow(18);
HT2.clearLedNow(17);
HT2.clearLedNow(16);
HT2.clearLedNow(37);
HT2.clearLedNow(36);
HT2.clearLedNow(35);
HT2.clearLedNow(34);
HT2.clearLedNow(33);
HT2.clearLedNow(32);
HT2.clearLedNow(49);
HT2.clearLedNow(48);
HT2.clearLedNow(50);
HT2.clearLedNow(51);
HT2.clearLedNow(52);
HT2.clearLedNow(53);
HT2.clearLedNow(54);

HT2.clearLedNow(66);
HT2.clearLedNow(65);


HT2.clearLedNow(82);
HT2.clearLedNow(81);

HT2.clearLedNow(98);
HT2.clearLedNow(97);
HT2.clearLedNow(114);
  }
//Aspetta 1000 microsecondi
delay(500);

if(distanza<120) {
  
HT2.setLedNow(7);
HT2.setLedNow(18);
HT2.setLedNow(17);
HT2.setLedNow(16);

HT2.setLedNow(32);

HT2.setLedNow(48);


}

else{
HT2.clearLedNow(7);
HT2.clearLedNow(18);
HT2.clearLedNow(17);
HT2.clearLedNow(16);

HT2.clearLedNow(32);

HT2.clearLedNow(48);
  }
  //Aspetta 1000 microsecondi
delay(500);
}

