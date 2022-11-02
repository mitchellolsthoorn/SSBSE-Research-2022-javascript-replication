export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueM1Oqhhk = undefined;
		const _getAllVerticesLeKLgV = () => { return _returnValueM1Oqhhk };
		const _graphuGZnNMX = {
			"getAllVertices": _getAllVerticesLeKLgV
	}
		const _returnValueHmOV6Kw = await articulationPoints(_graphuGZnNMX)
	});
})