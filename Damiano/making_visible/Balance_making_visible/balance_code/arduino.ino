// Balance_arduino 0.1 by Damiano Pluchino [keyword1, keyword2]
// 2018 © Damiano Pluchino, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino


//////////////////////BALANCE///////////////////////////
//////////////Damiano Pluchino//////////////////////////
//////////////2018/////////////////////////////////////


int state = LOW;
int lastState = LOW;
int count = 0; //contatore bottone

//dichiaro i led e rispettivi pin
int led1 = 53; //cambiare in base a shield
int led2 = 51;
int led3 = 26;
int led4 = 28;
int led5 = 30;
int led6 = 32;
int led7 = 34;
int led8 = 36;
int led9 = 38;
int led10 = 40;
int led11 = 42;
int led12 = 44;
// dichiaro la valvola e pin
int valvola = 10;

//integro codice hashtag 
int RELAY = 12; // the pin that the LED is attached to
int incomingByte;      // a variable to read incoming serial data into
void(* Riavvia)(void) = 0;
//


/* DISPLAY
  #include <LiquidCrystal.h>//Don't forget to enter this library
  LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

*/


void setup() {
  Serial.begin(9600);
  //setto il pin 13 come input per il bottone
  pinMode(13, INPUT);
  state = digitalRead(13); //legge stato iniziale

  ////hash
  // initialize the LED pin as an output:
  pinMode(RELAY, OUTPUT);
  ///


  /* DISPLAY
    // set up the LCD's number of columns and rows:
    lcd.begin(10, 2);
    // Print a message to the LCD.
    lcd.print("HELLO WORLD!");

  */

  //settaggio pin led in output
  pinMode(53, OUTPUT); //cambiare
  pinMode(51, OUTPUT);
  pinMode(26, OUTPUT);
  pinMode(28, OUTPUT);
  pinMode(30, OUTPUT);
  pinMode(32, OUTPUT);
  pinMode(34, OUTPUT);
  pinMode(36, OUTPUT);
  pinMode(38, OUTPUT);
  pinMode(40, OUTPUT);
  pinMode(42, OUTPUT);
  pinMode(44, OUTPUT);
  //settaggio pin valvola in output
  pinMode(12, OUTPUT);

}

void loop() {

//hash
 // see if there's incoming serial data:
  if (Serial.available() > 0) {
    // read the oldest byte in the serial buffer (seriale esce un dato alla volta non in parallelo):
    incomingByte = Serial.read();
    // if it's a capital H (ASCII 72), turn on the LED:
    /*if (incomingByte !='H'){
      digitalWrite(RELAY, LOW);
      Serial.println("chiudo");
      }*/
    if (incomingByte == 'H') {
      digitalWrite(RELAY, HIGH);
      Serial.println("apro");

    } 
    // if it's an L (ASCII 76) turn off the LED:
    if (incomingByte == 'L') {
      digitalWrite(RELAY, LOW);
      Serial.println("chiudo");
    }

}
//


  



  //contatore e aggiornamento di stato del contatore quando riceve impulsi dal bottone
  state = digitalRead(13);
  if (state == HIGH && lastState == LOW) {
    count++;
    Serial.println(count);
  };
  //aggiorno stato
  lastState = state;
  unsigned long currentMillis = millis();

  ////Funzione Led ON/OFF
  ciclo_led();


  ///Apertura Valvola

  if (count != 120) {
    digitalWrite(valvola, LOW);
  }

  else {
    digitalWrite(valvola, HIGH);
    delay(4000);
    count = 0;;

  }


}


/*DISPLAY
  // set the cursor to column 0, line 1

  // (note: line 1 is the second row, since counting begins with 0):

  //  lcd.setCursor(0, 1);

  // print the number of seconds since reset:

  //lcd.setCursor(0, 1); // print the number of seconds since reset: lcd.print(millis() / 1000);

*/

void ciclo_led() {

  if (count == 1) {
    // turn LED on:
    digitalWrite(led1, HIGH);
  }
  if (count == 10) {
    // turn LED on:
    digitalWrite(led2, HIGH);
  }
  if (count == 20) {
    // turn LED on:
    digitalWrite(led3, HIGH);
  }
  if (count == 30) {
    // turn LED on:
    digitalWrite(led4, HIGH);
  }
  if (count == 40) {
    // turn LED on:
    digitalWrite(led5, HIGH);
  }
  if (count == 50) {
    // turn LED on:
    digitalWrite(led6, HIGH);
  }
  if (count == 60) {
    // turn LED on:
    digitalWrite(led7, HIGH);
  }
  if (count == 70) {
    // turn LED on:
    digitalWrite(led8, HIGH);
  }
  if (count == 80) {
    // turn LED on:
    digitalWrite(led9, HIGH);
  }
  if (count == 90) {
    // turn LED on:
    digitalWrite(led10, HIGH);

  }
  if (count == 100) {
    digitalWrite(led11, HIGH);
  };
  if (count == 110) {
    digitalWrite(led12, HIGH);
  };
  /////spegne tutto
  if (count == 120) {
    digitalWrite(led1, LOW);
    digitalWrite(led2, LOW);
    digitalWrite(led3, LOW);
    digitalWrite(led4, LOW);
    digitalWrite(led5, LOW);
    digitalWrite(led6, LOW);
    digitalWrite(led7, LOW);
    digitalWrite(led8, LOW);
    digitalWrite(led9, LOW);
    digitalWrite(led10, LOW);
    digitalWrite(led11, LOW);
    digitalWrite(led12, LOW);
  };

  //////AGGIUNGERE I DUE LED MANCANTI 11 / 12
  /////SPOSTARE IF VALVOLA ALLA FINE DEL CODICE.
  //Se si provasse a metterlo fuori? ciè nel loop scrivere
  ///solamente la funzione ciclo e fuori mettere un if
  ///con la condizione digitalW H e L per valvola


};

/* DISPLAY
  #include <LiquidCrystal.h>

  // initialize the library by associating any needed LCD interface pin
  // with the arduino pin number it is connected to
  const int rs = 7, en = 6, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
  LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

  void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("hello, world!");
  }

  void loop() {
  // set the cursor to column 0, line 1
  // (note: line 1 is the second row, since counting begins with 0):
  lcd.setCursor(0, 1);
  // print the number of seconds since reset:
  lcd.print(millis() / 1000);
  }*/
