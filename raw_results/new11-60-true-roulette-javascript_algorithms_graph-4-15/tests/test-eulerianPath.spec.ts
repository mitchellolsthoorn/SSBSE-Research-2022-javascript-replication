export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueHTR26wg = "5Ve0pHNQ6fS";
		const _arrayValueqJfN3NC = null;
		const _graphMAMQgh = [_arrayValueHTR26wg, _arrayValueqJfN3NC]
		const _returnValuenpeD71A = await eulerianPath(_graphMAMQgh)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedgFPVbmj = true;
		const _graph7E1zoC = new Graph(_isDirectedgFPVbmj)
		const _vertexKeyKIE7H6N = -5.237622748420897;
		const _returnValueTzzLxur = await _graph7E1zoC.getVertexByKey(_vertexKeyKIE7H6N)
		const _returnValueaB1e8wV = await _graph7E1zoC.getAllVertices()
		const _returnValuejEfJGZx = await eulerianPath(_graph7E1zoC)
	});
})