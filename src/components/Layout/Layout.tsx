import React, { useContext, useState } from "react";
import FilterComponent from "./FilterComponent/FilterComponent";
import "./Layout.css";
import SearchList from "./SearchList/SearchList";

const Layout = () => {
  const [isFilterOpen, setFilterOpen] = useState(true);

  const [isVerticallyDraged, setIsVerticallyDraged] = useState(false);
  const [dragBarY, setVerticalDragBarY] = useState(400);

  const [isHorizontallyDraged, setIsHorizontallyDraged] = useState(false);
  const [dragBarX, setHorizontallDragBarX] = useState(300);

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
    if (isHorizontallyDraged) {
      if (dragBarX < 150) {
        setHorizontallDragBarX(160);
        setFilterOpen(false);
      }
      setIsHorizontallyDraged(false);
    }
  };

  const handleFilterToggle = () => {
    setFilterOpen(!isFilterOpen);
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
        {isFilterOpen ? (
          <div className="horizontal-slide-section">
            <div
              className="filter-component"
              style={{ width: dragBarX + "px" }}
            >
              <button
                className="filter-toggle-button"
                onClick={handleFilterToggle}
              >
                -
              </button>
              {dragBarX > 150 ? <FilterComponent /> : null}
            </div>
            <div
              className={
                isHorizontallyDraged
                  ? "horizontal-drag-bar grabbed"
                  : "horizontal-drag-bar"
              }
              onMouseDown={handleHorizontalDragCapture}
            ></div>
            <div className="list-component">
              <SearchList />
            </div>
          </div>
        ) : (
          <div className="horizontal-slide-section">
            <button
              className="filter-toggle-button"
              onClick={handleFilterToggle}
            >
              +
            </button>
            <div className="list-component">
              <SearchList />
            </div>
          </div>
        )}
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
      second section
    </div>
  );
};

export default Layout;
