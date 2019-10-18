const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        const node = new Node(data);

        if (this.length != 0) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;
        
        return this;
    }

    head() {
        return (this._head != null) ? this._head.data : null;
    }

    tail() {
        return (this._tail != null) ? this._tail.data : null;
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
        return this;
    }

    isEmpty() {
        return (this._head == null) ? true : false;
    }

    clear() {
        let index = 0;
        while (index <= this.length) {
            this.deleteAt(index);
            index++;
        }
        this._tail = null;
        this._head = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index < 0 || this.length <= index) {
            return null;
        }

        let current = this._head;

        if (index === 0) {
            this._head = current.next;
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
        //return current.data;
        return this;
    }

    reverse() {
        let inputList = [];
        let index = 0;
        let size = this.length;
        while (index < size) {
            inputList.push(this.at(index));
            index++;
        }
        inputList.reverse();
        this.clear();
        index = 0;
        while (index < size) {
            this.append(inputList[index]);
            index++;
        }
        return this;
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
