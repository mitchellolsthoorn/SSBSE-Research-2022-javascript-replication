export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueW7o2t1H = null;
		const _getAllVerticesXqDvFg8 = () => { return _returnValueW7o2t1H };
		const _graphHdA0PV = {
			"getAllVertices": _getAllVerticesXqDvFg8
	}
		const _returnValueuoYFz2d = await articulationPoints(_graphHdA0PV)
	});
})