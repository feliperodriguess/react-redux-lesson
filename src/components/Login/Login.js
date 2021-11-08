import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser } from '../../store/user'
// import { toast } from 'react-toastify';

const Login = ({ name }) => {
  const dispatch = useDispatch()
  const handleLogin = async () => {
    dispatch(await updateUser(name)).then(() => {
      toast.success(`Login sucesso`)
    })
  }

  // const handleLogin = async () => {
  //     if (name.length === 0) {
  //         toast.warning("Insira o nome do usuário", {
  //             autoClose: 3000
  //         })
  //     }
  //     else {
  //         const status = await dispatch(await updateUser(name))
  //         if (status === 200) {
  //             toast.success(`${name} logado`, {
  //                 autoClose: 3000
  //             })
  //         }
  //         if (status === 404) {
  //             toast.error("Usuário não encontrado", {
  //                 autoClose: 3000
  //             })
  //         }
  //         if (status === 403) {
  //             toast.error("Limite de tentativas excedido", {
  //                 autoClose: 3000
  //             })
  //         }
  //     }
  // }

  return (
    <>
      <Button onClick={handleLogin} className="mx-1">
        Login
      </Button>
    </>
  )
}

export default Login
