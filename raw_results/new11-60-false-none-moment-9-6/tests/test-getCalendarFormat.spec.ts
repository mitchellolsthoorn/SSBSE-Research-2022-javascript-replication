export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _myMomentZoGShSv = []
		const _nowaWlthBg = "HHpAxcUih2VtP0vCW3M9tXBaI1zguZTKrZsN97bdf9Kpl72vdhsyq3TKVBtZuIws66EZjNzxJzzzLWo3aY9VyIya0IGRxRtGw";
		const _returnValuelF3Itiv = await getCalendarFormat(_myMomentZoGShSv, _nowaWlthBg)
	});
})