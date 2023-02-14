import { storageService } from './async-storage.service.js'
// import { httpService } from './http.service.js'
const STORAGE_KEY = 'item'

export const itemService = {
    query,
    getById,
    save,
    remove,

}

async function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
    // let items = await httpService.get(`item/?type=${filterBy.type}&city=${filterBy.city}&price=${filterBy.price}&label=${filterBy.label}&rating=${filterBy.rating}&host=${filterBy.host}&capacity=${filterBy.capacity}`)
    // return items
}

async function getById(itemId) {
    return storageService.get(STORAGE_KEY, itemId)
    // let item = await httpService.get(`item/${itemId}`)
    // return item
}

async function remove(itemId) {
    await storageService.remove(STORAGE_KEY, itemId)
    // await httpService.delete(`item/${itemId}`)
}

async function save(item) {
    var savedItem
    if (item._id) {
        savedItem = await storageService.put(STORAGE_KEY, item)
        // savedItem = await httpService.put(`item/${item._id}`, item)

    } else {
        savedItem = await storageService.post(STORAGE_KEY, item)
        // savedItem = await httpService.post(`item/${item._id}`, item)

    }
    return savedItem
}



