import photogrid from "../img/photo-grid.png";

export default function Hero() {
    return (
        <div className="hero">
            <img className="photo-grid" src={photogrid} alt="airbnb experiences grid" />
            <div className="hero-text">
                <p className="hero-header">Online Experiences</p>
                <p className="hero-content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
}
