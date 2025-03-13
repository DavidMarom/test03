import { useCallback, useEffect, useState } from '@lynx-js/react'
import http from './service/http.jsx'

import './App.css'

export async function App() {

  const [products, setProducts] = useState<any[]>([])
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  
  return (
    <view>
      <view className='App'>
        
      <h1>Hi</h1>
      </view>
    </view>
  )
}
