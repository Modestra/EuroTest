import './Card.css'
import { type Note } from '@src/interfaces/note';
function Card(Note: Note) {
    const {title, description, count} = Note
    return(
    <>
    <div className="card card-height">
        <div className="card-header">
            <p>{title}</p>
            <button type="button" className="btn btn-danger">Удалить</button>
        </div>
        <div className="card-body">
            <h5 className="card-title">{description}</h5>
            <p className="card-text">{count}</p>
            <a href="#" className="btn btn-primary">Перейти куда-нибудь</a>
        </div>
    </div>
    </>
  )
}

export default Card;