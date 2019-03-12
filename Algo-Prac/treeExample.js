class Tree {
    constructor(root) {
      this._root = root || null;
    }
  
      _traverse(callback) {
      const self = this;
      function goThrough(node) {
        callback(node);
        node.children.forEach((child) => {
          goThrough(child);
        });
      }
      goThrough(this._root, dash);
    }
  
  
    _addNode(value, parentValue) {
      const newNode = {
        value,
        childcren: []
      };
  
      if (this._root === null) {
        this._root = newNode;
        return;
      }
  
      this._traverse((node) => {
        if (node.value === parentValue) {
          node.children.push(newNode);
        }
      });
    }
  
    _removeNode(value) {
      this._traverse((node) => {
        node.children.forEach((childNode, index) => {
          if (childNode.value === value) {
            node.children.splice(index, 1);
          }
        });
      })
    }
  
    _search(value) {
      let returnNode = 'Not Found';
      this._traverse((node) => {
        if (node.value === value) {
          returnNode = node;
        }
      });
      return returnNode;
    }
  
    _displayLeafs(parentValue) {
      const parentNode = typeof parentValue === 'string' ? this._search(parentValue) : parentValue ;
      let leafsRet = [];
      if (parentValue.children && !parentValue.children.length) {
        return parentValue;
      }
  
      parentNode.children.forEach((child) => {
        leafsRet.push(this._displayLeafs(child));
      });
  
      return leafsRet.flat();
    }
  
  } 
  console.log("softer asche");
    class Node {
    constructor(value, children) {
      this.value = value;
      this.children = children;
    }
  }


  const tree = new Tree();
// Add some nodes to the tree we will get back to this later
//...

tree._traverse((node)=> {
	// I have access to each and every node of the tree here and 	I can do whatever I want with them
	console.log(node);
});


tree._addNode('Computers & Electronics');
tree._addNode('Notebooks', 'Computers & Electronics');
tree._addNode('Routers', 'Computers & Electronics');
tree._addNode('Desktop Computers', 'Computers & Electronics');

tree._addNode('Macbooks', 'Notebooks');
tree._addNode('Asus', 'Notebooks');

tree._addNode('Macbook Pro', 'Macbooks');
tree._addNode('Macbook Air', 'Macbooks');


tree._traverse((node) => {
  console.log(node.value);
});

console.table(tree._displayLeafs('Notebooks'));