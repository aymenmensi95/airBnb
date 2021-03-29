import { useState } from 'react'

import TopBar from '../../components/top-bar'
import SeeAllBtn from '../../components/see-all-btn/see-all-btn'
import Footer from '../../components/footer/footer'

import { SMALL_PAGES } from './helper'

import './styles.scss'

const Home = ({ location }) => {
  const [activeSmallPage, setActiveSmallPage] = useState('for_you')
 
  return (
    <div className="home-page">
      <TopBar pathname={location?.pathname || ''} extraLinks={SMALL_PAGES} onClickExtraLink={setActiveSmallPage} activeExtraLink={activeSmallPage} />
      <section>
        <div className="container">
          <h2 className="section-title">Just Booked</h2>
          <h2 className="section-title">Featured destinations <SeeAllBtn /></h2>
        </div>    
      </section>
      <Footer />
    </div>
  )
}

export default Home
