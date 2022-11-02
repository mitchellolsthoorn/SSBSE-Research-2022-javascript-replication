export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValuejJrfmi = "MvGl9Od3MsWnibTxHR2NgbdwesD7URL0skAximkA7hlYft5swxR9JpBs3ntuo";
		const _arrayValueGbWwTwb = -1.2494027178109466;
		const _arrayValueb9pJtaf = null;
		const _graphGPOEe3V = [_arrayValuejJrfmi, _arrayValueGbWwTwb, _arrayValueb9pJtaf]
		const _returnValuellbIj8l = await detectUndirectedCycleUsingDisjointSet(_graphGPOEe3V)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectediMAvV9n = true;
		const _graphJaCCJ76 = new Graph(_isDirectediMAvV9n)
		const _returnValueSoCe77e = "ysQReVE3InWSQ1dWAXJTMbX3sTd0pKc6dibPMlHV27e22lyBAtmK8iL1CGr6sYdmau6hYoo18xmyxLj8wMJCDWUCFq1UOqHZ8W8";
		const _arrayValuerdN7PdV = () => { return _returnValueSoCe77e };
		const _returnValuelC2V8MI = false;
		const _arrayValueVyC7iXU = () => { return _returnValuelC2V8MI };
		const _arrayValuel4hzrNj = true;
		const _vertexKeyaSPtReW = [_arrayValuerdN7PdV, _arrayValueVyC7iXU, _arrayValuel4hzrNj]
		const _returnValueoJNowqG = await _graphJaCCJ76.getVertexByKey(_vertexKeyaSPtReW)
		const _vertexKeyOKHkNk = true;
		const _returnValueAteolf7 = await _graphJaCCJ76.getVertexByKey(_vertexKeyOKHkNk)
		const _returnValueO2WxpvR = await _graphJaCCJ76.reverse()
		const _returnValueOIOQrED = await _graphJaCCJ76.getAllEdges()
		const _returnValueg4G1py = await _graphJaCCJ76.getVerticesIndices()
		const _returnValueKW8ErxD = await detectUndirectedCycleUsingDisjointSet(_graphJaCCJ76)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuekrP8lI3 = []
		const _getAllVerticesx0GD87q = () => { return _returnValuekrP8lI3 };
		const _arrayValueEyVpIc0 = -9.315793135898701;
		const _returnValuesXuB89K = [_arrayValueEyVpIc0]
		const _getAllEdgestm0Ouep = () => { return _returnValuesXuB89K };
		const _graphmO7gwin = {
			"getAllVertices": _getAllVerticesx0GD87q,
		"getAllEdges": _getAllEdgestm0Ouep
	}
		const _returnValuewV7UJxV = await detectUndirectedCycleUsingDisjointSet(_graphmO7gwin)
	});
})