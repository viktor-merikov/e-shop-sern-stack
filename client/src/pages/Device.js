import React, {useEffect, useState} from 'react';
import {Container, Col, Image, Row, Card, Button} from "react-bootstrap";
import bigStar from '../assets/bigStar.png';
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceApi";

const Device = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data));
    }, []);

    return (
        <Container className="mt-3">
            <Row style={{marginBottom: 50}}>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL  + '/' +  device.img}/>
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
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default Device;
