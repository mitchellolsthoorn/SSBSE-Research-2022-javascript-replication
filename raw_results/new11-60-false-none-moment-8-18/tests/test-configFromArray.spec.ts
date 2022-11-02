export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const _arrayValuebVojAWq = null;
		const _arrayValueRvTQo60 = false;
		const _arrayValuetijP74I = null;
		const _returnValueB72kxxf = [_arrayValuebVojAWq, _arrayValueRvTQo60, _arrayValuetijP74I]
		const _configgKlDx6 = () => { return _returnValueB72kxxf };
		const _returnValuepXoHTHV = await configFromArray(_configgKlDx6)
	});
})