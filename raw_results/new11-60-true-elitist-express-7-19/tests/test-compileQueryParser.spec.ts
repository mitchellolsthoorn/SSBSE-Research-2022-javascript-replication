export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _arrayValueNYyPA8H = true;
		const _arrayValuePMCIgNr = {
		
	}
		const _valHBKbk7s = [_arrayValueNYyPA8H, _arrayValuePMCIgNr]
		const _returnValueuN0FyI = await compileQueryParser(_valHBKbk7s)
	});

	it('test for compileQueryParser', async () => {
		const _returnValueIbfyUNy = "SJc9nDpP3i8aIuCG95BgYFM85WREUpCDF5ScBo";
		const _valIkGTNis = () => { return _returnValueIbfyUNy };
		const _returnValuejDDlFMi = await compileQueryParser(_valIkGTNis)
	});
})