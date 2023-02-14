
export const ItemPreview = ({ item }) => {
    return <section className="item-preview">
        <div className="img-container"></div>
        <div>{item.name}</div>
        <div>{item.price} <span>₪</span></div>
    </section>

}