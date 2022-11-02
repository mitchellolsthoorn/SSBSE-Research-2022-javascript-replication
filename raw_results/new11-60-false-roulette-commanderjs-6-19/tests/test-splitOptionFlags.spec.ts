export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsjrBZr5Q = false;
		const _returnValuewClXDyc = await splitOptionFlags(_flagsjrBZr5Q)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuenUCq24Y = true;
		const _splitdVtOevZ = () => { return _returnValuenUCq24Y };
		const _flagsna7Kf3l = {
			"split": _splitdVtOevZ
	}
		const _returnValuePT4vCvn = await splitOptionFlags(_flagsna7Kf3l)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsRTIgEg = "inyhFxWS1i5psCYOFhVePxlylh7R8gxVnePUPNn4y";
		const _returnValuebGLCSzv = await splitOptionFlags(_flagsRTIgEg)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueUOgMoY8 = "pvfsk2s2Q1KfnCjny2LGaW65a7hAv5HNI2NF0R52AG3Dw32";
		const _splitPaNPZEY = () => { return _returnValueUOgMoY8 };
		const _flagsEQ3yQT = {
			"split": _splitPaNPZEY
	}
		const _returnValueV0Vjiu = await splitOptionFlags(_flagsEQ3yQT)
	});
})