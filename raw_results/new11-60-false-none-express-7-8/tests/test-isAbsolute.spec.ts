export {}
const {isAbsolute} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAbsolute', () => {
	it('test for isAbsolute', async () => {
		const _arrayValuefU2zLIC = 9.576342937444075;
		const _pathVa6qfKm = [_arrayValuefU2zLIC]
		const _returnValueaaD4Jw6 = await isAbsolute(_pathVa6qfKm)
	});
})