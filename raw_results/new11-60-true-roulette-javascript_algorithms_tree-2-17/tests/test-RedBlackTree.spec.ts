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
		const _RedBlackTreebDMddVt = new RedBlackTree()
		const _rightYdUGVf = {
		
	}
		const _returnValuekqqRfU2 = "T35PVi4voxuwkgnfY5A3No7Px6xgeZiT2jIp3kjwhvqotQ";
		const _setRightxWJTxb3 = () => { return _returnValuekqqRfU2 };
		const _grandParentNodeJCDbWn8 = {
			"right": _rightYdUGVf,
		"setRight": _setRightxWJTxb3
	}
		const _returnValuenZPariR = await _RedBlackTreebDMddVt.rightLeftRotation(_grandParentNodeJCDbWn8)
		const _returnValueMEERH0 = true;
		const _arrayValuejHQfyId = () => { return _returnValueMEERH0 };
		const _nodeeEugTdb = [_arrayValuejHQfyId]
		const _returnValuejEDMztn = await _RedBlackTreebDMddVt.makeNodeRed(_nodeeEugTdb)
		const _right0m27fZ = "eMjY6DnFdJB1c8WeEHH8vAnizCl2";
		const _returnValueFFGaNzZ = "v6YLaywhAJnIqVdd8a1nPme8o";
		const _setRightFWT8i9 = () => { return _returnValueFFGaNzZ };
		const _grandParentNodeKAqjm6O = {
			"right": _right0m27fZ,
		"setRight": _setRightFWT8i9
	}
		const _returnValueUi3mzj7 = await _RedBlackTreebDMddVt.rightLeftRotation(_grandParentNodeKAqjm6O)
		const _nodeijctDEY = true;
		const _returnValuesrzzoMQ = await _RedBlackTreebDMddVt.isNodeColored(_nodeijctDEY)
		const _arrayValueUkcRxzx = true;
		const _arrayValue5m7bsN = [_arrayValueUkcRxzx]
		const _arrayValueDN6l1qn = null;
		const _arrayValueL4xpeYP = "eiSysHvGVSE65xaFp8RvY12zzoMRiQnR1Rd1I0NU6Ya1M3C574";
		const _arrayValueoBCGfIh = [_arrayValueL4xpeYP]
		const _arrayValueNJJcSl = true;
		const _valueddR9UlK = [_arrayValue5m7bsN, _arrayValueDN6l1qn, _arrayValueoBCGfIh, _arrayValueNJJcSl]
		const _returnValuedA0U6q2 = await _RedBlackTreebDMddVt.remove(_valueddR9UlK)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreei3gDnk3 = new RedBlackTree()
		const _valuefVq4nsw = {
		
	}
		const _noderJN7AKN = new BinaryTreeNode(_valuefVq4nsw)
		const _returnValueygVSM45 = await _noderJN7AKN.toString()
		const _returnValuelo95ty = -4.331575238157964;
		const _arrayValueiTHuD5h = () => { return _returnValuelo95ty };
		const _returnValueFPM8Gik = {
		
	}
		const _arrayValueLKKX4o2 = () => { return _returnValueFPM8Gik };
		const _arrayValuefQ8M73s = "n5iULbeKGoPrXGnRpfn3UnGUboj1dEG1AkKy0P";
		const _arrayValuem375he4 = [_arrayValuefQ8M73s]
		const _nodeToReplacev4T1Vsf = [_arrayValueiTHuD5h, _arrayValueLKKX4o2, _arrayValuem375he4]
		const _replacementNodeGiwvYvm = {
		
	}
		const _returnValuehdKm05R = await _noderJN7AKN.replaceChild(_nodeToReplacev4T1Vsf, _replacementNodeGiwvYvm)
		const _returnValueqZhKWlY = await _RedBlackTreei3gDnk3.isNodeRed(_noderJN7AKN)
		const _returnValueDUV8aI = false;
		const _node38kP7o = () => { return _returnValueDUV8aI };
		const _returnValuerJ6zN3B = await _RedBlackTreei3gDnk3.balance(_node38kP7o)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreewyuGhs = new RedBlackTree()
		const _returnValueV7FmO10 = true;
		const _grandParentNodetmWV7C5 = () => { return _returnValueV7FmO10 };
		const _returnValueBkQPMT9 = await _RedBlackTreewyuGhs.leftLeftRotation(_grandParentNodetmWV7C5)
		const _valueUZtJFS2 = -5.409515811922266;
		const _returnValueWzhfq3p = await _RedBlackTreewyuGhs.insert(_valueUZtJFS2)
		const _arrayValueF52cdbN = true;
		const _arrayValueWy8GYV = -2.5098797380494906;
		const _arrayValueACxIURc = -0.8568372698250997;
		const _arrayValueJg7Lq2d = [_arrayValueF52cdbN, _arrayValueWy8GYV, _arrayValueACxIURc]
		const _nodePsPjlEa = [_arrayValueJg7Lq2d]
		const _returnValuen2Cv97 = await _RedBlackTreewyuGhs.balance(_nodePsPjlEa)
		const _metaIMeqBVo = {
		
	}
		const _nodeW8mbJ8m = {
			"meta": _metaIMeqBVo
	}
		const _returnValueI9i8dpR = await _RedBlackTreewyuGhs.isNodeBlack(_nodeW8mbJ8m)
		const _valuelmBsoOZ = {
		
	}
		const _nodentiKKEA = new BinaryTreeNode(_valuelmBsoOZ)
		const _nodeToReplacebFS2nSc = 1.236362236696218;
		const _replacementNodesEH4D68 = {
		
	}
		const _returnValuesE72puD = await _nodentiKKEA.replaceChild(_nodeToReplacebFS2nSc, _replacementNodesEH4D68)
		const _returnValuerSqHD07 = await _nodentiKKEA.rightHeight()
		const _nodeRMs2fAC = {
		
	}
		const _returnValueuc1wdv = await _nodentiKKEA.setRight(_nodeRMs2fAC)
		const _arrayValuelvis44u = undefined;
		const _arrayValueUWNtM7z = {
		
	}
		const _arrayValueBkSuEId = undefined;
		const _arrayValueTiq3cxo = [_arrayValuelvis44u, _arrayValueUWNtM7z, _arrayValueBkSuEId]
		const _sourceNodeEdrEkdC = [_arrayValueTiq3cxo]
		const _arrayValuenmvniw = "1dKNpNMHKR4KiParG6CZ5SOlnFTQ7vz2G01C0AlSKq3xnNY6UGWN7WCM34lzO9id8zruXkXvw3jUy3Shcz";
		const _returnValuelPdngtm = [_arrayValuenmvniw]
		const _getValuevzromvA = () => { return _returnValuelPdngtm };
		const _returnValueiarh3yo = []
		const _setValuebYQLrjB = () => { return _returnValueiarh3yo };
		const _targetNodeZCrTp8h = {
			"getValue": _getValuevzromvA,
		"setValue": _setValuebYQLrjB
	}
		const _returnValuexMdGS0L = await _nodentiKKEA.copyNode(_sourceNodeEdrEkdC, _targetNodeZCrTp8h)
		const _returnValueccGoD7B = await _RedBlackTreewyuGhs.isNodeBlack(_nodentiKKEA)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeyrpibBl = new RedBlackTree()
		const _metafBpRqYj = {
		
	}
		const _nodexny0Rb2 = {
			"meta": _metafBpRqYj
	}
		const _returnValueFUmW86U = await _RedBlackTreeyrpibBl.makeNodeBlack(_nodexny0Rb2)
		const _metaIbDsXHz = {
		
	}
		const _nodenchyLyA = {
			"meta": _metaIbDsXHz
	}
		const _returnValueBXMrhX = await _RedBlackTreeyrpibBl.isNodeBlack(_nodenchyLyA)
		const _metaNXYZfd6 = {
		
	}
		const _nodeTzi7N3A = {
			"meta": _metaNXYZfd6
	}
		const _returnValueQWa38Co = await _RedBlackTreeyrpibBl.isNodeBlack(_nodeTzi7N3A)
		const _returnValueyR22E1 = undefined;
		const _nodewVr9qo = () => { return _returnValueyR22E1 };
		const _returnValueMz8jiFR = await _RedBlackTreeyrpibBl.balance(_nodewVr9qo)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeKPrONnY = new RedBlackTree()
		const _firstNodezo5YEvj = "PZdUDf8KlPgvaWwUMwzPYq41na8l78QH1XJzKEwRVTbJAvPHnOTEotvG3KHfwjtISuofsRPp5r";
		const _metaXWjpRNz = {
		
	}
		const _secondNodez8XtywR = {
			"meta": _metaXWjpRNz
	}
		const _returnValuerqw4yE = await _RedBlackTreeKPrONnY.swapNodeColors(_firstNodezo5YEvj, _secondNodez8XtywR)
		const _metaO3twnAz = {
		
	}
		const _nodekHGLCtz = {
			"meta": _metaO3twnAz
	}
		const _returnValueeKgEqA7 = await _RedBlackTreeKPrONnY.isNodeBlack(_nodekHGLCtz)
		const _arrayValueMBykEbE = undefined;
		const _arrayValuelRMTnm3 = -0.8525986515844899;
		const _nodebzNuYyD = [_arrayValueMBykEbE, _arrayValuelRMTnm3]
		const _returnValuenrL6a21 = await _RedBlackTreeKPrONnY.balance(_nodebzNuYyD)
		const _returnValueD3oQiQ3 = undefined;
		const _returnValueMfbbLm = () => { return _returnValueD3oQiQ3 };
		const _firstNodeXyLXrWF = () => { return _returnValueMfbbLm };
		const _secondNodeVlZn4z = false;
		const _returnValueP1IucUZ = await _RedBlackTreeKPrONnY.swapNodeColors(_firstNodeXyLXrWF, _secondNodeVlZn4z)
		const _nodevKfbN7C = []
		const _returnValueso3lWtS = await _RedBlackTreeKPrONnY.makeNodeBlack(_nodevKfbN7C)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeXBtgCOo = new RedBlackTree()
		const _nodewJi0TI3 = 1.297492272975349;
		const _returnValuexsEdGDP = await _RedBlackTreeXBtgCOo.isNodeColored(_nodewJi0TI3)
		const _valueYVMSQ7x = {
		
	}
		const _nodeKJcxQsH = new BinaryTreeNode(_valueYVMSQ7x)
		const _nodeQMY3UWN = {
		
	}
		const _returnValuecLTBi6r = await _nodeKJcxQsH.setLeft(_nodeQMY3UWN)
		const _valuepc3f88Z = {
		
	}
		const _returnValuepPxzazq = await _nodeKJcxQsH.setValue(_valuepc3f88Z)
		const _returnValue2J4ld6 = await _nodeKJcxQsH.balanceFactor()
		const _returnValuesQMa54K = await _RedBlackTreeXBtgCOo.makeNodeBlack(_nodeKJcxQsH)
		const _nodeAt0Ibd5 = "aHM1d1Db5rd9XiYDRxqkCAppIh2UrfQX5vOslxI9C8apA2piIj5oC3JM4qEmrBqqC2jNzydKqtQqjdc7d7hvmeSWeIQbm";
		const _returnValueI3XV9jU = await _RedBlackTreeXBtgCOo.isNodeRed(_nodeAt0Ibd5)
		const _metaxd5hZzH = {
		
	}
		const _nodeFFnL3dC = {
			"meta": _metaxd5hZzH
	}
		const _returnValueLFvMc1T = await _RedBlackTreeXBtgCOo.makeNodeRed(_nodeFFnL3dC)
		const _arrayValueKa6usvq = null;
		const _arrayValueDvQUu8c = false;
		const _grandParentNodeYMsfJaT = [_arrayValueKa6usvq, _arrayValueDvQUu8c]
		const _returnValueb6EHue8 = await _RedBlackTreeXBtgCOo.leftLeftRotation(_grandParentNodeYMsfJaT)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreemlprN0R = new RedBlackTree()
		const _returnValuetyLeidA = "SNPhcjCWULhUYqVa6LZvygLmQojY2";
		const _grandParentNodeXPoW1j = () => { return _returnValuetyLeidA };
		const _returnValueweCiwoF = await _RedBlackTreemlprN0R.rightRightRotation(_grandParentNodeXPoW1j)
		const _arrayValueNIYkGXO = "Mx1";
		const _grandParentNodeIpZ9D6 = [_arrayValueNIYkGXO]
		const _returnValueP9k3m2S = await _RedBlackTreemlprN0R.leftLeftRotation(_grandParentNodeIpZ9D6)
		const _valuefWPFT0U = {
		
	}
		const _nodeaCatcO0 = new BinaryTreeNode(_valuefWPFT0U)
		const _returnValueTDp82Mi = await _nodeaCatcO0.rightHeight()
		const _valuen7AbsX5 = true;
		const _compareFunctionzamncG = undefined;
		const _sourceNodeDonmQat = new BinarySearchTreeNode(_valuen7AbsX5, _compareFunctionzamncG)
		const _valueAI5vX35 = []
		const _returnValueFJ5F9E3 = await _sourceNodeDonmQat.insert(_valueAI5vX35)
		const _valuefftdc1x = "11jxdXK8Q63gUyi7BdrkWHFDIUDSrSkbIHTzpLBv8LGF";
		const _returnValuekxqP6BE = await _sourceNodeDonmQat.contains(_valuefftdc1x)
		const _returnValueZMf7Il7 = undefined;
		const _getValueWCFr5Ra = () => { return _returnValueZMf7Il7 };
		const _returnValue3A8yBc = {
		
	}
		const _setValueDXjKkE = () => { return _returnValue3A8yBc };
		const _targetNodeTF7rH7A = {
			"getValue": _getValueWCFr5Ra,
		"setValue": _setValueDXjKkE
	}
		const _returnValueQbEuD10 = await _nodeaCatcO0.copyNode(_sourceNodeDonmQat, _targetNodeTF7rH7A)
		const _returnValuef8ClUEg = await _nodeaCatcO0.uncle()
		const _valuebFIYWb = {
		
	}
		const _returnValueDgahTQQ = await _nodeaCatcO0.setValue(_valuebFIYWb)
		const _returnValueVBtbzV = await _nodeaCatcO0.balanceFactor()
		const _returnValueTJPkbG = await _RedBlackTreemlprN0R.makeNodeBlack(_nodeaCatcO0)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreee7o7mTg = new RedBlackTree()
		const _valueJNf0a4H = null;
		const _returnValuewgkL16c = await _RedBlackTreee7o7mTg.insert(_valueJNf0a4H)
		const _metaKpMiaIt = {
		
	}
		const _nodetBhjmwM = {
			"meta": _metaKpMiaIt
	}
		const _returnValueP4JjK4n = await _RedBlackTreee7o7mTg.isNodeRed(_nodetBhjmwM)
		const _valueAeZv7X = {
		
	}
		const _firstNodeespxHbg = new BinaryTreeNode(_valueAeZv7X)
		const _nodeHwBQbA5 = {
		
	}
		const _returnValueIMDyaac = await _firstNodeespxHbg.setLeft(_nodeHwBQbA5)
		const _returnValueBbeZJIC = await _firstNodeespxHbg.uncle()
		const _returnValueDw6OO3i = await _firstNodeespxHbg.rightHeight()
		const _valueEtujDu1 = {
		
	}
		const _returnValueoo1Llz6 = await _firstNodeespxHbg.setValue(_valueEtujDu1)
		const _metaXwjXcO2 = {
		
	}
		const _secondNodeQurKXT1 = {
			"meta": _metaXwjXcO2
	}
		const _returnValueOYXFQjG = await _RedBlackTreee7o7mTg.swapNodeColors(_firstNodeespxHbg, _secondNodeQurKXT1)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreet3qheL8 = new RedBlackTree()
		const _parentwtdMpyj = {
		
	}
		const _leftUtwZyoN = {
		
	}
		const _returnValuepSFLtEo = "GzwLhfCRfHs3kkbDoR8";
		const _setLeftCaN8pW = () => { return _returnValuepSFLtEo };
		const _grandParentNodeMihc7Qw = {
			"parent": _parentwtdMpyj,
		"left": _leftUtwZyoN,
		"setLeft": _setLeftCaN8pW
	}
		const _returnValueg4jLXzk = await _RedBlackTreet3qheL8.leftLeftRotation(_grandParentNodeMihc7Qw)
		const _grandParentNodeVsspxKe = null;
		const _returnValueEK9jAqo = await _RedBlackTreet3qheL8.rightLeftRotation(_grandParentNodeVsspxKe)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeImOicng = new RedBlackTree()
		const _valueUzOvWqB = {
		
	}
		const _nodeIgCGGU = new BinaryTreeNode(_valueUzOvWqB)
		const _arrayValueLsbwGUI = null;
		const _nodeYVbzot = [_arrayValueLsbwGUI]
		const _returnValuepHbcnUm = await _nodeIgCGGU.setRight(_nodeYVbzot)
		const _valueEjBM57J = null;
		const _returnValueaXtj6Ne = await _nodeIgCGGU.setValue(_valueEjBM57J)
		const _returnValueSJJEynR = await _RedBlackTreeImOicng.makeNodeBlack(_nodeIgCGGU)
		const _metaybXrFQ6 = {
		
	}
		const _nodeXabu2qB = {
			"meta": _metaybXrFQ6
	}
		const _returnValueE8jYShm = await _RedBlackTreeImOicng.makeNodeRed(_nodeXabu2qB)
		const _arrayValueTzZVpOn = null;
		const _arrayValuejfBA1PI = {
		
	}
		const _arrayValueZx69PRS = "DWz";
		const _returnValueI4FkqL = [_arrayValueTzZVpOn, _arrayValuejfBA1PI, _arrayValueZx69PRS]
		const _nodeTy37Ad = () => { return _returnValueI4FkqL };
		const _returnValueL8ig8OH = await _RedBlackTreeImOicng.makeNodeBlack(_nodeTy37Ad)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreepyeLw8G = new RedBlackTree()
		const _grandParentNodelSOCver = null;
		const _returnValueRUTqPd = await _RedBlackTreepyeLw8G.leftRightRotation(_grandParentNodelSOCver)
		const _valueWsgYEKU = -4.476701789432834;
		const _returnValueW4NuqOV = await _RedBlackTreepyeLw8G.remove(_valueWsgYEKU)
		const _nodeKr1O8Rd = 7.721968060055882;
		const _returnValuetDFS89A = await _RedBlackTreepyeLw8G.isNodeColored(_nodeKr1O8Rd)
		const _arrayValueNAj9CoV = false;
		const _returnValuemW6VRo2 = "BwcXSQB4EI8mIusFIyyAwiKIqiVgDPfRF1YU1TRcnNSOYBQZMc8hZkIMynReAquYpSXltTq0WWOsWkOC81gTlLRlawF8Bxv3GGJ";
		const _arrayValuedS18mbM = () => { return _returnValuemW6VRo2 };
		const _returnValuemeotsEh = undefined;
		const _arrayValuer6l7yFM = () => { return _returnValuemeotsEh };
		const _arrayValuekAr15Qu = 9.366086716594907;
		const _arrayValueS1OeCVR = 5.056520877213211;
		const _arrayValueaIajk1O = [_arrayValuekAr15Qu, _arrayValueS1OeCVR]
		const _arrayValuekrvqP0 = 2.99046716201288;
		const _arrayValuexZB9nED = [_arrayValuer6l7yFM, _arrayValueaIajk1O, _arrayValuekrvqP0]
		const _arrayValuevzuJ2t = [_arrayValuexZB9nED]
		const _valueRLaPrrL = [_arrayValueNAj9CoV, _arrayValuedS18mbM, _arrayValuevzuJ2t]
		const _returnValueeQEb3l5 = await _RedBlackTreepyeLw8G.remove(_valueRLaPrrL)
		const _valuebu0DOJt = null;
		const _compareFunctionAAh1b8q = undefined;
		const _grandParentNodee03h935 = new BinarySearchTreeNode(_valuebu0DOJt, _compareFunctionAAh1b8q)
		const _valueAkPoirU = "PKZpq2tRJbXsHIWDF2pO0jGey9gw9l8TPZdfdRPKA2hYwBY8qwE7sJlXHxnJnCXhzfGknX";
		const _returnValueaKnh1ii = await _grandParentNodee03h935.contains(_valueAkPoirU)
		const _returnValueS4IqDO = await _RedBlackTreepyeLw8G.rightLeftRotation(_grandParentNodee03h935)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeXioiq0g = new RedBlackTree()
		const _valuerxDoNe9 = -7.730115814521026;
		const _returnValueWV4TYA = await _RedBlackTreeXioiq0g.remove(_valuerxDoNe9)
		const _returnValueaJlnPox = false;
		const _nodegaI8qk2 = () => { return _returnValueaJlnPox };
		const _returnValuehKCHLRy = await _RedBlackTreeXioiq0g.isNodeRed(_nodegaI8qk2)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTree3o2sjN = new RedBlackTree()
		const _arrayValueuOJ8mdS = "ndQqMFK0LO5684fVsaD5LylkjzeiwS1avB5fIyGgdm1g3Hw5DtNmwg2sblodQ";
		const _arrayValueeaMWb30 = undefined;
		const _returnValuenBm8Ltq = "CcXAEnGlxu17aRy1lq7HqMPvSFW2uNLTwHMQIYDY3UuaeWDsYYJv8wCk8lCk2AqyOCyI5JVt8D27yMXin3amuVC";
		const _arrayValueFpyLcaT = () => { return _returnValuenBm8Ltq };
		const _arrayValuepfbNkA = 1.8720878091522302;
		const _parentZ5AZ0sX = [_arrayValueuOJ8mdS, _arrayValueeaMWb30, _arrayValueFpyLcaT, _arrayValuepfbNkA]
		const _rightRn5x50O = "T1vft7TKo2UEXvMgdERkiz7p5tAmgs5w8d3iGOkxtz24SSodPcmR88GkOWapiUG28o8emxP6MJR2ss9I1edijfNKbEw8L3G8";
		const _returnValueiwbInTL = 1.2513510319779826;
		const _setRighthmd1k4p = () => { return _returnValueiwbInTL };
		const _grandParentNode3NSg3f = {
			"parent": _parentZ5AZ0sX,
		"right": _rightRn5x50O,
		"setRight": _setRighthmd1k4p
	}
		const _returnValuefqMQkAP = await _RedBlackTree3o2sjN.rightRightRotation(_grandParentNode3NSg3f)
		const _arrayValuedauxdDU = "d54MyxcR8CPzdtUG9iTrrBDyRGOn7HUxyKfht7Z9Bv9jDPHg";
		const _grandParentNodeGFRb6Qk = [_arrayValuedauxdDU]
		const _returnValuedH8ozHu = await _RedBlackTree3o2sjN.rightLeftRotation(_grandParentNodeGFRb6Qk)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreemycIaMi = new RedBlackTree()
		const _valueNgSNWz2 = true;
		const _returnValuegkogFo7 = await _RedBlackTreemycIaMi.insert(_valueNgSNWz2)
		const _valuej3wiXKf = 6.992842651411305;
		const _returnValueRhPBmff = await _RedBlackTreemycIaMi.insert(_valuej3wiXKf)
	});
})