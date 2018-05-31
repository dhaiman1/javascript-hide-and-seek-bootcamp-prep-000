function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested div div div div');
}

function increaseRankBy(n) {
  
  const lis = document.querySelector('#app').querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n; 
  }
}

function deepestChild() {
  
  // Select our grand-node
  // set grand node to current node
  let currentNode = document.querySelector('#grand-node')
  
  //  in a loop check if current node has children
  while (currentNode.children.length > 0) {
    currentNode = currentNode.children[0]
  }
  return currentNode
  // if it does, set the child equal to current node
  // if it doesn't, then return that node
}