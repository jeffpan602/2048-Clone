import './App.css';
import React, { useEffect, useState } from 'react'
import cloneDeep from "lodash.clonedeep";


function App() {

  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ])

  //Gives 2 random starting numbers for the board
  const addNumber = (newGrid) => {
    let added = false
    let isFullGrid = false
    let attempts = 0

    while (!added) {
      if (isFullGrid)
        break;

      let start1 = Math.floor(Math.random() * 4);
      let start2 = Math.floor(Math.random() * 4);
      attempts++;
      if (newGrid[start1][start2] === 0) {
        newGrid[start1][start2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }
    }
  }

  //Initialize the grid 
  const initialize = () => {
    let newGrid = cloneDeep(data)
    console.log(newGrid)
    addNumber(newGrid);
    console.table(newGrid)
    addNumber(newGrid);
    console.table(newGrid)
    setData(newGrid);
  }

  useEffect(() => {
    initialize()
  }, [])

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
