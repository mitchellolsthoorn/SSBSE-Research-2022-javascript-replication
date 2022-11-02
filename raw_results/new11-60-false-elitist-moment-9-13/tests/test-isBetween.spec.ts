export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromJlF0jVk = true;
		const _toO15a3v = undefined;
		const _unitsSYFgM9 = false;
		const _inclusivityZmIYEgT = true;
		const _returnValueu69Uh5i = await isBetween(_fromJlF0jVk, _toO15a3v, _unitsSYFgM9, _inclusivityZmIYEgT)
	});
})