/* eslint-disable react/prop-types */
import { createContext, useCallback, useState } from 'react'
import { EN, VI, languages } from './languages'
import { ContextApi, Language, ProviderState, TranslateFunction } from './types'
import { LS_KEY, getLanguageCodeFromLS } from './helpers'
import en from './config/en.json'
import vi from './config/vi.json'

const initialState: ProviderState = {
  currentLanguage: VI,
}

// Export the translations directly
export const languageMap = new Map<Language['locale'], Record<string, string>>()
languageMap.set(EN.locale, en)
languageMap.set(VI.locale, vi)

export const LanguageContext = createContext<ContextApi | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ProviderState>(() => {
    const codeFromStorage = getLanguageCodeFromLS()

    return {
      ...initialState,
      currentLanguage: languages[codeFromStorage],
    }
  })
  const { currentLanguage } = state

  const setLanguage = useCallback(async (language: Language) => {
    if (!languageMap.has(language.locale)) {
      // Merge the EN locale to ensure that any locale fetched has all the keys
      localStorage.setItem(LS_KEY, language.locale)

      setState((prevState) => ({
        ...prevState,
        currentLanguage: language,
      }))
    } else {
      localStorage.setItem(LS_KEY, language.locale)
      setState((prevState) => ({
        ...prevState,
        currentLanguage: language,
      }))
    }
  }, [])

  const translate: TranslateFunction = useCallback(
    (key, data) => {
      const translationSet = languageMap.has(currentLanguage.locale)
        ? languageMap.get(currentLanguage.locale)
        : languageMap.get(EN.locale)

      let translatedText
      if (translationSet) {
        translatedText = translationSet[key] || key

        // Check the existence of at least one combination of %%, separated by 1 or more non space characters
        const includesVariable = translatedText.match(/%\S+?%/gm)

        if (includesVariable && data) {
          let interpolatedText = translatedText
          Object.keys(data).forEach((dataKey) => {
            const templateKey = new RegExp(`%${dataKey}%`, 'g')
            interpolatedText = interpolatedText.replace(templateKey, data[dataKey].toString())
          })

          return interpolatedText
        }
      }

      return translatedText
    },
    [currentLanguage]
  )

  return <LanguageContext.Provider value={{ ...state, setLanguage, t: translate }}>{children}</LanguageContext.Provider>
}
