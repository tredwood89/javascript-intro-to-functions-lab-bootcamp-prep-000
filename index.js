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



describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})

function sayHiToGrandma(  I love you, Grandma.) {
  if (I love you, Grandma.=== I love you, Grandma..toLowerCase()) {
    return "I can\'t hear you!"
  } else if (I love you, Grandma.=I love you, Grandma..toUpperCase()) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }




function checkThing(thing){
  if(thing == 1){
    return "Hey, it was a 1!"
  } else if (thing >= 3){
    return "Well, it was a bit bigger"
  } else {
    return "I couldn't even see it!!!"
  }
}
