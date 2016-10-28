import React from 'react';
import './ButtonComponent.css';

export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:false};
    this.clickButton = this.clickButton.bind(this);
  }
  clickButton(){
    this.setState({
      clicked:true
    });
  }
  render(){
    var clicked = this.state.clicked;
    if(clicked){
      return (
        <button disabled="disabled" onClick={this.clickButton}>这是按钮</button>
      );
    }else{
      return (
        <button onClick={this.clickButton}>这是按钮</button>
      );
    }
  }
}
