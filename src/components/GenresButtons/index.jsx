import { Link } from "react-router-dom";

  function GenresButtons() {
    return(
        <div className="flex justify-center mt-5">
            <div className="w-[90%] flex text-3xl justify-evenly">
                <Link to={"/games/genres/action"}><button className="bg-red-500 w-44">Action</button></Link>
                <Link to={"/games/genres/adventure"}><button className="bg-red-500 w-44">Adventure</button></Link>
                <Link to={"/games/genres/platformer"}><button className="bg-red-500 w-44">Platformer</button></Link>
                <Link to={"/games/genres/multiplayer"}><button className="bg-red-500 w-44">Multiplayer</button></Link>
                <Link to={"/games/genres/puzzle"}><button className="bg-red-500 w-44">Puzzle</button></Link>
                <Link to={"/games/genres/indie"}><button className="bg-red-500 w-44">Indie</button></Link>
            </div>
            
        </div>
    )
  }

export default GenresButtons;
