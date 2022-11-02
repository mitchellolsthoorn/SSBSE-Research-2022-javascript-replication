export {}
const {init} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/middleware/init.js");

describe('init', () => {
	it('test for init', async () => {
		const _arrayValuedS7lvy = true;
		const _returnValueYr0mqS = [_arrayValuedS7lvy]
		const _appRLv1y8T = () => { return _returnValueYr0mqS };
		const _returnValuev3mGGyc = await init(_appRLv1y8T)
	});
})