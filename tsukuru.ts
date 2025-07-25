export function tsukuru(text: number, nagasa: number) {
  const mozi = pattern(text)
  let kotae = ""
  let count = 0
  while (nagasa > count) {
    kotae += mozi.charAt(random(0, mozi.length))
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
