import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'
import { ResponseApi } from '../types'

export interface CollectionState {
  nftMarket: ResponseApi
}

const initialState: CollectionState = {
  nftMarket: {
    data: [],
    total: 0,
    page: 0,
  },
}

export default createReducer(initialState, (builder) =>
  builder.addCase(actions.setNFTMarketToState, (state, { payload }) => {
    state.nftMarket = payload
  })
)
