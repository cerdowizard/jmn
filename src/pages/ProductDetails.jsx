import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import collectionImg from '../assets/WhatsApp_Image_2022-11-08_at_9.35 5.png'
import NewArrivals from '../components/NewArrivals'
const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="ProductDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-6  prodDetails">
              <img src={collectionImg} alt="" />
            </div>
            <div className="col-md-6">
              <div className="title mt-3">
                <h3>Luxury Voile - Blue
                  (5 yards)</h3>
                <p>Shipping: Calculated at checkout</p>
                <p>Length of fabric: In description below</p>
                <h2>$ 40.75</h2>
              </div>
              <div className="Description">
                <h3 className='bg-dark text-center'>
                  Description
                </h3>
                <p>Middlesex Luxury Voile</p>
                <p>Length = 5 yards (4.57M) Width = 59 inch (150cm)</p>
              </div>
              <div className="Description">
                <h3 className='bg-dark text-center'>
                  More Information
                </h3>
                <p>Made from Cotton (35%) with Polyester (65%) Masculine colours consequently making it perfect for casual and occasional wear. All making the Middlesex Luxury Voile garment especially relevant today.</p>

              </div>
              <div className="Description">
                <h3 className='bg-dark text-center'>
                  Disclaimer
                </h3>
                <p>Disclaimer as per our Terms & conditions. Please note that photos are for illustration purposes and may appear to differ slightly from actual Item in terms of colour due to your monitor’s display settings. We do our utmost to represent items as accurately as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="relatedProd mt-4">
            <h2>Related Products</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="pricecontainer">
                  <img src={collectionImg} alt="Collection Image" className="collection-img" />
                  <div className="priceHolder">
                    <p>Luxury Voile - Wine
                    </p>
                    <p>(5 yards)</p>
                    <p>£100.45</p>
                    <button>View Item</button>
                  </div>
                </div>

              </div>

              <div className="col-md-3">
                <div className="pricecontainer">
                  <img src={collectionImg} alt="Collection Image" className="collection-img" />
                  <div className="priceHolder">
                    <p>Luxury Voile - Wine
                    </p>
                    <p>(5 yards)</p>
                    <p>£100.45</p>
                    <button>View Item</button>
                  </div>
                </div>

              </div>

              <div className="col-md-3">
                <div className="pricecontainer">
                  <img src={collectionImg} alt="Collection Image" className="collection-img" />
                  <div className="priceHolder">
                    <p>Luxury Voile - Wine
                    </p>
                    <p>(5 yards)</p>
                    <p>£100.45</p>
                    <button>View Item</button>
                  </div>
                </div>

              </div>

              <div className="col-md-3">
                <div className="pricecontainer">
                  <img src={collectionImg} alt="Collection Image" className="collection-img" />
                  <div className="priceHolder">
                    <p>Luxury Voile - Wine
                    </p>
                    <p>(5 yards)</p>
                    <p>£100.45</p>
                    <button>View Item</button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetails