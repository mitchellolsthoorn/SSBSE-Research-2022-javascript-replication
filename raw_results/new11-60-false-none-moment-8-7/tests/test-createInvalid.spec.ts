export {}
import {createInvalid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createInvalid', () => {
	it('test for createInvalid', async () => {
		const _arrayValuey7cZ9eG = "bUOaIDlcDSON7DVi9fj4vdUbmmQmMDFpqc4vUHYf24MOH9Q9rebIa9yP5b9GOqHLfClOMowXtfdlyStkr2CW16";
		const _flagsxA0DKCA = [_arrayValuey7cZ9eG]
		const _returnValue696tld = await createInvalid(_flagsxA0DKCA)
	});
})