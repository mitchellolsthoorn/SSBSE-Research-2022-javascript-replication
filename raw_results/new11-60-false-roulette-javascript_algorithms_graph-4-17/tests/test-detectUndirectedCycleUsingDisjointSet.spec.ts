export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphdsHOvn = "MFGnf73Vx1bbNaWSn5bLbD5mjpCRcxng7eyzaXmzGSnwHwIeS3emiE0qWfj2Hl37jXGJOzUj";
		const _returnValuefqiTsc = await detectUndirectedCycleUsingDisjointSet(_graphdsHOvn)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedyaldu0 = false;
		const _graphCXTt3c5 = new Graph(_isDirectedyaldu0)
		const _returnValueTvWXt1Q = await _graphCXTt3c5.getAllVertices()
		const _returnValuefK9fLIH = await _graphCXTt3c5.getVerticesIndices()
		const _returnValueIEzjvCH = await detectUndirectedCycleUsingDisjointSet(_graphCXTt3c5)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuek28MQr0 = []
		const _getAllVerticeswTRytZr = () => { return _returnValuek28MQr0 };
		const _arrayValueHbDLmMw = "iqamsq6lGVYJDUcHGchPpd8vTTXbJaKBfpdhl8kCLyNCrBQdflDTA3lq06yC3tzl4JmcbGUt6ri9WawnGNpGai";
		const _arrayValueeSluyr6 = undefined;
		const _arrayValueDWuV0aD = [_arrayValueeSluyr6]
		const _arrayValuesQracPH = null;
		const _returnValuegNf67Li = [_arrayValueHbDLmMw, _arrayValueDWuV0aD, _arrayValuesQracPH]
		const _getAllEdgesscYHmZs = () => { return _returnValuegNf67Li };
		const _graphFoulKhf = {
			"getAllVertices": _getAllVerticeswTRytZr,
		"getAllEdges": _getAllEdgesscYHmZs
	}
		const _returnValuepMmHAoj = await detectUndirectedCycleUsingDisjointSet(_graphFoulKhf)
	});
})