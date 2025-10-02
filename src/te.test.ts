import { describe, expect, it } from 'vitest'
import { tsukuru } from './tsukuru'

describe('generate', () => {
  it('kekka', () => {
    const kekka = tsukuru({
      mozi: '16',
      nagasa: 10,
    })
    expect(typeof kekka).toBe('string')
    console.log(kekka)
  })
})
