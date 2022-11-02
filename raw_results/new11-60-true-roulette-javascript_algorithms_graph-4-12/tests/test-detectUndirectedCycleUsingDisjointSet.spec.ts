export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueZHyti12 = undefined;
		const _graphRi2Dh6 = [_arrayValueZHyti12]
		const _returnValueRI9rc2l = await detectUndirectedCycleUsingDisjointSet(_graphRi2Dh6)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedzqHiaGj = false;
		const _graphfQSf4yl = new Graph(_isDirectedzqHiaGj)
		const _returnValueBDuyRfD = await _graphfQSf4yl.getAllEdges()
		const _returnValueHEJ9cHG = await detectUndirectedCycleUsingDisjointSet(_graphfQSf4yl)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuekEykbE8 = []
		const _getAllVerticesj1lBr8h = () => { return _returnValuekEykbE8 };
		const _arrayValueWeGuacw = null;
		const _arrayValueHBWauCc = null;
		const _arrayValueFuZKU3 = []
		const _returnValuesaEG5YE = [_arrayValueWeGuacw, _arrayValueHBWauCc, _arrayValueFuZKU3]
		const _getAllEdgesp9pQyOI = () => { return _returnValuesaEG5YE };
		const _graphnut2KIz = {
			"getAllVertices": _getAllVerticesj1lBr8h,
		"getAllEdges": _getAllEdgesp9pQyOI
	}
		const _returnValueUfq3UEZ = await detectUndirectedCycleUsingDisjointSet(_graphnut2KIz)
	});
})