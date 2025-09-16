/*

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
	let slow = head;
	let fast = head;

	// fast moves twice as quickly as slow
	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// when fast reaches end, slow is in the middle
	return slow;
};


middleNode([1,2,3,4,5])