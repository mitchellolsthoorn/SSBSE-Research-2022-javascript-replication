export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphUTeGzU7 = "5B6T7fkgW1Kj7pUO8cOSxYv2d8ySXc4tKwVEBvfkMDK";
		const _returnValueLG9fyUb = await detectDirectedCycle(_graphUTeGzU7)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedTxhIqFN = false;
		const _graphOPKXkAO = new Graph(_isDirectedTxhIqFN)
		const _returnValueCop5z2u = await _graphOPKXkAO.getWeight()
		const _returnValueT3cGjNe = await _graphOPKXkAO.getAllEdges()
		const _returnValueBFKiil = await _graphOPKXkAO.getAllVertices()
		const _returnValueotIV3t = await _graphOPKXkAO.toString()
		const _returnValuebhlDsJM = await detectDirectedCycle(_graphOPKXkAO)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedgx1XbAC = false;
		const _graph3H1ahR = new Graph(_isDirectedgx1XbAC)
		const _returnValueXDxgQ5G = await _graph3H1ahR.getAllVertices()
		const _returnValueM0e1Nu3 = true;
		const _getKeyJmkDHIy = () => { return _returnValueM0e1Nu3 };
		const _newVertexlane2cR = {
			"getKey": _getKeyJmkDHIy
	}
		const _returnValuesVBid6H = await _graph3H1ahR.addVertex(_newVertexlane2cR)
		const _returnValueoljk0P6 = await _graph3H1ahR.getAllEdges()
		const _returnValueahQVqOx = await detectDirectedCycle(_graph3H1ahR)
	});
})