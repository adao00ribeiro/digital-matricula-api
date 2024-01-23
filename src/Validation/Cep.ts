export function validateCep(cep: string): boolean {
    // Verificar se o CEP tem o formato esperado
    const cepRegex: RegExp = /^\d{5}-?\d{3}$/;
    const isCepValid: boolean = cepRegex.test(cep);

    return isCepValid;
}