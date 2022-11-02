export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueW8ed1HQ = null;
		const _arrayValueuAMD1S = true;
		const _returnValueH0OMb6l = -9.526391166524562;
		const _arrayValueZPb1G1 = () => { return _returnValueH0OMb6l };
		const _returnValueYrUjiRz = [_arrayValueW8ed1HQ, _arrayValueuAMD1S, _arrayValueZPb1G1]
		const _getAllVerticesh1cgE7l = () => { return _returnValueYrUjiRz };
		const _returnValuecmlKlzn = null;
		const _getAllEdgesi1pM6Nw = () => { return _returnValuecmlKlzn };
		const _graphznTAj4Q = {
			"getAllVertices": _getAllVerticesh1cgE7l,
		"getAllEdges": _getAllEdgesi1pM6Nw
	}
		const _returnValuegXJ5uXL = await detectUndirectedCycleUsingDisjointSet(_graphznTAj4Q)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueikPoLw = []
		const _getAllVerticessuq4nAQ = () => { return _returnValueikPoLw };
		const _returnValueo9fdUHz = 5.961963732997104;
		const _getAllEdgesje0Q2Sy = () => { return _returnValueo9fdUHz };
		const _graphrlusIHP = {
			"getAllVertices": _getAllVerticessuq4nAQ,
		"getAllEdges": _getAllEdgesje0Q2Sy
	}
		const _returnValuetrwOnv = await detectUndirectedCycleUsingDisjointSet(_graphrlusIHP)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuet40rKv = []
		const _getAllVerticesJCiLQyp = () => { return _returnValuet40rKv };
		const _arrayValuemQ0CpMc = "uyPZTGpjtTnaTBidtCTp8Iiyv8m4Qd9JqdyjVU5H2t7qKV7BgamV43pgoYAiG5wPHEP3fQqt4MP";
		const _arrayValueLdq1kWY = true;
		const _returnValueKRQd4xv = [_arrayValuemQ0CpMc, _arrayValueLdq1kWY]
		const _getAllEdgesXOWywFB = () => { return _returnValueKRQd4xv };
		const _graphQUKJk8S = {
			"getAllVertices": _getAllVerticesJCiLQyp,
		"getAllEdges": _getAllEdgesXOWywFB
	}
		const _returnValuedBs7Pw9 = await detectUndirectedCycleUsingDisjointSet(_graphQUKJk8S)
	});
})