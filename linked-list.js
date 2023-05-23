// LinkedList class or factory to represent full list
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) this.head = new Node(value);
    else {
      let index = this.head;
      while (index.nextNode !== null) index = index.nextNode;
      index.nextNode = new Node(value);
    }
  }

  prepend(value) {
    if (this.head === null) this.head = new Node(value);
    else {
      let current = this.head;
      this.head = new Node(value);
      this.head.nextNode = current.value;
    }
  }

  toString() {
    let string;
    if (this.head === null) string = 'null';
    else {
      let index = this.head;
      string = `( ${index.value} ) -> `;
      while (index.nextNode !== null) {
        index = index.nextNode;
        string += `( ${index.value} ) -> `;
      }
      string += 'null';
    }
    return string;
  }

}

// Node class or factory containing value property and link to
// nextNode, set both as null by default
function Node(value) {
  return {
    value,
    nextNode: null,
  };
}

const testList = new LinkedList();
testList.append(6);
testList.append(17);
testList.append(25);
//testList.prepend(4);
console.log(testList.toString());

// FUNCTIONS:

// function append(value) {
//   // adds a new node containing value to end of list
// }

// function prepend(value) {
//   // adds new node containing value to beginning of list
// }

// function size() {
//   // returns total number of nodes in list
// }

// function head() {
//   // returns first node in list
// }

// function tail() {
//   // returns last node in list
// }

// function at(index) {
//   // returns node at given index
// }

// function pop() {
//   // removes last element from the list
// }

// function contains(value) {
//   // return true if value is in list
//   // else return false
// }

// function find(value) {
//   // returns index of the node containing value
//   // else return null
// }

// function toString() {
//   // represents LinkedList objects as strings so they can be 
//   // printed and viewed in console
//   // format
//   // ( value ) -> ( value ) -> null
// }

// // Extra Credit
// function insertAt(value, index) {
//   // inserts new node with value at index
// }

// function removeAt(index) {
//   // removes node at given index
// }