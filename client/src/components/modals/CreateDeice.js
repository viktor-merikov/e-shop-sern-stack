import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";

const CreateDeice = observer(({show, onHide}) => {

    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    };

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price.toString());
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createDevice(formData).then(data => onHide());
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{device.selectedType.name || 'Select type ...'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item onClick={() => device.setSelectedType(type)}
                                               key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || 'Select brand ...'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)}
                                               key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control className="mt-3"
                                  value={name}
                                  onChange={e => setName(e.target.value)}
                                  placeholder="Enter name of device"/>
                    <Form.Control className="mt-3"
                                  value={price}
                                  onChange={e => setPrice(Number(e.target.value))}
                                  placeholder="Enter price of device"
                                  type="number"/>
                    <Form.Control className="mt-3"
                                  placeholder="Select image of device"
                                  onChange={selectFile}
                                  type="file"/>
                    <hr/>
                    <Button variant={"outline-dark"} onClick={addInfo}>Add device property</Button>
                    {
                        info.map(i =>
                            <Row className="mt-3" key={i.number}>
                                <Col md={4}>
                                    <Form.Control placeholder="Enter name of property"
                                                  onChange={e => changeInfo('title', e.target.value, i.number)}
                                                  value={i.title}/>
                                </Col>
                                <Col md={4}>
                                    <Form.Control placeholder="Enter description of property"
                                                  onChange={e => changeInfo('description', e.target.value, i.number)}
                                                  value={i.description}/>
                                </Col>
                                <Col md={4}>
                                    <Button variant={"outline-danger"}
                                            onClick={() => removeInfo(i.number)}>
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDeice;
