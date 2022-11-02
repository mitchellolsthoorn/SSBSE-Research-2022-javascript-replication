export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedxWpxaED = {
		
	}
		const _returnValueHv3DXn5 = true;
		const _getAllVerticesLJ97DaL = () => { return _returnValueHv3DXn5 };
		const _graphO79Fn47 = {
			"isDirected": _isDirectedxWpxaED,
		"getAllVertices": _getAllVerticesLJ97DaL
	}
		const _returnValueQJf4LNO = await prim(_graphO79Fn47)
	});

	it('test for prim', async () => {
		const _isDirectedAPJdnJ9 = false;
		const _graphX9waHLR = new Graph(_isDirectedAPJdnJ9)
		const _returnValuesA6wA7 = await _graphX9waHLR.getAllEdges()
		const _arrayValueLLDLMix = null;
		const _returnValuetaxJjX4 = undefined;
		const _arrayValuejGpzDq = () => { return _returnValuetaxJjX4 };
		const _arrayValueENAcooW = "Ow58NsnEcvb6zJ4hx3e86Asvn7ozPbnLXqIR9zjd3AxM2U8t25qxm6x6P3Be4qgPi2WA7RtpLGDMfb5ar9qYgcrgsc1dW";
		const _arrayValueJRfblmU = false;
		const _arrayValuekJyYFP2 = {
		
	}
		const _arrayValuefoRhQkE = 8.52073065443983;
		const _arrayValueaEvr7gH = [_arrayValueJRfblmU, _arrayValuekJyYFP2, _arrayValuefoRhQkE]
		const _arrayValueeDzIVe = [_arrayValueENAcooW, _arrayValueaEvr7gH]
		const _valuemLxoNI2 = [_arrayValueLLDLMix, _arrayValuejGpzDq, _arrayValueeDzIVe]
		const _returnValueeZwtNz = "7HwDkIS75Fb7qKphKkisMhbe";
		const _keyCallbackLo0Q0dX = () => { return _returnValueeZwtNz };
		const _newVertex52mxj2 = new DisjointSetItem(_valuemLxoNI2, _keyCallbackLo0Q0dX)
		const _returnValueljqG4km = await _newVertex52mxj2.getChildren()
		const _returnValueyPo8Lbt = await _graphX9waHLR.addVertex(_newVertex52mxj2)
		const _returnValueVCKXufl = undefined;
		const _getKeyo3QeKU6 = () => { return _returnValueVCKXufl };
		const _startVertexFBEPuDh = {
			"getKey": _getKeyo3QeKU6
	}
		const _endVertexOjdMwPN = undefined;
		const _returnValueOoylAuV = await _graphX9waHLR.findEdge(_startVertexFBEPuDh, _endVertexOjdMwPN)
		const _returnValueBxGya0x = await prim(_graphX9waHLR)
	});

	it('test for prim', async () => {
		const _isDirectedyqbIHt4 = false;
		const _graphA8v5WHs = new Graph(_isDirectedyqbIHt4)
		const _returnValueBdggBqr = await _graphA8v5WHs.getVerticesIndices()
		const _returnValuelHlmFQt = null;
		const _valuesv4NusV = () => { return _returnValuelHlmFQt };
		const _newVertexYMcCd0 = new GraphVertex(_valuesv4NusV)
		const _edge0p1LR1 = null;
		const _returnValueZYvUMvd = await _newVertexYMcCd0.deleteEdge(_edge0p1LR1)
		const _returnValueiXjOUGH = await _newVertexYMcCd0.deleteAllEdges()
		const _vertext0yL6zc = 6.591130997517272;
		const _returnValues2rpsNH = await _newVertexYMcCd0.hasNeighbor(_vertext0yL6zc)
		const _requiredEdgeddUNTO = 3.4845769550924377;
		const _returnValueZjid1Jx = await _newVertexYMcCd0.hasEdge(_requiredEdgeddUNTO)
		const _returnValueG3Z1Gp0 = await _graphA8v5WHs.addVertex(_newVertexYMcCd0)
		const _returnValuebKkGdB = await prim(_graphA8v5WHs)
	});
})