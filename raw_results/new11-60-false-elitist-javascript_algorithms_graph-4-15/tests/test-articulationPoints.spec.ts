export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueKhK9QhV = undefined;
		const _getAllVerticesx8elGv2 = () => { return _returnValueKhK9QhV };
		const _graphPA8Pjwz = {
			"getAllVertices": _getAllVerticesx8elGv2
	}
		const _returnValuekPLdwwR = await articulationPoints(_graphPA8Pjwz)
	});
})