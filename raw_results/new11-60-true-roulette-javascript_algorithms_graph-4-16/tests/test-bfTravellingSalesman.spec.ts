export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphj2CTcD8 = undefined;
		const _returnValuewO8y0Gx = await bfTravellingSalesman(_graphj2CTcD8)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueiMG8lzo = "CsI1H41rt2dXGWb3rQHLLBX4E2di8T2";
		const _getAllVerticesVoD1FmL = () => { return _returnValueiMG8lzo };
		const _returnValuenafLQaz = 7.931324595855994;
		const _getAdjacencyMatrixUdj5OR8 = () => { return _returnValuenafLQaz };
		const _returnValueKLvsmwD = {
		
	}
		const _getVerticesIndiceslL68ILE = () => { return _returnValueKLvsmwD };
		const _graphzIEWbV = {
			"getAllVertices": _getAllVerticesVoD1FmL,
		"getAdjacencyMatrix": _getAdjacencyMatrixUdj5OR8,
		"getVerticesIndices": _getVerticesIndiceslL68ILE
	}
		const _returnValueQ53LCfe = await bfTravellingSalesman(_graphzIEWbV)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedTAdjIhA = true;
		const _graphE6fH2WF = new Graph(_isDirectedTAdjIhA)
		const _returnValueX9uhUA = await _graphE6fH2WF.getAllVertices()
		const _returnValueg68FswK = await _graphE6fH2WF.getAdjacencyMatrix()
		const _returnValueZAOMEJ = await _graphE6fH2WF.getAllEdges()
		const _returnValueGwts1Rf = "W5wVf14CwAMubxG4TRVmx3mWMMmxX8lqdsvfYydX3FBO";
		const _getKeyGBvqYEM = () => { return _returnValueGwts1Rf };
		const _newVertextT5JtCC = {
			"getKey": _getKeyGBvqYEM
	}
		const _returnValuedEN9hKZ = await _graphE6fH2WF.addVertex(_newVertextT5JtCC)
		const _returnValueKykNtgX = await bfTravellingSalesman(_graphE6fH2WF)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedpxO2jzq = false;
		const _graphFfk7W18 = new Graph(_isDirectedpxO2jzq)
		const _returnValuecbAk07 = undefined;
		const _returnValueX9sW862 = () => { return _returnValuecbAk07 };
		const _arrayValueY8jGmir = () => { return _returnValueX9sW862 };
		const _arrayValueEY6E309 = undefined;
		const _arrayValueMqjsIEc = 9.887899841495098;
		const _arrayValueGI5AzYT = [_arrayValueEY6E309, _arrayValueMqjsIEc]
		const _valuezGht07S = [_arrayValueY8jGmir, _arrayValueGI5AzYT]
		const _newVertexBqJBf5 = new GraphVertex(_valuezGht07S)
		const _returnValuepepHzwX = await _newVertexBqJBf5.getNeighbors()
		const _returnValueyx3CvhC = await _graphFfk7W18.addVertex(_newVertexBqJBf5)
		const _returnValuevh6tlDD = await bfTravellingSalesman(_graphFfk7W18)
	});
})