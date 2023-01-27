import {IPagCompProps} from '../types';


const Pagination = ({numOfPages, currentPage, setCurrentPage}:IPagCompProps) => {

  const pageNumbers = [...Array(numOfPages + 1).keys()].slice(1)

	const nextPage = () => {
    if(currentPage !== numOfPages) 
      setCurrentPage(currentPage + 1)
	}

	const prevPage = () => {
		if(currentPage !== 1) 
			setCurrentPage(currentPage - 1)
	}

  return (
    <nav className='pagination-section'>
			<ul className='pagination justify-content-center'>
				<li className='page-item'>
					<a href="#" className='page-link' onClick={prevPage}>
						Prev
					</a>
				</li>
				<li key={pageNumbers[0]} className={`page-item ${currentPage === pageNumbers[0] ?'active':''}`}>
							<a href="#" className='page-link' onClick={()=> setCurrentPage(pageNumbers[0])}>
							{pageNumbers[0]}
							</a>
				</li>
				<p className='page-item page-link'>of</p>
				<li key={pageNumbers[pageNumbers.length-1]} className={`page-item ${currentPage === pageNumbers[pageNumbers.length-1] ?'active':''}`}>
							<a href="#" className='page-link' onClick={()=> setCurrentPage(pageNumbers[pageNumbers.length-1])}>
							{pageNumbers[pageNumbers.length-1]}
							</a>
				</li>
				<li className='page-item'>
					<a href="#" className='page-link' onClick={nextPage}>
						Next
					</a>
				</li>
			</ul>
		</nav>
  )
}

export default Pagination