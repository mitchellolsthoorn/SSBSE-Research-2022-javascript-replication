export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphLIf5rEA = "suHXYq2is4swcWDji5pW";
		const _returnValueYHHnx8E = await bfTravellingSalesman(_graphLIf5rEA)
	});
})