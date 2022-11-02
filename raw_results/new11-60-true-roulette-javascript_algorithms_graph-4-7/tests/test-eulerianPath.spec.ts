export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueaZfqpqy = undefined;
		const _arrayValueGRtYSV = () => { return _returnValueaZfqpqy };
		const _getAllEdgesT0S9oxE = [_arrayValueGRtYSV]
		const _arrayValueuK5F3Xp = true;
		const _arrayValue8Fp2NE = "XnlfIXFNIaBXgcPMSg9MimbbKfyRjn9GDVIkPNPjXgTUYePwDJfzcwLljRwT7C84bSynrcFnmJwtkVB6Jjcgfnyi5U";
		const _arrayValueQGEi6NE = null;
		const _returnValuepwHpuVS = [_arrayValueuK5F3Xp, _arrayValue8Fp2NE, _arrayValueQGEi6NE]
		const _getAllVerticesuCPdp7o = () => { return _returnValuepwHpuVS };
		const _returnValueoDGsDzH = null;
		const _deleteEdgegHWWBI = () => { return _returnValueoDGsDzH };
		const _graphgDhlGFU = {
			"getAllEdges": _getAllEdgesT0S9oxE,
		"getAllVertices": _getAllVerticesuCPdp7o,
		"deleteEdge": _deleteEdgegHWWBI
	}
		const _returnValueWEiYzrQ = await eulerianPath(_graphgDhlGFU)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedZfbBb0Q = -8.762390297874859;
		const _graphyyVAH3R = new Graph(_isDirectedZfbBb0Q)
		const _returnValuehBBFR9n = await _graphyyVAH3R.getVerticesIndices()
		const _returnValueKcCCrbj = await _graphyyVAH3R.getVerticesIndices()
		const _returnValuenq47958 = await eulerianPath(_graphyyVAH3R)
	});
})