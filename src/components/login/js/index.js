import React from 'react';
import '../css/style.scoped.css'
import {SaveEvent } from '../../amplitude/'
import PopUp from "../../popup/";



function LoginForm(props) {

  var state = false;

  function handleShow() {
      console.log("AA")
      state = true;
  }

  return (
        <div class="right-inner">
            <center>
                <p>¿No tiene cuenta? <a onclick="SaveEvent('SolicitarAcceso')" href="mailto:dani@trak.es?cc=carlos@trak.es &subject=Solicitar prueba&body=Hola Trak! Me gustaria solicitar una prueba para la app. Estoy adscrito a la clinica de fisioterápia XXXX. Saludos">Solicite acceso</a> mediante tu fisioterapéuta o médico rehabilitador</p>
                <div class="inputs">
                    <input class="input-login" type="text" placeholder="Email" name="dni" required></input>
                    <br></br>
                    <input class="input-login" type="password" placeholder="Contraseña" name="password" required></input>
                </div>
            </center>
            <center>
                <div class="terminos-container">
                    <input type="checkbox" class="conditions" name="conditions" onClick="SaveEvent('ConditionesChecked')"></input>
                    <p class="terminos-parag">Aceptar&nbsp;<a class="trigger_popup_fricc" onClick={SaveEvent('MirarTermsConditions'), handleShow() }> términos y condiciones</a></p>
                </div>
            </center>

            <center><a onclick="SaveEvent('OlvidarPassword')" href="mailto:dani@trak.es?cc=carlos@trak.es &subject=Password olvidado&body=Hola Trak! Soy el usuario: {tu_dni} y he olvidado el password. Saludos!"><p class="forget">¿Olvidaste tu contraseña?</p></a></center>
            <br></br>

            <center>
                <button   class="acceder" type="submit" onclick="SaveEvent('Login')">Acceder</button>
            </center>
        {state ? <PopUp /> : null }
        </div>
            );
}

function showPopUp() {

}

export default LoginForm;
