// 10 --> 5 --> 50
// Insert at index 1, between 10 and 5
// 10 --> 2 --> 5 --> 50
class Node {
    constructor(node) {
        this.node = {
            value: node,
            next: null
        }
    }
}

class LinkList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    // This method add to the end of the link list
    append(value) {
        this.tail.next = new Node(value)
        this.tail = new Node(value)
        this.length++
        return this
    }

    // This method add to the begining of the linked list
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        let leader = this.travesLinkedList(index - 1)
        let newNode = new Node(value)
        let previousNode = leader.next
        leader.next = newNode
        newNode.next = previousNode
        this.length++
        return this
    }

    travesLinkedList(index) {
        let counter = 0
        let currentNode = this.head
        while (counter <= index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    printLinkedList() {
        let arr = []
        let currentNode = this.head
        while (currentNode !== null) {
            console.log(currentNode, 'current node')
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log('linked list: ', arr)
    }

    remove(index) {
        const lead = this.travesLinkedList(index - 1)
        const shouldBeRemove = this.travesLinkedList(index)
        lead.next = shouldBeRemove.next
        this.length--
        return this
    }
}

const myLinkedList = new LinkList(10)
myLinkedList.append(5)
// myLinkedList.append(3)
// myLinkedList.prepend(4)
myLinkedList.insert(1, 2)
myLinkedList.printLinkedList()
// console.log(myLinkedList)