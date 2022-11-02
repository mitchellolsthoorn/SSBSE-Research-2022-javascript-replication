export {}
import {copyConfig} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/constructor.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('copyConfig', () => {
	it('test for copyConfig', async () => {
		const _arrayValuekOYhOfj = undefined;
		const _arrayValuewA7mnR8 = null;
		const _arrayValueLM5XuyL = "FNmVgNvw";
		const _toxxgi2NZ = [_arrayValuekOYhOfj, _arrayValuewA7mnR8, _arrayValueLM5XuyL]
		const _fromsm1LYC = null;
		const _returnValuewolH1sP = await copyConfig(_toxxgi2NZ, _fromsm1LYC)
	});

	it('test for copyConfig', async () => {
		const _arrayValuep6ycVJe = undefined;
		const _arrayValueSCBrQZc = "upzadSaAKMD2xDLs1IZSisOueMHzKMPk7xoh2RbVAoyuHy649P6AvJRWyenVnHHGhe3w8Ejb7Wh6IjemONtReY";
		const _returnValueqpyaLb1 = [_arrayValuep6ycVJe, _arrayValueSCBrQZc]
		const _toH9zADUc = () => { return _returnValueqpyaLb1 };
		const _fromoIbs3Ii = "e7FPV7W7gzjLeQKuK9Ox2SQ5uiU71ibGhcaUgy5Ks31KnTDFmyAP2vKg7I1rv5vK9SkWuL9slfDAQnO4Dhxft";
		const _returnValueBbE8fJB = await copyConfig(_toH9zADUc, _fromoIbs3Ii)
	});
})