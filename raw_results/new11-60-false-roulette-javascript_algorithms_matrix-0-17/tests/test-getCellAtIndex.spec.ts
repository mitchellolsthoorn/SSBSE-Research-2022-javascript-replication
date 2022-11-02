export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _mAR21Fmx = "aOW7fDrcLEo6psvFvLmtA93FO3pKGed6onggWlL5vIqyUhSNHr0SMmkTU8CztaFhjauIGtG7hWq4KzxYm";
		const _returnValueorv0Ei0 = true;
		const _cellIndicesL0t6n9T = () => { return _returnValueorv0Ei0 };
		const _returnValuetE0EdMQ = await getCellAtIndex(_mAR21Fmx, _cellIndicesL0t6n9T)
	});

	it('test for getCellAtIndex', async () => {
		const _arrayValueS1fi8LB = "w8zwBn1VQWepOz";
		const _arrayValueOE9Ygmu = [_arrayValueS1fi8LB]
		const _arrayValueoXgIoZ5 = "P4cILNRw87jFqKdocRJWp83Rf84Ea0JShn21ysCQuextPIchWtX9pi8lmOpjvVRBQxE79THvz2xfm";
		const _arrayValuewFx1ErZ = undefined;
		const _arrayValueAg2z4qY = [_arrayValueOE9Ygmu, _arrayValueoXgIoZ5, _arrayValuewFx1ErZ]
		const _arrayValueTCD5hte = -9.991945325694171;
		const _mwxHmQq4 = [_arrayValueAg2z4qY, _arrayValueTCD5hte]
		const _cellIndicesGLCB8Ga = "I4MIChbWqVm44gb9fGlliHm7VAPhVLXULe7o7nzn7OZcSpf9bt9KQ85BRqbeD1XDwXRai67ZHPCnYsHl";
		const _returnValueGkYRJV = await getCellAtIndex(_mwxHmQq4, _cellIndicesGLCB8Ga)
	});
})