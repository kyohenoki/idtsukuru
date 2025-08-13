#!/usr/bin/env bun

import { tsukuru } from "./tsukuru"

const kaitou = question("kaitou (1/2)", 2, 2)
const mozi = question("mozi (1/2/3)", 2, 3)
const nagasa = question("nagasa", 10, Infinity)
const kaisuu = question("kaisuu", 10, Infinity)

nankaimo(kaisuu, mozi, nagasa, kaitou)

function question(text: string, de: number, max: number) {
  let suji: number = 0
  while(isNaN(suji) || suji === 0 || suji < 0 || suji > max) {
    const kotae = prompt(text, de.toString())
    suji = Number(kotae)
    if (!kotae) {
      suji = de
    }
  }
  return suji
}

function nankaimo(kai: number, pa: number, na: number, kk: number) {
  let count = 0
  while (kai > count) {
    const dekita = tsukuru(pa, na)
    let log = ""
    if (kk == 1) {
      log = no(kai, count) + ": " + dekita + " & " + dekita.length
    } else {
      log = dekita
    }
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
