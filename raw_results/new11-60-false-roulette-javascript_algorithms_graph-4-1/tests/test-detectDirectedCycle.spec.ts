export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueF1qeTgq = undefined;
		const _getAllVerticesLMt8LfX = () => { return _returnValueF1qeTgq };
		const _graphA3YnQv6 = {
			"getAllVertices": _getAllVerticesLMt8LfX
	}
		const _returnValueyUO4GKE = await detectDirectedCycle(_graphA3YnQv6)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedEVcRC5 = false;
		const _graphUrnrtAt = new Graph(_isDirectedEVcRC5)
		const _returnValuevOpdxTY = await _graphUrnrtAt.getWeight()
		const _returnValueIYkUIdT = await _graphUrnrtAt.getAllEdges()
		const _returnValueGMPRgei = await detectDirectedCycle(_graphUrnrtAt)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedbesKSd = true;
		const _graphFH81SQf = new Graph(_isDirectedbesKSd)
		const _returnValuesglvdmN = await _graphFH81SQf.getWeight()
		const _returnValuenFOrq9l = false;
		const _getKeypGuIpQJ = () => { return _returnValuenFOrq9l };
		const _newVertexemZHq4c = {
			"getKey": _getKeypGuIpQJ
	}
		const _returnValuekoA6nNY = await _graphFH81SQf.addVertex(_newVertexemZHq4c)
		const _returnValueU3HIsw = await _graphFH81SQf.getAllVertices()
		const _returnValueBQeL8Bk = await detectDirectedCycle(_graphFH81SQf)
	});
})