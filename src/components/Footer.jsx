import apex from '../assets/icons8_amex.png'
import master from '../assets/Frame 4(2).png'
import pay from '../assets/Frame 4(1).png'
import visa from '../assets/Frame 4.png'
import face from '../assets/ic_baseline-facebook.png'
import insta from '../assets/ri_instagram-fill.png'
const Footer = () => {
  return (
    <div id="Footer">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <h3>Menu</h3>
            <ul>
              <li>Search</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Refund policy</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Newsletter</h3>
            <div className="sub">
              <input type="text" placeholder="Email address"/>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="col-md-3">
            <h3>Customer Service</h3>
            <p>Whatsapp : +44155-557-3245</p>
            <p>Email : info@jnmfabrics.com</p>
            <p>9:30am - 9:30pm UK Time</p>
          </div>
        </div>
        <hr className="mt-3 mb-3" />
        <div className="d-flex d-f-2">
          <div className="left">
            <img src={apex} alt="" />
            <img src={master} alt="" />
            <img src={pay} alt="" />
            <img src={visa} alt="" />
          </div>
          <div className="right">
            <div className="">
              <img src={face} alt="" />
              <img src={insta} alt="" />
            </div>
            <p>2022, JNM Fabrics</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer