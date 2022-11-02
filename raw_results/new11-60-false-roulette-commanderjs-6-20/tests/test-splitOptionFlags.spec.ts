export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValueF1DrulV = false;
		const _arrayValuegvDSmgk = undefined;
		const _arrayValueFh9f3lz = false;
		const _arrayValueP8hmpbS = "mGH9TYrn41BsubOhhqufxV5l";
		const _arrayValueFtdwZGl = "siIsHPSEq4jXMX6cH97peh8WRqblh3o85Z";
		const _arrayValueMLGeItq = [_arrayValueFtdwZGl]
		const _arrayValueRLCMhsE = [_arrayValueFh9f3lz, _arrayValueP8hmpbS, _arrayValueMLGeItq]
		const _arrayValuefMhjItN = "Oz542uOGfZsTaXOLnMzeDFxodELWFRyjOFyEf3JE5PxB04cF1ILuU756KcaqVQ6OqcOP";
		const _arrayValueCpzMRvH = "9mGCnkF8eWbMjUNS7dh8no4YUzqfTxPjSf7qcYdlTinUYzlHFzOaJqlBwNK";
		const _arrayValuetVvHCc3 = [_arrayValuefMhjItN, _arrayValueCpzMRvH]
		const _arrayValueow3XjWF = [_arrayValueRLCMhsE, _arrayValuetVvHCc3]
		const _arrayValueEjsa8Ax = {
		
	}
		const _arrayValueR4V31Uw = [_arrayValuegvDSmgk, _arrayValueow3XjWF, _arrayValueEjsa8Ax]
		const _arrayValuelUMFvFD = "iRX9x5muA";
		const _flagsON7Btui = [_arrayValueF1DrulV, _arrayValueR4V31Uw, _arrayValuelUMFvFD]
		const _returnValueK8J83zL = await splitOptionFlags(_flagsON7Btui)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsZRufr9c = "hXJ";
		const _returnValue7vmP24 = await splitOptionFlags(_flagsZRufr9c)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueOn1rHTP = "9k7";
		const _split86LBeD = () => { return _returnValueOn1rHTP };
		const _flagsIkX0713 = {
			"split": _split86LBeD
	}
		const _returnValueQJ9XTXv = await splitOptionFlags(_flagsIkX0713)
	});
})