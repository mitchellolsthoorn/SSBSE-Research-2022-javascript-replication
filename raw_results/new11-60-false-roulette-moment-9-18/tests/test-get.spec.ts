export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const __isUTCCDjpS4J = "JoMjpfzNISFHbO2DZas6JhNq1qgxnOti2A4ghom3XvJu4wy9607";
		const _returnValueAUzWWx = "HIqtDyg02cyaD2KAaR7SEODzbDogoc1DfU8v67cbglM1UqjgPr";
		const _isValidCkmEAlU = () => { return _returnValueAUzWWx };
		const _momga3h6fd = {
			"_isUTC": __isUTCCDjpS4J,
		"isValid": _isValidCkmEAlU
	}
		const _unitD6Af4UT = "S6Gju7L7F2ENqiagcrMHOD9wiQMpNGr7crIJIX";
		const _returnValueh9iREeC = await get(_momga3h6fd, _unitD6Af4UT)
	});
})