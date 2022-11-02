export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphjKqFtv = "oNrlf3ORo1OwmvGB1FDAjtizK3latzXrL";
		const _startVertexiZMrWU9 = "dnpks1I4D2zTrkOHOl4vlzvwjJ6Y5qDWsPFlLKTJSomxg1vxfhWrY9P83";
		const _returnValueYhS4zMO = await bellmanFord(_graphjKqFtv, _startVertexiZMrWU9)
	});
})