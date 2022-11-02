export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueu2Z8CIN = {
		
	}
		const _getAllVerticesweCKZiN = () => { return _returnValueu2Z8CIN };
		const _graphNhhBS68 = {
			"getAllVertices": _getAllVerticesweCKZiN
	}
		const _returnValuesZ9v8Cf = await detectUndirectedCycle(_graphNhhBS68)
	});
})