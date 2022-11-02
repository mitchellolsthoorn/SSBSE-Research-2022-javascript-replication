export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuevb9TF6b = null;
		const _getAllVerticeshECOKeb = () => { return _returnValuevb9TF6b };
		const _graphqWwVumN = {
			"getAllVertices": _getAllVerticeshECOKeb
	}
		const _returnValueIUwEAm1 = await detectDirectedCycle(_graphqWwVumN)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueGXqM5po = []
		const _getAllVertices3eTkFo = () => { return _returnValueGXqM5po };
		const _grapht9Bdj6Y = {
			"getAllVertices": _getAllVertices3eTkFo
	}
		const _returnValueSpRvlZK = await detectDirectedCycle(_grapht9Bdj6Y)
	});
})