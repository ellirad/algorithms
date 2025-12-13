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