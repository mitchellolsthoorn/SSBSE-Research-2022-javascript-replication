export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueQh2kGy6 = false;
		const _graphv6pHoN2 = () => { return _returnValueQh2kGy6 };
		const _returnValuepviUjuO = await eulerianPath(_graphv6pHoN2)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedVEYBh95 = false;
		const _grapheIGMdQz = new Graph(_isDirectedVEYBh95)
		const _returnValueELBOiW = await _grapheIGMdQz.getWeight()
		const _returnValueMJFcL9U = await _grapheIGMdQz.getWeight()
		const _returnValueXKPzffY = await _grapheIGMdQz.getAllEdges()
		const _returnValueAz5Fiut = await _grapheIGMdQz.toString()
		const _returnValue8vLEYc = await eulerianPath(_grapheIGMdQz)
	});
})