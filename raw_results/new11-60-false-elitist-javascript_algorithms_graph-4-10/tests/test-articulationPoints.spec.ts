export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueovBTv3H = "tSQESHNQ5pz8yOXas5EsUShw6Kj2";
		const _getAllVerticesxW2qK5i = () => { return _returnValueovBTv3H };
		const _graphhDKxFi3 = {
			"getAllVertices": _getAllVerticesxW2qK5i
	}
		const _returnValuekQRlvsy = await articulationPoints(_graphhDKxFi3)
	});
})