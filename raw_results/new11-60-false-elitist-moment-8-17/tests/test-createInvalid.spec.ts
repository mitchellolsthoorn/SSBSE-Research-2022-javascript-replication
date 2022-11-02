export {}
import {createInvalid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createInvalid', () => {
	it('test for createInvalid', async () => {
		const _arrayValueqPHsEiz = null;
		const _returnValueFD3TW5F = "PGDH7bVxS";
		const _returnValueMu1XfYV = () => { return _returnValueFD3TW5F };
		const _arrayValuexM5A5Nj = () => { return _returnValueMu1XfYV };
		const _arrayValueWte4bZ4 = false;
		const _flagsdQR1EVI = [_arrayValueqPHsEiz, _arrayValuexM5A5Nj, _arrayValueWte4bZ4]
		const _returnValueV1Hbttn = await createInvalid(_flagsdQR1EVI)
	});
})