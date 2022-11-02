export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueWf2nsDp = undefined;
		const _getAllVerticesHyLbyC = () => { return _returnValueWf2nsDp };
		const _graphwHYecsY = {
			"getAllVertices": _getAllVerticesHyLbyC
	}
		const _returnValueZb8H9Dw = await articulationPoints(_graphwHYecsY)
	});
})