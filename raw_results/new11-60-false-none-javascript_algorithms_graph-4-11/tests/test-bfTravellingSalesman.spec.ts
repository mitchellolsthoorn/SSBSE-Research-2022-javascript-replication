export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueJT7jYa8 = 3.511195080148857;
		const _graphJof5vwk = () => { return _returnValueJT7jYa8 };
		const _returnValueygUJrn = await bfTravellingSalesman(_graphJof5vwk)
	});
})