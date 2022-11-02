export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueoWIGrPY = 8.32122995785734;
		const _graphC959v8 = () => { return _returnValueoWIGrPY };
		const _returnValuel6nkXiF = await detectUndirectedCycleUsingDisjointSet(_graphC959v8)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedrxNNf0x = false;
		const _graphgihCMPt = new Graph(_isDirectedrxNNf0x)
		const _returnValuegbjhd4 = await _graphgihCMPt.getAllVertices()
		const _returnValueR1yXsId = await detectUndirectedCycleUsingDisjointSet(_graphgihCMPt)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueedtf0Gc = []
		const _getAllVerticestAo6HRc = () => { return _returnValueedtf0Gc };
		const _arrayValueR1emwYN = false;
		const _returnValueW87Xr1z = [_arrayValueR1emwYN]
		const _getAllEdgesKQHm0X1 = () => { return _returnValueW87Xr1z };
		const _graphrOZnRu = {
			"getAllVertices": _getAllVerticestAo6HRc,
		"getAllEdges": _getAllEdgesKQHm0X1
	}
		const _returnValueqWB2piQ = await detectUndirectedCycleUsingDisjointSet(_graphrOZnRu)
	});
})