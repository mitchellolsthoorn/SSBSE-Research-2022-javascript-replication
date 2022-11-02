export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _graph6h02tj = "ygLMllTstBAhCP5VN";
		const _returnValuekFEg8Y1 = await articulationPoints(_graph6h02tj)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedKHxvT7X = true;
		const _graphUOcFbSr = new Graph(_isDirectedKHxvT7X)
		const _returnValueI6ujeF = undefined;
		const _getKeyYYXZFv2 = () => { return _returnValueI6ujeF };
		const _newVertexXyBIBFq = {
			"getKey": _getKeyYYXZFv2
	}
		const _returnValueErqSuRz = await _graphUOcFbSr.addVertex(_newVertexXyBIBFq)
		const _returnValuei2s8R5I = await _graphUOcFbSr.toString()
		const _returnValue5H9YhG = await articulationPoints(_graphUOcFbSr)
	});
})