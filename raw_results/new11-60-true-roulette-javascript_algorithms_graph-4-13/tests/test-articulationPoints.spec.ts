export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValuemxIVwIU = {
		
	}
		const _arrayValuecUWftH4 = undefined;
		const _arrayValuehjdbAm9 = {
		
	}
		const _arrayValueMnXZlhh = [_arrayValuecUWftH4, _arrayValuehjdbAm9]
		const _graphzd2Zd1 = [_arrayValuemxIVwIU, _arrayValueMnXZlhh]
		const _returnValueOMkmexq = await articulationPoints(_graphzd2Zd1)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedwmijc4F = false;
		const _graphXTOKBwS = new Graph(_isDirectedwmijc4F)
		const _arrayValueuJuKzEU = null;
		const _arrayValueT1sWpy = undefined;
		const _arrayValueMwx1u4J = [_arrayValueuJuKzEU, _arrayValueT1sWpy]
		const _arrayValuen1PP66u = [_arrayValueMwx1u4J]
		const _arrayValueBM9WyFv = "39ssDo09LMFu6XDLhkwygpq5absnYJMoM6WxifZ9VCL88l1fGkF5SARoLdC4K9MLsdSwcNijnd5MiMnxvHjyKLlHAEq0wn";
		const _arrayValueBL9uUt = {
		
	}
		const _arrayValuee1FLCtq = null;
		const _returnValueNrt5xh = [_arrayValuen1PP66u, _arrayValueBM9WyFv, _arrayValueBL9uUt, _arrayValuee1FLCtq]
		const _getKeyOb7AKu = () => { return _returnValueNrt5xh };
		const _startVertexzAIBX3N = {
			"getKey": _getKeyOb7AKu
	}
		const _arrayValuee0izIW = 6.099586828954251;
		const _endVertexWoYi11 = [_arrayValuee0izIW]
		const _returnValuelKL15hs = await _graphXTOKBwS.findEdge(_startVertexzAIBX3N, _endVertexWoYi11)
		const _returnValueW04D2SA = await _graphXTOKBwS.getVerticesIndices()
		const _returnValueDor7SIt = -6.889188072548403;
		const _getNeighborsSNnmeYV = () => { return _returnValueDor7SIt };
		const _vertexatJC5Sj = {
			"getNeighbors": _getNeighborsSNnmeYV
	}
		const _returnValuegda0bdr = await _graphXTOKBwS.getNeighbors(_vertexatJC5Sj)
		const _valuejzhqVoZ = {
		
	}
		const _returnValuev9JImZF = -1.8222035363450768;
		const _keyCallbackwZrt4b6 = () => { return _returnValuev9JImZF };
		const _newVertexuPWyUXs = new DisjointSetItem(_valuejzhqVoZ, _keyCallbackwZrt4b6)
		const _returnValueoTIkxrA = await _newVertexuPWyUXs.getKey()
		const _returnValuembpaWit = await _newVertexuPWyUXs.isRoot()
		const _returnValueMp5HIh = await _newVertexuPWyUXs.getChildren()
		const _returnValueUvOJyzS = await _graphXTOKBwS.addVertex(_newVertexuPWyUXs)
		const _returnValueS5kG0Z2 = await articulationPoints(_graphXTOKBwS)
	});
})