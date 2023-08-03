/** Node: node for a deque. */

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

/** Deque: doubly-linked nodes where you can
 *  remove or add from either the beggining or end. */

class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** appendLeft(val): add new value to beginning of the deque. Returns undefined. */

    appendLeft(val) {
        console.log('val',val);
        let node = new Node(val);
        if (this.size === 0) {
            this.last = node;
            this.last.prior = this.first;
            this.first = node;
            this.first.next = this.last;
        } else {
            let prior = this.first;
            this.first = node;
            this.first.next = prior;
            prior.prev = this.first;
        }
        this.size++;
    }

    /** appendRight(val): add new value to end of the deque. Returns undefined. */

    appendRight(val) {
        let node = new Node(val);
        if (this.size === 0) {
            this.last = node;
            this.first = node;
        } else {
            let prior = this.last;
            this.last = node;
            prior.next = this.last
            this.last.prev = prior;
        }
        this.size++;
    }

    /** popLeft(): remove the node from the beginning of the deque
     * and return its value. Should throw an error if the stack is empty. */

    popLeft() {

        if (this.size === 0) {
            throw "Deque is empty";
        } else {
            let returnVal = this.first.val;
            this.first = this.first.next;
            this.first.prev = null;
            this.size--;
            
            return returnVal;
        }

    }

    /** popRight(): remove the node from the end of the deque
     * and return its value. Should throw an error if the stack is empty. */

    popRight() {

        if (this.size === 0) {
            throw "Deque is empty";
        } else {
            let returnVal = this.last.val;
            this.last = this.last.prev;
            this.last.next = null;
            this.size--;
            
            return returnVal;
        }

    }

    /** peekRight(): return the value of the end node in the deque. */

    peekRight() {

        if (this.size === 0) {
            throw "Deque is empty";
        } else {
            return this.last.val;
        }

    }

    /** peekLeft(): return the value of the first node in the deque. */

    peekLeft() {

        if (this.size === 0) {
            throw "Deque is empty";
        } else {
            return this.first.val;
        }

    }

    /** isEmpty(): return true if the deque is empty, otherwise false */

    isEmpty() {

        return this.size === 0 ? true : false;

    }
}


function iterate(d) {
    let currentNode = d.first;

    while(currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
    }
}

// const deque = new Deque();
// deque.appendLeft("hi");
// deque.appendLeft("hello");
// deque.appendLeft("howdy");
// deque.appendRight("goodbye");
// deque.appendRight("see ya");
// deque.appendRight("ciao");
// iterate(deque);
// console.log();
// console.log(deque.popLeft());
// console.log(deque.popRight());
// console.log();
// iterate(deque);

module.exports = Deque;
