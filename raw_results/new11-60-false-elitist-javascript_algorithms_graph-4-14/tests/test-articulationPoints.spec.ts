export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _getAllVerticesO9RobTP = true;
		const _graphttCZNo = {
			"getAllVertices": _getAllVerticesO9RobTP
	}
		const _returnValueA723hbq = await articulationPoints(_graphttCZNo)
	});
})