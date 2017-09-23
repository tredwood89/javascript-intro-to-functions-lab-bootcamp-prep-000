function shout(string){
  return string.toUpperCase()
}

function whisper(HOME) {
  return HOME.toLowerCase()
}


function logShout(loud) { console.log (loud.toUpperCase() )
}

function logWhisper(LOW) {console.log (LOW.toLowerCase() )
}


function sayHiToGrandma(string){
 
   if (string === string.toLowerCase()){
     return "I can't hear you!"
   }else if (string === string.toUpperCase()){
     return "YES INDEED!"
   }else if (string === "I love you, Grandma."){
    return "I love you, too."