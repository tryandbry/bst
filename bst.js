
export default class Bst {
  constructor(seed){
    this.left = null;
    this.right = null;
    this.val = seed;
  }

  insert(val){
    if(val === this.val) return this;
    else if(val < this.val){
      if(this.left) return this.left.insert(val);
      else {
        this.left = new Bst(val);
        return this.left;
      }
    }
    else if(val > this.val){
      if(this.right) this.right.insert(val);
      else {
        this.right = new Bst(val);
        return this.right;
      }
    }
    else throw 'Bst.insert: unexpected value: ' + val;
  }

  match(val){
    if(val === this.val) return this;
    else if(val < this.val){
      return this.left ? this.left.match(val) : null;
    }
    else if(val > this.val){
      return this.right ? this.right.match(val) : null;
    }
    else throw 'Bst.match: unexpected value: ' + val;
  }
}
