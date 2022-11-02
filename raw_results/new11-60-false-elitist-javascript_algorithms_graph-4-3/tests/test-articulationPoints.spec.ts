export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValueCqFdsA7 = undefined;
		const _arrayValuehQAaUtT = undefined;
		const _arrayValuewzRaUrz = null;
		const _returnValuetypcydE = undefined;
		const _arrayValuecOZb1il = () => { return _returnValuetypcydE };
		const _arrayValueD1gLAQr = [_arrayValuehQAaUtT, _arrayValuewzRaUrz, _arrayValuecOZb1il]
		const _returnValuemysI6fD = [_arrayValueCqFdsA7, _arrayValueD1gLAQr]
		const _getAllVerticesve6v8Rq = () => { return _returnValuemysI6fD };
		const _graphocx1jp5 = {
			"getAllVertices": _getAllVerticesve6v8Rq
	}
		const _returnValueDVRS44D = await articulationPoints(_graphocx1jp5)
	});
})