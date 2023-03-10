import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Contexts/AuthProvider';
import NewReview from './NewReview';

const MyReview = () => {
    const { user } = useContext(AuthContext);


    const { data: myReviews = [user?.email], refetch, isLoading } = useQuery({
        queryKey: ['myReviews', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://food-corner-server-site-remake.vercel.app/reviewer?email=${user?.email}`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    if (isLoading) {
        return (<div className='d-flex justify-content-center mt-5 pt-5 vh-100'>
            <div className="spinner-border text-dark align-items-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>)
    }


    const handleRemove = id => {

        fetch(`https://food-corner-server-site-remake.vercel.app/reviewer/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Delete successfully');
                    refetch()
                }
            })
    }
    return (
        <div className='mt-5'>
            <div>
                {
                    myReviews?.length ? <h1 className='f-corner mb-3 text-center pb-5'>Your Reviews {myReviews.length}</h1>
                        :
                        <>
                            <div className='text-center'>
                                <img src="https://media.tenor.com/ySU7TUgwfZoAAAAM/tolkie-sad.gif" alt="" />
                                <h1 className='f-corner mb-3 text-secondary pb-5 vh-100'>You have not reviewed any food.</h1>
                            </div>
                        </>
                }
                {/* <h1 className='f-corner mb-3 text-center pb-5'>Your Reviews {myReviews.length}</h1> */}
            </div>
            <div className=''>
            {
                myReviews.map(review => <NewReview
                    key={review._id}
                    review={review}
                    refetch={refetch}
                    handleRemove={handleRemove}
                ></NewReview>)
            }
            </div>
        </div>
    );
};

export default MyReview;