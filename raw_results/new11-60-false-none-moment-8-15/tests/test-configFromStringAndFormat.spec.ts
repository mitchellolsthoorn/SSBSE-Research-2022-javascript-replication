export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _arrayValueYmE1TW1 = true;
		const _arrayValuedv8zheU = "kna9TXKHDuRKJMUqFP3aFonefDxS6EYsAJIm31x1hrH";
		const _arrayValuexTdkwBZ = [_arrayValuedv8zheU]
		const _configUsy5Loh = [_arrayValueYmE1TW1, _arrayValuexTdkwBZ]
		const _returnValueyrSX0fq = await configFromStringAndFormat(_configUsy5Loh)
	});
})