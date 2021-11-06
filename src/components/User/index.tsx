import './user.css'
import { useSelector } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const User = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <div className='container'>
      <div className='div-img' >
        <img src={user.avatar_url} className='img-info' alt=''></img>
      </div>
      <div className='text'>
        <h1>Usuário: {user.name}</h1>
        <h3>Location: {user.location}</h3>
        <h3>Followers: {user.followers}</h3>
        <h3>Following: {user.following}</h3>
        <h3>repos: {user.repos}</h3>
        <h3>email: {user.email}</h3>
        <ToastContainer />
      </div>
    </div>
  );
}

export default User;
