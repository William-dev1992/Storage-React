import React, { useState, useEffect } from 'react';

import './Storage.css';
import List from './components/List';
import StorageForm from './components/StorageForm';
import Item from './components/Item'
import Modal from './components/Modal';
import EditItem from './components/EditItem'

const SAVED_ITEMS = "savedItems"

function Storage(){

  const [showModal, setShowModal] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [itens, setItens] = useState([{}])

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS, ))
    if(savedItems){
      setItens(savedItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(itens))
  }, [itens])

  function onAddItem(text, number, date){
    let it = new Item(text, number, date);
    setItens([...itens, it])
    onHideModal();
  }

  function onItemDeleted(item){
    let filteredItens = itens.filter(it=>it.id !== item.id);
    setItens(filteredItens)
    console.log("item deletado")
  }

  function onSaveChanges(item){
    setItens()
    console.log("Teste de edit");
  }

  function onHideModal(e){
    setShowModal(false)
  }  
  
  function onHideEdit(e){
    setShowEdit(false)
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Storage</h1> 
        <button onClick={() => {setShowModal(true)}} className="addButton">+</button> 
      </header>
      <List 
        onItemDeleted={onItemDeleted} 
        onEditItem={() => {
          setShowEdit(true)}} itens={itens}>
      </List>
      <Modal show={showModal} onHideModal={onHideModal}>
        <StorageForm onAddItem={onAddItem}></StorageForm>
      </Modal>
      <EditItem
        show={showEdit}
        onHideEdit={onHideEdit}
        onSaveChanges={onSaveChanges}>
      </EditItem>
    </div>
  )
}


export default Storage