export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueofQc1iy = undefined;
		const _getAllVerticest7LUD1p = () => { return _returnValueofQc1iy };
		const _graphSO6pHF6 = {
			"getAllVertices": _getAllVerticest7LUD1p
	}
		const _returnValueDmbwjzb = await articulationPoints(_graphSO6pHF6)
	});
})