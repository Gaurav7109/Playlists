import React, { useState } from "react";

function CreateArea(input) {
  const [currMusic, setCurrMusic] = useState({
    title: "",
    bucket: "",
    link: ""
  });

  function handleChange(event) {
    // do necessary changes here
    const newValue = event.target.value;
    const inputName = event.target.name;
    setCurrMusic((prevValue) => {
      return {
        ...prevValue,
        [inputName]: newValue
      };
    });
  }

  function submitMusic(event) {
    input.onAdd(currMusic);
    event.preventDefault();

    setCurrMusic({
      title: "",
      bucket: "",
      link: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={currMusic.title}
          placeholder="Title"
          required
        />
        <input
          onChange={handleChange}
          name="bucket"
          value={currMusic.bucket}
          placeholder="Enter the bucket"
        />
        <textarea
          // update here to music
          onChange={handleChange}
          name="link"
          value={currMusic.link}
          placeholder="Enter the link..."
          rows="1"
        />
        <button onClick={submitMusic}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
