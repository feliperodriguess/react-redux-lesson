import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/user';
import {toast} from 'react-toastify'

const Logout = ({name}) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    toast.warning(`${name} deslogado`, {
      autoClose: 3000
  })
    dispatch(logout())
  }

  return (
      <Button onClick={handleLogout}>Logout</Button>
  );
}

export default Logout;
