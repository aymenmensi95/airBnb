
import { useMemo } from 'react'

import starEmpty from '../../images/star.svg'
import starFull from '../../images/full-star.svg'
import starHalf from '../../images/half-star.svg'

import './styles.scss'

const StarsRate = ({ stars = 0 }) => {

  const renderStars = useMemo(() => {
    let count = stars || 0
    const starsList = []

    for(let i = 1; i <= 5; i++) {
      if(count <= 0) {
        starsList.push(<img key={i} src={starEmpty} alt="starEmpty" width="10px" className="default" />)
      } else if(count === 0.5){
        starsList.push(<img key={i} src={starHalf} alt="starHalf" width="10px" className="colored" />)
      } else {
        starsList.push(<img key={i} src={starFull} alt="starFull" width="10px" className="colored" />)
      }
      count--
    }

    return starsList

  }, [stars])

  return (
    <span className="stars-rate" title={`★ ${stars}`}>{renderStars}</span>
  )
}

export default StarsRate
