export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const __milliseconds39PLrT = 4.221646614963364;
		const __daysdF18YkL = false;
		const _arrayValuezGjqFNZ = "OxasEjIJjvrbfv0oI6oztKXcdR2YQ1H";
		const _arrayValueyoJ2In0 = "hWWBchU4N9Zp9EKLTKoX2NCzgvTTvQtzItaqNuElpzpzwaIoiL2x1lk3";
		const _returnValueSs9cx4s = "bAwMEk8JncF0JwZGehUjDtTVxrIX3kkhSlYp1dhH1Cebv8xzFC3bVdWeY39oQFJ5kTe47V5Ep4X8hvEFjnj";
		const _arrayValueHwO8uoS = () => { return _returnValueSs9cx4s };
		const _arrayValueUVrmIAB = null;
		const _arrayValueQaBfSUp = [_arrayValueHwO8uoS, _arrayValueUVrmIAB]
		const __monthsMJmG5s5 = [_arrayValuezGjqFNZ, _arrayValueyoJ2In0, _arrayValueQaBfSUp]
		const _returnValuevo3lLZp = true;
		const _isValidoyO6zPj = () => { return _returnValuevo3lLZp };
		const _timeTIoiGGi = {
			"_milliseconds": __milliseconds39PLrT,
		"_days": __daysdF18YkL,
		"_months": __monthsMJmG5s5,
		"isValid": _isValidoyO6zPj
	}
		const _withoutSuffixtbfOjnG = null;
		const _returnValueoDGQOWx = await to(_timeTIoiGGi, _withoutSuffixtbfOjnG)
	});
})