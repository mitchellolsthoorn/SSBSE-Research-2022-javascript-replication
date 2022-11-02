export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromdcqt8Ez = "zn1bFAxVmmhee7FBgqP9Y4Hcp26J";
		const _arrayValuesom0yD = undefined;
		const _arrayValueHxtLEIE = 9.02120093207763;
		const _toRmwvXn = [_arrayValuesom0yD, _arrayValueHxtLEIE]
		const _arrayValuemWvnqn = 2.92829083016116;
		const _arrayValueFFNoTwi = undefined;
		const _arrayValuec6nd5HR = {
		
	}
		const _arrayValued9bkako = [_arrayValueFFNoTwi, _arrayValuec6nd5HR]
		const _unitsYiigzce = [_arrayValuemWvnqn, _arrayValued9bkako]
		const _inclusivityb8OewoL = false;
		const _returnValuekCNuMHO = await isBetween(_fromdcqt8Ez, _toRmwvXn, _unitsYiigzce, _inclusivityb8OewoL)
	});
})