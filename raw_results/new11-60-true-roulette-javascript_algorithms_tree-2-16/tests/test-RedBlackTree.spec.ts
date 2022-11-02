export {}
import RedBlackTree from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
import BinaryTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
import BinarySearchTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('RedBlackTree', () => {
	it('test for RedBlackTree', async () => {
		const _RedBlackTreevR0fxbK = new RedBlackTree()
		const _returnValueVwHxmhW = undefined;
		const _nodeCGnGMVc = () => { return _returnValueVwHxmhW };
		const _returnValueJVYPhcl = await _RedBlackTreevR0fxbK.isNodeColored(_nodeCGnGMVc)
		const _grandParentNodeVzFLzK4 = "Sr8qvN8CU3QE8Yl2alkT6PdS8WM4TNBXlFSXvavF1NNNnDA3l9XTGcskTPaZHvDOuYgJ4LD";
		const _returnValuebaXJ3MU = await _RedBlackTreevR0fxbK.leftLeftRotation(_grandParentNodeVzFLzK4)
		const _noderzvqRA2 = undefined;
		const _returnValuexgUfCoG = await _RedBlackTreevR0fxbK.isNodeColored(_noderzvqRA2)
		const _valueNazIjUq = {
		
	}
		const _nodewXDlu8x = new BinaryTreeNode(_valueNazIjUq)
		const _returnValueVXOzoph = await _nodewXDlu8x.balanceFactor()
		const _nodeToReplaceJfBQiY7 = undefined;
		const _replacementNodekjze4eD = {
		
	}
		const _returnValueffufkL2 = await _nodewXDlu8x.replaceChild(_nodeToReplaceJfBQiY7, _replacementNodekjze4eD)
		const _sourceNodesMAzXDH = "DC";
		const _valueppa4tjI = null;
		const _returnValueQRsqoyX = undefined;
		const _compareFunctionBidsUO0 = () => { return _returnValueQRsqoyX };
		const _targetNodePANF8rD = new BinarySearchTreeNode(_valueppa4tjI, _compareFunctionBidsUO0)
		const _valueEzT25i = null;
		const _returnValue87GoSz = await _targetNodePANF8rD.find(_valueEzT25i)
		const _arrayValueol3waz2 = null;
		const _arrayValuetWoByYw = -9.156158961028298;
		const _value5Dd4hX = [_arrayValueol3waz2, _arrayValuetWoByYw]
		const _returnValueLSzhiT7 = await _targetNodePANF8rD.remove(_value5Dd4hX)
		const _valueqCNlgQJ = "tp1DNXbGQs66D7i4iNQUxtBe1v";
		const _returnValueMpU0y1f = await _targetNodePANF8rD.insert(_valueqCNlgQJ)
		const _valuePfksehb = "OmCKJD2X8IRxmVVeSnruHGlP8aOVBD3AeBH2EBgObHtJCS8BWKGLltTBx7AvJlQCQrlqPyoFwUqc5UIGdBDuRZAz";
		const _returnValueKj0vOsP = await _targetNodePANF8rD.contains(_valuePfksehb)
		const _valuew6o1RVj = undefined;
		const _returnValueRyyiFkb = await _targetNodePANF8rD.insert(_valuew6o1RVj)
		const _returnValueDUGPQvx = await _nodewXDlu8x.copyNode(_sourceNodesMAzXDH, _targetNodePANF8rD)
		const _nodetyMsHKu = {
		
	}
		const _returnValueNoXX3K4 = await _nodewXDlu8x.setLeft(_nodetyMsHKu)
		const _returnValueOUcCCXp = await _RedBlackTreevR0fxbK.makeNodeRed(_nodewXDlu8x)
		const _grandParentNodestg1ja = "XoL6fob58QQbSddlvywtWn559AfiVX7YT37rFPAHVIxUPkGH6toxdcD11KbmfFUVdkgpWoutozMTJq01VvJzXS8";
		const _returnValuezMGg1k9 = await _RedBlackTreevR0fxbK.rightLeftRotation(_grandParentNodestg1ja)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeopAMyl = new RedBlackTree()
		const _arrayValueeGivgFi = undefined;
		const _arrayValuebQUJ4Wq = 4.643772014777907;
		const _arrayValuewCjzBCO = 4.371301082258103;
		const _arrayValue3tkOOk = []
		const _arrayValueX1U5i7F = "SHAfou2Ca7mIbuQUt5hoMNVl6cSHIHvIRwbIMnn";
		const _nodefDiagE6 = [_arrayValueeGivgFi, _arrayValuebQUJ4Wq, _arrayValuewCjzBCO, _arrayValue3tkOOk, _arrayValueX1U5i7F]
		const _returnValueeqEhsA = await _RedBlackTreeopAMyl.balance(_nodefDiagE6)
		const _valueJ03jTth = "ITiHtHGUyrJLqY23D30CwyPnQ1EqrteQfdpNW06Q2ROPkadtX7Pvjg";
		const _returnValueg6kLvMt = await _RedBlackTreeopAMyl.remove(_valueJ03jTth)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreexKBd8my = new RedBlackTree()
		const _returnValued2c49g = undefined;
		const _grandParentNodeIW4s6cj = () => { return _returnValued2c49g };
		const _returnValueReJboHY = await _RedBlackTreexKBd8my.leftRightRotation(_grandParentNodeIW4s6cj)
		const _grandParentNodebU8cwHT = "EBxXwUQU4g8Q2NxjmzkKFKyEOU5iZTVkJIxiojSDuKYBGQRUYDFNEaFUIzNeVE0Xdqlqxa6Rvdx";
		const _returnValuefDDXaUd = await _RedBlackTreexKBd8my.rightLeftRotation(_grandParentNodebU8cwHT)
		const _valuepvKDpQ = undefined;
		const _nodeONVH2oD = new BinaryTreeNode(_valuepvKDpQ)
		const _nodeHrwSvqf = true;
		const _returnValuevFG3zOs = await _nodeONVH2oD.setRight(_nodeHrwSvqf)
		const _returnValuepYj5vtR = await _RedBlackTreexKBd8my.makeNodeBlack(_nodeONVH2oD)
		const _returnValueRnH9tW = null;
		const _arrayValueJf1zUp = () => { return _returnValueRnH9tW };
		const _arrayValuelT3mP43 = false;
		const _arrayValueJEU2ZjU = [_arrayValueJf1zUp, _arrayValuelT3mP43]
		const _arrayValueBu42fDF = undefined;
		const _grandParentNodeyWa1fLZ = [_arrayValueJEU2ZjU, _arrayValueBu42fDF]
		const _returnValuean9lMqh = await _RedBlackTreexKBd8my.rightLeftRotation(_grandParentNodeyWa1fLZ)
		const _arrayValueAgw7GYQ = 8.529508398726971;
		const _arrayValuef4PvVSm = true;
		const _arrayValueKxQuA9f = -7.4189318227418415;
		const _grandParentNodeQT2Ooi = [_arrayValueAgw7GYQ, _arrayValuef4PvVSm, _arrayValueKxQuA9f]
		const _returnValueZT5BTZq = await _RedBlackTreexKBd8my.rightRightRotation(_grandParentNodeQT2Ooi)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeysYhemv = new RedBlackTree()
		const _nodeA7kjNJZ = "vA6";
		const _returnValueUb9jb7k = await _RedBlackTreeysYhemv.makeNodeRed(_nodeA7kjNJZ)
		const _grandParentNodeQnXYpm = "XObWjTHPx7KpKcmBOm2gz2N3mKFWBDwX8WxhSOkps5w3F5p6oHCjiICPIOvIi2UhwWQFKQ3JzYEGWOdeGy";
		const _returnValueerqYaoo = await _RedBlackTreeysYhemv.rightRightRotation(_grandParentNodeQnXYpm)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreewPWzc4C = new RedBlackTree()
		const _rightRd82FRL = {
		
	}
		const _returnValueWqHBBir = undefined;
		const _setRightYLalnD1 = () => { return _returnValueWqHBBir };
		const _grandParentNodeeIw05PY = {
			"right": _rightRd82FRL,
		"setRight": _setRightYLalnD1
	}
		const _returnValueZVPsJTv = await _RedBlackTreewPWzc4C.rightLeftRotation(_grandParentNodeeIw05PY)
		const _valuekJjPxp = null;
		const _arrayValuedOvSXP1 = true;
		const _arrayValueDbjaQVs = -1.6785723320863912;
		const _arrayValuexlpwmXc = null;
		const _returnValuerkZVnXJ = [_arrayValuedOvSXP1, _arrayValueDbjaQVs, _arrayValuexlpwmXc]
		const _keyCallbackcu0pInq = () => { return _returnValuerkZVnXJ };
		const _grandParentNodeWAAgcKH = new DisjointSetItem(_valuekJjPxp, _keyCallbackcu0pInq)
		const _returnValuerKaT0Xv = await _grandParentNodeWAAgcKH.getRank()
		const _returnValuepKuJVzN = await _RedBlackTreewPWzc4C.leftLeftRotation(_grandParentNodeWAAgcKH)
		const _returnValuelYwg6fi = undefined;
		const _nodexYvBnez = () => { return _returnValuelYwg6fi };
		const _returnValueOmNAbTq = await _RedBlackTreewPWzc4C.isNodeRed(_nodexYvBnez)
		const _nodeo973sda = "5q6WoyxXCYmbLMMXWpUcHssjtev5j9FcFHn5d6Ozq5Rage1D1abDQ2tvz7SexTFCgOmc";
		const _returnValueWnalcQ1 = await _RedBlackTreewPWzc4C.balance(_nodeo973sda)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeAkVQMUi = new RedBlackTree()
		const _grandParentNodesvYMoDG = "14WgFvLeleeP21Q8jqGYXORuFmCyS5UtiyJW7DTQs8lzOrhPYKhOsEh5Jdi9tArgIFNkh8";
		const _returnValueOYZ1iMF = await _RedBlackTreeAkVQMUi.leftLeftRotation(_grandParentNodesvYMoDG)
		const _valuekdQDjM2 = null;
		const _returnValuev09lzNS = await _RedBlackTreeAkVQMUi.remove(_valuekdQDjM2)
		const _value18Flbi = "8mnv1CMov28Z3VYuXJVTLF8Du4DD6Z9baGYV9StOQ3BcySPgKw3TS";
		const _grandParentNodecJvSIvk = new BinaryTreeNode(_value18Flbi)
		const _nodeFYM7JbX = {
		
	}
		const _returnValuezHAOq6a = await _grandParentNodecJvSIvk.setLeft(_nodeFYM7JbX)
		const _returnValueeDUalE = await _RedBlackTreeAkVQMUi.rightRightRotation(_grandParentNodecJvSIvk)
		const _valueQDMEdih = {
		
	}
		const _grandParentNodeSUkx622 = new BinaryTreeNode(_valueQDMEdih)
		const _returnValueAMZnynb = await _grandParentNodeSUkx622.uncle()
		const _returnValueGHHiVgp = await _grandParentNodeSUkx622.balanceFactor()
		const _returnValueBhnW1RC = await _RedBlackTreeAkVQMUi.rightLeftRotation(_grandParentNodeSUkx622)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreefTay5Jf = new RedBlackTree()
		const _valueQHEySP9 = "C0Si3VtGxkWoeaIkkQ3czkWfEovgR93fiBg0yfwPzYepE7u9ONwdWgoPCdJaFPnYuS90eof3mGneWLLjwSgR";
		const _returnValueyrbDNtH = await _RedBlackTreefTay5Jf.remove(_valueQHEySP9)
		const _returnValueydGS0Dz = true;
		const _grandParentNodeYC4Jex = () => { return _returnValueydGS0Dz };
		const _returnValueaxE4dNv = await _RedBlackTreefTay5Jf.rightRightRotation(_grandParentNodeYC4Jex)
		const _arrayValuepc7wvDH = undefined;
		const _parentCbgfmko = [_arrayValuepc7wvDH]
		const _rightPrjISkS = {
		
	}
		const _returnValueZEAVXGi = true;
		const _setRightRQyO4lr = () => { return _returnValueZEAVXGi };
		const _grandParentNodeec5le7 = {
			"parent": _parentCbgfmko,
		"right": _rightPrjISkS,
		"setRight": _setRightRQyO4lr
	}
		const _returnValuesoNJCWi = await _RedBlackTreefTay5Jf.rightRightRotation(_grandParentNodeec5le7)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeRjIFbEb = new RedBlackTree()
		const _metanrJqja6 = {
		
	}
		const _nodeZYamZWa = {
			"meta": _metanrJqja6
	}
		const _returnValueJ95Z2Pm = await _RedBlackTreeRjIFbEb.makeNodeBlack(_nodeZYamZWa)
		const _nodeidgWkN = undefined;
		const _returnValuew8uYuIU = await _RedBlackTreeRjIFbEb.isNodeColored(_nodeidgWkN)
		const _arrayValuejwvChLo = true;
		const _arrayValueh0YDG0y = "cEG36jp";
		const _arrayValueWaZhv23 = null;
		const _noden4IvKbm = [_arrayValuejwvChLo, _arrayValueh0YDG0y, _arrayValueWaZhv23]
		const _returnValueudayGQn = await _RedBlackTreeRjIFbEb.makeNodeRed(_noden4IvKbm)
		const _valueBN5g172 = null;
		const _compareFunctiondXGiE8n = undefined;
		const _grandParentNodeE4THKyd = new BinarySearchTreeNode(_valueBN5g172, _compareFunctiondXGiE8n)
		const _valueI5mFJoR = "iCCD9BFhBtcAWb1PTsoKeUguye12TKNuuyxnINqOsBXsWLL4GQgso7Q19v54LdQ1LWyJPAlx8Oz3D73b";
		const _returnValue1tQgBx = await _grandParentNodeE4THKyd.contains(_valueI5mFJoR)
		const _valueVCOL7rL = true;
		const _returnValueIyupWIU = await _grandParentNodeE4THKyd.remove(_valueVCOL7rL)
		const _valueXePTSjt = false;
		const _returnValueqiOPKGi = await _grandParentNodeE4THKyd.contains(_valueXePTSjt)
		const _valueouE3Oi9 = false;
		const _returnValue9hPEBb = await _grandParentNodeE4THKyd.find(_valueouE3Oi9)
		const _returnValueqqmVqnK = await _RedBlackTreeRjIFbEb.rightLeftRotation(_grandParentNodeE4THKyd)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeNhVRHx = new RedBlackTree()
		const _returnValueLFO47ny = 2.64566121662137;
		const _grandParentNodepjNmjOR = () => { return _returnValueLFO47ny };
		const _returnValuehYOK5N = await _RedBlackTreeNhVRHx.rightRightRotation(_grandParentNodepjNmjOR)
		const _nodel5vlZjr = "eVUxjcvVYU2h3rrfiVb5QkGdVbZ1NigrmY8xbhkJ8JR91";
		const _returnValueXajA5S9 = await _RedBlackTreeNhVRHx.makeNodeBlack(_nodel5vlZjr)
		const _arrayValueU58r4H6 = "zMWI2SvU7xuY";
		const _arrayValueSE7hPfN = {
		
	}
		const _arrayValuefcIv4HE = 3.072272662943858;
		const _arrayValueLlV2wm9 = [_arrayValueSE7hPfN, _arrayValuefcIv4HE]
		const _returnValueE3Uaqu1 = [_arrayValueU58r4H6, _arrayValueLlV2wm9]
		const _valued1qiZw = () => { return _returnValueE3Uaqu1 };
		const _returnValueu35E5xN = await _RedBlackTreeNhVRHx.remove(_valued1qiZw)
		const _arrayValueU7PvqY = false;
		const _arrayValueVn9WcZb = "DxdhZZlafco1Al0XxG20mEOvjOFzZaCa";
		const _arrayValueFGrDJK = [_arrayValueU7PvqY, _arrayValueVn9WcZb]
		const _arrayValueLl4V8F = {
		
	}
		const _nodeztpZHVV = [_arrayValueFGrDJK, _arrayValueLl4V8F]
		const _returnValuef7S2FBj = await _RedBlackTreeNhVRHx.makeNodeBlack(_nodeztpZHVV)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreebdzBSbj = new RedBlackTree()
		const _parentt2M7iRV = "beOLvA5bOupU59mMBzObrWjHRJqaI2eGcntve2D92If9ZQ77m1gKYrtOHt7SQ4emrdpnjJ0XMxqT6bkQYzSsAr";
		const _leftp9uGMVx = {
		
	}
		const _returnValuec4aPsld = undefined;
		const _setLeftKAp9dI = () => { return _returnValuec4aPsld };
		const _grandParentNodePaa7PFb = {
			"parent": _parentt2M7iRV,
		"left": _leftp9uGMVx,
		"setLeft": _setLeftKAp9dI
	}
		const _returnValueBH4qi0r = await _RedBlackTreebdzBSbj.leftLeftRotation(_grandParentNodePaa7PFb)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeQYqgs0P = new RedBlackTree()
		const _metahjc6nfh = {
		
	}
		const _firstNodemCSptps = {
			"meta": _metahjc6nfh
	}
		const _metaFtpppzq = {
		
	}
		const _secondNodejmiwFnO = {
			"meta": _metaFtpppzq
	}
		const _returnValueA8dhLKp = await _RedBlackTreeQYqgs0P.swapNodeColors(_firstNodemCSptps, _secondNodejmiwFnO)
		const _valueGUrwq5 = null;
		const _nodeThSGzh = new BinaryTreeNode(_valueGUrwq5)
		const _returnValueUnh1aIJ = await _nodeThSGzh.leftHeight()
		const _returnValueKQXKLZu = await _nodeThSGzh.height()
		const _returnValueZB913Wm = await _nodeThSGzh.traverseInOrder()
		const _returnValueLZGVdFm = await _RedBlackTreeQYqgs0P.makeNodeBlack(_nodeThSGzh)
		const _arrayValueUxbfoqw = 5.930791538318987;
		const _returnValueJeSScp4 = [_arrayValueUxbfoqw]
		const _arrayValuejZmX5kz = () => { return _returnValueJeSScp4 };
		const _arrayValueUTgDKN3 = {
		
	}
		const _nodelbDwPtl = [_arrayValuejZmX5kz, _arrayValueUTgDKN3]
		const _returnValueaP1Ggut = await _RedBlackTreeQYqgs0P.isNodeRed(_nodelbDwPtl)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreec8d2TcO = new RedBlackTree()
		const _valuehwM0pDJ = -4.160859851201605;
		const _returnValueBRdLNv = await _RedBlackTreec8d2TcO.insert(_valuehwM0pDJ)
		const _valueNOHiED = undefined;
		const _returnValueur7TUiV = await _RedBlackTreec8d2TcO.remove(_valueNOHiED)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreevlzw5oh = new RedBlackTree()
		const _valuePIviWcL = null;
		const _returnValuepWDhwNY = 3.9806218940550195;
		const _keyCallback5t6I1Z = () => { return _returnValuepWDhwNY };
		const _grandParentNodeY2Jy0eN = new DisjointSetItem(_valuePIviWcL, _keyCallback5t6I1Z)
		const _returnValuewv46oM = await _grandParentNodeY2Jy0eN.isRoot()
		const _returnValue7uvYR2 = await _grandParentNodeY2Jy0eN.isRoot()
		const _valueHvqVN6e = undefined;
		const _returnValueuWDBO41 = "yUCguHRW9HjpRGjTVoIwzFOGdQFUcBV2NyX5sfCiGCOSlAoMxgeIKC9SjwcsdWDu3Sqdp56cP1J";
		const _keyCallbacknn4whMv = () => { return _returnValueuWDBO41 };
		const _parentItemCBWuJ83 = new DisjointSetItem(_valueHvqVN6e, _keyCallbacknn4whMv)
		const _returnValuexJ8hCod = await _parentItemCBWuJ83.getRoot()
		const _returnValueCantwe = await _parentItemCBWuJ83.isRoot()
		const _returnValuebUUsC0S = await _parentItemCBWuJ83.getRoot()
		const _forceSettingParentChildIV37KFn = true;
		const _returnValuepS2Q6WF = await _grandParentNodeY2Jy0eN.setParent(_parentItemCBWuJ83, _forceSettingParentChildIV37KFn)
		const _returnValueJFO10gB = await _RedBlackTreevlzw5oh.rightRightRotation(_grandParentNodeY2Jy0eN)
		const _arrayValuek0WCphO = null;
		const _arrayValueNFnBJ7b = "UoFB7C105LI8dDSMzw9WE";
		const _arrayValueMbBLCA3 = "Q8A6AUHtUW3DjbizPEsrNddjns9sWCQhtJfWFo3FVOc4oATdrmcgAKzgOp";
		const _nodeTY4wCfe = [_arrayValuek0WCphO, _arrayValueNFnBJ7b, _arrayValueMbBLCA3]
		const _returnValuegQ2n8bK = await _RedBlackTreevlzw5oh.isNodeRed(_nodeTY4wCfe)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeIpTgOqm = new RedBlackTree()
		const _valuebiB5BNd = 6.419940456699635;
		const _returnValueRmlPhZC = await _RedBlackTreeIpTgOqm.insert(_valuebiB5BNd)
		const _valueccwPQOC = null;
		const _returnValueicd3KQ1 = await _RedBlackTreeIpTgOqm.insert(_valueccwPQOC)
		const _arrayValueXMxRXeB = 2.8341811114162496;
		const _arrayValueddAmoF7 = undefined;
		const _arrayValuedMV9jBe = "SrGFhu4KvjuTvxbSLKg3kU3tiaORGnZatRBnYs7IJOE3SS7SY1cHM98AFNIh1A6osyxUxQsvTOD5Jp4PR3d2gTMiBSSgU1MFa0";
		const _arrayValueMqO7cOc = 0.5296695026197806;
		const _arrayValueeZcCpUB = {
		
	}
		const _arrayValuevqhmXIn = "J2lArhEmFzMioqPKtnE9rT2HPgK6oRhPLFUvKamVy1bgdYyc2lidmEvQnFvkAt9u";
		const _arrayValueZ0eAPQX = null;
		const _arrayValueMqaKpbe = [_arrayValueMqO7cOc, _arrayValueeZcCpUB, _arrayValuevqhmXIn, _arrayValueZ0eAPQX]
		const _arrayValuehItpIHp = true;
		const _returnValueG1SVA74 = undefined;
		const _arrayValueUjD3drt = () => { return _returnValueG1SVA74 };
		const _arrayValuen5TvR6 = [_arrayValueMqaKpbe, _arrayValuehItpIHp, _arrayValueUjD3drt]
		const _arrayValueAfpVyJe = "BvSbVqunt";
		const _grandParentNodeHTItEc0 = [_arrayValueXMxRXeB, _arrayValueddAmoF7, _arrayValuedMV9jBe, _arrayValuen5TvR6, _arrayValueAfpVyJe]
		const _returnValueTq3YzkV = await _RedBlackTreeIpTgOqm.rightLeftRotation(_grandParentNodeHTItEc0)
		const _nodeeTgNir2 = "fWb3HUT1pLq5X11NDHZHozta4xF2IfulXArFwehJCIdD3zabDNm9AXZlqhXg7JNP1jN9xNGbXMc";
		const _returnValuegFpMVXN = await _RedBlackTreeIpTgOqm.makeNodeRed(_nodeeTgNir2)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeZVS1aiY = new RedBlackTree()
		const _valuedL8f9UE = -8.939403876885061;
		const _compareFunctionnufr6Gq = undefined;
		const _grandParentNodeBCoqPE = new BinarySearchTreeNode(_valuedL8f9UE, _compareFunctionnufr6Gq)
		const _arrayValueFThccS = undefined;
		const _arrayValuex2gfcxy = {
		
	}
		const _arrayValueKCww1d = null;
		const _valueO1943BI = [_arrayValueFThccS, _arrayValuex2gfcxy, _arrayValueKCww1d]
		const _returnValuehyLqs9q = await _grandParentNodeBCoqPE.find(_valueO1943BI)
		const _valuef5GzeIA = null;
		const _returnValueObvbkmQ = await _grandParentNodeBCoqPE.insert(_valuef5GzeIA)
		const _arrayValuemVXiYJ4 = undefined;
		const _arrayValuevWNL8Rv = null;
		const _arrayValueCTwQlJa = false;
		const _returnValuevvYl6MO = [_arrayValuemVXiYJ4, _arrayValuevWNL8Rv, _arrayValueCTwQlJa]
		const _arrayValueCyVjjvS = () => { return _returnValuevvYl6MO };
		const _arrayValuenK1KoSO = 4.455489232243718;
		const _arrayValuef5w18iH = [_arrayValueCyVjjvS, _arrayValuenK1KoSO]
		const _valuenQ734XS = [_arrayValuef5w18iH]
		const _returnValueqQM3OVp = await _grandParentNodeBCoqPE.find(_valuenQ734XS)
		const _returnValueOSsjohg = await _RedBlackTreeZVS1aiY.rightRightRotation(_grandParentNodeBCoqPE)
		const _returnValuefdsYpER = true;
		const _nodely2PwN0 = () => { return _returnValuefdsYpER };
		const _returnValueuP8qmRH = await _RedBlackTreeZVS1aiY.makeNodeRed(_nodely2PwN0)
		const _rightFtd7FUh = {
		
	}
		const _returnValueMJWVLJK = undefined;
		const _setRightDV98Yw0 = () => { return _returnValueMJWVLJK };
		const _grandParentNodewHoR9mn = {
			"right": _rightFtd7FUh,
		"setRight": _setRightDV98Yw0
	}
		const _returnValuethREhO2 = await _RedBlackTreeZVS1aiY.rightLeftRotation(_grandParentNodewHoR9mn)
		const _valueqOtTJU = 7.600762002568292;
		const _returnValueytEH5gv = await _RedBlackTreeZVS1aiY.remove(_valueqOtTJU)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeO5WuTbh = new RedBlackTree()
		const _valueBEDVyFE = null;
		const _compareFunctionCxylak = undefined;
		const _grandParentNodecemH2wN = new BinarySearchTreeNode(_valueBEDVyFE, _compareFunctionCxylak)
		const _arrayValueKpPrz3e = "uDbEg6lCP4Syw12Q";
		const _arrayValuegQD7XU = "VDEd9J5HG95rj1e2FY5JF";
		const _valuedsmDUkx = [_arrayValueKpPrz3e, _arrayValuegQD7XU]
		const _returnValueF0KIFv4 = await _grandParentNodecemH2wN.find(_valuedsmDUkx)
		const _valueX3Iqezx = 2.174793169526847;
		const _returnValuexvETWr = await _grandParentNodecemH2wN.contains(_valueX3Iqezx)
		const _returnValueZ1VrKBV = await _grandParentNodecemH2wN.findMin()
		const _valueUuPn1z = 1.7503839799611463;
		const _returnValueetp5Id3 = await _grandParentNodecemH2wN.insert(_valueUuPn1z)
		const _valueBT1fpV = null;
		const _returnValueFxSyMVd = await _grandParentNodecemH2wN.insert(_valueBT1fpV)
		const _returnValuekCfim33 = await _RedBlackTreeO5WuTbh.leftLeftRotation(_grandParentNodecemH2wN)
	});
})