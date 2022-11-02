export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueLlOHvs1 = null;
		const _splitjnGS1ny = () => { return _returnValueLlOHvs1 };
		const _flags6pNEqU = {
			"split": _splitjnGS1ny
	}
		const _returnValueU1xYoKa = await splitOptionFlags(_flags6pNEqU)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueceOyzWe = true;
		const _splitUmQ1Ia6 = () => { return _returnValueceOyzWe };
		const _flagsf3mMD6 = {
			"split": _splitUmQ1Ia6
	}
		const _returnValueVgiS5CK = await splitOptionFlags(_flagsf3mMD6)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsTcSY2bG = "kvrlrkUTN";
		const _returnValuezs5zZLe = await splitOptionFlags(_flagsTcSY2bG)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueIuWREAO = "7TIj9Uy1msCzofkP3c6dXADw8isPcS2B5NHHjCX";
		const _splitGjbCy7S = () => { return _returnValueIuWREAO };
		const _flagshBxyZPz = {
			"split": _splitGjbCy7S
	}
		const _returnValueoUHStq8 = await splitOptionFlags(_flagshBxyZPz)
	});
})