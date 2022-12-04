import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import Slider from '../components/Slider'
import Collections from '../components/Collections'
import NewArrivals from '../components/NewArrivals'
import Footer from "../components/Footer";
const Home = () => {
  return (
      <div>
          <Navbar />
          <div id="Home">
              <Slider />
              <div className="text container" >
                  <h2>Welcome To JNM Royale Fabrics</h2>
                  <p>JNM Royale Fabrics is one of the primary and trusted online shop for all your original and authentic African fabric located in London. JNM Royale Fabrics strives to establish long-term relations with its customers by providing them with exclusive and quality products at fair prices.</p>
                  <button>Learn More</button>
              </div>
              <hr className='container mt-5 mb-5'/>
              <Collections title='Our Collections'/>
        <hr className='container mt-5 mb-5' />
        <h2 className='text-center'>New Arrivals</h2>
              <NewArrivals />
              <hr className='container mt-5 mb-5' />
              <Collections title='Featured Collections' />
              <Footer/>
          </div>
    </div>
  )
}

export default Home