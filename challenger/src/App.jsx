import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// Desabilite o botão de Login equanto você está executando o login.
// Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [_email_, setEmail] = useState('')
  const [_password_, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isRequesting, setIsRequesting] = useState(false)
  const [sucess, setSucess] = useState(null)

  const handleEmail = (event) => {
    const {value} = event.target;
    setEmail(value)
  }

  const handlePassword = (event) => {
    const {value} = event.target;
    setPassword(value)
  }



  // const acess = async () => {
  //   const next = {
  //     email: _email_,
  //     password: _password_
  //   }

  const handleSubmit =  () => {
    console.log('submitted')

    setError(null)
    setIsRequesting(true)

    let values = {
      email: _email_,
      password: _password_
    }

    login(values)
      .then((sucess) => {
        alert('Login efetuado com sucesso!')
        console.log(sucess)
       })
      .catch((error) => {
        console.log(error)
        setError(error)
      }).finally(() => {
        setIsRequesting(false)
      })
  }

  

  //   console.log(next.email)
  //   console.log(next.password)

  //   setEmail('')
  //   setPassword('')
  // }


  return (
    <div className='wrapper'>
      <div className='login-form' type='form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro.
        */}
        {error && <div className='errorMessage'>{error.message}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input name='emailzada' id={'email'} type={'email'} autoComplete='off' value={_email_} onChange={handleEmail} />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input name='senhazada' id={'password'} type={'password'} value={_password_} onChange={handlePassword}/>
        </div>

        <div className='button'>
          <button onClick={handleSubmit} disabled={_email_ === '' || _password_.length < 6 || isRequesting} >Login</button>
        </div>
      </div>
    </div>
  );
}
