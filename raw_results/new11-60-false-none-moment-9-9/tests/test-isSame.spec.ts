export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputr3nzRWw = "rqoBoM6vIMIBGTeoteJ0uWQL";
		const _arrayValueM7g5J5u = "296w3rlO8PpwgHIFYwsJPw7dB4chnYJMKgvo28cCejPDqwgyYkOHCkS933JDE7MtFNJvzLs1h1opcCWM5ohBFYeoYt";
		const _arrayValuevgRdsz = null;
		const _unitsh5KnZno = [_arrayValueM7g5J5u, _arrayValuevgRdsz]
		const _returnValueHbwlVFz = await isSame(_inputr3nzRWw, _unitsh5KnZno)
	});

	it('test for isSame', async () => {
		const _inputM3dDVCW = null;
		const _unitsIJQVAg2 = "ZEVgyjPF46fW589FAfrz17pA9bbgzQHRH4RD5omi7eOx6rYmwCobRFrVdVcEfLGimh84luhMhmAOjNreAiidWXgwaznBsjYHc";
		const _returnValue93hfdk = await isSame(_inputM3dDVCW, _unitsIJQVAg2)
	});
})