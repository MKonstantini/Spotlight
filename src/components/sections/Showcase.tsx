import { FunctionComponent, useState } from "react";
import Card from "../elements/Card";

interface ShowCaseProps {
    windowWidth: number;

    sectionId: string;
    showcaseArr: any[];
    subjectType: string;
    startPos: number;
    shownTitle: string;
}

const Showcase: FunctionComponent<ShowCaseProps> = ({ windowWidth, sectionId, showcaseArr, subjectType, startPos, shownTitle }) => {

    let [isCollapsed, setIsCollapsed] = useState(true)

    function createShowcase(windowWidth: number) {
        if (windowWidth < 768) {
            // display 1 card
            return (
                <div className="d-flex justify-content-center m-5">
                    <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos} />
                </div>
            )
        } else if (windowWidth < 1330 && isCollapsed) {
            // display 3 cards
            return (
                <div className="row d-flex justify-content-center g-0">
                    <div className="col-4" >
                        <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos} />
                    </div >
                    <div className="col-4" >
                        <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 1} />
                    </div >
                    <div className="col-4" >
                        <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 2} />
                    </div >
                </div>
            )
        } else if (windowWidth < 1330 && !isCollapsed) {
            // display 6 cards
            return (
                <div>
                    <div className="row d-flex justify-content-center g-0">
                        <div className="col-4" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos} />
                        </div >
                        <div className="col-4" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 1} />
                        </div >
                        <div className="col-4" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 2} />
                        </div >
                    </div>
                    <div className="row d-flex justify-content-center g-0">
                        <div className="col-4" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 3} />
                        </div >
                        <div className="col-4" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 4} />
                        </div >
                        <div className="col-4" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 5} />
                        </div >
                    </div>
                </div>
            )
        } else if (windowWidth > 1330 && isCollapsed) {
            // display 5 cards
            return (
                <div className="row d-flex justify-content-center g-0">
                    <div className="col-2" >
                        <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos} />
                    </div >
                    <div className="col-2" >
                        <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 1} />
                    </div >
                    <div className="col-2" >
                        <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 2} />
                    </div >
                    <div className="col-2" >
                        <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 3} />
                    </div >
                    <div className="col-2" >
                        <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 4} />
                    </div >
                </div>
            )
        } else if (windowWidth > 1330 && !isCollapsed) {
            // display 10 cards
            return (
                <div>
                    <div className="row d-flex justify-content-center g-0">
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos} />
                        </div >
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 1} />
                        </div >
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 2} />
                        </div >
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 3} />
                        </div >
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 4} />
                        </div >
                    </div>
                    <div className="row d-flex justify-content-center g-0">
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 5} />
                        </div >
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 6} />
                        </div >
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 7} />
                        </div >
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 8} />
                        </div >
                        <div className="col-2" >
                            <Card subjectsArr={showcaseArr} subjectType={subjectType} position={startPos + 9} />
                        </div >
                    </div>
                </div>
            )
        }
    }

    return (
        <section className="container mb-2 mb-md-5" id={sectionId}>
            <br />
            {/* Section Title */}
            <h1 className="display-6 text-center mb-2 mb-md-5">{shownTitle}</h1>

            {/* Decorative divider */}
            <div className="sectionDivider"></div>

            {/* Display Cards */}
            {
                createShowcase(windowWidth)
            }

            {/* Decorative divider + Collapse Btn */}
            <div className="sectionDivider position-relative">
                <span className="sectionBtn d-none d-md-block" style={{ cursor: "pointer" }} onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ?
                        <p className="m-0">
                            SHOW MORE
                        </p> : <p className="m-0">
                            SHOW LESS
                        </p>}
                </span>
            </div>
        </section >
    )
}

export default Showcase;