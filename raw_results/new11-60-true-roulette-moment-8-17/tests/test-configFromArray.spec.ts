export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const __dASGzuDe = {
		
	}
		const __wBAh76Zb = {
		
	}
		const __aTdHHsI = {
		
	}
		const __dayOfYearsLD2aQQ = -7.422545021278502;
		const __nextDayNR6Y2bP = false;
		const _arrayValuehWyOfpn = false;
		const _arrayValuePyAGZDO = undefined;
		const _arrayValueiaUoQIr = false;
		const __useUTCn0HLXzk = [_arrayValuehWyOfpn, _arrayValuePyAGZDO, _arrayValueiaUoQIr]
		const __tzmguzHSCx = true;
		const _config6i0j3n = {
			"_d": __dASGzuDe,
		"_w": __wBAh76Zb,
		"_a": __aTdHHsI,
		"_dayOfYear": __dayOfYearsLD2aQQ,
		"_nextDay": __nextDayNR6Y2bP,
		"_useUTC": __useUTCn0HLXzk,
		"_tzm": __tzmguzHSCx
	}
		const _returnValuePRkI60L = await configFromArray(_config6i0j3n)
	});

	it('test for configFromArray', async () => {
		const _arrayValueDMY87nU = 2.389161952206905;
		const _arrayValueq2oTDBV = {
		
	}
		const _returnValueyGujSHG = [_arrayValueDMY87nU, _arrayValueq2oTDBV]
		const _configB4vsrR6 = () => { return _returnValueyGujSHG };
		const _returnValuec0AQmZD = await configFromArray(_configB4vsrR6)
	});
})