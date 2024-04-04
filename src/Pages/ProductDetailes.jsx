import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./all.css";
import style from './all.module.css'

function ProductDetailes() {
  const [productData, setProductData] = useState(null);
  const { id } = useParams();
  let Mode = JSON.parse(localStorage.getItem("darkMode"))

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((err) => {
        console.error("Error fetching productData data.attributes.data:", err);
      });
  }, [id]);

  return (
    <div className="cc" style={Mode ? { backgroundColor: 'white' } : { backgroundColor: '#272935' }}  >
      <div className={style.container}>
        <div className="Link">
          <Link className="link" to={"/"}>Home </Link>
          <Link className="link" to={"/products"}> Products</Link>
        </div>
        <div className="Card">
          {productData ? (
            <div className="allll">
              <div className="block1">
                <img width={480} height={350} src={productData.data.attributes.image} alt="" />
              </div>
              <div className="block2">
                <h1>{productData.data.attributes.company}</h1>
                <span className="fs-4">Modenza: </span>
                <span>  ${productData.data.attributes.price}</span>
                <p>{productData.data.attributes.description}</p>
                <p>colors</p>
                <div className="colors">
                  <input type="color" id="color"/>
                  <input type="color" id="color"/>
                  <input type="color" id="color" />
                </div>
                <label htmlFor="select" >Amount</label> <br />
                <select id="select">

                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                </select>
                <br />
                <button className='btn btn-primary mt-2'>ADD TO BAG</button>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailes;