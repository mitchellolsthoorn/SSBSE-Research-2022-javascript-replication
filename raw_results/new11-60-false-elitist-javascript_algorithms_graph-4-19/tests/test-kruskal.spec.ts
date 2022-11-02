export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedJbBhVQw = "wZWjncofGlN1GGLS10VL0VwKSGFLY16gl6sVb3tfyenoBDilA3WfBrAVz1CTRmi";
		const _getAllEdgesxOl1Mm4 = null;
		const _returnValuewWf56Fe = 8.994986096809935;
		const _getAllVerticespoMxmPB = () => { return _returnValuewWf56Fe };
		const _graphoGORMIA = {
			"isDirected": _isDirectedJbBhVQw,
		"getAllEdges": _getAllEdgesxOl1Mm4,
		"getAllVertices": _getAllVerticespoMxmPB
	}
		const _returnValueNiU9SBt = await kruskal(_graphoGORMIA)
	});

	it('test for kruskal', async () => {
		const _isDirected5jmOqu = null;
		const _returnValueTORAaoz = "zwxo3yHz2CTG9o4RiqF4uNdh8lPbe8GM82gWyhfXyWB5OAmH8MQssMYtyDnN";
		const _getAllEdgestXnnEPE = () => { return _returnValueTORAaoz };
		const _returnValueQWzwMq = undefined;
		const _getAllVerticesaCftbYM = () => { return _returnValueQWzwMq };
		const _graphaoDMl6N = {
			"isDirected": _isDirected5jmOqu,
		"getAllEdges": _getAllEdgestXnnEPE,
		"getAllVertices": _getAllVerticesaCftbYM
	}
		const _returnValuehKKZeyq = await kruskal(_graphaoDMl6N)
	});
})