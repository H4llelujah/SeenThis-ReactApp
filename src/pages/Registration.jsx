import React from 'react'
import Layout from '../components/Layout'
import MyInput from '../components/UI/input/MyInput'
import { Link } from 'react-router-dom'


export default function Registration() {
  return (
     <Layout>
        <div className='login_wrapper'>
          <div className='login'>
            <h2 className='login_header'>Registration</h2>
            <form className='login_form'>
              <MyInput placeholder="Your login" type="text"/>
              <MyInput placeholder="Your password" type="password"/>
              <MyInput placeholder="Repeat your password" type="password"/>
              <button className='form_button'>Registration</button>
            </form>
            <div className='login_offer'>
              Do you have an account? 
              <Link to={'/login'}>Sign In</Link>
            </div>
          </div>
        </div>
    </Layout>
  )
}
