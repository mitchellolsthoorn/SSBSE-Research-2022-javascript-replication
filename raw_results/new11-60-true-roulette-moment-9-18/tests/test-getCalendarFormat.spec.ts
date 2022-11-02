export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _returnValue9wm0UU = null;
		const _arrayValueJn97UvT = () => { return _returnValue9wm0UU };
		const _arrayValuewXkn80G = true;
		const _arrayValueMrk5SMY = 2.3398047991472577;
		const _arrayValueTkhJzQW = null;
		const _arrayValuejm6yWHm = [_arrayValueMrk5SMY, _arrayValueTkhJzQW]
		const _myMomentV5fFLCl = [_arrayValueJn97UvT, _arrayValuewXkn80G, _arrayValuejm6yWHm]
		const _nowvBXljYU = undefined;
		const _returnValueEJGvl7R = await getCalendarFormat(_myMomentV5fFLCl, _nowvBXljYU)
	});

	it('test for getCalendarFormat', async () => {
		const _returnValuePZGOuBK = "4Y9feZGlylQzRgdITBy77hPUyWeQynr7884LLkmxwApAEH8M5jhnh8Woy";
		const _diffg2purBt = () => { return _returnValuePZGOuBK };
		const _myMomentCsIWDdd = {
			"diff": _diffg2purBt
	}
		const _nowyDN95Qf = undefined;
		const _returnValueX5kJJJA = await getCalendarFormat(_myMomentCsIWDdd, _nowyDN95Qf)
	});

	it('test for getCalendarFormat', async () => {
		const _returnValueQKPFyKw = -2.699414517687039;
		const _diffRVwjhA9 = () => { return _returnValueQKPFyKw };
		const _myMomentYu942R = {
			"diff": _diffRVwjhA9
	}
		const _returnValuec2rAgOW = {
		
	}
		const _nowOg7mgOC = () => { return _returnValuec2rAgOW };
		const _returnValueiS9dYR = await getCalendarFormat(_myMomentYu942R, _nowOg7mgOC)
	});

	it('test for getCalendarFormat', async () => {
		const _arrayValueFH4XtrA = -8.359354436985972;
		const _returnValuerGUzt6i = [_arrayValueFH4XtrA]
		const _diffE9V7iws = () => { return _returnValuerGUzt6i };
		const _myMomentnfVYrtV = {
			"diff": _diffE9V7iws
	}
		const _nowokNJkiW = null;
		const _returnValuevw4MIKT = await getCalendarFormat(_myMomentnfVYrtV, _nowokNJkiW)
	});

	it('test for getCalendarFormat', async () => {
		const _returnValueNsCZkZS = -0.8022526328743105;
		const _diffSsuadO0 = () => { return _returnValueNsCZkZS };
		const _myMomentOGDwh0y = {
			"diff": _diffSsuadO0
	}
		const _nowUTfHRzu = null;
		const _returnValuecxmOMGR = await getCalendarFormat(_myMomentOGDwh0y, _nowUTfHRzu)
	});
})