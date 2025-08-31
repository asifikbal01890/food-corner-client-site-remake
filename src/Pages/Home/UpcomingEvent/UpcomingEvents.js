import React from 'react';
import { useQuery } from 'react-query';
import EventCard from './EventCard/EventCard';
import './UpcomingEvents.css';

const UpcomingEvents = () => {

    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://food-corner-server-site-remake.vercel.app/blogs`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    return (
        <div className='bg-event'>
            <div className='py-5 mt-5'>
                <div>
                    <div className='text-center pt-3'>
                        <h1>News & Events</h1>
                        <p>Our Latest Updates & Articles</p>
                    </div>
                    <div className='container row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-xl-3 g-4 mx-auto py-5 '>
                        {
                            blogs.map(blog => <EventCard
                                key={blog._id}
                                blog={blog}
                            ></EventCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;