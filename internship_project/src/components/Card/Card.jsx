import './Card.css'

function Card(){

    return (
        <>
            <div className='nav'>
      <div className='left-wrapper'>
        <div id='logo'>
          <img src="./public/images/logo.png" alt="" />
        </div>
        <div className='navbar'>
          <ul>
            <li><a href="#">Personal</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Developer</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        
        </div>
      </div>
      <div className='right-wapper'>
       <button className='btn-1'>Log In</button>
       <button className='btn-2'>Sign Up</button>
      </div>
    </div>
    <div className='main-1'>
        <div className='heading-1'>
          <h1>Global Payment <br /> Processing Solutions</h1>
          <p>Grow and optimize your business with a flexible, end-to-end payments platform <br /> powered by Braintree technology.</p>
        </div>
        <div className='heading-btn'>
          <button className='btn-2'>Connect with a Payments Expert</button>
        </div>
    </div>
    <div className='image'>
        <img src="./public/images/heroimg.png" alt="" />
    </div>
    <div className='main-2'>
        <div className='left-1'>
          <h1>401%</h1>
          <p>ROI for the composite merchant<sup>1</sup> , estimated by Forrester with PayPal enterprise payment solutions<sup>2</sup> </p>
        </div>
        <div className='right-1'>
          <div className='subhead-1'>
            <h1>86%</h1>
            <p>of our enterprise indicate that we had a positive impact on authorization rates since adoption<sup>3</sup> </p>
          </div>
          <div className='subhead-2'>
            <h1>4 bps</h1>
            <p>In the US, Braintree can helpreduce chargeback rate by 4 bps<sup>4</sup> </p>
          </div>
        </div>
    </div>
        </>
    );
}

export default Card;