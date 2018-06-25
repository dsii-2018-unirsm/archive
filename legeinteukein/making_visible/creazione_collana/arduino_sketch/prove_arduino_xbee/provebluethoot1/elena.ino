/*
  
  Wireless transmitter demo  

  
  Based on Button example code
  http://www.arduino.cc/en/Tutorial/Button
  created 2005
  by DojoDave <http://www.0j0.org>
  modified 28 Oct 2010
  by Tom Igoe
 
 The circuit:
 * pushbutton attached to pin 2 from +5V
 * 10K resistor attached to pin 2 from ground
 
 This code is in the public domain.
 
 */
 // MPU-6050 Short Example Sketch
#include<Wire.h>
const int MPU=0x68;  // I2C address of the MPU-6050
int16_t AcX,AcY;

// constants won't change. They're used here to 
// set pin numbers:
const int buttonPin_red = 2;     // the number of the pushbutton pin
const int buttonPin_green = 3; 
// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status
const int buttonPin = 7;     // the number of the pushbutton pin

void setup() {
  // initialize serial communication:
 
     
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin_red, INPUT);     
 pinMode(buttonPin_green, INPUT);   

  Wire.begin();
  Wire.beginTransmission(MPU);
  Wire.write(0x6B);  // PWR_MGMT_1 register
  Wire.write(0);     // set to zero (wakes up the MPU-6050)
  Wire.endTransmission(true);
  Serial.begin(9600);
  
}

void loop(){
   if (buttonState == HIGH) {     
    //transmit a High command to the pumpkin and delay a second so that it does not receive more than one command
    //per button press
    Serial.println('h');
    delay(1000); 
  } 
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin_red);
buttonState = digitalRead(buttonPin_green);

  Wire.beginTransmission(MPU);
  Wire.write(0x3B);  // starting with register 0x3B (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(MPU,14,true);  // request a total of 14 registers
  AcX=Wire.read()<<8|Wire.read();  // 0x3B (ACCEL_XOUT_H) & 0x3C (ACCEL_XOUT_L)     
  AcY=Wire.read()<<8|Wire.read();  // 0x3D (ACCEL_YOUT_H) & 0x3E (ACCEL_YOUT_L)
  
  Serial.print("X "); Serial.print(AcX);
  Serial.print(" Y "); Serial.print(AcY);

  Serial.println(" ");  

   if (AcY>10000){
    Serial.println('h');
    delay(1000);
    
   }
   else if (AcY<-10000){
      Serial.println('b');
    delay(1000);
    
    }
   }
  


