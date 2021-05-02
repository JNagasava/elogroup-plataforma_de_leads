import { Link, Redirect } from 'react-router-dom'
import { useHistory, useState } from 'react'
import PropTypes from 'prop-types'
import LeadsPanel from './LeadsPanel'

const NewLead = ({ addLead }) => {

    const checkAll = (e) => {
        var checkAllState = document.getElementsByName('check-all');
        var checkboxes = document.getElementsByName('check');
        for (var checkbox of checkboxes) {
            checkbox.checked = checkAllState[0].checked;
        }
    }

    const [name, setName] = useState('')
    const [status, setStatus] = useState('Cliente em Potencial')

    const onSubmit = (e) => {
        e.preventDefault()
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
                        <input className='register-field' type='text' ></input>
                    </div>
                    <div className="register-info">
                        <label>Email *</label>
                        <input className='register-field' type='text' ></input>
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
