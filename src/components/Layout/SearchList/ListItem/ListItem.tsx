import React, { useContext, useState } from "react";
import "./ListItem.css";

type ListItemProps = {
    code?: string;
    name?: string;
    phonenumber?: string;
    email?: string;
    website?: string;
    selected: boolean;
    select: () => void
}
const ListItem =  (props: ListItemProps) => {
    return (
        <div className={props.selected ? "list-item selected-item" : "list-item"}
        onClick={() => props.select()}
        >
            <div>{props.code}</div>
            <div>{props.name}</div>
            <div>{props.phonenumber}</div>
            <div>{props.email}</div>
            <div>{props.website}</div>
        </div>
    )
}

export default ListItem;