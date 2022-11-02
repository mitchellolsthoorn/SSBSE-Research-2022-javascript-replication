export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphQuL0qoa = -1.3820628261116052;
		const _returnValueOwXYWm0 = null;
		const _startVertexs1BzFzx = () => { return _returnValueOwXYWm0 };
		const _returnValuevpFkl9Y = await dijkstra(_graphQuL0qoa, _startVertexs1BzFzx)
	});
})