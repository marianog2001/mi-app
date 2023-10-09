import Item from "../Item"

function ItemList({products}) {

    return(
        <div className="bg-neutral-700 mx-5 grid grid-cols-3 border-2 border-main-red">
            {products.map(product => <Item key={product.id} {...product} /> )}
        </div>
    )
}

export default ItemList