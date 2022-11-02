export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphyg9YjoQ = "4862XAjFS7IUaNV6FCtKEeTPq25Yj67BCdraTanQezuRMtn9kyLo2o6EUP6m7yqE2LgOMPJi1ikRFfpnfPd";
		const _returnValuei8LiYsT = await topologicalSort(_graphyg9YjoQ)
	});
})