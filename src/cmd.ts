#!/usr/bin/env bun

import prompts from 'prompts'
import { tsukuru } from './tsukuru'

async function main() {
  const kaitou = await prompts([
    {
      type: 'select',
      name: 'shutsu',
      message: 'shutsu',
      choices: [
        { title: 'mozi', value: 'mozi' },
        { title: 'retsu', value: 'retsu' },
      ],
    },
    {
      type: 'select',
      name: 'mozi',
      message: 'mozi',
      choices: [
        { title: '16', value: '16' },
        { title: 'osusume', value: 'osusume' },
        { title: 'all', value: 'all' },
      ],
    },
    {
      type: 'number',
      name: 'nagasa',
      message: 'nagasa',
      initial: 10,
      min: 1,
    },
    {
      type: 'number',
      name: 'kaisuu',
      message: 'kaisuu',
      initial: 1,
      min: 1,
    },
  ])
  if (kaitou.shutsu === 'retsu') {
    console.log(cmd(kaitou.mozi, kaitou.nagasa, kaitou.kaisuu))
  } else {
    let count = 0
    while (kaitou.kaisuu > count) {
      console.log(cmd(kaitou.mozi, kaitou.nagasa, 1)[0])
      count += 1
    }
  }
}

await main()

function cmd(mozi: string, nagasa: number, kaisuu: number): string[] {
  let count = 0
  const kotaes: string[] = []
  while (kaisuu > count) {
    if (mozi === '16') {
      kotaes.push(
        tsukuru({
          mozi: '16',
          nagasa: nagasa,
        })
      )
    } else if (mozi === 'osusume') {
      kotaes.push(
        tsukuru({
          mozi: 'osusume',
          nagasa: nagasa,
        })
      )
    } else {
      kotaes.push(
        tsukuru({
          mozi: 'all',
          nagasa: nagasa,
        })
      )
    }
    count += 1
  }
  return kotaes
}
