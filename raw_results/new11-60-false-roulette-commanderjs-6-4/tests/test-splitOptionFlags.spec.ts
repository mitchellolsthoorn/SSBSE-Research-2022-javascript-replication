export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsB4qrvVD = null;
		const _returnValue0y2Wyg = await splitOptionFlags(_flagsB4qrvVD)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsVpHnoOc = "mjq7aGffhMtSgUtqSFd6j6dOjU8ratS7ysFy1JBXqG3s6";
		const _returnValuev8AdUxx = await splitOptionFlags(_flagsVpHnoOc)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueIp6GFzs = -6.134093910417722;
		const _arrayValueGaAWw9C = null;
		const _arrayValuewXFmcZA = "CScjybUsEI612ayzxVEgtUTuznXAC8S97g0QxbtCV8yl3nHTQ5mVSCCF8iN4YbIi7U5hMTGzU7chbuX";
		const _returnValuegChjwLf = [_arrayValueIp6GFzs, _arrayValueGaAWw9C, _arrayValuewXFmcZA]
		const _split7y61Bk = () => { return _returnValuegChjwLf };
		const _flagsAgCa0sh = {
			"split": _split7y61Bk
	}
		const _returnValuehhiXkRe = await splitOptionFlags(_flagsAgCa0sh)
	});
})