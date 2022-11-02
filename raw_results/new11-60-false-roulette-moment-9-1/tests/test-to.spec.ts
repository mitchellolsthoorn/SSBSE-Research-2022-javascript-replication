export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _timeofoUr8E = "xF4lCAJNbKDBNEzsyup2txvtCFU6Ag3kA4h6GPH1QxKmPQki3C7QHusblVD1TRF8d1GapJKsGJ";
		const _withoutSuffix23SrNm = undefined;
		const _returnValueL5EfZSE = await to(_timeofoUr8E, _withoutSuffix23SrNm)
	});
})