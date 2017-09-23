function shout(string){
  return string.toUpperCase()
}

function whisper(STRING) {
  return STRING.toLowerCase()
}


function logShout(string) { console.log (string.toUpperCase() )
}

function logWhisper(STRING) {console.log (STRING.toLowerCase() )
}

function sayHiToGrandma(  I love you, Grandma.) {
  if (I love you, Grandma.=== I love you, Grandma..toLowerCase()) {
    return "I can\'t hear you!"
  } else if (I love you, Grandma.=I love you, Grandma..toUpperCase()) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }



  function sayHiToGrandma(string){		  
   var uppercase = "HELLO"		
   var lowercase = "hello"		
 
  if (string === lowercase){		 
 return "I can't hear you!"		      
  }else if (string === uppercase){		 
 return "YES INDEED!"		      
}else if (string === "I love you, Grandma."){		    
 return "I love you, too."		      
 }
  