import React from 'react'
import {Box} from "./Box"
import "./Board.css"

export const Board = ({ board, onclick }) => {
  return (
    <div className='board'>
        {board.map((value, idx)=>{
            return <Box value={value} onClick={() => value=== null && onclick(idx)}/>
        })}
    </div>
  )
}

