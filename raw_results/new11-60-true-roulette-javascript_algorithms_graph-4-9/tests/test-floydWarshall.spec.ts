export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValueYoG6vRE = {
		
	}
		const _graphCCrvGO = [_arrayValueYoG6vRE]
		const _returnValue0jt2B5 = await floydWarshall(_graphCCrvGO)
	});

	it('test for floydWarshall', async () => {
		const _returnValuelMEkQO = null;
		const _getAllVerticesvqqzaay = () => { return _returnValuelMEkQO };
		const _returnValueGxHprZ7 = undefined;
		const _findEdgezmU0FE = () => { return _returnValueGxHprZ7 };
		const _graphcekAcqy = {
			"getAllVertices": _getAllVerticesvqqzaay,
		"findEdge": _findEdgezmU0FE
	}
		const _returnValuehsCkHRP = await floydWarshall(_graphcekAcqy)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueisxiIfk = -2.740109882354571;
		const _arrayValueLFvFwyO = 0.30376333677282474;
		const _arrayValueQeffn03 = -0.18569707950492997;
		const _arrayValueX7VZa8q = [_arrayValueisxiIfk, _arrayValueLFvFwyO, _arrayValueQeffn03]
		const _arrayValuegbweuxd = {
		
	}
		const _arrayValueg8609cl = true;
		const _returnValuelgVJR7N = [_arrayValueX7VZa8q, _arrayValuegbweuxd, _arrayValueg8609cl]
		const _getAllVerticesuBvBfp1 = () => { return _returnValuelgVJR7N };
		const _returnValue6aOO0A = true;
		const _findEdgeiD5F0Ib = () => { return _returnValue6aOO0A };
		const _graphelrwjPL = {
			"getAllVertices": _getAllVerticesuBvBfp1,
		"findEdge": _findEdgeiD5F0Ib
	}
		const _returnValuerd0QwL = await floydWarshall(_graphelrwjPL)
	});
})