export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsiTJWsm6 = "AcDEvUFBFviWMxpyIBYHnB0zqmqIRvXXsuonCMP7OY5luLXgX3V8RUETjJMmakTNMedRf5AeWzukBH";
		const _returnValueOtsb5I = await splitOptionFlags(_flagsiTJWsm6)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueqRcf89 = "HmRo2hIJe2bTKKmXVMxkz6xt1XRPynBuSFefHNWuE5bir3MgBPv1qHzSmSOqItoqpv";
		const _splitoIcDMAM = () => { return _returnValueqRcf89 };
		const _flagsC18lHB = {
			"split": _splitoIcDMAM
	}
		const _returnValueA3DN2L = await splitOptionFlags(_flagsC18lHB)
	});
})