export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _returnValueO2cLouB = "P0T5b5o813GZiSqFVsoKUoHupqi96";
		const _inputPPPs8gl = () => { return _returnValueO2cLouB };
		const _arrayValueFC5GgFO = []
		const _arrayValueN4DgrWE = -2.205103902922401;
		const _arrayValuejNCDfRt = [_arrayValueN4DgrWE]
		const _arrayValueWRHHGU7 = [_arrayValueFC5GgFO, _arrayValuejNCDfRt]
		const _arrayValuebTdiqcl = null;
		const _arrayValueRx7mZD2 = "TvbuoSEeXYZpRCmTFgecIx1jCbCB35BOXZ0dFyAD3YqZXtkCUIXarTVc9DAXQ7LCli25s9bjp2I2SrYXFzPa";
		const _arrayValueS9gNLOc = null;
		const _arrayValueYaV0PDU = [_arrayValueRx7mZD2, _arrayValueS9gNLOc]
		const _unitsJuzevJw = [_arrayValueWRHHGU7, _arrayValuebTdiqcl, _arrayValueYaV0PDU]
		const _returnValuersbx7xu = await isSameOrAfter(_inputPPPs8gl, _unitsJuzevJw)
	});
})