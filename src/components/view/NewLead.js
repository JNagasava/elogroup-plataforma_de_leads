import { useState } from 'react'
import PropTypes from 'prop-types'

const NewLead = ({ addLead, checkNewLead }) => {

    const checkAll = (e) => {
        var checkAllState = document.getElementsByName('check-all');
        var checkboxes = document.getElementsByName('check');
        for (var checkbox of checkboxes) {
            checkbox.checked = checkAllState[0].checked;
        }
    }

    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('Cliente em Potencial')

    const onSubmit = (e) => {
        e.preventDefault()
        if (checkNewLead(name, telephone, email, document.getElementsByName('check'))) {
            setName('')
            setTelephone('')
            setEmail('')
            var checkAllState = document.getElementsByName('check-all');
            checkAllState[0].checked = false
            var checkboxes = document.getElementsByName('check');
            for (var checkbox of checkboxes) {
                checkbox.checked = false;
            }
        }
    }

    return (
        <div className="container-panel">
            <div className="leadspanel-top">
                <div className="elogroup-logo">
                    <span className="elogroup-logo-elo">ELO</span><span className="elogroup-logo-group">GROUP</span>
                </div>
                <span className="leadspanel-top-title">Novo Lead</span>
            </div>
            <form className='newlead-form' onSubmit={onSubmit} >
                <div className="newlead-info">
                    <div className="register-info">
                        <label>Nome *</label>
                        <input className='register-field' type='text' value={name} onChange={ (e) => setName(e.target.value) } ></input>
                    </div>
                    <div className="register-info">
                        <label>Telefone *</label>
                        <input type="number" className='register-field' value={telephone} onChange={ (e) => setTelephone(e.target.value) } ></input>
                    </div>
                    <div className="register-info">
                        <label>Email *</label>
                        <input className='register-field' type='text' value={email} onChange={ (e) => setEmail(e.target.value) } ></input>
                    </div>
                </div>

                <div>
                    <div className="newlead-oportunities">
                        <label>Oportunidades *</label>
                        <table className="newlead-table">
                            <thead>
                                <tr>
                                    <th><input type='checkbox' name='check-all' onChange={checkAll} ></input></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tr>
                                <th><input type='checkbox' name='check'></input></th>
                                <th>RPA</th>
                            </tr>
                            <tr>
                                <th><input type='checkbox' name='check'></input></th>
                                <th>Produto Digital</th>
                            </tr>
                            <tr>
                                <th><input type='checkbox' name='check'></input></th>
                                <th>Analytics</th>
                            </tr>
                            <tr>
                                <th><input type='checkbox' name='check'></input></th>
                                <th>BPM</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </table>
                    </div>
                    <input className='btn-save-lead' type='submit' value='Salvar' />
                </div>
                

            </form>
        </div>
    )
}

NewLead.propTypes = {
    addLead: PropTypes.func
}

export default NewLead
