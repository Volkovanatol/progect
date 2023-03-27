import React, {Component} from 'react';
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap';


class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>Programming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='first'>
                                <img width={500} height={500} scr='https://miro.medium.com/max/1400/1*1d0yAXtSHM1WsQnBiYv2dA.jpeg'/>
                                <p> Решаем любые задачи быстро, четко и эффективно. Я лучший. Остальные мне в подметки не годятся. Я успешен, и постоянно совершенствую свои навыки. За моими плечами огромный опыт и масса кейсов. Я крутой специалист. Если вы еще не со мной, то вы просто не можете себе меня позволить!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                <img width={500} height={500} className='mr-3' scr='https://avatars.mds.yandex.net/i?id=5be2921991703497178cba35b257b09e7844863d-5242719-images-thumbs&n=13s://miro.medium.com/max/1400/1*1d0yAXtSHM1WsQnBiYv2dA.jpeg'/>
                                <p>Elham was exceptional in every way. Her project management is a 10 out of 10. Her communication is the same. She managed a highly complex project and made it look easy and it was not. She always had a positive attitude and kept her cool even during highly stressful periods in the project. Her team loved her. The project was on-time, on-budget and very profitable!"</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                <img width={500} height={500} className='mr-3' scr='https://cdn.dribbble.com/users/2403087/screenshots/9023603/media/7c1d81abbf83a285639272538ad6ce7f.png'/>
                                <p>Lorem................................................................................................................</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                <img width={500} height={500} className='mr-3' scr='https://assets.materialup.com/uploads/46497ed6-b9ba-4225-8f73-7d3826fcc4df/preview.jpg'/>
                                <p>Lorem................................................................................................................</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                <img width={500} height={500} className='mr-3' scr='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/66238d3a-aeed-4e64-8983-80aef42f4cd3/state-of-design-tools-2016.png'/>
                                <p>Lorem................................................................................................................</p>
                                </Tab.Pane>
                                
                            </Tab.Content>
                        </Col>
                    </Row>
                
                </Tab.Container>
            </Container>
        )
    }
}

export default About;