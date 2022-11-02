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
		const _returnValuernPEFya = 6.810826115970315;
		const _getAllVerticesq6F2Ogi = () => { return _returnValuernPEFya };
		const _returnValueWSRqr32 = undefined;
		const _findEdgeSCvIk0T = () => { return _returnValueWSRqr32 };
		const _graphAWRhFwr = {
			"getAllVertices": _getAllVerticesq6F2Ogi,
		"findEdge": _findEdgeSCvIk0T
	}
		const _returnValuedSYfPks = await graphBridges(_graphAWRhFwr)
	});

	it('test for graphBridges', async () => {
		const _isDirectedvdB9QN = false;
		const _graphkQdYKy2 = new Graph(_isDirectedvdB9QN)
		const _returnValueB5Dil4Q = null;
		const _getKeyRkgV8z1 = () => { return _returnValueB5Dil4Q };
		const _startVertexvkZy0V = {
			"getKey": _getKeyRkgV8z1
	}
		const _returnValueqtlDcDW = null;
		const _endVertexWfPo4BL = () => { return _returnValueqtlDcDW };
		const _returnValueXi4onRl = await _graphkQdYKy2.findEdge(_startVertexvkZy0V, _endVertexWfPo4BL)
		const _valuezDNyfCS = 2.685986546543953;
		const _returnValuevVfvtu = 8.102735732828691;
		const _keyCallbackqbfY9J = () => { return _returnValuevVfvtu };
		const _newVertextLRF9M = new DisjointSetItem(_valuezDNyfCS, _keyCallbackqbfY9J)
		const _returnValueGURGHiJ = await _newVertextLRF9M.getRank()
		const _returnValuePn8thQh = await _newVertextLRF9M.getRank()
		const _returnValuelJVSSB5 = await _newVertextLRF9M.getChildren()
		const _returnValueNBRYj8 = await _graphkQdYKy2.addVertex(_newVertextLRF9M)
		const _returnValueNHZJSa = await _graphkQdYKy2.getAllVertices()
		const _returnValueokRMkXU = await _graphkQdYKy2.getAllVertices()
		const _returnValueZLqzqPE = await graphBridges(_graphkQdYKy2)
	});
})