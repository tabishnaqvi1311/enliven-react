
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import TransitionEffect from "./TransitionEffect";
import { redirect, useLocation } from "react-router-dom";
const Login = () => {

  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => { 
    const response = await fetch("http://localhost:8181/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"     
      },
      body: JSON.stringify({
        email, password
      })
    });

    if(!response.ok){
      console.log(response);
      return;
    }

    const json = await response.json();

    localStorage.setItem("uid", json.userId);
    localStorage.setItem("token", json.token);

    setPassword("");
    setEmail("");

    window.location.reload();
  };



  return (
    <div className='w-full h-[80vh] p-5 lg:p-0'>
      <TransitionEffect />
      <div className='container mx-auto w-full h-full'>
        <div className='flex items-center justify-center w-full h-full'>
          <div className='flex flex-col items-center gap-10'>
            <h3>Login</h3>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
              <div className='flex items-center gap-3 text-2xl border border-primary p-3 rounded-xl cursor-pointer hover:shadow-xl'>
                <FcGoogle size={30} />
                <p>Google</p>
              </div>

              <div className='flex items-center gap-3 text-2xl border border-primary p-3 rounded-xl cursor-pointer hover:shadow-xl'>
                <FaGithub size={30} />
                <p>GitHub</p>
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <p className='text-2xl sm:text-2xl lg:text-3xl'>-OR-</p>
            </div>

            <div className='flex flex-col items-start gap-5'>
              <input
                type='email'
                placeholder='Email Id'
                className='lg:min-w-[533px] p-5 text-xl lg:text-2xl bg-transparent border-b cursor-pointer'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                className='lg:min-w-[533px] p-5 text-xl lg:text-2xl bg-transparent border-b cursor-pointer'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='bg-secondary lg:w-[10rem] p-3 rounded-lg text-xl text-background hover:bg-background hover:text-primary border border-secondary duration-200 font-bold ease-in-out' onClick={onLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
