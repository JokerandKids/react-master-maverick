import { IHistorycal } from './screens/coins/Chart'
import { IInfoData, IPriceData } from './screens/coins/coin'
import { ICoin } from './screens/coins/coins'

const BASE_URL = `https://api.coinpaprika.com/v1`

export async function fetchCoins(): Promise<ICoin[]> {
  const response = await fetch(`${BASE_URL}/coins`)
  const data = await response.json()
  return data.slice(0, 100) as ICoin[]
}

export async function fetchCoinInfo(coinId: string): Promise<IInfoData> {
  return (await fetch(`${BASE_URL}/coins/${coinId}`).then(res =>
    res.json()
  )) as IInfoData
}

export async function fetchTickerInfo(coinId: string): Promise<IPriceData> {
  return (await fetch(`${BASE_URL}/tickers/${coinId}`).then(res =>
    res.json()
  )) as IPriceData
}

export async function fetchCoinHistory(coinId: string): Promise<IHistorycal[]> {
  return (await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then(res => res.json())) as IHistorycal[]
}
