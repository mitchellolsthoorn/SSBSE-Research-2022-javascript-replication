export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueJALTynu = "0DJg3rGYiuP7s6q25Ud8LfUxQaAMW2wNWJGMdW41y";
		const _isValidwx4DU2y = () => { return _returnValueJALTynu };
		const _timeud3fXa = {
			"isValid": _isValidwx4DU2y
	}
		const _arrayValuen1WW6D = "F4KWy4M2EUDzmgJo7IYrtS5wka";
		const _withoutSuffixMermKjY = [_arrayValuen1WW6D]
		const _returnValuexTpFT2a = await to(_timeud3fXa, _withoutSuffixMermKjY)
	});
})