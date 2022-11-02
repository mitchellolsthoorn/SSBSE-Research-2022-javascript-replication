export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valxdEtTJP = "Tlng9jgLedCmhkwkk5MD7VvmY8gE6dgrXJxeEI4f9vDX036M7sKeMNq7cKWwebKDgmWeIlm";
		const _returnValuesushtZ1 = await compileETag(_valxdEtTJP)
	});

	it('test for compileETag', async () => {
		const _returnValuebWwzU2 = undefined;
		const _valwolZDo = () => { return _returnValuebWwzU2 };
		const _returnValueuYUOhWe = await compileETag(_valwolZDo)
	});
})