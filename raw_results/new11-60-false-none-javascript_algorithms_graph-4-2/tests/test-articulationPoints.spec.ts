export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValuekAXzuk2 = "sTYbvOXHSxJsLI3a3YihGn5zVS4vnilagoo7D1nW1OP3LtZHlI8btocUkBD";
		const _arrayValueymAgWTx = undefined;
		const _grapham6QMgr = [_arrayValuekAXzuk2, _arrayValueymAgWTx]
		const _returnValuepbOBF3 = await articulationPoints(_grapham6QMgr)
	});
})