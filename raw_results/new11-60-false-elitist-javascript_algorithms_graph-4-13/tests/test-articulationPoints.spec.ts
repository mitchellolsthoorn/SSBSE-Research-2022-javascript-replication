export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValueRWZ6vKc = true;
		const _arrayValueD11shtu = null;
		const _arrayValueAF8AuwW = 5.24865798202471;
		const _returnValueKxsb5Vo = null;
		const _arrayValueOamm5Cu = () => { return _returnValueKxsb5Vo };
		const _returnValuesnX3Bbn = [_arrayValueRWZ6vKc, _arrayValueD11shtu, _arrayValueAF8AuwW, _arrayValueOamm5Cu]
		const _getAllVerticesLJeM5J5 = () => { return _returnValuesnX3Bbn };
		const _graphKUwLqBn = {
			"getAllVertices": _getAllVerticesLJeM5J5
	}
		const _returnValuea5FlNoA = await articulationPoints(_graphKUwLqBn)
	});
})