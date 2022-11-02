export {}
import {format} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('format', () => {
	it('test for format', async () => {
		const _inputStringoxKhTn1 = "uiIoRsEuF4hTNgVeCyoyIpDOfCLVPaKbZulsFFFWpzsqlmlUPzJVANaFhHLo63nKfOmX1CQHJQONocizo4ft5t8P6fddgcGdyNa";
		const _returnValueEqO0n33 = await format(_inputStringoxKhTn1)
	});

	it('test for format', async () => {
		const _inputStringtPiOzfD = undefined;
		const _returnValuebe7aqQ = await format(_inputStringtPiOzfD)
	});
})