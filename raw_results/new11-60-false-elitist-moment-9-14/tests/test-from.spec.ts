export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValueuz6Kegy = "2LhkD69UpsRQKAsDY9wHuhydkxxl424odXSYiwe4jsNWb7XypTIJMneilAIGTHoPrTXW9AAlHTb8Tm9yNgU";
		const _arrayValue4ntBul = {
		
	}
		const _arrayValueloh3Hwu = []
		const _returnValueLcboWo = [_arrayValueuz6Kegy, _arrayValue4ntBul, _arrayValueloh3Hwu]
		const _returnValuen6oZOPh = () => { return _returnValueLcboWo };
		const _isValiduNvJvw = () => { return _returnValuen6oZOPh };
		const _timeO45pGJ = {
			"isValid": _isValiduNvJvw
	}
		const _withoutSuffixVelGalp = false;
		const _returnValueCjIPqSz = await from(_timeO45pGJ, _withoutSuffixVelGalp)
	});
})