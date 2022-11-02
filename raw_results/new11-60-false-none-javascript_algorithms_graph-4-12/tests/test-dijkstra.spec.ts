export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphJnvK5y = undefined;
		const _startVertexRlBw15v = -9.795617696824399;
		const _returnValuei8lg1pT = await dijkstra(_graphJnvK5y, _startVertexRlBw15v)
	});
})