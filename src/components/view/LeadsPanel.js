import React from 'react'
import { Link } from 'react-router-dom'

const LeadsPanel = ({ leads, getLead }) => {

    const changeStatus = (e) => {

        const lead = getLead(leads, e.target.id)

        if (!lead) {
            return
        }

        if (lead.status === 'Cliente em Potencial') {
            console.log('Cliente em Potencial')
            lead.status = 'Dados Confirmados'
        } else if (lead.status === 'Dados Confirmados') {
            console.log('Dados Confirmados')
            lead.status = 'Reunião Agendada'
        }

        console.log(lead.status)
    }

    return (
        <div className="container-panel">
            <div className="leadspanel-top">
                <div className="elogroup-logo">
                    <span className="elogroup-logo-elo">ELO</span><span className="elogroup-logo-group">GROUP</span>
                </div>
                <span className="leadspanel-top-title">Painel de Leads</span>
            </div>
            <Link to="/newlead">
                <button className="btn-leadspanel">Novo Lead (+)</button>
            </Link>
            <table className="leadspanel-table" onChange={changeStatus}>
                <thead>
                    <tr>
                        <th>Cliente em Potencial</th>
                        <th>Dados Confirmados</th>
                        <th>Reunião Agendada</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map( (lead) => ( lead.status==='Cliente em Potencial' ? <tr key={lead.key} onClick={changeStatus}><td id={lead.key}>{lead.name}</td><td></td><td></td></tr> : 
                            lead.status==='Dados Confirmados' ? <tr key={lead.key} onClick={changeStatus}><td></td><td id={lead.key}>{lead.name}</td><td></td></tr> :
                            <tr key={lead.key} onClick={changeStatus}><td></td><td></td><td id={lead.key}>{lead.name}</td></tr> ))}
                </tbody>
            </table>
        </div>
    )
}

export default LeadsPanel
