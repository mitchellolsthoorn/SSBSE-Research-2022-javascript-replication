export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueaI0CKxi = undefined;
		const _graphWA9WNj = () => { return _returnValueaI0CKxi };
		const _returnValuesDnCvX8 = await bfTravellingSalesman(_graphWA9WNj)
	});
})