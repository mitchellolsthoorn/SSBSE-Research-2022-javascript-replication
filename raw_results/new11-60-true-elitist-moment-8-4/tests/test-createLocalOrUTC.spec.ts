export {}
import {createLocalOrUTC} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-anything.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createLocalOrUTC', () => {
	it('test for createLocalOrUTC', async () => {
		const _lengthGUSUtci = 5.643463234293639;
		const _inputeaRcCrn = {
			"length": _lengthGUSUtci
	}
		const _formatSZCQBVC = false;
		const _localepJKpFt = true;
		const _strictA2fvFy8 = false;
		const _isUTCM0C1KIA = -6.073296712860877;
		const _returnValuepScpuKq = await createLocalOrUTC(_inputeaRcCrn, _formatSZCQBVC, _localepJKpFt, _strictA2fvFy8, _isUTCM0C1KIA)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputAFzPFy = "OEXrg61yN6FSol1b9ni0WMKdkFNRtRiPoPDttWIIqBuhHoi8mpWulDiUQrSo4y21lsv7UsziqVy8LOK5Yl6lE5uhL5lkhBJ81";
		const _formatfkPQIMN = true;
		const _localeRru6UhH = true;
		const _strictlKqVkzF = false;
		const _isUTCfuEke4V = "mrsUsx0CRbcbntF6rP12bH36H1b74vd5mG2wPU9sIDIc9RXjryE8NrFvMEehpgPnDwhBzgLR38zimgGnzD";
		const _returnValuesRtM5CR = await createLocalOrUTC(_inputAFzPFy, _formatfkPQIMN, _localeRru6UhH, _strictlKqVkzF, _isUTCfuEke4V)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputWXyiODa = null;
		const _formatDhzRXwM = true;
		const _localeVupW1v = false;
		const _strict2dsdxc = true;
		const _isUTCCpNyjX1 = {
		
	}
		const _returnValueOP5jLKW = await createLocalOrUTC(_inputWXyiODa, _formatDhzRXwM, _localeVupW1v, _strict2dsdxc, _isUTCCpNyjX1)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputi7ScEyb = undefined;
		const _formatNGtIbVM = true;
		const _localeuAjtIat = true;
		const _strictfuuL8IA = true;
		const _isUTCdyWLBt5 = undefined;
		const _returnValueTSK7AtO = await createLocalOrUTC(_inputi7ScEyb, _formatNGtIbVM, _localeuAjtIat, _strictfuuL8IA, _isUTCdyWLBt5)
	});

	it('test for createLocalOrUTC', async () => {
		const _arrayValueIwX7Em4 = undefined;
		const _arrayValueo5Y3nW = "JWw1x3UgsrmF";
		const _inputxw8opgF = [_arrayValueIwX7Em4, _arrayValueo5Y3nW]
		const _formatcOAFoJl = false;
		const _localeejm8xHt = false;
		const _strictpeQkdnm = false;
		const _returnValuemjGfjdw = null;
		const _returnValueNyEzINX = () => { return _returnValuemjGfjdw };
		const _isUTCQvgOaA2 = () => { return _returnValueNyEzINX };
		const _returnValuevTzuU4S = await createLocalOrUTC(_inputxw8opgF, _formatcOAFoJl, _localeejm8xHt, _strictpeQkdnm, _isUTCQvgOaA2)
	});
})