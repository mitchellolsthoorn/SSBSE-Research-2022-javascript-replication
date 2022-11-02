export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueKmk6fg9 = 2.881580997744365;
		const _arrayValueLblfZ45 = [_arrayValueKmk6fg9]
		const _graphVdCWWnY = [_arrayValueLblfZ45]
		const _returnValueQ8vmwUL = await bfTravellingSalesman(_graphVdCWWnY)
	});
})