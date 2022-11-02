export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValuepgGdQTz = -2.82628780667351;
		const _arrayValueY0i6HM = null;
		const _arrayValuebFus3qe = 5.334145299533681;
		const _graphoIXDPs7 = [_arrayValuepgGdQTz, _arrayValueY0i6HM, _arrayValuebFus3qe]
		const _returnValuej5P6bB4 = await eulerianPath(_graphoIXDPs7)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedyMFW56d = true;
		const _grapheA9tGyB = new Graph(_isDirectedyMFW56d)
		const _returnValuezCkTwjG = await _grapheA9tGyB.getAdjacencyMatrix()
		const _returnValuezlrb729 = await eulerianPath(_grapheA9tGyB)
	});
})