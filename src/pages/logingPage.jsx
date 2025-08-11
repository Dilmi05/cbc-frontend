import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import profilePic from '../assets/logo.jpg'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function LoginPageNew(){
         axios.post("http://localhost:5000/api/users/login",{
            email: email,
            password: password
         }).then((res)=>{

            console.log(res);

            
             if(res.data.user==null){
                toast.error(res.data);
                return
            }
              toast.success("Login successful");

            localStorage.setItem("token", res.data.token);
            if(res.data.user.type == "admin"){
                window.location.href = "/admin";
            }else{
                window.location.href = "/";
            }
         })

    }
    return(
        <div className='flex justify-center items-center w-full h-screen bg-red-900'>
            <div className='w-[300px] h-[300px] bg-yellow-300 flex flex-col justify-center items-center'>
            <img src={profilePic} className='rounded-full w-[100px] '></img>
            <span>Email:</span>

            <input defaultValue={email} onChange={(e)=>{
                console.log("email changed", e.target.value);
                setEmail(e.target.value);
            }}></input>
            <span>Password:</span>
            <input type='password' defaultValue={password} onChange={(e)=>{
                console.log("password changed", e.target.value);
                setPassword(e.target.value);
            }}></input>
            <button onClick={LoginPageNew}className='bg-blue-500 w-[100px] h-[30px] rounded-md'>Login</button>
            </div>

        </div>
    )
}