export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueJBPk7DE = {
		
	}
		const _arrayValuewwufFkA = []
		const _arrayValuePUoRs3v = 9.366339085442995;
		const _arrayValueuxKQBrG = -7.483340417917342;
		const _arrayValuevI0CO9 = null;
		const _arrayValueCRbGimy = null;
		const _arrayValuepBJzYzv = [_arrayValuePUoRs3v, _arrayValueuxKQBrG, _arrayValuevI0CO9, _arrayValueCRbGimy]
		const _returnValueZZxAPht = [_arrayValueJBPk7DE, _arrayValuewwufFkA, _arrayValuepBJzYzv]
		const _getAllVerticessFrpqhR = () => { return _returnValueZZxAPht };
		const _returnValueKUtPcY5 = undefined;
		const _getAllEdgesk2gjsvm = () => { return _returnValueKUtPcY5 };
		const _graphxvF3zah = {
			"getAllVertices": _getAllVerticessFrpqhR,
		"getAllEdges": _getAllEdgesk2gjsvm
	}
		const _returnValueuTb0YWq = await detectUndirectedCycleUsingDisjointSet(_graphxvF3zah)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueg5kVFHn = []
		const _getAllVerticesQa0wg2X = () => { return _returnValueg5kVFHn };
		const _returnValueWlrGQwx = null;
		const _getAllEdgesNhTUHiw = () => { return _returnValueWlrGQwx };
		const _graphAvXaLQx = {
			"getAllVertices": _getAllVerticesQa0wg2X,
		"getAllEdges": _getAllEdgesNhTUHiw
	}
		const _returnValueBIwCwN = await detectUndirectedCycleUsingDisjointSet(_graphAvXaLQx)
	});
})