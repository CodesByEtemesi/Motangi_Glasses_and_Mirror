import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>

      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Username' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password'required />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Password?</p>
        {
          currentState === 'Login' ?
          <p className='cursor-pointer' onClick={()=>setCurrentState('Sign Up')}>Create an account</p>
          :
          <p className='cursor-pointer' onClick={()=>setCurrentState('Login')}>Login Here</p> 
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login


// import React, { useState } from 'react'

// const Login = () => {

//   const [currentState, setCurrentState] = useState('Login');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     // TODO: wire up to your auth API
//     // if (currentState === 'Login') { ...call login endpoint with email, password }
//     // else { ...call signup endpoint with name, email, password }
//   }

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
//         <p className='prata-regular text-3xl'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
//       </div>

//       {currentState === 'Login' ? '' : (
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className='w-full px-3 py-2 border border-gray-800'
//           placeholder='Username'
//           autoComplete='username'
//           required
//         />
//       )}
//       <input
//         type="email"
//         name="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className='w-full px-3 py-2 border border-gray-800'
//         placeholder='Email'
//         autoComplete='email'
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className='w-full px-3 py-2 border border-gray-800'
//         placeholder='Password'
//         autoComplete={currentState === 'Login' ? 'current-password' : 'new-password'}
//         required
//       />

//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer'>Forgot Password?</p>
//         {
//           currentState === 'Login' ?
//           <p className='cursor-pointer' onClick={()=>setCurrentState('Sign Up')}>Create an account</p>
//           :
//           <p className='cursor-pointer' onClick={()=>setCurrentState('Login')}>Login Here</p> 
//         }
//       </div>
//       <button type="submit" className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
//     </form>
//   )
// }

// export default Login