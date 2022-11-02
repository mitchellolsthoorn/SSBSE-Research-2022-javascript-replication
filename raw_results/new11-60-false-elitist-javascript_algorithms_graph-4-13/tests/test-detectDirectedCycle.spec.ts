export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueN4KDOt2 = 2.993602901857347;
		const _getAllVerticess0Bt7Rd = () => { return _returnValueN4KDOt2 };
		const _graphYcAMS2 = {
			"getAllVertices": _getAllVerticess0Bt7Rd
	}
		const _returnValueAkc7Ptl = await detectDirectedCycle(_graphYcAMS2)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValuegczBnWE = []
		const _getAllVerticescuC6Vqm = () => { return _returnValuegczBnWE };
		const _graphVa0GQt = {
			"getAllVertices": _getAllVerticescuC6Vqm
	}
		const _returnValuear1qtlN = await detectDirectedCycle(_graphVa0GQt)
	});
})