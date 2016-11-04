import React from 'react';
import Button from './Button.js';
import './ButtonList.css';

export default class ButtonList extends React.Component{
  render(){
    return (
      <div className='buttonComponentList'>
        <Button ucStyle="default">default</Button>
        <Button ucStyle="primary">primary</Button>
        <Button ucStyle="success">success</Button>
        <Button ucStyle="link">link</Button>
        <Button ucStyle="info">info</Button>
        <Button ucStyle="waring">waring</Button>
        <Button ucStyle="default" disabled>default disabled</Button>
      </div>
    );
  }
}
