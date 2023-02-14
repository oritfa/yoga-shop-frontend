const initialState = {
    items: [],
    filterBy: {
        type: [],
    },
    cart:[],
    lastRemovedItem: null
}
export function itemReducer(state = initialState, action) {
    var newState = state
    var items
    var cart
    switch (action.type) {
        case 'SET_ITEMS':
            newState = { ...state, items: action.items }
            break
        case 'REMOVE_ITEM':
            const lastRemovedItem = state.items.find(item => item._id === action.itemId)
            items = state.items.filter(item => item._id !== action.itemId)
            newState = { ...state, items, lastRemovedItem}
            break
        case 'ADD_ITEM':
            newState = { ...state, items:[...state.items, action.item]}
            break
        case 'UPDATE_ITEM':
            items = state.items.map(item => (item._id === action.item._id)? action.item : item)
            newState = { ...state, items}
            break
        case 'ADD_TO_CART':
            newState = { ...state, cart:[...state.cart, action.item]}
            break
        case 'REMOVE_FROM_CART':
            cart = state.cart.filter(item => item._id !== action.itemId)
            newState = { ...state, cart}
            break
        case 'CLEAR_CART':
            newState = { ...state, cart: []}
            break
        case 'UNDO_REMOVE_ITEM':
            if (state.lastRemovedItem) {
                newState = { ...state, items: [...state.items, state.lastRemovedItem], lastRemovedItem: null}
            }
            break
        default:
    }
    // For debug:
    // window.itemState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
