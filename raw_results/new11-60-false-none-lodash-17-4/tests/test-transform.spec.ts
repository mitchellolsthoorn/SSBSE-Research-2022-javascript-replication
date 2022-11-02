export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _objectso7NYA9 = 8.432999982692031;
		const _returnValueAclOTy = false;
		const _iterateeVqjow8C = () => { return _returnValueAclOTy };
		const _accumulatorSJANEs = "HxWfl6poj1XZrBr7pA0Tn3DJOcNuwO5ZJu9Y9gv";
		const _returnValueAD40kqc = await transform(_objectso7NYA9, _iterateeVqjow8C, _accumulatorSJANEs)
	});

	it('test for transform', async () => {
		const _objectlthheQK = 6.796871587180174;
		const _iterateeMTRZ5No = {
		
	}
		const _accumulatorJHtUEUB = undefined;
		const _returnValueoCT4qd1 = await transform(_objectlthheQK, _iterateeMTRZ5No, _accumulatorJHtUEUB)
	});

	it('test for transform', async () => {
		const _objectGoOSioO = {
		
	}
		const _arrayValuetz1Jaq4 = 0.7837134643774384;
		const _arrayValueQOoq1Tn = 6.122479419587165;
		const _arrayValuemnIUJL = undefined;
		const _arrayValueoK4Jisd = null;
		const _iterateeTm237et = [_arrayValuetz1Jaq4, _arrayValueQOoq1Tn, _arrayValuemnIUJL, _arrayValueoK4Jisd]
		const _accumulatorPL1mfYt = undefined;
		const _returnValueEDokK7p = await transform(_objectGoOSioO, _iterateeTm237et, _accumulatorPL1mfYt)
	});

	it('test for transform', async () => {
		const _arrayValuewr4kuN = null;
		const _arrayValueiFB3lG6 = {
		
	}
		const _objectTQJCO6i = [_arrayValuewr4kuN, _arrayValueiFB3lG6]
		const _iterateeDuYYAdh = {
		
	}
		const _accumulatort29ySpE = null;
		const _returnValueF5N9YU = await transform(_objectTQJCO6i, _iterateeDuYYAdh, _accumulatort29ySpE)
	});
})