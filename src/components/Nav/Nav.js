import React from "react"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light static-top header-a">
            <div className="container nav-container">
                {/* <a className="navbar-brand brand" href="#">DoceFund</a> */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li> */}

                        <a className="btn btn-outline-dark start" href="#">Contact Us</a>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;