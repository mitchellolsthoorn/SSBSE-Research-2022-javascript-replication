export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueXQrgDEE = null;
		const _getAllVerticesBDEciPv = () => { return _returnValueXQrgDEE };
		const _returnValueK5oM4Lu = false;
		const _getAllEdgestqCSKwE = () => { return _returnValueK5oM4Lu };
		const _graphQP9Uzio = {
			"getAllVertices": _getAllVerticesBDEciPv,
		"getAllEdges": _getAllEdgestqCSKwE
	}
		const _returnValueVArIw22 = await detectUndirectedCycleUsingDisjointSet(_graphQP9Uzio)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedj0wBRAS = true;
		const _graphZeKipFF = new Graph(_isDirectedj0wBRAS)
		const _returnValueyufOgq0 = await _graphZeKipFF.getWeight()
		const _returnValueraVdeVp = await _graphZeKipFF.toString()
		const _vertexKeyEPbtHYm = "9AkMnBhvyghUrTjumLRv4nA5uhTlbX0OgsrKl34VvdiGclqIXkYJu";
		const _returnValueFPbL3iF = await _graphZeKipFF.getVertexByKey(_vertexKeyEPbtHYm)
		const _returnValuefmH42RO = await _graphZeKipFF.getAdjacencyMatrix()
		const _returnValuefzq2E4 = null;
		const _arrayValuelfH1vWT = () => { return _returnValuefzq2E4 };
		const _arrayValuemJUkppj = true;
		const _vertexKeyIosWGRE = [_arrayValuelfH1vWT, _arrayValuemJUkppj]
		const _returnValuehGjU3QQ = await _graphZeKipFF.getVertexByKey(_vertexKeyIosWGRE)
		const _returnValueb2xKIrK = await detectUndirectedCycleUsingDisjointSet(_graphZeKipFF)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueg3SeoLB = []
		const _getAllVerticesiauipKK = () => { return _returnValueg3SeoLB };
		const _arrayValueBdxCSbW = true;
		const _arrayValueRkXKqI = -2.067755600679919;
		const _arrayValueGQELVF = undefined;
		const _arrayValueglTrF1V = null;
		const _arrayValueZBlDU80 = [_arrayValueRkXKqI, _arrayValueGQELVF, _arrayValueglTrF1V]
		const _arrayValuet2HPiQ = undefined;
		const _arrayValueHDteutk = [_arrayValueBdxCSbW, _arrayValueZBlDU80, _arrayValuet2HPiQ]
		const _arrayValueeLUIZO = undefined;
		const _returnValuem79odxZ = [_arrayValueHDteutk, _arrayValueeLUIZO]
		const _getAllEdgesYjrhZQZ = () => { return _returnValuem79odxZ };
		const _graphyvZWLpe = {
			"getAllVertices": _getAllVerticesiauipKK,
		"getAllEdges": _getAllEdgesYjrhZQZ
	}
		const _returnValueJcErIXX = await detectUndirectedCycleUsingDisjointSet(_graphyvZWLpe)
	});
})