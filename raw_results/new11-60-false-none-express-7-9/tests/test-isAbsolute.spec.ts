export {}
const {isAbsolute} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAbsolute', () => {
	it('test for isAbsolute', async () => {
		const _returnValueHqbb6uJ = undefined;
		const _pathb9mat8s = () => { return _returnValueHqbb6uJ };
		const _returnValueSExNvO = await isAbsolute(_pathb9mat8s)
	});
})