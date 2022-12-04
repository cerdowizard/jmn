import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import NewArrivals from "./NewArrivals"
const Category = () => {
  return (
      <div>
          <Navbar />
          <div className="cat container mt-5 mb-5">
              <div className="backCat">
                  <h2 className="text-center">Brocade Bazin Riche</h2>
              </div>
              <div className="sort d-flex d-f-2 mt-3">
                  <div className="left d-flex d-f-2 gap-2">
                      <span>FILTER BY</span>
                      <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                              backgroundColor: 'transparent',
                              color: 'black',
                              border: 'none'
                          }}>
                              All Products
                          </button>
                          <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="middle">
                      <span>Showing 36 results</span>
                  </div>
                  <div className="right d-flex d-f-2">
                      <span>SORT BY</span>
                      <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                              backgroundColor: 'transparent',
                              color: 'black',
                              border: 'none'
                          }}>
                              Best Selling 
                          </button>
                          <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <hr />
              <NewArrivals/>
          </div>
          <Footer/>
    </div>
  )
}

export default Category