import { FunctionComponent, useState } from "react";
import { Movie } from "../../api/api_interfaces";
import Collage from "../sections/Collage";
import Quote from "../sections/Quote";
import Gallery from "../sections/Gallery";

interface MoviesProps {
    showcaseArr: Movie[];
}

const Movies: FunctionComponent<MoviesProps> = ({ showcaseArr }) => {
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.onresize = () => setWindowWidth(window.innerWidth)

    return (
        showcaseArr.length ? (
            <div className="pageStart">
                <Collage windowWidth={windowWidth} collageArr={showcaseArr} startPos={7} />

                <Quote quoteNum={1} />

                <Gallery showcaseArr={showcaseArr} startingPos={0} />
            </div>

        ) : (
            <p>Loading...</p>
        )
    );
}

export default Movies;