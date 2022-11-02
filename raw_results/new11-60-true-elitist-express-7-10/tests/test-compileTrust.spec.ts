export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valeOCbHUC = "FLdnibE";
		const _returnValueq9nzRGr = await compileTrust(_valeOCbHUC)
	});

	it('test for compileTrust', async () => {
		const _valYmyTkk4 = undefined;
		const _returnValueBmltZwu = await compileTrust(_valYmyTkk4)
	});

	it('test for compileTrust', async () => {
		const _valiLc5di = 3.4867037708511344;
		const _returnValueFQ2UhAJ = await compileTrust(_valiLc5di)
	});

	it('test for compileTrust', async () => {
		const _valFIo3tKm = true;
		const _returnValueJ11qrw0 = await compileTrust(_valFIo3tKm)
	});

	it('test for compileTrust', async () => {
		const _returnValueltMGnuq = false;
		const _returnValuegNTujjM = () => { return _returnValueltMGnuq };
		const _valBTU79GF = () => { return _returnValuegNTujjM };
		const _returnValueylDj4j = await compileTrust(_valBTU79GF)
	});
})