class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            return this.root = newNode
        }
        let currentNode = this.root
        while (true) {
            if (value < currentNode.value) {
                // left node
                if (!currentNode.left) {
                    currentNode.left = newNode
                    return this
                }
                currentNode = currentNode.left
            } else {
                // right node
                if (!currentNode.right) {
                    currentNode.right = newNode
                    return this
                }
                currentNode = currentNode.right
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false
        } else {
            let currentNode = this.root
            while(currentNode) {
                if (value < currentNode.value) {
                    // Search in the left nodes
                    currentNode = currentNode.left
                } else if (value > currentNode.value) {
                    // Search in the right nodes
                    currentNode = currentNode.right
                } else if (currentNode.value === value) {
                    return currentNode
                }
                return false
            }
        }

    }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.lookup(4)