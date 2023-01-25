import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Searchbar from '../Components/Search'
import Main from '../Components/Main'
import Pagination from '../Components/Pagination'
import { IMilkDataProps } from '../types'


function Home({data}:IMilkDataProps) {

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

  console.log(currentRecords)
  const allMilktypeValues = data.map(value => value.type);
  const milkTypes = new Set(allMilktypeValues)

  return (
    <div className="App">
      <Header/>
      <Searchbar data={data} milkTypes={milkTypes}/>
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