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

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {
        /*var currentNode = this.head,
       length = this._length,
       count = 1,
       message = { failure: 'Failure: non-existent node in this list.' },
       beforeNodeToDelete = null,
       nodeToDelete = null,
       deletedNode = null;

        // 1-ый случай: неверная позиция
        if (length === 0 || index < 1 || index > length) {
            throw new Error(message.failure);
        }

        // 2-ой случай: первый узел удален
        if (index === 1) {
            this.head = currentNode.next;

            // 2-ой случай: существует второй узел
            if (!this.head) {
                this.head.previous = null;
                // 2-ой случай: второго узла не существует
            } else {
                this.tail = null;
            }

            // 3-ий случай: последний узел удален
        } else
            if (index === this._length) {
                this.tail = this.tail.previous;
                this.tail.next = null;
            // 4-ый случай: средний узел удален
            } else {
                while (count < index) {
                    currentNode = currentNode.next;
                    count++;
                }

                beforeNodeToDelete = currentNode.previous;
                nodeToDelete = currentNode;
                afterNodeToDelete = currentNode.next;

                beforeNodeToDelete.next = afterNodeToDelete;
                afterNodeToDelete.previous = beforeNodeToDelete;
                deletedNode = nodeToDelete;
                nodeToDelete = null;
            }

        this._length--;

        return message.success;*/
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
