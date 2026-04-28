function evalRPN(tokens) {
	const stack = []

	for (const token of tokens) {
		if (!isNaN(Number(token))) {
			stack.push(Number(token))
		} else {
			const a = stack.pop()
			const b = stack.pop()

				let result = 0

			switch (token) {
				case '+':
					result = b + a
					break
				case '-':
					result = b - a
					break
				case '*':
					result = b * a
					break
				case '/':
					result = Math.trunc(b / a) // مهم: truncate toward zero
					break
			}

			stack.push(result)
		}
	}

	return stack[0]
}