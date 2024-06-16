import './Card.css'
function Card() {
    return(
    <div className="card card-height">
        <div className="card-header">
            <p>Записка</p>
            <button type="button" className="btn btn-danger">Удалить</button>
        </div>
        <div className="card-body">
            <h5 className="card-title">Заголовок карточки</h5>
            <p className="card-text">Небольшой пример текста, который должен основываться на названии карточки и составлять основную часть содержимого карты.</p>
            <a href="#" className="btn btn-primary">Перейти куда-нибудь</a>
        </div>
    </div>
  )
}

export default Card;