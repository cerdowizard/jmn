import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const Cart = () => {
    return (
        <div>
            <Navbar />
            <div className="cart container mt-4 mb-4">
                <h2 className="text-center">Your cart</h2>
                <h6 className="text-center"><a href="">Continue shopping</a></h6>
                <div className="mt-5">
                    <table class="table">
                        <thead>
                            <tr>
                             
                                <th scope="col">PRODUCT</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                            <tr>
                                
                                <td >Larry the Bird</td>
                                <td>$ 40.75</td>
                                <td>1</td>
                                <td>$ 40.75</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="subp">
                        <div className="d-flex gap-5">
                            <span>Subtotal</span>
                            <span>$70</span>
                        </div>
                       
                        <p>Taxes and shipping calculated at checkout</p>
                        <button ><Link to='/checkout'>CHECK OUT</Link></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart