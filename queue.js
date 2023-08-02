/** Node: node for a queue. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

    enqueue(val) {
        let node = new Node(val);
        if (this.size === 0) {
            this.last = node;
            this.first = node;
        } else {
            let prior = this.last;
            this.last = node;
            prior.next = this.last;
        }
        this.size++;
    }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

    dequeue() {
        if (this.size === 0) {
            throw "The queue is empty";
        }

        let returnVal = this.first.val;
        this.first = this.first.next;
        this.size--;

        return returnVal;

    }

    /** peek(): return the value of the first node in the queue. */

    peek() {
        if (this.size === 0) {
            throw "The queue is empty";
        } else {
            return this.first.val;
        }

    }

    /** isEmpty(): return true if the queue is empty, otherwise false */

    isEmpty() {

        return this.size === 0 ? true : false;

    }

    reverseString(string) {
        let x;

        for (x = string.length - 1; x >= 0; x--) {
            this.enqueue(string[x]);
        }
        x = 0;
        let reversedString = '';

        while(x < string.length) {
            reversedString += this.dequeue();
            x++;
        }

        return `${string} reversed === ${reversedString}`;
    }

    balancedBrackets(string) {
        let startBrackets = ['(','{','['];
        let endBrackets = [')','}',']'];

        const splitString = string.split(' ');

        for (let segment of splitString) {
            this.enqueue(segment);
        }

        let currentNode = this.first;
        let bracketCount = 0;

        while (currentNode) {
            let nodeString = currentNode.val
            for (let x = 0; x < nodeString.length; x++) {
                 if (endBrackets.includes(nodeString[x])) {
                    try {
                        if (bracketCount === 0 || nodeString[x+1].toLowerCase() !== nodeString[x+1].toUpperCase()) { //check for alpha value
                            return false;
                        } 
                        bracketCount--;
                    } catch {
                        bracketCount--;
                    }
  
                } else if (startBrackets.includes(nodeString[x])) {
                    try {
                        if (nodeString[x-1].toLowerCase() !== nodeString[x-1].toUpperCase()) { //check for alpha value
                            return false;
                        }
                        bracketCount++;
                    } catch {
                        bracketCount++;
                    }

                }               
            }
            currentNode = currentNode.next;
        }

        return bracketCount > 0 ? false : true;
    }
}

function iterate(q) {
    let currentNode = q.first;

    while(currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
    }
}

const queue = new Queue();
// queue.enqueue("dickens");
// queue.enqueue("charles");
// queue.enqueue("1");
// queue.enqueue("2");
// queue.enqueue("last");
// iterate(queue);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.peek());
//console.log(queue.reverseString("excellent"));
console.log(queue.balancedBrackets('(hi [there])'));


module.exports = Queue;
