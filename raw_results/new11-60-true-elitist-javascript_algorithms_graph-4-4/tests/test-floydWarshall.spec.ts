export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _getAllVerticesUHFnZCu = null;
		const _returnValuedMWiSIb = null;
		const _findEdgeVGFveqY = () => { return _returnValuedMWiSIb };
		const _graphCWMBLew = {
			"getAllVertices": _getAllVerticesUHFnZCu,
		"findEdge": _findEdgeVGFveqY
	}
		const _returnValueb1gMqjN = await floydWarshall(_graphCWMBLew)
	});

	it('test for floydWarshall', async () => {
		const _returnValueLGXUnPR = null;
		const _getAllVerticesZYUysX = () => { return _returnValueLGXUnPR };
		const _returnValueCzPi1Uw = undefined;
		const _findEdgeuwOT7fZ = () => { return _returnValueCzPi1Uw };
		const _graphdWfyD2K = {
			"getAllVertices": _getAllVerticesZYUysX,
		"findEdge": _findEdgeuwOT7fZ
	}
		const _returnValueImCTdsx = await floydWarshall(_graphdWfyD2K)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueDeaNHIQ = "D9xEP5ad1oaaulEI6cQNd5kZjT3F7IhlyPhzpBXoUc5v2s54C7pPHU6a1EgiPKo7FW";
		const _arrayValueOtRBbDF = {
		
	}
		const _arrayValueUrZA3GJ = [_arrayValueDeaNHIQ, _arrayValueOtRBbDF]
		const _arrayValueRX8Ud99 = null;
		const _returnValueUMoKQ4W = [_arrayValueUrZA3GJ, _arrayValueRX8Ud99]
		const _getAllVerticesKVYGljB = () => { return _returnValueUMoKQ4W };
		const _returnValueeR4ueM = -6.486646406176577;
		const _findEdgeUZeCiAU = () => { return _returnValueeR4ueM };
		const _graphaTxJ1rE = {
			"getAllVertices": _getAllVerticesKVYGljB,
		"findEdge": _findEdgeUZeCiAU
	}
		const _returnValueeovEoJK = await floydWarshall(_graphaTxJ1rE)
	});
})