function cat(params) {
  this.stomtach = [];
}

cat.prototype.eat = function (mouse) {
  this.stomtach.push(mouse);
};

module.export = cat;
