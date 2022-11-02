export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _graphMkLmUwl = "NI8pvEGEJeHSMtDQ";
		const _returnValuewFWPiov = await prim(_graphMkLmUwl)
	});
})