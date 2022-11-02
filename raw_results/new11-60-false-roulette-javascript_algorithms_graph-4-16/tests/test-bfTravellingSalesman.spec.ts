export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphm9DKF5j = "hAusPooc1LTlH2jR69tWsSXVhE43hKr1apzzQE7JkEvcF9ta8F9Vu";
		const _returnValueVyZw79M = await bfTravellingSalesman(_graphm9DKF5j)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueXBLHNlJ = true;
		const _returnValuev56BAY2 = () => { return _returnValueXBLHNlJ };
		const _getAllVerticesQfJafvL = () => { return _returnValuev56BAY2 };
		const _getAdjacencyMatrixeLNs6ZV = null;
		const _returnValueaBuVexw = 9.196797306948206;
		const _getVerticesIndicesAwR5lQr = () => { return _returnValueaBuVexw };
		const _graphFPxtLU6 = {
			"getAllVertices": _getAllVerticesQfJafvL,
		"getAdjacencyMatrix": _getAdjacencyMatrixeLNs6ZV,
		"getVerticesIndices": _getVerticesIndicesAwR5lQr
	}
		const _returnValuey70il9u = await bfTravellingSalesman(_graphFPxtLU6)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedfcVQhwG = true;
		const _graphizrHJmy = new Graph(_isDirectedfcVQhwG)
		const _valuerJy5oG = null;
		const _returnValuey6d6tjJ = -2.40916883690762;
		const _keyCallbackbWX5R4Z = () => { return _returnValuey6d6tjJ };
		const _newVertexud3BErD = new DisjointSetItem(_valuerJy5oG, _keyCallbackbWX5R4Z)
		const _returnValueCalf1TL = null;
		const _addChildr7PqGip = () => { return _returnValueCalf1TL };
		const _parentItemdjqRQra = {
			"addChild": _addChildr7PqGip
	}
		const _forceSettingParentChildKWKhnUZ = false;
		const _returnValueB7wfi6L = await _newVertexud3BErD.setParent(_parentItemdjqRQra, _forceSettingParentChildKWKhnUZ)
		const _returnValueZYFwW7a = await _newVertexud3BErD.getKey()
		const _returnValue8EAVKu = await _graphizrHJmy.addVertex(_newVertexud3BErD)
		const _returnValuegFXAmwV = "sP7QSd";
		const _getKeyFSINFvB = () => { return _returnValuegFXAmwV };
		const _startVertexTv8Hqa = {
			"getKey": _getKeyFSINFvB
	}
		const _arrayValuesPAvTeo = undefined;
		const _arrayValuee2wX2ux = {
		
	}
		const _endVertexR2MFtzT = [_arrayValuesPAvTeo, _arrayValuee2wX2ux]
		const _returnValueGtUu44 = await _graphizrHJmy.findEdge(_startVertexTv8Hqa, _endVertexR2MFtzT)
		const _returnValueYNTAnKU = await bfTravellingSalesman(_graphizrHJmy)
	});
})