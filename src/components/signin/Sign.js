import React, { useState } from 'react'
import "./sign.css"

function Sign() {

    const passgoster = (e) => {
        e.preventDefault();
        if (value === "password") {
            setValue("text")
            setUyariBir(true)
        }else if(value === "text"){
            setValue("password")
            setUyariBir(false)
        }
    }

    const [value, setValue] = useState("password")
    const [uyariBir, setUyariBir] = useState(false)
    return (
        <div className='signdiv'>
            <div className='signform'>
                <div className='gereksizbilgi'>
                    <div className='gereksizbilgi1'>Login to your Account</div>
                    <div className='gereksizbilgi2'>Get started with our app, just create an <br></br>account and enjoy the experience.</div>
                </div>
                <form className='formdiv'>
                    <div className='mail'>Email</div>
                    <div className='mailformdiv'>
                    <i class="fa-solid fa-envelope"></i>
                        <input type='email' placeholder='example@gmail.com' autoComplete='off' maxLength={60} className='mailform'></input>
                    </div>
                    <div className='password'>Password</div>
                    <div className='passwordformdiv'>
                        <i class="fa-solid fa-unlock"></i>
                        <input autoComplete='off' placeholder='Password' id='password' name='password' maxLength={16} type={value} className='passwordform'></input>
                        <button onClick={passgoster} className='eyebutton'>{uyariBir ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}</button>
                    </div>
                    <button  className='subbutton'>Login</button>
                    <button  className='signbutton'>Sign Up</button>
                </form>
                <div className='socialbtn'>
                    <div className='orbtn'>OR</div>
                    <div className='googleapple'>
                        <a href='/ggg' className='googlebtn'><i class="fa-brands fa-google"></i></a>
                        <a href='/aaa' className='applebtn'><i class="fa-brands fa-apple"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sign