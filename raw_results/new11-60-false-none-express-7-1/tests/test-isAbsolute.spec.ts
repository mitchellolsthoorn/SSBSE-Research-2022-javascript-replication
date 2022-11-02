export {}
const {isAbsolute} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAbsolute', () => {
	it('test for isAbsolute', async () => {
		const _arrayValuepTfhtgj = null;
		const _arrayValuejIj3j7z = undefined;
		const _arrayValueeGYtlL = "hBRA7BW2foHzdePJ9SjyybDWD6UDS1wLB4Lvgv0mOuC476VRbKQfjONx7";
		const _pathMrjoEIT = [_arrayValuepTfhtgj, _arrayValuejIj3j7z, _arrayValueeGYtlL]
		const _returnValueqEvGG1S = await isAbsolute(_pathMrjoEIT)
	});
})