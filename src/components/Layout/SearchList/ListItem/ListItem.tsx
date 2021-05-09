import React, { useContext, useState } from "react";
import "./ListItem.css";

type ListItemProps = {
    code?: string;
    name?: string;
    phonenumber?: string;
    email?: string;
    website?: string;
}
const ListItem =  (props: ListItemProps) => {
    return (
        <div className="list-item">
            <div>{props.code}</div>
            <div>{props.name}</div>
            <div>{props.phonenumber}</div>
            <div>{props.email}</div>
            <div>{props.website}</div>
        </div>
    )
}

export default ListItem;