export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphyCh5dLs = undefined;
		const _returnValueDfjxicG = await prim(_graphyCh5dLs)
	});

	it('test for prim', async () => {
		const _isDirectedt9G3ru = -5.428419447919413;
		const _returnValuek3lECPM = {
		
	}
		const _getAllVerticeswgHmP2l = () => { return _returnValuek3lECPM };
		const _graphhDRFkqZ = {
			"isDirected": _isDirectedt9G3ru,
		"getAllVertices": _getAllVerticeswgHmP2l
	}
		const _returnValueFZpf5E2 = await prim(_graphhDRFkqZ)
	});

	it('test for prim', async () => {
		const _isDirectedXU2IoLa = false;
		const _graphy6KNweg = new Graph(_isDirectedXU2IoLa)
		const _returnValuesPEFps = await _graphy6KNweg.getAllVertices()
		const _returnValueZ1eJBD = await _graphy6KNweg.getAdjacencyMatrix()
		const _returnValueI37EReK = await _graphy6KNweg.getAllEdges()
		const _valueR1hlz8P = 7.066199536756081;
		const _returnValueNhuRqhI = false;
		const _keyCallbackfaz7RFw = () => { return _returnValueNhuRqhI };
		const _newVertexEDdhsTn = new DisjointSetItem(_valueR1hlz8P, _keyCallbackfaz7RFw)
		const _returnValuejbfuHhv = await _newVertexEDdhsTn.isRoot()
		const _returnValuekFgLcFI = await _newVertexEDdhsTn.isRoot()
		const _returnValueQpbrp8s = await _newVertexEDdhsTn.getRoot()
		const _returnValuePjWdHrs = await _graphy6KNweg.addVertex(_newVertexEDdhsTn)
		const _returnValuesQspc9C = await prim(_graphy6KNweg)
	});

	it('test for prim', async () => {
		const _isDirectedc6xlZY = false;
		const _graphu1hOdr = new Graph(_isDirectedc6xlZY)
		const _valuedZOuyFG = {
		
	}
		const _newVertexwMPeOy5 = new GraphVertex(_valuedZOuyFG)
		const _returnValuenurqsJT = await _newVertexwMPeOy5.getEdges()
		const _returnValueZQRwor = await _newVertexwMPeOy5.getDegree()
		const _returnValueWnlxjpi = await _graphu1hOdr.addVertex(_newVertexwMPeOy5)
		const _returnValue91nPaw = await prim(_graphu1hOdr)
	});
})