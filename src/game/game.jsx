import React, { Component } from 'react';
import Table from './table/table.jsx';

export default class Game extends Component {
  render() {
    return (
      <div>
        <Table size={3} />
      </div>
    );
  }
}
