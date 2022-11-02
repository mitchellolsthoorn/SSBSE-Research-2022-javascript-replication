export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueeR8GA0K = null;
		const _arrayValueiHd8d4m = "Q1RIVs6cFMXTMDB3PN7iehJBsDLkd2R";
		const _graphuIUj50M = [_arrayValueeR8GA0K, _arrayValueiHd8d4m]
		const _returnValueC3Oe4eW = await detectUndirectedCycleUsingDisjointSet(_graphuIUj50M)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedPrCJXR2 = false;
		const _graphgbvXvy = new Graph(_isDirectedPrCJXR2)
		const _returnValueIFE3mc = await _graphgbvXvy.toString()
		const _returnValueUECoPeF = await _graphgbvXvy.reverse()
		const _returnValuen3sA11a = "lnXJUNTLDmRR5MJtpDcuIFdqMiwZHQ12cav61ecgVxt1Sqq89nKon36Cbh8q58iyOW";
		const _getKeyWdgEsZ5 = () => { return _returnValuen3sA11a };
		const _startVertexWXfvkRG = {
			"getKey": _getKeyWdgEsZ5
	}
		const _endVertexde3acXW = "UcqafEld1m7BzQ5hZSAWBkHH9YkjHvmtk6u4qqINirwDB19ggIbIrDEb9ooIh4EuqJ316anmrOBeBvp94vM1DII43J";
		const _returnValueCuVYLwK = await _graphgbvXvy.findEdge(_startVertexWXfvkRG, _endVertexde3acXW)
		const _returnValuetqr5EWy = await _graphgbvXvy.getWeight()
		const _returnValueugdQ7ml = await detectUndirectedCycleUsingDisjointSet(_graphgbvXvy)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueuwEnmF6 = []
		const _getAllVerticesSzv2Zn = () => { return _returnValueuwEnmF6 };
		const _arrayValuekbYmcRx = -0.1675873501006535;
		const _arrayValueSyRbot7 = null;
		const _arrayValueaIQ9dvR = null;
		const _arrayValueKbve0Kt = []
		const _returnValueMdbknx = [_arrayValuekbYmcRx, _arrayValueSyRbot7, _arrayValueaIQ9dvR, _arrayValueKbve0Kt]
		const _getAllEdgesXKZM9sH = () => { return _returnValueMdbknx };
		const _graphok8qRZ = {
			"getAllVertices": _getAllVerticesSzv2Zn,
		"getAllEdges": _getAllEdgesXKZM9sH
	}
		const _returnValuefZINzGa = await detectUndirectedCycleUsingDisjointSet(_graphok8qRZ)
	});
})