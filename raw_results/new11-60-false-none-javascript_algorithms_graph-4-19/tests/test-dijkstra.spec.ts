export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValueo7ST2RN = 8.706543130545192;
		const _arrayValuePMUWXQ2 = -9.574510020457385;
		const _arrayValuerAYr9Nd = []
		const _graphBmy1tv = [_arrayValueo7ST2RN, _arrayValuePMUWXQ2, _arrayValuerAYr9Nd]
		const _arrayValuePBKFRHo = {
		
	}
		const _arrayValueXh9DesJ = false;
		const _startVertexWMlUQyf = [_arrayValuePBKFRHo, _arrayValueXh9DesJ]
		const _returnValueO1Bgk5V = await dijkstra(_graphBmy1tv, _startVertexWMlUQyf)
	});
})