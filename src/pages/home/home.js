import Footer from '../../components/footer/footer'
import TopBar from '../../components/top-bar'

import './styles.scss'


const Home = ({ location }) => {
 
  return (
    <div className="home-page">
      <TopBar pathname={location?.pathname || ''} />
      <section>
        <div className="container">
          <h2 className="section-title">Just Booked</h2>
        </div>    
      </section>
      <Footer />
    </div>
  )
}

export default Home
