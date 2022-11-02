export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueOxea2Q5 = false;
		const _splitf9wROMN = () => { return _returnValueOxea2Q5 };
		const _flagsGMVJFw4 = {
			"split": _splitf9wROMN
	}
		const _returnValuea3w4rZt = await splitOptionFlags(_flagsGMVJFw4)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuekKGSG62 = "fwFnPizg6IMhfEa1ehDKlwaBI2P9qyhM2DrqFM0htLQPtlIjVWySBwXgsihC7OEAzlleiaHjmJ";
		const _splitOmMc6lV = () => { return _returnValuekKGSG62 };
		const _flagszLQ56fJ = {
			"split": _splitOmMc6lV
	}
		const _returnValueaYcGNs6 = await splitOptionFlags(_flagszLQ56fJ)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsmLl2nv8 = "iJrnBW1WMBPuaK71gqxZAkzjD5mC4HLpCdHQOU4wOOoKqMTJb5xm";
		const _returnValueV942PsW = await splitOptionFlags(_flagsmLl2nv8)
	});
})