export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValueXOhRaD5 = 8.377185076159623;
		const _graphYSjHyk2 = [_arrayValueXOhRaD5]
		const _returnValuehWfNB1u = await articulationPoints(_graphYSjHyk2)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedIRHzXS2 = true;
		const _graphAvB53q4 = new Graph(_isDirectedIRHzXS2)
		const _returnValuePzp0tg = await _graphAvB53q4.getAdjacencyMatrix()
		const _returnValueJSCBS1K = true;
		const _valuejbBdlIB = () => { return _returnValueJSCBS1K };
		const _newVertexpzjBzOK = new GraphVertex(_valuejbBdlIB)
		const _returnValueUtfzUGs = "PZGPmTmsOVuiiCkQrGjlsTsPHaf99AA1udP8SibQ";
		const _callbackXoHWlnG = () => { return _returnValueUtfzUGs };
		const _returnValuepuaiKI1 = await _newVertexpzjBzOK.toString(_callbackXoHWlnG)
		const _returnValuePdK7zoc = await _newVertexpzjBzOK.getDegree()
		const _vertexWMkePde = -6.606623958853688;
		const _returnValueoeykGog = await _newVertexpzjBzOK.findEdge(_vertexWMkePde)
		const _returnValueq8xAUFk = await _newVertexpzjBzOK.getKey()
		const _returnValuedFk4QiF = await _graphAvB53q4.addVertex(_newVertexpzjBzOK)
		const _returnValuekx5DmjH = await _graphAvB53q4.getVerticesIndices()
		const _returnValuepiiVHFy = await articulationPoints(_graphAvB53q4)
	});
})