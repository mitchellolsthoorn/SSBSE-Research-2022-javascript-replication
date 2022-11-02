export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _arrayValuem8ePGN = "Dj6yvfsXYDA6CxKReTl8ChwHaamoBz68YJrPAbn2qGT8BatglsGYBMX3LPhKSVYXgM53sdwAAygDkROMfrJGgqeCCLPL";
		const _myMomentI8BdpI0 = [_arrayValuem8ePGN]
		const _nowIaVUbTK = 2.598920475301414;
		const _returnValueDOpVhGf = await getCalendarFormat(_myMomentI8BdpI0, _nowIaVUbTK)
	});

	it('test for getCalendarFormat', async () => {
		const _returnValueNBkG0VU = {
		
	}
		const _diffFKM2Oe = () => { return _returnValueNBkG0VU };
		const _myMomentEHVFJMd = {
			"diff": _diffFKM2Oe
	}
		const _nowNCaHDNP = null;
		const _returnValues5EY6jm = await getCalendarFormat(_myMomentEHVFJMd, _nowNCaHDNP)
	});

	it('test for getCalendarFormat', async () => {
		const _returnValueok5ib3P = -7.718789855691604;
		const _diffYI8EvWz = () => { return _returnValueok5ib3P };
		const _myMomentWp5idcv = {
			"diff": _diffYI8EvWz
	}
		const _nowqZ5oVRN = false;
		const _returnValueGOB2H2s = await getCalendarFormat(_myMomentWp5idcv, _nowqZ5oVRN)
	});

	it('test for getCalendarFormat', async () => {
		const _returnValueKGzFFsW = -2.4685988565993835;
		const _diffjEaHqxs = () => { return _returnValueKGzFFsW };
		const _myMomentA3zulqc = {
			"diff": _diffjEaHqxs
	}
		const _nowRDk1LRj = undefined;
		const _returnValuezpZbmD = await getCalendarFormat(_myMomentA3zulqc, _nowRDk1LRj)
	});

	it('test for getCalendarFormat', async () => {
		const _returnValueB8nnlmL = -0.1058754874636243;
		const _diffAUWa9eA = () => { return _returnValueB8nnlmL };
		const _myMomentKld7BHl = {
			"diff": _diffAUWa9eA
	}
		const _nowWxUabuk = {
		
	}
		const _returnValuedH4XPr9 = await getCalendarFormat(_myMomentKld7BHl, _nowWxUabuk)
	});
})