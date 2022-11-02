export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValue3q3fdD = true;
		const _flagsCaV8ZeP = () => { return _returnValue3q3fdD };
		const _returnValuegfuRmY = await splitOptionFlags(_flagsCaV8ZeP)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueXv526Q3 = true;
		const _splitqPDx1VY = () => { return _returnValueXv526Q3 };
		const _flagszeRAY1d = {
			"split": _splitqPDx1VY
	}
		const _returnValuebZXUrq1 = await splitOptionFlags(_flagszeRAY1d)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsxza5cj = "KIc";
		const _returnValueimYj6t = await splitOptionFlags(_flagsxza5cj)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueERjDvEP = "qNcII3AvpHxKNwyDFybevN7U2A9Bzdsz6hrUqyJohJVlsczb7ewupV6vTJAH3Qh5oKbY0SgFI5uEIq";
		const _splitn7a7FsE = () => { return _returnValueERjDvEP };
		const _flagsdlPWIm = {
			"split": _splitn7a7FsE
	}
		const _returnValuelOCEQtM = await splitOptionFlags(_flagsdlPWIm)
	});
})