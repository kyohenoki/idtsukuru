import { tsukuru } from "./tsukuru"

nankaimo(101)

function nankaimo(kai: number) {
  let count = 0
  while (kai > count) {
    const dekita = tsukuru(1, 10)
    const log = no(kai, count) + ": " + dekita + " & " + dekita.length
    console.log(log)
    count += 1
  }
}

function no(kai: number, count: number) {
  const len = (nn: number) => {
    return nn.toString().length
  }
  let zero = ""
  let i = 0
  while (len(kai) > len(count) + i) {
    zero += "0"
    i += 1
  }
  return zero + count
}
