import React, {Component} from 'react';
import './BoxList.css';
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid/v4";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    }
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(item) {
    const uuid1 = uuid();
    let newItem = {...item, id: uuid1, key: uuid1}
    this.setState(curr => ({
      boxes: [...curr.boxes, newItem]
    }));
  }

  removeBox(item) {
    this.setState(curr => ({
      boxes: curr.boxes.filter(function(e, index, arr){ return e.id != item.id})
    }));
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox}/>
        {
          this.state.boxes.map(b =>
            <Box key={b.key} id={b.id} height={b.height} width={b.width} color={b.color} removeBox={this.removeBox} />
          )
        }
      </div>
    );
  }
}

export default BoxList;