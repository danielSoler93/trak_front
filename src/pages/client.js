import * as React from "react"
import TwoScreen from "../components/two_screen/js/"
import LoginForm from "../components/login/js/"
import logo from '../images/logo.png'
import { initAmplitude, SaveEvent } from '../components/amplitude/'
import PopUpRun from '../components/popup/'

function Content(props) {
    return (
    <form action="" method="post" name="form" onsubmit="return checkForm(this);">
            <center>
                <div class="logo">
                    <img src={logo} alt="logo"></img>
                    <div class="logo-title">TRAK</div>
                </div>
                <h2>{props.title}</h2>
            </center>
                <LoginForm></LoginForm>

    </form>
	)
}


// markup
const PacientLogin = () => {

  return (
    <main>
      <title>Login Paciente</title>
      <TwoScreen content_right={<Content title="Accede al panel de paciente"/>}></TwoScreen>
    </main>
  )
}

export default PacientLogin
