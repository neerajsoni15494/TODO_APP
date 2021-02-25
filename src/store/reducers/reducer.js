const intialState = {
    data: [],
}

const Reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        content: action.content,
                        id: action.id
                    }

                ]
            }
        case 'DELETE_TODO':
            const deleteTodo = state.data.filter((key) => key.id !== action.id);
            return {
                ...state,
                data: deleteTodo
            }
        default:
            return state
    }
}

export default Reducer;