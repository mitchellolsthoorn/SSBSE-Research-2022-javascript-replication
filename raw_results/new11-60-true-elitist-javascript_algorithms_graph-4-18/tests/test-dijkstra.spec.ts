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
		const _returnValueFmhLgag = "wDWODE9pamA2ruIvlAqEqPi2CcHKbMZpo2ylbzjUcQIhpVvXUy2l8GdsuV47qn0foet576840pO9";
		const _getAllVerticesRLZs7vp = () => { return _returnValueFmhLgag };
		const _returnValueHrsLclh = false;
		const _findEdgeYPRW4GH = () => { return _returnValueHrsLclh };
		const _graphqGdC5cT = {
			"getAllVertices": _getAllVerticesRLZs7vp,
		"findEdge": _findEdgeYPRW4GH
	}
		const _returnValueJo8Q6BQ = null;
		const _getKeyMYudXZ = () => { return _returnValueJo8Q6BQ };
		const _startVertexgcJzPFt = {
			"getKey": _getKeyMYudXZ
	}
		const _returnValueLzgWGbe = await dijkstra(_graphqGdC5cT, _startVertexgcJzPFt)
	});

	it('test for dijkstra', async () => {
		const _isDirectedVavcmdn = true;
		const _graphzvv2S3 = new Graph(_isDirectedVavcmdn)
		const _returnValueIeTB5Ew = await _graphzvv2S3.reverse()
		const _returnValuetj5qgzj = await _graphzvv2S3.toString()
		const _returnValueCxNBWzh = await _graphzvv2S3.getAllEdges()
		const _returnValuegG7Qak = "266V4YOeUly8zzhw84ukbLfUF";
		const _getKeyEXs717Z = () => { return _returnValuegG7Qak };
		const _startVertexjFHPNy5 = {
			"getKey": _getKeyEXs717Z
	}
		const _returnValueyM5Kmi2 = await dijkstra(_graphzvv2S3, _startVertexjFHPNy5)
	});

	it('test for dijkstra', async () => {
		const _isDirectedAHeKyjl = true;
		const _graphR89ahtj = new Graph(_isDirectedAHeKyjl)
		const _returnValueldwDTnH = await _graphR89ahtj.reverse()
		const _returnValuegahdyI7 = await _graphR89ahtj.getAdjacencyMatrix()
		const _valueU0CtOFK = 3.466456813588044;
		const _startVertexdNo0mO = new GraphVertex(_valueU0CtOFK)
		const _returnValuec8YT6d = await _startVertexdNo0mO.getKey()
		const _returnValueEFbVLdn = await _startVertexdNo0mO.deleteAllEdges()
		const _returnValuemQNUCx = await dijkstra(_graphR89ahtj, _startVertexdNo0mO)
	});

	it('test for dijkstra', async () => {
		const _isDirectedQiTv8Fh = false;
		const _graphYly9HxJ = new Graph(_isDirectedQiTv8Fh)
		const _returnValueWzH422C = await _graphYly9HxJ.getAllEdges()
		const _arrayValuemJ2VyyR = -0.7875367829570266;
		const _valueiDqt55a = [_arrayValuemJ2VyyR]
		const _startVertexjahUHoL = new GraphVertex(_valueiDqt55a)
		const _returnValueCklgWkF = await _startVertexjahUHoL.getEdges()
		const _arrayValuecBmFKwk = false;
		const _arrayValuehMFS2VK = null;
		const _arrayValueRx7zTEn = null;
		const _arrayValuehjpi7bo = true;
		const _arrayValueb8OP1my = true;
		const _arrayValueONFemA = {
		
	}
		const _arrayValuePxtXIdF = true;
		const _arrayValuele1HTN0 = [_arrayValueb8OP1my, _arrayValueONFemA, _arrayValuePxtXIdF]
		const _arrayValueh2jzeeD = [_arrayValuehjpi7bo, _arrayValuele1HTN0]
		const _edgeGcEMc0 = [_arrayValuecBmFKwk, _arrayValuehMFS2VK, _arrayValueRx7zTEn, _arrayValueh2jzeeD]
		const _returnValueFWb8Bgq = await _startVertexjahUHoL.addEdge(_edgeGcEMc0)
		const _returnValueeF8IL0M = await dijkstra(_graphYly9HxJ, _startVertexjahUHoL)
	});
})