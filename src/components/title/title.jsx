/* eslint-disable react/prop-types */
import './title.css'

export default function Search({ title, placeholder, search, setSearch }) {

    return (
        <div className="search">
            <label> {title} </label>
            <input type="search" value={search} onChange={(value) => setSearch(value.target.value)} placeholder={placeholder} />
        </div>
    )
}