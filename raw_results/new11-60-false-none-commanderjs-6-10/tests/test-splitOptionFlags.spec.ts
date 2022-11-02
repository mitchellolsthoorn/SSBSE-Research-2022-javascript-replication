export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsTzP3qwM = false;
		const _returnValueRKtN5N2 = await splitOptionFlags(_flagsTzP3qwM)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsHDJr4gL = "W1mNjY8Hz4yQhYD4voqOmwLpj3EwqoD6eNoymHW3TZE9BTMpkW5RbDxXqczulL1ZJDTF5p9LuO9zBJenZWt26";
		const _returnValue7F5cti = await splitOptionFlags(_flagsHDJr4gL)
	});
})