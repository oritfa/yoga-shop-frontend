import { Link } from 'react-router-dom'
import { TypeList } from '../cmps/type-list'

export const Home = () => {
  return (
    <section className="home layout">
      <div className="hero full">
        <img src={require('../assets/img/yoga4.jpg')} />
      </div>
      
      <div className="title">מוצרי יוגה, מדיטציה ולייפסטייל שמכניסים את היופי של היוגה לחיים</div>

      <Link to={'/collections/item'}>
        <div className="hero type-preview">
          <div className="preview-title">כל המוצרים</div>
          <img src={require('../assets/img/yoga3.jpg')} />
        </div>
      </Link>

      <TypeList />
    </section>
  )
}