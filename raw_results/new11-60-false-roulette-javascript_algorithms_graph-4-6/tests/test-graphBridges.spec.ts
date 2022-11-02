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
		const _returnValueflQn8sF = true;
		const _getAllVerticescz4WJWu = () => { return _returnValueflQn8sF };
		const _returnValueFIuENr = false;
		const _findEdgeQtQtjY4 = () => { return _returnValueFIuENr };
		const _graphWHn0VMS = {
			"getAllVertices": _getAllVerticescz4WJWu,
		"findEdge": _findEdgeQtQtjY4
	}
		const _returnValuec6ScVT = await graphBridges(_graphWHn0VMS)
	});

	it('test for graphBridges', async () => {
		const _isDirectedEI3wrk = false;
		const _graphMyZ9Aq2 = new Graph(_isDirectedEI3wrk)
		const _returnValueWdUZ54 = await _graphMyZ9Aq2.reverse()
		const _valuenKIdoTt = undefined;
		const _arrayValueyE9lLPg = null;
		const _arrayValuehD7PQJd = null;
		const _arrayValueBrc3HyN = "ImgtUUpGmXbhoPPkqMYmwuZCOhoIsc2bXCYmObBL4";
		const _returnValuet05gF6J = false;
		const _arrayValueMZhL7B5 = () => { return _returnValuet05gF6J };
		const _returnValuefDzujFt = [_arrayValueyE9lLPg, _arrayValuehD7PQJd, _arrayValueBrc3HyN, _arrayValueMZhL7B5]
		const _keyCallbackWAfWt26 = () => { return _returnValuefDzujFt };
		const _newVertexFQLVBiy = new DisjointSetItem(_valuenKIdoTt, _keyCallbackWAfWt26)
		const _returnValueysKQmk3 = await _newVertexFQLVBiy.getRoot()
		const _returnValueJ72LaK = await _newVertexFQLVBiy.getKey()
		const _returnValuezfSu29Y = await _graphMyZ9Aq2.addVertex(_newVertexFQLVBiy)
		const _returnValueW0KDm7A = []
		const _getKeyVixU1uW = () => { return _returnValueW0KDm7A };
		const _startVertexoAifK2h = {
			"getKey": _getKeyVixU1uW
	}
		const _arrayValuepIixL61 = undefined;
		const _arrayValueGLQatUb = false;
		const _arrayValueWc49Ruc = undefined;
		const _arrayValueZlIZavr = "TGA1Sif5X5aU3rGdDVNy56ojicgoiCWbaXCVV4OceHxPIrfGIUN8csCEsgUdAxZjJ25wgkqHmZ94";
		const _arrayValuewg8ndt6 = null;
		const _arrayValueeXo5YV = [_arrayValueWc49Ruc, _arrayValueZlIZavr, _arrayValuewg8ndt6]
		const _arrayValueBSPlCJM = undefined;
		const _endVertexmAmLqkb = [_arrayValuepIixL61, _arrayValueGLQatUb, _arrayValueeXo5YV, _arrayValueBSPlCJM]
		const _returnValueZdN6vgw = await _graphMyZ9Aq2.findEdge(_startVertexoAifK2h, _endVertexmAmLqkb)
		const _returnValueKIjcqxs = await graphBridges(_graphMyZ9Aq2)
	});
})