import { useParams } from "react-router-dom"

function ItemListContainer({greeting}) {

    const {category} = useParams ()

    console.log(category)
    return (
        <h1 className="text-7xl mt-24">
            {greeting}
        </h1>
    )
}

export default ItemListContainer