import { useQuery } from '@tanstack/react-query'
import { useOutletContext } from 'react-router'
import { fetchCoinHistory } from '../../api'
import ApexChart from 'react-apexcharts'
export interface IHistorycal {
  time_open: number
  time_close: number
  open: number
  high: number
  low: number
  close: number
  volume: number
  market_cap: number
}
interface IChartInfo {
  coinId: string
}
function Chart() {
  const { coinId } = useOutletContext<IChartInfo>()
  const { isLoading, data: historyData } = useQuery<IHistorycal[]>({
    queryKey: ['ohlcv', coinId],
    queryFn: () => fetchCoinHistory(coinId!),
  })
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: 'price',
              data: historyData?.map(price => price.close) as number[],
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: 'smooth',
              width: 2,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              categories: historyData?.map(price =>
                new Date(price.time_close * 1000).toISOString()
              ),
            },
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#0be881'],
                stops: [0, 100],
              },
            },
            colors: ['#0fbcf9'],
            tooltip: {
              y: {
                formatter: value => `$ ${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  )
}

export default Chart
