export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueu51K6wS = undefined;
		const _graphqg9gzSw = () => { return _returnValueu51K6wS };
		const _returnValueB3qokIz = false;
		const _getKeyiXLad4i = () => { return _returnValueB3qokIz };
		const _startVertex5wL8zn = {
			"getKey": _getKeyiXLad4i
	}
		const _returnValueId2FVa = await dijkstra(_graphqg9gzSw, _startVertex5wL8zn)
	});

	it('test for dijkstra', async () => {
		const _isDirectedWGec75m = false;
		const _graphbjck2HR = new Graph(_isDirectedWGec75m)
		const _returnValueOaKa7ZA = await _graphbjck2HR.getAllVertices()
		const _returnValuePUI6hk3 = {
		
	}
		const _getKeykGiRwY = () => { return _returnValuePUI6hk3 };
		const _startVertexD3alEzt = {
			"getKey": _getKeykGiRwY
	}
		const _returnValuezU6CylD = await dijkstra(_graphbjck2HR, _startVertexD3alEzt)
	});

	it('test for dijkstra', async () => {
		const _isDirectedo6U6oFe = true;
		const _graphIhGEMd = new Graph(_isDirectedo6U6oFe)
		const _returnValuencw584r = await _graphIhGEMd.getWeight()
		const _returnValuexDWsF3 = await _graphIhGEMd.getWeight()
		const _returnValueUGhEfZc = await _graphIhGEMd.getAdjacencyMatrix()
		const _returnValuec0IqTpG = await _graphIhGEMd.toString()
		const _valueCNeFzPq = {
		
	}
		const _startVertexECD03l = new GraphVertex(_valueCNeFzPq)
		const _edgeLoNMZaW = true;
		const _returnValuerTYfPK1 = await _startVertexECD03l.deleteEdge(_edgeLoNMZaW)
		const _vertex1sourP = null;
		const _returnValueTTcR6Mo = await _startVertexECD03l.findEdge(_vertex1sourP)
		const _vertexXUmkVQW = 8.161813504200424;
		const _returnValuebQaYJo = await _startVertexECD03l.findEdge(_vertexXUmkVQW)
		const _returnValueRc481Ud = await dijkstra(_graphIhGEMd, _startVertexECD03l)
	});

	it('test for dijkstra', async () => {
		const _isDirectedRRKbx8z = false;
		const _graphWYy4EZB = new Graph(_isDirectedRRKbx8z)
		const _vertexKeyKfMtsNd = null;
		const _returnValuer7u7Km = await _graphWYy4EZB.getVertexByKey(_vertexKeyKfMtsNd)
		const _arrayValuefJ6RDZt = false;
		const _arrayValuetxt5wJ3 = undefined;
		const _vertexKeyzglE9l = [_arrayValuefJ6RDZt, _arrayValuetxt5wJ3]
		const _returnValueYcrk6y = await _graphWYy4EZB.getVertexByKey(_vertexKeyzglE9l)
		const _returnValueB1yAeU = "4FDG3yQDRUUOUNGdJckpH8Yh3ohohjOwStBYNFYg0jsDXs3";
		const _valueoqkWmkb = () => { return _returnValueB1yAeU };
		const _startVertextOf0mNW = new GraphVertex(_valueoqkWmkb)
		const _returnValuejnmw9Kx = await _startVertextOf0mNW.deleteAllEdges()
		const _edgeBG8GvEw = 0.46394246784648985;
		const _returnValueMPTH6T = await _startVertextOf0mNW.addEdge(_edgeBG8GvEw)
		const _returnValuewmNXPHR = await _startVertextOf0mNW.getNeighbors()
		const _returnValue5QykpF = await dijkstra(_graphWYy4EZB, _startVertextOf0mNW)
	});
})