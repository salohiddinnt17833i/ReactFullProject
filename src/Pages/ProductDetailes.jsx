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
        console.log(data.data);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
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
            <div className={Mode ? style.carddd : style.DCardd} style={{ cursor: "pointer" }}>
              <div className="card-body">
                <img className={style.cardImg} src={productData.data.attributes.image} alt="img" />
                <h5 className={Mode ? style.h6 : style.Dh6}>{productData.data.attributes.title}</h5>
                <h6 className={Mode ? style.h6 : style.Dh6}>$ {productData.data.attributes.company}</h6>
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