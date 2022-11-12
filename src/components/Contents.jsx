import React from 'react'
import './contents.css'
import { Card, CardGroup, Container, Col, Button, Row } from 'react-bootstrap'

const Contents = () => {
    return (
        <Container className="contents">
            <div className="gallery">
                <Row>
                    <Col lg={4}>
                        <CardGroup>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src="https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                            </Card>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src="https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                            </Card>
                        </CardGroup>
                        <CardGroup>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src="https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                            </Card>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src="https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col lg={4} className="gallery-details">
                        <p className="gallery-h">Gallery</p>
                        <p className="gallery-txt">Here is the glimpse of our beautiful property. The beautiful experience of indulging in Nature! Experience it yourself with us!</p>
                        <Button className="gallery-btn">View All</Button>
                    </Col>
                    <Col lg={4}>
                        <CardGroup>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src="https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                            </Card>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src="https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                            </Card>
                        </CardGroup>
                        <CardGroup>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src="https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                            </Card>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src="https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </div>

        </Container>
    )
}

export default Contents
