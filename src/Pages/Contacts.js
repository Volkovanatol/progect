import React, {Component} from 'react';
import { Container, Button, Form } from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <div>
                <Container style={{width: '500px'}}>
                    <h1 className='text-center'>Свяжитесь с нами</h1>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label> Адрес почты</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'/>
                            <Form.Text>Мы никогда не передадим ваши данные</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Введите текст</Form.Label>
                            <Form.Control as='textarea' rows='3'/>
                        </Form.Group>

                        <Form.Group controlId='formBasicCheckBox'>
                            <Form.Check type='checkbox' label='Проверь меня'/>
                         </Form.Group>
                         <Button variant='primary' type='submit'>Отправить</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Contacts;