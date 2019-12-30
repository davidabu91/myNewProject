import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function Homepage(props) {
    return (
        <div>
            <div>
              <Link to='/room'> <button style={{backgroundColor:props.color}}><h2>{props.typeroom}</h2><h3>{props.name}</h3> </button></Link>
            </div>
            <div>
            <Link to='/addroom'><button type="button" className="btn btn-success">+</button></Link>
            </div>
        </div>
    )
}
