export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueXWA4jp4 = false;
		const _graphjJVEzH3 = () => { return _returnValueXWA4jp4 };
		const _returnValueyxx3Ue3 = await articulationPoints(_graphjJVEzH3)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedC1iNVfD = true;
		const _graphqunS0iJ = new Graph(_isDirectedC1iNVfD)
		const _returnValueMYwGU81 = await _graphqunS0iJ.getAllVertices()
		const _returnValuenNGA4vR = false;
		const _getKeyQiuTKHb = () => { return _returnValuenNGA4vR };
		const _newVertexTmvUpd = {
			"getKey": _getKeyQiuTKHb
	}
		const _returnValuedwrcxIN = await _graphqunS0iJ.addVertex(_newVertexTmvUpd)
		const _returnValueIUOOhTh = await articulationPoints(_graphqunS0iJ)
	});
})