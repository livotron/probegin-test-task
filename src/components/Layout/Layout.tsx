import React, { useContext, useState } from "react";
import "./Layout.css";
import { AccountContext } from "../../context/AccountContext";

const Layout = () => {
  let { getAccounts, accounts, getAccount } = useContext(AccountContext);
  const [isVerticallyDraged, setIsVerticallyDraged] = useState(false);
  const [dragBarY, setVerticalDragBarY] = useState(400);

  const [isHorizontallyDraged, setIsHorizontallyDraged] = useState(false);
  const [dragBarX, setHorizontallDragBarX] = useState(300);

  // console.log(accounts)
  // getAccounts();
  // console.log(getAccount(2))

  const handleDragMove = (e: any) => {
    e.preventDefault();
    if (isVerticallyDraged) {
      setVerticalDragBarY(e.nativeEvent.clientY - 15);
    }

    if (isHorizontallyDraged) {
      setHorizontallDragBarX(e.nativeEvent.clientX - 10);
    }
  };

  const handleVerticalDragCapture = (e: any) => {
    e.preventDefault();
    setIsVerticallyDraged(true);
    };

  const handleHorizontalDragCapture = (e: any) => {
    e.preventDefault();
    setIsHorizontallyDraged(true);
    };

  const handleDragRelease = (e: any) => {
    e.preventDefault();
    setIsVerticallyDraged(false);
    setIsHorizontallyDraged(false);
    };

  return (
    <div
      className={
        isVerticallyDraged || isHorizontallyDraged ? "layout grabbed" : "layout"
      }
      onMouseMove={handleDragMove}
      onMouseUp={handleDragRelease}
      onMouseLeave={handleDragRelease}
    >
      <div className="upper-section" style={{ height: dragBarY + "px" }}>
        <h1>Accounts</h1>
        <div className="horizontal-slide-section">
          <div className="filter-component"
            style={{width: dragBarX + "px"}}
          ></div>
          <div
            className={
              isHorizontallyDraged
                ? "horizontal-drag-bar grabbed"
                : "horizontal-drag-bar"
            }
            onMouseDown={handleHorizontalDragCapture}
          ></div>
          <div className="list-component"></div>
        </div>
        <div></div>
      </div>
      <div className="bottom-section">
        <div
          className={
            isVerticallyDraged
              ? "vertical-drag-bar grabbed"
              : "vertical-drag-bar"
          }
          onMouseDown={handleVerticalDragCapture}
        ></div>
      </div>
      {JSON.stringify(accounts)}
    </div>
  );
};

export default Layout;
