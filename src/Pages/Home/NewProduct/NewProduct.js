import React from 'react';
import { Link } from 'react-router-dom';
import productImg from '../../../img/newProduct.png';

const NewProduct = () => {
    return (
        <div className=' bg-section'>
            <div className="card mb-3 py-5 border-0 container bg-transparent">
                <div className="row g-0 align-items-center">
                    <div className="col-md-6">
                        <div className="card-body">
                            <p className="card-title fs-5 text-center text-orange">— All Collection —</p>
                            <h5 className="card-title text-center f-corner fs-2 text-orange">New Product</h5>
                            <p className="card-text">Milatino is a London based jewellery brand. Each piece in our collection has been meticulously designed in our studio near London Bridge and embodies our principals of simplicity, detail and understated masculinity. Our collection of Pendants, Cuffs and Rings have been designed to be worn individually or layered and stacked together.</p>
                            <Link to={'/foods'}><button className='btn-orange text-white px-4 py-2 rounded-3 fw-semibold fs-5'>More Info...</button></Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={productImg} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;