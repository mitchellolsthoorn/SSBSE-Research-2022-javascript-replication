export {}
import {createInvalid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createInvalid', () => {
	it('test for createInvalid', async () => {
		const _arrayValueIdyYRQp = undefined;
		const _arrayValueMwL6vPr = false;
		const _arrayValueCEFsvJ = [_arrayValueIdyYRQp, _arrayValueMwL6vPr]
		const _arrayValuejMaeV9W = [_arrayValueCEFsvJ]
		const _arrayValueaXEWPH = true;
		const _flagsr3DB9Rk = [_arrayValuejMaeV9W, _arrayValueaXEWPH]
		const _returnValuebaHnG8Y = await createInvalid(_flagsr3DB9Rk)
	});
})