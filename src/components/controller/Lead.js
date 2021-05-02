import { useState } from 'react'

export const Lead = () => {
    return useState([
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
}

export const GetLead = (leads, id) => {
    return leads.filter(lead => lead.key == id)[0]
}