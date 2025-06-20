import React from 'react'

export const Header1 = (props) => {
    console.log(props);
  return (
    <div>
        
    <h1 style={{color:'yellow',background:'blue'}}> Hello functional { props.name} {props.last}</h1>
    {props.children}
    </div>
  )
}
