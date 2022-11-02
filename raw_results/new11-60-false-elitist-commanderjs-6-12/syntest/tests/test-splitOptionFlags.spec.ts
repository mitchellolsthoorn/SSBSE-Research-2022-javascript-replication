export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsL5IuZzg = null;
		const _returnValuecCp9Kse = await splitOptionFlags(_flagsL5IuZzg)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuexInMbH = false;
		const _splitzLyX9c3 = () => { return _returnValuexInMbH };
		const _flagsL96mhaE = {
			"split": _splitzLyX9c3
	}
		const _returnValueJAUyyq4 = await splitOptionFlags(_flagsL96mhaE)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueirPwcaQ = true;
		const _returnValueji3n4yH = [_arrayValueirPwcaQ]
		const _splittf6dg9b = () => { return _returnValueji3n4yH };
		const _flagsFoNZuZA = {
			"split": _splittf6dg9b
	}
		const _returnValueQwd7lw = await splitOptionFlags(_flagsFoNZuZA)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueKmYfFJi = "u3suOf";
		const _splityBpeK2w = () => { return _returnValueKmYfFJi };
		const _flagsRh00HpM = {
			"split": _splityBpeK2w
	}
		const _returnValueboHPOv8 = await splitOptionFlags(_flagsRh00HpM)
	});
})