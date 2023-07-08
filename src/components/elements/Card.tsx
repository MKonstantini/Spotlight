import { FunctionComponent } from "react";
import { getGenre } from "../../utilities/getDetailFunctions";
import { Link } from "react-router-dom";

interface CardProps {
    subjectsArr: any[]
    subjectType: string
    position: number
}

const Card: FunctionComponent<CardProps> = ({ subjectsArr, subjectType, position }) => {
    let posterPath = `https://image.tmdb.org/t/p/w500/${subjectsArr[position].poster_path}`
    let linkToLocation = `/details/${subjectsArr[position].id}`

    return (
        <div className="myCard position-relative d-inline-block" style={{ maxWidth: 400 }}>
            {/* Card Panel And Content */}
            <div className="myCardPanel position-absolute">
                <div className="myCardContent d-flex flex-column justify-content-center align-items-center h-100">
                    {/* Title */}
                    {subjectType === 'movie' ? (
                        <h3 className="text-myColor text-center mx-3 mt-2">{subjectsArr[position].title}</h3>
                    ) : (
                        <h3 className="text-myColor text-center mx-3 mt-2">{subjectsArr[position].name}</h3>
                    )}

                    {/* Play Button */}
                    <div className="h-50 text-center d-flex flex-column justify-content-center">
                        <Link to={linkToLocation} onClick={() => document.querySelector('.pageStart')?.scrollIntoView()}>
                            <i className="fa-solid fa-play"></i>
                        </Link>
                    </div>

                    {/* Tags */}
                    <span className="mySpan mx-2 mb-2">
                        <p className="m-0 text-center">
                            {getGenre(subjectsArr, position, 1)}
                        </p>
                        <p className="m-0 text-center">
                            Rating: {Math.round(subjectsArr[position].vote_average * 10) / 10}
                        </p>
                    </span>
                </div>
            </div>

            {/* Poster Background */}
            <img src={posterPath} alt="poster" className="position-relative w-100" />
        </div>
    );
}

export default Card;