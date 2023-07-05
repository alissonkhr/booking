import React from 'react'

function LoginPage() {
  return (
    <div>
      <form>
        <input type='email' placeholder='your@email.com' />
        <input type='password' placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage