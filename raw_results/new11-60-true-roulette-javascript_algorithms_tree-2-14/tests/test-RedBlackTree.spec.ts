export {}
import RedBlackTree from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
import BinaryTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";
import BinarySearchTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js";

describe('RedBlackTree', () => {
	it('test for RedBlackTree', async () => {
		const _RedBlackTreeHxdrnDO = new RedBlackTree()
		const _arrayValueexO6Dg = false;
		const _arrayValuevUyDX3B = "1mABKNlDy3CRji5rydEKnW1MkuwNtNWWH0WrzUpkMWrSUv";
		const _arrayValueWWq1eCe = "nHQhtudLQcWFgZLwaKB382ySfNziRwOdXnw1sIfwQw3RF8ICCeRzsX0NbwBV1Si3FIpqxNKln";
		const _returnValueBKAaUC2 = [_arrayValueexO6Dg, _arrayValuevUyDX3B, _arrayValueWWq1eCe]
		const _arrayValueG9La6y5 = () => { return _returnValueBKAaUC2 };
		const _arrayValueGY47xSa = "Yzbo8tF2wYTc74u7U8b5PYM7WpOz4FMoWnex1BpJlDwWIMfE5dWe6mByl2FBf3fF5wgdnB41SxZ6k";
		const _arrayValueAmpd1F = [_arrayValueG9La6y5, _arrayValueGY47xSa]
		const _arrayValueRCJnfb = []
		const _valueFTUHpgi = [_arrayValueAmpd1F, _arrayValueRCJnfb]
		const _returnValueK9xPNB3 = await _RedBlackTreeHxdrnDO.remove(_valueFTUHpgi)
		const _valueSnnT3Ru = null;
		const _grandParentNodeSHWWTtk = new BinaryTreeNode(_valueSnnT3Ru)
		const _nodeMEAStiT = {
		
	}
		const _returnValueO1k3F4m = await _grandParentNodeSHWWTtk.setRight(_nodeMEAStiT)
		const _nodeToReplacezXXybXf = undefined;
		const _replacementNodegGSv4wB = {
		
	}
		const _returnValuefV8DVFD = await _grandParentNodeSHWWTtk.replaceChild(_nodeToReplacezXXybXf, _replacementNodegGSv4wB)
		const _nodeToRemoveHlmMgdj = true;
		const _returnValuebAJ1BoW = await _grandParentNodeSHWWTtk.removeChild(_nodeToRemoveHlmMgdj)
		const _returnValuepg3KTK = await _grandParentNodeSHWWTtk.balanceFactor()
		const _returnValuezyw6yCk = await _RedBlackTreeHxdrnDO.leftRightRotation(_grandParentNodeSHWWTtk)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreegpgv4kc = new RedBlackTree()
		const _parentXXL8bFp = {
		
	}
		const _rightLeqV5hI = {
		
	}
		const _returnValueTzbzh4 = true;
		const _setRightNAQtco3 = () => { return _returnValueTzbzh4 };
		const _grandParentNodeo9hXwHf = {
			"parent": _parentXXL8bFp,
		"right": _rightLeqV5hI,
		"setRight": _setRightNAQtco3
	}
		const _returnValuealybLP = await _RedBlackTreegpgv4kc.rightRightRotation(_grandParentNodeo9hXwHf)
		const _metaVYseefD = 3.185847293753511;
		const _nodeDM707ou = {
			"meta": _metaVYseefD
	}
		const _returnValueoND2u1Y = await _RedBlackTreegpgv4kc.isNodeRed(_nodeDM707ou)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeITFcZz6 = new RedBlackTree()
		const _valueztJqMmd = {
		
	}
		const _grandParentNodewEmYGbk = new BinaryTreeNode(_valueztJqMmd)
		const _nodeXaHfhrC = {
		
	}
		const _returnValueIutXytS = await _grandParentNodewEmYGbk.setRight(_nodeXaHfhrC)
		const _nodeJ3i4d4D = {
		
	}
		const _returnValueFOjrPV6 = await _grandParentNodewEmYGbk.setRight(_nodeJ3i4d4D)
		const _valueWSlYaEx = {
		
	}
		const _returnValuegDcHL0N = await _grandParentNodewEmYGbk.setValue(_valueWSlYaEx)
		const _returnValuejfXy4Ae = await _RedBlackTreeITFcZz6.leftLeftRotation(_grandParentNodewEmYGbk)
		const _nodeSZK9YeJ = []
		const _returnValueDO3lWiX = await _RedBlackTreeITFcZz6.balance(_nodeSZK9YeJ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeTrmggg9 = new RedBlackTree()
		const _rightpFSkEc4 = undefined;
		const _returnValueyvm6LFQ = false;
		const _setRightIQtHWx3 = () => { return _returnValueyvm6LFQ };
		const _grandParentNodeG1TPHHZ = {
			"right": _rightpFSkEc4,
		"setRight": _setRightIQtHWx3
	}
		const _returnValueyIs6YmE = await _RedBlackTreeTrmggg9.rightLeftRotation(_grandParentNodeG1TPHHZ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeWLM0NX = new RedBlackTree()
		const _nodeettCpST = "Ts26hU";
		const _returnValueC0mR9JN = await _RedBlackTreeWLM0NX.isNodeBlack(_nodeettCpST)
		const _arrayValueFqYb6KZ = {
		
	}
		const _arrayValueSD08pj = -1.775951627099504;
		const _nodekclIqdH = [_arrayValueFqYb6KZ, _arrayValueSD08pj]
		const _returnValueg1aetMY = await _RedBlackTreeWLM0NX.isNodeBlack(_nodekclIqdH)
		const _returnValuewq69NgK = null;
		const _nodeb4MVLJd = () => { return _returnValuewq69NgK };
		const _returnValuezzqSekh = await _RedBlackTreeWLM0NX.isNodeRed(_nodeb4MVLJd)
		const _returnValuemMLoELo = -2.3596489618334964;
		const _returnValuekmhygdK = () => { return _returnValuemMLoELo };
		const _nodeNLZSFPd = () => { return _returnValuekmhygdK };
		const _returnValuehLaH85E = await _RedBlackTreeWLM0NX.isNodeBlack(_nodeNLZSFPd)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeyY9ln5y = new RedBlackTree()
		const _returnValueyTWSUCD = true;
		const _nodeIX1mdki = () => { return _returnValueyTWSUCD };
		const _returnValueH0ofMbW = await _RedBlackTreeyY9ln5y.balance(_nodeIX1mdki)
		const _grandParentNodevKR8MaV = "6wgOautpTKDbE0KU5Cntjaub70H";
		const _returnValueabtsLP = await _RedBlackTreeyY9ln5y.rightRightRotation(_grandParentNodevKR8MaV)
		const _valueG5y2Alz = {
		
	}
		const _grandParentNodeO6wjTI = new BinaryTreeNode(_valueG5y2Alz)
		const _nodeToReplacejzroieQ = 0.9775112976997669;
		const _replacementNodeJesW9XL = -8.942773580116707;
		const _returnValueLdHzCYQ = await _grandParentNodeO6wjTI.replaceChild(_nodeToReplacejzroieQ, _replacementNodeJesW9XL)
		const _returnValueyvsLwX8 = await _grandParentNodeO6wjTI.rightHeight()
		const _returnValuewHIzLuj = await _grandParentNodeO6wjTI.traverseInOrder()
		const _returnValuezFEpGio = await _grandParentNodeO6wjTI.toString()
		const _returnValueGbf5EKB = await _grandParentNodeO6wjTI.balanceFactor()
		const _returnValueQmBU8Wl = await _RedBlackTreeyY9ln5y.rightLeftRotation(_grandParentNodeO6wjTI)
		const _returnValueSrU8JZL = "zimWKvVvaE476sEkg2iTn7XMbWQAAkGysqzWCGjhNW3jG1pGfct8Ts5nWCbsOP";
		const _nodeNYGDfmy = () => { return _returnValueSrU8JZL };
		const _returnValuePOezqpJ = await _RedBlackTreeyY9ln5y.makeNodeRed(_nodeNYGDfmy)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreexBViU0 = new RedBlackTree()
		const _nodeFhuEAJD = "nKIw7i2abixyynEznARjWWSeLlVEjgwKIaSuFkupI17h4qTyUtjq3hfX6YI";
		const _returnValuebgwZiqe = await _RedBlackTreexBViU0.makeNodeBlack(_nodeFhuEAJD)
		const _returnValueCWllsTH = null;
		const _grandParentNodeFdI1xII = () => { return _returnValueCWllsTH };
		const _returnValueEs3Mn2D = await _RedBlackTreexBViU0.rightLeftRotation(_grandParentNodeFdI1xII)
		const _returnValueXS4PvWx = false;
		const _nodesBQVxB = () => { return _returnValueXS4PvWx };
		const _returnValueGpGLSm9 = await _RedBlackTreexBViU0.isNodeRed(_nodesBQVxB)
		const _grandParentNodeUjZb1f = "T7KdZurElUXxE3RLN6hGaAjTZZsBHWK2w0fgC";
		const _returnValueyif4jqy = await _RedBlackTreexBViU0.rightRightRotation(_grandParentNodeUjZb1f)
		const _parentioLCUSX = {
		
	}
		const _uncleoVvCKD = undefined;
		const _nodeOB0KvCa = {
			"parent": _parentioLCUSX,
		"uncle": _uncleoVvCKD
	}
		const _returnValuesTpCEw = await _RedBlackTreexBViU0.balance(_nodeOB0KvCa)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeaQfHGmW = new RedBlackTree()
		const _grandParentNodehauvK8 = []
		const _returnValueF7cQht = await _RedBlackTreeaQfHGmW.leftRightRotation(_grandParentNodehauvK8)
		const _nodesUMEDOZ = -6.964507543050704;
		const _returnValueEZFUJe6 = await _RedBlackTreeaQfHGmW.balance(_nodesUMEDOZ)
		const _nodeXwWsCt = "sVk9jouoXweoUiCuq8jjXrvXAZ01wrlmo405pizW8Qjvm4UZUAiW9FX";
		const _returnValuexD5tya9 = await _RedBlackTreeaQfHGmW.isNodeBlack(_nodeXwWsCt)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreewEnxEMp = new RedBlackTree()
		const _returnValueSQl5bMN = undefined;
		const _nodeYaql5wt = () => { return _returnValueSQl5bMN };
		const _returnValuejILUN9R = await _RedBlackTreewEnxEMp.makeNodeRed(_nodeYaql5wt)
		const _metaAIitjUy = {
		
	}
		const _firstNodeoyhmafG = {
			"meta": _metaAIitjUy
	}
		const _arrayValueHL6D6zH = 9.450489113218037;
		const _arrayValueKcrnJyn = null;
		const _secondNodepK7xAT1 = [_arrayValueHL6D6zH, _arrayValueKcrnJyn]
		const _returnValuenpk9ENN = await _RedBlackTreewEnxEMp.swapNodeColors(_firstNodeoyhmafG, _secondNodepK7xAT1)
		const _returnValueN8ka2eP = "L5JE1DcVxuSosDRsQLHpc5FalhhKZwz9yTWuc";
		const _nodeaOQR8Ov = () => { return _returnValueN8ka2eP };
		const _returnValuezIyVbWm = await _RedBlackTreewEnxEMp.makeNodeBlack(_nodeaOQR8Ov)
		const _metat41wH3 = {
		
	}
		const _nodePcPGucG = {
			"meta": _metat41wH3
	}
		const _returnValueoZjMgZy = await _RedBlackTreewEnxEMp.makeNodeBlack(_nodePcPGucG)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeu2gKokk = new RedBlackTree()
		const _firstNodeD1PLXgU = "1mwsQp2OZO6ttsXkfY5pUPzlZKozYY4R8mJthCdN9MRDaArtxyEyIH4dGlB1JPEN8CPAlx";
		const _valueR0vU4x3 = {
		
	}
		const _secondNodey21K4Ih = new BinaryTreeNode(_valueR0vU4x3)
		const _returnValueMPdJL66 = await _secondNodey21K4Ih.toString()
		const _nodepW5krPN = {
		
	}
		const _returnValueSglf2xO = await _secondNodey21K4Ih.setRight(_nodepW5krPN)
		const _returnValueUj5Ks2 = await _RedBlackTreeu2gKokk.swapNodeColors(_firstNodeD1PLXgU, _secondNodey21K4Ih)
		const _valuelA8QsHt = {
		
	}
		const _grandParentNodeOt8aBLr = new BinaryTreeNode(_valuelA8QsHt)
		const _returnValuejYgWqv7 = await _grandParentNodeOt8aBLr.uncle()
		const _returnValueikMfdEn = null;
		const _nodeToReplaceh2rWwC = () => { return _returnValueikMfdEn };
		const _replacementNodeeFvo4N1 = {
		
	}
		const _returnValuellKHrBi = await _grandParentNodeOt8aBLr.replaceChild(_nodeToReplaceh2rWwC, _replacementNodeeFvo4N1)
		const _returnValueflRXe5M = await _grandParentNodeOt8aBLr.leftHeight()
		const _nodegkG7GDl = {
		
	}
		const _returnValueoE9KLMi = await _grandParentNodeOt8aBLr.setRight(_nodegkG7GDl)
		const _returnValueEkdpTdI = await _RedBlackTreeu2gKokk.rightLeftRotation(_grandParentNodeOt8aBLr)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreep69DID = new RedBlackTree()
		const _nodeEnpOeAi = true;
		const _returnValue75t402 = await _RedBlackTreep69DID.isNodeColored(_nodeEnpOeAi)
		const _returnValueJg5rOev = "iRbS7pqPnR1tfUGylFn";
		const _nodex6CRKbh = () => { return _returnValueJg5rOev };
		const _returnValueowoorMq = await _RedBlackTreep69DID.makeNodeBlack(_nodex6CRKbh)
		const _returnValueHvYpo2j = false;
		const _nodeF42rR1a = () => { return _returnValueHvYpo2j };
		const _returnValuesCRbblu = await _RedBlackTreep69DID.makeNodeBlack(_nodeF42rR1a)
		const _returnValueYrZMT9n = undefined;
		const _nodenDmTmXK = () => { return _returnValueYrZMT9n };
		const _returnValuebI6CYPn = await _RedBlackTreep69DID.balance(_nodenDmTmXK)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreewJhFo2f = new RedBlackTree()
		const _valueHS8brAy = null;
		const _returnValueLA9MU1S = await _RedBlackTreewJhFo2f.insert(_valueHS8brAy)
		const _arrayValuewXhRGoC = undefined;
		const _nodeYGoB0M = [_arrayValuewXhRGoC]
		const _returnValueRWff5jb = await _RedBlackTreewJhFo2f.balance(_nodeYGoB0M)
		const _grandParentNodenve5QRs = false;
		const _returnValuejGcOZmZ = await _RedBlackTreewJhFo2f.leftRightRotation(_grandParentNodenve5QRs)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreekWowwdN = new RedBlackTree()
		const _parentBdkys3 = {
		
	}
		const _leftGLVVWl5 = {
		
	}
		const _returnValueFuP7tfY = -5.457259264518536;
		const _setLeftgzu2AKS = () => { return _returnValueFuP7tfY };
		const _grandParentNodeGjzOtmE = {
			"parent": _parentBdkys3,
		"left": _leftGLVVWl5,
		"setLeft": _setLeftgzu2AKS
	}
		const _returnValueXWRt4xN = await _RedBlackTreekWowwdN.leftLeftRotation(_grandParentNodeGjzOtmE)
		const _valuefvq8Y2t = undefined;
		const _returnValuebvF3pcp = null;
		const _keyCallbackEcn9C72 = () => { return _returnValuebvF3pcp };
		const _grandParentNodehT8l4dr = new DisjointSetItem(_valuefvq8Y2t, _keyCallbackEcn9C72)
		const _characterg18ZVRV = 6.9796365561932205;
		const _isCompleteWordDhzZdSX = false;
		const _parentItemqtU1bQk = new TrieNode(_characterg18ZVRV, _isCompleteWordDhzZdSX)
		const _characterF1zVF53 = null;
		const _isCompleteWordIHCGOE0 = true;
		const _returnValue1Ul7fy = await _parentItemqtU1bQk.addChild(_characterF1zVF53, _isCompleteWordIHCGOE0)
		const _characterc0ndOue = null;
		const _returnValuesCCHVTU = await _parentItemqtU1bQk.getChild(_characterc0ndOue)
		const _returnValueu0soqof = await _parentItemqtU1bQk.suggestChildren()
		const _characterr7EU3vv = -3.5008725197941057;
		const _isCompleteWordA9VSwkU = false;
		const _returnValuejxIzTiJ = await _parentItemqtU1bQk.addChild(_characterr7EU3vv, _isCompleteWordA9VSwkU)
		const _forceSettingParentChildLTi656W = false;
		const _returnValueX0DgZ2a = await _grandParentNodehT8l4dr.setParent(_parentItemqtU1bQk, _forceSettingParentChildLTi656W)
		const _returnValueZBdmzeJ = await _grandParentNodehT8l4dr.getRoot()
		const _returnValueQBuXk3u = await _RedBlackTreekWowwdN.leftLeftRotation(_grandParentNodehT8l4dr)
		const _valueELiNN3L = {
		
	}
		const _nodef42SCIt = new BinaryTreeNode(_valueELiNN3L)
		const _returnValueLmTOBbd = false;
		const _arrayValueqI5WYZM = () => { return _returnValueLmTOBbd };
		const _arrayValueoNlMdYR = {
		
	}
		const _arrayValueO9kcYw = -5.394728775108456;
		const _arrayValueJvPBVEn = [_arrayValueoNlMdYR, _arrayValueO9kcYw]
		const _arrayValueQsDEifx = undefined;
		const _arrayValueWuwr3nV = 8.39312390516191;
		const _returnValue9CwUQn = [_arrayValueQsDEifx, _arrayValueWuwr3nV]
		const _arrayValueAzzpKu0 = () => { return _returnValue9CwUQn };
		const _arrayValueEjl3CFy = [_arrayValueqI5WYZM, _arrayValueJvPBVEn, _arrayValueAzzpKu0]
		const _arrayValueTRotY6Q = undefined;
		const _returnValueshkpEg3 = [_arrayValueEjl3CFy, _arrayValueTRotY6Q]
		const _nodeToReplaceQOeqNap = () => { return _returnValueshkpEg3 };
		const _replacementNodeHa0zyKG = {
		
	}
		const _returnValuepHMTpdq = await _nodef42SCIt.replaceChild(_nodeToReplaceQOeqNap, _replacementNodeHa0zyKG)
		const _returnValuemWNeXud = await _RedBlackTreekWowwdN.makeNodeRed(_nodef42SCIt)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeFmjfA1M = new RedBlackTree()
		const _valueFPnJ7oz = undefined;
		const _returnValuepP14Wm = await _RedBlackTreeFmjfA1M.insert(_valueFPnJ7oz)
		const _valueLc7HvGX = "LEvQLmaDQMmktSdh42AKrmuyr";
		const _returnValueltTz1k9 = await _RedBlackTreeFmjfA1M.insert(_valueLc7HvGX)
		const _arrayValueuD8UPp = "UagPS7G9cotV9lmZbejC4Yt0JdBabn7xZuvrCZKKHwmV7iMBlpaFNjHln3I6JrPFg";
		const _arrayValuegnEieeI = undefined;
		const _parentWHvRY62 = [_arrayValueuD8UPp, _arrayValuegnEieeI]
		const _uncleaJVdqXt = null;
		const _nodeJnXOKPC = {
			"parent": _parentWHvRY62,
		"uncle": _uncleaJVdqXt
	}
		const _returnValueXVfSULG = await _RedBlackTreeFmjfA1M.balance(_nodeJnXOKPC)
		const _nodeRh2W2OE = null;
		const _returnValueozaKmQc = await _RedBlackTreeFmjfA1M.makeNodeRed(_nodeRh2W2OE)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreesoUAjUw = new RedBlackTree()
		const _valueBGJGdVE = null;
		const _compareFunctionY8u8Eqw = undefined;
		const _grandParentNodeR1D8rd = new BinarySearchTreeNode(_valueBGJGdVE, _compareFunctionY8u8Eqw)
		const _returnValueGb4P5kS = await _grandParentNodeR1D8rd.findMin()
		const _valueutrsYpr = true;
		const _returnValuentosOyU = await _grandParentNodeR1D8rd.insert(_valueutrsYpr)
		const _valuepO9W0XI = undefined;
		const _returnValueCbaoXrb = await _grandParentNodeR1D8rd.insert(_valuepO9W0XI)
		const _returnValuePIMieJg = await _RedBlackTreesoUAjUw.rightRightRotation(_grandParentNodeR1D8rd)
		const _grandParentNodee3aBfgC = "cdSRLavwbB";
		const _returnValueLHvmxJ6 = await _RedBlackTreesoUAjUw.rightRightRotation(_grandParentNodee3aBfgC)
		const _arrayValuey0APZMa = -4.102032346065596;
		const _firstNodeIJhFJf8 = [_arrayValuey0APZMa]
		const _metaSFhOG4n = {
		
	}
		const _secondNodeulPheqX = {
			"meta": _metaSFhOG4n
	}
		const _returnValueamAIBxc = await _RedBlackTreesoUAjUw.swapNodeColors(_firstNodeIJhFJf8, _secondNodeulPheqX)
		const _grandParentNodevzMupt1 = "ifkBD16B7SsRDtUHXcVDtDHSNrFXp2PlS99MbEPmEkkpFDLdFUAJtyvYD3AMRHYWNGTKwTyPMC2U2Cd5umNNyxTJjS";
		const _returnValueHi9lfcN = await _RedBlackTreesoUAjUw.leftLeftRotation(_grandParentNodevzMupt1)
	});
})