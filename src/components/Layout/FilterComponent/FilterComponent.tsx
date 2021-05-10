import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountContext";
import "./FilterComponent.css";

const FilterComponent = () => {

    const {filterId, applyFilterId, accountTypes} = useContext(AccountContext)

    const handleFilterClick = (clickedId:number) => {
        if(filterId !== clickedId) {
            applyFilterId(clickedId);
        } else if(filterId === clickedId) {
            applyFilterId(-1);
        }
    }

    return (
        <div className="filter-component">
            {accountTypes.map((accType,index) => (
            <button className={filterId === 
                accType.id? "filter-button active-filter" : "filter-button"}
                onClick={() => handleFilterClick(accType.id)}
                key={index}
                >{accType.name}</button>
            ))}
        </div>
    )
}

export default FilterComponent;