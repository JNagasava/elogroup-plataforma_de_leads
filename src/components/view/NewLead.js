const NewLead = () => {

    const checkAll = (e) => {
        var checkAllState = document.getElementsByName('check-all');
        var checkboxes = document.getElementsByName('check');
        for (var checkbox of checkboxes) {
            checkbox.checked = checkAllState[0].checked;
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
            <form className='newlead-form'>

                <div className="newlead-info">
                    <div className="register-info">
                        <label>Nome *</label>
                        <input className='register-field' type='text' ></input>
                    </div>
                    <div className="register-info">
                        <label>Telefone *</label>
                        <input className='register-field' type='password' ></input>
                    </div>
                    <div className="register-info">
                        <label>Email *</label>
                        <input className='register-field' type='password' ></input>
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

export default NewLead
