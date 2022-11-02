export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValuecFv9AE = null;
		const _momS5b8uKO = () => { return _returnValuecFv9AE };
		const _unittsryc6M = "KPBbXyvWGySK9";
		const _returnValuebgplENc = await get(_momS5b8uKO, _unittsryc6M)
	});
})