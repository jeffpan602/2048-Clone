import React from 'react'
import "./Board.css"
import { Panel } from './Panel.js';


export const Board = ({ board, onClick }) => {
    return (
        <div className="board">
            {board.map((value, index) => {
                return <Panel value={value} onClick={() => onClick(index)} />
            })}
            <Panel value="X" onClick={null} />
        </div>
    )
}