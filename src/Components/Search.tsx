import { ChangeEvent, FormEvent, MouseEvent, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { ISearchCompProps } from '../types'
import '../Styles/search.css'

const Search = ({data,milkTypes,setCurrentDataDisplay}:ISearchCompProps) => {

	const searchValueRef = useRef<HTMLInputElement | null>(null)
	const [searchErrorMsg, setSearchErrorMsg] = useState<string | boolean>(false)
	const navigate = useNavigate();

	const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		if(e.target.value === 'All'){
			return setCurrentDataDisplay(data)
		}
		const filteredMilkByType = data.filter(milk => milk.type === e.target.value)
		return setCurrentDataDisplay(filteredMilkByType)
	}

	const nameFilter =(input: string) => {
		const filteredMilkByName = data.find(milk => milk.name === input)
		if(filteredMilkByName !== undefined){
			return navigate(`/milks/${filteredMilkByName.id}`)
		}
		//fix this
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
				<select name="milk-names" id="milk-names" onChange={(e) => handleFilter(e)}>
					<option value='All'>Show all milks</option>
					{milkTypes.map(type => {
						return (
							<option value={type}>{type}</option>
						)
					})}
				</select>
			</div>
    </section>
  )
}

export default Search
