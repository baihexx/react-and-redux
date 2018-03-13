import { connect } from 'react-redux'
import AddTodo from '../views/addTodo'
import { addTodo } from './actions'

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    onAdd: text => dispatch(addTodo(text))
  }
}

export default connect(
  null, mapDispatchToProps
)(AddTodo)