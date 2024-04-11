import './Hero.css'

function Hero(){

    return(
        <>
    <div className="main-3">
        <div className='left-3'>
            <div className='sub1'>
              <h1>Offer a range of payment<br />methods worldwide</h1>
            </div>
            <div className="sub2">
              <p>Reach new customers and give them the payment options<br />they prefer so you don'y miss a sale.
              </p>
            </div>
            <div className="sub3">
              <p>Accept debit and credit cards, digital wallets, PayPal, and 20+<br />local payment methods. All in a single integration</p>
            </div>
            <div className="sub4">
              <div className="ancor">
                <a href="#">More about payment methods</a>
              </div>
              <div className="arrow">
                <p><i class="fa-solid fa-arrow-right"></i></p>
              </div>
              <div className="circle"></div>
            </div>
        </div>
        <div className='right-3'>
        <img src="./public/images/sectionimg.png" alt="" />
        </div>
    </div>
        </>
    );
}

export default Hero;