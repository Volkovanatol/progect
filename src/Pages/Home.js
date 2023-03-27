import React, {Component} from 'react';
import { Button, CardDeck, CardImg, Container, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CaruoselBox from '../Components/CarouselBox';


class Home extends Component {
    render() {
        return (
            <>
           <CaruoselBox/>
           <Container>
            <h2 className='text-center m-4'> Моя команда </h2>
            <CardDeck className='m-4'>
                <Card bg='info' border='sucsess' text='primary'>
                    <CardImg variant='top' src=''/>
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text></Card.Text>
                        <Button variant='primary'> About Team</Button>

                    </Card.Body>
                </Card>
                <Card>
                    <CardImg variant='top' src=''/>
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text></Card.Text>
                        <Button variant='primary'> About Team</Button>

                    </Card.Body>
                </Card>
                <Card>
                    <CardImg variant='top' src=''/>
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text></Card.Text>
                        <Button variant='primary'> About Team</Button>

                    </Card.Body>
                </Card>
            </CardDeck>
           </Container>
           </>
        );
    }
}

export default Home;