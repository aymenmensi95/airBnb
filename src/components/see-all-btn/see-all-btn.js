import { Link } from '@reach/router'

import arrowRight from '../../images/right-chevron.svg'

import './styles.scss'

const SeeAllBtn = ({ className, to }) => {
  return (
    <Link className={`see-all-btn ${className || ''}`} to={to || '/'}>
      See All
      <img src={arrowRight} alt="arrow-right" width="10px" />
    </Link>
  )
}

export default SeeAllBtn
