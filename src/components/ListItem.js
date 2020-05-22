/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import '../design/App.css';

export default function ListItem({keyValue,name,item,enabled,onClick,occupied,user,status,time,showExtend,handleExtend,fade}) {
  return (
    <div className="d-flex justify-content-between align-items-center list" style={{opacity: fade ? 0 : 1}} >
      <p className="text-info font-weight-bold" key={keyValue}>{name}</p>
      <div className="d-flex  justify-content-between ">
        <p className="tab text-info px-2">{time}</p>
        {showExtend && user === item ? <p className="tab text-danger hand px-1" onClick={handleExtend}>Book again</p> : null }
        {item ?
          <p className="tab text-success px-1">{item}</p> : <p className="tab text-info px-1">Vacant</p>
        }
        <div style={{ borderColor:  status ? '#0c9' : '#999',display: status ? 'block' : occupied.indexOf(user) === -1 && enabled  ? 'block' : 'none' }}
          className="box"
          onClick={onClick} >
        </div>
      </div>
    </div>
  )
}

