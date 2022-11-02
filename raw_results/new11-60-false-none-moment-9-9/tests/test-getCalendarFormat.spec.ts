export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _myMomentEvvYtDx = "KdnT16gIH1i71sRANKP6JJLyLNoyljYiRPELaRibmLtu4Fp3CbFh56KP95rK3sZKcEj0x52LtIfpW7YPSMe58RMV8aech9ag";
		const _nowCABlVg = {
		
	}
		const _returnValueTemDtEF = await getCalendarFormat(_myMomentEvvYtDx, _nowCABlVg)
	});
})