export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueFgIV5ku = -5.996210075125015;
		const _getAllVerticescNpGjM = () => { return _returnValueFgIV5ku };
		const _graphpy24PGd = {
			"getAllVertices": _getAllVerticescNpGjM
	}
		const _returnValueCozWwU3 = await detectDirectedCycle(_graphpy24PGd)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedDUjdqJf = true;
		const _graphhgNS08G = new Graph(_isDirectedDUjdqJf)
		const _returnValueKMq6Xzl = await _graphhgNS08G.getAdjacencyMatrix()
		const _returnValueL0yhNu8 = await detectDirectedCycle(_graphhgNS08G)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedDDFAhj = true;
		const _graphTzAk7Ut = new Graph(_isDirectedDDFAhj)
		const _returnValuetuBjhQg = await _graphTzAk7Ut.getWeight()
		const _returnValueZs3ieBC = "UtM4VfFBlOQoTBG22lp7TTcvHT8ZS85eifcmKcE9y";
		const _getKeyZtU5KSN = () => { return _returnValueZs3ieBC };
		const _newVertexYkMRIeo = {
			"getKey": _getKeyZtU5KSN
	}
		const _returnValueVW5TASS = await _graphTzAk7Ut.addVertex(_newVertexYkMRIeo)
		const _returnValueHI7VEFt = await detectDirectedCycle(_graphTzAk7Ut)
	});
})