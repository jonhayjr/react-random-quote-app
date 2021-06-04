import {Card} from 'react-bootstrap';

const QuoteCard = ({getRandomQuote, quote, getRandomColor, isLoading}) => {
    return (
    <div>
        <Card className='w-75 mx-auto mt-5'>
            <Card.Body>
                {isLoading ?
                <p className='h2'>Loading....</p>
                :
                (
                <div>
                    <p className='h2'>{quote.content}</p>
                    <p className='h4'>-{quote.author}</p>
                </div>)}
            </Card.Body>
        </Card>
    </div>
    )
}

export default QuoteCard
