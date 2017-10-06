// @flow

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Square from './Square';
import Piece from './Piece';
const screenWidth = Dimensions.get('window').width;
const size = screenWidth - 32;
const DIMENSION = 8;
const COLUMN_NAMES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const renderSquares = ({ squares, movePiece, reverseBoard, showNotation }) => {
  const squareSize = size / DIMENSION;
  const rowSquares = [];

  squares.forEach((square) => {
    const {
      rowIndex,
      columnIndex,
      columnName,
      position,
      selected,
      canMoveHere,
      lastMove,
      inCheck
    } = square;

    const squareView = (
      <Square
        key={`square_${rowIndex}_${columnIndex}`}
        size={squareSize}
        showNotation={showNotation}
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        columnName={columnName}
        dimension={DIMENSION}
        selected={selected}
        canMoveHere={canMoveHere}
        position={position}
        lastMove={lastMove}
        inCheck={inCheck}
        reverseBoard={reverseBoard}
        onSelected={movePiece}
      />
    );

    if (!rowSquares[rowIndex]) {
      rowSquares[rowIndex] = [];
    }
    rowSquares[rowIndex].push(squareView);
  });

  return rowSquares.map((r, index) => {
    return (
      <View key={`row_${index}`} style={styles.row}>
        {r}
      </View>
    );
  });
};

const renderPieces = ({ reverseBoard, squares, selectPiece }) => {
  return squares.map((square) => {
    const { type, color, rowIndex, columnIndex, position } = square;
    if (type) {
      return (
        <Piece
          key={`piece_${rowIndex}_${columnIndex}`}
          type={type}
          color={color}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          pieceSize={size / DIMENSION}
          position={position}
          reverseBoard={reverseBoard}
          onSelected={selectPiece}
        />
      );
    }
    return null;
  });
};

const Board = ({
  style,
  reverseBoard,
  showNotation,
  squares,
  movePiece,
  selectPiece
}: Object) => (
  <View style={[styles.container, style]}>
    <View
      style={{
        transform: [
          {
            rotate: reverseBoard ? '180deg' : '0deg'
          }
        ]
      }}
    >
      {renderSquares({
        squares,
        movePiece,
        reverseBoard,
        size,
        showNotation
      })}
      {renderPieces({ reverseBoard, size, squares, selectPiece })}
    </View>
  </View>
);

export default Board;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  }
});
