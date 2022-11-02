export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuePk7Y8cL = undefined;
		const _returnValuefUXk5HS = () => { return _returnValuePk7Y8cL };
		const _getAllVerticesrQbcAG9 = () => { return _returnValuefUXk5HS };
		const _graphgDMwqRN = {
			"getAllVertices": _getAllVerticesrQbcAG9
	}
		const _returnValueyfQ6w8U = await articulationPoints(_graphgDMwqRN)
	});
})