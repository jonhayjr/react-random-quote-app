import {Card} from 'react-bootstrap';

const QuoteCard = ({getRandomQuote, quote, getRandomColor, isLoading}) => {
    return (
    <div>
        <Card className='text-center p-5'>
            <Card.Body>
                {isLoading ?
                <p className='h2'>Loading....</p>
                :
                (
                <div>
                    <p className='h2'>{quote.quote}</p>
                    <p className='h4'>-{quote.author}</p>
                </div>)}
            </Card.Body>
        </Card>
    </div>
    )
}

export default QuoteCard
