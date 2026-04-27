function checkInclusion(s1, s2) {
	if (s1.length > s2.length) return false;

	const count1 = new Array(26).fill(0);
	const count2 = new Array(26).fill(0);

	// Build frequency for s1 and first window of s2
	for (let i = 0; i < s1.length; i++) {
		count1[s1.charCodeAt(i) - 97]++;
		count2[s2.charCodeAt(i) - 97]++;
	}

	// Helper to compare arrays
	const matches = () => count1.every((val, i) => val === count2[i]);

	if (matches()) return true;

	// Slide window
	for (let i = s1.length; i < s2.length; i++) {
		// Add new char
		count2[s2.charCodeAt(i) - 97]++;

		// Remove old char
		count2[s2.charCodeAt(i - s1.length) - 97]--;

		if (matches()) return true;
	}

	return false;
}