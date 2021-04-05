class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insetAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getElementByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (var i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value}->`;
      current = current.next;
    }
    console.log(`${output}null`);
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insetAtHead(value);
    let prev = this.getElementByIndex(index - 1);
    if (prev == null) return null;
    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    let prev = this.getElementByIndex(index - 1);
    if (prev == null) return null;
    prev.next = prev.next.next;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.insertValueFromArray = (...value) => {
  const ll = new LinkedList();
  for (var i = value.length - 1; i >= 0; i--) {
    ll.insetAtHead(value[i]);
  }
  return ll;
};

module.exports = LinkedList;
