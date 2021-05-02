export const CheckNewLead = (name, telephone, email, checkboxes) => {
    if (!name) {
        alert('Digite o nome do Lead')
        return false
    } else if (!telephone) {
        alert('Digite o telefone do Lead')
        return false
    } else if (!email) {
        alert('Digite o email do Lead')
        return false
    }
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            alert(`Lead ${name} cadastrado com sucesso! O seu status é "Cliente Potencial"`)
            return true
        }
    }
    alert('Marque pelo menos uma oportunidade')
    return false
}

export const CheckNewRegister = (name, password, passwordConfirmation) => {
    if (!name) {
        alert('Digite o seu nome de usuário')
        return false
    } else if (!password) {
        alert('Digite a senha')
        return false
    } else if (!passwordConfirmation) {
        alert('Digite a confirmação da senha')
        return false
    }
    return true
}
