import { useState } from 'react'

import TopBar from '../../components/top-bar'
import SeeAllBtn from '../../components/see-all-btn'
import ProductCard from '../../components/product-card'
import DestinationCard from '../../components/destination-card'
import Footer from '../../components/footer/footer'

import { SMALL_PAGES, BOOKED, DESTINATIONS } from './helper'

import './styles.scss'

const Home = ({ location }) => {
  const [activeSmallPage, setActiveSmallPage] = useState('for_you')
 
  return (
    <div className="home-page">
      <TopBar pathname={location?.pathname || ''} extraLinks={SMALL_PAGES} onClickExtraLink={setActiveSmallPage} activeExtraLink={activeSmallPage} />
      <div className="container">
        <section className="section">
          <h2 className="section-title">Just Booked</h2>
          <div className="row justify-center">
            {BOOKED.map((data, index) => (
              <div key={index} className="col col-sm-5 col-md-3 col-xl-2">
                <ProductCard {...data} />
              </div>
            ))}
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Featured destinations <SeeAllBtn /></h2>
          <div className="row justify-center">
            {DESTINATIONS.map((data, index) => (
              <div key={index} className="col featured-destinations-wrapper">
                <DestinationCard {...data} />
              </div>
            ))}
          </div>
        </section>
      </div>    
      <Footer />
    </div>
  )
}

export default Home
