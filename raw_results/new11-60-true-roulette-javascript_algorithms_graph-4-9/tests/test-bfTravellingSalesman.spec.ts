export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueSCA9Ku = null;
		const _returnValuer3YlRAT = {
		
	}
		const _arrayValueznhAQ1k = () => { return _returnValuer3YlRAT };
		const _graphd7gnlVR = [_arrayValueSCA9Ku, _arrayValueznhAQ1k]
		const _returnValueo6PRzcy = await bfTravellingSalesman(_graphd7gnlVR)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueiLIRu3o = "YtAGbHp2WAU1OORLrRKxouzBMW98pMZ3DFyVHtG";
		const _getAllVerticestwJdni7 = () => { return _returnValueiLIRu3o };
		const _arrayValuejSejdms = "X8j60x8NIrNsbU8fKo0nEgmzpqeEg4DYpoAcpfE4R4Fkt2Y1kVFvq";
		const _arrayValueTRqmMOQ = {
		
	}
		const _returnValueoMMdA1 = undefined;
		const _arrayValuem1o0qTN = () => { return _returnValueoMMdA1 };
		const _arrayValueI6N9axQ = -4.605673826500696;
		const _returnValuecbN8mJo = [_arrayValuejSejdms, _arrayValueTRqmMOQ, _arrayValuem1o0qTN, _arrayValueI6N9axQ]
		const _getAdjacencyMatrixxpXyd5 = () => { return _returnValuecbN8mJo };
		const _returnValueMo2LFJ5 = false;
		const _getVerticesIndicesFRtj93u = () => { return _returnValueMo2LFJ5 };
		const _graphgUBWdTe = {
			"getAllVertices": _getAllVerticestwJdni7,
		"getAdjacencyMatrix": _getAdjacencyMatrixxpXyd5,
		"getVerticesIndices": _getVerticesIndicesFRtj93u
	}
		const _returnValueeDMdbeF = await bfTravellingSalesman(_graphgUBWdTe)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedNIDszc = true;
		const _graphO8fyn7t = new Graph(_isDirectedNIDszc)
		const _returnValueLm0BMwb = await _graphO8fyn7t.getAllVertices()
		const _arrayValueeGsAYL = "IiptgtAEBR1D9MRq9EdS4o1";
		const _returnValuev3gQ0uJ = undefined;
		const _arrayValuehMMryhP = () => { return _returnValuev3gQ0uJ };
		const _returnValuemQyQBTM = [_arrayValueeGsAYL, _arrayValuehMMryhP]
		const _getKeyWzL9UFG = () => { return _returnValuemQyQBTM };
		const _newVertexpBlIu4d = {
			"getKey": _getKeyWzL9UFG
	}
		const _returnValuePLkWE3t = await _graphO8fyn7t.addVertex(_newVertexpBlIu4d)
		const _returnValuegLW7gyZ = 9.146242263579222;
		const _getKeymRm2msq = () => { return _returnValuegLW7gyZ };
		const _startVertexBmDB8W9 = {
			"getKey": _getKeymRm2msq
	}
		const _endVertexKjcy34w = "1u8dXd1tw";
		const _returnValueyUAZTO6 = await _graphO8fyn7t.findEdge(_startVertexBmDB8W9, _endVertexKjcy34w)
		const _returnValueejewOIU = await bfTravellingSalesman(_graphO8fyn7t)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedcCNlyeN = false;
		const _graphWDQiBL = new Graph(_isDirectedcCNlyeN)
		const _returnValueRQaV4y9 = await _graphWDQiBL.reverse()
		const _valueNFw6qnE = 4.967759570820693;
		const _newVertexLuMw4zC = new GraphVertex(_valueNFw6qnE)
		const _vertexvRnS9bv = false;
		const _returnValueCUqG4vh = await _newVertexLuMw4zC.hasNeighbor(_vertexvRnS9bv)
		const _returnValueuwwUfcu = await _newVertexLuMw4zC.getNeighbors()
		const _vertexpjt6UXh = undefined;
		const _returnValueBNqfwfM = await _newVertexLuMw4zC.hasNeighbor(_vertexpjt6UXh)
		const _returnValuekXGsbyh = await _newVertexLuMw4zC.getNeighbors()
		const _returnValueWJ7Y0kz = await _graphWDQiBL.addVertex(_newVertexLuMw4zC)
		const _returnValuewQXvpEd = await _graphWDQiBL.getAllVertices()
		const _returnValuet3ODCBd = await bfTravellingSalesman(_graphWDQiBL)
	});
})