export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueBNslV14 = -8.336757552877781;
		const _arrayValueCr45fgo = "25q3NEGvJTrHNnJUtjFke7GYaraS0RMp9kKXuhOb39i8tLnSrhN9hCyvppQid15pZlrwm5BrOWKv6agDgTVAUM";
		const _returnValueMuzEnA = [_arrayValueBNslV14, _arrayValueCr45fgo]
		const _getAllVerticesSyTlJEv = () => { return _returnValueMuzEnA };
		const _graphrMDHwZr = {
			"getAllVertices": _getAllVerticesSyTlJEv
	}
		const _returnValuevpESlhi = await detectUndirectedCycle(_graphrMDHwZr)
	});
})