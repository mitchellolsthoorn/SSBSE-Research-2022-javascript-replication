export {}
import RedBlackTree from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('RedBlackTree', () => {
	it('test for RedBlackTree', async () => {
		const _RedBlackTreeaNM0kGE = new RedBlackTree()
		const _metaPM8gEn = {
		
	}
		const _firstNode0XaXwX = {
			"meta": _metaPM8gEn
	}
		const _metatbZHATH = {
		
	}
		const _secondNodefw3e2S = {
			"meta": _metatbZHATH
	}
		const _returnValueCGvWFyM = await _RedBlackTreeaNM0kGE.swapNodeColors(_firstNode0XaXwX, _secondNodefw3e2S)
		const _parentOfVd4sd = null;
		const _rightno2xQUo = {
		
	}
		const _returnValue5Rkt3e = -6.322487479576337;
		const _returnValueEpxCKoH = () => { return _returnValue5Rkt3e };
		const _setRightVX9Ze9u = () => { return _returnValueEpxCKoH };
		const _grandParentNodes9k5vJ = {
			"parent": _parentOfVd4sd,
		"right": _rightno2xQUo,
		"setRight": _setRightVX9Ze9u
	}
		const _returnValueFo3kVd = await _RedBlackTreeaNM0kGE.rightRightRotation(_grandParentNodes9k5vJ)
		const _rightkeA74CU = {
		
	}
		const _returnValueK4Kd0EQ = null;
		const _setRightvxvkzZ = () => { return _returnValueK4Kd0EQ };
		const _grandParentNodewmonUa3 = {
			"right": _rightkeA74CU,
		"setRight": _setRightvxvkzZ
	}
		const _returnValueEKY4FIN = await _RedBlackTreeaNM0kGE.rightLeftRotation(_grandParentNodewmonUa3)
		const _grandParentNoderm71foO = -6.545351703410409;
		const _returnValuebR5glWW = await _RedBlackTreeaNM0kGE.leftLeftRotation(_grandParentNoderm71foO)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreewKs9JOq = new RedBlackTree()
		const _metaRFLDbn0 = {
		
	}
		const _noden8VLcNq = {
			"meta": _metaRFLDbn0
	}
		const _returnValueoyj7Sjj = await _RedBlackTreewKs9JOq.makeNodeRed(_noden8VLcNq)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeAXXAuGe = new RedBlackTree()
		const _parentCqQ9D1A = null;
		const _leftJgTZEl1 = undefined;
		const _returnValueIt3WMaf = false;
		const _setLeftDhKdUJD = () => { return _returnValueIt3WMaf };
		const _grandParentNodeDjWeyQM = {
			"parent": _parentCqQ9D1A,
		"left": _leftJgTZEl1,
		"setLeft": _setLeftDhKdUJD
	}
		const _returnValueHTfsM8o = await _RedBlackTreeAXXAuGe.leftLeftRotation(_grandParentNodeDjWeyQM)
		const _parentAV57wmB = null;
		const _rightWiv6Lpf = {
		
	}
		const _returnValueBCOafHQ = true;
		const _setRightNRB8rJY = () => { return _returnValueBCOafHQ };
		const _grandParentNodeiNULbY1 = {
			"parent": _parentAV57wmB,
		"right": _rightWiv6Lpf,
		"setRight": _setRightNRB8rJY
	}
		const _returnValuejsnixsC = await _RedBlackTreeAXXAuGe.rightRightRotation(_grandParentNodeiNULbY1)
		const _leftEFeKnwF = "g9BvsMYNjD4SNAWS";
		const _returnValue0DgiYd = {
		
	}
		const _setLeftZ8etvO = () => { return _returnValue0DgiYd };
		const _grandParentNodekKUh4X9 = {
			"left": _leftEFeKnwF,
		"setLeft": _setLeftZ8etvO
	}
		const _returnValueg3KM6JM = await _RedBlackTreeAXXAuGe.leftRightRotation(_grandParentNodekKUh4X9)
		const _metalrWM1k4 = {
		
	}
		const _nodeLG2g1Hc = {
			"meta": _metalrWM1k4
	}
		const _returnValuetOMqf0L = await _RedBlackTreeAXXAuGe.isNodeRed(_nodeLG2g1Hc)
		const _parentRwYPpK = null;
		const _rightYtENYy4 = {
		
	}
		const _returnValuenIjDYlI = null;
		const _setRightrYbX6cA = () => { return _returnValuenIjDYlI };
		const _grandParentNodeeiyX9zH = {
			"parent": _parentRwYPpK,
		"right": _rightYtENYy4,
		"setRight": _setRightrYbX6cA
	}
		const _returnValuerBXJGEY = await _RedBlackTreeAXXAuGe.rightRightRotation(_grandParentNodeeiyX9zH)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeLYlkVy8 = new RedBlackTree()
		const _rightaURuHFt = {
		
	}
		const _returnValue30Clas = undefined;
		const _setRight7bupP4 = () => { return _returnValue30Clas };
		const _grandParentNodeWGkB0Sa = {
			"right": _rightaURuHFt,
		"setRight": _setRight7bupP4
	}
		const _returnValueeh0XsmZ = await _RedBlackTreeLYlkVy8.rightLeftRotation(_grandParentNodeWGkB0Sa)
		const _nodetGm2HbJ = []
		const _returnValuePqXFgS = await _RedBlackTreeLYlkVy8.balance(_nodetGm2HbJ)
		const _arrayValuejYfFfvS = null;
		const _arrayValueD6AhT2s = undefined;
		const _valueskOLlXz = [_arrayValuejYfFfvS, _arrayValueD6AhT2s]
		const _returnValueYcXjs9x = await _RedBlackTreeLYlkVy8.remove(_valueskOLlXz)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreebVJRCpP = new RedBlackTree()
		const _valuevCzQVHo = null;
		const _returnValuexAitFKU = await _RedBlackTreebVJRCpP.remove(_valuevCzQVHo)
		const _metaXBD8rra = 7.289599711776461;
		const _nodeVZnHGAd = {
			"meta": _metaXBD8rra
	}
		const _returnValueYQ3PRIj = await _RedBlackTreebVJRCpP.makeNodeBlack(_nodeVZnHGAd)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeTEtrh5 = new RedBlackTree()
		const _parent9ScIhP = null;
		const _rightDH6vu3N = {
		
	}
		const _returnValueKZgho8T = 4.947636673015019;
		const _setRightR4LRt6q = () => { return _returnValueKZgho8T };
		const _grandParentNode9an7CE = {
			"parent": _parent9ScIhP,
		"right": _rightDH6vu3N,
		"setRight": _setRightR4LRt6q
	}
		const _returnValueLnCZNjD = await _RedBlackTreeTEtrh5.rightRightRotation(_grandParentNode9an7CE)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeZ26UBm = new RedBlackTree()
		const _nodeDjylgUl = true;
		const _returnValueTjfaHXO = await _RedBlackTreeZ26UBm.isNodeColored(_nodeDjylgUl)
		const _nodeHP8Lwfm = true;
		const _returnValuetYOvZSO = await _RedBlackTreeZ26UBm.isNodeColored(_nodeHP8Lwfm)
		const _arrayValueU7Bhd3o = {
		
	}
		const _parentVnGDOCq = [_arrayValueU7Bhd3o]
		const _leftNBLXISv = {
		
	}
		const _returnValuer9QKwIh = null;
		const _setLeftvMSiqYr = () => { return _returnValuer9QKwIh };
		const _grandParentNodemNUV3Lq = {
			"parent": _parentVnGDOCq,
		"left": _leftNBLXISv,
		"setLeft": _setLeftvMSiqYr
	}
		const _returnValuep6t1mfx = await _RedBlackTreeZ26UBm.leftLeftRotation(_grandParentNodemNUV3Lq)
		const _metah5NBYN = {
		
	}
		const _nodeEjcjx55 = {
			"meta": _metah5NBYN
	}
		const _returnValuewTVK9gs = await _RedBlackTreeZ26UBm.makeNodeBlack(_nodeEjcjx55)
		const _metamJFtvLj = {
		
	}
		const _nodeJoDwwc = {
			"meta": _metamJFtvLj
	}
		const _returnValueZ4JVcBJ = await _RedBlackTreeZ26UBm.makeNodeBlack(_nodeJoDwwc)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeRpimd67 = new RedBlackTree()
		const _metadlyU7zY = {
		
	}
		const _nodeIE31LoW = {
			"meta": _metadlyU7zY
	}
		const _returnValueGFyUQfb = await _RedBlackTreeRpimd67.isNodeBlack(_nodeIE31LoW)
		const _nodeeMjYnTJ = "rzrJrenZQ7I7Y0U3AyThmVL3F2eDw4";
		const _returnValuepVIsY5K = await _RedBlackTreeRpimd67.isNodeColored(_nodeeMjYnTJ)
		const _metasROUejy = {
		
	}
		const _nodefBIBd2T = {
			"meta": _metasROUejy
	}
		const _returnValueK633PQ = await _RedBlackTreeRpimd67.isNodeRed(_nodefBIBd2T)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeRGdB8UB = new RedBlackTree()
		const _leftS50ohrp = {
		
	}
		const _returnValueb9SInlp = false;
		const _setLeftgCGXjwY = () => { return _returnValueb9SInlp };
		const _grandParentNodefbr8d7i = {
			"left": _leftS50ohrp,
		"setLeft": _setLeftgCGXjwY
	}
		const _returnValuenwS2d9I = await _RedBlackTreeRGdB8UB.leftRightRotation(_grandParentNodefbr8d7i)
		const _nodeO5emcWY = "Iw2eh5vHugld5HoBGjSQi8XSkkBWIkGDTNeKyTFEfTpJhZlQ1Dj4sYli5cqf7CCl8tD2DtpsfJJ6BPxyM11RQc";
		const _returnValueNEsSsFJ = await _RedBlackTreeRGdB8UB.isNodeColored(_nodeO5emcWY)
		const _leftdEOCrwz = {
		
	}
		const _arrayValuegY2DzLQ = "fhrR3adPGmB00U8ZwIyLtoCSqCjJ2R9UgPiBzZB157FdPQDBA5KmQ9ikT7LIO573uyUi0fWFUNriKyjyRIxCWbKG2YMhRb5";
		const _arrayValueWbUF09 = undefined;
		const _arrayValueAKSg1u5 = "vLEIDCbuw1Q69e58jzXwLUrObwlcx7qLqKe87nb9PW9pwBkB2yb0";
		const _returnValuegyWatAH = true;
		const _arrayValueTPZa4vV = () => { return _returnValuegyWatAH };
		const _returnValueDJhaHx2 = [_arrayValuegY2DzLQ, _arrayValueWbUF09, _arrayValueAKSg1u5, _arrayValueTPZa4vV]
		const _setLefty6Dcymc = () => { return _returnValueDJhaHx2 };
		const _grandParentNodethPrudA = {
			"left": _leftdEOCrwz,
		"setLeft": _setLefty6Dcymc
	}
		const _returnValueFdu11PO = await _RedBlackTreeRGdB8UB.leftRightRotation(_grandParentNodethPrudA)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeDLbj9wK = new RedBlackTree()
		const _parentho8eTSy = {
		
	}
		const _uncleVVOetAw = false;
		const _nodecFoPGUj = {
			"parent": _parentho8eTSy,
		"uncle": _uncleVVOetAw
	}
		const _returnValueZXdupeg = await _RedBlackTreeDLbj9wK.balance(_nodecFoPGUj)
		const _metaJLZqZ5J = {
		
	}
		const _nodefhpgUOs = {
			"meta": _metaJLZqZ5J
	}
		const _returnValueNNecYPV = await _RedBlackTreeDLbj9wK.isNodeRed(_nodefhpgUOs)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeQ6Gejx = new RedBlackTree()
		const _valuenGX1WX = null;
		const _returnValueksyJ1dG = await _RedBlackTreeQ6Gejx.insert(_valuenGX1WX)
		const _parentUO6NHvf = {
		
	}
		const _arrayValueJJKenTR = true;
		const _uncleWXER5I = [_arrayValueJJKenTR]
		const _nodeYCKLCIj = {
			"parent": _parentUO6NHvf,
		"uncle": _uncleWXER5I
	}
		const _returnValuev7gVxV6 = await _RedBlackTreeQ6Gejx.balance(_nodeYCKLCIj)
		const _leftETmBTBt = {
		
	}
		const _returnValuem2kcaqq = null;
		const _setLeftfFvVwgk = () => { return _returnValuem2kcaqq };
		const _grandParentNodeClS6gKz = {
			"left": _leftETmBTBt,
		"setLeft": _setLeftfFvVwgk
	}
		const _returnValueetH0yOw = await _RedBlackTreeQ6Gejx.leftRightRotation(_grandParentNodeClS6gKz)
		const _leftbYea3Ce = {
		
	}
		const _returnValueR7NBLXs = "a1yI83b9RHbAISPooz5XiwXEmaSRUMXCLAwRk8n6Uq9LmH5hKt8uTuxo3S3HNFfm";
		const _setLefttKuLeq0 = () => { return _returnValueR7NBLXs };
		const _grandParentNodebHn3Fp3 = {
			"left": _leftbYea3Ce,
		"setLeft": _setLefttKuLeq0
	}
		const _returnValueAc0KLlf = await _RedBlackTreeQ6Gejx.leftRightRotation(_grandParentNodebHn3Fp3)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeNQQ2NU = new RedBlackTree()
		const _parentmb55XeX = true;
		const _rightY17myiN = {
		
	}
		const _arrayValueqTKIDeV = -3.5365039284964457;
		const _arrayValueY2vvoPB = undefined;
		const _arrayValuep0LHaS = null;
		const _returnValuefHkEXyt = [_arrayValueqTKIDeV, _arrayValueY2vvoPB, _arrayValuep0LHaS]
		const _setRightCS0aHYG = () => { return _returnValuefHkEXyt };
		const _grandParentNodeSc7lMUC = {
			"parent": _parentmb55XeX,
		"right": _rightY17myiN,
		"setRight": _setRightCS0aHYG
	}
		const _returnValueug3hNb5 = await _RedBlackTreeNQQ2NU.rightRightRotation(_grandParentNodeSc7lMUC)
		const _nodeAXCVvB0 = true;
		const _returnValuenv681B = await _RedBlackTreeNQQ2NU.isNodeColored(_nodeAXCVvB0)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeBqvxBqe = new RedBlackTree()
		const _parentWw2qJ30 = {
		
	}
		const _leftqPUcOMn = []
		const _returnValueGxBS5pI = "hFyOUw";
		const _setLeftOXkvhOQ = () => { return _returnValueGxBS5pI };
		const _grandParentNodeUxVFgzW = {
			"parent": _parentWw2qJ30,
		"left": _leftqPUcOMn,
		"setLeft": _setLeftOXkvhOQ
	}
		const _returnValueRvvkOn8 = await _RedBlackTreeBqvxBqe.leftLeftRotation(_grandParentNodeUxVFgzW)
		const _arrayValueHHtBLLV = null;
		const _valueZSTHqUT = [_arrayValueHHtBLLV]
		const _returnValueP8xcNRT = await _RedBlackTreeBqvxBqe.remove(_valueZSTHqUT)
		const _leftSLSHMK = {
		
	}
		const _setLeftOd81mzo = 3.693506744882324;
		const _grandParentNodeczOZYTA = {
			"left": _leftSLSHMK,
		"setLeft": _setLeftOd81mzo
	}
		const _returnValueZJyPvU = await _RedBlackTreeBqvxBqe.leftRightRotation(_grandParentNodeczOZYTA)
		const _nodedoc7KUA = false;
		const _returnValueYV7UBgh = await _RedBlackTreeBqvxBqe.isNodeColored(_nodedoc7KUA)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreea7IHyEO = new RedBlackTree()
		const _arrayValuePATY7Yd = {
		
	}
		const _arrayValueDGTwPTa = 0.6552591457088361;
		const _arrayValuepSa6XBR = [_arrayValuePATY7Yd, _arrayValueDGTwPTa]
		const _arrayValuegA3K5IW = 8.548633756838843;
		const _valuexicfQ7 = [_arrayValuepSa6XBR, _arrayValuegA3K5IW]
		const _returnValuenRdLbhl = await _RedBlackTreea7IHyEO.insert(_valuexicfQ7)
		const _valueRpWJu7E = {
		
	}
		const _returnValueJR7bFxB = await _RedBlackTreea7IHyEO.insert(_valueRpWJu7E)
		const _returnValueLnv2YFg = null;
		const _arrayValueZQ0MD3j = () => { return _returnValueLnv2YFg };
		const _arrayValueXCWrOhB = true;
		const _arrayValueBjUDsgo = 7.607148386416192;
		const _nodeSb3VuQK = [_arrayValueZQ0MD3j, _arrayValueXCWrOhB, _arrayValueBjUDsgo]
		const _returnValueDTavX5h = await _RedBlackTreea7IHyEO.makeNodeRed(_nodeSb3VuQK)
	});
})