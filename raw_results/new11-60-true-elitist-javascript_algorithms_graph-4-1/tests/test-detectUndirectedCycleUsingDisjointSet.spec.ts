export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValuefJqcA6p = undefined;
		const _arrayValueNVM0oqU = -8.02953863756708;
		const _arrayValueonoe4i4 = [_arrayValuefJqcA6p, _arrayValueNVM0oqU]
		const _arrayValueE9KKJZG = [_arrayValueonoe4i4]
		const _arrayValuesVbggY = undefined;
		const _returnValueK8bYIFt = [_arrayValueE9KKJZG, _arrayValuesVbggY]
		const _getAllVerticesvWmaIAX = () => { return _returnValueK8bYIFt };
		const _returnValuehxRVtpC = "9xuklMYx6MWD7jdc7SBvrppTYbJQ3ohLyd1RLFe775FNnReKdNJle3";
		const _getAllEdgesTj1IVCQ = () => { return _returnValuehxRVtpC };
		const _graphn9mf2sz = {
			"getAllVertices": _getAllVerticesvWmaIAX,
		"getAllEdges": _getAllEdgesTj1IVCQ
	}
		const _returnValuecPDU4hC = await detectUndirectedCycleUsingDisjointSet(_graphn9mf2sz)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedWD8heBl = false;
		const _graphoxkR6m9 = new Graph(_isDirectedWD8heBl)
		const _returnValuem9Fdc0o = await _graphoxkR6m9.getAdjacencyMatrix()
		const _returnValueDFPM1r = await _graphoxkR6m9.getAllVertices()
		const _returnValuenVO4v8r = await detectUndirectedCycleUsingDisjointSet(_graphoxkR6m9)
	});
})