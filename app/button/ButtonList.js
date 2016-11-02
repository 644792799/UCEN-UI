import React from 'react';
import Button from './Button.js';
import './ButtonList.css';

export default class ButtonComponentList extends React.Component{
  render(){
    return (
      <div className='buttonComponentList'>
        <Button ucStyle="default">default</Button>
        <Button ucStyle="primary">primary</Button>
        <Button ucStyle="primary" disabled>primary</Button>
        <Button ucStyle="success">success</Button>
      </div>
    );
  }
}
