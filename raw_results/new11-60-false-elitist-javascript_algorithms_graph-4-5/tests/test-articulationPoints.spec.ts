export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueEmyOGJX = false;
		const _getAllVerticesGshpOyI = () => { return _returnValueEmyOGJX };
		const _graph7AFIL1 = {
			"getAllVertices": _getAllVerticesGshpOyI
	}
		const _returnValueIPfUTQd = await articulationPoints(_graph7AFIL1)
	});
})