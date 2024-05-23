// Your code here
let fatherUl = document.querySelector("#parentLi")
let childs = fatherUl.childNodes


childs[3].parentNode.removeChild(childs[3])

console.log(childs)


