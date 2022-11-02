export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _isDirectedpTpFotM = "m1AejPmvuUhvolcIxx6CxdZaXRfGup9HvEr3oGbTAMYUg5BSx5rPmaVuR2mbynRq5jNSXben7z2c34bPBOh4Td4WaV";
		const _graphBWWE5Fl = new Graph(_isDirectedpTpFotM)
		const _returnValueiYwFxEo = await _graphBWWE5Fl.getAdjacencyMatrix()
		const _vertexKeyGcLFe7Z = undefined;
		const _returnValueY2aJIm = await _graphBWWE5Fl.getVertexByKey(_vertexKeyGcLFe7Z)
		const _returnValueE716ux = await _graphBWWE5Fl.getVerticesIndices()
		const _returnValueveD9V9c = "Ue3R11xJw";
		const _getNeighborsYhiENw7 = () => { return _returnValueveD9V9c };
		const _vertexoR39eFc = {
			"getNeighbors": _getNeighborsYhiENw7
	}
		const _returnValuePKvS2dS = await _graphBWWE5Fl.getNeighbors(_vertexoR39eFc)
		const _returnValueJbuIzSR = await detectUndirectedCycle(_graphBWWE5Fl)
	});
})