import React from 'react'
import { useDispatch } from 'react-redux'
import { minusCounter, pilusCounter, resetCounter } from '../reducers/countSlice'
import "./Counter.css"

const Conuter = () => {
    const dispatch = useDispatch()
    return (
        <div className='btn-group'>
            <button className='btn btn-success' onClick={() => dispatch(pilusCounter())}>pilus</button>
            <button className='btn btn-secondary ml-2' onClick={() => dispatch(minusCounter())}>minus</button>
            <button className='btn btn-danger' onClick={() => dispatch(resetCounter())}>reset</button>
        </div>

    )
}

export default Conuter