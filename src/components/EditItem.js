import React from 'react';
import Card from './Card';

function EditItem(props, itens){
  function hideEdit(e){
    let target = e.target;
    if(target.id === "edit"){
      props.onHideEdit()
    }
  }
  return (
    <div id="edit" onClick={hideEdit} className= {props.show ? "edit" : "hideEdit" }>
      <Card className="cardEdit" >
      <form action="">
      <input className="inputs" type="text"/>
      <input className="inputs" type="number" min="0" value="4"/>
      <input className="inputs" type="date" value="04/05/22"/>
      <button onClick={() => {props.onSaveChanges(props.item)}}>Set changes</button>
    </form>
      </Card>
    </div>
  )
}

export default EditItem;
