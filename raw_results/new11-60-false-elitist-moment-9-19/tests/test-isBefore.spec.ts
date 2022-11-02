export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _returnValueJKPpGd4 = "ddBJ8C9pQXzBWOP89zakfNkob2OjrWudYlKjKYJ8Gi1q";
		const _inputEaOUBWg = () => { return _returnValueJKPpGd4 };
		const _units1aQDsf = {
		
	}
		const _returnValueohHSXE2 = await isBefore(_inputEaOUBWg, _units1aQDsf)
	});
})