export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueBtfo7E1 = "KBG2sP9SLsQwABMwayvTuQn3h2TPjZnAUnbgKbATGiYnBLJG9sdQatHdUvWMQ5ZF74KxN2DPsupd3kJ9HhjQ5y4w";
		const _reverses6aO7U6 = () => { return _returnValueBtfo7E1 };
		const _graphghlhHIC = {
			"reverse": _reverses6aO7U6
	}
		const _returnValueBzifXP = await stronglyConnectedComponents(_graphghlhHIC)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedvYpdpQ6 = false;
		const _graphu3PdCXW = new Graph(_isDirectedvYpdpQ6)
		const _returnValueJOfzaZl = await _graphu3PdCXW.toString()
		const _returnValueSWjoe1G = await _graphu3PdCXW.reverse()
		const _returnValueK0DDaGW = await _graphu3PdCXW.toString()
		const _returnValuePVsC45H = await _graphu3PdCXW.reverse()
		const _returnValueahYBVdF = await stronglyConnectedComponents(_graphu3PdCXW)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedSoyr9qC = false;
		const _graphvEK7uwz = new Graph(_isDirectedSoyr9qC)
		const _returnValueyGAy1ga = await _graphvEK7uwz.getAdjacencyMatrix()
		const _valuevnsLwaw = -5.295286273436232;
		const _newVertexFO1FDxD = new GraphVertex(_valuevnsLwaw)
		const _returnValueSF9BevP = true;
		const _callbacku62irqu = () => { return _returnValueSF9BevP };
		const _returnValueJf1R0uE = await _newVertexFO1FDxD.toString(_callbacku62irqu)
		const _arrayValueqCwD3QQ = false;
		const _vertexb3UomHN = [_arrayValueqCwD3QQ]
		const _returnValueiEUrizL = await _newVertexFO1FDxD.hasNeighbor(_vertexb3UomHN)
		const _returnValueM2zp0x = await _graphvEK7uwz.addVertex(_newVertexFO1FDxD)
		const _returnValueuSMOYl1 = await _graphvEK7uwz.getAllVertices()
		const _returnValuegSCC1a = await _graphvEK7uwz.getVerticesIndices()
		const _returnValueEubCfHt = await stronglyConnectedComponents(_graphvEK7uwz)
	});
})