import React from 'react';

function ListItem(props){

  return (
    <>
      <tr className="tr">
          <td className="td" key={props.item.text}>{props.item.text}</td>
          <td className="td" key={props.item.number}>{props.item.number}</td>
          <td className="td" key={props.item.date}>{props.item.date}</td>
      </tr>
      <div className='buttonsDiv'>
        <button 
          className="delButton" 
          onClick={() => {props.onEditItem(props.item)}}>Edit</button>
        <button 
          className="delButton" 
          onClick={() => {props.onItemDeleted(props.item)}}>x</button>
      </div>
    </>
      )
}

export default ListItem