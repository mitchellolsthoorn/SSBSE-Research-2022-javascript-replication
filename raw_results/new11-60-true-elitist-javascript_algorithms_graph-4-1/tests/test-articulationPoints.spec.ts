export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuefaTEDd7 = {
		
	}
		const _getAllVerticeswCuvrsk = () => { return _returnValuefaTEDd7 };
		const _graphikxLL4g = {
			"getAllVertices": _getAllVerticeswCuvrsk
	}
		const _returnValueYJ8yE6v = await articulationPoints(_graphikxLL4g)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedg79oA17 = true;
		const _graphcJTGe7b = new Graph(_isDirectedg79oA17)
		const _arrayValuemXY4dRT = null;
		const _arrayValueOnmLL2y = undefined;
		const _arrayValueNpblBvT = null;
		const _arrayValuea3kcyWO = 1.4836200189091393;
		const _returnValueXdUGBmd = [_arrayValuemXY4dRT, _arrayValueOnmLL2y, _arrayValueNpblBvT, _arrayValuea3kcyWO]
		const _getNeighbors4w6aW0 = () => { return _returnValueXdUGBmd };
		const _vertexrfI3O2p = {
			"getNeighbors": _getNeighbors4w6aW0
	}
		const _returnValuejf4nlOP = await _graphcJTGe7b.getNeighbors(_vertexrfI3O2p)
		const _returnValueU7nYLV4 = null;
		const _getKeypk4r1Oi = () => { return _returnValueU7nYLV4 };
		const _newVertexhDGPPp6 = {
			"getKey": _getKeypk4r1Oi
	}
		const _returnValuenfefLLb = await _graphcJTGe7b.addVertex(_newVertexhDGPPp6)
		const _returnValueBP9TNlC = await articulationPoints(_graphcJTGe7b)
	});
})