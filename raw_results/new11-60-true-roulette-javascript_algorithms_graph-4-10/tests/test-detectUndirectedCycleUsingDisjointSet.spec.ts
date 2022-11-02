export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValue4fDpMl = undefined;
		const _getAllVerticesBI3KKX6 = () => { return _returnValue4fDpMl };
		const _returnValueIwDnynF = {
		
	}
		const _returnValuePwjUf1j = () => { return _returnValueIwDnynF };
		const _getAllEdgesORqtOQ = () => { return _returnValuePwjUf1j };
		const _graphEq74acv = {
			"getAllVertices": _getAllVerticesBI3KKX6,
		"getAllEdges": _getAllEdgesORqtOQ
	}
		const _returnValueJllDrWe = await detectUndirectedCycleUsingDisjointSet(_graphEq74acv)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedvY9NLi6 = true;
		const _graphQyhbhuk = new Graph(_isDirectedvY9NLi6)
		const _returnValuePwWtSSb = await _graphQyhbhuk.getAdjacencyMatrix()
		const _returnValueNRO9AA = await _graphQyhbhuk.getAllVertices()
		const _returnValueT2OCPD5 = await detectUndirectedCycleUsingDisjointSet(_graphQyhbhuk)
	});
})