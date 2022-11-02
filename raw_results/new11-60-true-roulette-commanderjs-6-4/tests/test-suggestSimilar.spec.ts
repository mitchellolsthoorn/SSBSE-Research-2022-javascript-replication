export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValueCB1umrr = undefined;
		const _startsWithGRtEVRE = () => { return _returnValueCB1umrr };
		const _returnValueM75xVEI = null;
		const _slice4MzmY1 = () => { return _returnValueM75xVEI };
		const _lengthl2bLnx4 = -7.013074617154701;
		const _wordM0annr = {
			"startsWith": _startsWithGRtEVRE,
		"slice": _slice4MzmY1,
		"length": _lengthl2bLnx4
	}
		const _returnValuevT072ZF = true;
		const _candidatese0cT6kJ = () => { return _returnValuevT072ZF };
		const _returnValueIkIxRh9 = await suggestSimilar(_wordM0annr, _candidatese0cT6kJ)
	});

	it('test for suggestSimilar', async () => {
		const _wordKxD5eSl = "j14zzXNPIPhLcH78AQ68Zhda57KwSpcf7pbjUU8yTB3XPGEZ2eWq3inBgKb4PChEMH642eLMdfE";
		const _arrayValuer4fCsK = "0SunvbCo2tRNck9GfJp3pAt7eiBbmLue6q93OKrvNDY8LmgqKzj40uynVVrfiDt4lujwznhdgpCuRTlvaIC";
		const _candidatesnMDIdCr = [_arrayValuer4fCsK]
		const _returnValue8chgfu = await suggestSimilar(_wordKxD5eSl, _candidatesnMDIdCr)
	});

	it('test for suggestSimilar', async () => {
		const _wordc87kwux = "hLfD3sJeDShtoeJqBTOv9v2mEZLf1LGWERBXmvtTsFByh18e3Fs3mbmoQr292VbPqvN5DNlFCwFU8T8UKkXCas";
		const _candidatesUgkCHT5 = "sedCvTvUO1vLWdAYqXxPkqTAMdtenO8xhfeSU6wAQuWwyinuJK9QulkjXz1YkKFqYTaOzLTrD3";
		const _returnValueFuRcT3w = await suggestSimilar(_wordc87kwux, _candidatesUgkCHT5)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuexAfwWOA = "W7B1Wkba3H1Bgvfx8zIKyMPczRlmFplwk2U5ZHlB4edrvuDtVi6EHQjvf4JhWKeHFSnN3fg";
		const _startsWithkGm7753 = () => { return _returnValuexAfwWOA };
		const _arrayValueoraBEG7 = true;
		const _arrayValuehEIbIIJ = [_arrayValueoraBEG7]
		const _returnValueqITfAnP = [_arrayValuehEIbIIJ]
		const _sliceMTafW03 = () => { return _returnValueqITfAnP };
		const _lengthtgWM2Zk = -5.458889621158494;
		const _wordKVgITV0 = {
			"startsWith": _startsWithkGm7753,
		"slice": _sliceMTafW03,
		"length": _lengthtgWM2Zk
	}
		const _arrayValuerj5UOoJ = 9.029135130603965;
		const _candidatesXYx4H5l = [_arrayValuerj5UOoJ]
		const _returnValuesqAc980 = await suggestSimilar(_wordKVgITV0, _candidatesXYx4H5l)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueAovMmHi = null;
		const _startsWithYSaRpAK = () => { return _returnValueAovMmHi };
		const _returnValueSherDmD = undefined;
		const _sliceraOGoyp = () => { return _returnValueSherDmD };
		const _lengthPGQzaDu = 3.607213065320412;
		const _wordIK2e3G6 = {
			"startsWith": _startsWithYSaRpAK,
		"slice": _sliceraOGoyp,
		"length": _lengthPGQzaDu
	}
		const _arrayValueeQCwhlp = 5.815325247485028;
		const _arrayValueheOInfz = false;
		const _arrayValuet8ckPjt = undefined;
		const _arrayValueW0a08sz = false;
		const _arrayValuenZVNmfQ = 4.776754621351651;
		const _arrayValuej6HrtnU = [_arrayValueheOInfz, _arrayValuet8ckPjt, _arrayValueW0a08sz, _arrayValuenZVNmfQ]
		const _arrayValuesLxOEyl = [_arrayValueeQCwhlp, _arrayValuej6HrtnU]
		const _candidatesu3Dy0qF = [_arrayValuesLxOEyl]
		const _returnValuezpdgIcu = await suggestSimilar(_wordIK2e3G6, _candidatesu3Dy0qF)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueuDCI86F = -9.652439173404773;
		const _startsWithjAxGfae = () => { return _returnValueuDCI86F };
		const _returnValuewZIITnZ = "gp";
		const _slicecrdqjvZ = () => { return _returnValuewZIITnZ };
		const _length2EHq6a = 2.3562105803258717;
		const _wordPsfRmuD = {
			"startsWith": _startsWithjAxGfae,
		"slice": _slicecrdqjvZ,
		"length": _length2EHq6a
	}
		const _arrayValueBqIboNx = "8bGvhEKbLMJNBsyZOsLoAjGo2YD0rn5ymdynFnWkSICYb6RWcGKvt9mdRtsqmfEFFH4I4A";
		const _candidatesXvH2eh5 = [_arrayValueBqIboNx]
		const _returnValueoKT8Kb9 = await suggestSimilar(_wordPsfRmuD, _candidatesXvH2eh5)
	});
})