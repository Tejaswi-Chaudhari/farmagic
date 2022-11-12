import React from 'react'
import './contents.css'
import gallery1 from "../Media/gallery1.png"
import gallery2 from "../Media/gallery2.png"
import gallery3 from "../Media/gallery3.png"
import gallery4 from "../Media/gallery4.png"
import gallery5 from "../Media/gallery5.png"
import gallery6 from "../Media/gallery6.png"
import gallery7 from "../Media/gallery7.png"
import gallery8 from "../Media/gallery8.png"

import { Card, CardGroup, Container, Col, Button, Row } from 'react-bootstrap'

const Contents = () => {
    return (
        <Container className="contents">
            <div className="gallery">
                <Row>
                    <Col lg={4}>
                        <CardGroup>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src={gallery1} />
                            </Card>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src={gallery2} />
                            </Card>
                        </CardGroup>
                        <CardGroup>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src={gallery3} />
                            </Card>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src={gallery4} />
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
                                <Card.Img className="gallery-card-img" variant="top" src={gallery5} />
                            </Card>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src={gallery7} />
                            </Card>
                        </CardGroup>
                        <CardGroup>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src={gallery8} />
                            </Card>
                            <Card className="gallery-card">
                                <Card.Img className="gallery-card-img" variant="top" src={gallery6} />
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </div>

        </Container>
    )
}

export default Contents
