import {useState, useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import Header from './components/Header';
import QuoteCard from './components/QuoteCard';
import Buttons from './components/Buttons';

const App = () => {
  //Declare State Hooks
  const [quote, setQuote] = useState([]);
  const [randomColor, setRandomColor] = useState('white');
  const [isLoading, setLoading] = useState(true);

  //Function to get random quote from quote API
  const getRandomQuote = () => {
    //Set loading state back to tru
    setLoading(true)
    axios.get('https://api.quotable.io/quotes')
      .then(res => {
        const quotes = res.data.results;
        const randomNumber = getRandomNumber(quotes.length);
        const randomQuote = quotes[randomNumber];
        setQuote(randomQuote);
        setLoading(false);
      })
  }

  //Function to get random number
  const getRandomNumber = (max) => {
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
  }

  //Function to get random rgb color value
  const getRandomColor = () => {
    const randomNumber1 = getRandomNumber(256);
    const randomNumber2 = getRandomNumber(256);
    const randomNumber3 = getRandomNumber(256);
    const randomColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    setRandomColor(randomColor);
  }

  //Use Effect hooks to load random quote and random color on page load
  useEffect(getRandomQuote, []);

  useEffect(getRandomColor, []);

  //Declare background color style based on random color value
  const containerStyle = {
    backgroundColor: randomColor
  }

  return (
    <Container fluid className='text-center m-5'  style={containerStyle}>
      <Row>
        <Col>
          <Header className='mt-5' title='Random Quote App'/>
          <QuoteCard quote={quote} getRandomQuote={getRandomQuote} getRandomColor={getRandomColor} isLoading={isLoading}/>
          <Buttons quote={quote} getRandomQuote={getRandomQuote} getRandomColor={getRandomColor}  />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
