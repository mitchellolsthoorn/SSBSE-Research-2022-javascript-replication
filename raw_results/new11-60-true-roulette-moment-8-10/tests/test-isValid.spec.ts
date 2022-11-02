export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const __dFTZ2i5 = {
		
	}
		const __offsetNFNWvAb = null;
		const _mnKzWDkG = {
			"_d": __dFTZ2i5,
		"_offset": __offsetNFNWvAb
	}
		const _returnValueC1L9PEz = await isValid(_mnKzWDkG)
	});
})