import { createSignal, createEffect } from "solid-js";
import { useLocation } from "@solidjs/router";

function Header() {
    const location = useLocation();
    const [activePath, setActivePath] = createSignal(location.pathname);

    createEffect(() => {
        setActivePath(location.pathname);
    });

    return (
        <header id="header" className="header fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
                    <img src="../src/assets/img/logo.png" alt="" />
                    <span>Media Stock</span>
                </a>
                <nav id="navbar" className="navbar">
                    <ul className="nav-list">
                        <li>
                            <a
                                className={`nav-link scrollto ${activePath() === "/" ? "active" : ""}`}
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link scrollto ${activePath() === "/about" ? "active" : ""}`}
                                href="/about"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link scrollto ${activePath() === "/services" ? "active" : ""}`}
                                href="/services"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link scrollto ${activePath() === "/contact" ? "active" : ""}`}
                                href="/contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className="auth-list">
                        <li>
                            <a
                                className={`nav-link scrollto ${activePath() === "/login" ? "active" : ""}`}
                                href="/login"
                            >
                                Masuk
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link scrollto ${activePath() === "/register" ? "active" : ""}`}
                                href="/register"
                            >
                                Daftar
                            </a>
                        </li>
                        <li>
                            <a
                                className={`getstarted scrollto ${activePath() === "/shop" ? "active" : ""}`}
                                href="/shop"
                            >
                                Go To Shop
                            </a>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;
