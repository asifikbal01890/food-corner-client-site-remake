import React from 'react';
import { FaRegClock, FaRegListAlt, FaUserAlt } from 'react-icons/fa';
import { MdInsertComment } from 'react-icons/md';
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BlogCard = ({ blogItem }) => {

    const { _id, header, img, posterName, date, pOne, pTwo, pTree, pFour, pFive, lOne, lTwo, lTree, lFour, lFive } = blogItem;

    return (
        <div className='my-5'>
            <div className="card text-center border-0">
                <div className="card-header bg-transparent py-0">
                    <h4 className='text-start text-orange'>{header}</h4>
                    <div className='d-block d-xl-flex gap-4 mb-0 text-muted'>
                        <div className='d-flex gap-4'>
                        <p className='mb-0'> <FaUserAlt></FaUserAlt> Posted By: {posterName}</p>
                        <p className='mb-0'> <FaRegListAlt></FaRegListAlt> In: Sub Category 1</p>
                        <p className='mb-0 d-none d-md-flex align-items-center'> <FaRegClock className='pe-1 fs-5'></FaRegClock> On: {date}</p>
                        </div>
                        <div className='d-flex gap-4'>
                        <p className='mb-0 d-md-none'> <FaRegClock></FaRegClock> On: {date}</p>
                        <p className='mb-0'> <MdInsertComment></MdInsertComment> Comment: 0</p>
                        <p className='mb-0'> <AiFillHeart></AiFillHeart> Hit: 642</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <img src={img} alt="" className='w-100' />
                    <p className="card-text my-4">{pOne.slice(0, 200)}...<Link className='text-decoration-none' to={_id}>See More</Link></p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;