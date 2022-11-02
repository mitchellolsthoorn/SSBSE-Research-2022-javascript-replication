export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueqqBxeQ6 = true;
		const _getAllVerticeswJJYIb = () => { return _returnValueqqBxeQ6 };
		const _returnValueaKKPheA = []
		const _findEdgeQ7K5HOz = () => { return _returnValueaKKPheA };
		const _graphtuOSPhP = {
			"getAllVertices": _getAllVerticeswJJYIb,
		"findEdge": _findEdgeQ7K5HOz
	}
		const _returnValuetsDYpPV = await graphBridges(_graphtuOSPhP)
	});

	it('test for graphBridges', async () => {
		const _isDirectedjeVC1kh = false;
		const _graphKmW2R3 = new Graph(_isDirectedjeVC1kh)
		const _valueIheupSo = true;
		const _returnValueVTr69RX = -7.1939136169172215;
		const _keyCallbackNxWLHXl = () => { return _returnValueVTr69RX };
		const _newVertexV0KnIHI = new DisjointSetItem(_valueIheupSo, _keyCallbackNxWLHXl)
		const _returnValueSqPm7DH = await _newVertexV0KnIHI.getKey()
		const _returnValueOTchsTe = await _newVertexV0KnIHI.isRoot()
		const _returnValuea5XSjXD = await _newVertexV0KnIHI.getRoot()
		const _returnValueU7HCRMP = await _newVertexV0KnIHI.getRoot()
		const _returnValueJzGEnp = await _graphKmW2R3.addVertex(_newVertexV0KnIHI)
		const _returnValueju1i9oB = await _graphKmW2R3.getVerticesIndices()
		const _returnValueeLBVkQi = await _graphKmW2R3.getAllEdges()
		const _returnValuesOBj1bZ = await graphBridges(_graphKmW2R3)
	});
})