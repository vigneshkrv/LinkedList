var LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test(`'it adds element to the start of the list`, () => {
    const ll = new LinkedList();
    ll.insetAtHead(10);
    const oldHead = ll.head;
    ll.insetAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);

    console.log(ll);
  });
});
