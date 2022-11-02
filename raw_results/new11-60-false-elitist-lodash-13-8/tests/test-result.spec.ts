export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectJLcN2XP = undefined;
		const _lengthAoAYPy1 = 1.5879051993344682;
		const _pathvzz8JW7 = {
			"length": _lengthAoAYPy1
	}
		const _defaultValueQ2QHAi = {
		
	}
		const _returnValuecAXUce8 = await result(_objectJLcN2XP, _pathvzz8JW7, _defaultValueQ2QHAi)
	});

	it('test for result', async () => {
		const _objectaXnzra1 = undefined;
		const _pathzUvpYTd = 9.408680265854759;
		const _defaultValuejX51LLG = "T12M8ipjQY81XBl5LETeIQbQP";
		const _returnValueOT1e7UI = await result(_objectaXnzra1, _pathzUvpYTd, _defaultValuejX51LLG)
	});

	it('test for result', async () => {
		const _objectV4UqhG9 = undefined;
		const _pathktvjzm1 = []
		const _defaultValueR87lP3v = {
		
	}
		const _returnValueaEhyu1J = await result(_objectV4UqhG9, _pathktvjzm1, _defaultValueR87lP3v)
	});

	it('test for result', async () => {
		const _objectWsXiSH = undefined;
		const _arrayValueLpEW4LV = true;
		const _arrayValuevS5dteG = true;
		const _arrayValuexQunP4c = [_arrayValuevS5dteG]
		const _arrayValueoF8r2H = {
		
	}
		const _pathWrRAUlA = [_arrayValueLpEW4LV, _arrayValuexQunP4c, _arrayValueoF8r2H]
		const _arrayValueqs7ODCk = true;
		const _arrayValueVfxkwy = 2.760168657651217;
		const _arrayValueXzcOutp = undefined;
		const _arrayValueZmn7o2x = false;
		const _arrayValueXvUzRzT = null;
		const _arrayValueutq401 = false;
		const _arrayValuej93WKzb = "CKCRTDfvldigL18GUotq1YJxKEfdyvo9CxTDbSJUhFIiLB4BjQajglUiq";
		const _arrayValueFHvatq1 = [_arrayValueZmn7o2x, _arrayValueXvUzRzT, _arrayValueutq401, _arrayValuej93WKzb]
		const _arrayValuebRrVeGh = null;
		const _returnValuea7zlhp2 = [_arrayValueqs7ODCk, _arrayValueVfxkwy, _arrayValueXzcOutp, _arrayValueFHvatq1, _arrayValuebRrVeGh]
		const _defaultValuepMkuGSt = () => { return _returnValuea7zlhp2 };
		const _returnValuemJxMzR4 = await result(_objectWsXiSH, _pathWrRAUlA, _defaultValuepMkuGSt)
	});
})