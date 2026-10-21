/**
 * Name:Ekemini Nsikan Francis
 * Matric No: VUG-SEN-24-12466
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const beforeDummy = new ListNode(0);
    const afterDummy = new ListNode(0);
    let before = beforeDummy;
    let after = afterDummy;

    let curr = head;
    while (curr !== null) {
        if (curr.val < x) {
            before.next = curr;
            before = before.next;
        } else {
            after.next = curr;
            after = after.next;
        }
        curr = curr.next;
    }

    after.next = null;
    before.next = afterDummy.next;
    return beforeDummy.next;
};