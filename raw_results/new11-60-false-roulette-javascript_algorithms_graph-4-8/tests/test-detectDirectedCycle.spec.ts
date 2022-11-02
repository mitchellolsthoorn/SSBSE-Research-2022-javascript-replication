export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValue16Gnl9 = null;
		const _getAllVerticesfGorWCa = () => { return _returnValue16Gnl9 };
		const _graphAxXu0cx = {
			"getAllVertices": _getAllVerticesfGorWCa
	}
		const _returnValueeoNzBI = await detectDirectedCycle(_graphAxXu0cx)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedmlEqOQ7 = false;
		const _graphAWpnbyd = new Graph(_isDirectedmlEqOQ7)
		const _arrayValuenz2gzKr = false;
		const _arrayValueb3pH7f9 = [_arrayValuenz2gzKr]
		const _arrayValuebpsKxH = undefined;
		const _vertexKeyinkzOwU = [_arrayValueb3pH7f9, _arrayValuebpsKxH]
		const _returnValueuVnz0xe = await _graphAWpnbyd.getVertexByKey(_vertexKeyinkzOwU)
		const _returnValueOfhfuFV = await _graphAWpnbyd.getAllEdges()
		const _returnValueByPY08C = await detectDirectedCycle(_graphAWpnbyd)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedNWbOuzj = false;
		const _graphDb3G8ig = new Graph(_isDirectedNWbOuzj)
		const _returnValueCxBA0AD = await _graphDb3G8ig.getVerticesIndices()
		const _returnValueYCN6ua = "HwaLaFv7jaTm8f5Lkg4rWrPR84oBrlqPnXxjLGU5p7DynxUOuFJfFiTCGn6yM";
		const _getKey6WljF9 = () => { return _returnValueYCN6ua };
		const _newVertexcmFB4TS = {
			"getKey": _getKey6WljF9
	}
		const _returnValue5OuqD7 = await _graphDb3G8ig.addVertex(_newVertexcmFB4TS)
		const _returnValueFijtOXP = await detectDirectedCycle(_graphDb3G8ig)
	});
})