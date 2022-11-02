export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuen9EORS = "VqVWxhV1cDjNQ7Ji2qxHfK6BiWBW";
		const _getAllVerticese9G7tWp = () => { return _returnValuen9EORS };
		const _getAllEdgesfHBbOHJ = 2.7162962740836747;
		const _graphBaeXLP9 = {
			"getAllVertices": _getAllVerticese9G7tWp,
		"getAllEdges": _getAllEdgesfHBbOHJ
	}
		const _returnValuetPiPCFN = await detectUndirectedCycleUsingDisjointSet(_graphBaeXLP9)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueIjQscdq = []
		const _getAllVerticesI4sevO2 = () => { return _returnValueIjQscdq };
		const _returnValueP9EeuWZ = false;
		const _getAllEdgesou2KJgl = () => { return _returnValueP9EeuWZ };
		const _graphrgtvbKO = {
			"getAllVertices": _getAllVerticesI4sevO2,
		"getAllEdges": _getAllEdgesou2KJgl
	}
		const _returnValuenOHUTia = await detectUndirectedCycleUsingDisjointSet(_graphrgtvbKO)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueeneZjvb = []
		const _getAllVerticesChRt9dY = () => { return _returnValueeneZjvb };
		const _arrayValueuL8Oytp = 0.06638728492433899;
		const _arrayValueLyrUBBV = false;
		const _arrayValueG2e38Zh = -1.5917771345445413;
		const _arrayValueHV3OeR1 = [_arrayValueLyrUBBV, _arrayValueG2e38Zh]
		const _returnValueqLebuvE = [_arrayValueuL8Oytp, _arrayValueHV3OeR1]
		const _getAllEdgesgn0L8Jz = () => { return _returnValueqLebuvE };
		const _graphGUh9tRE = {
			"getAllVertices": _getAllVerticesChRt9dY,
		"getAllEdges": _getAllEdgesgn0L8Jz
	}
		const _returnValueqOCbXY = await detectUndirectedCycleUsingDisjointSet(_graphGUh9tRE)
	});
})