import { connect } from 'react-redux'
import Counter from '../components/counter'
import { increment, decrement } from '../actions'

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchTopProps(dispatch, ownProps) {
  return {
    onIncrement: () => dispatch(increment(ownProps.caption)),
    onDecrement: () => dispatch(decrement(ownProps.caption))
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(Counter)