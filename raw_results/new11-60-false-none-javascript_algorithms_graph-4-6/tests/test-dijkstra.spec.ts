export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphA5i2ZKy = "1EHCwqfrwkd6UciWxYMUaEsxJvPw4HjuOu7eVlewEhKuVM";
		const _startVertexjGu86Dv = "inkS1hSkjZtrbzbtiCXEiaz7qCNfCS16tar8K5axj23Uts985B4C8YnljYVzEmkyRvVOY5CKmkCNNPB2caHL3fUGqkP";
		const _returnValuergQSAuN = await dijkstra(_graphA5i2ZKy, _startVertexjGu86Dv)
	});
})