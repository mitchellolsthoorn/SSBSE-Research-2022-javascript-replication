export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphQSSOCxu = true;
		const _startVertexKNrRCMi = "ZjT8mqkzGimwlpJXPGu5dcxW6K6vfeHlLoc5wM7lUh4bfICwN5Q9AnK";
		const _returnValuevefPYHR = await dijkstra(_graphQSSOCxu, _startVertexKNrRCMi)
	});
})