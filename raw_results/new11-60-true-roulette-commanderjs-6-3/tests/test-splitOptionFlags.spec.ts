export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuefJIp8zZ = {
		
	}
		const _arrayValuenVnBn9x = "PpbS4AYuKWs9GhJ9SV9bjD3X8IWBgTES0alyN9Inex9b7zVFDu5p5y";
		const _arrayValueMf6ML3j = []
		const _arrayValueuTelKvF = undefined;
		const _arrayValuegoDpgfw = [_arrayValuefJIp8zZ, _arrayValuenVnBn9x, _arrayValueMf6ML3j, _arrayValueuTelKvF]
		const _returnValueBlmAr0T = [_arrayValuegoDpgfw]
		const _flagsXECHilW = () => { return _returnValueBlmAr0T };
		const _returnValue9tS4fx = await splitOptionFlags(_flagsXECHilW)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueDFdH0M4 = -4.59284704461345;
		const _splityP1Y3YO = () => { return _returnValueDFdH0M4 };
		const _flagsaGBjVRO = {
			"split": _splityP1Y3YO
	}
		const _returnValueBU3SfUB = await splitOptionFlags(_flagsaGBjVRO)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueqWw0MKF = -3.699178708726939;
		const _arrayValueYWikfwb = false;
		const _returnValueo3BLHH4 = [_arrayValueqWw0MKF, _arrayValueYWikfwb]
		const _splitiU1Iim5 = () => { return _returnValueo3BLHH4 };
		const _flagsHV0xvrm = {
			"split": _splitiU1Iim5
	}
		const _returnValuew9tQyfi = await splitOptionFlags(_flagsHV0xvrm)
	});
})