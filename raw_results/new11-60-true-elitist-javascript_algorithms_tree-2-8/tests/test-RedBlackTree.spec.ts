export {}
import RedBlackTree from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('RedBlackTree', () => {
	it('test for RedBlackTree', async () => {
		const _RedBlackTreeV3kKysI = new RedBlackTree()
		const _metatqZHOR9 = {
		
	}
		const _nodeD44pE0I = {
			"meta": _metatqZHOR9
	}
		const _returnValuey4vm2L1 = await _RedBlackTreeV3kKysI.makeNodeRed(_nodeD44pE0I)
		const _metax3pXatW = {
		
	}
		const _nodeFVGAPzx = {
			"meta": _metax3pXatW
	}
		const _returnValuetO2J50 = await _RedBlackTreeV3kKysI.isNodeRed(_nodeFVGAPzx)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreesoFT54 = new RedBlackTree()
		const _nodeA6NF2qs = true;
		const _returnValueO1Fdr2C = await _RedBlackTreesoFT54.isNodeColored(_nodeA6NF2qs)
		const _nodeTINvCuF = 1.5112147147960258;
		const _returnValuehardfjl = await _RedBlackTreesoFT54.isNodeColored(_nodeTINvCuF)
		const _arrayValueuW6ZSrJ = "fOtykjLudd400iNvkAYW92fjDSp62QBbzzwHR3kuytb5opzAzC8neNaRiVwUY4ao54RoTqt2yZ1Q2VExg";
		const _arrayValueLQM9u3P = undefined;
		const _arrayValueu8sTNl4 = "qvmTVVMv0XgNJ7V5N6Ukk126daTRbVVws0TogElbXScLEoBztsbrKOSF2DPgeHXG7qGa";
		const _arrayValueERPsikR = [_arrayValueu8sTNl4]
		const _returnValuejlxhSls = [_arrayValueuW6ZSrJ, _arrayValueLQM9u3P, _arrayValueERPsikR]
		const _nodeF41X64y = () => { return _returnValuejlxhSls };
		const _returnValuektvq4Cs = await _RedBlackTreesoFT54.isNodeColored(_nodeF41X64y)
		const _rightqGUH9VT = {
		
	}
		const _returnValuemVLSkz9 = {
		
	}
		const _returnValuevIP3bNG = () => { return _returnValuemVLSkz9 };
		const _setRightLCXwxZ3 = () => { return _returnValuevIP3bNG };
		const _grandParentNodeUtRq1AW = {
			"right": _rightqGUH9VT,
		"setRight": _setRightLCXwxZ3
	}
		const _returnValuemDQxxGV = await _RedBlackTreesoFT54.rightLeftRotation(_grandParentNodeUtRq1AW)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeJE7m0Be = new RedBlackTree()
		const _rightJZVFvTn = {
		
	}
		const _returnValuemrBnGGQ = -1.7190231695720115;
		const _setRightGLBEb80 = () => { return _returnValuemrBnGGQ };
		const _grandParentNodejsfwo8a = {
			"right": _rightJZVFvTn,
		"setRight": _setRightGLBEb80
	}
		const _returnValueIFX6NSw = await _RedBlackTreeJE7m0Be.rightLeftRotation(_grandParentNodejsfwo8a)
		const _parentN4bOIVi = null;
		const _rightqPKwEoG = {
		
	}
		const _returnValueU7N4AGP = {
		
	}
		const _setRightzp4ir69 = () => { return _returnValueU7N4AGP };
		const _grandParentNodeVZAvnmz = {
			"parent": _parentN4bOIVi,
		"right": _rightqPKwEoG,
		"setRight": _setRightzp4ir69
	}
		const _returnValueIUj7gB = await _RedBlackTreeJE7m0Be.rightRightRotation(_grandParentNodeVZAvnmz)
		const _metaJNY1BtL = {
		
	}
		const _nodeGBNTteY = {
			"meta": _metaJNY1BtL
	}
		const _returnValueqGOSAaj = await _RedBlackTreeJE7m0Be.makeNodeBlack(_nodeGBNTteY)
		const _leftFHeNaVs = {
		
	}
		const _returnValuejvGa8Eo = undefined;
		const _returnValueOSevRYc = () => { return _returnValuejvGa8Eo };
		const _setLeftFH8qDif = () => { return _returnValueOSevRYc };
		const _grandParentNodeWjldih1 = {
			"left": _leftFHeNaVs,
		"setLeft": _setLeftFH8qDif
	}
		const _returnValueCWBE6f = await _RedBlackTreeJE7m0Be.leftRightRotation(_grandParentNodeWjldih1)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeiEv6XSs = new RedBlackTree()
		const _parentzUamJaP = null;
		const _righth1UDpG5 = {
		
	}
		const _returnValueS3QROSr = -8.680010798232303;
		const _setRightiO6zuP = () => { return _returnValueS3QROSr };
		const _grandParentNodeCN6fqcH = {
			"parent": _parentzUamJaP,
		"right": _righth1UDpG5,
		"setRight": _setRightiO6zuP
	}
		const _returnValueOMKjv1V = await _RedBlackTreeiEv6XSs.rightRightRotation(_grandParentNodeCN6fqcH)
		const _leftmw84Uyk = {
		
	}
		const _returnValueFxwneeE = "pEVIKqbPri8vpgZOYGPxOAJZ97x6O1XWyI9uxxpdeLxFQhpvgUqHG2JCi";
		const _setLeftnT8xopO = () => { return _returnValueFxwneeE };
		const _grandParentNodeWinMKDe = {
			"left": _leftmw84Uyk,
		"setLeft": _setLeftnT8xopO
	}
		const _returnValueAWgmU41 = await _RedBlackTreeiEv6XSs.leftRightRotation(_grandParentNodeWinMKDe)
		const _parentzSjWDg8 = {
		
	}
		const _uncleln7mFSV = {
		
	}
		const _nodepqQlYaZ = {
			"parent": _parentzSjWDg8,
		"uncle": _uncleln7mFSV
	}
		const _returnValueACHFl5D = await _RedBlackTreeiEv6XSs.balance(_nodepqQlYaZ)
		const _parentNQDOz7 = null;
		const _leftkJmwC6K = {
		
	}
		const _returnValueK5ddPi = -0.47366718594878776;
		const _setLeftenu3SVs = () => { return _returnValueK5ddPi };
		const _grandParentNodegVu0rS0 = {
			"parent": _parentNQDOz7,
		"left": _leftkJmwC6K,
		"setLeft": _setLeftenu3SVs
	}
		const _returnValueX1aWb4O = await _RedBlackTreeiEv6XSs.leftLeftRotation(_grandParentNodegVu0rS0)
		const _arrayValueLIXI45d = undefined;
		const _arrayValueLHvAJFW = "iSH3dIXzijCcluAlqE0ph84xtS2b9RciXyguilIgwhMTBC9k";
		const _returnValuejUneTc = undefined;
		const _arrayValueAaXFaTp = () => { return _returnValuejUneTc };
		const _nodetEpvInz = [_arrayValueLIXI45d, _arrayValueLHvAJFW, _arrayValueAaXFaTp]
		const _returnValueA4LFa3J = await _RedBlackTreeiEv6XSs.makeNodeBlack(_nodetEpvInz)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeiiprnJN = new RedBlackTree()
		const _valueXYYsjVH = true;
		const _returnValueW9TuBnl = await _RedBlackTreeiiprnJN.insert(_valueXYYsjVH)
		const _valuet2001Wh = true;
		const _returnValueWNM9O2L = await _RedBlackTreeiiprnJN.remove(_valuet2001Wh)
		const _arrayValueHh0Ydnw = null;
		const _arrayValuebBlrJU8 = {
		
	}
		const _arrayValuetwnEQP = null;
		const _parentvDCoh0e = [_arrayValueHh0Ydnw, _arrayValuebBlrJU8, _arrayValuetwnEQP]
		const _returnValueZ8BvBVz = null;
		const _arrayValueRVNlwug = () => { return _returnValueZ8BvBVz };
		const _arrayValuetDqpH5m = undefined;
		const _arrayValueN6VKlLR = [_arrayValuetDqpH5m]
		const _rightSQnbMEY = [_arrayValueRVNlwug, _arrayValueN6VKlLR]
		const _setRightp46Bp5 = true;
		const _grandParentNodekJQqwCk = {
			"parent": _parentvDCoh0e,
		"right": _rightSQnbMEY,
		"setRight": _setRightp46Bp5
	}
		const _returnValueICjfmQL = await _RedBlackTreeiiprnJN.rightRightRotation(_grandParentNodekJQqwCk)
		const _metaZ54JqiK = {
		
	}
		const _nodeaRsA2Zh = {
			"meta": _metaZ54JqiK
	}
		const _returnValueAK60wtw = await _RedBlackTreeiiprnJN.makeNodeBlack(_nodeaRsA2Zh)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreevF3DhjU = new RedBlackTree()
		const _parentvvIA1uN = null;
		const _leftJdZ2QU = {
		
	}
		const _returnValueiv1hKY = undefined;
		const _returnValueaZhabFy = () => { return _returnValueiv1hKY };
		const _setLeftqxDXeZ5 = () => { return _returnValueaZhabFy };
		const _grandParentNodedTZT1XS = {
			"parent": _parentvvIA1uN,
		"left": _leftJdZ2QU,
		"setLeft": _setLeftqxDXeZ5
	}
		const _returnValueHvl3z8 = await _RedBlackTreevF3DhjU.leftLeftRotation(_grandParentNodedTZT1XS)
		const _metaCL1SKRt = {
		
	}
		const _nodefoE4LaD = {
			"meta": _metaCL1SKRt
	}
		const _returnValuel0GWn1P = await _RedBlackTreevF3DhjU.makeNodeBlack(_nodefoE4LaD)
		const _metasmUni2K = {
		
	}
		const _nodetVFzYd = {
			"meta": _metasmUni2K
	}
		const _returnValueddrESG = await _RedBlackTreevF3DhjU.makeNodeBlack(_nodetVFzYd)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreenSh4OTX = new RedBlackTree()
		const _metaIkAGksp = {
		
	}
		const _nodeeR0k1xt = {
			"meta": _metaIkAGksp
	}
		const _returnValueVm9i1jN = await _RedBlackTreenSh4OTX.isNodeBlack(_nodeeR0k1xt)
		const _nodeILCcHXU = null;
		const _returnValuePdqoLVt = await _RedBlackTreenSh4OTX.isNodeBlack(_nodeILCcHXU)
		const _metaP6nPmyb = {
		
	}
		const _nodeunbvv3 = {
			"meta": _metaP6nPmyb
	}
		const _returnValuesbQYqrs = await _RedBlackTreenSh4OTX.makeNodeBlack(_nodeunbvv3)
		const _right2AkUxr = {
		
	}
		const _returnValuelRPYLW = undefined;
		const _setRightdJNmpi = () => { return _returnValuelRPYLW };
		const _grandParentNodeD8oxspE = {
			"right": _right2AkUxr,
		"setRight": _setRightdJNmpi
	}
		const _returnValuei89xFWg = await _RedBlackTreenSh4OTX.rightLeftRotation(_grandParentNodeD8oxspE)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeVhrM25g = new RedBlackTree()
		const _parentJzeCOGy = {
		
	}
		const _uncleWb4T1U7 = -9.641322031487526;
		const _nodeMrNWnTK = {
			"parent": _parentJzeCOGy,
		"uncle": _uncleWb4T1U7
	}
		const _returnValueJfXHmSt = await _RedBlackTreeVhrM25g.balance(_nodeMrNWnTK)
		const _returnValuepaSsnIo = undefined;
		const _value28AslE = () => { return _returnValuepaSsnIo };
		const _returnValuej72gQYe = await _RedBlackTreeVhrM25g.insert(_value28AslE)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreesctE30G = new RedBlackTree()
		const _valueaSLRTl3 = -7.6794126542326495;
		const _returnValueE6anYhh = await _RedBlackTreesctE30G.insert(_valueaSLRTl3)
		const _leftDdTfsl7 = {
		
	}
		const _returnValueonaPkS5 = true;
		const _setLeftEOuPyaJ = () => { return _returnValueonaPkS5 };
		const _grandParentNodep2A6TJo = {
			"left": _leftDdTfsl7,
		"setLeft": _setLeftEOuPyaJ
	}
		const _returnValuexulSJie = await _RedBlackTreesctE30G.leftRightRotation(_grandParentNodep2A6TJo)
		const _parentKDHAGEk = null;
		const _leftCNB4CjP = {
		
	}
		const _setLeftrOdA5LC = undefined;
		const _grandParentNodecFF8oJ9 = {
			"parent": _parentKDHAGEk,
		"left": _leftCNB4CjP,
		"setLeft": _setLeftrOdA5LC
	}
		const _returnValuelUauj6o = await _RedBlackTreesctE30G.leftLeftRotation(_grandParentNodecFF8oJ9)
		const _metazJi7HwD = {
		
	}
		const _firstNodevrrsQ0v = {
			"meta": _metazJi7HwD
	}
		const _metaaZBXwxU = {
		
	}
		const _secondNodeJDB7wJ = {
			"meta": _metaaZBXwxU
	}
		const _returnValueM54bcaM = await _RedBlackTreesctE30G.swapNodeColors(_firstNodevrrsQ0v, _secondNodeJDB7wJ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeQWIEhFa = new RedBlackTree()
		const _parentDvRkSkh = {
		
	}
		const _arrayValueEMfXjDt = true;
		const _arrayValueAr0dyWG = false;
		const _arrayValueHUh5n6 = "xmgItnxDwSh3p31Ygf";
		const _leftfouOT1U = [_arrayValueEMfXjDt, _arrayValueAr0dyWG, _arrayValueHUh5n6]
		const _returnValueG1jIrJp = false;
		const _setLeftCtN1RxW = () => { return _returnValueG1jIrJp };
		const _grandParentNodeWjFJQkX = {
			"parent": _parentDvRkSkh,
		"left": _leftfouOT1U,
		"setLeft": _setLeftCtN1RxW
	}
		const _returnValueGRempeZ = await _RedBlackTreeQWIEhFa.leftLeftRotation(_grandParentNodeWjFJQkX)
		const _valuecSF021V = null;
		const _returnValueQiVwG5 = await _RedBlackTreeQWIEhFa.remove(_valuecSF021V)
		const _nodet0YKub = "SXty9r9kRmyA43Hj2eqMMchrzffjAhJcnA6c1xYjpEDy4SOvJk";
		const _returnValuepR1F5jq = await _RedBlackTreeQWIEhFa.isNodeColored(_nodet0YKub)
		const _parentYANbQfC = {
		
	}
		const _returnValueHWjYw76 = "yQqXM9uglUXK";
		const _uncleDdCJhXo = () => { return _returnValueHWjYw76 };
		const _nodeXBDWEOR = {
			"parent": _parentYANbQfC,
		"uncle": _uncleDdCJhXo
	}
		const _returnValuesxHVMYp = await _RedBlackTreeQWIEhFa.balance(_nodeXBDWEOR)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreedmeZyRj = new RedBlackTree()
		const _metaNC5sxa = {
		
	}
		const _firstNodeIyLtNQW = {
			"meta": _metaNC5sxa
	}
		const _metagF4hiwH = {
		
	}
		const _secondNodeoSw2L6M = {
			"meta": _metagF4hiwH
	}
		const _returnValuey3kOPyP = await _RedBlackTreedmeZyRj.swapNodeColors(_firstNodeIyLtNQW, _secondNodeoSw2L6M)
		const _parentby0rkB5 = {
		
	}
		const _arrayValueCS2Sydv = -9.475509149197187;
		const _arrayValuevGS6eg2 = null;
		const _arrayValueZfHB96O = "UVXeCRHebVpsyae5EJ";
		const _leftKQTOnMA = [_arrayValueCS2Sydv, _arrayValuevGS6eg2, _arrayValueZfHB96O]
		const _returnValueCcXvwJ8 = -2.3067429385388394;
		const _setLefty5wlQgA = () => { return _returnValueCcXvwJ8 };
		const _grandParentNodeAuYcHB = {
			"parent": _parentby0rkB5,
		"left": _leftKQTOnMA,
		"setLeft": _setLefty5wlQgA
	}
		const _returnValue1ahRXt = await _RedBlackTreedmeZyRj.leftLeftRotation(_grandParentNodeAuYcHB)
		const _parentE0Zb2bN = {
		
	}
		const _uncleT2U5xgJ = "CMWaX2ffdFEVrfjhqLyFDaxOreN03Ab475RwXt0WY9yAeS5blzAvfAsWelK1W2G4hf3LBHYFH42KekAx3H2P10LrVxCEd3rU";
		const _nodeHwZXi38 = {
			"parent": _parentE0Zb2bN,
		"uncle": _uncleT2U5xgJ
	}
		const _returnValueBMVhdHw = await _RedBlackTreedmeZyRj.balance(_nodeHwZXi38)
		const _parentv2kUg3M = {
		
	}
		const _unclecLwr9HH = null;
		const _nodeyU8jYRW = {
			"parent": _parentv2kUg3M,
		"uncle": _unclecLwr9HH
	}
		const _returnValueRLC8od0 = await _RedBlackTreedmeZyRj.balance(_nodeyU8jYRW)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeiWVEHV = new RedBlackTree()
		const _parentOgQgwQj = {
		
	}
		const _righteNUscaZ = []
		const _setRightKomoZo = true;
		const _grandParentNodeNhy3Su = {
			"parent": _parentOgQgwQj,
		"right": _righteNUscaZ,
		"setRight": _setRightKomoZo
	}
		const _returnValueNYy8PXT = await _RedBlackTreeiWVEHV.rightRightRotation(_grandParentNodeNhy3Su)
		const _parentrdxEpzX = {
		
	}
		const _arrayValueoMsnrYb = undefined;
		const _leftUW7HJey = [_arrayValueoMsnrYb]
		const _returnValueUfffEzc = "MWjK1VeCPi3Vmtp0HtmMD5kdMJRyBJBPbU4VtXxijNimNL6qtUBgCnAmC9bdQSF0EFABqdkGBEADtPj5mCbPuncQ9mh4kQV";
		const _setLeftmp1s7OD = () => { return _returnValueUfffEzc };
		const _grandParentNodee0KhKez = {
			"parent": _parentrdxEpzX,
		"left": _leftUW7HJey,
		"setLeft": _setLeftmp1s7OD
	}
		const _returnValuelg0JcLU = await _RedBlackTreeiWVEHV.leftLeftRotation(_grandParentNodee0KhKez)
		const _arrayValuedJPaDE9 = "iuEwJ1Rs426fJWcVDz0KjXb";
		const _arrayValuelDq3oqu = "cmvMtfrhdG8O8X76uvbO4SExEO6LNofQqmES7YbtvbpRQVjPYlYATlKdho1egGSQW";
		const _arrayValueB5kxFZ = null;
		const _arrayValueElSj3Fn = [_arrayValuedJPaDE9, _arrayValuelDq3oqu, _arrayValueB5kxFZ]
		const _arrayValueE7CvJpO = 9.400211196296056;
		const _arrayValuejjrC80F = undefined;
		const _nodeVoYmXe = [_arrayValueElSj3Fn, _arrayValueE7CvJpO, _arrayValuejjrC80F]
		const _returnValueioBWsNA = await _RedBlackTreeiWVEHV.isNodeBlack(_nodeVoYmXe)
		const _valuePoYfOJ = true;
		const _returnValueLtttI80 = await _RedBlackTreeiWVEHV.insert(_valuePoYfOJ)
		const _leftyVjDmPp = {
		
	}
		const _returnValueW0YM8WF = null;
		const _setLeftf2VbOjh = () => { return _returnValueW0YM8WF };
		const _grandParentNodeSpH5M3l = {
			"left": _leftyVjDmPp,
		"setLeft": _setLeftf2VbOjh
	}
		const _returnValueiA6vtWN = await _RedBlackTreeiWVEHV.leftRightRotation(_grandParentNodeSpH5M3l)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeO17PlJi = new RedBlackTree()
		const _valueGaoRZvt = true;
		const _returnValueoOww6Zl = await _RedBlackTreeO17PlJi.insert(_valueGaoRZvt)
		const _valuevSZ1vd4 = "fRxadBG9EWgALgDi8A95xHuceHYS5JurcdS5o6dO2W6jw0JCVNnmiEWKxbhpKLDD2JK5Dxq";
		const _returnValueCammiM7 = await _RedBlackTreeO17PlJi.insert(_valuevSZ1vd4)
		const _valueNta2bFt = -5.728058409703411;
		const _returnValueZDvmX2 = await _RedBlackTreeO17PlJi.remove(_valueNta2bFt)
	});
})