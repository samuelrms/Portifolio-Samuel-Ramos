export const maskDDD = (value: string) =>
  value.replace(/\D/g, '').replace(/(\d{1})(\d)/, '($1$2)');

export const maskOnlyLetters = (value: string) =>
  value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '');

export const maskPhone = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)$/, '$1');
