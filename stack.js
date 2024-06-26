/** Node: node for a stack. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** push(val): add new value to top of the stack. Returns undefined. */

    push(val) {
        let node = new Node(val);
        if (this.size === 0) {
            this.last = node;
            this.first = node;
        } else {
            let prior = this.first;
            this.first = node;
            this.first.next = prior;
        }
        this.size++;
    }

    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */

    pop() {

        if (this.size === 0) {
            throw "Stack is empty";
        } else {
            let returnVal = this.first.val;
            this.first = this.first.next;
            this.size--;

            return returnVal;
        }

    }

    /** peek(): return the value of the first node in the stack. */

    peek() {

        if (this.size === 0) {
            throw "Stack is empty";
        } else {
            return this.first.val;
        }

    }

    /** isEmpty(): return true if the stack is empty, otherwise false */

    isEmpty() {
        return this.size === 0;
    }

}

/* implementation of a Stack as would be used in an internet browser back/fwd context */

class BrowserStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.current = null;
        this.size = 0;
    }

    /** push(val): add new value to the top of the stack. Returns undefined. */

    push(site) {
        let node = new Node(site);
        if (this.size === 0) {
            this.last = node;
            this.first = node;
            this.current = node;
        } else {
            let prior = this.first;
            this.first = node;
            this.current = this.first;
            this.first.next = prior;
            prior.prev = this.first;
        }
        this.size++;
    }

    goFwd() {
        if (!this.current.prev) {
            return this.current.val;
        } else {
            const returnVal = this.current.prev.val;
            this.current = this.current.prev;
            return returnVal;
        }
        
    }

    goBack() {
        if (!this.current.next) {
            return this.current.val;
        } else {
            const returnVal = this.current.next.val;
            this.current = this.current.next;
            return returnVal;
        }
    }
}

/* examine the string and decide if the string is “balanced” — 
a balanced string is one where the different kinds of brackets are properly balanced, 
such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets. */
function balancedBrackets(string) {
    const startBrackets = ['(','{','['];
    const endBrackets = [')','}',']'];
    const table = { '(': ')', '{': '}', '[': ']'};
    const stackLeft = new Stack();
    let char;

    for (let x = 0; x < string.length; x++) {
        char = string[x];
        if (endBrackets.includes(char)) {
            if (x === 0 || stackLeft.isEmpty() || table[stackLeft.pop()] !== char) {
                return false;
            } 
        } else if (startBrackets.includes(char)) {
            stackLeft.push(char);
        } else {
            continue;
        }
    }
    
    return true;
}

function iterate(s) {
    let currentNode = s.first;

    while(currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
    }
}


module.exports = {
    Stack,
    BrowserStack,
    balancedBrackets
}
