export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuekzFmn4 = "LoVzuIEeGRUKYJhsrfDdna94rj6jhIVzcYhzEcvcIc7aKWDtdvMThm7Gir3k";
		const _graphrNFQABD = () => { return _returnValuekzFmn4 };
		const _returnValuezfMt81R = await eulerianPath(_graphrNFQABD)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedGrXY12L = true;
		const _graphh4KggIa = new Graph(_isDirectedGrXY12L)
		const _returnValueeGLNP4x = await _graphh4KggIa.getAllVertices()
		const _returnValueEhLaHc = await eulerianPath(_graphh4KggIa)
	});
})