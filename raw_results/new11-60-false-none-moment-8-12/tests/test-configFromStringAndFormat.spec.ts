export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _returnValueRI3JjH1 = []
		const _arrayValueSNcf5Mz = () => { return _returnValueRI3JjH1 };
		const _returnValueqZd33dz = -4.8762376216175;
		const _arrayValueDGeoT40 = () => { return _returnValueqZd33dz };
		const _configFRzAdOf = [_arrayValueSNcf5Mz, _arrayValueDGeoT40]
		const _returnValuecZ3tb2w = await configFromStringAndFormat(_configFRzAdOf)
	});
})