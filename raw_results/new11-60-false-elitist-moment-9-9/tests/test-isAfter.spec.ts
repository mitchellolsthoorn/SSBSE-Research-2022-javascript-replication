export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _arrayValuenAQq3H = -1.627494889085387;
		const _arrayValueYh3Qga = false;
		const _arrayValuem45rcbG = undefined;
		const _arrayValueXRJIhln = undefined;
		const _arrayValuegrWlODl = null;
		const _arrayValuezX8OAFQ = [_arrayValuem45rcbG, _arrayValueXRJIhln, _arrayValuegrWlODl]
		const _inputvwjaK7 = [_arrayValuenAQq3H, _arrayValueYh3Qga, _arrayValuezX8OAFQ]
		const _unitsPrbwFiz = {
		
	}
		const _returnValueZNGwCy9 = await isAfter(_inputvwjaK7, _unitsPrbwFiz)
	});

	it('test for isAfter', async () => {
		const _input85Hzhu = null;
		const _unitsGWK8pl5 = {
		
	}
		const _returnValueRtfPxeN = await isAfter(_input85Hzhu, _unitsGWK8pl5)
	});
})