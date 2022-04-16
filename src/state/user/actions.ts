import { createAction } from '@reduxjs/toolkit'
import { ResponseApi } from '../types'

export const setNFTMarketToState = createAction<ResponseApi>('market/setNFTMarketToState')
