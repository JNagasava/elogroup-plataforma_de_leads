const LeadsPanel = () => {
    return (
        <div className="container-leadspanel">
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
                <tr>
                    <th>Org. Internacionais</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th>Ind. Farm. LTDA</th>
                    <th></th>
                </tr>
                <tr>
                    <th>Musc. Sound Live Cmp</th>
                    <th></th>
                    <th></th>
                </tr>
            </table>
            
        </div>
    )
}

export default LeadsPanel
