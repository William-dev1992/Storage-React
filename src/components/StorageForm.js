import React, {useState} from 'react'

function StorageForm(props){
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  function handleChangeText(event){
    let t = event.target.value;
    setText(t);

  }
  function handleChangeNumber(event){
    let t = event.target.value;
 
    setNumber(t);

  }
  function handleChangeDate(event){
    let t = event.target.value;
 
    setDate(t);
  }

  function addItem(event){
    event.preventDefault();
    if(text && number && date) {
      //setItens([...itens, text])
      props.onAddItem(text, number, date);
      setText("")
      setNumber("")
      setDate("")

    }
  }
  return(
    <form action="">
      <input className="inputs" onChange={handleChangeText} type="text" value={text}/>
      <input className="inputs" onChange={handleChangeNumber} type="number" min="0" value={number}/>
      <input className="inputs" onChange={handleChangeDate} type="date" value={date}/>
      <button onClick={addItem}>Add Item</button>
    </form>
  )
}

export default StorageForm