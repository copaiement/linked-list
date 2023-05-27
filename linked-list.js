// LinkedList class represent full list
class LinkedList {
  constructor() {
    this.headVal = null;
  }

  // adds value to end of list
  append(value) {
    if (this.headVal === null) this.headVal = new Node(value);
    else {
      let index = this.headVal;
      while (index.nextNode !== null) index = index.nextNode;
      index.nextNode = new Node(value);
    }
  }

  // adds value to beginning of list
  prepend(value) {
    if (this.headVal === null) this.headVal = new Node(value);
    else {
      let current = this.headVal;
      this.headVal = new Node(value);
      this.headVal.nextNode = current;
    }
  }

  // returns size of list
  size() {
    let size = 0;
    if (this.headVal !== null) {
      size ++;
      let index = this.headVal;
      while (index.nextNode !== null) {
        size ++;
        index = index.nextNode;
      }
    }
    return size;
  }

  // returns first node in list
  head() {
    return this.headVal.value;
  }

  // returns last node in list
  tail() {
    let tail = null;
    if (this.headVal !== null) {
      tail = this.headVal;
      while (tail.nextNode !== null) {
        tail = tail.nextNode;
      }
    }
    return tail.value;
  }

  at(index) {
    let value;
    if (index === 0) value = this.headVal.value;
    else {
      while ()
    }
    return value;
  }

  // prints list as string
  toString() {
    let string;
    if (this.headVal === null) string = 'null';
    else {
      let index = this.headVal;
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
testList.prepend(4);
console.log(testList.toString());
console.log(testList.size());
console.log(testList.head());
console.log(testList.tail());
console.log(testList.at(0));
console.log(testList.at(2));
console.log(testList.at(22));

// FUNCTIONS:

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

// // Extra Credit
// function insertAt(value, index) {
//   // inserts new node with value at index
// }

// function removeAt(index) {
//   // removes node at given index
// }