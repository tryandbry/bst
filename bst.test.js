import {expect} from 'chai';
import Bst from './bst';


describe('binary search tree',function(){
  let input = [5,3,8,1,12,2,6,50,10,9];
  let myBst;

  /*
  beforeEach('reset insertion array',function(){
    myBst = new Bst(input);
  });
  */

  it('has the expected structure',function(){
    myBst = new Bst();
    expect(myBst).to.have.keys('left','right','val');
  });

  it('accepts input',function(){
    myBst = new Bst(5);
    expect(myBst.val).to.equal(5);
    myBst.insert(3);
    expect(myBst.left.val).to.equal(3);
    myBst.insert(8);
    expect(myBst.right.val).to.equal(8);
    myBst.insert(1);
    expect(myBst.left.left.val).to.equal(1);
    myBst.insert(2);
    expect(myBst.left.left.right.val).to.equal(2);
  });

  it('handles duplicate inserts',function(){
    myBst = new Bst(5);
    myBst.insert(5);
    expect(myBst.val).to.equal(5);
    expect(myBst.left).to.be.null;
    expect(myBst.right).to.be.null;
  });
});
