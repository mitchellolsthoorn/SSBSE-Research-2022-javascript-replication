export {}
import {addSubtract} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/add-subtract.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('addSubtract', () => {
	it('test for addSubtract', async () => {
		const _returnValuewJOJ2p = -2.735633256049562;
		const _arrayValuez6PzKk4 = () => { return _returnValuewJOJ2p };
		const _arrayValueoQvCKtT = [_arrayValuez6PzKk4]
		const _arrayValueUV6Umdq = 6.961518680219665;
		const _momd2RbRz = [_arrayValueoQvCKtT, _arrayValueUV6Umdq]
		const _durationm6FSmoM = true;
		const _returnValueciQHyXD = 8.50242446631901;
		const _isAddingpz4PjaG = () => { return _returnValueciQHyXD };
		const _updateOffsetklNQGHI = false;
		const _returnValueIS8dVxe = await addSubtract(_momd2RbRz, _durationm6FSmoM, _isAddingpz4PjaG, _updateOffsetklNQGHI)
	});
})