export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValuepnTB6va = 3.2169211198245264;
		const _arrayValueaizvpcC = false;
		const _graphZmmU69O = [_arrayValuepnTB6va, _arrayValueaizvpcC]
		const _returnValueQNrA0qL = await detectUndirectedCycleUsingDisjointSet(_graphZmmU69O)
	});
})