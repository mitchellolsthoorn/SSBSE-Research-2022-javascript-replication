export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _getAllVerticesCpCGOa = false;
		const _graphP23FdS = {
			"getAllVertices": _getAllVerticesCpCGOa
	}
		const _returnValueZj5457m = await articulationPoints(_graphP23FdS)
	});
})