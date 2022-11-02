export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuehprwqVm = true;
		const _getAllVerticesL6pdPZC = () => { return _returnValuehprwqVm };
		const _graph9lLS23 = {
			"getAllVertices": _getAllVerticesL6pdPZC
	}
		const _returnValueO8tnnF3 = await articulationPoints(_graph9lLS23)
	});
})