import { useEffect,useState } from "react";

import ItemList from "./ItemList";
import Summary from "./Summary";

function Cart(props){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setProducts(props.cart.products);
    },[]);

    function onQuantityChanged(ev){
        for (const product of props.cart.products){
            if (product.code == ev.product.code){
                product.qty = ev.newQty;
                setProducts(props.cart.products.map((x) => x));
                break;
            }
        }
    }

    return (
        <div>
            <hr/>
            <ItemList products={products} onQuantityChanged={onQuantityChanged} />
            <br />
            <Summary products={products} />
        </div>
    );
}

export default Cart;