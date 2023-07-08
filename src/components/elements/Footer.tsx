import { FunctionComponent } from "react";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <>
            <br />
            <br />
            <footer className="">
                <div className="p-5">
                    <h3 className="text-center">Website by Matan Konstantini</h3>
                    <p className="text-center mb-0">Created using the  <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB API</a>
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;