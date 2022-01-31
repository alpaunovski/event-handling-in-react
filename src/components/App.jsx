import React from "react";

function App() {
  const [style, setStyle] = React.useState({
    //Initialize the state with a style object
  });

  function handleMouseOver(){
    return setStyle({
      backgroundColor: "black",
      color: "white",
    });

  }

  function handleMouseOut(){
    return setStyle({
    //Clear the style we set in the mouseover function
    });
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={style}>Submit</button>
    </div>
  );
}

export default App;
