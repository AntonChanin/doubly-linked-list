const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return node;
    }

    head() {
      return this._head.data;
    }

    tail() {
     return this._tail.data;
    }

    at(index) {
        if (index < 0 || this.length <= index) {
            return null;
        } 
        let current = this._head;
        let position = 0;
        while (position < index) {
            current = current.next;
            position++;
        }
        return current.data;
    }

    insertAt(index, data) {
        if (index < 0 || this.length < index) {
            return false;
        }

        let node = new Node(data);

        if (index === 0) {
            node.next = this._head;
            this._head = node;
        } else {
            let current = this._head;
            let prev = null;
            let position = 0;

            while (position < index) {
                prev = current;
                current = current.next;
                position++;
            }

            prev.next = node;
            node.next = current;
        }

        this.length++;
    }

    isEmpty() {
        return (this._head == null) ? true : false;
    }

    clear() {
        this.head() = null;
        this.tail() = null;
        this.length = 0;
    }

    deleteAt(index) {
        if (index < 0 || this.length <= index) {
            return null;
        }

        let current = this._head;

        if (index === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let position = 0;

            while (position < index) {
                prev = current;
                current = current.next;
                position++;
            }

            prev.next = current.next;
        }

        this.length--;
        return current.data;
    }

    reverse() {
    }

    indexOf(data) {
        let current = this._head;
        let count = 0;

        while (current) {
            if (current.data === data) {
                return count;
            }
            current = current.next;
            count++;
        }
        return -1;
    }
}

module.exports = LinkedList;
