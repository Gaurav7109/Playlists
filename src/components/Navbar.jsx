import React from "react";

const navbar = ({ filterItem, Liist }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {Liist.map((curElem) => {
            console.log(curElem);
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
