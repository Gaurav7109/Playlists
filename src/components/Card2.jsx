import React from "react";

const Card2 = (input) => {
  const Data = input.Data;
  const idd = input.id;
  return (
    <>
      <section className="main-card--cointainer">
        {Data.map((curElem) => {
          const { id, name, bucket, link } = curElem;

          return (
            <>
              <div className="card-container" key={idd}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-author subtle"> {bucket}</span>
                    <h1 className="card-title"> {name} </h1>
                    <a href="{link}">{link}</a>
                    {/* <p className="card-description subtle">{link}</p> */}
                    <button
                      onClick={() => {
                        input.deleteMusic(idd);
                        input.deleteMusic(id);
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card2;
