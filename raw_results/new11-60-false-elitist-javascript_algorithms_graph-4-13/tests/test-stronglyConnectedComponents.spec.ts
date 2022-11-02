export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueQEONzNN = false;
		const _grapheJHKTXJ = () => { return _returnValueQEONzNN };
		const _returnValueD0Y0SL = await stronglyConnectedComponents(_grapheJHKTXJ)
	});
})