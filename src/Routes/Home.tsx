import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Searchbar from '../Components/Search'
import Main from '../Components/Main'
import Pagination from '../Components/Pagination'
import { IMilkDataProps } from '../types'


function Home({data}:IMilkDataProps) {
	const [currentDataDisplay,setCurrentDataDisplay] = useState(data) 
  // Users current page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records displayeded on each page   
  const [recordsPerPage] = useState(9);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = currentDataDisplay.slice(indexOfFirstRecord, 
  indexOfLastRecord);
  //calculate number of pages
  const numOfPages = Math.ceil(currentDataDisplay.length / recordsPerPage)

  const allMilktypeValues = data.map(value => value.type);
  const milkTypes = Array.from(new Set(allMilktypeValues))

  return (
    <div className="App">
      <Searchbar currentDataDisplay={currentDataDisplay} milkTypes={milkTypes} setCurrentDataDisplay={setCurrentDataDisplay}/>
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