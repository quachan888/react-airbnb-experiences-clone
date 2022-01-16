import airbnblogo from "../img/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={airbnblogo} alt="Airbnb logo" className="nav--logo" />
        </nav>
    );
}
