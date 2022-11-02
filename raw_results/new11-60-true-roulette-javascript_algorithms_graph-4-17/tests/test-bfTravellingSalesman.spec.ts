export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphzCeKEcZ = []
		const _returnValuewARdw5p = await bfTravellingSalesman(_graphzCeKEcZ)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedVkG9a9O = false;
		const _graphMCrl6ku = new Graph(_isDirectedVkG9a9O)
		const _vertexKeyx7UdEn5 = []
		const _returnValuetSivZjc = await _graphMCrl6ku.getVertexByKey(_vertexKeyx7UdEn5)
		const _vertexKeyVhNvgCV = undefined;
		const _returnValuePMzW1yM = await _graphMCrl6ku.getVertexByKey(_vertexKeyVhNvgCV)
		const _returnValueTycjul = await _graphMCrl6ku.getWeight()
		const _returnValueyw0iOVk = await _graphMCrl6ku.getAllEdges()
		const _returnValueQ7lOuhJ = await bfTravellingSalesman(_graphMCrl6ku)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirecteddxm1Hq = false;
		const _graphbPeQvyY = new Graph(_isDirecteddxm1Hq)
		const _valuebt9bO6b = "NLNDlF27pmdwXwS3GlW9mPxN2";
		const _returnValueoniA4c = "MLh6852N19kAjM";
		const _keyCallbackyK89cR = () => { return _returnValueoniA4c };
		const _newVertexNhRewar = new DisjointSetItem(_valuebt9bO6b, _keyCallbackyK89cR)
		const _returnValueqATj7Uw = await _newVertexNhRewar.getChildren()
		const _returnValueiihryKP = await _newVertexNhRewar.isRoot()
		const _returnValueK0RmI7W = await _newVertexNhRewar.isRoot()
		const _returnValueuHrPBG9 = await _newVertexNhRewar.getRank()
		const _returnValueGj6Wo51 = await _graphbPeQvyY.addVertex(_newVertexNhRewar)
		const _returnValuekoEvIy7 = await _graphbPeQvyY.getAllEdges()
		const _returnValueN5WfQMm = await bfTravellingSalesman(_graphbPeQvyY)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedctUCEsi = false;
		const _graphbLXEotQ = new Graph(_isDirectedctUCEsi)
		const _returnValueUtIt4jR = await _graphbLXEotQ.reverse()
		const _returnValuePW4ik31 = 3.024448859510592;
		const _valueA4eeQ5B = () => { return _returnValuePW4ik31 };
		const _newVertexgbRx3Ya = new GraphVertex(_valueA4eeQ5B)
		const _requiredEdgeKZj1R4l = "4oG8wWX1VB2VyS6CAvNPfE1EJ6rtEHE2wWjWcYwa4eeSwyAxfZeFFQbMJfpf";
		const _returnValuekvUZWz = await _newVertexgbRx3Ya.hasEdge(_requiredEdgeKZj1R4l)
		const _vertexAaGf2AF = null;
		const _returnValueerU1BMC = await _newVertexgbRx3Ya.hasNeighbor(_vertexAaGf2AF)
		const _vertexMZuY1uU = undefined;
		const _returnValueLp4DaHL = await _newVertexgbRx3Ya.findEdge(_vertexMZuY1uU)
		const _returnValueLU4z6s = await _newVertexgbRx3Ya.getDegree()
		const _returnValueJluhae2 = await _graphbLXEotQ.addVertex(_newVertexgbRx3Ya)
		const _returnValuewsgCVVD = await bfTravellingSalesman(_graphbLXEotQ)
	});
})