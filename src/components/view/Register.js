import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Register = ({ passwordValidation }) => {
    
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        passwordValidation(password, passwordConfirmation)
        setUser('')
        setPassword('')
        setPasswordConfirmation('')
    }
    
    return (
        <div className="container-register">
            <div className="elogroup-logo">
                <span className="elogroup-logo-elo">ELO</span><span className="elogroup-logo-group">GROUP</span>
            </div>
            <form className='register-form' onSubmit={handleSubmit}>
                <div className="register-info">
                    <label>Usuário *</label>
                    <input className='register-field' type='text' value={user} onChange={(e) => setUser(e.target.value)} ></input>
                </div>
                <div className="register-info">
                    <label>Password *</label>
                    <input className='register-field' type='password' value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                </div>
                <div className="register-info">
                    <label>Confirmação Password *</label>
                    <input className='register-field' type='password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} ></input>
                </div>
                <Link to="/leadspanel">
                    <input className='btn-register' type='submit' value='Registrar' />
                </Link>
            </form>
        </div>
    )
}

Register.propTypes = {
    passwordValidation: PropTypes.func,
}

export default Register