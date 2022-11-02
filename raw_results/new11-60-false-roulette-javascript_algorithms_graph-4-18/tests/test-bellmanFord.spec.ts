export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValueyEyfdJh = []
		const _graphWe4SmUh = [_arrayValueyEyfdJh]
		const _returnValuejeQPsXu = "aMCnyYIIrFrg4iqgduFPqlJhxR3mF3s0awLDrMN6yqoRWI";
		const _getKeymhdkcwI = () => { return _returnValuejeQPsXu };
		const _startVertexwZkKUh = {
			"getKey": _getKeymhdkcwI
	}
		const _returnValueC2VSSK = await bellmanFord(_graphWe4SmUh, _startVertexwZkKUh)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedXjV6YWM = true;
		const _graphRtZuin3 = new Graph(_isDirectedXjV6YWM)
		const _returnValuejRBcjsN = await _graphRtZuin3.getAllVertices()
		const _returnValueISopCs4 = await _graphRtZuin3.reverse()
		const _vertexKeyoI7SJX = "L3IhewiXL9Uy";
		const _returnValueG235Jz = await _graphRtZuin3.getVertexByKey(_vertexKeyoI7SJX)
		const _returnValuecAupIgb = await _graphRtZuin3.getVerticesIndices()
		const _returnValuekUso659 = await _graphRtZuin3.getAllEdges()
		const _returnValuegCJGRsJ = false;
		const _getKeyW7eKsMC = () => { return _returnValuegCJGRsJ };
		const _startVertexcl9XTq = {
			"getKey": _getKeyW7eKsMC
	}
		const _returnValuequFX0UU = await bellmanFord(_graphRtZuin3, _startVertexcl9XTq)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedjpotTv = true;
		const _graphaj5DfpD = new Graph(_isDirectedjpotTv)
		const _valueGD5D1gd = false;
		const _newVertexhIJHPoJ = new GraphVertex(_valueGD5D1gd)
		const _requiredEdgedpHVDeh = "kz4CmUVoQyqCne3vJD6Gr8U2wog7lU3hicRiz6DikWwJiSelzV";
		const _returnValueeiQwZB = await _newVertexhIJHPoJ.hasEdge(_requiredEdgedpHVDeh)
		const _arrayValuenzlId7q = {
		
	}
		const _edgeRigeTeO = [_arrayValuenzlId7q]
		const _returnValue4Xc57Z = await _newVertexhIJHPoJ.deleteEdge(_edgeRigeTeO)
		const _returnValueAlpGXW8 = await _newVertexhIJHPoJ.getKey()
		const _returnValueuAbwqoD = await _newVertexhIJHPoJ.getDegree()
		const _returnValueeVr6rO5 = await _graphaj5DfpD.addVertex(_newVertexhIJHPoJ)
		const _returnValueTaK1qg0 = await _graphaj5DfpD.getAllVertices()
		const _returnValueAQRaGGY = await _graphaj5DfpD.getVerticesIndices()
		const _returnValueJr9tQy9 = {
		
	}
		const _getKeyzjtCZ1S = () => { return _returnValueJr9tQy9 };
		const _startVertexVCGuF8m = {
			"getKey": _getKeyzjtCZ1S
	}
		const _returnValueYANYKT0 = await bellmanFord(_graphaj5DfpD, _startVertexVCGuF8m)
	});
})