import React from 'react'
import CustomInput from '../components/CustomInput'

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{backgroundColor:"#ffd333"}}>
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
            <h3 className='text-center'>Forgot Password</h3>
            <p className='text-center'>Please Enter your register email to get reset password mail</p>
            <form action="">
            <CustomInput
                type="email"
                label="Email Address"
                i_id="email"
            />

            <button type='submit' style={{backgroundColor:"#ffd333"}} className='border-0 mt-3 px-3 py-2 text-white fw-bold w-100'>Send</button>
        </form>
        </div>
    </div>
  )
}

export default Forgotpassword