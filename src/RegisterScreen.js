import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import React, { useState } from 'react';
import Notification from './Notification';
import "./App.css"
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";

function RegisterScreen(props) {

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setMessage('Register Successful!');
      setTimeout(() => {
        setMessage(null);
        props.onNavigateToLogin();
      }, 3000);
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        setMessage('An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.');
      } else {
        setMessage(error.message);
      }
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };
  
  const facebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      setMessage('Resgister Successful!');
      setTimeout(() => {
        setMessage(null);
        props.onNavigateToLogin();
      }, 3000);
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        setMessage('An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.');
      } else {
        setMessage(error.message);
      }
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };
  
  const appleLogin = async () => {
    try {
      const provider = new OAuthProvider('apple.com');
      await signInWithPopup(auth, provider);
      setMessage('Resgister Successful!');
      setTimeout(() => {
        setMessage(null);
        props.onNavigateToLogin();
      }, 3000);
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        setMessage('An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.');
      } else {
        setMessage(error.message);
      }
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setMessage('Registration successful!');
    setTimeout(() => {
      setMessage(null);
      props.onNavigateToLogin();
    }, 3000);
  })
  .catch((error) => {
    if (error.code === "auth/email-already-in-use") {
      setMessage('The email provided is already in use.');
    } else if (error.code === "auth/invalid-email") {
      setMessage('The email provided is not valid.');
    } else {
      setMessage(error.message);
    }
    
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  });
}

  return (
    <div className="App">
      <Notification message={message} />
      <div className="login-container">

        <h1>Create an account</h1>
        <h3>Register for a new account</h3>

        <form className="login-form" onSubmit={handleRegister}>
            <div className="input-group">
                <input type='text' placeholder='Digite seu nome' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='email' placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Digite seu telefone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type='password' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn-primary" type="submit">Register</button>
            <div className='terms-privacity'>
              <p>By signing up you agree to our <span onClick={props.onNavigateToLogin} style={{color: '#3FC1C9', cursor: 'pointer'}}>Terms & Conditions</span> and <span onClick={props.onNavigateToLogin} style={{color: '#3FC1C9', cursor: 'pointer'}}>Privacy Policy</span></p>
            </div>
        </form>

        <div className="or-option">
          <span className="line"></span>
          <span className="or-text">OR</span>
          <span className="line2"></span>
        </div> 
        <div className='other-option-login'>
            <button className='login-option-google' onClick={googleLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M29.074 13.3887H28V13.3333H16V18.6667H23.5353C22.436 21.7713 19.482 24 16 24C11.582 24 7.99996 20.418 7.99996 16C7.99996 11.582 11.582 7.99999 16 7.99999C18.0393 7.99999 19.8946 8.76932 21.3073 10.026L25.0786 6.25466C22.6973 4.03532 19.512 2.66666 16 2.66666C8.63663 2.66666 2.66663 8.63666 2.66663 16C2.66663 23.3633 8.63663 29.3333 16 29.3333C23.3633 29.3333 29.3333 23.3633 29.3333 16C29.3333 15.106 29.2413 14.2333 29.074 13.3887Z" fill="#FFC107"/>
                <path d="M4.20398 9.79399L8.58465 13.0067C9.76998 10.072 12.6406 7.99999 16 7.99999C18.0393 7.99999 19.8946 8.76932 21.3073 10.026L25.0786 6.25466C22.6973 4.03532 19.512 2.66666 16 2.66666C10.8786 2.66666 6.43731 5.55799 4.20398 9.79399Z" fill="#FF3D00"/>
                <path d="M16 29.3333C19.444 29.3333 22.5733 28.0153 24.9393 25.872L20.8127 22.38C19.429 23.4323 17.7383 24.0014 16 24C12.532 24 9.58734 21.7887 8.478 18.7027L4.13 22.0527C6.33667 26.3707 10.818 29.3333 16 29.3333Z" fill="#4CAF50"/>
                <path d="M29.074 13.3887H28V13.3333H16V18.6667H23.5353C23.0095 20.1443 22.0622 21.4355 20.8107 22.3807L20.8127 22.3793L24.9393 25.8713C24.6473 26.1367 29.3333 22.6667 29.3333 16C29.3333 15.106 29.2413 14.2333 29.074 13.3887Z" fill="#1976D2"/>
              </svg>
            </button>
            <button className='login-option-facebook' onClick={facebookLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clipPath="url(#clip0_33_268)">
                  <path d="M32 16C32 7.1635 24.8365 0 16 0C7.1635 0 0 7.16337 0 16C0 23.986 5.851 30.6054 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8888 6.25 19.5434 6.25C21.294 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1075C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6054 32 23.9861 32 16Z" fill="#1877F2"/>
                  <path d="M22.2281 20.625L22.9375 16H18.5V12.9987C18.5 11.7332 19.1199 10.5 21.1075 10.5H23.125V6.5625C23.125 6.5625 21.294 6.25 19.5434 6.25C15.8888 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C14.327 31.9352 15.1629 32.0002 16 32C16.8371 32.0002 17.673 31.9353 18.5 31.8056V20.625H22.2281Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_33_268">
                    <rect width="32" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className='login-option-apple' onClick={appleLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M12.1253 28.008C11.2869 27.9626 10.498 27.597 9.92134 26.9867C9.23146 26.323 8.61584 25.5862 8.08534 24.7893C7.25664 23.6027 6.60159 22.3038 6.14 20.932C5.61761 19.4562 5.34279 17.9041 5.32667 16.3387C5.28609 14.8026 5.66648 13.2847 6.42667 11.9493C6.98343 10.9868 7.77759 10.183 8.73334 9.61468C9.67852 9.04876 10.7571 8.74415 11.8587 8.73201C12.6891 8.78114 13.5051 8.97095 14.272 9.29334C14.884 9.56268 15.5267 9.75201 16.1867 9.85601C16.9147 9.7035 17.6261 9.48022 18.3107 9.18934C19.1209 8.87299 19.9787 8.69583 20.848 8.66534C20.964 8.66534 21.0787 8.66534 21.1893 8.67868C23.096 8.73334 24.8693 9.66934 25.9893 11.212C25.1152 11.6795 24.3879 12.3803 23.8882 13.2364C23.3885 14.0924 23.1359 15.0703 23.1587 16.0613C23.1499 16.8191 23.3019 17.5701 23.6046 18.2649C23.9073 18.9597 24.3538 19.5824 24.9147 20.092C25.4253 20.5784 26.0198 20.9682 26.6693 21.2427C26.536 21.6427 26.3827 22.0293 26.22 22.4187C25.8507 23.279 25.395 24.0997 24.86 24.868C24.3541 25.6377 23.7653 26.3495 23.104 26.9907C22.5008 27.5892 21.6968 27.9423 20.848 27.9813C20.1285 27.9495 19.4216 27.7807 18.7653 27.484C18.0576 27.1757 17.297 27.0068 16.5253 26.9867C15.7319 27.0023 14.9488 27.1703 14.2187 27.4813C13.5881 27.7659 12.9143 27.943 12.2253 28.0053L12.1253 28.008V28.008ZM16.3253 8.66534C16.2253 8.66534 16.1253 8.66534 16.0253 8.65334C16.0043 8.49463 15.9932 8.33477 15.992 8.17468C16.0356 6.84286 16.5561 5.57099 17.4587 4.59068C17.9635 4.02728 18.5754 3.56996 19.2587 3.24534C19.8954 2.91755 20.5913 2.72035 21.3053 2.66534C21.3253 2.84001 21.3253 3.01068 21.3253 3.17334C21.3066 4.48423 20.814 5.74404 19.9387 6.72001C19.5148 7.28831 18.9717 7.75694 18.3475 8.093C17.7233 8.42907 17.0331 8.62442 16.3253 8.66534V8.66534Z" fill="black"/>
              </svg>
            </button>
        </div>
          <div className='no-have-account'>
              <p>Already have an account? <span onClick={props.onNavigateToLogin} style={{color: '#3FC1C9', cursor: 'pointer'}}>Log in</span></p>
          </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
