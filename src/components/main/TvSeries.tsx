import { FunctionComponent, useState } from "react";
import { Show } from "../../api/api_interfaces";
import Collage from "../sections/Collage";
import Quote from "../sections/Quote";
import Gallery from "../sections/Gallery";

interface TvSeriesProps {
    showcaseArr: Show[]

}

const TvSeries: FunctionComponent<TvSeriesProps> = ({ showcaseArr }) => {
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.onresize = () => setWindowWidth(window.innerWidth)

    return (
        showcaseArr.length ? (
            <div className="pageStart">
                <Collage windowWidth={windowWidth} collageArr={showcaseArr} startPos={3} />

                <Quote quoteNum={2} />

                <Gallery showcaseArr={showcaseArr} subjectType="show" startingPos={7} />
            </div>

        ) : (
            <p>Loading...</p>
        )
    );
}

export default TvSeries;