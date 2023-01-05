import React from "react";
import "./FilterStyles.scss";
import { filterContact } from "components/redux/filterSlice";
import { getFilterValue } from '../redux/filterSlice';
import { useDispatch, useSelector } from "react-redux";


const Filter = () => {

const dispatch = useDispatch();  
const filterCont = useSelector(getFilterValue); 

function filterName(e) {
    dispatch(filterContact(e.currentTarget.value.trim()))
} 
return (
    <div className="filterBox">
    <label>
     Filter by name:
     <input className="fiterInput" type="text" value={filterCont} onChange={filterName}/>
    </label>
    </div>
)

}

export default Filter;