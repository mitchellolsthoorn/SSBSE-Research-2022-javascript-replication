export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsEjO2dwU = "6KNnnhtG9VgLz2W8bldjvMPb5cspQB77VbDDu7t3cy77m8UCbPW9txS9f4SXqvwWUpbM44bTBLrgWF";
		const _returnValueeCb70py = await splitOptionFlags(_flagsEjO2dwU)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueQpQ6b0c = "TH6LRrOUtNnOmwcuDMgyCSa7eNMuYwWT7InGqzkjUj";
		const _splitdaRtiI8 = () => { return _returnValueQpQ6b0c };
		const _flagsnVHf8D7 = {
			"split": _splitdaRtiI8
	}
		const _returnValueGJng96 = await splitOptionFlags(_flagsnVHf8D7)
	});
})