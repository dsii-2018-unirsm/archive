//Xbee receiver
//This example code is in the Public Domain

int sentDat;

void setup() {
  Serial.begin(9600);   
  pinMode(13, OUTPUT); 
  pinMode(12, OUTPUT); 
}

void loop() {
  if (Serial.available() > 0) {
  sentDat = Serial.read(); 

  if(sentDat == 'h'){
          //activate the pumpkin for one second and then stop
      digitalWrite(13, HIGH);
          delay(1000);
          digitalWrite(13, LOW);
  }

  else if(sentDat== 'b'){
    digitalWrite (12, HIGH);
          delay(1000);
          digitalWrite(12, LOW);}
  }
}
