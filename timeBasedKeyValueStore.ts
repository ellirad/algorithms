class TimeMap {
    private map: Map<string, { value: string; timestamp: number }[]>

    constructor() {
        this.map = new Map()
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key)) {
            this.map.set(key, [])
        }

        this.map.get(key)!.push({ value, timestamp })
    }

    get(key: string, timestamp: number): string {
        if (!this.map.has(key)) return ''

        const arr = this.map.get(key)!
        let left = 0
        let right = arr.length - 1
        let result = ''

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (arr[mid].timestamp === timestamp) {
                return arr[mid].value
            }

            if (arr[mid].timestamp < timestamp) {
                result = arr[mid].value // candidate
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return result
    }
}