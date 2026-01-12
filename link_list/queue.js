class Node {
    constructor(value) {
        this.node = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
        this.name = 'ellie'
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (!this.length) {
            this.first = newNode
            this.last = newNode
        }
        if (this.length > 0) {
            this.last.next = newNode
            this.last = newNode
        }

        this.length++
        return this
    }

    dequeue() {
        if (!this.length) {
            return null
        }
        if (this.first === this.last) {
            this.last = null
        }
        const pointer = this.first
        this.first = this.first.next
        this.length--
        return pointer
    }

    peek() {
        if (this.length) {
            return this.first
        } else {
            return null
        }
    }
}

const myQueue = new Queue()
myQueue.enqueue('morty')
myQueue.enqueue('meti')
myQueue.enqueue('fati')
myQueue.peek()
myQueue.dequeue()
console.log(myQueue);
