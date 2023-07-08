import { FunctionComponent } from "react";

interface CollageProps {
    windowWidth: number
    collageArr: any[]
    startPos: number
}

const Collage: FunctionComponent<CollageProps> = ({ collageArr, startPos }) => {
    const screenWidth = window.innerWidth;

    // Backdrop Paths:
    const backdrop1_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos].backdrop_path}`
    const backdrop2_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 1].backdrop_path}`
    const backdrop3_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 2].backdrop_path}`
    const backdrop4_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 3].backdrop_path}`
    const backdrop5_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 4].backdrop_path}`
    const backdrop6_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 5].backdrop_path}`
    const backdrop7_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 6].backdrop_path}`
    const backdrop8_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 7].backdrop_path}`
    const backdrop9_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 8].backdrop_path}`
    const backdrop10_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 9].backdrop_path}`
    const backdrop11_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 10].backdrop_path}`
    const backdrop12_path = `https://image.tmdb.org/t/p/original/${collageArr[startPos + 11].backdrop_path}`


    return (
        <>
            <div className="collage position-relative">
                {
                    screenWidth > 1330 ? (
                        <>
                            <div className="row m-0">
                                <img className="col-2 g-0" src={backdrop1_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop2_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop3_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop4_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop5_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop6_path} alt="backdrop1" />
                            </div>
                            <div className="row m-0">
                                <img className="col-2 g-0" src={backdrop7_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop8_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop9_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop10_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop11_path} alt="backdrop1" />
                                <img className="col-2 g-0" src={backdrop12_path} alt="backdrop1" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="row">
                                <img className="col-3 g-0" src={backdrop1_path} alt="backdrop1" />
                                <img className="col-3 g-0" src={backdrop2_path} alt="backdrop1" />
                                <img className="col-3 g-0" src={backdrop3_path} alt="backdrop1" />
                                <img className="col-3 g-0" src={backdrop4_path} alt="backdrop1" />
                            </div>
                            <div className="row">
                                <img className="col-3 g-0" src={backdrop5_path} alt="backdrop1" />
                                <img className="col-3 g-0" src={backdrop6_path} alt="backdrop1" />
                                <img className="col-3 g-0" src={backdrop7_path} alt="backdrop1" />
                                <img className="col-3 g-0" src={backdrop8_path} alt="backdrop1" />
                            </div>
                        </>
                    )
                }

                <div className="collage-gradient position-absolute w-100 h-100 top-0 z-1">
                </div>
            </div>
        </>
    );
}

export default Collage;