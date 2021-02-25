import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../store/actions/actions'

const List = (props) => {
    return (
        <ul>
            {
                props.todosData.map((key, index) => <li key={index}>{key.content}
                    <button onClick={() => props.dispatch(deleteTodo(key.id))}>Delete
                </button></li>)
            }
        </ul>
    )
}
const mapStatetoProps = (state) => ({
    todosData: state.Reducer.data
})

export default connect(mapStatetoProps)(List)