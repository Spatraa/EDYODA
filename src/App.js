import React,{useState} from 'react';
import './App.css'; 
import IMG from './rojor.png'

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const[price,setPrice]=useState(18500);
  const[discountedPrice,setDiscountedPrice]=useState(149);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if(event.target.value==='a'){
      setPrice(18500);
      setDiscountedPrice(149);
    }else if(event.target.value==='b'){
      setPrice(18500);
      setDiscountedPrice(179);
    }else if(event.target.value==='c'){
      setPrice(18500);
      setDiscountedPrice(149);
    }
    else if(event.target.value==='d'){
      setPrice(18500);
      setDiscountedPrice(99);
    }
  };
  return (
    <>
    <div className="nav">
      <div className="container">
        <div className="left">
          <div className="logo">
            <span className="text1">EDYODA</span>
          </div>
          <div className="course">
            <span className="crs">Courses</span>
            <select></select>
          </div>
          <div className="program">
            <span>Programs</span>
            <select className="icon1"></select>
          </div>
        </div>
        <div className="right">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="login">Login</div>
          <button>Join Now</button>
        </div>
      </div>
    </div>
    <div className='main'>
    <div id='left'>
      <div className='box'>
        <div>
      <div className='a'>Access curated courses worth</div>
      <span className='a'><span>&#8377;</span><span className="line">18500</span><span> at just <span className='font'> &#8377;99</span> per year!</span></span>
        <div className='b'><i className="fas fa-book-open"></i><span><span className="z">100+</span> job relavent course</span></div>
        <div className='b'><i class="fas fa-clock"></i><span><span className="z">20,000+</span> Hours of content</span></div>
        <div class="b"><i class="fas fa-tv"></i><span><span className='z'> Exculsive</span> webinar access</span></div>
        <div className='b'><i class="fas fa-graduation-cap"></i>Scholarship worth <span className='z'>&#8377;94,500</span></div>
        <div className='b'><i class="fas fa-tag free-icon"></i><span><span className='z'> Ad Free</span> learning experience</span></div>
        </div>
      <div className='box'>
        <form>
          <div className='button-main'>
          <div className='btn'>
            <div className='c'>
          <button className='btn1'>1</button>
          <div>Sign Up</div>
          </div>
          <div className='c'>
          <button className='btn1'>2</button>
          <div>Subscribe</div>
          </div>
          </div>
          <div className='d'>Select your subscription plan</div>
          <div className="check">
            <div className='box1'>
          <div className='n'>
        <input
          type="radio"
          name="option"
          value="a"
          checked={selectedOption === 'a'}
          onChange={handleOptionChange}
        />
        <span className="spn">12 Months subscription</span>
        <span className="price">Total &#8377;99</span>
        <div className='s'>&#8377;8 /mo</div>
      </div>
      </div>
      <div className='box1'>
      <div className='n'>
        <input
          type="radio"
          name="option"
          value="b"
          checked={selectedOption === 'b'}
          onChange={handleOptionChange}
        />
        <span className="spn">12 Months subscription</span>
        <span className="price">Total &#8377;179</span>
        <div className='s'>&#8377;15 /mo</div>
      </div>
      </div>
      <div className='box1'>
      <div className='n'>
        <input
          type="radio"
          name="option"
          value="c"
          checked={selectedOption === 'c'}
          onChange={handleOptionChange}
        />
       <span className="spn">6 Months subscription</span>
      <span className="price">Total &#8377;149</span>
      <div className='s'>&#8377;25 /mo</div>
      </div>
      </div>
      <div className='box1'>
      <div className='n'>
        <input
          type="radio"
          name="option"
          value="d"
          checked={selectedOption === 'd'}
          onChange={handleOptionChange}
        />
        <span className="spn">3 Months subscription</span>
        <span className="price">Total &#8377;99</span>
        <div className='s'>&#8377;33 /mo</div>
      </div>
      <hr/>
      <div className='footer'>
        <div className='foot'>
          <div className='div1'>Subscription Fee </div>
          <div className='div2'>&#8377;{price}</div>
        </div>
        <div className='foot'>
        <div className='div1'>Limited time offer </div>
        <div className='div2'>-&#8377;{price-discountedPrice}</div>
        </div>
        <div className='foot'>
        <div className='div1'>Total (incl of 18% GST) </div>
        <div className='div2'>&#8377;{discountedPrice}</div>
        </div>
        <div className='last'>
          <button className='x'>Cancel</button>
          <button className='y'>Proceed to Pay</button>
        </div>
        <div className='rozerpay'>
          <img src={IMG} alt=''/>
        </div>
      </div>
      </div>
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
