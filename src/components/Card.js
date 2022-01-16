import cardimg from "../img/card1.png";
import cardstar from "../img/card-star.png";

export default function Card() {
    return (
        <div className="card">
            <div className="card-img-box">
                <img src={cardimg} alt="" className="card-img" />
                <div className="card-img-overlay">SOLD OUT</div>
            </div>

            <div className="card-review">
                <img src={cardstar} alt="" className="card-stars" />
                <span>5.0</span>
                <span className="gray">(6) </span>
                <span className="gray">&#8226; </span>
                <span className="gray"> USA</span>
            </div>

            <p className="card-title">Life lessons with Katie Zaferes</p>

            <p className="card-price">
                <span className="bold">From $136</span> / person
            </p>
        </div>
    );
}
