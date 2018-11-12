const PHRASING_TAGS = [
  'abbr',
  'audio',
  'b',
  'bdo',
  'br',
  'button',
  'canvas',
  'cite',
  'code',
  'command',
  'data',
  'datalist',
  'dfn',
  'em',
  'embed',
  'i',
  'iframe',
  'img',
  'input',
  'kbd',
  'keygen',
  'label',
  'mark',
  'math',
  'meter',
  'noscript',
  'object',
  'output',
  'progress',
  'q',
  'ruby',
  'samp',
  'script',
  'select',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'textarea',
  'time',
  'var',
  'video',
  'wbr',
  '#text'
];

const LIST_TAGS = ['ol', 'ul', 'menu'];

const LIST_ITEM_TAGS = ['li', 'menuitem'];

export function isNonWhiteSpace(node) {
  if (node.nodeType === 3) {
    return !!node.textContent.trim().length;
  }
  return true;
}

export function isHyperlink(node) {
  return ['a', 'area'].includes(node.nodeName.toLowerCase());
}

export function isPhrasing(node) {
  return isNonWhiteSpace(node) && PHRASING_TAGS.includes(node.nodeName.toLowerCase());
}

export function isPhrasingOrHyperlink(node) {
    return isPhrasing(node) || isHyperlink(node);
}

export function isList(node) {
  return LIST_TAGS.includes(node.nodeName.toLowerCase());
}

export function isListItem(node) {
  return LIST_ITEM_TAGS.includes(node.nodeName.toLowerCase());
}