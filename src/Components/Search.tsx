import { FormEvent, MouseEvent, useRef, useState } from 'react'
import { ISearchCompProps } from '../types'
import '../Styles/search.css'

const Search = ({currentDataDisplay,milkTypes,setCurrentDataDisplay}:ISearchCompProps) => {

	const searchValueRef = useRef<HTMLInputElement | null>(null)
	const [searchErrorMsg, setSearchErrorMsg] = useState<string | boolean>(false)

	const handleFilter = (e: MouseEvent<HTMLOptionElement, globalThis.MouseEvent>) => {
		console.log(e.currentTarget.value)
	}

	const nameFilter =(input: string) => {

		const filteredData = currentDataDisplay.find(milk => milk.name === input)
		//fix the else statement
		if(filteredData !== undefined){
			return setCurrentDataDisplay([filteredData])
		}
			return setSearchErrorMsg("Upps! it seems that we don't have that item in our stock !")
 	}
	
	const handleSearch = (e: FormEvent<HTMLFormElement>) => {

		const inputChecker= /^[a-zA-Z]+$'/g
		e.preventDefault()
		if(searchValueRef.current !== null && 
				searchValueRef.current.value.trim().length !== 0
			) {
				nameFilter(searchValueRef.current.value)
			return setSearchErrorMsg(false)
		}else {
			return setSearchErrorMsg('Please provide a valid name')
		}
	}

  return (
    <section className="search-section">
			<form className="search-section-input" onSubmit={(e) => handleSearch(e)}>
				<input className='value' type="text" name='searchInput'
					placeholder='search...' ref={searchValueRef}
				/>
				<button className="icon" type="submit">🔍</button>
				{searchErrorMsg ? <p>{searchErrorMsg}</p> : <p></p>}
			</form>
			<div className="search-section-filter">
				<select name="milk-names" id="milk-names">
					<option value="">Filter by milk type :</option>
					{milkTypes.map(type => {
						return (
							<option value={type} onClick={(e) => handleFilter(e)}>{type}</option>
						)
					})}
				</select>
			</div>
    </section>
  )
}

export default Search
