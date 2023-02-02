function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;
  const map = new Map();
  let node = head;
  let i = 0;
  while (node.next !== null) {
    if (map.has(node)) return node;
    i++;
    map.set(node, i);
    node = node.next;
  }
  return null;
}
