export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValuePLAlJ4q = -4.227609969602892;
		const _isValiduEu2S1a = () => { return _returnValuePLAlJ4q };
		const _timeQddjKu0 = {
			"isValid": _isValiduEu2S1a
	}
		const _withoutSuffixMxhCVh2 = null;
		const _returnValueK2eNyo = await to(_timeQddjKu0, _withoutSuffixMxhCVh2)
	});
})