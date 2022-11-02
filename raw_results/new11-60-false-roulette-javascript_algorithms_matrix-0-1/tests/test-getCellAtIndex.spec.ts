export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _arrayValueUwlD8bA = false;
		const _arrayValueAYR3Aaz = false;
		const _arrayValuemPl7u5F = "fkQEupCneJvxpfXczeM8lKB53ikEltdYaE63kAMNzC7wc";
		const _arrayValuePiDmwVE = "YygkYAXs9ueoTTjSnzV3ScbaFEDpsnYQGAPjhQnF";
		const _arrayValueYihVwd1 = [_arrayValuemPl7u5F, _arrayValuePiDmwVE]
		const _returnValuerKDD6Jg = [_arrayValueUwlD8bA, _arrayValueAYR3Aaz, _arrayValueYihVwd1]
		const _mnW5CeMk = () => { return _returnValuerKDD6Jg };
		const _cellIndicesPz2B5WU = "1UNWX5pIX6GgshYHjGoqvm7uMIub523dpkQWcvWiBj4l7696qxH3icf1k";
		const _returnValueKpbqk2W = await getCellAtIndex(_mnW5CeMk, _cellIndicesPz2B5WU)
	});

	it('test for getCellAtIndex', async () => {
		const _mT5fByUz = "7ND7tzhNxu9WxGfAkzJ3TUgN5dBdjrC5WCCmVPzaGbapo";
		const _arrayValueNDkFWo = undefined;
		const _arrayValueH2RKE3h = "6EZJ";
		const _arrayValueSjBbD7p = "A3FJh3eLMk";
		const _arrayValuewKFCpyG = [_arrayValueNDkFWo, _arrayValueH2RKE3h, _arrayValueSjBbD7p]
		const _returnValuefaFHra9 = [_arrayValuewKFCpyG]
		const _cellIndices063bFD = () => { return _returnValuefaFHra9 };
		const _returnValuerbXpZ67 = await getCellAtIndex(_mT5fByUz, _cellIndices063bFD)
	});
})