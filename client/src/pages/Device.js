import React from 'react';
import {Container, Col, Image, Row, Card, Button} from "react-bootstrap";
import bigStar from '../assets/bigStar.png';

const Device = () => {

    const device = {
        id: 2,
        name: "iPhone 12 pro",
        price: 1199,
        rating: 5,
        img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/5866581/original/37e349de497d60cd058aa443b7c76bbd.jpg'
    }

    const description = [
        {id: 1, title: 'RAM', description: '6Gb'},
        {id: 2, title: 'Camera', description: '48Mp'},
        {id: 3, title: 'CPU', description: 'A13'},
        {id: 4, title: 'Core', description: '4*3Ggz'},
        {id: 5, title: 'Battery', description: '4000Mah'}
    ]

    return (
        <Container className="mt-3">
            <Row style={{marginBottom: 50}}>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center" style={{
                            background: `url(${bigStar}) no-repeat center center`,
                            width: 240,
                            height: 240,
                            backgroundSize: 'cover',
                            fontSize: 64
                        }}>{device.rating}</div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex align-items-center justify-content-sm-evenly"
                          style={{width: 300, height: 300, fontSize: 32, border: '5px solid silver'}}>
                        <h3>From: {device.price} USD</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <hr/>
            <Row className="d-flex flex-column mt-1">
                <h1>Description</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default Device;
