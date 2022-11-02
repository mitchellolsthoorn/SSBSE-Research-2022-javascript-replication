export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordYjy6YBy = "qAiA5Dm2";
		const _candidatesrJkJLeq = {
		
	}
		const _returnValueTxvO40k = await suggestSimilar(_wordYjy6YBy, _candidatesrJkJLeq)
	});

	it('test for suggestSimilar', async () => {
		const _wordVBgeOMg = "SIvjwKjpHYyo5HtctnWWXtDA2bplccKh8AMBxmQDIBgMcPZUeqqMDqBaFPmh1PL9VCqKK7czlFsitsrd9GXzedjyav9OL8";
		const _arrayValueUuqp6qU = false;
		const _candidatesqcENYPx = [_arrayValueUuqp6qU]
		const _returnValuen3Gd6fo = await suggestSimilar(_wordVBgeOMg, _candidatesqcENYPx)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValueRj8ayNI = {
		
	}
		const _wordtwD4Rf = [_arrayValueRj8ayNI]
		const _returnValuexaQRTLh = true;
		const _returnValuewpPOOH1 = () => { return _returnValuexaQRTLh };
		const _candidatesRVN6rx = () => { return _returnValuewpPOOH1 };
		const _returnValuennMX7XA = await suggestSimilar(_wordtwD4Rf, _candidatesRVN6rx)
	});

	it('test for suggestSimilar', async () => {
		const _wordTULjPW = "CoX";
		const _candidatesnyrCh47 = "M";
		const _returnValuenFPptcf = await suggestSimilar(_wordTULjPW, _candidatesnyrCh47)
	});

	it('test for suggestSimilar', async () => {
		const _wordzPXhD53 = "AytrHU956wzv1XRFq";
		const _arrayValuexnK24c8 = {
		
	}
		const _arrayValuebgv0Nfg = 4.289781690703975;
		const _arrayValueAeLJutg = [_arrayValuexnK24c8, _arrayValuebgv0Nfg]
		const _arrayValuet648JkG = false;
		const _arrayValue8aJK4B = null;
		const _candidatesa5TkW1e = [_arrayValueAeLJutg, _arrayValuet648JkG, _arrayValue8aJK4B]
		const _returnValueBwtc9MO = await suggestSimilar(_wordzPXhD53, _candidatesa5TkW1e)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValueuF6np0 = undefined;
		const _arrayValuecITeXWU = {
		
	}
		const _returnValueIkif5p = [_arrayValueuF6np0, _arrayValuecITeXWU]
		const _startsWithm2OQhv = () => { return _returnValueIkif5p };
		const _returnValueAa584xA = {
		
	}
		const _sliceioXaPuL = () => { return _returnValueAa584xA };
		const _lengthEqeSpnc = 5.350679200492259;
		const _wordOQHmrf3 = {
			"startsWith": _startsWithm2OQhv,
		"slice": _sliceioXaPuL,
		"length": _lengthEqeSpnc
	}
		const _candidatesO13AYuY = "3zEd5F1qe6j2N6D6PXFB9aQlXLBCabCM8SyhMW2CqqGUgoo";
		const _returnValuejeMWpM3 = await suggestSimilar(_wordOQHmrf3, _candidatesO13AYuY)
	});

	it('test for suggestSimilar', async () => {
		const _wordC7t5ZOA = "81tH7Lo5UUyv7EM4MqrU1UZnD9I3t14Tg";
		const _arrayValuef4UYTeh = "p46hqSJzVho8huoqdZ5EXRdC1IXYTo";
		const _arrayValueXYe05y = -3.4847106432492536;
		const _arrayValueMEoQ16z = "g6iakXpKOOughcwv1vXC90fTppFDeLw";
		const _candidatesr045Hk4 = [_arrayValuef4UYTeh, _arrayValueXYe05y, _arrayValueMEoQ16z]
		const _returnValueWJ09Juq = await suggestSimilar(_wordC7t5ZOA, _candidatesr045Hk4)
	});
})