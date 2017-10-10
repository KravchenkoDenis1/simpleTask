function Node (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function Tree () {
    this.root = null;
}

Tree.prototype.add = function (data) {
    let node = new Node(data);
    let currentNode = this.root;
    let check = 0;
    if (this.root === null) {
        this.root = node;
    } else {
        while (check === 0) {
            if (data < currentNode.data) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = node;
                    check = 1;
                }
            } else if (data > currentNode.data) {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = node;
                    check = 1;
                }
            } else {
                check = 1;
                console.log('Data is in the tree!!!');
            }
        }
    }
};

Tree.prototype.traverse = function (process) {
    function inOrder(node) {
        if (node) {
            if (node.left) {
                inOrder(node.left);
            }
            process.call(this, node);
            if (node.right) {
                inOrder(node.right);
            }
        }
    }
    inOrder(this.root);
};

let check = function (tree1, tree2) {
    let arr1 = [];
    let arr2 = [];
    let i;
    tree1.traverse(function (node) {
        arr1.push(node.data);
    });
    tree2.traverse(function (node) {
        arr2.push(node.data);
    });
    for (i = 0; i < arr1.length; i++) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        if (arr1[i] !== arr2[i] ) {
            return false;
        }
    }
    return true;
};
