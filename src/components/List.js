import React from 'react';
import ListItem from './ListItem';

function List(props){

  return (
    <table className="table">
        <tbody>
          {props.itens.map(item => 
            <ListItem 
              key={item.id} 
              item={item} 
              onItemDeleted={props.onItemDeleted}
              onEditItem={props.onEditItem}>
            </ListItem>)}
        </tbody>
    </table>
  )

}

export default List
