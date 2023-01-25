import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Searchbar from './Components/Search'
import Main from './Components/Main'
import {milkData} from './types'
import './Styles/reset.css'
import './Styles/app.css'
import Pagination from './Components/Pagination'


function App() {
  const [data,setData] = useState<milkData[]>([{
    name: '',
    type: '',
    storage: 0,
    id: ''
  }])
  const [isLoading,setIsLoading] = useState(true);

  // Users current page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records displayeded on each page   
  const [recordsPerPage] = useState(9);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = data.slice(indexOfFirstRecord, 
  indexOfLastRecord);
  //calculate number of pages
  const numOfPages = Math.ceil(data.length / recordsPerPage)

  const fetchData = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
    setIsLoading(false)
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
      <Pagination
        numOfPages = {numOfPages}
        currentPage = {currentPage} 
        setCurrentPage = {setCurrentPage}
      />
    </div>
  )
}

export default App
