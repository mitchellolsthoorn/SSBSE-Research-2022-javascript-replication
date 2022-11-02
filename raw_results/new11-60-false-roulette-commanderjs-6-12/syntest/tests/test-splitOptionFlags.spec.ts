export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValueXkd1Qf0 = "zJIArLkjuu6bMzwQXQEwjiCnrJDRhGVPFZ12mzbfRBoaIIRkGADf1CoUlPXI8cDE7BNfGLMOSJb17YYHatjiACp";
		const _arrayValueZzYMyUj = null;
		const _returnValueZr20YDS = [_arrayValueXkd1Qf0, _arrayValueZzYMyUj]
		const _splitsu0TY3n = () => { return _returnValueZr20YDS };
		const _flagsAolrwAM = {
			"split": _splitsu0TY3n
	}
		const _returnValueegW54K0 = await splitOptionFlags(_flagsAolrwAM)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsGeCvB6o = "rtpc3JAHa7kbmUlDsBSxMmNGqoBokocSIEB7Fn4V7YDEiAWDQJdQYWiVD8dhj75JmXYp1yDtL";
		const _returnValuesWY7t0D = await splitOptionFlags(_flagsGeCvB6o)
	});
})