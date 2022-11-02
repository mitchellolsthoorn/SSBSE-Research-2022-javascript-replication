export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphT6HD25 = null;
		const _returnValueOEkMqoO = await detectDirectedCycle(_graphT6HD25)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueYieOCTO = []
		const _getAllVerticesETgRhqD = () => { return _returnValueYieOCTO };
		const _graphbO22PtY = {
			"getAllVertices": _getAllVerticesETgRhqD
	}
		const _returnValueZPiKZUI = await detectDirectedCycle(_graphbO22PtY)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedzGcJymI = false;
		const _graphVqAFNeN = new Graph(_isDirectedzGcJymI)
		const _returnValuewNi7WIK = false;
		const _getKeyxoiQhz4 = () => { return _returnValuewNi7WIK };
		const _newVertexyFw7TPa = {
			"getKey": _getKeyxoiQhz4
	}
		const _returnValueY6VMiYJ = await _graphVqAFNeN.addVertex(_newVertexyFw7TPa)
		const _returnValueNKmupVj = null;
		const _vertexKeyqcLMZZ1 = () => { return _returnValueNKmupVj };
		const _returnValueLzuMuH8 = await _graphVqAFNeN.getVertexByKey(_vertexKeyqcLMZZ1)
		const _returnValuej2pfo7h = await detectDirectedCycle(_graphVqAFNeN)
	});
})