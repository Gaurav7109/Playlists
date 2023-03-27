import React, { useState } from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Api from "./Api";
import Card2 from "./Card2";
import Navbar from "./Navbar";
import "./sheet.css";

const uniqueList = [
  ...new Set(
    Api.map((curElem) => {
      return curElem.bucket;
    })
  ),
  "All"
];

function App() {
  const [Musics, setMusic] = useState([]);
  const [Data, setData] = useState(Api);
  const [Liist, setList] = useState(uniqueList);

  const filterItem = (bucket) => {
    if (bucket === "All") {
      setData(Api);
      return;
    }

    const updatedList = Api.filter((curElem) => {
      return curElem.bucket === bucket;
    });

    setData(updatedList);
  };

  // create a card
  let vary = 6;
  let val = 1;

  let v = {
    id: vary,
    name: "",
    bucket: "",
    link: ""
  };
  function addToCard(currMusic) {
    v = {
      id: ++vary,
      name: currMusic.title,
      bucket: currMusic.bucket,
      link: currMusic.link
    };
    // console.log(v);
    if (v.name === "" || v.bucket === "" || v.link === "") {
      val = 2;
      alert("All the three fields are required");
    } else {
      val = 3;
      Api.push(v);
      setMusic((prevItems) => {
        return [...prevItems, currMusic];
      });
    }
    // setMusic((prevItems) => {
    //   return [...prevItems, currMusic];
    // });
  }
  if (val === 3) {
    Api.push(v);
    val = 1;
  }
  // delete the card
  function deleteCard(id) {
    const confirmed = window.confirm(
      "Are you sure, you want to delete? Give confirmation Twice"
    );
    if (confirmed === true)
      setMusic((prevItems) => {
        return prevItems.filter(function (Music, index) {
          return index !== id;
        });
      });
  }
  function deleteMusic(id) {
    console.log(id);
    const confirmed = window.confirm(
      "Are you sure, you want to delete? Give confirmation Twice"
    );
    if (confirmed === true)
      setData((prevItems) => {
        return prevItems.filter(function (Data, index) {
          return index !== id;
        });
      });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addToCard} />
      <Navbar filterItem={filterItem} Liist={Liist} />
      <Card2 id={vary} Data={Data} deleteMusic={deleteMusic} />
      {/* {Musics.map((musicItem, index) => {
        return (
          <Card
            title={musicItem.title}
            bucket={musicItem.bucket}
            link={musicItem.link}
            id={index}
            key={index}
            deleteMusic={deleteCard}
          />
        );
      })} */}
      <Footer />
    </div>
  );
}

export default App;
