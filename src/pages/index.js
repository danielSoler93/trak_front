import * as React from "react";
import Welcome from "../components/welcome_panel/js/";
import TwoScreen from "../components/two_screen/js/";
import logo from '../images/logo.png';
import styles from './index.module.css';

//Unique content of the page!!
function Content(props) {
    return (
    <div class={styles.rightInner}>
		<div class="logo">
			<div class="logo-div">
				<img class={styles.logoImage} src={logo} alt="logo"></img>
				<h1 class={styles.logoTitle}>TRAK</h1>
			</div>
			<p class={styles.iniciar_sesion_info}>Accede a la plataforma de rehabilitación Trak. Si eres fisioterapeuta
			o médico accede como administrador, si eres la persona que va a realizar
			los ejercicios accede como paciente</p>
		</div>

		<div class={styles.iniciar_sesion}>
		    <h2 class={styles.iniciar_sesionTitle}>Iniciar sesion</h2>
            <div class={styles.buttons}>
                <a class={styles.links} href="">Paciente</a>
                <a class={styles.links} href="">Administrador</a>
            </div>
		</div>
		<div class="remember-me--forget-password"></div>
		<p class={styles.solicitar}>¿Todavia no tienes cuenta? Solicita tu versión de prueba <a href="mailto:dani@trak.es?cc=carlos@trak.es &subject=Password olvidado&body=Hola Trak! Soy el usuario: {tu_dni y he olvidado el password. Saludos!">aquí</a></p>
	<div class={styles.footer}>
        <a class={styles.footerElement}>¿Que es TRAK?</a>
        <a class={styles.footerElement}>Términos y condiciones</a>
        <a class={styles.footerElement}>&copy; Trak Health Solutions</a>
   </div>
	</div>
	)
}


// markup
const MainPage = () => {
  return (
    <main>
      <html>
      <title>Home Page</title>
      <body>
      <Welcome image={logo} text1="Bienvenido a Trak" text2="EL SITIO PARA TU REHABILITACIÓN VIRTUAL"></Welcome>
      <TwoScreen content_right={<Content/>}></TwoScreen>
      </body>
      </html>
    </main>
  )
}

export default MainPage
