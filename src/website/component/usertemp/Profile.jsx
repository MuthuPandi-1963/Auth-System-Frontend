import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAPI } from '../../../Service/api';
import { logout, fetchUser } from '../../slice/userSlice';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.user.data); // Adjust based on actual reducer structure
 const [isAuth,setIsAuth]=useState(false)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authAPI.user();
        if (!response?.data) {
          setIsAuth(false)
        } else {
          setIsAuth(true)
          dispatch(fetchUser(id))
          console.log('Authenticated User:', response.data);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        navigate('/login', { replace: true });
      }
    };

    checkAuth();
    dispatch(fetchUser(id));
  }, [dispatch, id, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/', { replace: true });
   console.log(  isAuth);
  
  };
  


  return (
    <div className='justify-center self-center items-center m-2 p-2'>
      <h1 className='header'>Profile</h1>
      <p className='para'>User ID: {id}</p>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>

      <button type='button' className='redbtn' onClick={handleLogout}>Logout</button>
      <button type='button' className='graybtn'>Edit</button>
    </div>
  );
};

export default Profile;
