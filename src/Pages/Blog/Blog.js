import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';

const Blog = () => {

    const blogItems = useLoaderData();

    return (
        <div className='container my-5'>
            <div className='grid row gap-2'>
                <div className='col-lg-9 col-12'>
                    <div>
                    <h1>Latest Blogs</h1>
                    </div>
                    <div>
                        {
                            blogItems.map(blogItem => <BlogCard
                                key={blogItem._id}
                                blogItem={blogItem}
                            ></BlogCard>)
                        }
                    </div>
                </div>
                <div className='col-lg-2 col-12'>
                    <div>
                        <h5>BLOG CATEGORIES</h5>
                        <p>Category 1</p>
                    </div>
                    <div>
                        <h5>Recent Articles</h5>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;