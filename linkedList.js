class LinkedList {
    constructor(value) {
      this.head = {
          value,
          next: null
      }
      this.tail = this.head;
      this.length = 1;
    }

    append(value){
        const newNode = {
            value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
}

const firstList = new LinkedList(10);
firstList.append(3);
firstList.append(5);
console.log(firstList)