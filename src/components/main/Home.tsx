import { FunctionComponent, useState } from "react";
import { Movie, Show } from "../../api/api_interfaces";
import Featuring from "../sections/Featuring";
import Showcase from "../sections/Showcase";


interface HomeProps {
    trendingMovies: Movie[]
    moviesInCinema: Movie[]
    showsTopRated: Show[]
}

const Home: FunctionComponent<HomeProps> = ({ trendingMovies, moviesInCinema, showsTopRated }) => {
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.onresize = () => setWindowWidth(window.innerWidth)

    return (
        <div className="pageStart">
            {
                trendingMovies.length && moviesInCinema.length && showsTopRated.length ? (
                    <>
                        <Featuring showcaseArr={trendingMovies} />
                        <br />

                        <Showcase windowWidth={windowWidth} showcaseArr={trendingMovies} subjectType="movie" startPos={1} sectionId="trending-section" shownTitle="TRENDING THIS WEEK" />

                        <Showcase windowWidth={windowWidth} showcaseArr={moviesInCinema} subjectType="movie" startPos={5} sectionId="moviesInCinema-section" shownTitle="NOW IN CINEMAS" />

                        <Showcase windowWidth={windowWidth} showcaseArr={showsTopRated} subjectType="show" startPos={0} sectionId="popularShows-section" shownTitle="LEGENDARY SHOWS" />
                    </>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
}

export default Home;