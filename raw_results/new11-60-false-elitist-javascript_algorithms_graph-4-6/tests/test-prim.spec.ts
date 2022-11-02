export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedz8DnI8U = undefined;
		const _returnValueLjQ9G12 = null;
		const _getAllVerticespq8BEA = () => { return _returnValueLjQ9G12 };
		const _graphXSjbLVE = {
			"isDirected": _isDirectedz8DnI8U,
		"getAllVertices": _getAllVerticespq8BEA
	}
		const _returnValuewPxfB0D = await prim(_graphXSjbLVE)
	});

	it('test for prim', async () => {
		const _isDirectedD8xnGYk = true;
		const _returnValueOhvPxk2 = null;
		const _getAllVerticesaZAtweQ = () => { return _returnValueOhvPxk2 };
		const _graphe9jnNYO = {
			"isDirected": _isDirectedD8xnGYk,
		"getAllVertices": _getAllVerticesaZAtweQ
	}
		const _returnValueB1QhPPb = await prim(_graphe9jnNYO)
	});
})