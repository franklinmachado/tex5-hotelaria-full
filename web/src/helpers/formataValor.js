export function formataValor(value) {
	if (!value) return '';
	return Intl.NumberFormat(undefined, {
		currency: 'BRL',
		style: 'currency',
	}).format(value);
}
