import imgOne from '../assets/unsplash_5GsbwkrCfuM.png'
import imgTwo from '../assets/unsplash_C8Q_zR8PDlA.png'
import imgThree from '../assets/unsplash_tUUmR82pq68.png'
const Slider = () => {
    return (
        <div id="Slider">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgOne} className="d-block w-100" alt="..." />
                        <div className="container imgUp">
                            <h1>Exclusive Fabrics
                                just for you</h1>
                            <button className=''>Shop Now</button>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={imgTwo} className="d-block w-100" alt="..." />
                        <div className="container imgUp">
                            <h1>Great Quality
                                Fabrics</h1>
                            <button className=''>Shop Now</button>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={imgThree} className="d-block w-100" alt="..." />
                        <div className="container imgUp">
                            <h1 className='ex'>Get your fabrics faster,
                                cheaper
                                and affordable</h1>
                            <button className=''>Shop Now</button>
                        </div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider