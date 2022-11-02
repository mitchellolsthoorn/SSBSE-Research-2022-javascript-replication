export {}
import RedBlackTree from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
import BinarySearchTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js";
import BinaryTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('RedBlackTree', () => {
	it('test for RedBlackTree', async () => {
		const _RedBlackTreeYyzbXsd = new RedBlackTree()
		const _nodelXx2dmC = "sCp4Oq1gTynFeShm0rqEdRcKAYV4JzlfdclxU7JomIZHbYdxitIWiQPuBvg7rADWjwrXjG1c";
		const _returnValueebCxdK = await _RedBlackTreeYyzbXsd.isNodeBlack(_nodelXx2dmC)
		const _valuetSqj87J = null;
		const _compareFunctionvLieWye = undefined;
		const _grandParentNodelnTFY8c = new BinarySearchTreeNode(_valuetSqj87J, _compareFunctionvLieWye)
		const _valueR40vhHj = false;
		const _returnValuexgBiLmH = await _grandParentNodelnTFY8c.remove(_valueR40vhHj)
		const _arrayValueSepaFCt = -4.9638240311189366;
		const _valueDaceCzz = [_arrayValueSepaFCt]
		const _returnValueUC39MMC = await _grandParentNodelnTFY8c.insert(_valueDaceCzz)
		const _returnValueLfWF1qu = await _RedBlackTreeYyzbXsd.rightLeftRotation(_grandParentNodelnTFY8c)
		const _arrayValueGKw0iQM = true;
		const _arrayValueMdFKZIx = -7.7988432788643065;
		const _arrayValueEsAILis = "Wfm7rCUJcQqX1Anht8NT4M1VxeDhlO2kBbHkPGbzu9Rmg6XRUyFwJs17M4w57WaMLCIz7z1IWP2NGsodXn55SkWz0FzHCxpy";
		const _grandParentNodeMozgbO2 = [_arrayValueGKw0iQM, _arrayValueMdFKZIx, _arrayValueEsAILis]
		const _returnValuePkjsjId = await _RedBlackTreeYyzbXsd.leftLeftRotation(_grandParentNodeMozgbO2)
		const _values1rlCkd = null;
		const _nodeInhMLmz = new BinaryTreeNode(_values1rlCkd)
		const _node8uvcIQ = {
		
	}
		const _returnValuelVklO33 = await _nodeInhMLmz.setLeft(_node8uvcIQ)
		const _returnValueKo1e6C0 = await _nodeInhMLmz.height()
		const _returnValuecVSmWSb = await _RedBlackTreeYyzbXsd.makeNodeRed(_nodeInhMLmz)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreecwyTham = new RedBlackTree()
		const _arrayValueisqYuO8 = null;
		const _arrayValuehSVElBL = "pLW6SK4P7rl0";
		const _arrayValueDbtCvTG = false;
		const _arrayValuex3yvvcK = undefined;
		const _nodeWwYIs0P = [_arrayValueisqYuO8, _arrayValuehSVElBL, _arrayValueDbtCvTG, _arrayValuex3yvvcK]
		const _returnValuea27M3vU = await _RedBlackTreecwyTham.balance(_nodeWwYIs0P)
		const _metaI8XNc4O = {
		
	}
		const _nodeVEigG7E = {
			"meta": _metaI8XNc4O
	}
		const _returnValuea15ticv = await _RedBlackTreecwyTham.isNodeRed(_nodeVEigG7E)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeneO6pJQ = new RedBlackTree()
		const _valueBy9jFAg = null;
		const _returnValuei45vAnL = await _RedBlackTreeneO6pJQ.remove(_valueBy9jFAg)
		const _returnValuemXSgqKh = "7t8XozXNZ3xHLRkyZnBqOUEFjg0YWvGM1hUiXwzpPcsTGZFcP4jhyE1yXt4UywLHBFSq";
		const _grandParentNodey2MiTe9 = () => { return _returnValuemXSgqKh };
		const _returnValuelI31QP = await _RedBlackTreeneO6pJQ.rightLeftRotation(_grandParentNodey2MiTe9)
		const _valueqCc2YGY = null;
		const _grandParentNodeP0DuzZW = new BinaryTreeNode(_valueqCc2YGY)
		const _nodeEUjuESB = {
		
	}
		const _returnValueYsJGLTG = await _grandParentNodeP0DuzZW.setRight(_nodeEUjuESB)
		const _returnValuec6QbH6W = await _grandParentNodeP0DuzZW.uncle()
		const _returnValueM5MWr1c = await _RedBlackTreeneO6pJQ.leftRightRotation(_grandParentNodeP0DuzZW)
		const _valuepEzDYyi = {
		
	}
		const _grandParentNodeHCI4JHE = new BinaryTreeNode(_valuepEzDYyi)
		const _returnValuetU1b1pY = await _grandParentNodeHCI4JHE.balanceFactor()
		const _returnValuem5ycLRC = "9LQDTVlxEPLL3TeO7LPBkJ5CvKGv8o5D9DrFiKP2fw";
		const _returnValuemLraSuP = () => { return _returnValuem5ycLRC };
		const _sourceNodeQXQwfkg = () => { return _returnValuemLraSuP };
		const _valueKsNIFCs = {
		
	}
		const _targetNodeKLC26sK = new BinaryTreeNode(_valueKsNIFCs)
		const _returnValueyHsxqQo = await _targetNodeKLC26sK.balanceFactor()
		const _nodeN4xFZzD = {
		
	}
		const _returnValuek2jRqE = await _targetNodeKLC26sK.setLeft(_nodeN4xFZzD)
		const _returnValueEuaNvG9 = await _targetNodeKLC26sK.traverseInOrder()
		const _returnValueuuEOZQM = await _targetNodeKLC26sK.rightHeight()
		const _returnValuey79Zgto = await _grandParentNodeHCI4JHE.copyNode(_sourceNodeQXQwfkg, _targetNodeKLC26sK)
		const _returnValueWBcZJsa = await _RedBlackTreeneO6pJQ.rightLeftRotation(_grandParentNodeHCI4JHE)
		const _valueeXkU0GI = "BQ94YnIEPWaPUw7Q8avfPi";
		const _returnValueKaU36b = await _RedBlackTreeneO6pJQ.remove(_valueeXkU0GI)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeQF5uP5I = new RedBlackTree()
		const _valueAuzzStA = undefined;
		const _returnValueeuj7TxH = await _RedBlackTreeQF5uP5I.insert(_valueAuzzStA)
		const _metaInzxOMP = {
		
	}
		const _nodetxtDVPF = {
			"meta": _metaInzxOMP
	}
		const _returnValueBYjRoXl = await _RedBlackTreeQF5uP5I.makeNodeBlack(_nodetxtDVPF)
		const _valueqMDckgQ = undefined;
		const _returnValueufZsPSy = await _RedBlackTreeQF5uP5I.remove(_valueqMDckgQ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreepiz8ba = new RedBlackTree()
		const _parentLmC5Xh8 = {
		
	}
		const _returnValuebIkNjr5 = -3.529352860565986;
		const _leftekHjr9o = () => { return _returnValuebIkNjr5 };
		const _returnValueZK9pyKH = null;
		const _setLeftIQ0y4nu = () => { return _returnValueZK9pyKH };
		const _grandParentNodexyBhbBN = {
			"parent": _parentLmC5Xh8,
		"left": _leftekHjr9o,
		"setLeft": _setLeftIQ0y4nu
	}
		const _returnValueojAmddx = await _RedBlackTreepiz8ba.leftLeftRotation(_grandParentNodexyBhbBN)
		const _firstNodecJYikS = "dlUy7MSytqxae3pa8d7TabgmRLOHrKv4L9CiK10b1ihnjrTbgLCjvZvTh4FqBHdo73BoDOOXnjXIzqPEjTc2mCnVQy";
		const _arrayValueoTkrTlG = "Af3TKh8snXuR08MWGXKz43ldkbqPj0GYlN5yFO";
		const _arrayValuevKOGaJo = null;
		const _arrayValueN5W3PoN = undefined;
		const _returnValuewl5YnrI = [_arrayValuevKOGaJo, _arrayValueN5W3PoN]
		const _arrayValueJcjVtFy = () => { return _returnValuewl5YnrI };
		const _arrayValueE4ovVy6 = 3.2579878158102655;
		const _arrayValueaj37fN3 = false;
		const _arrayValueeTTs0z = [_arrayValueJcjVtFy, _arrayValueE4ovVy6, _arrayValueaj37fN3]
		const _arrayValueU3o4Gwk = null;
		const _arrayValuetvBpPuE = [_arrayValueoTkrTlG, _arrayValueeTTs0z, _arrayValueU3o4Gwk]
		const _returnValueVX3NREH = [_arrayValuetvBpPuE]
		const _secondNodeLikrilh = () => { return _returnValueVX3NREH };
		const _returnValueLMl4t8 = await _RedBlackTreepiz8ba.swapNodeColors(_firstNodecJYikS, _secondNodeLikrilh)
		const _valuek884j8J = false;
		const _returnValueWGi8MlO = await _RedBlackTreepiz8ba.insert(_valuek884j8J)
		const _returnValuedCh9nY2 = null;
		const _grandParentNodeclbZUhS = () => { return _returnValuedCh9nY2 };
		const _returnValueYzKMS6D = await _RedBlackTreepiz8ba.rightRightRotation(_grandParentNodeclbZUhS)
		const _valuebLOnIXK = {
		
	}
		const _nodez7kx08H = new BinaryTreeNode(_valuebLOnIXK)
		const _valueCFDAXzP = null;
		const _returnValueAkJ5sKm = await _nodez7kx08H.setValue(_valueCFDAXzP)
		const _valuegcH59ho = {
		
	}
		const _returnValueQ6h3Gqe = await _nodez7kx08H.setValue(_valuegcH59ho)
		const _returnValue6TrDbb = await _RedBlackTreepiz8ba.makeNodeBlack(_nodez7kx08H)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeNeaK2oW = new RedBlackTree()
		const _metahwEotUL = {
		
	}
		const _nodeHXLl0cb = {
			"meta": _metahwEotUL
	}
		const _returnValueiun5ffO = await _RedBlackTreeNeaK2oW.isNodeRed(_nodeHXLl0cb)
		const _rightL3g9z6x = {
		
	}
		const _setRightNPwxD4c = null;
		const _grandParentNodeFUlrGS6 = {
			"right": _rightL3g9z6x,
		"setRight": _setRightNPwxD4c
	}
		const _returnValueFj1ZNkV = await _RedBlackTreeNeaK2oW.rightLeftRotation(_grandParentNodeFUlrGS6)
		const _grandParentNodebldsXWX = false;
		const _returnValueG59CQdS = await _RedBlackTreeNeaK2oW.leftRightRotation(_grandParentNodebldsXWX)
		const _rightMMiRCM4 = {
		
	}
		const _returnValuewU75nrW = undefined;
		const _setRightTPt6r7S = () => { return _returnValuewU75nrW };
		const _grandParentNoden6wHCsG = {
			"right": _rightMMiRCM4,
		"setRight": _setRightTPt6r7S
	}
		const _returnValueUzgSXrb = await _RedBlackTreeNeaK2oW.rightLeftRotation(_grandParentNoden6wHCsG)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeGGV3kA = new RedBlackTree()
		const _returnValueUWCoMaF = "Y8SIVJqG77kVLRCOTSGgS2RNyziNPxV35kJompyB29BF6VCpD3DeLmoNfmFpRe2rExQVAAgEnLaaxizYjGrYf6oeMUxg";
		const _grandParentNodehoXPjJl = () => { return _returnValueUWCoMaF };
		const _returnValueLuIOjB6 = await _RedBlackTreeGGV3kA.rightRightRotation(_grandParentNodehoXPjJl)
		const _grandParentNodeseuHhUt = 4.314339233429838;
		const _returnValuekHptTmg = await _RedBlackTreeGGV3kA.rightRightRotation(_grandParentNodeseuHhUt)
		const _metaJWZITd = {
		
	}
		const _noder1woIdy = {
			"meta": _metaJWZITd
	}
		const _returnValueoDgoBaK = await _RedBlackTreeGGV3kA.isNodeRed(_noder1woIdy)
		const _valueF2kObER = null;
		const _compareFunctiong5lr0ZP = "9gxtxHvzfBpiP9IO8w7KHDw25FSJcbtekVwxYYLAi7gUh2nvVFMMKG";
		const _grandParentNodeLd2toif = new BinarySearchTreeNode(_valueF2kObER, _compareFunctiong5lr0ZP)
		const _arrayValuefnwtA5 = "cVWD6wsqFtZ89U7BxeUKtCsYvh8FoRk8RK90dzEoMmhX9Y67hHsGqck2Pu91ktma7";
		const _arrayValuedgctWLO = {
		
	}
		const _arrayValueiUg60am = 8.727724058973088;
		const _valueyVrTRqW = [_arrayValuefnwtA5, _arrayValuedgctWLO, _arrayValueiUg60am]
		const _returnValuecOgJl0N = await _grandParentNodeLd2toif.contains(_valueyVrTRqW)
		const _valueR8bGCTS = true;
		const _returnValuek1aIRd9 = await _grandParentNodeLd2toif.remove(_valueR8bGCTS)
		const _returnValueABnTb8H = await _grandParentNodeLd2toif.findMin()
		const _valuefbU45l = -5.677099360829286;
		const _returnValuexddB57E = await _grandParentNodeLd2toif.find(_valuefbU45l)
		const _returnValueVgXR2H = await _RedBlackTreeGGV3kA.rightLeftRotation(_grandParentNodeLd2toif)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeMZyC5uL = new RedBlackTree()
		const _metaqdO8lPg = {
		
	}
		const _noderxx6YX9 = {
			"meta": _metaqdO8lPg
	}
		const _returnValueiViffZ = await _RedBlackTreeMZyC5uL.makeNodeRed(_noderxx6YX9)
		const _nodevNoDBag = "";
		const _returnValuebHUCrsT = await _RedBlackTreeMZyC5uL.isNodeColored(_nodevNoDBag)
		const _valueeAZ782T = {
		
	}
		const _nodeRf1lYg = new BinaryTreeNode(_valueeAZ782T)
		const _valueryARStz = {
		
	}
		const _returnValueqB1hieP = await _nodeRf1lYg.setValue(_valueryARStz)
		const _returnValueIft29wI = await _RedBlackTreeMZyC5uL.isNodeRed(_nodeRf1lYg)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeeNsvVuK = new RedBlackTree()
		const _firstNodeb9XMQO6 = undefined;
		const _secondNodewVL6FZC = "jfPtqgLBOLVWWOERCJpncSd7D3Czj1mMeHIAiLiYqHw23";
		const _returnValuepaClZvX = await _RedBlackTreeeNsvVuK.swapNodeColors(_firstNodeb9XMQO6, _secondNodewVL6FZC)
		const _returnValuedT55yg = {
		
	}
		const _nodetoacen = () => { return _returnValuedT55yg };
		const _returnValuedqlcG7C = await _RedBlackTreeeNsvVuK.isNodeBlack(_nodetoacen)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreevwdEK2t = new RedBlackTree()
		const _valuerhqh4Bj = {
		
	}
		const _nodeUZinfN0 = new BinaryTreeNode(_valuerhqh4Bj)
		const _returnValueMOxRUqJ = await _nodeUZinfN0.traverseInOrder()
		const _nodeToReplaceE5kPZrh = {
		
	}
		const _replacementNodesKeyY8R = {
		
	}
		const _returnValue54cLRX = await _nodeUZinfN0.replaceChild(_nodeToReplaceE5kPZrh, _replacementNodesKeyY8R)
		const _returnValueIxZujC = await _RedBlackTreevwdEK2t.makeNodeBlack(_nodeUZinfN0)
		const _grandParentNoderiYjO5G = "n0uIOFK3GU8yRgOb49VVDWIZa5qVRBU26ZYWCayjwZqBHNwEzGD5Mkf8cSM34n7zEm7uMN9tm28BgmY31U8dmuuG89myX0";
		const _returnValuehOJYp7J = await _RedBlackTreevwdEK2t.leftRightRotation(_grandParentNoderiYjO5G)
		const _nodeGXlfRNu = "f7CWUBhLf6EOKrFIUvzAbzS3sXECBxdY74jXO3P5wHAQuSVPKni68qRbqY2V4wV168AYVaiYQnr1PVLjOFFgENmfKSaWAh";
		const _returnValueZ26AE8b = await _RedBlackTreevwdEK2t.isNodeRed(_nodeGXlfRNu)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTree2Y4VhM = new RedBlackTree()
		const _nodeLNmxmPu = "AdV9YZSG6sHyn8PoVFbDnwnqOamkeXI5OaKYKvtX5K4Yk2JjemIYMgknh4wqA3qEFKaUajAghk7PW1I2x7ukhzrTCU88vLv";
		const _returnValueBGlgL5h = await _RedBlackTree2Y4VhM.isNodeColored(_nodeLNmxmPu)
		const _metauDrPeED = {
		
	}
		const _nodeGdMOow = {
			"meta": _metauDrPeED
	}
		const _returnValueFCPSdgI = await _RedBlackTree2Y4VhM.makeNodeBlack(_nodeGdMOow)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreey5FI9Aa = new RedBlackTree()
		const _arrayValueHW6NAd = undefined;
		const _arrayValueYnnDFsE = {
		
	}
		const _arrayValueSETU5be = undefined;
		const _grandParentNodebqiRcpe = [_arrayValueHW6NAd, _arrayValueYnnDFsE, _arrayValueSETU5be]
		const _returnValuep7dVpQ3 = await _RedBlackTreey5FI9Aa.rightLeftRotation(_grandParentNodebqiRcpe)
		const _valueBmoROwC = null;
		const _compareFunctionZzm9aUD = undefined;
		const _grandParentNodewyHO5gJ = new BinarySearchTreeNode(_valueBmoROwC, _compareFunctionZzm9aUD)
		const _returnValueCaWGqyV = await _grandParentNodewyHO5gJ.findMin()
		const _returnValueKcOStx6 = await _grandParentNodewyHO5gJ.findMin()
		const _valuedoCKVdN = undefined;
		const _returnValueeBudOnq = await _grandParentNodewyHO5gJ.remove(_valuedoCKVdN)
		const _returnValuebPQfmGl = await _RedBlackTreey5FI9Aa.leftRightRotation(_grandParentNodewyHO5gJ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreed5N17Xc = new RedBlackTree()
		const _arrayValueLnQR6Ss = 5.286039942247601;
		const _arrayValue6Xi0oO = null;
		const _arrayValueZPz2RtD = null;
		const _parentD8lvOyN = [_arrayValueLnQR6Ss, _arrayValue6Xi0oO, _arrayValueZPz2RtD]
		const _rightWVw6x7i = {
		
	}
		const _returnValueKFSuxik = "JQquxqrAfLEfBp8ePtRmFcQNQxNeYrWfzYQYF1";
		const _setRightj0n4BHy = () => { return _returnValueKFSuxik };
		const _grandParentNodezQpX8B1 = {
			"parent": _parentD8lvOyN,
		"right": _rightWVw6x7i,
		"setRight": _setRightj0n4BHy
	}
		const _returnValueiC7pyab = await _RedBlackTreed5N17Xc.rightRightRotation(_grandParentNodezQpX8B1)
		const _parentLa1yeQ2 = {
		
	}
		const _leftaFKUemN = "mGtAyW6NfYlOnhtdiNiFaofPAfKRLaRDxWrwuYiBeueIpPChJzfDQf7gPyEfIc7fsW3U896ROBPBYRjPtlboQrcxi9XiiiC";
		const _returnValuedjexycZ = false;
		const _setLeftVaH1GGE = () => { return _returnValuedjexycZ };
		const _grandParentNodejn5OZ5P = {
			"parent": _parentLa1yeQ2,
		"left": _leftaFKUemN,
		"setLeft": _setLeftVaH1GGE
	}
		const _returnValuezxtgJvb = await _RedBlackTreed5N17Xc.leftLeftRotation(_grandParentNodejn5OZ5P)
		const _parentJ68eyHu = {
		
	}
		const _uncleIsfWwkx = null;
		const _nodeAgxNFW = {
			"parent": _parentJ68eyHu,
		"uncle": _uncleIsfWwkx
	}
		const _returnValuepXopGrf = await _RedBlackTreed5N17Xc.balance(_nodeAgxNFW)
		const _parentUyIoOYC = {
		
	}
		const _returnValueKc4F16q = true;
		const _arrayValuelgFrMdX = () => { return _returnValueKc4F16q };
		const _returnValueYcSNL6K = true;
		const _arrayValueX2jv2wq = () => { return _returnValueYcSNL6K };
		const _arrayValuejeQpY0 = null;
		const _arrayValue7jKEmv = [_arrayValuejeQpY0]
		const _arrayValuedQKAIcE = "abK5Gud8tcGMKz8EC4gVRls8TJChYoIHc3Etdd9OLjk6zZ0gjGGVzm8StwT";
		const _leftwR6zrt = [_arrayValuelgFrMdX, _arrayValueX2jv2wq, _arrayValue7jKEmv, _arrayValuedQKAIcE]
		const _returnValueOQDeZbh = true;
		const _returnValueLQXv7mZ = () => { return _returnValueOQDeZbh };
		const _setLeftlAXqCKT = () => { return _returnValueLQXv7mZ };
		const _grandParentNodebCrjRxw = {
			"parent": _parentUyIoOYC,
		"left": _leftwR6zrt,
		"setLeft": _setLeftlAXqCKT
	}
		const _returnValuedgQW489 = await _RedBlackTreed5N17Xc.leftLeftRotation(_grandParentNodebCrjRxw)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTree4yJljs = new RedBlackTree()
		const _valueaQa79W = false;
		const _returnValueuE0tjo3 = await _RedBlackTree4yJljs.insert(_valueaQa79W)
		const _valueEx5RuHT = undefined;
		const _returnValueex9rs6F = await _RedBlackTree4yJljs.insert(_valueEx5RuHT)
		const _valuenzOjyFd = "T6zV6nnndw59HfDWAgDkzekcGmGtJ5yUCSiYYkfjJyvwaAtldpIOoIgzMvHeRR9Uv";
		const _returnValuedCGMg2v = await _RedBlackTree4yJljs.remove(_valuenzOjyFd)
		const _meta0H88jI = {
		
	}
		const _nodeL4XvJ9E = {
			"meta": _meta0H88jI
	}
		const _returnValueQXcEO57 = await _RedBlackTree4yJljs.makeNodeRed(_nodeL4XvJ9E)
	});
})