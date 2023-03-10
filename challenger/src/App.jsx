import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [_email_, setEmail] = useState('')
  const [_password_, setPassword] = useState('')

  const handleEmail = (event) => {
    const value = event.target.value;
    console.log(value)
  }



  // const acess = async () => {
  //   const next = {
  //     email: _email_,
  //     password: _password_
  //   }

  //   login(next.email, next.password)

  //   console.log(next.email)
  //   console.log(next.password)

  //   setEmail('pato')
  //   setPassword('')
  // }


  return (
    <div className='wrapper'>
      <div className='login-form' type='form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className='errorMessage'></div>
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input name='emailzada' id={'email'} type={'email'} autoComplete='off' value={_email_ || ''} onChange={handleEmail} />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input name='senhazada' id={'password'} type={'password'} value={_password_ || ''} onChange={e => setPassword(e.target.value)}/>
        </div>

        <div className='button'>
          {/* <button onClick={acess ? _password_.length >= 6 && _email_.length >= 1 : }>Login</button> */}
        </div>
      </div>
    </div>
  );
}
