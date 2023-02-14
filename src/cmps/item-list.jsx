import { ItemPreview } from "./item-preview"

export const ItemList = ({items}) =>{
    return <section className="item-list">
        {items.map(item => {return <ItemPreview item = {item} key = {item._id}/>})}

    </section>
}