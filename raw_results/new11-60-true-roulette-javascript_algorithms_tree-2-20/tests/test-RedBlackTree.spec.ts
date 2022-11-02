export {}
import RedBlackTree from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Heap from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/heap/Heap.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import BinarySearchTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js";

describe('RedBlackTree', () => {
	it('test for RedBlackTree', async () => {
		const _RedBlackTreeP8dcm8 = new RedBlackTree()
		const _valuey6fTm9m = "2xI3yKtJ7X7lgh1wsTUMWmuv4aU7GnNODE2n";
		const _returnValueGP0gb9N = await _RedBlackTreeP8dcm8.insert(_valuey6fTm9m)
		const _grandParentNodePX0fSag = "PF";
		const _returnValueDQkEMEE = await _RedBlackTreeP8dcm8.rightRightRotation(_grandParentNodePX0fSag)
		const _arrayValueprkG5Tr = "CTXLeKaA48L31UU74lrr6wlVLoo2N9n4vtJfjlw3uuZQ7FCDqhOPfcWJAvLPKG2t2m4qzzkatR2L5M1cX3pBwuaS21bzN";
		const _returnValueR9EMKn8 = [_arrayValueprkG5Tr]
		const _grandParentNodeqwKLZsN = () => { return _returnValueR9EMKn8 };
		const _returnValuecQRjxxc = await _RedBlackTreeP8dcm8.rightLeftRotation(_grandParentNodeqwKLZsN)
		const _metaDLB1fmx = {
		
	}
		const _nodeq7aBRAr = {
			"meta": _metaDLB1fmx
	}
		const _returnValueAzwma0K = await _RedBlackTreeP8dcm8.makeNodeRed(_nodeq7aBRAr)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreefizWvX = new RedBlackTree()
		const _nodeVVigIkv = "Sij28bFQ3Ru2hAOTRW3BfwUOeSVzuaBLjli5NkRKFZRoQJykt";
		const _returnValuesTp7WsJ = await _RedBlackTreefizWvX.makeNodeRed(_nodeVVigIkv)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeXgPme9q = new RedBlackTree()
		const _grandParentNodet0rd5wE = null;
		const _returnValueItuMXsb = await _RedBlackTreeXgPme9q.rightLeftRotation(_grandParentNodet0rd5wE)
		const _arrayValueKHIdLmG = undefined;
		const _arrayValueAgkS30A = [_arrayValueKHIdLmG]
		const _arrayValueLV3vEv = []
		const _firstNodea4HcEkE = [_arrayValueAgkS30A, _arrayValueLV3vEv]
		const _metalXBaRY7 = {
		
	}
		const _secondNodee61os27 = {
			"meta": _metalXBaRY7
	}
		const _returnValuePZAsKkM = await _RedBlackTreeXgPme9q.swapNodeColors(_firstNodea4HcEkE, _secondNodee61os27)
		const _returnValuerJDsMN = {
		
	}
		const _comparatorFunctionOwOKL5O = () => { return _returnValuerJDsMN };
		const _grandParentNodeHQyviMc = new Heap(_comparatorFunctionOwOKL5O)
		const _childIndexndFVVG = undefined;
		const _returnValueWbNbKI5 = await _grandParentNodeHQyviMc.parent(_childIndexndFVVG)
		const _returnValueQa85g6 = await _RedBlackTreeXgPme9q.rightRightRotation(_grandParentNodeHQyviMc)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeFZ2wzk3 = new RedBlackTree()
		const _returnValueddolMtD = 4.388245490485044;
		const _leftTDIbr8S = () => { return _returnValueddolMtD };
		const _returnValueFBvqmpp = true;
		const _setLefte76MHtH = () => { return _returnValueFBvqmpp };
		const _grandParentNodeCipGJvp = {
			"left": _leftTDIbr8S,
		"setLeft": _setLefte76MHtH
	}
		const _returnValueVAppkAq = await _RedBlackTreeFZ2wzk3.leftRightRotation(_grandParentNodeCipGJvp)
		const _leftOOUsIae = {
		
	}
		const _returnValue4F7IVb = false;
		const _setLeftElWejf = () => { return _returnValue4F7IVb };
		const _grandParentNodezjDUyUl = {
			"left": _leftOOUsIae,
		"setLeft": _setLeftElWejf
	}
		const _returnValuegLLlweK = await _RedBlackTreeFZ2wzk3.leftRightRotation(_grandParentNodezjDUyUl)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTree0H6dfJ = new RedBlackTree()
		const _valuex7acvyQ = "wgHm7Wi2iTYtmWlnDIKXaOW35AwQ9AT4IuZjcgP2It9rmE4B1PuCUrfEvm6ILSLfwEfMuUw4cfX36lPOCl4v0dreIB41LtA";
		const _returnValueM2M7710 = await _RedBlackTree0H6dfJ.remove(_valuex7acvyQ)
		const _metaQGxNGrQ = {
		
	}
		const _nodeONVuEHd = {
			"meta": _metaQGxNGrQ
	}
		const _returnValueOhFCxxN = await _RedBlackTree0H6dfJ.makeNodeRed(_nodeONVuEHd)
		const _nodeUwK4Sq1 = undefined;
		const _returnValuex9zV8Kn = await _RedBlackTree0H6dfJ.makeNodeRed(_nodeUwK4Sq1)
		const _valuex0KdVyO = -3.398308107798222;
		const _returnValueHHchM1k = undefined;
		const _keyCallbackY71EOG2 = () => { return _returnValueHHchM1k };
		const _grandParentNodeZ6UfieZ = new DisjointSetItem(_valuex0KdVyO, _keyCallbackY71EOG2)
		const _returnValuedGMLKb5 = await _grandParentNodeZ6UfieZ.getRoot()
		const _returnValueQzIBdkS = await _grandParentNodeZ6UfieZ.getKey()
		const _returnValueo1Ou52L = await _grandParentNodeZ6UfieZ.getRank()
		const _arrayValueSJH8sYy = "pnunMfnh5ApHsUWJpCML8mRmd";
		const _parentItemu3NeIf6 = [_arrayValueSJH8sYy]
		const _forceSettingParentChildQ8odVbg = false;
		const _returnValuep5m70Ax = await _grandParentNodeZ6UfieZ.setParent(_parentItemu3NeIf6, _forceSettingParentChildQ8odVbg)
		const _returnValuehsCzqND = await _grandParentNodeZ6UfieZ.isRoot()
		const _returnValueqhswdv9 = await _RedBlackTree0H6dfJ.leftLeftRotation(_grandParentNodeZ6UfieZ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreekVLy33u = new RedBlackTree()
		const _metacEB2PNW = {
		
	}
		const _nodeHNULDlZ = {
			"meta": _metacEB2PNW
	}
		const _returnValueE4wLEuh = await _RedBlackTreekVLy33u.isNodeBlack(_nodeHNULDlZ)
		const _arrayValueoN46ij = true;
		const _arrayValueaklarNG = false;
		const _rightGl5cfhU = [_arrayValueoN46ij, _arrayValueaklarNG]
		const _returnValueB1hO9Fu = "w2RH1cuVSF7yiHTkWrOkeJl19QROy5PJDADWQjvY7h1QCWB5yQQjgYynXujC";
		const _setRightW3eXcxn = () => { return _returnValueB1hO9Fu };
		const _grandParentNodeUSIC9YT = {
			"right": _rightGl5cfhU,
		"setRight": _setRightW3eXcxn
	}
		const _returnValuey7G8oXh = await _RedBlackTreekVLy33u.rightLeftRotation(_grandParentNodeUSIC9YT)
		const _leftpenD6v = {
		
	}
		const _arrayValueb9Ym4Dc = undefined;
		const _setLeftrDo40gj = [_arrayValueb9Ym4Dc]
		const _grandParentNodekn0F7g = {
			"left": _leftpenD6v,
		"setLeft": _setLeftrDo40gj
	}
		const _returnValueQhJdnsd = await _RedBlackTreekVLy33u.leftRightRotation(_grandParentNodekn0F7g)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeSXcX6ZY = new RedBlackTree()
		const _arrayValueaB3IqpQ = null;
		const _arrayValuezLLHzZ5 = true;
		const _nodeE8wdtTj = [_arrayValueaB3IqpQ, _arrayValuezLLHzZ5]
		const _returnValueywN0zEj = await _RedBlackTreeSXcX6ZY.balance(_nodeE8wdtTj)
		const _nodeWuNgfGX = []
		const _returnValueR58Fysu = await _RedBlackTreeSXcX6ZY.makeNodeRed(_nodeWuNgfGX)
		const _metaQpk0LEn = {
		
	}
		const _firstNode6MxPvE = {
			"meta": _metaQpk0LEn
	}
		const _returnValueHSvgK2S = true;
		const _secondNodebdXCZnp = () => { return _returnValueHSvgK2S };
		const _returnValueIoPESYZ = await _RedBlackTreeSXcX6ZY.swapNodeColors(_firstNode6MxPvE, _secondNodebdXCZnp)
		const _nodeOvfiex8 = "SagJda1AkCMvOUudS2qmLUyRRRv5FAe3nlkuhLjxIrnFUFb4KSbzCyk";
		const _returnValuehmNyUOB = await _RedBlackTreeSXcX6ZY.isNodeBlack(_nodeOvfiex8)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeYigFCl = new RedBlackTree()
		const _nodedAJf4wd = false;
		const _returnValueJyoHJOD = await _RedBlackTreeYigFCl.isNodeColored(_nodedAJf4wd)
		const _arrayValuec1UH2d = "ms1DyfZCoUuIzBRs4PnvaQO3mifP1bmaBD54KkEBkZierAlAbt9FSbYkOjKVxrkVUKWLZueECKIVW";
		const _nodeRiuBlkJ = [_arrayValuec1UH2d]
		const _returnValueROc67gk = await _RedBlackTreeYigFCl.makeNodeRed(_nodeRiuBlkJ)
		const _arrayValueeW5DBy7 = {
		
	}
		const _arrayValueYzodm4C = 2.654966846488364;
		const _arrayValueq2PEohM = {
		
	}
		const _arrayValuead9gjsy = [_arrayValueYzodm4C, _arrayValueq2PEohM]
		const _arrayValuefjFU2gD = [_arrayValuead9gjsy]
		const _nodeBRIoneL = [_arrayValueeW5DBy7, _arrayValuefjFU2gD]
		const _returnValueGXrl9Of = await _RedBlackTreeYigFCl.isNodeRed(_nodeBRIoneL)
		const _returnValueahj1TN3 = undefined;
		const _grandParentNodeFgoihV2 = () => { return _returnValueahj1TN3 };
		const _returnValuez8vpzHm = await _RedBlackTreeYigFCl.rightLeftRotation(_grandParentNodeFgoihV2)
		const _valueaX7eGun = null;
		const _compareFunctionHNF4wo = undefined;
		const _grandParentNodecF8wOBz = new BinarySearchTreeNode(_valueaX7eGun, _compareFunctionHNF4wo)
		const _arrayValuepksH3C8 = undefined;
		const _arrayValueWEVjks2 = true;
		const _arrayValuegeEVO8N = [_arrayValuepksH3C8, _arrayValueWEVjks2]
		const _valueG67AI2E = [_arrayValuegeEVO8N]
		const _returnValuelOBAp5C = await _grandParentNodecF8wOBz.find(_valueG67AI2E)
		const _valueZXYzemW = -6.61218158412886;
		const _returnValueIMau6jK = await _grandParentNodecF8wOBz.contains(_valueZXYzemW)
		const _valueJwD7Dz = "4hLnFDjpZ4dXemhRpYeiGRJzhqmQbBvZCLouyBYHwj445XlaViVr24AbPmpUb0KFHDB2Dpqs8XcYaHEjAY";
		const _returnValueBVe1LbJ = await _grandParentNodecF8wOBz.find(_valueJwD7Dz)
		const _valueuEfZpVD = {
		
	}
		const _returnValueR1FEBNd = await _grandParentNodecF8wOBz.find(_valueuEfZpVD)
		const _returnValueiImAJKL = await _RedBlackTreeYigFCl.leftRightRotation(_grandParentNodecF8wOBz)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeAbZYd6i = new RedBlackTree()
		const _parentT1IAZtu = {
		
	}
		const _returnValuehSs3NfV = []
		const _returnValueAb5KF7f = () => { return _returnValuehSs3NfV };
		const _arrayValueXSCNFRj = () => { return _returnValueAb5KF7f };
		const _leftnDFQ03K = [_arrayValueXSCNFRj]
		const _arrayValuesoJCzBS = undefined;
		const _arrayValueSWAzvJS = [_arrayValuesoJCzBS]
		const _arrayValueB7Vcryj = null;
		const _returnValueBZN5cbm = [_arrayValueSWAzvJS, _arrayValueB7Vcryj]
		const _setLeftAMr3ORd = () => { return _returnValueBZN5cbm };
		const _grandParentNodey0ynEP2 = {
			"parent": _parentT1IAZtu,
		"left": _leftnDFQ03K,
		"setLeft": _setLeftAMr3ORd
	}
		const _returnValuexA0zdzl = await _RedBlackTreeAbZYd6i.leftLeftRotation(_grandParentNodey0ynEP2)
		const _arrayValuey0rzQvH = 3.7086068769145815;
		const _returnValueLqcvlW2 = null;
		const _arrayValuesmm3BQO = () => { return _returnValueLqcvlW2 };
		const _returnValue5Gs0fA = [_arrayValuey0rzQvH, _arrayValuesmm3BQO]
		const _returnValueTMwnKSK = () => { return _returnValue5Gs0fA };
		const _leftHoYDQ8P = () => { return _returnValueTMwnKSK };
		const _arrayValuededimgM = undefined;
		const _arrayValueqUahHzl = "M6nxwJDyCf8DBZTTrsuBjPvjuyDkBz";
		const _arrayValuelpsXFcB = null;
		const _returnValueOrLXfPH = [_arrayValuededimgM, _arrayValueqUahHzl, _arrayValuelpsXFcB]
		const _returnValueIcttJCg = () => { return _returnValueOrLXfPH };
		const _setLeft3Cj4KM = () => { return _returnValueIcttJCg };
		const _grandParentNodedbktzGD = {
			"left": _leftHoYDQ8P,
		"setLeft": _setLeft3Cj4KM
	}
		const _returnValueo583CFr = await _RedBlackTreeAbZYd6i.leftRightRotation(_grandParentNodedbktzGD)
		const _returnValueqYnBbrN = null;
		const _returnValueOS84WWV = () => { return _returnValueqYnBbrN };
		const _returnValueD60jQwj = () => { return _returnValueOS84WWV };
		const _nodeVIgPT6 = () => { return _returnValueD60jQwj };
		const _returnValuet3Aaw0E = await _RedBlackTreeAbZYd6i.isNodeRed(_nodeVIgPT6)
		const _parentHEcDZq2 = {
		
	}
		const _uncleA267YR9 = true;
		const _nodeqzSLKT = {
			"parent": _parentHEcDZq2,
		"uncle": _uncleA267YR9
	}
		const _returnValueh7go2v = await _RedBlackTreeAbZYd6i.balance(_nodeqzSLKT)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreelzhdTlG = new RedBlackTree()
		const _firstNodeH2Wk9YE = undefined;
		const _secondNodeUzfq3Zw = "EA3hIseesis5cONr79GzvG2vjco3650rmabX2uOZKUmt6aj";
		const _returnValuer2cFrBU = await _RedBlackTreelzhdTlG.swapNodeColors(_firstNodeH2Wk9YE, _secondNodeUzfq3Zw)
		const _nodeJZCjlld = "9ASAimwN4ukgf1PDMavV5JYmGmMSgpiO6abzna9aD7UpPJtRUQeWCsEPJfK2LbDPQqVWAVkYP25eMZbp7";
		const _returnValueis85B1 = await _RedBlackTreelzhdTlG.balance(_nodeJZCjlld)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeKC1cRRx = new RedBlackTree()
		const _valuergysovK = null;
		const _arrayValueghrSFiG = "qkiqkNPVpnG6qm6NecyEJSkqrGgtFtbQ1J93sX";
		const _arrayValue9jycms = "Fia0V5LOuqRKeIUQ0kiuW5Iyb19wdzWprEJSMOimB8e9bme9AJcqGVjOnBEccweD8uxQ7RVsYEr6tpUgV8SykFVOTz1yPX";
		const _arrayValueNkLK2P5 = "TgvDDrSP1OOS5uUnDvS3c2AaOlxXFuhBsdHf4G414";
		const _arrayValuemYPbxNq = [_arrayValueghrSFiG, _arrayValue9jycms, _arrayValueNkLK2P5]
		const _arrayValueJTZUkIt = 1.3425113304837932;
		const _arrayValuefa35oBS = "WpL67368DQ8aVdhdza6NgXtBVzJDhyzygVQpRvCI1Neetb0YHI7x6Szx8W7t42hXqaBnUyJSAJlmPMBvriCwfMJcEkcavFpG83D";
		const _returnValueBQV4Fi8 = [_arrayValuemYPbxNq, _arrayValueJTZUkIt, _arrayValuefa35oBS]
		const _keyCallbackN8f3Mux = () => { return _returnValueBQV4Fi8 };
		const _grandParentNodef4Eupuq = new DisjointSetItem(_valuergysovK, _keyCallbackN8f3Mux)
		const _returnValueuRp9b48 = await _grandParentNodef4Eupuq.isRoot()
		const _parentItemcijepGj = "S1nmGFYLCfpOdgGJNfRxX7hKKUlOgYc3VfDmDOE524Z8VgFAiyPo";
		const _forceSettingParentChildK6d8S9 = false;
		const _returnValuevWjXr4i = await _grandParentNodef4Eupuq.setParent(_parentItemcijepGj, _forceSettingParentChildK6d8S9)
		const _returnValue9etB4f = await _grandParentNodef4Eupuq.isRoot()
		const _returnValuecJ7fKb = await _grandParentNodef4Eupuq.getRank()
		const _returnValueMznn4tx = await _RedBlackTreeKC1cRRx.rightRightRotation(_grandParentNodef4Eupuq)
		const _nodewJoHSQ = "biwrjFGoobiVXgaLp96eNTfzMh29KPMAKbCXoxv8TAdlcuvOj2Wrynn5XEa17IjMfi6Pn";
		const _returnValuewdZ1FSa = await _RedBlackTreeKC1cRRx.balance(_nodewJoHSQ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeKDLTiyt = new RedBlackTree()
		const _valueStmsL5X = null;
		const _compareFunctionmhJf745 = undefined;
		const _grandParentNodeEOlDbPu = new BinarySearchTreeNode(_valueStmsL5X, _compareFunctionmhJf745)
		const _valuenBhN1ug = []
		const _returnValuekTSP7pG = await _grandParentNodeEOlDbPu.insert(_valuenBhN1ug)
		const _valuempIk7D1 = undefined;
		const _returnValuej5HbjOX = await _grandParentNodeEOlDbPu.find(_valuempIk7D1)
		const _valueQd1g2O0 = {
		
	}
		const _returnValuexVZi1ZV = await _grandParentNodeEOlDbPu.insert(_valueQd1g2O0)
		const _returnValuexjhzF8 = await _grandParentNodeEOlDbPu.findMin()
		const _returnValueHyQHrDU = await _RedBlackTreeKDLTiyt.rightRightRotation(_grandParentNodeEOlDbPu)
		const _value3PXmqc = null;
		const _returnValuerRFJflM = await _RedBlackTreeKDLTiyt.remove(_value3PXmqc)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreefWEhuE4 = new RedBlackTree()
		const _arrayValuek2BxXSI = "P6EulpVDKO5PSdUbBbu9H";
		const _arrayValuejLyTEa0 = undefined;
		const _valuey4KrJwj = [_arrayValuek2BxXSI, _arrayValuejLyTEa0]
		const _returnValueGsiKYCu = await _RedBlackTreefWEhuE4.insert(_valuey4KrJwj)
		const _valueuYi93t = undefined;
		const _returnValueb8oK46Z = await _RedBlackTreefWEhuE4.insert(_valueuYi93t)
	});
})