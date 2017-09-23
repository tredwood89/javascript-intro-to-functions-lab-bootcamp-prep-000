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







