export function calculaTotalDeDias(checkIn, checkOut) {
	const diferencaEmMs =
		new Date(checkOut).valueOf() - new Date(checkIn).valueOf();
	const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24);
	return diferencaEmDias;
}
