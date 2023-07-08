import { FunctionComponent } from "react";
import { useParams } from 'react-router-dom';
import { getGenre, getReleaseDate } from "../../utilities/getDetailFunctions";
import { useFetch_TrailerPath } from "../../api/api_functions";


interface DetailsProps {
    concatArr: any[]
}

const Details: FunctionComponent<DetailsProps> = ({ concatArr }) => {

    let subjectParam = useParams()
    let subjectId = Number(subjectParam.id)

    let subjectObj, positon: number = 0;
    for (let i = 0; i < concatArr.length; i++) {
        if (concatArr[i].id === subjectId) {
            subjectObj = concatArr[i]
            positon = i
            break
        }
    }

    const backdropPath = `https://image.tmdb.org/t/p/original/${subjectObj.backdrop_path}`
    const posterPath = `https://image.tmdb.org/t/p/original/${subjectObj.poster_path}`

    const mediaVideo = useFetch_TrailerPath(String(subjectObj.id))

    return (
        <>
            <div className="pageStart"></div>
            {/* Backdrop */}
            <div className="details-cover mb-5" style={{ backgroundPosition: "top", backgroundImage: `linear-gradient(125deg, black, transparent), url(${backdropPath})` }}></div>

            <section className="container mx-auto row 
            justify-content-center">

                <div className="sectionDivider"></div>

                {/* Poster Leftside */}
                <div className="col-md-4 my-4 p-0">
                    <img className="w-100" src={posterPath} alt="poster" />
                </div>

                {/* Info Rightside */}
                <div className="col-md-7 text-center text-lg-start mt-4 ms-5 mb-4">

                    {/* Title */}
                    <h1 className="text-myColor mb-3">{subjectObj.title}{subjectObj.name}</h1>

                    {/* Spans */}
                    <div className="mb-3">
                        {/* Genres */}
                        <span className="mySpan d-none d-sm-inline-block mb-1 me-2" style={{ fontSize: 20 }}>{getGenre(concatArr, positon, 1)}</span>
                        {
                            getGenre(concatArr, positon, 2) && <span className="mySpan d-none d-sm-inline-block mb-1 me-2" style={{ fontSize: 20 }}>{getGenre(concatArr, positon, 2)}</span>
                        }

                        {/* Rating */}
                        <span className="mySpan d-none d-sm-inline-block mb-1 me-2" style={{ fontSize: 20 }}>Rating: {Math.round(subjectObj.vote_average * 10) / 10}</span>

                        {
                            subjectObj.title &&
                            <span className="mySpan d-none d-sm-inline-block mb-1 me-2" style={{ fontSize: 20 }}>
                                {getReleaseDate(concatArr, positon)}
                            </span>
                        }
                    </div>

                    {/* Overview */}
                    <p className="d-none d-lg-block">{subjectObj.overview}</p>

                    {/* Links */}
                    <div>
                        <h4 className="text-myColor">Find on:</h4>
                        <a href="https://www.amazon.com/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-amazon" title="Amazon" style={{ color: "grey", fontSize: 50, marginTop: 10, marginInlineEnd: 30 }}></i>
                        </a>
                        <a href="https://tv.apple.com/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-apple" title="Apple Tv" style={{ color: "grey", fontSize: 50, marginTop: 10, marginInlineEnd: 30 }}></i>
                        </a>
                        <a href="https://play.google.com/store/movies/?hl=en_GB&gl=US" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-google-play" title="Google Play Movies" style={{ color: "grey", fontSize: 40, marginTop: 10, marginInlineEnd: 30 }}></i>
                        </a>
                    </div>
                </div>

                <div className="sectionDivider"></div>
            </section>

            {
                // Media Video
                subjectObj.title &&
                <section className="container mb-5">
                    <h1 className="display-6 text-center mb-4">MEDIA:</h1>
                    <div className="mx-md-5 d-flex justify-content-center">
                        <iframe className="w-100" style={{ maxWidth: 700 }} height={400} src={mediaVideo} title="Media Video"></iframe>
                    </div>
                </section>
            }
            <br />
        </>
    )

}

export default Details;