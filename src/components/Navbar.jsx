import '../App.css'
const Navbar = () => {
  return (
      <div id="Navbar">
          <nav className="navbar navbar-expand-lg container">
              <div className="container-fluid d-flex">
                  <a className="navbar-brand" href="/">JNM <span style={{
                      color: '#52658F',
                      fontSize: '1.5em',
                      fontWeight: 'bold',
                      marginRight: '5px'
                    }}>Fabrics</span></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/cat">BROCADE</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">ATIKU</a>
                          </li>
                         
                          <li className="nav-item">
                              <a className="nav-link" href="#">ATIKU</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link" href="#">DRY LACE</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link" href="#">VOILE</a>
                          </li>

                           <li className="nav-item">
                              <a className="nav-link" href="#">WAX</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link" href="#">FRENCH LACE</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link" href="#">HEAD GEAR</a>
                          </li>

                          <li className="nav-item">
                              <a className="nav-link" href="#">MEN’S LACE</a>
                          </li>
                      </ul>
                      <div className="d-flex" role="search">
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                  <a className="nav-link" href="/cart">Cart</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="/login">Login</a>
                              </li>
                          </ul>
                          
                      </div>
                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar