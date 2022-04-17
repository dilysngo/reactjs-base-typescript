import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { getThemeCache } from '../utils/theme'
import { updateVersion } from './global/actions'
import user from './user/reducer'

type MergedState = {
  user: {
    [key: string]: any
  }
  // transactions: {
  //   [key: string]: any
  // }
}
const PERSISTED_KEYS: string[] = ['user']
const loadedState = load({ states: PERSISTED_KEYS }) as MergedState
if (loadedState.user) {
  loadedState.user.userDarkMode = getThemeCache()
}

const store = configureStore({
  reducer: {
    user,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS }) as any], // save trx localestorage
  preloadedState: loadedState as any,
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
