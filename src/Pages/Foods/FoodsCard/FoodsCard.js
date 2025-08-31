import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { BsThreeDots } from "react-icons/bs";
import { TbDetails } from "react-icons/tb";
import { Link } from 'react-router-dom';
import './FoodsCard.css';

const FoodsCard = ({ foodItem }) => {
    const { _id, name, img, price, description } = foodItem;
    return (
        <div  className="col">
            {/* data-aos="zoom-in-down" */}
            <div className='card-div'>
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className='button-div d-flex justify-content-end align-items-end'>
                    <div className='button-group d-flex justify-content-end align-items-end gap-4'>
                        <div><Link to={'/'}><button className='icon-button d-flex justify-content-center align-items-center border-0'><BiHeart></BiHeart></button></Link></div>
                        <div><Link to={'/'}><button className='icon-button d-flex justify-content-center align-items-center border-0'><BsThreeDots></BsThreeDots></button></Link></div>
                        <div><Link to={`/foods/${_id}`}><button className='icon-button d-flex justify-content-center align-items-center border-0'><TbDetails></TbDetails></button></Link></div>
                    </div>
                </div>
            </div>
            <div className="card-body d-flex justify-content-between my-2">
                <h5 className="card-title fw-bolder text-orange fs-4">{name}</h5>
                <p className='fw-semibold fs-5'><span className='pe-2'></span>${price}</p>
            </div>
            <div></div>
        </div>
    );
};

export default FoodsCard;