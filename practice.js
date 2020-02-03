
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// initiate LinkedList, with empty head
class LinkedList {
  constructor() {
    this.head = null;
  }
  // insert, instantiate new node, give it data
  insertFirst(data) {
    this.head = new Node(data, null);
  }

}


// find
// set current node variable
// if no current node exists
//  return null
// while the current node value does not match item passed in
//  check if current node next is equal to null
//   return null
//   otherwise
//    assign current node variable to next
// return current node

































// // Node class to represent each individual node
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// // LinkedList class, initiate head with empty list
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//     // Insert first node
//     insertFirst(data) {
//       this.head = new Node(data, this.head);
//       this.size++;
//     }

//     // Insert last node
//     insertLast(data) {
//       let node = new Node(data);
//       let current;

//       // If empty, make head
//       if(!this.head) {
//         this.head = node;
//       } else {
//         current = this.head;

//         while(current.next) {
//           current = current.next;
//         }

//         current.next = node;
//       }

//       this.size++;

//     }

//     // Insert at index

//     // Get at index, set a current variable to beginning
//     getAt(index) {
//       let current = this.head;
//       let count = 0;

//       while(current) {
//         if (count == index) {
//           console.log(current.data)
//         }
//         count++;
//         // move along list
//         current = current.next;
//       }

//       return null;
//     }

//     // Remove at index
//     removeAt(index) {
//       if (index > 0 && index > this.size) {
//         return;
//       }

//       let current = this.head;
//       let previous;
//       let count = 0;

//       // Remove first
//       if (index === 0) {
//         this.head = current.next;
//       } else {
//         while(count < index) {
//           count++;
//           previous = current;
//           current = current.next;
//         }

//         previous.next = current.next;
//       }

//       this.size--;
//     }

//     // Clear list
// }

// const ll = new LinkedList();
// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);

// ll.getAt(2);

// console.log(ll);