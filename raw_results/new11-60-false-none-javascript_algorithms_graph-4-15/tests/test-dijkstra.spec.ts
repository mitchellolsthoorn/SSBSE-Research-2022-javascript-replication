export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuePBJoVh = undefined;
		const _graphQVrgYFE = () => { return _returnValuePBJoVh };
		const _arrayValue2CMSWa = null;
		const _startVertexhSBy9Pn = [_arrayValue2CMSWa]
		const _returnValueFbyCLnm = await dijkstra(_graphQVrgYFE, _startVertexhSBy9Pn)
	});
})