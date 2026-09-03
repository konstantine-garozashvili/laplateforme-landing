import { describe, it, expect } from 'vitest'
import { translations } from '@/i18n'

describe('i18n translations', () => {
  it('provides both french and english', () => {
    expect(translations.fr).toBeDefined()
    expect(translations.en).toBeDefined()
  })

  it('has matching top-level sections in both languages', () => {
    expect(Object.keys(translations.fr).sort()).toEqual(Object.keys(translations.en).sort())
  })

  it('keeps the same number of pipeline gates in both languages', () => {
    expect(translations.fr.pipeline.items.length).toBe(translations.en.pipeline.items.length)
  })

  it('keeps the same number of steps in both languages', () => {
    expect(translations.fr.how.steps.length).toBe(translations.en.how.steps.length)
  })

  it('never leaves a french label untranslated in english hero', () => {
    expect(translations.en.hero.copy).toBe('Copy')
    expect(translations.fr.hero.copy).toBe('Copier')
  })
})
