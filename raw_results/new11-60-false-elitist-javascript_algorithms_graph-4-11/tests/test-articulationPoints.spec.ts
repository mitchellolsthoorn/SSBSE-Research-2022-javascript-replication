export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueSlvHQ6e = false;
		const _getAllVerticesk3y56tN = () => { return _returnValueSlvHQ6e };
		const _graphUVZlnqF = {
			"getAllVertices": _getAllVerticesk3y56tN
	}
		const _returnValueLuMQiN = await articulationPoints(_graphUVZlnqF)
	});
})