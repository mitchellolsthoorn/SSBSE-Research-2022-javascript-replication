export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _returnValueH1ikqm = undefined;
		const _mWkjXEko = () => { return _returnValueH1ikqm };
		const _lengthWcU636Z = 2.1887932783709054;
		const _cellIndicesMVJyQSN = {
			"length": _lengthWcU636Z
	}
		const _returnValuegM42ITl = await getCellAtIndex(_mWkjXEko, _cellIndicesMVJyQSN)
	});

	it('test for getCellAtIndex', async () => {
		const _msVn2k2t = "6DgssQDHrF17TNeAWh4vJBN44qoj6fT";
		const _arrayValueQSxh6mZ = "YSiRdD3TVZ8yLDlJp8Fjs";
		const _arrayValueO3XKVcA = null;
		const _cellIndicesUjKrLPG = [_arrayValueQSxh6mZ, _arrayValueO3XKVcA]
		const _returnValuemIotvs2 = await getCellAtIndex(_msVn2k2t, _cellIndicesUjKrLPG)
	});
})