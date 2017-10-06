//@flow
import Board from './Board';
import { connect } from 'react-redux';
import { setPassportFields } from './actions';
import { squaresSelector } from './selector';

export default connect(
  (state) => ({
    squares: squaresSelector(state)
  }),
  { setPassportFields }
)(Board);
