export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputycXHtLW = "SQLcKiWCBltQhV7UySRXGZ3PwYRAiDw6hQ5HeW6OKbL0KFiNcsYh";
		const _unitsfRAc2j8 = "Mwzp8RvEAYDwTvXn15GvufR3ybsLArM2Fxna4";
		const _returnValue9AgiBf = await isSameOrAfter(_inputycXHtLW, _unitsfRAc2j8)
	});
})