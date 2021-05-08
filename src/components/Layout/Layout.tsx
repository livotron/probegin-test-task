import React, { useContext } from 'react';
import './Layout.css';
import {AccountContext} from '../../context/AccountContext';

function Layout() {

  let { getAccounts, accounts } = useContext(AccountContext);
  console.log(accounts)
  getAccounts && getAccounts();
  return (

    <div className="Layout">
        I'm the layout33s
        {JSON.stringify(accounts)}
    </div>
  );
}

export default Layout;