
export default class Bst {
  constructor(seed){
    this.left = null;
    this.right = null;
    this.val = seed;
  }

  insert(val){
    if(val === this.val) return val;
    else if(val < this.val){
      if(this.left) return this.left.insert(val);
      else {
        this.left = new Bst(val);
        return val;
      }
    }
    else if(val > this.val){
      if(this.right) this.right.insert(val);
      else {
        this.right = new Bst(val);
        return val;
      }
    }
    else throw 'Bst.insert: unexpected value: ' + val;
  }

  match(val){
    if(val === this.val) return this;
    else if(val < this.val){
      if(this.left) return this.left.match(val);
      else return null;
    }
    else if(val > this.val){
      if(this.right) return this.right.match(val);
      else return null;
    }
    else throw 'Bst.match: unexpected value: ' + val;
  }
}
