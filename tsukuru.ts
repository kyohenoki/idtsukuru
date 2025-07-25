console.log(tsukuru(3,10))

function tsukuru(text: number, nagasa: number) {
  const mozi = pattern(text)
  let kotae = ""
  let count = 0
  while (nagasa > count) {
    // randomが上手くいってない
    kotae += mozi.charAt(random(0, mozi.length))
    count += 1
  }
  return kotae
}

function pattern(text: number) {
  if (text === 1) {
    return "1234567890abcdef"
  } else if (text === 2) {
    return "1234567890abcdefghijklmnopqrstuvwxyz"
  } else {
    return "1234567890abcdehiklmnosuvwxz"
  }
}

function random(min: number, max: number) {
  const array = new Uint16Array(1)
  crypto.getRandomValues(array)
  return (array[0] % (max - min + 1)) + min
}
