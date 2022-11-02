export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphGFawZI = "ISEiJHg7FRdxMNybU1ORGSdJvVdj7TXote5zwOrqQQmFIwB";
		const _returnValueVbqGCpt = await prim(_graphGFawZI)
	});

	it('test for prim', async () => {
		const _isDirectedvHESlD9 = true;
		const _returnValuelIHkelI = null;
		const _getAllVertices00eM5t = () => { return _returnValuelIHkelI };
		const _graphTxULlma = {
			"isDirected": _isDirectedvHESlD9,
		"getAllVertices": _getAllVertices00eM5t
	}
		const _returnValueobAROHQ = await prim(_graphTxULlma)
	});

	it('test for prim', async () => {
		const _isDirectedt2eFkfo = false;
		const _graphrIJEbbH = new Graph(_isDirectedt2eFkfo)
		const _returnValueirZsutz = await _graphrIJEbbH.reverse()
		const _vertexKeynWQsUzR = null;
		const _returnValuemuUCrwZ = await _graphrIJEbbH.getVertexByKey(_vertexKeynWQsUzR)
		const _returnValuePbZnlx = await _graphrIJEbbH.reverse()
		const _returnValuej9Vplc2 = false;
		const _getKeyzm0kUiB = () => { return _returnValuej9Vplc2 };
		const _newVertexP3mT0mP = {
			"getKey": _getKeyzm0kUiB
	}
		const _returnValueNrJ5rNg = await _graphrIJEbbH.addVertex(_newVertexP3mT0mP)
		const _returnValueQKYt5Gx = await _graphrIJEbbH.getVerticesIndices()
		const _returnValuerbDg6G = await prim(_graphrIJEbbH)
	});
})