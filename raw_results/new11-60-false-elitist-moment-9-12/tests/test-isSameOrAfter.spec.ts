export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputpFyuppd = 6.101075567855084;
		const _unitspBkRBlN = "Aaybg4tRIbisiv4e9Ofp6P9xf5esrNfLKglxmfhEK6c0xscmJ6HqgjxEP5o7tnsGUwLDbleOam34X3lNTAv5vDjMc5hwu";
		const _returnValueZyAMoXd = await isSameOrAfter(_inputpFyuppd, _unitspBkRBlN)
	});
})