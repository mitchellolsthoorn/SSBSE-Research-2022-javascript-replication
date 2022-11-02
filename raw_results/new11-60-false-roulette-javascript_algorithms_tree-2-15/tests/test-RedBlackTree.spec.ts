export {}
import RedBlackTree from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
import BinarySearchTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import BinaryTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";

describe('RedBlackTree', () => {
	it('test for RedBlackTree', async () => {
		const _RedBlackTreeF585rnw = new RedBlackTree()
		const _arrayValuel1SOuBx = "XsHwDpU4EIjBKdL4yW7jwWvd9lMXL9w8d4NYpcNku1fdggV915kfKskSFzm1e";
		const _arrayValueuVyRRKN = undefined;
		const _arrayValuezyeFvCc = undefined;
		const _returnValueBTjAXdo = [_arrayValuel1SOuBx, _arrayValueuVyRRKN, _arrayValuezyeFvCc]
		const _firstNodetQocQJI = () => { return _returnValueBTjAXdo };
		const _secondNodelEDYg6p = "dNGy0m7niGTk39ss63Y56Xe21AUtCUAlbVdyWOFxY5h0c46bxekElzMs9KkjsqvvBF7BdfEe2VPIPDAxwRR";
		const _returnValueiSZTqv9 = await _RedBlackTreeF585rnw.swapNodeColors(_firstNodetQocQJI, _secondNodelEDYg6p)
		const _valueccXHJB = {
		
	}
		const _returnValueDcYU2tO = await _RedBlackTreeF585rnw.remove(_valueccXHJB)
		const _valueWHrD0nB = null;
		const _compareFunctionoPKq0A9 = undefined;
		const _grandParentNodeoXZVFpm = new BinarySearchTreeNode(_valueWHrD0nB, _compareFunctionoPKq0A9)
		const _returnValueiAVWyET = null;
		const _valueyeoAnoj = () => { return _returnValueiAVWyET };
		const _returnValueAXxpL9v = await _grandParentNodeoXZVFpm.find(_valueyeoAnoj)
		const _valuev74CORX = true;
		const _returnValuewesRxtR = await _grandParentNodeoXZVFpm.remove(_valuev74CORX)
		const _returnValuerjFkGbg = await _RedBlackTreeF585rnw.rightLeftRotation(_grandParentNodeoXZVFpm)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreewhhVDg1 = new RedBlackTree()
		const _rightkz933Jz = null;
		const _returnValueHpCG2wx = -2.802865258302754;
		const _setRightENnuQvt = () => { return _returnValueHpCG2wx };
		const _grandParentNodeo41PDB1 = {
			"right": _rightkz933Jz,
		"setRight": _setRightENnuQvt
	}
		const _returnValuezbRSZC1 = await _RedBlackTreewhhVDg1.rightLeftRotation(_grandParentNodeo41PDB1)
		const _valuem5XA4OJ = {
		
	}
		const _nodek6qd4J9 = new BinaryTreeNode(_valuem5XA4OJ)
		const _nodeToRemovesBe7JRw = null;
		const _returnValueLwt13iv = await _nodek6qd4J9.removeChild(_nodeToRemovesBe7JRw)
		const _valuexZb5gdx = {
		
	}
		const _returnValueMbe3xCz = await _nodek6qd4J9.setValue(_valuexZb5gdx)
		const _returnValueZFEvG9t = await _RedBlackTreewhhVDg1.isNodeBlack(_nodek6qd4J9)
		const _metaVXEXXAa = {
		
	}
		const _nodeF0SpDfY = {
			"meta": _metaVXEXXAa
	}
		const _returnValuevs3lnoG = await _RedBlackTreewhhVDg1.makeNodeRed(_nodeF0SpDfY)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeFUdDbOE = new RedBlackTree()
		const _arrayValue64D192 = false;
		const _nodeyNXnZYF = [_arrayValue64D192]
		const _returnValuexEqdYZz = await _RedBlackTreeFUdDbOE.balance(_nodeyNXnZYF)
		const _valueFVQyHY = {
		
	}
		const _nodesnT1Yi7 = new BinaryTreeNode(_valueFVQyHY)
		const _sourceNodeejJqZg0 = -6.737283101274999;
		const _value818fGd = null;
		const _compareFunctioneDFCmIy = undefined;
		const _targetNodeNnRQXWB = new BinarySearchTreeNode(_value818fGd, _compareFunctioneDFCmIy)
		const _valueIRkvlP3 = null;
		const _returnValue63TeRN = await _targetNodeNnRQXWB.contains(_valueIRkvlP3)
		const _valueW63vgzQ = "eQPMQ2ScRx7D7Ws1Y8QKtz3sloTvwnmkp75HRvNJtxRqB336tfUwfJjOV6tstW54TL9RRoGsnXxnix3RWOuilxp0BNheRNV";
		const _returnValuebqM1sU6 = await _targetNodeNnRQXWB.remove(_valueW63vgzQ)
		const _returnValuePlcBSHg = await _nodesnT1Yi7.copyNode(_sourceNodeejJqZg0, _targetNodeNnRQXWB)
		const _returnValueiF9foXb = await _nodesnT1Yi7.traverseInOrder()
		const _returnValuebTZXA8M = await _RedBlackTreeFUdDbOE.makeNodeRed(_nodesnT1Yi7)
		const _parentJnk6M0O = {
		
	}
		const _unclecEah1pg = {
		
	}
		const _nodeb7C96CA = {
			"parent": _parentJnk6M0O,
		"uncle": _unclecEah1pg
	}
		const _returnValueXfRTSIg = await _RedBlackTreeFUdDbOE.balance(_nodeb7C96CA)
		const _nodeHOIrsVL = {
		
	}
		const _returnValueCSluDjk = await _RedBlackTreeFUdDbOE.isNodeColored(_nodeHOIrsVL)
		const _valueK2p6fbD = {
		
	}
		const _returnValueqqXZCMU = await _RedBlackTreeFUdDbOE.remove(_valueK2p6fbD)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeRt135E4 = new RedBlackTree()
		const _nodeHjLbXIG = "Lvl4CV5pxk9x1ll8T53XstSnTwq5y4V9uqYZ0rpeEZ5fE1i2mcLgzkMcbe1lW5GGS58Rh";
		const _returnValueA62AvuC = await _RedBlackTreeRt135E4.makeNodeBlack(_nodeHjLbXIG)
		const _rightOozhFzW = {
		
	}
		const _setRightxGvL2k1 = null;
		const _grandParentNodeMlTIcDY = {
			"right": _rightOozhFzW,
		"setRight": _setRightxGvL2k1
	}
		const _returnValue7rxaBO = await _RedBlackTreeRt135E4.rightLeftRotation(_grandParentNodeMlTIcDY)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeqDXxTqp = new RedBlackTree()
		const _metaO4kFzbU = {
		
	}
		const _nodemEwUZEW = {
			"meta": _metaO4kFzbU
	}
		const _returnValuenA0ZJZx = await _RedBlackTreeqDXxTqp.isNodeRed(_nodemEwUZEW)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreej8iApsE = new RedBlackTree()
		const _grandParentNodeL4TKN9H = undefined;
		const _returnValueJXcDJxP = await _RedBlackTreej8iApsE.leftLeftRotation(_grandParentNodeL4TKN9H)
		const _returnValuekDldUB8 = -1.2368722623391921;
		const _returnValueqLrPZ49 = () => { return _returnValuekDldUB8 };
		const _nodeBrtaXvJ = () => { return _returnValueqLrPZ49 };
		const _returnValueKWkMzws = await _RedBlackTreej8iApsE.balance(_nodeBrtaXvJ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreewlTpzSC = new RedBlackTree()
		const _nodeRWMJJSH = false;
		const _returnValuekFKpuXR = await _RedBlackTreewlTpzSC.isNodeColored(_nodeRWMJJSH)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreet09j5Ul = new RedBlackTree()
		const _returnValue9gir13 = null;
		const _grandParentNode0h1R9N = () => { return _returnValue9gir13 };
		const _returnValue3w7neU = await _RedBlackTreet09j5Ul.rightRightRotation(_grandParentNode0h1R9N)
		const _arrayValuepEthsqr = false;
		const _arrayValuekfNLsJ6 = null;
		const _arrayValueLYjxV8J = undefined;
		const _arrayValuez7jClKI = [_arrayValueLYjxV8J]
		const _arrayValuefZnhMWY = true;
		const _nodeklCMBy4 = [_arrayValuepEthsqr, _arrayValuekfNLsJ6, _arrayValuez7jClKI, _arrayValuefZnhMWY]
		const _returnValueR10flCP = await _RedBlackTreet09j5Ul.balance(_nodeklCMBy4)
		const _nodeSt06HUv = "MY63NP4yyo4GN";
		const _returnValueX9O50a = await _RedBlackTreet09j5Ul.makeNodeRed(_nodeSt06HUv)
		const _valueFrItG3F = undefined;
		const _returnValueT4saKUY = await _RedBlackTreet09j5Ul.insert(_valueFrItG3F)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeFyAll0 = new RedBlackTree()
		const _arrayValueiJecZP0 = undefined;
		const _grandParentNodeUQ2cZ9m = [_arrayValueiJecZP0]
		const _returnValuepHYnmEq = await _RedBlackTreeFyAll0.leftLeftRotation(_grandParentNodeUQ2cZ9m)
		const _nodeYwrB06J = "e";
		const _returnValueelU7TmA = await _RedBlackTreeFyAll0.balance(_nodeYwrB06J)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeriJbhXH = new RedBlackTree()
		const _metaljzPG4r = {
		
	}
		const _nodeGjS6oIo = {
			"meta": _metaljzPG4r
	}
		const _returnValueSenprU = await _RedBlackTreeriJbhXH.makeNodeRed(_nodeGjS6oIo)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeMBUF6GK = new RedBlackTree()
		const _leftiowTgmO = {
		
	}
		const _returnValuedXtbJw = undefined;
		const _setLeftOFZLSkz = () => { return _returnValuedXtbJw };
		const _grandParentNodeXBExIrY = {
			"left": _leftiowTgmO,
		"setLeft": _setLeftOFZLSkz
	}
		const _returnValueEqIuIv = await _RedBlackTreeMBUF6GK.leftRightRotation(_grandParentNodeXBExIrY)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreet4ftTl = new RedBlackTree()
		const _valuehewLnWF = undefined;
		const _returnValuepdzZ8un = await _RedBlackTreet4ftTl.remove(_valuehewLnWF)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreekNklxBe = new RedBlackTree()
		const _parentdQIJAwK = {
		
	}
		const _returnValuex0UlI82 = null;
		const _righta2dSp3 = () => { return _returnValuex0UlI82 };
		const _returnValueTO9yiw4 = {
		
	}
		const _setRightDWM2RKT = () => { return _returnValueTO9yiw4 };
		const _grandParentNodeVdEEfg8 = {
			"parent": _parentdQIJAwK,
		"right": _righta2dSp3,
		"setRight": _setRightDWM2RKT
	}
		const _returnValuezp2LNpT = await _RedBlackTreekNklxBe.rightRightRotation(_grandParentNodeVdEEfg8)
		const _firstNodeCtHIAvD = "w2g8ztxnrxXHk5yHcuJIU";
		const _returnValueMNSyDCU = 5.506572552657216;
		const _secondNodex4GaFDp = () => { return _returnValueMNSyDCU };
		const _returnValueR6FauB = await _RedBlackTreekNklxBe.swapNodeColors(_firstNodeCtHIAvD, _secondNodex4GaFDp)
		const _returnValuefLUmHFb = null;
		const _parentGQ4NbY = () => { return _returnValuefLUmHFb };
		const _leftYK9u8KI = {
		
	}
		const _returnValueIFLtjEu = true;
		const _setLeftiZW9qTy = () => { return _returnValueIFLtjEu };
		const _grandParentNodeIkJHAow = {
			"parent": _parentGQ4NbY,
		"left": _leftYK9u8KI,
		"setLeft": _setLeftiZW9qTy
	}
		const _returnValueMWaAWWf = await _RedBlackTreekNklxBe.leftLeftRotation(_grandParentNodeIkJHAow)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeY6godfp = new RedBlackTree()
		const _valueJacxq8a = null;
		const _returnValueEspUs1E = await _RedBlackTreeY6godfp.insert(_valueJacxq8a)
		const _grandParentNodeGQdQc4R = "bK9gH4vNv49BDp5YupD3XWw3O";
		const _returnValueFsJKVWt = await _RedBlackTreeY6godfp.leftRightRotation(_grandParentNodeGQdQc4R)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreenCcqhuZ = new RedBlackTree()
		const _returnValueh4s2NkD = undefined;
		const _parentDZ1Frm1 = () => { return _returnValueh4s2NkD };
		const _leftDcwhd7y = {
		
	}
		const _returnValueGcckuHr = undefined;
		const _setLeftsAzEL5 = () => { return _returnValueGcckuHr };
		const _grandParentNodecvdkGlo = {
			"parent": _parentDZ1Frm1,
		"left": _leftDcwhd7y,
		"setLeft": _setLeftsAzEL5
	}
		const _returnValueExDHSzk = await _RedBlackTreenCcqhuZ.leftLeftRotation(_grandParentNodecvdkGlo)
		const _valueBC7UhAN = {
		
	}
		const _grandParentNodebzoOoV = new BinaryTreeNode(_valueBC7UhAN)
		const _returnValuedDiVDg = await _grandParentNodebzoOoV.leftHeight()
		const _returnValueVUTlrN4 = await _grandParentNodebzoOoV.leftHeight()
		const _keyalml6mT = undefined;
		const _arrayValuedp62Fct = null;
		const _arrayValueTD4iujC = true;
		const _arrayValueAdn3jKI = null;
		const _valueDcCV8bL = [_arrayValuedp62Fct, _arrayValueTD4iujC, _arrayValueAdn3jKI]
		const _sourceNodedKq7TdG = {
			"key": _keyalml6mT,
		"value": _valueDcCV8bL
	}
		const _arrayValuez9iSJ0d = "Hc1I7GdRksAOVGtGKnqxhhPiqakm43pnA2zzW8acKI3wL8Xz4FhUBlI584jGcCu0OsAG";
		const _arrayValueOhX49Aq = false;
		const _targetNodeH6uasP6 = [_arrayValuez9iSJ0d, _arrayValueOhX49Aq]
		const _returnValueBacmdYt = await _grandParentNodebzoOoV.copyNode(_sourceNodedKq7TdG, _targetNodeH6uasP6)
		const _returnValueUd01GO3 = await _RedBlackTreenCcqhuZ.leftLeftRotation(_grandParentNodebzoOoV)
		const _leftTmp8pCQ = {
		
	}
		const _returnValuehIm5Ks1 = undefined;
		const _setLeftABAxjPT = () => { return _returnValuehIm5Ks1 };
		const _grandParentNodei9Gllns = {
			"left": _leftTmp8pCQ,
		"setLeft": _setLeftABAxjPT
	}
		const _returnValueQZRnRX = await _RedBlackTreenCcqhuZ.leftRightRotation(_grandParentNodei9Gllns)
		const _valueTQZwJLP = 9.717215258709913;
		const _returnValuegsaRE4 = await _RedBlackTreenCcqhuZ.remove(_valueTQZwJLP)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreekKxhCWn = new RedBlackTree()
		const _arrayValuexXwShIw = undefined;
		const _arrayValueILkLSnu = -0.26162747166356226;
		const _valueRQ9EI8c = [_arrayValuexXwShIw, _arrayValueILkLSnu]
		const _returnValueSeD2cyN = await _RedBlackTreekKxhCWn.insert(_valueRQ9EI8c)
		const _valueVU83qTy = {
		
	}
		const _returnValuekq5hqzx = await _RedBlackTreekKxhCWn.insert(_valueVU83qTy)
		const _nodemXXrHaw = false;
		const _returnValueuITuL1 = await _RedBlackTreekKxhCWn.makeNodeBlack(_nodemXXrHaw)
		const _metacQlA4h = {
		
	}
		const _nodeGsnCfJ = {
			"meta": _metacQlA4h
	}
		const _returnValueF07jgwG = await _RedBlackTreekKxhCWn.makeNodeRed(_nodeGsnCfJ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreezrXcGO3 = new RedBlackTree()
		const _valueZTzkQRr = null;
		const _compareFunctionhHdXg7G = undefined;
		const _grandParentNodecqgDeKp = new BinarySearchTreeNode(_valueZTzkQRr, _compareFunctionhHdXg7G)
		const _valuef46YWoa = -0.3338852926815665;
		const _returnValue8I626r = await _grandParentNodecqgDeKp.insert(_valuef46YWoa)
		const _valuePdWvRSZ = undefined;
		const _returnValuePa812cs = await _grandParentNodecqgDeKp.contains(_valuePdWvRSZ)
		const _valuemLp7xJF = null;
		const _returnValueoTNswbi = await _grandParentNodecqgDeKp.insert(_valuemLp7xJF)
		const _returnValueoW0JAsJ = await _RedBlackTreezrXcGO3.rightRightRotation(_grandParentNodecqgDeKp)
		const _nodeZiLfTw8 = "wh5MFUjRz4CAQoIUTrTqC7hB0eUFMNfLVNLVYz7N98UJB3pBLjAQKTpmBu8FihFJgodB4AAtT7SflmtjIizezKxsR8zrfm7k";
		const _returnValue5eo9az = await _RedBlackTreezrXcGO3.makeNodeRed(_nodeZiLfTw8)
	});
})