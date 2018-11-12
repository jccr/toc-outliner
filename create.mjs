import { walk } from './walk';
import {
  isHyperlink,
  isList,
  isListItem,
  isNonWhiteSpace,
  isPhrasing,
  isPhrasingOrHyperlink,
} from './util';

function peek(arr) {
  return arr.slice(-1)[0];
}

function printNodeData(nodeData) {
  if (!nodeData) {
    return;
  }
  if (nodeData.node.nodeType === 3) {
    return [nodeData.node.textContent.trim(), nodeData.level];
  }
  return [
    `<${nodeData.node.nodeName.toLowerCase()} ${nodeData.node.id}>`,
    nodeData.level,
  ];
}

function printNode(node) {
  // if (node.nodeType === 3) {
  //   return node.textContent.trim();
  // }
  return `<${node.nodeName.toLowerCase()}>`;
}

export function create(root) {
  let listNesting = -1;
  let nesting = -1;
  let stack = [];
  let tree = [];

  walk(
    root,
    function ENTER(node) {
      //console.log('->', node);

      nesting++;
      if (isList(node)) {
        listNesting++;
      }

      function PRINT() {
        console.log(
          nesting.toString(),
          '  '.repeat(listNesting >= 0 ? listNesting : 0),
          printNode(node),
          node.textContent.trim(),
          node.alt ? node.alt : ''
        );
      }

      if (isHyperlink(node)) {
        stack.push(node);
        PRINT();
        return;
      }

      const stackTop = peek(stack);
      if (stackTop && isPhrasingOrHyperlink(stackTop)) {
        return;
      }

      if (isPhrasingOrHyperlink(node)) {
        PRINT();
        stack.push(node);
      }

      // if (isListItem(node)) {
      //   tree.push({ node });
      // }
    },
    function EXIT(node) {
      //console.log('<-', node);

      nesting--;

      const stackTop = peek(stack);
      if (stackTop === node) {
        stack.pop();
      }

      if (stackTop && isPhrasingOrHyperlink(stackTop)) {
        return;
      }

      if (isList(node)) {
        listNesting--;
      }
    },
  );

  //console.log(tree.map(printNode));
}
