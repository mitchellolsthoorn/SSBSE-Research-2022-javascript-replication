export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValueLRe3dzY = "ybaxMYwCvppfFLgXlLrEUjHgLE5bzCsnKalb9asa2EcNSx";
		const _myLUXEXA = [_arrayValueLRe3dzY]
		const _returnValueKCcWv2M = await isValid(_myLUXEXA)
	});
})