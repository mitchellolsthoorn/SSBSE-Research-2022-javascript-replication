export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphmxS66lh = -3.7549960001322944;
		const _startVertexR4g9Ha = "lbPpxtmVHloZvwqq0G1QuNhGTm5RK6U31dMHkJMBDnpPlh1V5U5lDhvP";
		const _callbacksjhqGWIz = true;
		const _returnValueVBoTJT = await depthFirstSearch(_graphmxS66lh, _startVertexR4g9Ha, _callbacksjhqGWIz)
	});

	it('test for depthFirstSearch', async () => {
		const _graphqOONT38 = null;
		const _startVertexhqibuDQ = {
		
	}
		const _arrayValueonycZe = undefined;
		const _arrayValuetRZ9yUl = null;
		const _arrayValueCkYzMkD = -7.745856026052007;
		const _callbacksEIPQEpc = [_arrayValueonycZe, _arrayValuetRZ9yUl, _arrayValueCkYzMkD]
		const _returnValuejKKgISO = await depthFirstSearch(_graphqOONT38, _startVertexhqibuDQ, _callbacksEIPQEpc)
	});
})