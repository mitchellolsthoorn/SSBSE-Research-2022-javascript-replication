export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValueEzqvZF3 = {
		
	}
		const _returnValueyNDxmn2 = -5.967985773291705;
		const _arrayValueRRi399q = () => { return _returnValueyNDxmn2 };
		const _arrayValuen62psVy = []
		const _arrayValuetpNiYjK = true;
		const _arrayValueDcj9fUn = undefined;
		const _arrayValueZPjL34f = [_arrayValueRRi399q, _arrayValuen62psVy, _arrayValuetpNiYjK, _arrayValueDcj9fUn]
		const _arrayValueqcEuV5f = 1.0435940692808856;
		const _graphBZqHfwg = [_arrayValueEzqvZF3, _arrayValueZPjL34f, _arrayValueqcEuV5f]
		const _startVertexIJq7FXY = true;
		const _returnValuePDRjkpI = await dijkstra(_graphBZqHfwg, _startVertexIJq7FXY)
	});
})