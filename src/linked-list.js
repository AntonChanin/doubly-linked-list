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

    }

    insertAt(index, data) {
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
    }

    reverse() {}

    indexOf(data) {
        var currNode = this._head,
        count = 0;
        if (currNode.data != null && data != null) {
            while (currNode.data != data) {
                currNode = currNode.next;
                count++;
            }
        }
        return (currNode.data != null) ? count : -1;
    }
}

module.exports = LinkedList;
