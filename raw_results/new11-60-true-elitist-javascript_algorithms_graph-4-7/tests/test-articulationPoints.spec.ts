export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueSctFef8 = "bOay7gQg6WxawMqC1JQOo2l12WtwFnJfa";
		const _getAllVerticesJKdzUqI = () => { return _returnValueSctFef8 };
		const _graphNgfbgnt = {
			"getAllVertices": _getAllVerticesJKdzUqI
	}
		const _returnValueZRgeGBM = await articulationPoints(_graphNgfbgnt)
	});

	it('test for articulationPoints', async () => {
		const _isDirecteddkPScSC = false;
		const _graphJapmGl6 = new Graph(_isDirecteddkPScSC)
		const _returnValue0RQSJk = "92SXPLLjocNnHgL2c1tH1tuJTfYcq8";
		const _getKeyELjJtGc = () => { return _returnValue0RQSJk };
		const _newVertexi3mG8Mw = {
			"getKey": _getKeyELjJtGc
	}
		const _returnValuem4cscA4 = await _graphJapmGl6.addVertex(_newVertexi3mG8Mw)
		const _returnValue1DYhwN = await articulationPoints(_graphJapmGl6)
	});
})