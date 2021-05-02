import Register from '../view/Register'
import LeadsPanel from '../view/LeadsPanel'
import NewLead from '../view/NewLead'
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import PasswordValidation from './PasswordValidation'
import { CheckNewRegister, CheckNewLead } from './CheckFields'

const Routes = () => {

    const [leads, setLeads] = useState([
        {
            key: 1,
            name: 'Org. Internacionais',
            status: 'Cliente em Potencial'
        },
        {
            key: 2,
            name: 'Ind. Farm. LTDA',
            status: 'Dados Confirmados'
        },
        {
            key: 3,
            name: 'Musc. Sound Live Cmp',
            status: 'Cliente em Potencial'
        }
    ])

    const addLead = (lead) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newLead = { id, ...lead }
        setLeads([...leads, newLead])
    }

    return (
        <Switch>
            <Route path="/" exact ><Register passwordValidation={PasswordValidation} checkNewRegister={CheckNewRegister} /></Route>
            <Route path="/register" exact ><Register passwordValidation={PasswordValidation} checkNewRegister={CheckNewRegister} /></Route>
            <Route path="/leadspanel" ><LeadsPanel leads={leads} /></Route>
            <Route path="/newlead" ><NewLead addLead={addLead} checkNewLead={CheckNewLead}/></Route>
            <Route>{() => <div><h1>Page 404!</h1></div>}</Route>
        </Switch>
    )
}

export default Routes


/*

{ lead.status==='Cliente em Potencial' ? <React.Fragment><td>{lead.name}</td><td></td><td></td></React.Fragment> : 
                            lead.status==='Dados Confirmados' ? <React.Fragment><td></td><td>{lead.name}</td><td></td></React.Fragment> :
                            <React.Fragment><td></td><td></td><td>{lead.name}</td></React.Fragment> }

*/
