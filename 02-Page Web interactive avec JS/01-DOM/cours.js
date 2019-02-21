let h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

let b = document.body; // La variable b contient l'objet body du DOM
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

// Accès au premier enfant du noeud body
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
