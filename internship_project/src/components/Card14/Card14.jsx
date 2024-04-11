import './Card14.css'

function Card14(){

    return(
        <>
        <div className="main-wrapper4">
            <div className="left_wrapper4">
                <div className="imgtext">
                <img src="./public/images/Card13.png"/>
                <h1>Contact our sales team</h1>
                <p>Learn how payments can be leveraged as a catalyst for growth.</p>
            </div>
                <div className="button">
                    <button className='btn-5'>Contact Sales</button>
                </div>
            </div>
            <div className="right_wrapper4">
                <div className="imgtext">
                    <img src="./public/images/Card14.png"/>
                    <h1>Explore developer documentation</h1>
                    <p>See how our flexible and interoperable technology helps to simplify integration.</p>
                </div>
                <div className="button">
                    <button className='btn-5'>Visit Developer Docs</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card14;