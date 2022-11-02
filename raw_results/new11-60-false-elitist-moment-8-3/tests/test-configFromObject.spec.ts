export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputb4RttbF = {
		
	}
		const _formatUb1OUT6 = "I4crEifLhTGhpfnMutKaZqqV1qgiK0MmDa9f9iyzxu8j53NoprZj7NbyW2TGV3Q";
		const _localeKZnjffW = 4.2483582277372385;
		const _isUTCIv2IGPy = {
		
	}
		const _strictavvVxxR = "ODeFvApcYGBiz4IrbbuE9OR3ned85IYQJ5T8rK3csUAT95ZvUI8fk9eZxbeqEZ9ENbgn1gkmcDtxnpOs";
		const __ivtC97k3 = {
		
	}
		const _arrayValueGt8rh2 = {
		
	}
		const _returnValueJ8ww9vX = [_arrayValueGt8rh2]
		const _returnValueMuW8ifn = () => { return _returnValueJ8ww9vX };
		const __fg0LwLkB = () => { return _returnValueMuW8ifn };
		const __localeNHHJsYv = null;
		const __isUTCYa58IR0 = null;
		const __strictXFhBrXL = undefined;
		const _configPZJOCXm = {
			"input": _inputb4RttbF,
		"format": _formatUb1OUT6,
		"locale": _localeKZnjffW,
		"isUTC": _isUTCIv2IGPy,
		"strict": _strictavvVxxR,
		"_i": __ivtC97k3,
		"_f": __fg0LwLkB,
		"_locale": __localeNHHJsYv,
		"_isUTC": __isUTCYa58IR0,
		"_strict": __strictXFhBrXL
	}
		const _returnValueXfc2XU4 = await configFromObject(_configPZJOCXm)
	});
})