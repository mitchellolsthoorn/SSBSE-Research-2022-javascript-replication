export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueBfz5U7d = true;
		const _reversekjjYbMf = () => { return _returnValueBfz5U7d };
		const _graphU7TDCVy = {
			"reverse": _reversekjjYbMf
	}
		const _returnValueVtxGcoO = await stronglyConnectedComponents(_graphU7TDCVy)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedjDgKDak = true;
		const _graphs9vB9o = new Graph(_isDirectedjDgKDak)
		const _vertexKeypfLYCLf = true;
		const _returnValuetsbqn6F = await _graphs9vB9o.getVertexByKey(_vertexKeypfLYCLf)
		const _returnValuehqxRSUT = await _graphs9vB9o.reverse()
		const _returnValueNOFscTZ = await stronglyConnectedComponents(_graphs9vB9o)
	});
})