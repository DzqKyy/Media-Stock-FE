function Header() {
    return (
        <header id="header" className="header fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
                    <img src="../src/assets/img/logo.png" alt="" />
                    <span>Media Stock</span>
                </a>
                <nav id="navbar" className="navbar">
                    <ul className="nav-list">
                        <li><a className="nav-link scrollto" href="/">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <ul className="auth-list">
                        <li><a className="nav-link scrollto" href="/login">Masuk</a></li>
                        <li><a className="nav-link scrollto" href="/register">Daftar</a></li>
                        <li><a className="getstarted scrollto" href="/shop">Go To Shop</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default Header;
