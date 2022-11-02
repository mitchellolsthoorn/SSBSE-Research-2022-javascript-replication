export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueE1BJbfg = undefined;
		const _graphg1tfV6 = () => { return _returnValueE1BJbfg };
		const _returnValuejZoFDuA = await prim(_graphg1tfV6)
	});
})