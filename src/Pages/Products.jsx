import { useEffect, useState } from 'react';
import style from './all.module.css'
import { BeatLoader } from 'react-spinners';
import './all.css'

function Products() {
  const Mode = JSON.parse(localStorage.getItem("darkMode"))
  const [allData, setAllData] = useState([])
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState("black");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    setLoading(true)
    fetch(`https://strapi-store-server.onrender.com/api/products`, {
      method: "GET"
    })
      .then(json => json.json())
      .then(data => {
        setAllData(data.data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div className='text-center'>
        {
          loading ? <BeatLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader" /> : <div className={Mode ? 'Palll' : 'PDall'}>
            <div style={{ textAlign: "center", paddingTop: "100px" }} className={style.container}>
              <div className={style.container}>
                <div>
                  <div className={Mode ? 'div' : 'Ddiv'}>
                    <div>
                      <div className='divv'>
                        <label htmlFor="name">Search Products</label> <br />
                        <input className={Mode ? 'input' : 'Dinput'} type="text" placeholder='Search' />
                      </div>
                      <div>
                        <label htmlFor="range">Select price</label> <br />
                        <input className={Mode ? 'input' : 'Dinput'} type="range" />
                      </div>
                    </div>
                    <div>
                      <div className='divv'>
                        <label htmlFor="category">Select Category</label> <br />
                        <select className={Mode ? 'input' : 'Dinput'}>
                          <option value="all">All</option>
                          <option value="Tables">Tables</option>
                          <option value="Chaires">Chaires</option>
                          <option value="Kids">Kids</option>
                          <option value="Sofas">Sofas</option>
                          <option value="Beds">Beds</option>
                        </select>
                      </div>
                      <div className='text-center'>
                        <label htmlFor="freeShopping" >Free Shopping</label> <br />
                        <input className={Mode ? 'input' : 'Dinput'} type="checkbox" />
                      </div>
                    </div>
                    <div>
                      <div className='divv'>
                        <label htmlFor="category">Select Category</label> <br />
                        <select className={Mode ? 'input' : 'Dinput'}>
                          <option value="all">All</option>
                          <option value="Modenza">Modenza</option>
                          <option value="Luxora">Luxora</option>
                          <option value="Artiflew">Artiflewx</option>
                          <option value="Komfora">Komfora</option>
                          <option value="hamestand">Hamestand</option>
                        </select>
                      </div>
                      <div>
                        <button className='btn btn-primary'>Search</button>
                      </div>
                    </div>
                    <div>
                      <div className='divv'>
                        <label htmlFor="category">Select Category</label> <br />
                        <select className={Mode ? 'input' : 'Dinput'}  >
                          <option value="a-z">a-z</option>
                          <option value="z-a">z-a</option>
                          <option value="hight">hight</option>
                          <option value="low">low</option>
                        </select>
                      </div>
                      <div>
                        <button className='btn btn-danger'>Reset</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex flex-wrap gap-4 justify-content-center mt-5'>
                  {
                    loading ? <BeatLoader
                      color={color}
                      loading={loading}
                      cssOverride={override}
                      size={15}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    /> : allData.length > 1 && allData.map((el, index) => {
                      return (
                        <div onClick={() => { handleClick(el.id) }} key={index} className={Mode ? 'card' : style.DCard} style={{ cursor: "pointer" }}>
                          <div className="card-body text-center">
                            <img className={style.cardImg} src={el.attributes.image} alt="img" />
                            <h5 className="card-title mt-4">{el.attributes.title}</h5>
                            <h6 className={Mode ? style.h6 : style.Dh6}>$ {el.attributes.price}</h6>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Products