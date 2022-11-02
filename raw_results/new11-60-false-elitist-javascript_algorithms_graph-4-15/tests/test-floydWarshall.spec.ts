export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueJB5DPd5 = 4.8964117944291115;
		const _getAllVerticesHfbcoIm = () => { return _returnValueJB5DPd5 };
		const _findEdgeR74uk5S = "pCkc7XXfpJVVY1mEqR7RRsl4inA2fBFzKgDTsUdWmtOgLmNTCvGR6TC6sX3QoxC";
		const _graphRR17Kc = {
			"getAllVertices": _getAllVerticesHfbcoIm,
		"findEdge": _findEdgeR74uk5S
	}
		const _returnValueUuGxUlh = await floydWarshall(_graphRR17Kc)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueMjgM8fS = undefined;
		const _arrayValueJK8zzBO = {
		
	}
		const _arrayValueg6y4pUt = -2.5326481685992146;
		const _returnValueeRlTGO5 = [_arrayValueMjgM8fS, _arrayValueJK8zzBO, _arrayValueg6y4pUt]
		const _getAllVerticesQuHaEm = () => { return _returnValueeRlTGO5 };
		const _returnValuesHueuRD = false;
		const _findEdgeKcdkSxj = () => { return _returnValuesHueuRD };
		const _graphP0dDj7 = {
			"getAllVertices": _getAllVerticesQuHaEm,
		"findEdge": _findEdgeKcdkSxj
	}
		const _returnValuebsdxczP = await floydWarshall(_graphP0dDj7)
	});
})