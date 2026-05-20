function decodeMessage(message) {
  const regex = /.\>./g;
  const letters = new Map([
    [0, 'o'],
    [1, 'i'],
    [3, 'e'],
    [4, 'a'],
    [5, 's'],
    [7, 't']
  ])
  
  const removeAsteriskAndNext = (re, to = '') => {
    const regex2 = new RegExp(re, 'gi')
    return message.replace(regex2, to)
  }
  
  const numToLetters = () => {
    const match = message.match(/[0-9]/);
    if (!match) return;
    message = removeAsteriskAndNext(match[0], letters.get(Number(match[0])))
    return numToLetters()
  }
  
  const filterMessage = () => {
    numToLetters()
    message = removeAsteriskAndNext(`\\*.`)
    message = removeAsteriskAndNext(`[^a-záéíóúüñ¿?!¡\\s\\>]`)
    const match = message.match(regex);
    if (!match) return message;
    for (let x of match) {
      const innerContent = x.replace(/\>/, '');
      const reversed = innerContent.split("").reverse().join("");
      message = message.replace(x, reversed)
    }
    return message
  }
  return filterMessage()
}

decodeMessage("a*bc>d")
// "adc"
decodeMessage("†¡H$0*l4>l!║¤")
// "¡Hola!"
decodeMessage("-Th3 qu1ck br0wn f0x))")
// "The quick brown fox"
decodeMessage("†‡¡4>myd4y m4yd4y*z! ¿H$$··0‡‡l4#? ¿hy>4 &%4··lg*6u13n *l4h1*q? ¡*¡*¡N3c3%5170 4yud4*x!*#║¤")
// †‡¡4>myd4y m4yd4y*z! ¿H$$··0‡‡l4#? ¿hy>4 &%4··lg*6u13n *l4h1*q? ¡*¡*¡N3c3%5170 4yud4*x!*#║¤