import React from "react";
import "./FilterStyles.scss";
import { filterContact } from "components/redux/filterSlice";
import { useDispatch } from "react-redux";


const Filter = ({value}) => {

const dispatch = useDispatch();   

function filterName(e) {
    dispatch(filterContact(e.currentTarget.value.trim()))
} 
return (
    <div className="filterBox">
    <label>
     Filter by name:
     <input className="fiterInput" type="text" value={value} onChange={filterName}/>
    </label>
    </div>
)

}

export default Filter;