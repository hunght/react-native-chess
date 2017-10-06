//@flow
import Board from './Board';
import { connect } from 'react-redux';
import { setPassportFields } from './actions';

export default connect(
  (state) => ({
    board: state.board
  }),
  { setPassportFields }
)(Board);
