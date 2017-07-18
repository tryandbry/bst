import {expect} from 'chai';
import Bst from './bst';

describe('binary search tree',function(){
  let myBst;

  describe('Bst.insert',function(){
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

  describe('Bst.match',function(){
    let input = [5,3,8,1,12,2,6,50,10,9];

    beforeEach('reset myBst array',function(){
      myBst = new Bst(input.shift());
      input.forEach(e => {
        myBst.insert(e);
      });
    });

    it('matches values',function(){
      expect(myBst.match(5)).to.be.an.instanceOf(Bst);
      expect(myBst.match(5).val).to.equal(5);
      expect(myBst.match(12)).to.be.an.instanceOf(Bst);
      expect(myBst.match(12).val).to.equal(12);
      expect(myBst.match(25)).to.be.null;
    });
  });
});
