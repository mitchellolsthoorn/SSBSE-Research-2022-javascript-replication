export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _constructorfaNxj3L = undefined;
		const _objectTxtWUgh = {
			"constructor": _constructorfaNxj3L
	}
		const _returnValuelpdtLXb = "fuz6Loh5TcnAs6EQYZkdvOeOed0n40NR7b6o5mDlU";
		const _iterateeOkZ5TvM = () => { return _returnValuelpdtLXb };
		const _accumulatorsnFl4yD = {
		
	}
		const _returnValuesQCvVte = await transform(_objectTxtWUgh, _iterateeOkZ5TvM, _accumulatorsnFl4yD)
	});

	it('test for transform', async () => {
		const _constructorDEDwqo = {
		
	}
		const _objectWhy0NGQ = {
			"constructor": _constructorDEDwqo
	}
		const _returnValuejEMp3pW = -1.5723158970186137;
		const _iterateeFQJ5Fu7 = () => { return _returnValuejEMp3pW };
		const _accumulatorIk04Dbo = undefined;
		const _returnValuePsvl1kt = await transform(_objectWhy0NGQ, _iterateeFQJ5Fu7, _accumulatorIk04Dbo)
	});

	it('test for transform', async () => {
		const _arrayValueacuaD2 = true;
		const _arrayValuesyLIadZ = {
		
	}
		const _arrayValueiEVdLfn = "oIxMAVPmu9d4mfJ0E1fEuUsYDdOr4ymtGRoMQZT7lH2ogqyG6wcjqPH1McJbRbSyC8SkJW";
		const _objectaI90qR = [_arrayValueacuaD2, _arrayValuesyLIadZ, _arrayValueiEVdLfn]
		const _returnValueK6aCrzT = "hkpRiQ9vZ9AQMqsDjybsoTMKuL6xkksMJIiIDT3BJNyQEyFmbjmNhEH";
		const _returnValueO4ScVJ = () => { return _returnValueK6aCrzT };
		const _iterateerbyfsq0 = () => { return _returnValueO4ScVJ };
		const _accumulatoryHXY1Ir = undefined;
		const _returnValueBOndImW = await transform(_objectaI90qR, _iterateerbyfsq0, _accumulatoryHXY1Ir)
	});

	it('test for transform', async () => {
		const _returnValueWqVBa7E = "EnMUYl1zVLz2uaVE45oR3DikoxWbklxQ0KtV";
		const _constructornETQTzT = () => { return _returnValueWqVBa7E };
		const _objectDOxw9yW = {
			"constructor": _constructornETQTzT
	}
		const _iterateepF5Csep = null;
		const _accumulatorFDGov5 = null;
		const _returnValuehQ3VY7 = await transform(_objectDOxw9yW, _iterateepF5Csep, _accumulatorFDGov5)
	});
})