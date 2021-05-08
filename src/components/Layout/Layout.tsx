import React, { useContext, useState } from 'react';
import './Layout.css';
import {AccountContext} from '../../context/AccountContext';

const Layout = () => {

  let { getAccounts, accounts, getAccount } = useContext(AccountContext);
  const [isVerticallyDraged, setIsVertycallyDraged] = useState(false);
  const [dragBarX, setVerticalDragBarX] = useState(600);

  // console.log(accounts)
  // getAccounts();
  // console.log(getAccount(2))

  
  const handleDragMove = (e: any) => {
    e.preventDefault();
    if(isVerticallyDraged) {
      console.log(e.nativeEvent);
      setVerticalDragBarX(e.nativeEvent.clientY - 15);
    }
    // console.log(e)
  }
  
  const handleVerticalDragCapture = (e: any) => {
    e.preventDefault();
    setIsVertycallyDraged(true);
    console.log(e)
  }

  const handleDragRelease = (e: any) => {
    e.preventDefault();
    setIsVertycallyDraged(false);
    console.log(e)
  }

  return (

    <div className={isVerticallyDraged ? "layout grabbed" :"layout"}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragRelease}
      onMouseLeave={handleDragRelease}
    >
        <div className="upper-section" style={{height: dragBarX + 'px'}}>
          <h1>Accounts</h1>
        </div>
        <div className="bottom-section">
          <div className={isVerticallyDraged ? "vertical-drag-bar grabbed": "vertical-drag-bar"}
          onMouseDown={handleVerticalDragCapture}
          ></div>
        </div>
        {JSON.stringify(accounts)}
    </div>
  );
}

export default Layout;