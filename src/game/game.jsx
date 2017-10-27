import React, { Component } from 'react';
import Table from './table/table.jsx';

const onColumnClick = () => console.log('wt');

export default class Game extends Component {
  render() {
    return (
      <div>
        <Table size={3} />
      </div>
    );
  }
}
