
const reducer = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_PRODUCT":
            const { products } = state
            return { ...state, products: [...products, payload] }

        default:
            return state
    }
}

export default reducer