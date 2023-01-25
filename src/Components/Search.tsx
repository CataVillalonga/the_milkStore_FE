import '../Styles/search.css'
import { ISearchCompProps } from '../types'

const Search = ({data,milkTypes}:ISearchCompProps) => {
  return (
    <section className="search-section">
			<div className="search-section-search">
				<input type="submit" value="Search by name"/>
			</div>
			<div className="search-section-filter">
			<select name="dog-names" id="dog-names">
				<option value="rigatoni">type example</option>
			</select>
			</div>
    </section>
  )
}

export default Search