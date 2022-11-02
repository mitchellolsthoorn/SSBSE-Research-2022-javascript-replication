export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueSyG94DB = true;
		const _arrayValuelJ6U5px = "OujnBvHsg7pNz1611LRqGjayfSxGXp2NVvfeoxHeu70taiPqFsi1GDQabF1GAFyAWxCTC";
		const _returnValuet7ZVfmj = -6.745408327740881;
		const _arrayValue7oNJ9G = () => { return _returnValuet7ZVfmj };
		const _returnValuep4lgT8j = [_arrayValueSyG94DB, _arrayValuelJ6U5px, _arrayValue7oNJ9G]
		const _graphe8bx3zc = () => { return _returnValuep4lgT8j };
		const _returnValueW7XhYzc = await eulerianPath(_graphe8bx3zc)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedF6yFHYv = false;
		const _graphSw0STly = new Graph(_isDirectedF6yFHYv)
		const _returnValueWs45ccJ = await _graphSw0STly.getAdjacencyMatrix()
		const _returnValuezBjpScf = await _graphSw0STly.getVerticesIndices()
		const _arrayValuel4P053s = 5.297630280271266;
		const _arrayValuexXki7R7 = false;
		const _returnValueI00A5mr = "qj4YD6B3U8ILyM6hjOKbL3bdCZytVepZflJngYBuH5Q5CKLyXvhG2AFRrZewzu2bDd7AtM2EqV2lgMnhPhREJ8rEcwFpUkmxZxH";
		const _arrayValueaYPiKIy = () => { return _returnValueI00A5mr };
		const _arrayValueCRrFFTW = 0.2506744170793258;
		const _arrayValueHvwMBMj = undefined;
		const _arrayValueBhrZtcO = [_arrayValueaYPiKIy, _arrayValueCRrFFTW, _arrayValueHvwMBMj]
		const _returnValueNKwDyln = [_arrayValuel4P053s, _arrayValuexXki7R7, _arrayValueBhrZtcO]
		const _getNeighborszT79p34 = () => { return _returnValueNKwDyln };
		const _vertexCtmZVtX = {
			"getNeighbors": _getNeighborszT79p34
	}
		const _returnValueSWdUxzr = await _graphSw0STly.getNeighbors(_vertexCtmZVtX)
		const _returnValueMIkPjL = await _graphSw0STly.getAllEdges()
		const _returnValueT9FS67W = await eulerianPath(_graphSw0STly)
	});
})