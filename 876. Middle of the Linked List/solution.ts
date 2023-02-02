// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function middleNode(head: ListNode | null): ListNode | null {
  const getListLength = (list: ListNode) => {
    let i = 0;
    while (list.next !== null) {
      i++;
      list = list.next;
    }
    return i;
  };

  const len = getListLength(head);

  for (let i = 0; i < Math.round(len / 2); i++) {
    head = head.next;
  }
  return head;
}
