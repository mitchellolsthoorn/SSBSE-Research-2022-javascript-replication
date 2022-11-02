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
		const _getAllVerticesbgRjnyE = "od74m1oOnw3rz";
		const _returnValueuBbBK47 = []
		const _findEdgejfgG7py = () => { return _returnValueuBbBK47 };
		const _graphJuIvzgo = {
			"getAllVertices": _getAllVerticesbgRjnyE,
		"findEdge": _findEdgejfgG7py
	}
		const _returnValueFQrZIDD = true;
		const _getKeyJqeEXu = () => { return _returnValueFQrZIDD };
		const _startVertext0s9h4 = {
			"getKey": _getKeyJqeEXu
	}
		const _returnValuegMFqKzW = await dijkstra(_graphJuIvzgo, _startVertext0s9h4)
	});

	it('test for dijkstra', async () => {
		const _isDirectedx8R7LmR = false;
		const _graphYSOgKDK = new Graph(_isDirectedx8R7LmR)
		const _returnValueHJT88U = await _graphYSOgKDK.getAdjacencyMatrix()
		const _returnValueIKGi7h2 = null;
		const _getKeyADFXyYw = () => { return _returnValueIKGi7h2 };
		const _startVertexjGxeNBK = {
			"getKey": _getKeyADFXyYw
	}
		const _returnValueOTD6bia = await dijkstra(_graphYSOgKDK, _startVertexjGxeNBK)
	});

	it('test for dijkstra', async () => {
		const _isDirectedlThtas8 = false;
		const _graphujvdk6i = new Graph(_isDirectedlThtas8)
		const _returnValueezxb16 = await _graphujvdk6i.getAdjacencyMatrix()
		const _valueCM1cqqA = false;
		const _startVertexo2K1O0F = new GraphVertex(_valueCM1cqqA)
		const _vertexNQjGa8x = true;
		const _returnValueFTTufYq = await _startVertexo2K1O0F.hasNeighbor(_vertexNQjGa8x)
		const _returnValueWtAnq89 = await _startVertexo2K1O0F.getDegree()
		const _returnValueLVcLbCE = await _startVertexo2K1O0F.getKey()
		const _returnValuesnezHQ = await dijkstra(_graphujvdk6i, _startVertexo2K1O0F)
	});

	it('test for dijkstra', async () => {
		const _isDirectedtwa5IzO = false;
		const _graphIvKRtEY = new Graph(_isDirectedtwa5IzO)
		const _returnValueysmpILu = await _graphIvKRtEY.reverse()
		const _returnValueSrnFVeK = await _graphIvKRtEY.getWeight()
		const _returnValuecKuEjTE = await _graphIvKRtEY.getVerticesIndices()
		const _valuekKdHlAa = null;
		const _startVertex50nMUS = new GraphVertex(_valuekKdHlAa)
		const _returnValueTd8sGBG = await _startVertex50nMUS.getDegree()
		const _arrayValueJ8Scsn0 = -8.519033755191447;
		const _arrayValueQ2X0ZWq = -9.534171588601225;
		const _arrayValue70cjOR = [_arrayValueJ8Scsn0, _arrayValueQ2X0ZWq]
		const _edgeGYmjQG6 = [_arrayValue70cjOR]
		const _returnValueTdrrrI = await _startVertex50nMUS.deleteEdge(_edgeGYmjQG6)
		const _arrayValueSraTalc = {
		
	}
		const _arrayValueMG8pZy = {
		
	}
		const _arrayValuejIDpA1 = "EoBsnJDteReet74VcjtPOnvicCRecZgPfMhhwMwQwIHvtq5Jt7McH";
		const _arrayValueVNWGhTr = null;
		const _arrayValuekIVVDwy = "y4Nn5wqt9gCZIIcgo2kzIt";
		const _arrayValueddFA89c = [_arrayValuejIDpA1, _arrayValueVNWGhTr, _arrayValuekIVVDwy]
		const _returnValuexzmLy0N = 0.9152406911382869;
		const _arrayValuebh08e0g = () => { return _returnValuexzmLy0N };
		const _edgeMdTHwd = [_arrayValueSraTalc, _arrayValueMG8pZy, _arrayValueddFA89c, _arrayValuebh08e0g]
		const _returnValueDwICEm = await _startVertex50nMUS.addEdge(_edgeMdTHwd)
		const _requiredEdgeHCc4XIE = null;
		const _returnValueo8RCfVT = await _startVertex50nMUS.hasEdge(_requiredEdgeHCc4XIE)
		const _vertex9hZNY9 = undefined;
		const _returnValuep5OTMtv = await _startVertex50nMUS.findEdge(_vertex9hZNY9)
		const _returnValueXeC5N36 = await dijkstra(_graphIvKRtEY, _startVertex50nMUS)
	});
})