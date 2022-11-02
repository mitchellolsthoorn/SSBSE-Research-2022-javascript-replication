export {}
const {setCharset} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('setCharset', () => {
	it('test for setCharset', async () => {
		const _typeE4awgMK = "B32kpEPyBWbNHPpombbEcvpdXmmxagIBElIT2hB7F9ZPciNIdlcWfr6vKHuvtz8BPdv2CjrfqIPI867Q1bajMJIAmtd6PNj";
		const _charsetr6668IY = undefined;
		const _returnValueIhP1WLU = await setCharset(_typeE4awgMK, _charsetr6668IY)
	});

	it('test for setCharset', async () => {
		const _typexZT8ne7 = "thpMJkNC5HtrtcV9NaFJ6AyydQbO6HUEiSPWAaPi9J3fsId2kSt2Nq3i8kmWaRUOunVW369YRd51lL9BeVYD7QQ";
		const _returnValueMyw8eMU = undefined;
		const _charsetqSEhV8A = () => { return _returnValueMyw8eMU };
		const _returnValuet2qLdvS = await setCharset(_typexZT8ne7, _charsetqSEhV8A)
	});
})