import React, { Component } from 'react';
import Table from './table/table.jsx';

export const ColumnValue = {
  EMPTY: '',
  O: 'O',
  X: 'X'
};

export default class Game extends Component {

  state = {
    board: [
      [ColumnValue.EMPTY, ColumnValue.EMPTY, ColumnValue.EMPTY],
      [ColumnValue.EMPTY, ColumnValue.EMPTY, ColumnValue.EMPTY],
      [ColumnValue.EMPTY, ColumnValue.EMPTY, ColumnValue.EMPTY]
    ],
    cellValue: ColumnValue.X
  };

  cellClicked = this.cellClicked.bind(this);

  calculateNewCellValue() {
    const { cellValue } = this.state;

    return cellValue === ColumnValue.X ? ColumnValue.O : ColumnValue.X;
  }

  cellClicked(columnIndex, rowIndex) {
    const { board, cellValue } = this.state;

    board[rowIndex][columnIndex] = cellValue;

    this.setState({ board, cellValue: this.calculateNewCellValue() });
  }

  render() {
    return (
      <div>
        <Table
          board={this.state.board}
          onCellClick={this.cellClicked}
        />
      </div>
    );
  }
}
