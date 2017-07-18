import {expect} from 'chai';
import Bst from './bst';
import {spy} from 'sinon';

describe('binary search tree',function(){
  let myBst;

  describe('structure',function(){
    it('has the expected structure',function(){
      myBst = new Bst();
      expect(myBst).to.have.keys('left','right','val');
    });

    it('has the expected methods',function(){
      myBst = new Bst();
      expect(myBst.insert).to.be.a('function');
      expect(myBst.match).to.be.a('function');
      expect(myBst).to.not.have.keys('insert','match');
    });

  });

  describe('Bst.insert',function(){
    it('accepts input',function(){
      myBst = new Bst(5);
      expect(myBst.val).to.equal(5);
      expect(myBst.insert(3)).to.be.an.instanceOf(Bst);
      expect(myBst.left.val).to.equal(3);
      expect(myBst.insert(8)).to.be.an.instanceOf(Bst);
      expect(myBst.right.val).to.equal(8);
      expect(myBst.insert(1)).to.be.an.instanceOf(Bst);
      expect(myBst.left.left.val).to.equal(1);
      expect(myBst.insert(2).val).to.equal(2);
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
    beforeEach('reset myBst array',function(){
      let input = [5,3,8,1,12,2,6,50,10,9];

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

    it('iterates the expected number of times',function(){
      let mySpy = spy(Bst.prototype,"match");

      myBst.match(5);
      expect(mySpy.callCount).to.be.below(2);
      mySpy.reset();

      myBst.match(9);
      expect(mySpy.callCount).to.be.below(6);
      mySpy.reset();

      myBst.match(6);
      expect(mySpy.callCount).to.be.below(4);

    });
  });
});
