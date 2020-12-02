
class Item{

  static lastId = 0

  constructor(text, number, date){
    this.id = Item.lastId++;
    this.text = text;
    this.number = number;
    this.date = date;

  }
}

export default Item;