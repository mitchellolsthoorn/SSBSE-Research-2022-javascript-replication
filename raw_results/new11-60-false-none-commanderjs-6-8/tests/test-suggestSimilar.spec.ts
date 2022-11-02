export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordp7r0Ira = "pTfYoiO";
		const _returnValueZ646MtH = null;
		const _candidatespurMLIZ = () => { return _returnValueZ646MtH };
		const _returnValueBV010F = await suggestSimilar(_wordp7r0Ira, _candidatespurMLIZ)
	});

	it('test for suggestSimilar', async () => {
		const _wordbRH07W9 = true;
		const _candidatesJawfHbo = -2.9843784342159454;
		const _returnValuekGvoDq8 = await suggestSimilar(_wordbRH07W9, _candidatesJawfHbo)
	});

	it('test for suggestSimilar', async () => {
		const _wordHrd7JhK = "DkBIgsAtQMERSAqMhxlOaFan1ytYEpiDQRQWAbY2bBUx66hJpOIuaaIMnZwb7Wg";
		const _candidatesAe1fmr = "yveaFPgkxk64faJ2Q9iFx56uxdBjHzpa";
		const _returnValueFZspNcq = await suggestSimilar(_wordHrd7JhK, _candidatesAe1fmr)
	});

	it('test for suggestSimilar', async () => {
		const _wordv7IE1QV = "48bmvwcW6VvwWUJAZ7h548NFctXtXYTldAvUrJUOCSH1Ax";
		const _arrayValueqjkxCH3 = -3.5623744821335714;
		const _arrayValuebSh7lyi = null;
		const _arrayValuejtkwtQ5 = undefined;
		const _candidateswfYKGGr = [_arrayValueqjkxCH3, _arrayValuebSh7lyi, _arrayValuejtkwtQ5]
		const _returnValueFzYSAgL = await suggestSimilar(_wordv7IE1QV, _candidateswfYKGGr)
	});

	it('test for suggestSimilar', async () => {
		const _wordfLhQjSh = "pC8m9KBIA4EbOOen3lscGUnhWSbIRcJN3nrPmXtYcc";
		const _arrayValueyu5EL6o = false;
		const _arrayValue2BPG2U = undefined;
		const _arrayValuewzWKPe = -0.8453966081272757;
		const _arrayValueaTRokPN = null;
		const _arrayValueAz76vd = "JbJkmFfoRD7zBbEcDn2mkDsqCvTsXfvMkuH7QTdKYa3v5EU1fzgq";
		const _arrayValueLjk5l4 = [_arrayValue2BPG2U, _arrayValuewzWKPe, _arrayValueaTRokPN, _arrayValueAz76vd]
		const _returnValuexitDbxi = null;
		const _returnValueFaIAxw2 = () => { return _returnValuexitDbxi };
		const _arrayValueeZK4CqK = () => { return _returnValueFaIAxw2 };
		const _candidatesxXyt5Xj = [_arrayValueyu5EL6o, _arrayValueLjk5l4, _arrayValueeZK4CqK]
		const _returnValuewJr6d3L = await suggestSimilar(_wordfLhQjSh, _candidatesxXyt5Xj)
	});
})