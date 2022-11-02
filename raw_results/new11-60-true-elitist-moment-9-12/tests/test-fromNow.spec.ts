export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _returnValuedCWcDj = "i1PkxJxHUGH2iVkTsdOhHAjuhvvHw7Hw7ucRj1N2Vjyrh22mD";
		const _withoutSuffixnpeqNuO = () => { return _returnValuedCWcDj };
		const _returnValueZPqVGG = await fromNow(_withoutSuffixnpeqNuO)
	});
})