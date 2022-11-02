export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueX6kWsXF = {
		
	}
		const _graphCXozgf9 = () => { return _returnValueX6kWsXF };
		const _returnValuec2zcEB = await prim(_graphCXozgf9)
	});

	it('test for prim', async () => {
		const _isDirectedofeBWXk = "CgsoE3YSapOEOitHP2ArTweLEhMjJIaW1ulcBh9wsIcKGwDucWHCjnBNlGVJIL739tfgdl9W5NOFTOqtcwvywJ";
		const _returnValueVBASZ72 = false;
		const _getAllVerticeskCw54Pu = () => { return _returnValueVBASZ72 };
		const _graphrgfUGib = {
			"isDirected": _isDirectedofeBWXk,
		"getAllVertices": _getAllVerticeskCw54Pu
	}
		const _returnValuetVrFRGo = await prim(_graphrgfUGib)
	});

	it('test for prim', async () => {
		const _isDirectedGOxFnfv = false;
		const _graphFvgTKW4 = new Graph(_isDirectedGOxFnfv)
		const _returnValueJnUFryB = await _graphFvgTKW4.getAdjacencyMatrix()
		const _returnValueUeO4RtV = undefined;
		const _getKeyohtbH4p = () => { return _returnValueUeO4RtV };
		const _newVertexASPUsFn = {
			"getKey": _getKeyohtbH4p
	}
		const _returnValuetJEprU5 = await _graphFvgTKW4.addVertex(_newVertexASPUsFn)
		const _returnValueUhxgDW4 = await _graphFvgTKW4.getWeight()
		const _returnValuernZSva2 = await _graphFvgTKW4.getAllVertices()
		const _returnValuesghhZ0j = await prim(_graphFvgTKW4)
	});
})