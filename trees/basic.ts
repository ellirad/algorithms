class TreeNode {
	val: Number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val: number, left= null, right= null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    function dfs(node: TreeNode | null) {
        if (node === null) return null

        result.push(node.val);

        dfs(node.left)

        dfs(node.right)
    }

    dfs(root)

    return result
}

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    function dfs(node: TreeNode | null) {
        if (!node) return

        // 1️⃣ left
        dfs(node.left)

        // 2️⃣ root
        result.push(node.val)

        // 3️⃣ right
        dfs(node.right)
    }

    dfs(root)
    return result
}

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    function dfs(node: TreeNode | null) {
        if (!node) return

        // 1️⃣ left
        dfs(node.left)

        // 2️⃣ right
        dfs(node.right)

        // 3️⃣ root
        result.push(node.val)
    }

    dfs(root)
    return result
}