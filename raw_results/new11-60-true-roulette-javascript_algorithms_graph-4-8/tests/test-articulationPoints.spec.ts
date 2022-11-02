export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuezCHjhpt = "5iWnM4dbL5dZ5SehCOYhIq0hf6HUfjFhTsucALvn5gF6CcvNsgNZpVTJOUsX8EEh4UaE2NO3zAW7EVu0EAzLbG17bCtf";
		const _getAllVerticesqLgqfNT = () => { return _returnValuezCHjhpt };
		const _graphUHheSa = {
			"getAllVertices": _getAllVerticesqLgqfNT
	}
		const _returnValueSqIvaVy = await articulationPoints(_graphUHheSa)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedfqQxT3 = false;
		const _graphUdET5i = new Graph(_isDirectedfqQxT3)
		const _returnValuewCYRlz = await _graphUdET5i.getAllVertices()
		const _value6pt0jQ = true;
		const _startVertexUegAeD = new GraphVertex(_value6pt0jQ)
		const _returnValuegmIXUeT = await _startVertexUegAeD.getDegree()
		const _returnValueuNOF5hR = await _startVertexUegAeD.deleteAllEdges()
		const _returnValueDpVdKxU = await _startVertexUegAeD.deleteAllEdges()
		const _returnValueXiHAdUb = await _startVertexUegAeD.getNeighbors()
		const _returnValueo3kry11 = await _startVertexUegAeD.getKey()
		const _endVertexulQi01 = true;
		const _returnValueuqrZ41c = await _graphUdET5i.findEdge(_startVertexUegAeD, _endVertexulQi01)
		const _valueZMya01c = false;
		const _returnValueTmYwu0N = null;
		const _keyCallbackCB0VmN = () => { return _returnValueTmYwu0N };
		const _newVertexu9ShtU = new DisjointSetItem(_valueZMya01c, _keyCallbackCB0VmN)
		const _parentItemjBdszRd = null;
		const _forceSettingParentChildnDV1lEn = false;
		const _returnValueIhzYv8w = await _newVertexu9ShtU.setParent(_parentItemjBdszRd, _forceSettingParentChildnDV1lEn)
		const _returnValuepWKxPkA = await _newVertexu9ShtU.getChildren()
		const _returnValuew3Dvty2 = await _newVertexu9ShtU.isRoot()
		const _returnValueHp9BD6U = await _newVertexu9ShtU.getRank()
		const _returnValueQGlpKAl = await _newVertexu9ShtU.getChildren()
		const _returnValueBfnGEU = await _graphUdET5i.addVertex(_newVertexu9ShtU)
		const _returnValueG1tPk7 = await articulationPoints(_graphUdET5i)
	});
})