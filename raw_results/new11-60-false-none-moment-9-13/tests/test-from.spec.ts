export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValuehpKxZi = "1wGNAykUVT8W3u1B6LZ4gHQUa2bARTGQ2b8MJcTSl3MyFlTIgtTgQLWZLpql7tkGJfJ31YQHIvhCYeqj4WO";
		const _timeVrjdFA4 = [_arrayValuehpKxZi]
		const _arrayValueJBlI9Ca = -8.393858135180908;
		const _arrayValue650EWN = -7.679519108141453;
		const _returnValueSjo3wo7 = [_arrayValueJBlI9Ca, _arrayValue650EWN]
		const _returnValueYH29na4 = () => { return _returnValueSjo3wo7 };
		const _withoutSuffix0qiRki = () => { return _returnValueYH29na4 };
		const _returnValuextlV5nF = await from(_timeVrjdFA4, _withoutSuffix0qiRki)
	});
})