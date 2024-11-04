import React, { useState, useEffect } from "react";
import Link from "next/link";

function Installment(props) {
  const fees = props.installment.hasFee 
  	? "com juros"
  	: "sem juros";
  return (
        <p>
            em {props.installment.number}x de R$ {props.installment.total} {fees}
        </p>
   )};


function ProductListItem(props) {
  const defaultProductImage = "https://via.placeholder.com/150";
  return (
    <div className="d-flex position-relative border my-2">
      <img
      src={defaultProductImage}
      className="flex-shrink-0 me-3" />
      <div>
        <Link className="stretched-link" href={`/products/${props.product.code}`}>
            <h3 className="mt-0"> tit: {props.product.title}</h3>
        </Link>
        <h4>R  $ {props.product.amount}</h4>
        <Installment installment={props.product.installments} />
      </div>
    </div>
  );
}

function ProductsForSaleList(props) {
   const products = props.product.map( 
   	 (x, index) => <ProductListItem product={x} key={index} />
   );
   console.log(products);
   return(
        <div>
            <h1>olá</h1>
            <div>{products}</div>
        </div>
   )
 }

 export default ProductsForSaleList;