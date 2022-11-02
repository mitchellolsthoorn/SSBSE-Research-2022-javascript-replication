export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueLc2rMeK = "xC4Bz4EC5sBPEF90s2I41Xq79Si4jYnfgKuW3dDTOnpGCKxdIxYk5p1dYl3AIVzbuvLpjkGRWNWlcUnNAC42s2rN7Q";
		const _getNeighborsc2DpNn0 = () => { return _returnValueLc2rMeK };
		const _graphLqfNqhp = {
			"getNeighbors": _getNeighborsc2DpNn0
	}
		const _startVertexg0kjnd = "E0OvIK9qMp8069aU8dYHbRC4Jwky9XCtgQxDSW77geVrOF7kADCa";
		const _originalCallbacksTwA0Cqm = false;
		const _returnValueFCoNk3q = await breadthFirstSearch(_graphLqfNqhp, _startVertexg0kjnd, _originalCallbacksTwA0Cqm)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueevJRQl6 = undefined;
		const _getNeighborsDQQzT3G = () => { return _returnValueevJRQl6 };
		const _graphIzyTy8M = {
			"getNeighbors": _getNeighborsDQQzT3G
	}
		const _startVertexo27LgF = true;
		const _originalCallbackstKqsE3 = {
		
	}
		const _returnValueofitqdT = await breadthFirstSearch(_graphIzyTy8M, _startVertexo27LgF, _originalCallbackstKqsE3)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuecplIyt3 = -3.0900244570880453;
		const _arrayValueJiCSWG6 = "gF5TRgzQHiwpmu0d5D0XozrCU8LFGF2rY8qexGYAq7obJiYtKA5ndlJ4XpJcTfFEWjUZcOemRWdkIMZGY8XL3q5ANYhKW3w1r3";
		const _arrayValueCQ7akCf = -9.787891244495817;
		const _arrayValuexEjre8L = "Sn3DVIgtg70EZVpMuufgl7qm7Tx5QjSdORwG71JCdmAg";
		const _arrayValueTAfkXaw = [_arrayValueCQ7akCf, _arrayValuexEjre8L]
		const _arrayValueZ4JeHA = true;
		const _returnValueMYloKE = [_arrayValuecplIyt3, _arrayValueJiCSWG6, _arrayValueTAfkXaw, _arrayValueZ4JeHA]
		const _getNeighborseBkrBgp = () => { return _returnValueMYloKE };
		const _graphNNmqwic = {
			"getNeighbors": _getNeighborseBkrBgp
	}
		const _startVertexgFTg50 = null;
		const _originalCallbacksTi5HOGw = []
		const _returnValuepeNsyaH = await breadthFirstSearch(_graphNNmqwic, _startVertexgFTg50, _originalCallbacksTi5HOGw)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueYCWliT7 = []
		const _getNeighborsbRCEMG = () => { return _returnValueYCWliT7 };
		const _graphgco3Zt7 = {
			"getNeighbors": _getNeighborsbRCEMG
	}
		const _startVertexJ3OEyG1 = undefined;
		const _arrayValueC1SiuV = -0.11446370105819348;
		const _arrayValueLazDhQp = null;
		const _arrayValueyvjIiLu = []
		const _originalCallbacks9RAwvj = [_arrayValueC1SiuV, _arrayValueLazDhQp, _arrayValueyvjIiLu]
		const _returnValueDH0jzzM = await breadthFirstSearch(_graphgco3Zt7, _startVertexJ3OEyG1, _originalCallbacks9RAwvj)
	});
})