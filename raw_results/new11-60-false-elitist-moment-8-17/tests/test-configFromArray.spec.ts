export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const __dMgM8Z1D = {
		
	}
		const _returnValueR5cpQvY = "nMTA8XIfwkRRoVORcq6xYVV3KBm7KMex6pUEX";
		const __wV2qTPC = () => { return _returnValueR5cpQvY };
		const __adt8Nmva = {
		
	}
		const __dayOfYearqZkZ8lA = -8.985131592747395;
		const __nextDayLEVCglj = true;
		const __useUTCMG7yAoc = "RXczzyQ";
		const __tzmSLjKme1 = 4.364238475515096;
		const _configVVUtiQF = {
			"_d": __dMgM8Z1D,
		"_w": __wV2qTPC,
		"_a": __adt8Nmva,
		"_dayOfYear": __dayOfYearqZkZ8lA,
		"_nextDay": __nextDayLEVCglj,
		"_useUTC": __useUTCMG7yAoc,
		"_tzm": __tzmSLjKme1
	}
		const _returnValuet6Gtr5I = await configFromArray(_configVVUtiQF)
	});

	it('test for configFromArray', async () => {
		const _configViPAU5f = false;
		const _returnValueNwdDOon = await configFromArray(_configViPAU5f)
	});
})