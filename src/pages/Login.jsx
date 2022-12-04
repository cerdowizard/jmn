import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="login">
                <h2>Login</h2>
                <form action="">
                    <div className="form-group">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

                        <div className="mt-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="********"/>

                        </div>
                        <p className="text-center mt-2">Forgot your password?</p>
                        <div className="d-f">
                            <button>Submit</button>
                       </div>
                        <p className="text-center">Create an account</p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login