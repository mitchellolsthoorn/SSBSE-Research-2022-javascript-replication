export {}
import unzip from "../../.syntest/instrumented/benchmark/top10npm/lodash/unzip.js";

describe('unzip', () => {
	it('test for unzip', async () => {
		const _arrayValueWjAqC1B = false;
		const _arrayValuej0rrmJM = undefined;
		const _arrayj0E59M9 = [_arrayValueWjAqC1B, _arrayValuej0rrmJM]
		const _returnValueJW226D = await unzip(_arrayj0E59M9)
	});

	it('test for unzip', async () => {
		const _arrayMn7tsgC = null;
		const _returnValueSDoIJf = await unzip(_arrayMn7tsgC)
	});

	it('test for unzip', async () => {
		const _arrayValueeXh64Oz = undefined;
		const _arrayValueL3QXBAK = [_arrayValueeXh64Oz]
		const _arrayLxKc2pD = [_arrayValueL3QXBAK]
		const _returnValueMlntg9M = await unzip(_arrayLxKc2pD)
	});
})