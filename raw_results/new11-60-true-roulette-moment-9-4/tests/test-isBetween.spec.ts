export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromMtP1bKj = "J4helbLqFB4sBctwAzavlngbuL5DJrhjeiJue9xXc9itE4U3qgiG3h95EUbdTvX";
		const _toUzQamwy = undefined;
		const _unitsqP1trL = null;
		const _inclusivitydS2NVE = {
		
	}
		const _returnValueSSmDJXJ = await isBetween(_fromMtP1bKj, _toUzQamwy, _unitsqP1trL, _inclusivitydS2NVE)
	});
})