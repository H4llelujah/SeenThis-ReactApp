import React from 'react'
import Layout from '../components/Layout'
import MyInput from '../components/UI/input/MyInput'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <Layout>
        <div className='login_wrapper'>
          <div className='login'>
            <h2 className='login_header'>Login</h2>
            <form className='login_form'>
              <MyInput placeholder="Your login" type="text"/>
              <MyInput placeholder="Your password" type="password"/>
              <button className='form_button'>Sign in</button>
            </form>
            <div className='login_offer'>
              Do you have not an account? 
              <Link to={'/registration'}>Register</Link>
            </div>
          </div>
        </div>
    </Layout>
  )
}
