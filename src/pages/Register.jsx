
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  return (
      <div>
          <Navbar />
          <div className="login">
              <h2>Create Account</h2>
              <form action="">
                  <div className="form-group">
                      <div className="d-flex gap-2">
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
                          <label for="exampleFormControlInput1" class="form-label">Email address *</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Whatsapp number*</label>
                          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Phone number*</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Street address *</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Apartment, suite, etc. *</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">City *</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                     
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Country *</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">State/Province *</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Zip/Postal code *</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                      </div>
                      <div className="mt-2">
                          <label for="exampleFormControlInput1" class="form-label">Password *</label>
                          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="*****" />

                      </div>
                      <div className="d-f mt-3">
                          <button>Submit</button>
                      </div>
                      <p className="text-center mt-2">Already have an account Login</p>
                  </div>
              </form>
          </div>
          <Footer />
      </div>
  )
}

export default Register