const inorderTraversalIterative = (root) => {
    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.val);

        current = current.right;
    }

    return result;
};

// Example usage:
const root = {
    val: 40,
    left: {
        val:30,
        left:{
            val:25,
            left:{
                val:15,
                left:null,
                right:null
            },
            right: {
                val:28,
                left:null,
                right:null
            },
        },
        right:{
            val:35,
            left:null,
            right:null
        }
    },
    right: {
        val: 50,
        left: {
            val: 45,
            left: null,
            right: null
        },
        right: {
            val:60,
            left:{
                val:55,
                left:null,
                right:null
            },
            right:{
                val:70,
                left: null,
                right: null,
            }
        }
    }
};

console.log(inorderTraversalIterative(root));  // Output: [1, 3, 2]
