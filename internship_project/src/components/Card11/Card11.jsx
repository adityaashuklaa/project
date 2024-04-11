import './Card11.css'

function Card11(){

    return(
        <>
            <div className="main-wrap">
                <div className="left-wrap">
                    <div className="left_1">
                        <p id='quote'><i class="fa-solid fa-quote-left"></i></p>
                        <p>The user experience in terms of usability, trust, and flexibility is everything, especially for the digitally native consumer. The experience PayPal helps us provide is beating all consumer expectations.</p>
                    </div>
                    <div className="left_2">
                        <p>Devid Oman</p>
                        <p>Chief Marketing Officer</p>
                    </div>
                    <div className="left_3">
                        <p>Samsonite</p>
                    </div>
                </div>
                <div className="right-wrap">
                    <img src="./public/images/Card11.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Card11;