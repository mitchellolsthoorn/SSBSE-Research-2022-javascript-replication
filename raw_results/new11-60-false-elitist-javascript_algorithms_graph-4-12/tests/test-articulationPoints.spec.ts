export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueCcKyW0 = undefined;
		const _returnValue7onQan = () => { return _returnValueCcKyW0 };
		const _getAllVerticesSLwtiOr = () => { return _returnValue7onQan };
		const _grapht2yLuBJ = {
			"getAllVertices": _getAllVerticesSLwtiOr
	}
		const _returnValueF4kd6vr = await articulationPoints(_grapht2yLuBJ)
	});
})