export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuemtDol2Y = true;
		const _getAllVerticesRnqsMeh = () => { return _returnValuemtDol2Y };
		const _arrayValueYKSR4ir = 1.9914651292089829;
		const _returnValuexl1uIqx = [_arrayValueYKSR4ir]
		const _getAllEdgesQNqBOY2 = () => { return _returnValuexl1uIqx };
		const _graphoS6TYmW = {
			"getAllVertices": _getAllVerticesRnqsMeh,
		"getAllEdges": _getAllEdgesQNqBOY2
	}
		const _returnValueV3djGkL = await detectUndirectedCycleUsingDisjointSet(_graphoS6TYmW)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueKvdVy1a = []
		const _getAllVerticesThnwght = () => { return _returnValueKvdVy1a };
		const _returnValuexl25jt9 = false;
		const _getAllEdgesaNvwx5U = () => { return _returnValuexl25jt9 };
		const _graphM3Qjgex = {
			"getAllVertices": _getAllVerticesThnwght,
		"getAllEdges": _getAllEdgesaNvwx5U
	}
		const _returnValueuXlOxiD = await detectUndirectedCycleUsingDisjointSet(_graphM3Qjgex)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueinNGGb8 = []
		const _getAllVerticesNiIauvU = () => { return _returnValueinNGGb8 };
		const _arrayValueLquMlst = undefined;
		const _arrayValuedlrgwHp = false;
		const _arrayValueYOHWbI7 = "hNvn8lIsUi8R3xcYegdc5OqCpvD2";
		const _arrayValuekG91fpZ = undefined;
		const _returnValuenUHt2CP = [_arrayValueLquMlst, _arrayValuedlrgwHp, _arrayValueYOHWbI7, _arrayValuekG91fpZ]
		const _getAllEdgesKJ26CLI = () => { return _returnValuenUHt2CP };
		const _graphGr7sdUv = {
			"getAllVertices": _getAllVerticesNiIauvU,
		"getAllEdges": _getAllEdgesKJ26CLI
	}
		const _returnValuexTHNBli = await detectUndirectedCycleUsingDisjointSet(_graphGr7sdUv)
	});
})