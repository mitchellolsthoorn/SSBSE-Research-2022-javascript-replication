export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValueAWKy80Z = []
		const _returnValueOC3nu5l = -5.002773785797301;
		const _arrayValueDwJlxt = () => { return _returnValueOC3nu5l };
		const _arrayValuelHXU4Mx = {
		
	}
		const _arrayValueouCdHa = true;
		const _arrayValueqBw8wZr = [_arrayValuelHXU4Mx, _arrayValueouCdHa]
		const _arrayValueSQApVXJ = [_arrayValueDwJlxt, _arrayValueqBw8wZr]
		const _getAllVertices9hLwC6 = [_arrayValueAWKy80Z, _arrayValueSQApVXJ]
		const _graphpasFkm6 = {
			"getAllVertices": _getAllVertices9hLwC6
	}
		const _returnValuejudeQIW = await detectUndirectedCycle(_graphpasFkm6)
	});
})