export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphERaBYGM = "zTcJRyHRGWfbYdzLlsF2rYq8RDrlZWOOBSlByiNW3Px5b3Jf5C8l9PPbjhJsCuOw8WpOY";
		const _returnValuejJAlGv = await detectDirectedCycle(_graphERaBYGM)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedpp0fIz = true;
		const _graphdVv9Bxv = new Graph(_isDirectedpp0fIz)
		const _returnValueFyA3fbf = await _graphdVv9Bxv.getAllVertices()
		const _returnValueqiPFUNs = await detectDirectedCycle(_graphdVv9Bxv)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedEpjQbf = true;
		const _grapha1FNj1B = new Graph(_isDirectedEpjQbf)
		const _valueua1ghG = "EUx5K61hsc53kWlXdLxBJ5Z4iENn9lH4kl7IUt2hzh3tEWIkpQ9JwxLjOJwFdpGA";
		const _returnValuenRtsMWV = true;
		const _keyCallbackM0r95nP = () => { return _returnValuenRtsMWV };
		const _newVertexCl5siTR = new DisjointSetItem(_valueua1ghG, _keyCallbackM0r95nP)
		const _returnValueT6ur7ur = await _newVertexCl5siTR.getChildren()
		const _returnValueA5IbGbD = await _grapha1FNj1B.addVertex(_newVertexCl5siTR)
		const _returnValueDjS7ZH = await _grapha1FNj1B.getWeight()
		const _returnValueqA6IJVy = await detectDirectedCycle(_grapha1FNj1B)
	});
})