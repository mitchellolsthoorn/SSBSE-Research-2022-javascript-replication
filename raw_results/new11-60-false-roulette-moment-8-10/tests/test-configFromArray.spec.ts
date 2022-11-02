export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const __dvgt1VtG = {
		
	}
		const __wZRSukBb = {
		
	}
		const __az3oWHnL = undefined;
		const __dayOfYearx7Rga3p = -0.96681250657684;
		const __nextDayepcb48W = false;
		const __useUTCGPvIdN3 = "H7";
		const __tzmypS1PQ = {
		
	}
		const _configeKyTnCy = {
			"_d": __dvgt1VtG,
		"_w": __wZRSukBb,
		"_a": __az3oWHnL,
		"_dayOfYear": __dayOfYearx7Rga3p,
		"_nextDay": __nextDayepcb48W,
		"_useUTC": __useUTCGPvIdN3,
		"_tzm": __tzmypS1PQ
	}
		const _returnValuexNoGP3 = await configFromArray(_configeKyTnCy)
	});

	it('test for configFromArray', async () => {
		const _arrayValueVZtPLV4 = "nWm5aSll5LuqCyWbeCncny8mS1lOoI9I3CL32KCLetNMfugWoOKsxl4G1mjHvjDNTkJFJaEnOF7BY9mm63SM9J3F";
		const _arrayValueunDk3oy = {
		
	}
		const _arrayValuenX4ngj8 = null;
		const _arrayValueeUUktpH = null;
		const _arrayValuexWdNQC = [_arrayValueunDk3oy, _arrayValuenX4ngj8, _arrayValueeUUktpH]
		const _returnValueYo4HrdX = [_arrayValueVZtPLV4, _arrayValuexWdNQC]
		const _configCFk0N7T = () => { return _returnValueYo4HrdX };
		const _returnValue4TpsdV = await configFromArray(_configCFk0N7T)
	});
})