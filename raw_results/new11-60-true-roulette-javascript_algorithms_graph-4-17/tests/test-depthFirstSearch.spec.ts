export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphi4zcZVC = 3.986344903775901;
		const _startVertexCBqK06C = "VoYts4UOXuokg1CcN6ZaDf5DcDBXoxVjLcsz";
		const _callbacksi2yUoYc = undefined;
		const _returnValuerI7UNJ4 = await depthFirstSearch(_graphi4zcZVC, _startVertexCBqK06C, _callbacksi2yUoYc)
	});
})