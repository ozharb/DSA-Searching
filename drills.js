// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

// 2. Adding a React UI
// For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. You will be testing the efficiency of 2 search algorithms, linear search and binary search. You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server-side to this program. All of this should be done using React.

// 1) Linear search

// Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

// 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,

// 2) Binary search

// Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

// 3. Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

// 4. Searching in a BST
// ** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

// 1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

// 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

// 5. Implement different tree traversals
// Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

// A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

// 6. Find the next commanding officer
// Suppose you have a tree representing a command structure of the Starship USS Enterprise.

//                Captain Picard 7
//              /                \
//     Commander Riker 4       Commander Data 10
//       /         \               \
//  Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
//  Worf   3     LaForge   5         Crusher 17
//    /                           /
// Lieutenant                  Lieutenant 14
// security-officer  2          Selar
// This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.
/* Binary Search Tree */

class Node {
    constructor(data, key,left = null, right = null) {
      this.key = key
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    add(data, key) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data,key);
        return;
      } else {
        const searchTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data,key);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data,key);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }
    findMin() {
      let current = this.root;
      while (current.left !== null) {
        current = current.left;
      }
      return current.data;
    }
    findMax() {
      let current = this.root;
      while (current.right !== null) {
        current = current.right;
      }
      return current.data;
    }
    find(data) {
      let current = this.root;
      while (current.data !== data) {
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
        if (current === null) {
          return null;
        }
      }
      return current;
    }
    isPresent(data) {
      let current = this.root;
      while (current) {
        if (data === current.data) {
          return true;
        }
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
    }
    remove(data) {
      const removeNode = function(node, data) {
        if (node == null) {
          return null;
        }
        if (data == node.data) {
          // node has no children 
          if (node.left == null && node.right == null) {
            return null;
          }
          // node has no left child 
          if (node.left == null) {
            return node.right;
          }
          // node has no right child 
          if (node.right == null) {
            return node.left;
          }
          // node has two children 
          var tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.root = removeNode(this.root, data);
    }
    isBalanced() {
      return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }
    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    inOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = [];
        function traverseInOrder(node) {       
          node.left && traverseInOrder(node.left);
          result.push(node.data);
          node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
      };
    }
    preOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = [];
        function traversePreOrder(node) {
          result.push(node.data);
          node.left && traversePreOrder(node.left);
          node.right && traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return result;
      };
    }
    postOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = [];
        function traversePostOrder(node) {
          node.left && traversePostOrder(node.left);
          node.right && traversePostOrder(node.right);
          result.push(node.data);
        };
        traversePostOrder(this.root);
        return result;
      }
    }
    
    levelOrder() {
        let result = [];
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.key);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };
    
  }
  

  //startship USS Enterprise
  const sue = new BST();
  
  sue.add(7 ,"Captain Picard")
  sue.add(4, "Commander Riker")
  sue.add(10, "Commander Data")
  sue.add(17,"Lt. Cmdr. Crusher")
  sue.add(14, "Lieutenant Selar")
  sue.add(3,"Lt. Cmdr. Worf")
  sue.add(5,"Lt. Cmdr. LaForge")
  sue.add(2,"Lieutenant security-officer")
  
  function officers(crew){
  
    const team = []
    const queue = [crew.root];
    while(queue.length){
      const node = queue.shift();
      team.push(node.key)
      node.right && queue.push(node.right);
      node.left && queue.push(node.left);
    }
    return team
  }
  officers(sue)
  function findOfficer(sue,num){
    let crew = officers(sue)
  
    let nextInCommand = crew.slice(num)[0]
    let lost = crew.slice(0,num)
  
    
    let listCrew
  if (lost.length > 2){
   listCrew = lost.map((el,i)=> i === (lost.length-1) ? 'and ' + el : el + ', ').join('')
  } else if (lost.length==2){
     listCrew = lost[0] + ' and ' + lost[1]
  } else {
    listCrew = lost[0]
  }
    return `Announcement!\n We regret to inform you that we've lost: \n ${listCrew}.\n The commanding officer of the Starship USS Enterprise is now\n ${nextInCommand}\n Thank you.`
  }
  
  findOfficer(sue,5)
  
// 7. Max profit
// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.