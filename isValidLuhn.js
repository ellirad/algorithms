function isValidLuhn(number) {
	let sum = 0;
	let shouldDouble = false;

	for (let i = number.length - 1; i >= 0; i--) {
		let digit = parseInt(number[i]);

		if (shouldDouble) {
			digit *= 2;

			if (digit > 9) {
				digit = Math.floor(digit / 10) + (digit % 10);
			}
		}

		sum += digit;
		shouldDouble = !shouldDouble;
	}

	return sum % 10 === 0;
}