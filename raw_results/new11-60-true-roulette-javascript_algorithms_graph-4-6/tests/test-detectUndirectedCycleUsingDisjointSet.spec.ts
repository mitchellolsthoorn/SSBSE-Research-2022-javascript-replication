export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueblxKeYe = "6EL5PWfrnsiOtJuAY2HG8DzxvnxlO7APbfTdfrGRq4rk8zINEOmjWJdDSMvxGNNxbq0kqHfyA74upJ9r2kofgnBY1LAPdLgu";
		const _returnValuePZ9c26 = [_arrayValueblxKeYe]
		const _graphhjAhRXi = () => { return _returnValuePZ9c26 };
		const _returnValueSUdtEuK = await detectUndirectedCycleUsingDisjointSet(_graphhjAhRXi)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedF9XIRz4 = undefined;
		const _graphfQJDzgY = new Graph(_isDirectedF9XIRz4)
		const _returnValuenTdj9d = await _graphfQJDzgY.getAdjacencyMatrix()
		const _returnValueT8Phzr5 = await _graphfQJDzgY.getAllVertices()
		const _returnValuemQDy3q5 = await _graphfQJDzgY.getVerticesIndices()
		const _returnValueBVSqkvW = await _graphfQJDzgY.toString()
		const _returnValuekAdya4j = await detectUndirectedCycleUsingDisjointSet(_graphfQJDzgY)
	});
})