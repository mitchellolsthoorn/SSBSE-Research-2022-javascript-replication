export {}
const {isAbsolute} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAbsolute', () => {
	it('test for isAbsolute', async () => {
		const _arrayValueXDiBYp = undefined;
		const _arrayValuezUn5mUL = undefined;
		const _arrayValueWVRRusH = null;
		const _pathsqrkHZR = [_arrayValueXDiBYp, _arrayValuezUn5mUL, _arrayValueWVRRusH]
		const _returnValuei0VM5Ry = await isAbsolute(_pathsqrkHZR)
	});
})