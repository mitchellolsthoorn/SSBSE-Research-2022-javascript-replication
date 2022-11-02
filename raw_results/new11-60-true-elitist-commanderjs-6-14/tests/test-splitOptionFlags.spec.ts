export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsLrx6QJC = undefined;
		const _returnValueMpXFCl = await splitOptionFlags(_flagsLrx6QJC)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueZzELXNQ = "hYCxkxJmdxXRHWJWXiiffiBaR";
		const _splitIEKQeRu = () => { return _returnValueZzELXNQ };
		const _flagsJIHCWj6 = {
			"split": _splitIEKQeRu
	}
		const _returnValuezM6548 = await splitOptionFlags(_flagsJIHCWj6)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueqU2MkgF = false;
		const _returnValueLtSHc7z = () => { return _returnValueqU2MkgF };
		const _splitEUBMgNt = () => { return _returnValueLtSHc7z };
		const _flagsBCDAyrj = {
			"split": _splitEUBMgNt
	}
		const _returnValueorKEpk2 = await splitOptionFlags(_flagsBCDAyrj)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueM2EDpSG = []
		const _splituuqSHXE = () => { return _returnValueM2EDpSG };
		const _flagsaSVIwbt = {
			"split": _splituuqSHXE
	}
		const _returnValueazHoj6j = await splitOptionFlags(_flagsaSVIwbt)
	});
})