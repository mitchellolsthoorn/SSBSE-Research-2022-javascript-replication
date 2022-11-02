export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphPABoGZh = 3.0211636741046117;
		const _returnValueNlPXxNw = await detectUndirectedCycleUsingDisjointSet(_graphPABoGZh)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuebGLHJml = []
		const _getAllVerticesXDqUVES = () => { return _returnValuebGLHJml };
		const _returnValuejKd0tOH = "x";
		const _getAllEdgesRopNkj0 = () => { return _returnValuejKd0tOH };
		const _graphe7XiLMY = {
			"getAllVertices": _getAllVerticesXDqUVES,
		"getAllEdges": _getAllEdgesRopNkj0
	}
		const _returnValueOmQyd3 = await detectUndirectedCycleUsingDisjointSet(_graphe7XiLMY)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuelNvCTg1 = []
		const _getAllVerticesErKla4Y = () => { return _returnValuelNvCTg1 };
		const _arrayValueBF0PiU = "p";
		const _arrayValuemOrP9ux = "rp49GgbzSAKVpIop43wNqiN4wkuHH5cz6UTO7sCK8zgISf7xGSZ9PUwpCHGH1oR1Ipqu5AVkmYASNhtg6XV5hETnGzSA4ahgB";
		const _returnValueQDNyPJj = [_arrayValueBF0PiU, _arrayValuemOrP9ux]
		const _getAllEdgese4zRs6H = () => { return _returnValueQDNyPJj };
		const _graphfY665ZN = {
			"getAllVertices": _getAllVerticesErKla4Y,
		"getAllEdges": _getAllEdgese4zRs6H
	}
		const _returnValueaRIgQFw = await detectUndirectedCycleUsingDisjointSet(_graphfY665ZN)
	});
})