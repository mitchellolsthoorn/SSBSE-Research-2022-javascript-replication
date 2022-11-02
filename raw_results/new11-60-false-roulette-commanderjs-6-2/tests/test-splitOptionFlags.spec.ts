export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValueXqnjLAW = -7.4366267953149885;
		const _arrayValueaO5YZC6 = null;
		const _flagsplsTtOf = [_arrayValueXqnjLAW, _arrayValueaO5YZC6]
		const _returnValueE1g4wt4 = await splitOptionFlags(_flagsplsTtOf)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsNhBhOn = "pl77p5ISRuGu4SKXplV4J6R0IfI2k2hiMWAtV9";
		const _returnValueUBq01b = await splitOptionFlags(_flagsNhBhOn)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueoDjVD7z = "ER8FxYAPJsrH7PUoeHa6xThH8YeftqUDG2g2TfFhVItrScGYOYA2gcg4OIoxPqYkXYYwhWkXImOxRct1TGvOMPoKJWdL5REbZfY";
		const _splitvgacLVc = () => { return _returnValueoDjVD7z };
		const _flagszv3ObH2 = {
			"split": _splitvgacLVc
	}
		const _returnValueHNpoZCB = await splitOptionFlags(_flagszv3ObH2)
	});
})