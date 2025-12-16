import {TreeNode} from "./basic";

function sumPreorder(root: TreeNode | null): number {
    if (root === null) return 0

    const current = root.val

    const leftSum = sumPreorder(root.left)

    const rightSum = sumPreorder(root.right)

    return current + leftSum + rightSum
}

const tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4)),
    new TreeNode(3)
)

console.log(sumPreorder(tree))
