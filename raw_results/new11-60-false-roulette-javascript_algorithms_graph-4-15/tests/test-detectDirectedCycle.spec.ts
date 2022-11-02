export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphTuC7Ptu = "3vYcFYVwssOS3yx8bP3mSbGPBoi1IVD2z5IxnXeF4UWjeboqtIu30VCJL7Uqcz33";
		const _returnValuedqD4bbJ = await detectDirectedCycle(_graphTuC7Ptu)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedhTM1gfA = false;
		const _graphfPPBm9 = new Graph(_isDirectedhTM1gfA)
		const _returnValuesMSg5nZ = null;
		const _getKeyJkSCjDa = () => { return _returnValuesMSg5nZ };
		const _startVertexwjk1llp = {
			"getKey": _getKeyJkSCjDa
	}
		const _endVertexAq3IHHQ = "cVEm9Wila1bXAUSVNggWM6O6KBYcX6sAFvVJbsVfAyIOrPPbKR0KvztikesRII9Fw1LdoADnSiY";
		const _returnValueZl8BSA5 = await _graphfPPBm9.findEdge(_startVertexwjk1llp, _endVertexAq3IHHQ)
		const _returnValuey5bPdlr = await _graphfPPBm9.toString()
		const _returnValueMUPrpGi = await _graphfPPBm9.getVerticesIndices()
		const _returnValueikH4Qs = await detectDirectedCycle(_graphfPPBm9)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedXcDSFf0 = false;
		const _graphVWDrDj7 = new Graph(_isDirectedXcDSFf0)
		const _returnValuesEoMaHK = await _graphVWDrDj7.getAllVertices()
		const _returnValueYoR4hg6 = {
		
	}
		const _getKeysP9zfkb = () => { return _returnValueYoR4hg6 };
		const _newVertexiMlERkU = {
			"getKey": _getKeysP9zfkb
	}
		const _returnValueZdRC8fX = await _graphVWDrDj7.addVertex(_newVertexiMlERkU)
		const _returnValuehGEn0sG = await detectDirectedCycle(_graphVWDrDj7)
	});
})