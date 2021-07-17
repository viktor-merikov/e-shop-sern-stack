import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <div className="d-flex">
            {device.brands.map(brand =>
                <Card key={brand.id}
                      style={{cursor: 'pointer'}}
                      border={brand.id === device.selectedBrand.id ? 'info' : 'secondary'}
                      onClick={() => device.setSelectedBrand(brand)}
                      className="p-3 ms-1">
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;
