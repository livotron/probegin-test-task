import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountContext";
import "./FilterComponent.css";

const FilterComponent = () => {

    const {filterBy, applyFilterBy} = useContext(AccountContext)

    const handleCompanyClick = () => {
        if(filterBy !== "COMPANY") {
            applyFilterBy("COMPANY");
        } else if(filterBy === "COMPANY") {
            applyFilterBy("NONE");
        }
    }

    const handlePersonClick = () => {
        if(filterBy !== "PERSON") {
            applyFilterBy("PERSON");
        } else if(filterBy === "PERSON") {
            applyFilterBy("NONE");
        }
    }

    return (
        <div className="filter-component">
            <button className={filterBy === 
            "COMPANY"? "filter-button active-filter" : "filter-button"}
            onClick={handleCompanyClick}
            >Company</button>
            <button className={filterBy === 
            "PERSON"? "filter-button active-filter" : "filter-button"}
            onClick={handlePersonClick}
            >Person</button>
        </div>
    )
}

export default FilterComponent;