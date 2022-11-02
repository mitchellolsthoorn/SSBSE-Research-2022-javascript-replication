export {}
import RedBlackTree from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import BinaryTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
import BinarySearchTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js";

describe('RedBlackTree', () => {
	it('test for RedBlackTree', async () => {
		const _RedBlackTreeS5bkCbS = new RedBlackTree()
		const _arrayValuejaIc3yu = "IF1QNDkDwbR9KpprnoLh5ToidmdCEU4wLQr";
		const _arrayValuemVeeuH3 = true;
		const _nodeMjOGm05 = [_arrayValuejaIc3yu, _arrayValuemVeeuH3]
		const _returnValuetXtFQkJ = await _RedBlackTreeS5bkCbS.makeNodeBlack(_nodeMjOGm05)
		const _nodexLOTPj = null;
		const _returnValueNtjGwHl = await _RedBlackTreeS5bkCbS.isNodeColored(_nodexLOTPj)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreektKbLQ = new RedBlackTree()
		const _valueps4ABbm = {
		
	}
		const _grandParentNodeaO1P885 = new BinaryTreeNode(_valueps4ABbm)
		const _nodeToReplaceBMkXrXg = -0.22769408493763166;
		const _replacementNodes6QJ7oF = {
		
	}
		const _returnValueXQ2eoNY = await _grandParentNodeaO1P885.replaceChild(_nodeToReplaceBMkXrXg, _replacementNodes6QJ7oF)
		const _nodeToRemovem7IRU2B = true;
		const _returnValuempaD4at = await _grandParentNodeaO1P885.removeChild(_nodeToRemovem7IRU2B)
		const _returnValueLBU2z5S = await _RedBlackTreektKbLQ.rightLeftRotation(_grandParentNodeaO1P885)
		const _valueLrsNMms = null;
		const _grandParentNodesmy5DDA = new BinaryTreeNode(_valueLrsNMms)
		const _valueSPISsW6 = {
		
	}
		const _sourceNodenV6Z0ln = new BinaryTreeNode(_valueSPISsW6)
		const _returnValuet14KgM = await _sourceNodenV6Z0ln.balanceFactor()
		const _valueSnKtrSj = {
		
	}
		const _returnValuecZlDal = await _sourceNodenV6Z0ln.setValue(_valueSnKtrSj)
		const _targetNodejrmFnRJ = "4KvFnkrNtoVFvxp2jQPKVMvMakFlQ6Rj61rm7PgDT5aBlp6YP1zd44Fae5hVoGYMHYag";
		const _returnValueWFbOaAK = await _grandParentNodesmy5DDA.copyNode(_sourceNodenV6Z0ln, _targetNodejrmFnRJ)
		const _sourceNodesBQUtg = "YVDEnM4aU3wnvWZaLteDE1geWgMOuvm7in2ePrE8lsF9oNhGKzXVjOi1Ws1t3Rx34wgRAZa7bR3lRyClAMBy1qTL55SKxpMIVQ";
		const _returnValuets9mSry = -2.6336400112995797;
		const _getValueRbEDyda = () => { return _returnValuets9mSry };
		const _returnValuegjQTDhZ = undefined;
		const _setValueLkHUk7R = () => { return _returnValuegjQTDhZ };
		const _targetNodeSF9HH9V = {
			"getValue": _getValueRbEDyda,
		"setValue": _setValueLkHUk7R
	}
		const _returnValueaDLH0vv = await _grandParentNodesmy5DDA.copyNode(_sourceNodesBQUtg, _targetNodeSF9HH9V)
		const _nodegdLsnue = {
		
	}
		const _returnValueM9T6To = await _grandParentNodesmy5DDA.setRight(_nodegdLsnue)
		const _nodeToReplaceeXfoKko = null;
		const _replacementNodecQJXjBw = undefined;
		const _returnValueBtmvcYp = await _grandParentNodesmy5DDA.replaceChild(_nodeToReplaceeXfoKko, _replacementNodecQJXjBw)
		const _returnValueQNwttb = await _RedBlackTreektKbLQ.leftLeftRotation(_grandParentNodesmy5DDA)
		const _nodecbn9AeA = null;
		const _returnValueV9yU1V = await _RedBlackTreektKbLQ.isNodeBlack(_nodecbn9AeA)
		const _nodexeMDLl = "85l1PcnhyYbu9BrrbTCNRaCRQEMJ1qdW0QJIEnsk7qD7YtT4CqRk";
		const _returnValueOtLtjAF = await _RedBlackTreektKbLQ.isNodeBlack(_nodexeMDLl)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeQE6bVNT = new RedBlackTree()
		const _valueO1JSrSE = -5.951593178848463;
		const _returnValuesX3JhIz = await _RedBlackTreeQE6bVNT.insert(_valueO1JSrSE)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeegydcvS = new RedBlackTree()
		const _arrayValuezZ07ODM = {
		
	}
		const _returnValuedHSAaK4 = -8.886103935921845;
		const _arrayValueMaDyvq = () => { return _returnValuedHSAaK4 };
		const _arrayValueOCTHeGK = "inRmgwbUklAKFoOuGHIvKdhTTseH4efGSCxsg8g";
		const _nodeeg0tVjJ = [_arrayValuezZ07ODM, _arrayValueMaDyvq, _arrayValueOCTHeGK]
		const _returnValueIrK4kH = await _RedBlackTreeegydcvS.makeNodeRed(_nodeeg0tVjJ)
		const _returnValueH3QHwht = false;
		const _nodeOrNY8hO = () => { return _returnValueH3QHwht };
		const _returnValueH6Xd88O = await _RedBlackTreeegydcvS.makeNodeRed(_nodeOrNY8hO)
		const _valuezukaEU = true;
		const _returnValueRwmzRBB = await _RedBlackTreeegydcvS.insert(_valuezukaEU)
		const _valueb9AaADP = -3.4062176586465887;
		const _returnValuef8B4a1Z = await _RedBlackTreeegydcvS.insert(_valueb9AaADP)
		const _valuelrONXdO = false;
		const _returnValuexsxDhbM = await _RedBlackTreeegydcvS.remove(_valuelrONXdO)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeMYHY0We = new RedBlackTree()
		const _arrayValuekJ0o1KO = null;
		const _arrayValuewLVZSvb = -1.2513119370805459;
		const _arrayValueDKcmnVl = 1.9973650998072152;
		const _nodeHob8Ddb = [_arrayValuekJ0o1KO, _arrayValuewLVZSvb, _arrayValueDKcmnVl]
		const _returnValueeLD8Cv3 = await _RedBlackTreeMYHY0We.isNodeRed(_nodeHob8Ddb)
		const _valueXdDqqbl = null;
		const _noderZE94yt = new BinaryTreeNode(_valueXdDqqbl)
		const _nodeamhFvy8 = {
		
	}
		const _returnValueK5wQDc = await _noderZE94yt.setLeft(_nodeamhFvy8)
		const _nodeToRemovehOHdfdp = false;
		const _returnValueLk7g8WT = await _noderZE94yt.removeChild(_nodeToRemovehOHdfdp)
		const _returnValueAXztCjq = await _RedBlackTreeMYHY0We.isNodeBlack(_noderZE94yt)
		const _valueeiGke2O = "BDF7Oj4rcOzfC46pe3U8u1s7UlvsG3DRSw54C5NxtM6mjJAEcR6Z4etLYrV89";
		const _returnValuefTeeW9o = await _RedBlackTreeMYHY0We.remove(_valueeiGke2O)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreemOSGh4m = new RedBlackTree()
		const _valueqOKFqBQ = {
		
	}
		const _nodeBsWMohq = new BinaryTreeNode(_valueqOKFqBQ)
		const _returnValueOnzHPyJ = await _nodeBsWMohq.toString()
		const _nodeImC42uK = {
		
	}
		const _returnValueamnygTo = await _nodeBsWMohq.setLeft(_nodeImC42uK)
		const _returnValuepR8vHoB = await _RedBlackTreemOSGh4m.isNodeBlack(_nodeBsWMohq)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTree0kkvtx = new RedBlackTree()
		const _nodeAGjIz5B = null;
		const _returnValuenS1H61 = await _RedBlackTree0kkvtx.isNodeColored(_nodeAGjIz5B)
		const _returnValueXqKmoyb = undefined;
		const _grandParentNodebuSPciH = () => { return _returnValueXqKmoyb };
		const _returnValueEs9KKi4 = await _RedBlackTree0kkvtx.leftRightRotation(_grandParentNodebuSPciH)
		const _parentmOoGwm1 = {
		
	}
		const _returnValuebIFQR7V = false;
		const _uncleGi1jY34 = () => { return _returnValuebIFQR7V };
		const _nodeLWTetxC = {
			"parent": _parentmOoGwm1,
		"uncle": _uncleGi1jY34
	}
		const _returnValueU835OTt = await _RedBlackTree0kkvtx.balance(_nodeLWTetxC)
		const _nodeyGJO8eZ = "ujI2nxSQRwUWWeMzwuBfgn6UZpVcWcSctYdqM6xRlGQD";
		const _returnValueUJlMKz6 = await _RedBlackTree0kkvtx.balance(_nodeyGJO8eZ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeq3hUGwx = new RedBlackTree()
		const _arrayValueHMX5UHA = 0.3512698219995176;
		const _arrayValuestcldEt = false;
		const _arrayValueiUdOhyX = [_arrayValueHMX5UHA, _arrayValuestcldEt]
		const _arrayValueHEWvXru = null;
		const _arrayValueK1BcAsv = -3.0211830600093093;
		const _parentzTOxLFM = [_arrayValueiUdOhyX, _arrayValueHEWvXru, _arrayValueK1BcAsv]
		const _rightXEcpSXM = {
		
	}
		const _returnValueJSzYqxF = 9.14576854323452;
		const _setRightE4TlmB = () => { return _returnValueJSzYqxF };
		const _grandParentNode3pAcU3 = {
			"parent": _parentzTOxLFM,
		"right": _rightXEcpSXM,
		"setRight": _setRightE4TlmB
	}
		const _returnValueODWvFw8 = await _RedBlackTreeq3hUGwx.rightRightRotation(_grandParentNode3pAcU3)
		const _metaxnJ7rtV = {
		
	}
		const _nodeKENv4V = {
			"meta": _metaxnJ7rtV
	}
		const _returnValueu1ojI0e = await _RedBlackTreeq3hUGwx.makeNodeBlack(_nodeKENv4V)
		const _nodekH7JnZh = null;
		const _returnValuena0E7SY = await _RedBlackTreeq3hUGwx.isNodeColored(_nodekH7JnZh)
		const _valueprp8JW = []
		const _grandParentNodexVeQQFf = new BinaryTreeNode(_valueprp8JW)
		const _returnValuezWf5rF8 = await _grandParentNodexVeQQFf.rightHeight()
		const _valuelr5Vngc = {
		
	}
		const _returnValueN6KgfRe = await _grandParentNodexVeQQFf.setValue(_valuelr5Vngc)
		const _arrayValueswTg5uR = null;
		const _arrayValueehVitc = [_arrayValueswTg5uR]
		const _returnValuepSacG35 = true;
		const _arrayValueZzePB9s = () => { return _returnValuepSacG35 };
		const _arrayValueSfltt0y = undefined;
		const _nodeToReplacewuiyxO8 = [_arrayValueehVitc, _arrayValueZzePB9s, _arrayValueSfltt0y]
		const _replacementNodee317MeO = {
		
	}
		const _returnValueVJ3IgrB = await _grandParentNodexVeQQFf.replaceChild(_nodeToReplacewuiyxO8, _replacementNodee317MeO)
		const _nodeToReplacebDm5Jai = {
		
	}
		const _replacementNodegWPwv9Y = {
		
	}
		const _returnValueBbdol8 = await _grandParentNodexVeQQFf.replaceChild(_nodeToReplacebDm5Jai, _replacementNodegWPwv9Y)
		const _nodeToRemoveSGgdVAm = null;
		const _returnValueRfVdL9W = await _grandParentNodexVeQQFf.removeChild(_nodeToRemoveSGgdVAm)
		const _returnValueOKR1jd2 = await _RedBlackTreeq3hUGwx.rightRightRotation(_grandParentNodexVeQQFf)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreepWnzium = new RedBlackTree()
		const _nodeqtcUu4k = undefined;
		const _returnValuezLGBjxz = await _RedBlackTreepWnzium.balance(_nodeqtcUu4k)
		const _valueMtyIbpa = {
		
	}
		const _nodeBkOMQ8o = new BinaryTreeNode(_valueMtyIbpa)
		const _nodevD2gzAi = {
		
	}
		const _returnValueOXX5bu = await _nodeBkOMQ8o.setLeft(_nodevD2gzAi)
		const _nodeE6B27tK = {
		
	}
		const _returnValuezp6oZbU = await _nodeBkOMQ8o.setRight(_nodeE6B27tK)
		const _returnValueSeTHQBz = await _RedBlackTreepWnzium.makeNodeBlack(_nodeBkOMQ8o)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreejbyszAx = new RedBlackTree()
		const _grandParentNodeELdv84 = "zDU9jXesCS8oUxcRaKLCQ2";
		const _returnValuelH0HS9C = await _RedBlackTreejbyszAx.leftLeftRotation(_grandParentNodeELdv84)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeMx8kTss = new RedBlackTree()
		const _valueifK0co3 = null;
		const _returnValueI10Kc6b = await _RedBlackTreeMx8kTss.remove(_valueifK0co3)
		const _nodeS4Ve4CI = -7.720287038668607;
		const _returnValueOP8x5s0 = await _RedBlackTreeMx8kTss.makeNodeRed(_nodeS4Ve4CI)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeh3nfRcT = new RedBlackTree()
		const _grandParentNodervRGaya = "fuvobwUHylQNqh2xkJBoZDl3X2kYdevOidlaql9zr4wdSuQx37hRe1GV4hlj1i";
		const _returnValueDV88ICg = await _RedBlackTreeh3nfRcT.leftRightRotation(_grandParentNodervRGaya)
		const _arrayValuejnbKyIH = true;
		const _arrayValueKe33lbE = "W5BmD6n2dG45DniilZfbXP8lVoXF6A3xYiJBqfc54JRokaSTO7Ost";
		const _arrayValueb6BRCo1 = null;
		const _rightp9SIZOG = [_arrayValuejnbKyIH, _arrayValueKe33lbE, _arrayValueb6BRCo1]
		const _returnValue89SegO = undefined;
		const _setRightelMXHqs = () => { return _returnValue89SegO };
		const _grandParentNodeWKNpdtk = {
			"right": _rightp9SIZOG,
		"setRight": _setRightelMXHqs
	}
		const _returnValuekpl2SKz = await _RedBlackTreeh3nfRcT.rightLeftRotation(_grandParentNodeWKNpdtk)
		const _metasMJ1qIE = {
		
	}
		const _nodekXss2xk = {
			"meta": _metasMJ1qIE
	}
		const _returnValueRHSZLuQ = await _RedBlackTreeh3nfRcT.isNodeRed(_nodekXss2xk)
		const _arrayValuewU674yh = true;
		const _arrayValueVsEfgC3 = false;
		const _arrayValuezD0JJ1 = null;
		const _parentQQ8Rol = [_arrayValuewU674yh, _arrayValueVsEfgC3, _arrayValuezD0JJ1]
		const _rightapRVQkU = {
		
	}
		const _returnValuefPvTdaT = null;
		const _setRightAHdKCJH = () => { return _returnValuefPvTdaT };
		const _grandParentNodexsomIPJ = {
			"parent": _parentQQ8Rol,
		"right": _rightapRVQkU,
		"setRight": _setRightAHdKCJH
	}
		const _returnValueILTGrA = await _RedBlackTreeh3nfRcT.rightRightRotation(_grandParentNodexsomIPJ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreed1gUvXI = new RedBlackTree()
		const _parentkObSLNe = {
		
	}
		const _leftqFu4flu = {
		
	}
		const _arrayValuekh1cx9T = undefined;
		const _arrayValueG5AEiG0 = null;
		const _arrayValueSYG9q2N = 8.488234421498465;
		const _returnValuekCn26YE = [_arrayValuekh1cx9T, _arrayValueG5AEiG0, _arrayValueSYG9q2N]
		const _setLeftUXJcNH = () => { return _returnValuekCn26YE };
		const _grandParentNodevBGkZ2u = {
			"parent": _parentkObSLNe,
		"left": _leftqFu4flu,
		"setLeft": _setLeftUXJcNH
	}
		const _returnValuepyLATEU = await _RedBlackTreed1gUvXI.leftLeftRotation(_grandParentNodevBGkZ2u)
		const _grandParentNodewRrWs4R = undefined;
		const _returnValuemvpwibS = await _RedBlackTreed1gUvXI.rightLeftRotation(_grandParentNodewRrWs4R)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreemmvHeJD = new RedBlackTree()
		const _firstNodeqKoFD6l = "HyCmKOVxhWdePbgFch9ebTqEpLvW16LDmsgg0i8rLVGi65hrSx5iX2resUwJCTlFMrQw6XGn";
		const _returnValueOhoEKKL = undefined;
		const _secondNodejvGsO0n = () => { return _returnValueOhoEKKL };
		const _returnValueJpMRYf4 = await _RedBlackTreemmvHeJD.swapNodeColors(_firstNodeqKoFD6l, _secondNodejvGsO0n)
		const _arrayValuet1X5XTu = 3.6172449918649274;
		const _arrayValueR886ChD = undefined;
		const _arrayValueOhZ5sTW = "sjputeH3vihBITHoTO8fOg1hW7ULJgJO0hhPPwK1sNY9dOdT2FHmrtJ95umPQ8UR9FGCQdVP8T9YOX";
		const _nodeeqcw21d = [_arrayValuet1X5XTu, _arrayValueR886ChD, _arrayValueOhZ5sTW]
		const _returnValueGJZvKcf = await _RedBlackTreemmvHeJD.makeNodeBlack(_nodeeqcw21d)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreegwA6TYP = new RedBlackTree()
		const _valuecUFfH7H = "g08ieGK2W7nEkVxR8gDancjhC";
		const _returnValueSpQ5Is4 = await _RedBlackTreegwA6TYP.insert(_valuecUFfH7H)
		const _arrayValuedN73f6C = -7.231018866594131;
		const _arrayValuedqG3ahU = "ZbhBvYOdGRihe1jX";
		const _valuervl7xf9 = [_arrayValuedN73f6C, _arrayValuedqG3ahU]
		const _returnValueWvQsDbJ = await _RedBlackTreegwA6TYP.insert(_valuervl7xf9)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeHrit4MV = new RedBlackTree()
		const _valueQo2C5EC = []
		const _compareFunctionoEtXM2M = undefined;
		const _grandParentNodesn3G04l = new BinarySearchTreeNode(_valueQo2C5EC, _compareFunctionoEtXM2M)
		const _arrayValueagZGIIj = true;
		const _valueCxjEQ8V = [_arrayValueagZGIIj]
		const _returnValueMHcHdIx = await _grandParentNodesn3G04l.insert(_valueCxjEQ8V)
		const _valueU6QuDaG = {
		
	}
		const _returnValueBeVqdDr = await _grandParentNodesn3G04l.insert(_valueU6QuDaG)
		const _returnValueQiRckWs = await _grandParentNodesn3G04l.findMin()
		const _returnValueYUdAQhH = await _RedBlackTreeHrit4MV.rightLeftRotation(_grandParentNodesn3G04l)
		const _arrayValuetOUihRm = true;
		const _arrayValuevldm8DX = null;
		const _arrayValueRrI47Ox = {
		
	}
		const _returnValueF6QDs5I = [_arrayValuetOUihRm, _arrayValuevldm8DX, _arrayValueRrI47Ox]
		const _returnValuejxbItPc = () => { return _returnValueF6QDs5I };
		const _grandParentNodeDYF5kxl = () => { return _returnValuejxbItPc };
		const _returnValueDBM7TGg = await _RedBlackTreeHrit4MV.rightLeftRotation(_grandParentNodeDYF5kxl)
		const _metaPPBvTwi = {
		
	}
		const _nodeQnplEF = {
			"meta": _metaPPBvTwi
	}
		const _returnValueFu2VN5 = await _RedBlackTreeHrit4MV.makeNodeRed(_nodeQnplEF)
		const _grandParentNodemtGRFk = "v";
		const _returnValuecDvI0ZS = await _RedBlackTreeHrit4MV.leftLeftRotation(_grandParentNodemtGRFk)
	});
})