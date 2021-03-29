import './styles.scss'

const DestinationCard = ({ image, name }) => {
  return (
    <div className="destination-card">
      <div className="image">
        <img src={image || 'http://via.placeholder.com/200x300/000'} alt="destination-img" width="200" />
      </div>
      <div className="name">
        {name}
      </div>
    </div>
  )
}

export default DestinationCard
