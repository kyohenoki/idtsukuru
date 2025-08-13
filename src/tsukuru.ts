export function tsukuru(text: number, nagasa: number) {
  const mozi = pattern(text)
  let kotae = ""
  let count = 0
  while (nagasa > count) {
    kotae += mozi.charAt(randomore(0, mozi.length - 1))
    count += 1
  }
  return kotae
}

function pattern(text: number) {
  if (text === 1) {
    return "1234567890abcdef"
  } else if (text === 2) {
    return "1234567890abcdehiklmnosuvwxz"
  } else {
    return "1234567890abcdefghijklmnopqrstuvwxyz"
  }
}

function random(min: number, max: number) {
  const array = new Uint16Array(1)
  crypto.getRandomValues(array)
  return (array[0] % max) + min
}

function randomore(min: number, max: number): number {
  const range = max - min + 1
  const maxValid = 65536 - (65536 % range)
  const array = new Uint16Array(1)
  let randomNumber: number

  do {
    crypto.getRandomValues(array)
    randomNumber = array[0]
  } while (randomNumber >= maxValid)

  return (randomNumber % range) + min
}
