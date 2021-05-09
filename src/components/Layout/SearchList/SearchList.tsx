import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountContext";
import ListItem from "./ListItem/ListItem";
import "./SearchList.css";

const SearchList = () => {
  const { accounts, getAccounts, filterBy } = useContext(AccountContext);
  const [searchFor, setSearchFor] = useState<string>("")

  useEffect(() => {
    getAccounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredAccounts = accounts.filter(account => {
    if (filterBy === "COMPANY") {
        return account.type.name === "Company"
    } else if (filterBy === "PERSON") {
        return account.type.name === "Person"
    }
    return true;
  });

//   const searchedAccounts = filteredAccounts.filter(account => {
//     if (account.type_detail.name &&) {
//         return account.type.name === "Company"
//     } else if (filterBy === "PERSON") {
//         return account.type.name === "Person"
//     }
//     return true;
//   });

  const listItems = filteredAccounts.map((account, index) => (
    <ListItem
      key={index}
      code={account.code}
      name={
        account.type_detail.name ||
        (account.type_detail.firstname || "") +
          " " +
          (account.type_detail.lastname || "")
      }
      phonenumber={account.type_detail.phonenumber}
      email={account.type_detail.email}
      website={account.type_detail.website}
    />
  ));
  return (
    <div className="search-list">
      <input className="search-bar" placeholder="ENTER SEARCH TEXT" />
      <div className="list-scroll">
        <ListItem
          code="Code"
          name="Name"
          phonenumber="Phonenumber"
          email="Email"
          website="Website"
        />
        {listItems}
      </div>
    </div>
  );
};

export default SearchList;
