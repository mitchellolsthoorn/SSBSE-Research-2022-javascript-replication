export {}
import RedBlackTree from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/data-structures/tree/red-black-tree/RedBlackTree.js";
import BinaryTreeNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/tree/BinaryTreeNode.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('RedBlackTree', () => {
	it('test for RedBlackTree', async () => {
		const _RedBlackTreeKkGOa41 = new RedBlackTree()
		const _returnValueCaCLChX = -6.759544069520713;
		const _arrayValuetdA96c = () => { return _returnValueCaCLChX };
		const _arrayValuew5e7xib = -3.293572387309517;
		const _arrayValueUeNGqpo = "8ZDLXxanRt5vtVILnXJSqlJKQjEaX9aHx8S1dfqsrvM6rkl7FYElmycsiKGgCvUHAZCAd573cXNFLJrDWOW83d9XnN";
		const _arrayValueW2nVXgY = null;
		const _arrayValuei5bq0EV = [_arrayValuew5e7xib, _arrayValueUeNGqpo, _arrayValueW2nVXgY]
		const _arrayValueUkGKZTt = 8.110492646069225;
		const _arrayValueQaVySfh = true;
		const _arrayValueQV9BdSl = [_arrayValuei5bq0EV, _arrayValueUkGKZTt, _arrayValueQaVySfh]
		const _arrayValueRyV7CTl = -6.231872361367964;
		const _arrayValuehGTii9 = "a4XRn5hPs7SPFeGHwYKWw1N5TXoewb7n8xY69wZwR66lQrtXT2G59CEEnCN1vGypiLRBk";
		const _arrayValuesuUCipE = undefined;
		const _arrayValuewsBggmF = [_arrayValuehGTii9, _arrayValuesuUCipE]
		const _arrayValuenZjBO3z = null;
		const _arrayValueiYmPVS = [_arrayValueQV9BdSl, _arrayValueRyV7CTl, _arrayValuewsBggmF, _arrayValuenZjBO3z]
		const _nodem90Uyyk = [_arrayValuetdA96c, _arrayValueiYmPVS]
		const _returnValue6VRyR7 = await _RedBlackTreeKkGOa41.balance(_nodem90Uyyk)
		const _rightxOBDZT = {
		
	}
		const _returnValueErEkvQL = null;
		const _setRightKbecmsA = () => { return _returnValueErEkvQL };
		const _grandParentNodeg2VquCH = {
			"right": _rightxOBDZT,
		"setRight": _setRightKbecmsA
	}
		const _returnValueTgtiNtt = await _RedBlackTreeKkGOa41.rightLeftRotation(_grandParentNodeg2VquCH)
		const _grandParentNodeipjmWJi = "rsG9y7inxFim0KKv8q5SA8fs1ymPhUoDWJOrdWGICeFiIByLJ91L6krNDjg3jnNx6VQrSkgefDJiUlR3oXUPVSIw92";
		const _returnValueBVaJUng = await _RedBlackTreeKkGOa41.leftRightRotation(_grandParentNodeipjmWJi)
		const _valuejpg4WCH = {
		
	}
		const _nodeSWQrQRh = new BinaryTreeNode(_valuejpg4WCH)
		const _returnValuedRZ0uMD = await _nodeSWQrQRh.uncle()
		const _nodeToRemoveGoUmVB = undefined;
		const _returnValueRy2cCkc = await _nodeSWQrQRh.removeChild(_nodeToRemoveGoUmVB)
		const _returnValueMc9H9FE = await _RedBlackTreeKkGOa41.makeNodeBlack(_nodeSWQrQRh)
		const _grandParentNodeJjRheQZ = null;
		const _returnValueo2eDi43 = await _RedBlackTreeKkGOa41.leftRightRotation(_grandParentNodeJjRheQZ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeXEPeJSn = new RedBlackTree()
		const _grandParentNodeADxwflA = "2DPXHjFTGPvnP9onfUsYr9ralLgwV4Kpk3DAN4twHGKo5Ra69VhTJShXSlfpnopiHVxO8G6D6EeGRivHOeO3IYnQddISUSa1";
		const _returnValuePNn9njS = await _RedBlackTreeXEPeJSn.rightRightRotation(_grandParentNodeADxwflA)
		const _nodeklgbXQ5 = "FIBEIbAcqCjnL3lPAbqoHOSN";
		const _returnValueMIk3IQ = await _RedBlackTreeXEPeJSn.isNodeBlack(_nodeklgbXQ5)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreesaja7C = new RedBlackTree()
		const _nodee9B8kZn = true;
		const _returnValuel3nZrQW = await _RedBlackTreesaja7C.isNodeColored(_nodee9B8kZn)
		const _valuenomI8Mt = null;
		const _nodeeQISnxG = new BinaryTreeNode(_valuenomI8Mt)
		const _nodeToReplacebMnT2FA = {
		
	}
		const _replacementNodeY9z7Upm = {
		
	}
		const _returnValueYDeV7r = await _nodeeQISnxG.replaceChild(_nodeToReplacebMnT2FA, _replacementNodeY9z7Upm)
		const _valueo65dOoC = null;
		const _returnValueERJH1vw = await _nodeeQISnxG.setValue(_valueo65dOoC)
		const _arrayValuezbVd0XA = false;
		const _arrayValueej12p0t = "cUeykYyj26RR1hMf9EEMI8rDWE7fCT8z";
		const _sourceNodeXfLcL8N = [_arrayValuezbVd0XA, _arrayValueej12p0t]
		const _arrayValueeWEvwRL = "n1SP8jT4HlXsvcPd2OTNhtjD9pHH0gbAsm5bxwZOue75m7B9thBQMplRuy4utGrB";
		const _returnValueUR5DyIG = [_arrayValueeWEvwRL]
		const _targetNodejhcrqCa = () => { return _returnValueUR5DyIG };
		const _returnValuegpKrae = await _nodeeQISnxG.copyNode(_sourceNodeXfLcL8N, _targetNodejhcrqCa)
		const _returnValueCsLR1q = await _RedBlackTreesaja7C.isNodeRed(_nodeeQISnxG)
		const _nodeYcx9qn = "vxF3wuqAGi19WQaoAIzPyKVyLwA372DvGMHYC9S1tFq21SS6yu5S1uAKtYjMQp2nMbRA2yXnjNgtOsI";
		const _returnValuePGDeVZd = await _RedBlackTreesaja7C.makeNodeRed(_nodeYcx9qn)
		const _valueX5FuoS6 = {
		
	}
		const _grandParentNodeDIIAvvq = new BinaryTreeNode(_valueX5FuoS6)
		const _returnValuepPhhVsl = await _grandParentNodeDIIAvvq.balanceFactor()
		const _nodeToRemovevrKclW = {
		
	}
		const _returnValueaSfFTTC = await _grandParentNodeDIIAvvq.removeChild(_nodeToRemovevrKclW)
		const _returnValueMVgNXDw = await _RedBlackTreesaja7C.leftRightRotation(_grandParentNodeDIIAvvq)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreegV2gvF = new RedBlackTree()
		const _returnValueLRdo061 = null;
		const _arrayValueiot7hcS = () => { return _returnValueLRdo061 };
		const _arrayValueWjckKv4 = -9.958361730210395;
		const _arrayValueAq8tShA = [_arrayValueiot7hcS, _arrayValueWjckKv4]
		const _returnValueIed9frn = [_arrayValueAq8tShA]
		const _arrayValueksS3rtb = () => { return _returnValueIed9frn };
		const _arrayValueDzNHWYD = null;
		const _nodeteG9Ujg = [_arrayValueksS3rtb, _arrayValueDzNHWYD]
		const _returnValueeXBpbFC = await _RedBlackTreegV2gvF.makeNodeBlack(_nodeteG9Ujg)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreePEV5SBS = new RedBlackTree()
		const _arrayValueLJpsN6M = {
		
	}
		const _arrayValueQnRx30N = "dM6CKUKd9ilXdcK5iGcwAniVB6ANeKv66osE3qka3B";
		const _arrayValueVXRLeWj = undefined;
		const _firstNodephJrW4a = [_arrayValueLJpsN6M, _arrayValueQnRx30N, _arrayValueVXRLeWj]
		const _secondNodeT1QVktc = "cc";
		const _returnValueXZ8MWX = await _RedBlackTreePEV5SBS.swapNodeColors(_firstNodephJrW4a, _secondNodeT1QVktc)
		const _parentXjeyqWv = {
		
	}
		const _leftj8lFmsR = {
		
	}
		const _returnValueoSIbrxe = null;
		const _setLeftEzVd3aP = () => { return _returnValueoSIbrxe };
		const _grandParentNodezTl7q2a = {
			"parent": _parentXjeyqWv,
		"left": _leftj8lFmsR,
		"setLeft": _setLeftEzVd3aP
	}
		const _returnValueQ4kB1WW = await _RedBlackTreePEV5SBS.leftLeftRotation(_grandParentNodezTl7q2a)
		const _nodeH5Sxin4 = "xvYoaurkbt9NnwgPQiGNXxYpmlwgz7CoIMCFhXgVcVV0whF8hKuo3lIeavzG";
		const _returnValueP8NH0gY = await _RedBlackTreePEV5SBS.isNodeRed(_nodeH5Sxin4)
		const _arrayValuejyLcy9M = "GmtghQGH94mdd8lADnPs3nC5UhzXag3d4nNXoTk69BkTQOn7NCT49Sdy76w5";
		const _grandParentNodeKHdy6bS = [_arrayValuejyLcy9M]
		const _returnValuenOit7fb = await _RedBlackTreePEV5SBS.rightLeftRotation(_grandParentNodeKHdy6bS)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeMnqTU6 = new RedBlackTree()
		const _metaUTaKDDE = {
		
	}
		const _nodeOoQQAvw = {
			"meta": _metaUTaKDDE
	}
		const _returnValueI4hJCP9 = await _RedBlackTreeMnqTU6.makeNodeRed(_nodeOoQQAvw)
		const _returnValueUXpDCzq = "ftsdKv4Qqt44tL5qtLJpqR4tcGAbOR3nIH4OecX68Dk";
		const _returnValuemEa2SaR = () => { return _returnValueUXpDCzq };
		const _grandParentNodeW5ggIpY = () => { return _returnValuemEa2SaR };
		const _returnValuezdzlovj = await _RedBlackTreeMnqTU6.leftRightRotation(_grandParentNodeW5ggIpY)
		const _firstNodeJU2fvoB = "UQW8ijVODX8NwdCmF13xAH9zEIKLymGPJIia5h4SLjztuo8pewPITa1vwCqunArpMXXgiPvwZ";
		const _metaRVeieVg = {
		
	}
		const _secondNode3TGT5p = {
			"meta": _metaRVeieVg
	}
		const _returnValuePAGNJJE = await _RedBlackTreeMnqTU6.swapNodeColors(_firstNodeJU2fvoB, _secondNode3TGT5p)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeJ9jJzMf = new RedBlackTree()
		const _arrayValuelrXtED6 = undefined;
		const _arrayValueWmFzdP = undefined;
		const _returnValuezurIsda = [_arrayValuelrXtED6, _arrayValueWmFzdP]
		const _valueYDNwX6j = () => { return _returnValuezurIsda };
		const _returnValueAMNGAjw = await _RedBlackTreeJ9jJzMf.remove(_valueYDNwX6j)
		const _nodeqaVDis = []
		const _returnValueg18QM0 = await _RedBlackTreeJ9jJzMf.balance(_nodeqaVDis)
		const _metax24TRvi = {
		
	}
		const _firstNodeO5WsOwZ = {
			"meta": _metax24TRvi
	}
		const _arrayValueg1JOcBb = {
		
	}
		const _secondNodeBPDdJcx = [_arrayValueg1JOcBb]
		const _returnValueOG6AQ4H = await _RedBlackTreeJ9jJzMf.swapNodeColors(_firstNodeO5WsOwZ, _secondNodeBPDdJcx)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeUCXq9om = new RedBlackTree()
		const _returnValuePGRggK7 = true;
		const _returnValueRiwcVPF = () => { return _returnValuePGRggK7 };
		const _grandParentNodenCtpMhu = () => { return _returnValueRiwcVPF };
		const _returnValuer4rppJj = await _RedBlackTreeUCXq9om.rightLeftRotation(_grandParentNodenCtpMhu)
		const _metaEpDhDie = {
		
	}
		const _nodejVeAp2 = {
			"meta": _metaEpDhDie
	}
		const _returnValueM1UcDaa = await _RedBlackTreeUCXq9om.isNodeBlack(_nodejVeAp2)
		const _valuewqiIDYN = undefined;
		const _returnValueYyXvqj = await _RedBlackTreeUCXq9om.remove(_valuewqiIDYN)
		const _valueEB6wKoQ = -6.9585420111019225;
		const _returnValueWjpt17D = await _RedBlackTreeUCXq9om.remove(_valueEB6wKoQ)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreejRNrASe = new RedBlackTree()
		const _arrayValueTngjyov = []
		const _arrayValueRUpi7VS = undefined;
		const _arrayValueBCXw2GW = -8.532542488486508;
		const _grandParentNodedIhMI04 = [_arrayValueTngjyov, _arrayValueRUpi7VS, _arrayValueBCXw2GW]
		const _returnValueLPC9mVH = await _RedBlackTreejRNrASe.leftRightRotation(_grandParentNodedIhMI04)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreew11hQe0 = new RedBlackTree()
		const _valueSfbZPhJ = "AsH7l9rrazzoEs6gdR";
		const _returnValuesdPZSCR = await _RedBlackTreew11hQe0.insert(_valueSfbZPhJ)
		const _arrayValuetV2TRjU = "Tr5JaDwku9BPGgP9XlJH22L8gTtJa7ietL09XUVPxymGWm2ErwChbdEv60c1QO3NTEmvoSzu4b2H";
		const _arrayValuebaOY3B = "gcOoFtofBo6WVqLXMEbpAVJ0SB2RTulW8";
		const _nodeOEMgjO8 = [_arrayValuetV2TRjU, _arrayValuebaOY3B]
		const _returnValuece6mKX = await _RedBlackTreew11hQe0.isNodeRed(_nodeOEMgjO8)
		const _arrayValuep6ZgY6N = true;
		const _arrayValuekJviAXm = false;
		const _arrayValuerFyAUt = undefined;
		const _arrayValuegR9Cv6 = [_arrayValuekJviAXm, _arrayValuerFyAUt]
		const _arrayValuevO7LQM0 = "ah6uJlW9VSLFOKLOIvAPOyzm7RxCDoW9n5cyHRpmHVmLcmDsBC69OGtGo";
		const _nodenJxosW = [_arrayValuep6ZgY6N, _arrayValuegR9Cv6, _arrayValuevO7LQM0]
		const _returnValuePjvNx3q = await _RedBlackTreew11hQe0.isNodeRed(_nodenJxosW)
		const _returnValueGlGUAQ = undefined;
		const _grandParentNodeOlRGgb = () => { return _returnValueGlGUAQ };
		const _returnValuevUwguht = await _RedBlackTreew11hQe0.rightRightRotation(_grandParentNodeOlRGgb)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreeOs8fpHD = new RedBlackTree()
		const _parentCT6Q17I = {
		
	}
		const _arrayValuej92K8lj = undefined;
		const _arrayValuefLoVMOr = null;
		const _returnValuerF0I3c = true;
		const _arrayValueBMiTNuE = () => { return _returnValuerF0I3c };
		const _arrayValueglwGezj = {
		
	}
		const _arrayValueLOxvUWP = [_arrayValuefLoVMOr, _arrayValueBMiTNuE, _arrayValueglwGezj]
		const _arrayValueAWIl9hF = undefined;
		const _arrayValuedq7ewB = "";
		const _arrayValueFLHuVcf = null;
		const _arrayValueQmEkdMN = [_arrayValuedq7ewB, _arrayValueFLHuVcf]
		const _leftXFjk9Gd = [_arrayValuej92K8lj, _arrayValueLOxvUWP, _arrayValueAWIl9hF, _arrayValueQmEkdMN]
		const _returnValueFpveHim = undefined;
		const _setLeftd70pP3U = () => { return _returnValueFpveHim };
		const _grandParentNodeFFO8wGX = {
			"parent": _parentCT6Q17I,
		"left": _leftXFjk9Gd,
		"setLeft": _setLeftd70pP3U
	}
		const _returnValueGaNiFht = await _RedBlackTreeOs8fpHD.leftLeftRotation(_grandParentNodeFFO8wGX)
		const _parentYiKCy6o = false;
		const _leftBTAzsi1 = {
		
	}
		const _returnValuekwkVCzo = 1.17665648284148;
		const _setLeftoVptn9D = () => { return _returnValuekwkVCzo };
		const _grandParentNodeivfYUgH = {
			"parent": _parentYiKCy6o,
		"left": _leftBTAzsi1,
		"setLeft": _setLeftoVptn9D
	}
		const _returnValuejewdbET = await _RedBlackTreeOs8fpHD.leftLeftRotation(_grandParentNodeivfYUgH)
		const _valueacTQ0at = true;
		const _returnValuelIqzYzu = await _RedBlackTreeOs8fpHD.insert(_valueacTQ0at)
		const _metaHOhUJaB = {
		
	}
		const _firstNodeZ8dHDZn = {
			"meta": _metaHOhUJaB
	}
		const _metanghmyDY = {
		
	}
		const _secondNodeznniJBn = {
			"meta": _metanghmyDY
	}
		const _returnValuetgYifWq = await _RedBlackTreeOs8fpHD.swapNodeColors(_firstNodeZ8dHDZn, _secondNodeznniJBn)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreed6rrM6o = new RedBlackTree()
		const _arrayValueuLjPR6 = undefined;
		const _arrayValues3hvAjl = undefined;
		const _arrayValueU4mZNK0 = false;
		const _parentlh5S9M = [_arrayValueuLjPR6, _arrayValues3hvAjl, _arrayValueU4mZNK0]
		const _right8QZ4Ns = {
		
	}
		const _returnValueU2NjAne = "WIgfuxcCHZ458tnRASbk2YJ2X7qq77QmFMc";
		const _setRightmWWwrbw = () => { return _returnValueU2NjAne };
		const _grandParentNodedNmWe9x = {
			"parent": _parentlh5S9M,
		"right": _right8QZ4Ns,
		"setRight": _setRightmWWwrbw
	}
		const _returnValueXyiTRi5 = await _RedBlackTreed6rrM6o.rightRightRotation(_grandParentNodedNmWe9x)
		const _returnValuekYk9J0Q = true;
		const _grandParentNodelviv1i9 = () => { return _returnValuekYk9J0Q };
		const _returnValueVAebDVr = await _RedBlackTreed6rrM6o.rightRightRotation(_grandParentNodelviv1i9)
		const _arrayValueTGhnmWk = []
		const _arrayValuekagcBvZ = true;
		const _arrayValueQxiOAkl = [_arrayValueTGhnmWk, _arrayValuekagcBvZ]
		const _arrayValuenY6jzJV = null;
		const _arrayValueVuhlU8K = {
		
	}
		const _returnValuevuy3RdL = false;
		const _arrayValueuLAYCrG = () => { return _returnValuevuy3RdL };
		const _arrayValueNKrziQ7 = true;
		const _nodecgGa6L9 = [_arrayValueQxiOAkl, _arrayValuenY6jzJV, _arrayValueVuhlU8K, _arrayValueuLAYCrG, _arrayValueNKrziQ7]
		const _returnValueXqGZzUh = await _RedBlackTreed6rrM6o.makeNodeBlack(_nodecgGa6L9)
	});

	it('test for RedBlackTree', async () => {
		const _RedBlackTreetez9Vwl = new RedBlackTree()
		const _valueUCqBkIn = "TOpOOvWIYkfILn6AfGqwaOtgCMipSCVDz4VIlRzSU9dxq3f9Op";
		const _returnValuemQiSJ8h = await _RedBlackTreetez9Vwl.insert(_valueUCqBkIn)
		const _valueT7SU5Wh = undefined;
		const _returnValueOYTBBQw = await _RedBlackTreetez9Vwl.insert(_valueT7SU5Wh)
		const _grandParentNodevBlnco = "DYH4nhWctYD75NfvpHYmeV4CPaXlRUU6IsATeOWdr47SaNJt1U8Q6uYuDaC3bSgvX";
		const _returnValueqrnzEfb = await _RedBlackTreetez9Vwl.rightLeftRotation(_grandParentNodevBlnco)
	});
})