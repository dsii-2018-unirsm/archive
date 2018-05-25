//ritorna il numero di hashtag corrispondenti alla parola cercata
import com.temboo.core.*;
import com.temboo.Library.Instagram.*;

///arduino
 import processing.serial.*; 
///


// Create a session using your Temboo account application details
TembooSession session = new TembooSession("damianop", "myFirstApp", "V1WEENGTLSLnRxSUAJslrMeEKmTMs3W3");


//arduino
 Serial port; 
//

String hash_ = "tesnghash";

boolean init = true;

int tempNew = 0;
int tempOld = 0;
int diff = 0;


JSONObject risultati;

void setup() {

  // Run the TagName Choreo function
  runTagNameChoreo();
  
  
  //arduino
   println(Serial.list()); 
   port = new Serial(this, Serial.list()[1], 9600); 
  //
}


void draw() {
  background(#559867);
  fill(255);
  diff = tempNew - tempOld;
  if (diff >= 0) {
    // c'è una differenza col controllo precedente
    text(tempNew-tempOld, width/2, height/2);
    
   //arduino
   //port.write('H');  
   //
  };
 
  if (frameCount%300 == 0) { // < 120 è il numero di secondi > 60 1s 120 2s 180 3s etc...
    tempOld = tempNew;
    runTagNameChoreo();
   
    //arduino
   //port.write('L');  
   //
  }
 /* else{
  port.write('H');
  }*/
  
  ardu();
};


void ardu(){
  if (diff>0){
    port.write('H');
  }else{
  port.write('L');
  }
};


void runTagNameChoreo() {
  // Create the Choreo object using your Temboo session
  TagName tagNameChoreo = new TagName(session);

  // Set inputs
  tagNameChoreo.setTagName(hash_);
  tagNameChoreo.setAccessToken("292665718.6c339d5.7b8f3624f7a84f3faf9128d2c9989d56");
  tagNameChoreo.setClientID("6c339d5c9dc74b9a9906362d1d62fa5c");

  // Run the Choreo and store the results
  TagNameResultSet tagNameResults = tagNameChoreo.run();

  // Print results
  risultati = parseJSONObject(tagNameResults.getResponse());

  JSONObject dati = risultati.getJSONObject("data");
  // println(risultati);

  tempNew = dati.getInt("media_count");
  println("tempNew = " + tempNew);

  if (init) { 
    tempOld = tempNew; 
    init = false;
  }
}
