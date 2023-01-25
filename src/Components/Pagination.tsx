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

	console.log(currentPage)
  return (
    <nav>
			<ul className='pagination justify-content-center'>
				<li className='page-item'>
					<a href="#" className='page-link' onClick={prevPage}>
						Prev
					</a>
				</li>
				{pageNumbers.map(pageNum => {
					return (
						<li key={pageNum} className={`page-item ${currentPage === pageNum ?'active':''}`}>
							<a href="#" className='page-link' onClick={()=> setCurrentPage(pageNum)}>
							{pageNum}
							</a>	
						</li>
					)
				})}
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