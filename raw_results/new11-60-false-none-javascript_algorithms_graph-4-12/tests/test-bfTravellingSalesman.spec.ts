export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphs4GXN0k = "dx5TH6Bl4n2FykT6rZIIIze6DvPxILZ8ut";
		const _returnValuen1rTIlu = await bfTravellingSalesman(_graphs4GXN0k)
	});
})