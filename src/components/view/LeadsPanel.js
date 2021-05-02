const LeadsPanel = () => {
    return (
        <div className="container-panel">
            <div className="leadspanel-top">
                <div className="elogroup-logo">
                    <span className="elogroup-logo-elo">ELO</span><span className="elogroup-logo-group">GROUP</span>
                </div>
                <span className="leadspanel-top-title">Painel de Leads</span>
            </div>
            <button className="btn-leadspanel">Novo Lead (+)</button>
            <table className="leadspanel-table">
                <thead>
                    <tr>
                        <th>Cliente em Potencial</th>
                        <th>Dados Confirmados</th>
                        <th>Reunião Agendada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Org. Internacionais</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Ind. Farm. LTDA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Musc. Sound Live Cmp</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LeadsPanel
