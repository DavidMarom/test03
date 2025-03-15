import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'

export function App() {
  interface Product {
    description: string;
    // add other properties as needed
  }

  const [data, setData] = useState<Product | null>(null)

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products/1')
  //           .then(res=>res.json())
  //           .then(json=>setData(json))
  // }, [])
  

  if(!data) return <view>Loading...</view>
  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>

          <text className='Title'>David</text>
          <text className='Subtitle'>{data.description}</text>
        </view>
        <view className='Content'>
          <image src={arrow} className='Arrow' />
          <text className='Description'>Tap the logo and have fun!</text>

        </view>
      </view>
    </view>
  )
}
