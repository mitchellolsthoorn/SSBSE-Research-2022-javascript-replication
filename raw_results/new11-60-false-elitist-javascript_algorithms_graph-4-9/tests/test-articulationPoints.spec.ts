export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueLz5PqV = {
		
	}
		const _getAllVertices8NCOZD = () => { return _returnValueLz5PqV };
		const _graphUV89dHl = {
			"getAllVertices": _getAllVertices8NCOZD
	}
		const _returnValueLYE6WOI = await articulationPoints(_graphUV89dHl)
	});
})