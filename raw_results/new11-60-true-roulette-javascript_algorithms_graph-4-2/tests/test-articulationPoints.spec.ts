export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValue0Oc868 = null;
		const _graphDwDKZoX = () => { return _returnValue0Oc868 };
		const _returnValueXWXgzeZ = await articulationPoints(_graphDwDKZoX)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedvecec6Y = false;
		const _graphxL0op04 = new Graph(_isDirectedvecec6Y)
		const _returnValueEPH3Wsd = null;
		const _getKeyJPgMkHQ = () => { return _returnValueEPH3Wsd };
		const _newVertexEbGrHYo = {
			"getKey": _getKeyJPgMkHQ
	}
		const _returnValuepGdEXLv = await _graphxL0op04.addVertex(_newVertexEbGrHYo)
		const _returnValuevmvUHWX = await _graphxL0op04.reverse()
		const _returnValueR8AbVdS = await articulationPoints(_graphxL0op04)
	});
})