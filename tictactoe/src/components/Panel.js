import React from 'react'
import "./Panel.css"

export const Panel = ({ value, onClick }) => {
    const style = value === "X" ? "panel x" : "panel o";
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}