const { Stack } = require("./stack");

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
        return this.size === 0;
    }

    //self-explanatory!
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

        return `"${string}" reversed === "${reversedString}"`;
    }

}

function iterate(q) {
    let currentNode = q.first;

    while(currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
    }
}

module.exports = Queue;
