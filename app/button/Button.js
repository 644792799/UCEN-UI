import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:false};
    this.clickButton = this.clickButton.bind(this);
    console.log(this.props);
  }
  clickButton(){
    this.setState({
      clicked:true
    });
  }
  render(){
    var clicked = this.state.clicked;
    var disabled = this.props.disabled?'disabled':'';
    return (
      <button disabled={disabled} className={this.props.ucStyle?'btn btn-'+this.props.ucStyle:'btn'} onClick={this.clickButton}>{this.props.children}</button>
    );
  }
}
