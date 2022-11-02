export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValuePPyywqD = false;
		const _arrayValueN2sCi7g = {
		
	}
		const _arrayValuexM26edK = undefined;
		const _arrayValueakluGeS = [_arrayValuePPyywqD, _arrayValueN2sCi7g, _arrayValuexM26edK]
		const _arrayValueFTJQzKd = "Igc4RX98qFVXHoEzhwku9xbh511s5ALWcvLP0xHgC4Yy";
		const _graphlj1Cw2z = [_arrayValueakluGeS, _arrayValueFTJQzKd]
		const _returnValueChoTFd = await detectUndirectedCycleUsingDisjointSet(_graphlj1Cw2z)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedv2KRR9N = true;
		const _graphJD8HCIi = new Graph(_isDirectedv2KRR9N)
		const _returnValueuMYvvlT = await _graphJD8HCIi.reverse()
		const _returnValueGVrpeQs = await detectUndirectedCycleUsingDisjointSet(_graphJD8HCIi)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueg6HkOVq = []
		const _getAllVerticesjsPppw = () => { return _returnValueg6HkOVq };
		const _arrayValueHVO7HG = null;
		const _arrayValueJqgUMa = true;
		const _arrayValuewAIbm3y = -6.31605158366382;
		const _returnValuexq9bsmV = [_arrayValueHVO7HG, _arrayValueJqgUMa, _arrayValuewAIbm3y]
		const _getAllEdgesowFP8xl = () => { return _returnValuexq9bsmV };
		const _graphMVPbFEA = {
			"getAllVertices": _getAllVerticesjsPppw,
		"getAllEdges": _getAllEdgesowFP8xl
	}
		const _returnValuemHS6eeL = await detectUndirectedCycleUsingDisjointSet(_graphMVPbFEA)
	});
})