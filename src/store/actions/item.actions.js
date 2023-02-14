import { itemService } from "../../services/item.service.js";

export function getActionRemoveItem(itemId) {
    return {
        type: 'REMOVE_ITEM',
        itemId
    }
}
export function getActionAddItem(item) {
    return {
        type: 'ADD_ITEM',
        item
    }
}
export function getActionUpdateItem(item) {
    return {
        type: 'UPDATE_ITEM',
        item
    }
}

export function loadItems() {
    return async (dispatch, getState) => {
        const filterBy = getState().itemModule.filterBy
        try {
            const items = await itemService.query(filterBy)
            dispatch({
                type: 'SET_ITEMS',
                items
            })
        } catch (err) {
            console.log('Cannot load items', err)
        }
    }
}

export function removeItem(itemId) {
    return async (dispatch) => {
        try {
            await itemService.remove(itemId)
            console.log('Deleted Succesfully!')
            dispatch(getActionRemoveItem(itemId))
        } catch (err) {
            console.log('Cannot remove item', err)
        }
    }
}

export function addItem(item) {
    return async (dispatch) => {
        try {
            const savedItem = await itemService.save(item)
            console.log('Added Item', savedItem)
            dispatch(getActionAddItem(savedItem))
        } catch (err) {
            console.log('Cannot add item', err)
        }
    }
}

export function updateItem(item) {
    return async (dispatch) => {
        try {
            const savedItem = await itemService.save(item)
            console.log('Updated Item:', savedItem)
            dispatch(getActionUpdateItem(savedItem))
        } catch (err) {
            console.log('Cannot save item', err)
        }
    }
}

export function setFilter(filterBy) {
    return dispatch => {
        dispatch({
            type: 'SET_ITEMS_FILTER',
            filterBy
        })
    }
}


