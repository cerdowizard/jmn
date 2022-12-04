import collectionImg from '../assets/Default.png'
const Collections = ({title}) => {
  return (
      <div id='Collections' className='container p-3'>
          <div className="title">
              <h2 className='text-center'>{title}</h2>
              <div className="row mt-5">
                  <div className="col-md-3">
                      <img src={collectionImg} alt="Collection Image" className="collection-img"/>
                </div>
                <div className="col-md-3">
                    <img src={collectionImg} alt="Collection Image" className="collection-img"/>
                </div>
                <div className="col-md-3">
                    <img src={collectionImg} alt="Collection Image" className="collection-img"/>
                </div>
                <div className="col-md-3">
                    <img src={collectionImg} alt="Collection Image" className="collection-img"/>
                </div>
              </div>
              <div className="button-collection">
                  <button className="">
                      See More
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Collections