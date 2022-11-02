export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValuem0jDdvg = null;
		const _isValidoOnyLjx = () => { return _returnValuem0jDdvg };
		const _timeGeAYlk = {
			"isValid": _isValidoOnyLjx
	}
		const _arrayValueDXxZGVv = null;
		const _withoutSuffixKQuZ1ZO = [_arrayValueDXxZGVv]
		const _returnValueL7kcWIQ = await to(_timeGeAYlk, _withoutSuffixKQuZ1ZO)
	});
})