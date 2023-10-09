
import { Link } from "react-router-dom";

function Item({ id, title, imgUrl, description, price }) {




    return (
        <div
            className="flex flex-col self-center justify-center h-3/4 px-5"
            key={id}
        >
            <img
                className="h-4/5 aspect-video object-cover"
                src={imgUrl}
                alt={description}
            />
            <div className="flex-col">
                <h3 className="">{title}</h3>
                <h4 className="flex-end">${price}</h4>
                <div className="flex justify-between">
                    <Link to={`/games/game/${id}`}>
                        <button
                            className="bg-red-500 rounded w-20">
                            See Detail
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Item