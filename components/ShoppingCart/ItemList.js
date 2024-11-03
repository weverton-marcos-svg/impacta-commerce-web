import Item from "./Item";

function ItemList(props) {

    function onQuantityChanged(ev) {
        props.onQuantityChanged(ev);
    }

    let rows = [];

    props.products.forEach((product,index) => {
        rows.push(
            <Item
                key={index}
                product={product}
                onQuantityChanged={onQuantityChanged}
            />
        );
    });

    return <div>{rows}</div>
}

export default ItemList;