import { FunctionComponent } from "react";
import Card from "../elements/Card";

interface GalleryProps {
    showcaseArr: any[]
    startingPos: number
}

const Gallery: FunctionComponent<GalleryProps> = ({ showcaseArr, startingPos }) => {
    let screenWidth = window.innerWidth;

    return (
        screenWidth > 767 ? (
            <div className="container gallery d-flex justify-content-center flex-wrap align-items-center">
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 1} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 2} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 3} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 4} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 5} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 6} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 7} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 8} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 9} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 10} /></div>
                <div className="col-3"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 11} /></div>
            </div>
        ) : (
            <div className="container gallery d-flex justify-content-center flex-wrap align-items-center">
                <div className="col-6"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos} /></div>
                <div className="col-6"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 1} /></div>
                <div className="col-6"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 2} /></div>
                <div className="col-6"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 3} /></div>
                <div className="col-6"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 4} /></div>
                <div className="col-6"> <Card subjectsArr={showcaseArr} subjectType="movie" position={startingPos + 5} /></div>
            </div>
        )
    );
}

export default Gallery;