class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    };
    let node = this.root;
    while (node) {
      if (val > node.val) {
        if (node.right == null) {
          node.right = new Node(val);
          return this;
        } else {
          node = node.right;
        };
      } else {
        if (node.left == null) {
          node.left = new Node(val);
          return this;
        } else {
          node = node.left;
        };
      };
    };
  };

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    const insertVal = (val, root) => {
      if (val > root.val) {
        if (root.right == null) {
          root.right = new Node(val);
          return;
        } else {
          insertVal(val,root.right);
        };
      } else {
        if (root.left == null) {
          root.left = new Node(val);
          return;
        } else {
          insertVal(val, root.left);
        };
      };
    };
    insertVal(val,this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return undefined;
    };
    let node = this.root;
    while (node) {
      if (node.val === val) {
        return node;
      } else if (val > node.val) {
        if (node.right) {
          node = node.right
        } else {
          return undefined;
        }
      } else {
        if (node.left) {
          node = node.left;
        } else {
          return undefined;
        };
      };
    };
    return undefined;
  };

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) {
      return undefined;
    };
    const findVal = (val,root) => {
      if (root.val === val) {
        return root;
      } else if (val > root.val) {
        return root.right ? findVal(val,root.right) : undefined;
      } else {
        return root.left ? findVal(val, root.left) : undefined;
      };
    };
    return findVal(val,this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const nodes = [];
    if (!this.root) {
      return nodes;
    };
    const traverseNode = (node) => {
      nodes.push(node.val);
      node.left ? traverseNode(node.left) : null;
      node.right ? traverseNode(node.right) : null;
    };
    traverseNode(this.root);
    return nodes;
  };

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const nodes = [];
    if (!this.root) {
      return nodes;
    };
    const traverseNode = (node) => {
      node.left ? traverseNode(node.left) : null;
      nodes.push(node.val);
      node.right ? traverseNode(node.right) : null;
    };
    traverseNode(this.root);
    return nodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const nodes = [];
    if (!this.root) {
      return nodes;
    };
    const traverseNode = (node) => {
      node.left ? traverseNode(node.left) : null;
      node.right ? traverseNode(node.right) : null;
      nodes.push(node.val);
    };
    traverseNode(this.root);
    return nodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const nodes = [];
    if (!this.root) {
      return nodes;
    };
    let queue = [this.root];
    while (queue.length > 0) {
      nodes.push(queue[0].val);
      queue[0].left ? queue.push(queue[0].left) : null;
      queue[0].right ? queue.push(queue[0].right) : null;
      queue = queue.slice(1,);
    }
    return nodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
