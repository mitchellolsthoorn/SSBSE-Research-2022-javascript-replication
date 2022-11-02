export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedyP8bnDR = -7.373129278125775;
		const _returnValueewibMbM = 2.807810312604012;
		const _getAllEdgesBMWCvd = () => { return _returnValueewibMbM };
		const _returnValuejWbOEdB = undefined;
		const _arrayValuemqD2BPv = () => { return _returnValuejWbOEdB };
		const _arrayValuerHLnYR = "Cmyc80pC7ZWqYU8q2Eh5Qb2BwJXbYBzt06v1CqjU4WX1ZzKRgQaKQbBi8GRxOVHMBMvJRy738zbbvBOsZNI";
		const _arrayValuevBhgiq = null;
		const _returnValuepn7HVG = [_arrayValuemqD2BPv, _arrayValuerHLnYR, _arrayValuevBhgiq]
		const _getAllVerticesMIZwH2R = () => { return _returnValuepn7HVG };
		const _graphnQyNWBR = {
			"isDirected": _isDirectedyP8bnDR,
		"getAllEdges": _getAllEdgesBMWCvd,
		"getAllVertices": _getAllVerticesMIZwH2R
	}
		const _returnValuexxRUsV8 = await kruskal(_graphnQyNWBR)
	});

	it('test for kruskal', async () => {
		const _isDirectedPr4Wy5Z = null;
		const _arrayValuehQHX0dT = false;
		const _arrayValueYSPvp63 = "AL5hlwkzJLhTrN51GhVJ8bhEAp56Vd73xQMuia4EVAzYp9OgO4QDEuAfDDjIweE9ebrrNeS9eYqYzU3a3iKigLA4vYycy3W";
		const _returnValueyUJbOZ0 = [_arrayValuehQHX0dT, _arrayValueYSPvp63]
		const _getAllEdges4Ig29j = () => { return _returnValueyUJbOZ0 };
		const _arrayValuezhCaHo = undefined;
		const _arrayValuetxWoCpt = []
		const _arrayValueApNYCVT = false;
		const _returnValueRPeKBf = [_arrayValuezhCaHo, _arrayValuetxWoCpt, _arrayValueApNYCVT]
		const _getAllVerticesL6ai8VF = () => { return _returnValueRPeKBf };
		const _graphdiYqJej = {
			"isDirected": _isDirectedPr4Wy5Z,
		"getAllEdges": _getAllEdges4Ig29j,
		"getAllVertices": _getAllVerticesL6ai8VF
	}
		const _returnValueLMGl2cg = await kruskal(_graphdiYqJej)
	});
})