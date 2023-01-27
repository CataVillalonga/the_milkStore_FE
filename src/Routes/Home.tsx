import { useState } from 'react'
import Searchbar from '../Components/Search'
import Main from '../Components/Main'
import Pagination from '../Components/Pagination'
import { IMilkDataProps, milkData } from '../types'

function Home({data}:IMilkDataProps) {
  const [currentDataDisplay,setCurrentDataDisplay] = useState<milkData[]>(data)

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = currentDataDisplay.slice(indexOfFirstRecord,indexOfLastRecord);
  const numOfPages = Math.ceil(currentDataDisplay.length / recordsPerPage)

  const allMilktypeValues = data.map(value => value.type);
  const milkTypes = Array.from(new Set(allMilktypeValues))

  return (
    <div className="App">
      <Searchbar data={data} milkTypes={milkTypes} setCurrentDataDisplay={setCurrentDataDisplay}/>
      <Main data={currentRecords} />
      <Pagination
        numOfPages = {numOfPages}
        currentPage = {currentPage} 
        setCurrentPage = {setCurrentPage}
      />
    </div>
  )
}

export default Home