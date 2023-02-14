
export const TypeList = ({ types }) => {

    return <section className="type-list">
        {/* {types.map(type => { return <TypePreview type={type} key={type._id} /> })} */}
        <div className="type-preview">
            <div className="preview-title">מזרני יוגה</div>
            <img src={require('../assets/img/yoga-mats.jpg')} />
        </div>
        <div className="type-preview">
            <div className="preview-title">בגדי יוגה</div>
            <img src={require('../assets/img/yoga-clothing.jpg')} />
        </div>
        <div className="type-preview">
            <div className="preview-title">ציוד יוגה ומדיטציה</div>
            <img src={require('../assets/img/yoga-block.jpg')} />
        </div>
        <div className="type-preview">
            <div className="preview-title">רצועות נשיאה ותיקים</div>
            <img src={require('../assets/img/yoga-accessories.jpg')} />
        </div>

    </section>
}