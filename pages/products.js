import React, { useState, useEffect } from "react";
import style from '../styles/Products.module.css'

function Installment(props){
    const fees = props.instainstallment.hasFree ? "com Juros" :"sem juros";

    return(
        <p>
            em {props.instainstallment.number}x de R${props.instainstallment.total} {fees} 
        </p>
    )
}

function ProductListItem(props){
    const defaultProductImage = "https://placehold.co/150";

    return(
        <div className={style.rowItem}>
            <img src={defaultProductImage} className="flex-shrink-0 me-3" />
            <div className={style.itemText}>
                <a href="#" className="stretched-link">
                    <h3 className="mt-0">{props.product.title}</h3>
                </a>
                <h4>R$ {props.product.amount}</h4>
                <Installment instainstallment={props.product.installments} />
            </div>
        </div>
    )
}

export default function ProductForSalesList(){
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [products, setProducts] = useState([]);

   useEffect(() => {
        fetch("http://127.0.0.1:5000/products")
            .then((response) => response.json())
            .then(
                (json) => {
                    setIsLoaded(true);
                    setProducts(json);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        },[]
    );

    if(error){
        return <div>Error: {error.menssage}</div>;
    }else if(!isLoaded){
        return <div>Carregando..</div>
    }
    else{
        const p = products.map(
            (x, index) => <ProductListItem product={x} key={index} />);
            return <div className={style.container}>{p}</div>
    }
}