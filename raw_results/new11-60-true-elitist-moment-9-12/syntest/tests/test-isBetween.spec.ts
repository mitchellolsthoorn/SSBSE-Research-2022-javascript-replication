export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _returnValuebjcudi2 = true;
		const _fromxqxJwvX = () => { return _returnValuebjcudi2 };
		const _torM7n9r = false;
		const _unitsG6Zn0JP = false;
		const _inclusivityhgrD504 = {
		
	}
		const _returnValueTYIJphL = await isBetween(_fromxqxJwvX, _torM7n9r, _unitsG6Zn0JP, _inclusivityhgrD504)
	});
})