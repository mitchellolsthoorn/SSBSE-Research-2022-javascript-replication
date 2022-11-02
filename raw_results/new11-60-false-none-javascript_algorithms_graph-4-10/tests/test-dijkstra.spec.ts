export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphQ1KwyG = "k";
		const _startVertexJ4b1Pj = "t64YK6TChcXy6j2horDSkxS3aUvI7zHyyBuEpeXpFdXFjYDu";
		const _returnValueuwrf9k1 = await dijkstra(_graphQ1KwyG, _startVertexJ4b1Pj)
	});
})