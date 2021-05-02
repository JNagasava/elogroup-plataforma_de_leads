import { useState } from 'react'

const PasswordValidation = (password, passwordConfirmation) => {

    var passwordRule = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")

    if (passwordRule.test(password)) {
        if (password === passwordConfirmation) {
            alert('Usuário aceito :)')
        } else {
            alert('A senhas digitadas são diferentes')
        }
    } else {
        alert("A senha deve conter pelo menos 8 caracteres sendo no mínimo 1 caracter especial, 1 caracter numérico e 1 caracter alfanumérico")
    }
}

export default PasswordValidation
