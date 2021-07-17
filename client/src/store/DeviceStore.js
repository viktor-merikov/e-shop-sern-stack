import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Freezers'},
            {id: 2, name: 'Smartphones'},
            {id: 3, name: 'Televisions'},
            {id: 4, name: 'Washers'}
        ];
        this._brands = [
            {id: 1, name: 'LG'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Apple'}
        ];
        this._devices = [
            {
                id: 1,
                name: "iPhone 12 pro",
                price: 1199,
                rating: 5,
                img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/5866581/original/37e349de497d60cd058aa443b7c76bbd.jpg'
            },
            {
                id: 2,
                name: "iPhone 12 pro",
                price: 1199,
                rating: 5,
                img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/5866581/original/37e349de497d60cd058aa443b7c76bbd.jpg'
            },
            {
                id: 3,
                name: "iPhone 12 pro",
                price: 1199,
                rating: 5,
                img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/5866581/original/37e349de497d60cd058aa443b7c76bbd.jpg'
            },
            {
                id: 4,
                name: "iPhone 12 pro",
                price: 1199,
                rating: 5,
                img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/5866581/original/37e349de497d60cd058aa443b7c76bbd.jpg'
            },
            {
                id: 5,
                name: "iPhone 12 pro",
                price: 1199,
                rating: 5,
                img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/5866581/original/37e349de497d60cd058aa443b7c76bbd.jpg'
            }
        ]

        this._selectedType = {};
        this._selectedBrand = {};

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get devices() {
        return this._devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

}
