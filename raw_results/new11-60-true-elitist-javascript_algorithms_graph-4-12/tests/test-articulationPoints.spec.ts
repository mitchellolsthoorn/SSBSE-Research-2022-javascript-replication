export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueqBdZXWy = null;
		const _getAllVerticesTwo7BLE = () => { return _returnValueqBdZXWy };
		const _graphoGsMq0n = {
			"getAllVertices": _getAllVerticesTwo7BLE
	}
		const _returnValuebMa3XW = await articulationPoints(_graphoGsMq0n)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedV8C1p3Z = true;
		const _graphRvAHIC = new Graph(_isDirectedV8C1p3Z)
		const _returnValuef18ZBZd = await _graphRvAHIC.getVerticesIndices()
		const _returnValueZDfJVrw = await _graphRvAHIC.getWeight()
		const _returnValuevFbnOjr = 5.893892868727836;
		const _getKeyfVSxKwV = () => { return _returnValuevFbnOjr };
		const _newVertex3U7uHj = {
			"getKey": _getKeyfVSxKwV
	}
		const _returnValuemHgPfm = await _graphRvAHIC.addVertex(_newVertex3U7uHj)
		const _returnValues3L0aI4 = await articulationPoints(_graphRvAHIC)
	});
})