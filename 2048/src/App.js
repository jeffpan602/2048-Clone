import './App.css';
import React, { useState } from 'react'

function App() {

  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ])

  const Block = ({ num }) => {
    const { blockStyle } = style
    //{num !== 0 ? num : ""}
    return (
      <div
        style={{
          ...blockStyle,
          //background: getColors(num),
          color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
        }}>
        {num}
      </div>
    )
  }

  return (
    <div className='board' style={{
      background: "#AD9D8F",
      width: "max-content",
      height: "max-content",
      margin: "auto",
      padding: 5,
      borderRadius: 5,
      marginTop: 10,
      position: "relative",
    }}>
      {data.map((row, indexA) => {
        return (
          <div style={{ display: "flex" }} key={indexA}>
            {row.map((digit, indexB) => (
              <Block num={digit} key={indexB} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

const style = {
  blockStyle: {
    height: 80,
    width: 80,
    background: "lightgray",
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 45,
    fontWeight: "750",
    color: "white",
  }
}

export default App;
