import { ReactText } from 'react'
import translations from './config/en.json'

export interface Language {
  code: string
  language: string
  locale: string
}

export type ContextData = {
  [key: string]: ReactText
}

export interface ProviderState {
  currentLanguage: Language
}

export interface ContextApi extends ProviderState {
  setLanguage: (language: Language) => void
  t: TranslateFunction
}

// To support string literals and union of string
// https://stackoverflow.com/questions/61047551/typescript-union-of-string-and-string-literals
type MaybeObject = Record<never, never>
export type TranslationKey = keyof typeof translations | (string & MaybeObject)

export type TranslateFunction = (key: TranslationKey, data?: ContextData) => string
