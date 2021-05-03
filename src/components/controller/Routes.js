import Register from '../view/Register'
import LeadsPanel from '../view/LeadsPanel'
import NewLead from '../view/NewLead'
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import PasswordValidation from './PasswordValidation'
import { CheckNewRegister, CheckNewLead } from './CheckFields'
import { Lead, GetLead } from './Lead'

const Routes = () => {

    const [leads, setLeads] = Lead()

    const addLead = (lead) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newLead = { id, ...lead }
        setLeads([...leads, newLead])
    }

    return (
        <Switch>
            <Route path="/" exact ><Register passwordValidation={PasswordValidation} checkNewRegister={CheckNewRegister} /></Route>
            <Route path="/register" exact ><Register passwordValidation={PasswordValidation} checkNewRegister={CheckNewRegister} /></Route>
            <Route path="/leadspanel" ><LeadsPanel leads={leads} getLead={GetLead}/></Route>
            <Route path="/newlead" ><NewLead addLead={addLead} checkNewLead={CheckNewLead}/></Route>
            <Route>{() => <div><h1>Page 404!</h1></div>}</Route>
        </Switch>
    )
}

export default Routes
