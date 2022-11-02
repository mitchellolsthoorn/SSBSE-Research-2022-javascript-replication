export {}
const {isAbsolute} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");

describe('isAbsolute', () => {
	it('test for isAbsolute', async () => {
		const _arrayValueIoVX1lt = "Ge9KK3mUBd4XPNIgxsSm42rrjzP9F3Wep68eX2N1kllBBHkACFwmhqo9I2izJxer";
		const _arrayValueevQ1gTg = true;
		const _arrayValue8uHsMw = undefined;
		const _arrayValuepMBxxNt = null;
		const _returnValuerGxOBqC = [_arrayValueIoVX1lt, _arrayValueevQ1gTg, _arrayValue8uHsMw, _arrayValuepMBxxNt]
		const _substringOnQhSK0 = () => { return _returnValuerGxOBqC };
		const _pathSc84AOg = {
			"substring": _substringOnQhSK0
	}
		const _returnValuepS0Kh2e = await isAbsolute(_pathSc84AOg)
	});
})