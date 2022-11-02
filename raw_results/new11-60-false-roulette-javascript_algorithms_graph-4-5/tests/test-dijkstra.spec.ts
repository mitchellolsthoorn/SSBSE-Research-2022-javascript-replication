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
		const _returnValueX5540t4 = []
		const _getAllVerticesc5XoOo2 = () => { return _returnValueX5540t4 };
		const _arrayValuenLVd3m8 = null;
		const _arrayValuekfSNEgT = true;
		const _arrayValueDOUJBAL = null;
		const _returnValuequE5Ib0 = [_arrayValuenLVd3m8, _arrayValuekfSNEgT, _arrayValueDOUJBAL]
		const _findEdgemf1QrND = () => { return _returnValuequE5Ib0 };
		const _graphmMnn9kM = {
			"getAllVertices": _getAllVerticesc5XoOo2,
		"findEdge": _findEdgemf1QrND
	}
		const _returnValuejpC7BSG = "XpVBiG0vrk7Gr52eYvg9S";
		const _getKeyJ2DpQJ2 = () => { return _returnValuejpC7BSG };
		const _startVertexaee0IX5 = {
			"getKey": _getKeyJ2DpQJ2
	}
		const _returnValueAAeFYD = await dijkstra(_graphmMnn9kM, _startVertexaee0IX5)
	});

	it('test for dijkstra', async () => {
		const _isDirectedWEueN3A = false;
		const _graphuKZ7IHB = new Graph(_isDirectedWEueN3A)
		const _returnValuedQcoKfn = await _graphuKZ7IHB.getWeight()
		const _returnValuelKObEfa = await _graphuKZ7IHB.getAdjacencyMatrix()
		const _returnValueOusHL52 = await _graphuKZ7IHB.getAllEdges()
		const _vertexKeydZDK7la = undefined;
		const _returnValueh6dY0N5 = await _graphuKZ7IHB.getVertexByKey(_vertexKeydZDK7la)
		const _vertexKeyEwj8jx = true;
		const _returnValueeVfVbHk = await _graphuKZ7IHB.getVertexByKey(_vertexKeyEwj8jx)
		const _valuecPlQKh8 = false;
		const _startVertexx4tWLe = new GraphVertex(_valuecPlQKh8)
		const _returnValueBg1dzvv = null;
		const _edgeAZkuSn = () => { return _returnValueBg1dzvv };
		const _returnValuejCm02GJ = await _startVertexx4tWLe.deleteEdge(_edgeAZkuSn)
		const _vertexqHVoFl2 = {
		
	}
		const _returnValuexcWVoeU = await _startVertexx4tWLe.findEdge(_vertexqHVoFl2)
		const _edgeEnWJKD2 = 3.9681717773074787;
		const _returnValuevyJ0U6G = await _startVertexx4tWLe.addEdge(_edgeEnWJKD2)
		const _vertexiVRVeIG = {
		
	}
		const _returnValueTIt0GDd = await _startVertexx4tWLe.hasNeighbor(_vertexiVRVeIG)
		const _returnValueZ6EvDab = await dijkstra(_graphuKZ7IHB, _startVertexx4tWLe)
	});

	it('test for dijkstra', async () => {
		const _isDirectedBHfrDo8 = true;
		const _graphYEB1o0R = new Graph(_isDirectedBHfrDo8)
		const _returnValue4xvWOZ = await _graphYEB1o0R.reverse()
		const _valuewSzX6Dq = -7.253695791764137;
		const _startVertexJx5Q8mB = new GraphVertex(_valuewSzX6Dq)
		const _returnValuen7SxKbB = await _startVertexJx5Q8mB.getKey()
		const _requiredEdgesm8GkXe = true;
		const _returnValueT8ncDDR = await _startVertexJx5Q8mB.hasEdge(_requiredEdgesm8GkXe)
		const _returnValueSF6Wtk0 = await _startVertexJx5Q8mB.getKey()
		const _returnValuejMVPY18 = await _startVertexJx5Q8mB.getEdges()
		const _returnValuerbKYDfl = await dijkstra(_graphYEB1o0R, _startVertexJx5Q8mB)
	});
})