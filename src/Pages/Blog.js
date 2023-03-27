import React, {Component} from 'react';
import { Container, Col, Row, Media, ListGroup, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CaruoselBox from '../Components/CarouselBox';

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='9'>
                        <Media className='m-5'> <img width={200} height={200} className='mr-3' src='https://luxe-host.ru/wp-content/uploads/4/c/d/4cd52886caf2d413e243ec4e6d19287d.png'/>
                        <Media.Body>
                            <h5>HTML/CSS</h5>
                            <p>HTML - стандартизированный язык программирования документов. Большинство страниц содержат описание разметки на языке HTML. Иными словами, HTML определяет структуру содержимого страницы. Например, именно в HTML задаются заголовки и абзацы, изображения и т.д.
CSS - язык таблиц стилей, который позволяет прикреплять стиль (например, шрифты и цвет) к структурированным документам (например, к вышеупомянутым документам HTML).</p>
                        </Media.Body>
                        </Media>
                        <Media className='m-5'> <img width={200} height={200} className='mr-3' src='https://elitekurs.com/wp-content/uploads/2021/11/udemy-sovremennyj-javascript-s-nulya-na-realnyh-proektah-denis-meshheryakov_618671bcd6f9e.png'/>
                        <Media.Body>
                            <h5>JavaSctipt</h5>
                            <p>JavaScript — это язык программирования, который используют для написания frontend - и backend-частей сайтов, а также мобильных приложений. Часто в текстах и обучающих материалах название языка сокращают до JS. Это язык программирования высокого уровня, то есть код на нем понятный и хорошо читается. JS поддерживают все популярные браузеры.</p>
                        </Media.Body>
                        </Media>
                        <Media className='m-5'> <img width={200} height={200} className='mr-3' src='https://ordinarycoders.com/_next/image?url=https%3A%2F%2Fd2gdtie5ivbdow.cloudfront.net%2Fmedia%2Fimages%2Farticle_images%2FJaysha%2Freact-best-practices-cover.png&w=3840&q=75'/>
                        <Media.Body>
                            <h5>React</h5>
                            <p>React — это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов. В отличие от других библиотек JavaScript, предоставляющих полноценную платформу приложений, React ориентируется исключительно на создание представлений приложений через инкапсулированные единицы (называются компонентами), которые сохраняют состояние и генерируют элементы пользовательского интерфейса.</p>
                        </Media.Body>
                        </Media>
                        <Media className='m-5'> <img width={200} height={200} className='mr-3' src='https://officehost.ru/uploads/blog/202103/img_603e9907a9bc02-22102384-54709817.jpg'/>
                        <Media.Body>
                            <h5>Bootstrap</h5>
                            <p>Bootstrap-это бесплатный CSS-фреймворк с открытым исходным кодом, предназначенный для адаптивной, ориентированной на мобильные устройства фронтальной веб-разработки. Он содержит HTML, CSS и (опционально) JavaScript-шаблоны дизайна для типографии, форм, кнопок, навигации и других компонентов интерфейса.</p>
                        </Media.Body>
                        </Media>
                        <Media className='m-5'> <img width={200} height={200} className='mr-3' src='https://webupblog.ru/wp-content/uploads/2016/08/1_dir5u4msqeany0ojwgxwhw.png'/>
                        <Media.Body>
                            <h5>GitHub</h5>
                            <p>GitHub — веб-сервис, который основан на системе Git. Это такая социальная сеть для разработчиков, которая помогает удобно вести коллективную разработку IT-проектов. Здесь можно публиковать и редактировать свой код, комментировать чужие наработки, следить за новостями других пользователей.</p>
                        </Media.Body>
                        </Media>
                    </Col>
                    <Col md='3'>
                        <h5 className='text-center mt-5'>Категории</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>Bootstrap</ListGroup.Item>
                                <ListGroup.Item>GitHub</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className='mt-3' bg='light'>
                        <Card.Body>
                            <Card.Title>О важном</Card.Title>
                            <Card.Text>  Эта статья — своего рода шпаргалка по экосистеме фронтенд-разработчика на JS, которая поможет начинающему программисту почувствовать себя более комфортно в процессе погружения в свой первый самостоятельный проект.</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;