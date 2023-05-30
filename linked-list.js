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

  // returns value at index
  at(index) {
    let value = this.headVal;
    // if index = 0, return head
    if (index === 0) value = this.headVal;
    else {
      // go through list to find index
      for (let i = 1; i <= index; i ++) {
        if (value.nextNode !== null) {
          value = value.nextNode;
        } else {
          return 'Err: Index does not exist';
        }
      }

    }
    return value.value;
  }

  // remove last item from list
  pop() {
    let index = this.headVal;
    let indexPlusOne = index.nextNode;
    if (this.headVal === null) return;
    while (indexPlusOne.nextNode !== null) {
      index = index.nextNode;
      indexPlusOne = indexPlusOne.nextNode;
    }
    index.nextNode = null;
  }

  // returns true is value is in list, false otherwise
  contains(value) {
    if (this.headVal === null) return false;
    let index = this.headVal;
    while (index.nextNode !== null) {
      if (index.value === value) {
        return true;
      }
      index = index.nextNode;
    }
    if (index.value === value) {
      return true;
    }
    return false;
  }

  // returns index of node containing value, else return null
  find(value) {
    if (this.headVal === null) return null;
    let index = 0;
    let current = this.headVal;
    // run through list
    while (current.nextNode !== null) {
      if (current.value === value) {
        return index;
      }
      index ++;
      current = current.nextNode;
    }
    // give proper return value at end of list
    if (current.value === value) {
      return index;
    }
    return null;
  }

  // insert value at index
  insertAt(value, index) {
    // if index < 0 and 
  }

  // remove value at index
  removeAt(index) {
    // reject negative values
    if (index < 0) return;
    // do nothing if list is empty
    if (this.headVal === null) return;

    let current = this.headVal;
    // loop until one before index
    for (let i = 0; i < index; i ++) {
      // if list stops before index is reached, return unedited list
      if (current.nextNode === null) return;
      current = current.nextNode;
    }
    // if indexed value does not exist,return
    if (current.nextNode === null) return;
    // else, replace nextNode with currentPlusOne, skipping index
    current.nextNode = current.nextNode.nextNode;
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
const testList2 = new LinkedList();
testList.append(6);
testList.append(17);
testList.append(25);
testList.prepend(4);
testList.append(34);
console.log(testList.toString());
testList.removeAt(2);
console.log(testList);
console.log(testList.toString());

// testList.pop();
// console.log(testList.toString());
// console.log(testList.size());
// console.log(testList.head());
// console.log(testList.tail());
// console.log(testList.at(0));
// console.log(testList.at(2));
// console.log(testList.at(22));
// console.log(testList2.contains(11));
// console.log(testList.contains(25));
// console.log(testList.contains(33));
// console.log(testList.toString());
// console.log(testList.find(4));
// console.log(testList.find(25));
// console.log(testList2.find(767));
// console.log(testList.find(22));
