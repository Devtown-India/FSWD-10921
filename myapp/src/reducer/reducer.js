
const reducer = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case "DELETE_ITEM":
            return state.filter(item => item.id !== payload)
        case "ADD_ITEM":
            return [...state, payload]
        default:
            return state
    }
}

export default reducer