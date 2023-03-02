// *************************** Task 1 ***********************************
// Реализовать DFS inorder, preorder and postorder

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

function inorder(node) {
  if (node) {
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
  }
}

function preorder(node) {
  if (node) {
    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
  }
}

function postorder(node) {
  if (node) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.value);
  }
}

console.log('Inorder:');
inorder(tree);

console.log('Preorder:');
preorder(tree);

console.log('Postorder:');
postorder(tree);
