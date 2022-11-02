export {}
const {isAbsolute} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");

describe('isAbsolute', () => {
	it('test for isAbsolute', async () => {
		const _arrayValuexKVfz49 = 6.455156191003702;
		const _arrayValuez64VcCf = null;
		const _returnValueIK9TGXA = undefined;
		const _arrayValuezv8ToGL = () => { return _returnValueIK9TGXA };
		const _arrayValueSGLgIXO = "fVUJWaMJlRJBt8VMaUgEPX8dB1lQvq6Tk9Wl0kg0lwt9K8nQADFBT9XolR96TEjxBOWAORqhLtJCfshzwaJkIzBgM4o5v5cm";
		const _arrayValueWnUee8P = -9.13319313030519;
		const _arrayValuejz5XgyV = [_arrayValueSGLgIXO, _arrayValueWnUee8P]
		const _arrayValueq9aFAIo = [_arrayValuejz5XgyV]
		const _returnValueAEignzi = [_arrayValuexKVfz49, _arrayValuez64VcCf, _arrayValuezv8ToGL, _arrayValueq9aFAIo]
		const _substringh084JVL = () => { return _returnValueAEignzi };
		const _pathA6RGFNj = {
			"substring": _substringh084JVL
	}
		const _returnValuevJXru0N = await isAbsolute(_pathA6RGFNj)
	});
})