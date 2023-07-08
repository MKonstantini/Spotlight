import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-1 d-flex fixed-top">
            <div className="container-fluid">
                <div className="navbar-brand me-4 align-self-center">
                    <h1 className="m-0"><Link to='/' style={{ color: 'rgb(214, 187, 159)', textDecoration: 'none' }} onClick={() => document.querySelector('.pageStart')?.scrollIntoView()}>SPOTLIGHT</Link></h1>
                </div>

                <button className="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <div className="navbar-nav ">
                        <NavLink to={"/"} className="me-3 align-self-center btn"><h6 className="m-0" onClick={() => document.querySelector('.pageStart')?.scrollIntoView()}>Home</h6></NavLink>

                        <NavLink to={"/movies"} className="me-3 align-self-center btn"><h6 className="m-0" onClick={() => document.querySelector('.pageStart')?.scrollIntoView()}>Movies</h6></NavLink>

                        <NavLink to={"/tvseries"} className="me-3 align-self-center btn" onClick={() => document.querySelector('.pageStart')?.scrollIntoView()}><h6 className="m-0">TV Series</h6></NavLink>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;