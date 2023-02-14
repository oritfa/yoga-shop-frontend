import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'
import { ItemList } from '../cmps/item-list'
import { loadItems } from '../store/actions/item.actions'

export const ItemApp = () => {
   
    const {items} = useSelector((storeState) => storeState.itemModule )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadItems())
    }, [])
   
    return (
        <section className="item-app layout">
            <div className="hero full">
                <div className="title">כל המוצרים</div>
                <img src={require('../assets/img/yoga-accessories.jpg')} />
            </div>
            <div className="title">כל המוצרים מעוררי ההשראה במקום אחד</div>
            <ItemList items={items}/>
        </section>
    )
}