export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueDsLlcPZ = "PKRdGYmAQl8xnxmiOXYGhXkgBiXWATd8shxEwIUjuhnDXQJ028JK32YnBvHEAOMAuLVsk2om";
		const _flagsDg26FOh = () => { return _returnValueDsLlcPZ };
		const _returnValuexfB7LV4 = await splitOptionFlags(_flagsDg26FOh)
	});

	it('test for splitOptionFlags', async () => {
		const _flagskG3xR5 = "8h3sQcC3zfOX4d0ZmQxQ4cZYRK5YP9eoPM6zr7ufqCx3f4KTjTtJrLNk89jmPsSHmBpA4lcgLTBGCRfwmxHjghohaEWQu";
		const _returnValuepSKL6Z = await splitOptionFlags(_flagskG3xR5)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueDAr6ugI = "foAD31FOWdSbXhpAPsSmwBeXgLJzvOw6ugTlmX14oQ";
		const _arrayValuewI06bJt = null;
		const _returnValuetRpSSxp = [_arrayValueDAr6ugI, _arrayValuewI06bJt]
		const _splitWoPx8gv = () => { return _returnValuetRpSSxp };
		const _flagsUTAAhxC = {
			"split": _splitWoPx8gv
	}
		const _returnValueLIZ3CtX = await splitOptionFlags(_flagsUTAAhxC)
	});
})