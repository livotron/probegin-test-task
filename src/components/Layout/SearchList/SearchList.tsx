import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountContext";
import ListItem from "./ListItem/ListItem";
import "./SearchList.css";

const SearchList = () => {
  const { accounts, getAccounts, filterBy } = useContext(AccountContext);
  const [searchFor, setSearchFor] = useState<string>("");
    const [selectedId, setSelectedId] = useState<number>(0);
  useEffect(() => {
    getAccounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredAccounts = accounts.filter((account) => {
    if (filterBy === "COMPANY") {
      return account.type.name === "Company";
    } else if (filterBy === "PERSON") {
      return account.type.name === "Person";
    }
    return true;
  });

  const searchedAccounts = filteredAccounts.filter((account) => {
    if (searchFor === "") {
      return true;
    }

    if (
      (account.type_detail.name &&
        account.type_detail.name.startsWith(searchFor)) ||
      (account.type_detail.firstname &&
        account.type_detail.firstname.startsWith(searchFor)) ||
      (account.type_detail.lastname &&
        account.type_detail.lastname.startsWith(searchFor)) ||
      (account.type_detail.email &&
        account.type_detail.email.startsWith(searchFor)) ||
      (account.type_detail.website &&
        account.type_detail.website.startsWith(searchFor))
    ) {
      return true;
    }
    return false;
  });

  const selectItem = () => {};
  const listItems = searchedAccounts.map((account, index) => (
    <ListItem
      selected={selectedId === account.id}
      select={() => setSelectedId(account.id)}
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
      <input
        className="search-bar"
        placeholder="ENTER SEARCH TEXT"
        onChange={(e) => setSearchFor(e.target.value)}
      />
      <div className="list-scroll">
        <div className="list-item">
          <div>Code</div>
          <div>Name</div>
          <div>Phonenumber</div>
          <div>Email</div>
          <div>Website</div>
        </div>
        {listItems}
      </div>
    </div>
  );
};

export default SearchList;
