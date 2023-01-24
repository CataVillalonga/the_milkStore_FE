import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Searchbar from './Components/Search'
import Main from './Components/Main'
import {milkData} from './types'
import './Styles/reset.css'
import './Styles/app.css'


function App() {
  const [data,setData] = useState<milkData[]>([{
    name: '',
    type: '',
    storage: 0,
    id: ''
  }])
  const fetchData = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
  };

  useEffect(() => {
    fetchData('/api/milks')
  },[])

  const allMilktypeValues = data.map(value => value.type);
  const milkTypes = new Set(allMilktypeValues)

  return (
    <div className="App">
      <Header/>
      <Searchbar data={data} milkTypes={milkTypes}/>
      <Main data={data}/>
    </div>
  )
}

export default App
