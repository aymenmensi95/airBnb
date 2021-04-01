
import './styles.scss'

const PlacesCard = ({ image, tag, name, owner, text}) => {
  return (
    <div className="places-card">
      <div className="image">
        <img src={image || 'http://via.placeholder.com/200x300/000'} alt="places-img" width="200" />
        <div className="image-info">
        {tag && <div className="tag">{tag}</div>}
        {name && <div className="name">{name}</div>}
        </div>
      </div>
      <div className="info" title={`${owner} - ${text}`}>
        {owner && <b className="owner">By {owner}</b>} {text && <span className="text">{text}</span>}
      </div>
    </div>
  )
}

export default PlacesCard
