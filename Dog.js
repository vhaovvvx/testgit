function dog(params) {
  this.stomach = [];
}

dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
};
