export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValueOKPxIhh = -9.682116961238613;
		const _arrayValuemErHp4f = true;
		const _arrayValueevLI5i8 = null;
		const _arrayValueupjGyQc = [_arrayValueOKPxIhh, _arrayValuemErHp4f, _arrayValueevLI5i8]
		const _arrayValuetRR9gMu = -9.43313929245065;
		const _graphA5rvQwh = [_arrayValueupjGyQc, _arrayValuetRR9gMu]
		const _startVertexGUfogk = "35j2WUx1jhmZnz9Pz3A5QdkWGV1vMEj3jpiPM5K03Mhc3TAljDr5XsW86UfYbLpNrJRD5HBWyJ6";
		const _returnValuejCV9yoo = await dijkstra(_graphA5rvQwh, _startVertexGUfogk)
	});
})