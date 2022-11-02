export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueZzyXfiZ = undefined;
		const _graphftYTwvN = () => { return _returnValueZzyXfiZ };
		const _returnValuepbCcTeB = await graphBridges(_graphftYTwvN)
	});

	it('test for graphBridges', async () => {
		const _isDirectedlnhysgO = true;
		const _graphCQ3Gex = new Graph(_isDirectedlnhysgO)
		const _returnValueqpuF2r = false;
		const _getKeyXG5NlSF = () => { return _returnValueqpuF2r };
		const _newVertexbvNFslp = {
			"getKey": _getKeyXG5NlSF
	}
		const _returnValuegsofzsZ = await _graphCQ3Gex.addVertex(_newVertexbvNFslp)
		const _returnValued8wym4b = await _graphCQ3Gex.getAllEdges()
		const _returnValuec0UT7V9 = await graphBridges(_graphCQ3Gex)
	});
})