import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from './Routes/Home'
import Product from './Routes/Product'
import { milkData } from "./types";
import './Styles/reset.css'
import './Styles/app.css'


function App() {
  const [data,setData] = useState<milkData[]>([{
    name: '',
    type: '',
    storage: 0,
    id: ''
  }])
  const [isLoading,setIsLoading] = useState(true);
  const fetchData = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchData('/api/milks')
  },[])

  return (
    <Routes>
      <Route path="/" element={<Home data={data}/>} />
      {data.map( (milk,i) => {
        const {id} = milk
        return(
          <Route path={`/milks/${id}`} element={<Product milk={milk} i={i}/>}/>
        )
      })}
    </Routes>
  )
}

export default App
