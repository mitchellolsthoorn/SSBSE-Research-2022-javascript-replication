export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _objectFAxLs91 = "P8byc5et";
		const _pathsvEU0w6 = {
		
	}
		const _returnValueRJfn4wj = await hasPath(_objectFAxLs91, _pathsvEU0w6)
	});

	it('test for hasPath', async () => {
		const _objectsqc0lnR = null;
		const _arrayValueJ9Tk2De = true;
		const _arrayValuetDb5thK = {
		
	}
		const _arrayValueVvwUfHa = false;
		const _arrayValuehBtuMNd = null;
		const _arrayValueTaNtlKL = [_arrayValueVvwUfHa, _arrayValuehBtuMNd]
		const _returnValuewz8dDY = []
		const _arrayValuetGBdm5z = () => { return _returnValuewz8dDY };
		const _pathO3txGm = [_arrayValueJ9Tk2De, _arrayValuetDb5thK, _arrayValueTaNtlKL, _arrayValuetGBdm5z]
		const _returnValue99kGZE = await hasPath(_objectsqc0lnR, _pathO3txGm)
	});

	it('test for hasPath', async () => {
		const _arrayValueqH3FMKm = -2.6993972967642303;
		const _objectxKSo8v3 = [_arrayValueqH3FMKm]
		const _pathu3coub3 = "rjYUryLS7oOY9uB1AZP9CtXQ8Chou668TKmuE5aOrN1PeMUt6zUqqH7p8B6EfvzkBpODHLvHrJu0su2s";
		const _returnValuel3aRkAk = await hasPath(_objectxKSo8v3, _pathu3coub3)
	});

	it('test for hasPath', async () => {
		const _objectmfCIi0l = null;
		const _arrayValuek1b1Lt = "lefaliTOOMnnunQoyASkSzHGr1iMQagGE";
		const _pathP1jHJGL = [_arrayValuek1b1Lt]
		const _returnValueSjOH9I = await hasPath(_objectmfCIi0l, _pathP1jHJGL)
	});

	it('test for hasPath', async () => {
		const _arrayValueI53CZLu = undefined;
		const _arrayValueslTFN4g = "E9syYGyCCFRWsjkYCvmOvTqytnjfBAK9ZsNx";
		const _arrayValueReT1LX8 = undefined;
		const _returnValueLyD6JXQ = [_arrayValueI53CZLu, _arrayValueslTFN4g, _arrayValueReT1LX8]
		const _arrayValuePXJV5sn = () => { return _returnValueLyD6JXQ };
		const _arrayValue1Viqfs = null;
		const _arrayValueaAg0cF = undefined;
		const _objectA0FNVcf = [_arrayValuePXJV5sn, _arrayValue1Viqfs, _arrayValueaAg0cF]
		const _pathuJG9yJI = "2";
		const _returnValueUxdcAK7 = await hasPath(_objectA0FNVcf, _pathuJG9yJI)
	});
})