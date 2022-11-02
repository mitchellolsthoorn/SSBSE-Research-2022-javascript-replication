export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _mVZavEY5 = "pS1PT5YLbxdsdGQeASUNV6xXF4QrrPE6rNNE6ODlNHEUa9tyK9rbpkQ9Hmubt2wiiRkxF5X4NLxIMGnuBE3wyCy2jKT";
		const _returnValueaIopjI0 = await isValid(_mVZavEY5)
	});

	it('test for isValid', async () => {
		const _returnValueyI8BEik = 4.835243844974135;
		const _mPmbqArl = () => { return _returnValueyI8BEik };
		const _returnValuepVYdlT = await isValid(_mPmbqArl)
	});
})