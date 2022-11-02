export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedwkJgjst = "FJjN65WMq41townMyLcQTa9smiNTYJNJ2AFEVt7Jw7H2iA88p7Eqa4hCvp7ykNfKXnDgQiumFucu7lWFxVsErQwPh4Ex51U";
		const _returnValuePtxzM2A = 9.07814846775883;
		const _returnValueAF0dJm4 = () => { return _returnValuePtxzM2A };
		const _getAllVerticesIICX4A = () => { return _returnValueAF0dJm4 };
		const _graphZwOWLy1 = {
			"isDirected": _isDirectedwkJgjst,
		"getAllVertices": _getAllVerticesIICX4A
	}
		const _returnValueREl0hNa = await prim(_graphZwOWLy1)
	});

	it('test for prim', async () => {
		const _isDirectedDLtlukZ = null;
		const _graphCj9PZ0E = new Graph(_isDirectedDLtlukZ)
		const _valueoWSozn9 = {
		
	}
		const _newVertexKSAzEJa = new GraphVertex(_valueoWSozn9)
		const _returnValueQg8EVPb = await _newVertexKSAzEJa.getNeighbors()
		const _arrayValueYx6E6xZ = false;
		const _arrayValueR386w6l = null;
		const _vertexT70Nmiy = [_arrayValueYx6E6xZ, _arrayValueR386w6l]
		const _returnValueOOhjN8H = await _newVertexKSAzEJa.findEdge(_vertexT70Nmiy)
		const _returnValueFHU68yH = await _newVertexKSAzEJa.getEdges()
		const _returnValueJBkttZ6 = await _graphCj9PZ0E.addVertex(_newVertexKSAzEJa)
		const _returnValuelnMEHe3 = await prim(_graphCj9PZ0E)
	});
})