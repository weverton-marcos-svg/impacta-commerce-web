import { useEffect,useState } from "react";

import ItemList from "./ItemList";
import Summary from "./Summary";
import {getCard, updateCart} from "../../Api/api"

const FIXED_CART_CODE = "fixed-cart-code"

function Cart(props){
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        getCart(FIXED_CART_CODE).then((json) => {
        setProducts(json.products);
        });
    }, []);

    function onQuantityChanged(ev){
        for (const product of products){
            if (product.code == ev.product.code){
                product.qty = ev.newQty;
                setProducts(products.map((x) => x));
                updateCart(FIXED_CART_CODE, products);
                break;
            }
        }
    }


    if (error){
        return <div>Error: {error.message}</div>;
    }else if (!isLoaded){
        return <div>Loading...</div>;
    }else {
        return (
            <div>
                <hr/>
                <ItemList products={products} onQuantityChanged={onQuantityChanged} />
                <br />
                <Summary products={products} />
            </div>
        );
    }
}

export default Cart;