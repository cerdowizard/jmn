import paypal from '../assets/Group 34.png'

const Checkout = () => {
  return (
      <div className='Checkout'>
          <div className="container">
              <h2 className='text-center p-5'>  <a className="navbar-brand" href="/">JNM <span style={{
                  color: '#fff',
                  fontSize: '1.5em',
                  fontWeight: 'bold',
                  marginRight: '5px'
              }}>Fabrics</span></a></h2>
              <div className="pay">
                  <img src={paypal} alt="" />
              </div>
              <h5 className='text-center mt-4'>Contact information</h5>
              <h5 className='text-center'>Username (user-info@email.com)</h5>
              <h5 className='text-center mb-3'>Log out</h5>
              <div className="form">
                  <h3>Shipping address</h3>
                  <form action="">
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Street address (saved address)</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Country</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="d-flex gap-2 mt-2">
                          <div className="">
                              <label for="exampleFormControlInput1" class="form-label">First name *</label>
                              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                          </div>

                          <div className="">
                              <label for="exampleFormControlInput1" class="form-label">Last name *</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                          </div>
                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Street address *</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="d-flex gap-2 mt-2">
                          <div className="">
                              <label for="exampleFormControlInput1" class="form-label">City</label>
                              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                          </div>

                          <div className="">
                              <label for="exampleFormControlInput1" class="form-label">State</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                          </div>
                          <div className="">
                              <label for="exampleFormControlInput1" class="form-label">Postal code</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                          </div>
                          
                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Phone number*</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="d-flex d-f-2 mt-4">
                          <span href="">Return to cart</span>
                          <button>Continue to shipping</button>
                      </div>
                  </form>
              </div>
          </div>
       
      </div>
  )
}

export default Checkout