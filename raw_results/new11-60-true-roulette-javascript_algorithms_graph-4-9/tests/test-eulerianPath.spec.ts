export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuesSzLdW6 = -5.111883314549593;
		const _graphppVZIL = () => { return _returnValuesSzLdW6 };
		const _returnValueVTB4M3 = await eulerianPath(_graphppVZIL)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedgeflahe = true;
		const _graphmTZ4kq = new Graph(_isDirectedgeflahe)
		const _returnValuef9fMjgy = await _graphmTZ4kq.getAllVertices()
		const _returnValueYuIb00n = await _graphmTZ4kq.getWeight()
		const _returnValueYBG6GbM = await eulerianPath(_graphmTZ4kq)
	});
})