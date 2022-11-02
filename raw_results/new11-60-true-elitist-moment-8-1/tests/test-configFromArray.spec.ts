export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const _returnValueLX9WMrc = "LGJmvqRdoD9YpLofdAVUwCeT4NvgwyPtL9g39c02Lup9lNfjHOpH17AKiJuAvEX";
		const _configrXPCFjD = () => { return _returnValueLX9WMrc };
		const _returnValueRZc93AM = await configFromArray(_configrXPCFjD)
	});

	it('test for configFromArray', async () => {
		const _returnValuehs6c6QS = 2.5729081731369092;
		const __dKOp7G88 = () => { return _returnValuehs6c6QS };
		const __wURQlyHk = {
		
	}
		const __adxEDD96 = {
		
	}
		const __dayOfYearGPiLNbd = -5.659396083524284;
		const __nextDayL7ShDWh = true;
		const __useUTCmZPNCnB = {
		
	}
		const __tzmiI6k1qs = -8.043180772233137;
		const _configfNhZZIW = {
			"_d": __dKOp7G88,
		"_w": __wURQlyHk,
		"_a": __adxEDD96,
		"_dayOfYear": __dayOfYearGPiLNbd,
		"_nextDay": __nextDayL7ShDWh,
		"_useUTC": __useUTCmZPNCnB,
		"_tzm": __tzmiI6k1qs
	}
		const _returnValueiVZyyBP = await configFromArray(_configfNhZZIW)
	});
})