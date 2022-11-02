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
		const _returnValuelcVGhDY = null;
		const _graphNyZSoyz = () => { return _returnValuelcVGhDY };
		const _returnValuewVuVCpO = await prim(_graphNyZSoyz)
	});

	it('test for prim', async () => {
		const _isDirectedkdA1dwH = true;
		const _graphzB3lnVy = new Graph(_isDirectedkdA1dwH)
		const _returnValueQTeyiIv = await _graphzB3lnVy.getAdjacencyMatrix()
		const _returnValueT8bRTY3 = await _graphzB3lnVy.getAllVertices()
		const _returnValueVlMB9C = 7.7980607281266145;
		const _getNeighborsx9Hx3kA = () => { return _returnValueVlMB9C };
		const _vertexye6omqf = {
			"getNeighbors": _getNeighborsx9Hx3kA
	}
		const _returnValueniCf9tG = await _graphzB3lnVy.getNeighbors(_vertexye6omqf)
		const _vertexKeyo52shG5 = {
		
	}
		const _returnValuefzaqpEn = await _graphzB3lnVy.getVertexByKey(_vertexKeyo52shG5)
		const _returnValueHVwCF3s = await prim(_graphzB3lnVy)
	});

	it('test for prim', async () => {
		const _isDirectedtTOAftK = false;
		const _graphPqKCUfe = new Graph(_isDirectedtTOAftK)
		const _returnValue71oYXS = null;
		const _getKeyuC9gX9 = () => { return _returnValue71oYXS };
		const _newVertexkb8ZSID = {
			"getKey": _getKeyuC9gX9
	}
		const _returnValuejBnSrOo = await _graphPqKCUfe.addVertex(_newVertexkb8ZSID)
		const _returnValuenckvhNG = await _graphPqKCUfe.getWeight()
		const _returnValueJGed2uf = await prim(_graphPqKCUfe)
	});

	it('test for prim', async () => {
		const _isDirectedlnok3D = false;
		const _graphjkn5tce = new Graph(_isDirectedlnok3D)
		const _returnValueCqflbnX = await _graphjkn5tce.getAllVertices()
		const _valueQBzABem = 1.5852610826323819;
		const _newVertexdrTYDjF = new GraphVertex(_valueQBzABem)
		const _requiredEdgeqTVD5gg = 3.644887105660395;
		const _returnValueN7dTTs5 = await _newVertexdrTYDjF.hasEdge(_requiredEdgeqTVD5gg)
		const _returnValuezmKhTds = await _newVertexdrTYDjF.deleteAllEdges()
		const _edgeYZuvdkH = 2.140304448262615;
		const _returnValueCJh1Xvp = await _newVertexdrTYDjF.addEdge(_edgeYZuvdkH)
		const _returnValueTUX9aM2 = await _graphjkn5tce.addVertex(_newVertexdrTYDjF)
		const _returnValuez1d6zT = await prim(_graphjkn5tce)
	});
})