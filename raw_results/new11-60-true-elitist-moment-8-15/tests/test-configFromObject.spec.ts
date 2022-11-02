export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputyuvxFXp = "RhvfVoOuIIDCcty5eETATsNLpe6kHPMxKfbia1N8QXpizfT5nRL8nGM3RZj3Eflysg8hBStAaaHGQN";
		const _formatY0jI6X = true;
		const _returnValueNAR0uYP = "3DRR1J1HMMmhqkgbBbIv2Boeqsmaff28JC8o";
		const _localejEbgguG = () => { return _returnValueNAR0uYP };
		const _isUTCoYbANoc = null;
		const _arrayValueW5RTmUD = undefined;
		const _returnValuegOoLbWn = 3.4366440542085304;
		const _arrayValuedZZUiQY = () => { return _returnValuegOoLbWn };
		const _arrayValueH7NDrfJ = {
		
	}
		const _arrayValueVli6qmg = [_arrayValueW5RTmUD, _arrayValuedZZUiQY, _arrayValueH7NDrfJ]
		const _arrayValueQ4I5pP = {
		
	}
		const _arrayValueBh8pWUk = false;
		const _strict4f78FE = [_arrayValueVli6qmg, _arrayValueQ4I5pP, _arrayValueBh8pWUk]
		const __iLuZW8Aw = 7.0877202732109055;
		const __fiUtP2sJ = undefined;
		const __locale4DxXys = "Zo3FcQ2jWo7ENXkmPYI2KpNd67lzLJQRyILZbgmnyDavgRgUvV4AeRMVH1";
		const __isUTCacq2fkn = undefined;
		const __strictKOAGa4v = true;
		const _confighTaEn4 = {
			"input": _inputyuvxFXp,
		"format": _formatY0jI6X,
		"locale": _localejEbgguG,
		"isUTC": _isUTCoYbANoc,
		"strict": _strict4f78FE,
		"_i": __iLuZW8Aw,
		"_f": __fiUtP2sJ,
		"_locale": __locale4DxXys,
		"_isUTC": __isUTCacq2fkn,
		"_strict": __strictKOAGa4v
	}
		const _returnValuefZkZRN = await configFromObject(_confighTaEn4)
	});
})