import { getGenre, getReleaseDate } from "../../utilities/getDetailFunctions";
import { Movie } from "../../api/api_interfaces";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";


interface FeaturingProps {
    showcaseArr: Movie[];
}

const Featuring: FunctionComponent<FeaturingProps> = ({ showcaseArr }) => {
    // Get Backdrop For Background
    const backdropPath = `https://image.tmdb.org/t/p/original/${showcaseArr[0].backdrop_path}`
    const posterPath = `https://image.tmdb.org/t/p/original/${showcaseArr[0].poster_path}`
    const linkToPath = `/details/${showcaseArr[0].id}`

    return (
        <section id="featuring-section" style={{ backgroundImage: `linear-gradient(125deg, black, transparent), url(${backdropPath})` }}>
            <div className="featuring-content container mt-5">

                {/* Section Title */}
                <h1 className="display-6 text-center">CURRENTLY IN THE SPOTLIGHT</h1>

                <div className="row d-lg-flex justify-content-center mt-4 text-center text-lg-start">
                    {/* Card As Col-4 */}
                    <div className="col-lg-4 mt-3">
                        <img src={posterPath} style={{ maxWidth: 400 }} alt="poster" className="position-relative w-100" />
                    </div>

                    {/* Div As Col-7 */}
                    <div className="col-lg-7 d-inline-block m-4">
                        {/*Movie Title */}
                        <h1 className="text-myColor">{showcaseArr[0].title}</h1>
                        {/* Genre Tags */}
                        <span className="mySpan d-none d-md-inline-block mb-1 me-2" style={{ fontSize: 20 }}>{getGenre(showcaseArr, 0, 1)}</span>
                        <span className="mySpan d-none d-md-inline-block mb-1 me-2" style={{ fontSize: 20 }}>{getGenre(showcaseArr, 0, 2)}</span>
                        {/* Rating Tag */}
                        <span className="mySpan d-none d-md-inline-block mb-1 me-2" style={{ fontSize: 20 }}>Rating: {Math.round(showcaseArr[0].vote_average * 10) / 10}</span>
                        {/* Release Date Tag */}
                        <span className="mySpan d-none d-md-inline-block mb-1 me-2" style={{ fontSize: 20 }}>Release : {getReleaseDate(showcaseArr, 0)}</span>
                        {/* About Paragraph */}
                        <p className="d-none d-lg-block mt-3">{showcaseArr[0].overview}</p>
                        {/* Play BTN */}
                        <Link to={linkToPath}>
                            <div className="heroBtn d-inline-block px-4 py-2 mt-3">
                                <p className="m-0" style={{ color: "white" }}><i className="fa-solid fa-play"></i> Watch Now</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featuring;