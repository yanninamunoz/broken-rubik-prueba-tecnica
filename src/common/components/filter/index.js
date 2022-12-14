import React, { useState } from "react";
import { status, gender } from "./helper";
import Search from "./search";
import "./styles.scss";

const Filter = ({ searchQuery, handleChange, handleSubmit, pageNumber, updatePageNumber, updateStatus, updateGender, updateSpecies,
}) => {
  let clear = () => { updateStatus(""); updateGender(""); updateSpecies(""); updatePageNumber(1); window.location.reload(false) };

  const [showStatus, setShowStatus] = useState(false);
  const [showGender, setShowGender] = useState(false);

  return (
    <div className="filterContainer">
      <div><button onClick={clear} className="buttonClear">remove filters</button></div>
      <div className="filterContent">
        <div>
          <button className="filterBy" onClick={() => setShowStatus(!showStatus)}>status</button>
          {showStatus && (
            <div>
              {status.map((item, index) => (
                <button key={index} onClick={(x) => { updateStatus(item); updatePageNumber(1) }} className="buttonFilter" for={`${"status"}-${index}`}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <button className="filterBy" onClick={() => setShowGender(!showGender)}>gender</button>
          {showGender && (
            <div>
              {gender.map((item, index) => (
                <button key={index} onClick={(x) => { updateGender(item); updatePageNumber(1) }} className="buttonFilter" for={`${"gender"}-${index}`}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <Search handleChange={handleChange} handleSubmit={handleSubmit} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
