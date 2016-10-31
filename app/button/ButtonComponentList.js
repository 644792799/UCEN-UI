import React from 'react';
import ButtonComponent from './ButtonComponent.js';
import './ButtonComponentList.css';

export default class ButtonComponentList extends React.Component{
  render(){
    return (
      <div className='buttonComponentList'>
        <ButtonComponent state="default"/>
        <ButtonComponent state="primary"/>
        <ButtonComponent state="success"/>
      </div>
    );
  }
}
