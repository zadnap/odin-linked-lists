class LinkedList {
  root = null;

  append(value) {
    if (this.root === null) {
      this.root = { value, next: null };
      return;
    }

    let currentNode = this.root;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = { value, next: null };
  }

  prepend(value) {
    const firstNodeRef = this.root;
    this.root = { value, next: firstNodeRef };
  }

  size() {
    if (!this.root) return 0;

    let currentNode = this.root;
    let count = 1;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }

  head() {
    return this.root ? this.root.value : null;
  }

  tail() {
    let currentNode = this.root;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }

  at(index) {
    if (!this.root) return null;

    let currentNode = this.root;
    let count = 0;

    while (currentNode.next !== null) {
      if (index === count) return currentNode.value;
      currentNode = currentNode.next;
      count++;
    }

    return currentNode.value;
  }

  pop() {
    let currentNode = this.root;

    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
  }

  contains(value) {
    if (!this.root) return null;

    let currentNode = this.root;

    while (currentNode.next !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  find(value) {
    if (!this.root) return null;

    let currentNode = this.root;
    let index = 0;

    while (currentNode.next !== null) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.next;
      index++;
    }
  }

  toString() {
    if (!this.root) return "( )";

    let currentNode = this.root;
    let stringLinkedList = "";

    while (currentNode.next !== null) {
      stringLinkedList += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }

    stringLinkedList += `( ${currentNode.value} ) -> null`;

    return stringLinkedList;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export { LinkedList };
