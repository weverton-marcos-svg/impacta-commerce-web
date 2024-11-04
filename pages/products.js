import React, { useState, useEffect } from "react";
import ProductForSalesList from "../components/ProductsForSaleList"

export default function ProductForSalesLista(){
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
        return <ProductForSalesList product={products} />
    }
}