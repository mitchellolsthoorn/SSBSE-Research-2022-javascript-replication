export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _isDirectedv8weugJ = true;
		const _graphaUeoqqR = new Graph(_isDirectedv8weugJ)
		const _returnValued30Yv80 = await _graphaUeoqqR.getVerticesIndices()
		const _arrayValuelv0Hseo = false;
		const _arrayValuejW3wxXL = "zCurLSu9kHJF7gBIOmLkNruwCi8g28axeABiOTHQ6usu5SgauzQ1weUuHRQxrmqn5vnXI";
		const _arrayValueTxl6I4r = null;
		const _vertexKeyGs1Gx36 = [_arrayValuelv0Hseo, _arrayValuejW3wxXL, _arrayValueTxl6I4r]
		const _returnValueQHoSaSZ = await _graphaUeoqqR.getVertexByKey(_vertexKeyGs1Gx36)
		const _returnValuektwpuQu = undefined;
		const _returnValued5XdSvu = () => { return _returnValuektwpuQu };
		const _getKeyYCSV5ml = () => { return _returnValued5XdSvu };
		const _startVertexEFgJXeN = {
			"getKey": _getKeyYCSV5ml
	}
		const _returnValuelxBIYy7 = await dijkstra(_graphaUeoqqR, _startVertexEFgJXeN)
	});

	it('test for dijkstra', async () => {
		const _isDirectedjhM6BSl = true;
		const _graphCyq1L2B = new Graph(_isDirectedjhM6BSl)
		const _returnValueCiPC49 = await _graphCyq1L2B.getAdjacencyMatrix()
		const _returnValued5dbEBv = await _graphCyq1L2B.reverse()
		const _valuecVtCge = "wkaeRgpu7hPtZFuYmdtQp3dGqo5qYrl8P5zQVu9hNHd1LtK4qYyWp";
		const _startVertexBou5XUI = new GraphVertex(_valuecVtCge)
		const _vertexV0dqsMi = false;
		const _returnValuejDkpeZY = await _startVertexBou5XUI.hasNeighbor(_vertexV0dqsMi)
		const _returnValueWHXY8k = await _startVertexBou5XUI.getKey()
		const _edgeKNRGtXS = -7.354051074522886;
		const _returnValuekiL7hT = await _startVertexBou5XUI.addEdge(_edgeKNRGtXS)
		const _returnValueeOawHX1 = await dijkstra(_graphCyq1L2B, _startVertexBou5XUI)
	});

	it('test for dijkstra', async () => {
		const _isDirectedWMQSHzH = false;
		const _graphPyoYwhm = new Graph(_isDirectedWMQSHzH)
		const _vertexKeyI4LxG56 = {
		
	}
		const _returnValuefFkrox5 = await _graphPyoYwhm.getVertexByKey(_vertexKeyI4LxG56)
		const _returnValueYjBJa9 = await _graphPyoYwhm.toString()
		const _returnValueHSpszep = await _graphPyoYwhm.getWeight()
		const _valueRkhsKWc = {
		
	}
		const _startVertexZvUhcEV = new GraphVertex(_valueRkhsKWc)
		const _returnValueD3xN6Gl = await _startVertexZvUhcEV.deleteAllEdges()
		const _returnValueA2Pj1Tn = true;
		const _callbackyVbfoI2 = () => { return _returnValueA2Pj1Tn };
		const _returnValueNz2YliE = await _startVertexZvUhcEV.toString(_callbackyVbfoI2)
		const _vertexjFhRGyu = -2.2563769404040714;
		const _returnValueP1miDez = await _startVertexZvUhcEV.hasNeighbor(_vertexjFhRGyu)
		const _returnValueSDYAGRq = await dijkstra(_graphPyoYwhm, _startVertexZvUhcEV)
	});
})