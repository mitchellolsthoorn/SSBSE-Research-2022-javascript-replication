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
		const _returnValuetoSc2VB = undefined;
		const _getAllVerticesN06bDRc = () => { return _returnValuetoSc2VB };
		const _returnValueRdAN5m = 1.1059203105097222;
		const _findEdgeSqztz2g = () => { return _returnValueRdAN5m };
		const _graphwVf284I = {
			"getAllVertices": _getAllVerticesN06bDRc,
		"findEdge": _findEdgeSqztz2g
	}
		const _arrayValueCX0IQpU = false;
		const _arrayValuevM3cCCN = undefined;
		const _arrayValueAMSogji = null;
		const _arrayValuel9y97cn = [_arrayValuevM3cCCN, _arrayValueAMSogji]
		const _arrayValueYPMgvT7 = undefined;
		const _arrayValueJUTzLq = "xJX7VV23PZX";
		const _startVertexbC28Vrk = [_arrayValueCX0IQpU, _arrayValuel9y97cn, _arrayValueYPMgvT7, _arrayValueJUTzLq]
		const _returnValueXOvLFiY = await dijkstra(_graphwVf284I, _startVertexbC28Vrk)
	});

	it('test for dijkstra', async () => {
		const _isDirectedYyZaUn = true;
		const _graphb08bDeI = new Graph(_isDirectedYyZaUn)
		const _returnValuePS9boDT = await _graphb08bDeI.reverse()
		const _returnValuebvPLBxB = await _graphb08bDeI.getAdjacencyMatrix()
		const _returnValueK1hmnRG = null;
		const _getKeyWeBmnfv = () => { return _returnValueK1hmnRG };
		const _startVertexgZxMdH9 = {
			"getKey": _getKeyWeBmnfv
	}
		const _returnValuecGbxEuv = await dijkstra(_graphb08bDeI, _startVertexgZxMdH9)
	});

	it('test for dijkstra', async () => {
		const _isDirectedBW3Kea = true;
		const _graph35LKjw = new Graph(_isDirectedBW3Kea)
		const _returnValueZW9AZn6 = await _graph35LKjw.getAllEdges()
		const _returnValueVEE86ND = await _graph35LKjw.getAllEdges()
		const _returnValueEFCkWjP = await _graph35LKjw.getAllVertices()
		const _returnValueVow4jJf = await _graph35LKjw.getAdjacencyMatrix()
		const _valuevowYTEl = "MzNIZho";
		const _startVertexKjvdSn4 = new GraphVertex(_valuevowYTEl)
		const _returnValuegaoimqV = await _startVertexKjvdSn4.getNeighbors()
		const _vertexOQtFu4 = {
		
	}
		const _returnValueFw8npeY = await _startVertexKjvdSn4.hasNeighbor(_vertexOQtFu4)
		const _returnValuedelfgvk = await _startVertexKjvdSn4.deleteAllEdges()
		const _arrayValueOzndG4G = {
		
	}
		const _arrayValueYscYRZ3 = false;
		const _arrayValuellKr50I = undefined;
		const _arrayValuecfEFnso = [_arrayValuellKr50I]
		const _requiredEdgeEjuZINO = [_arrayValueOzndG4G, _arrayValueYscYRZ3, _arrayValuecfEFnso]
		const _returnValueP1Ut8GP = await _startVertexKjvdSn4.hasEdge(_requiredEdgeEjuZINO)
		const _returnValueuXpNo2q = await dijkstra(_graph35LKjw, _startVertexKjvdSn4)
	});

	it('test for dijkstra', async () => {
		const _isDirectedvxogKks = false;
		const _graphGPkP8eM = new Graph(_isDirectedvxogKks)
		const _returnValueKtnliIq = await _graphGPkP8eM.getVerticesIndices()
		const _valuevqWPJ2u = {
		
	}
		const _startVertextQmAlXd = new GraphVertex(_valuevqWPJ2u)
		const _requiredEdgexC5qA0X = null;
		const _returnValuesfDacaA = await _startVertextQmAlXd.hasEdge(_requiredEdgexC5qA0X)
		const _returnValuehRIumo6 = await _startVertextQmAlXd.getDegree()
		const _edgeHF1qOlp = 2.566869807429521;
		const _returnValueLrluSIJ = await _startVertextQmAlXd.addEdge(_edgeHF1qOlp)
		const _returnValuep7GTJ03 = await _startVertextQmAlXd.getEdges()
		const _returnValueZqli43F = await dijkstra(_graphGPkP8eM, _startVertextQmAlXd)
	});
})