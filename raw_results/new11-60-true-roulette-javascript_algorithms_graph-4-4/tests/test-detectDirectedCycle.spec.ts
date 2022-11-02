export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueb0xh6d = undefined;
		const _arrayValueWg5EUGJ = null;
		const _graphFqgrUfC = [_arrayValueb0xh6d, _arrayValueWg5EUGJ]
		const _returnValueNJhQ8g = await detectDirectedCycle(_graphFqgrUfC)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectediyN2QdH = true;
		const _graphlXWnI5O = new Graph(_isDirectediyN2QdH)
		const _returnValueHTn32SD = await _graphlXWnI5O.getVerticesIndices()
		const _returnValueC3hG2sU = await _graphlXWnI5O.getAllVertices()
		const _vertexKeyhmSoGO = true;
		const _returnValueuaysj7x = await _graphlXWnI5O.getVertexByKey(_vertexKeyhmSoGO)
		const _returnValueJLz2ww4 = await _graphlXWnI5O.toString()
		const _returnValueY4BnMnP = await _graphlXWnI5O.toString()
		const _returnValuedJ8F9xx = await detectDirectedCycle(_graphlXWnI5O)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedBJ93Utn = false;
		const _graphyedlsfY = new Graph(_isDirectedBJ93Utn)
		const _returnValueoXPdmo0 = null;
		const _getKeyR1sQu6 = () => { return _returnValueoXPdmo0 };
		const _newVertexKgxqooO = {
			"getKey": _getKeyR1sQu6
	}
		const _returnValueTJZkTxZ = await _graphyedlsfY.addVertex(_newVertexKgxqooO)
		const _returnValueIrX6yxY = await _graphyedlsfY.getAllVertices()
		const _returnValuecoc0zTW = await detectDirectedCycle(_graphyedlsfY)
	});
})