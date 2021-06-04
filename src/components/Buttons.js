import {Button} from 'react-bootstrap';

const Buttons = ({getRandomColor, getRandomQuote, quote}) => {
    return (
        <div>
            <Button variant="primary" size="lg" className='w-25 mx-auto mt-5' block onClick={() => getRandomQuote(quote)}>
                Get Random Quote
            </Button>
            <Button variant="secondary" size="lg" className='w-25 mx-auto mt-5 mb-5' block onClick={() => getRandomColor()}>
                Get Random Color
            </Button>
        </div>
    )
}

export default Buttons
