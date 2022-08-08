import './App.css'
import { useState } from 'react'
import { Auth } from './types';
import { loginUser } from './lib/calls'
import LoginPage from './pages/Login';
import StockPage from './pages/StockPage';

function App() {
  const [auth, setAuth] = useState<undefined | Auth>();

  async function handleLogin(pin: string) {
    const auth = await loginUser(pin)
    if (auth) {
      console.log("Authentication successful");
      setAuth(auth);
    }
  }

  return (
    <div className="App">
      {auth ? <StockPage user={auth}/> : <LoginPage login={handleLogin} />}
    </div>
  )
}

export default App
