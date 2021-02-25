import React from 'react'
import { addTodo } from '../store/actions/actions'
import { connect } from 'react-redux';

class TodoDom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }
    handleData = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    saveData = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state.content)
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.saveData}>
                <input type="text" value={this.state.content} onChange={this.handleData}></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(
    null,
    { addTodo }
)(TodoDom);