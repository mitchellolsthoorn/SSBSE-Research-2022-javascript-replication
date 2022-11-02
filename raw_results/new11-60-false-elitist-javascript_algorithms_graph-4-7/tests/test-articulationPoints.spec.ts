export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuepiAMZZb = null;
		const _getAllVerticespEGnXwr = () => { return _returnValuepiAMZZb };
		const _graphoD3E5W4 = {
			"getAllVertices": _getAllVerticespEGnXwr
	}
		const _returnValuevZUlhLz = await articulationPoints(_graphoD3E5W4)
	});
})