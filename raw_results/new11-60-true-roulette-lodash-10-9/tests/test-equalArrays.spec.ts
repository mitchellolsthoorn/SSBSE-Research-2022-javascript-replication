export {}
import equalArrays from "../../.syntest/instrumented/benchmark/top10npm/lodash/.internal/equalArrays.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import ListCache from "../../benchmark/top10npm/lodash/.internal/ListCache.js";
import Stack from "../../benchmark/top10npm/lodash/.internal/Stack.js";
import Hash from "../../benchmark/top10npm/lodash/.internal/Hash.js";

describe('equalArrays', () => {
	it('test for equalArrays', async () => {
		const _arrayDkcRIk7 = "tR0xa2ZcBBAim6gxfrkrhrIBe3FJSmF1JOpaVlcXgFrofRifgel5BJgHFtMehHomv";
		const _returnValuewDtMcnW = -1.9361075049556504;
		const _otherin4iipS = () => { return _returnValuewDtMcnW };
		const _bitmaskKcdZPP = 7.471509125286676;
		const _arrayValuec8kwM2O = "MoDiSnic7dxWGDciw3ELoFLHn9W";
		const _returnValueNYHDsyM = 7.317101320391096;
		const _arrayValueZahaD1P = () => { return _returnValueNYHDsyM };
		const _arrayValueoRS39UG = -0.7311548735463997;
		const _arrayValuelgXbRCl = [_arrayValueZahaD1P, _arrayValueoRS39UG]
		const _arrayValueuoWNZ62 = {
		
	}
		const _returnValuelMG85Gf = [_arrayValuec8kwM2O, _arrayValuelgXbRCl, _arrayValueuoWNZ62]
		const _customizerzp3RxW9 = () => { return _returnValuelMG85Gf };
		const _returnValuezEeoMzN = false;
		const _equalFunc1CvbuB = () => { return _returnValuezEeoMzN };
		const _stackxVtQ48j = "KINkGuMUyVdEv9K3sXRWqdTQaGVyoIOFP7RD4nF9mbUMwXbF8koT5VonYxJvLqFJ7PMLo";
		const _returnValuee63CKxt = await equalArrays(_arrayDkcRIk7, _otherin4iipS, _bitmaskKcdZPP, _customizerzp3RxW9, _equalFunc1CvbuB, _stackxVtQ48j)
	});

	it('test for equalArrays', async () => {
		const _arrayqkzaeYZ = []
		const _returnValueLqbtQ9b = {
		
	}
		const _otherv6EsTpQ = () => { return _returnValueLqbtQ9b };
		const _bitmaskOK2Q8hn = 0.6517046943135778;
		const _returnValue3adSOd = null;
		const _customizerxPo6os = () => { return _returnValue3adSOd };
		const _returnValueawy35OF = "Rf02NEMfUJhf";
		const _equalFuncQqR0CR = () => { return _returnValueawy35OF };
		const _returnValueB8cUylv = true;
		const _stackUxEeNbE = () => { return _returnValueB8cUylv };
		const _returnValueEie2ZoR = await equalArrays(_arrayqkzaeYZ, _otherv6EsTpQ, _bitmaskOK2Q8hn, _customizerxPo6os, _equalFuncQqR0CR, _stackUxEeNbE)
	});

	it('test for equalArrays', async () => {
		const _returnValueGQL74qE = 6.81829533790091;
		const _arraybpnCnFl = () => { return _returnValueGQL74qE };
		const _returnValueCV4YmV7 = "0AEBPqCnQmyObbdmjHyc4U6I69S2GeXnBgMjXTxbg9xhpxuIfCjv19CW8qOGOgG";
		const _otheroy7tCz4 = () => { return _returnValueCV4YmV7 };
		const _bitmaskkk5dhy = 5.462613352789029;
		const _returnValueglivBbP = undefined;
		const _customizeruR2cvl = () => { return _returnValueglivBbP };
		const _returnValueUMXo8Pi = "JeJ4LLwXRC0CHGurIHHp1XT52l4Muh9UG4f3h8WDUIhubU63nkBldn7tEu5AR2vkRvAzbY";
		const _equalFuncDsTSb6A = () => { return _returnValueUMXo8Pi };
		const _returnValueBqNBoOJ = {
		
	}
		const _getXSthrZa = () => { return _returnValueBqNBoOJ };
		const _returnValuee3DtxwK = false;
		const _seta1uvdSK = () => { return _returnValuee3DtxwK };
		const _stackTL4axdU = {
			"get": _getXSthrZa,
		"set": _seta1uvdSK
	}
		const _returnValueU3a2NU1 = await equalArrays(_arraybpnCnFl, _otheroy7tCz4, _bitmaskkk5dhy, _customizeruR2cvl, _equalFuncDsTSb6A, _stackTL4axdU)
	});

	it('test for equalArrays', async () => {
		const _returnValueQOtkyv7 = true;
		const _arrayeEwB0wF = () => { return _returnValueQOtkyv7 };
		const _lengthMs2LSs = 8.688693457860367;
		const _otherklOeEIc = {
			"length": _lengthMs2LSs
	}
		const _bitmaskq7utrvO = 3.479767309241746;
		const _returnValuegvIcPAO = undefined;
		const _customizerehMlVmM = () => { return _returnValuegvIcPAO };
		const _returnValuehLc99vv = {
		
	}
		const _equalFuncW5DPyn = () => { return _returnValuehLc99vv };
		const _entriesT4iK7n7 = "CFwimrXiqmJAdX0owoLKxLeV0EwiRrWgadUgMsPFp5Dd9FHQlYxFqQO1Et8tancXLTcttdLiiH";
		const _stacklYLzEsZ = new ListCache(_entriesT4iK7n7)
		const _keyKLxvYWf = true;
		const _valueb2VL8J0 = 9.880881576944375;
		const _returnValueggPTmO9 = await _stacklYLzEsZ.set(_keyKLxvYWf, _valueb2VL8J0)
		const _keyFIqidzP = undefined;
		const _returnValueGjESSCe = await _stacklYLzEsZ.has(_keyFIqidzP)
		const _keyZoXmnBz = true;
		const _returnValuejSRuGB = await _stacklYLzEsZ.has(_keyZoXmnBz)
		const _returnValuedLdj3Ca = await _stacklYLzEsZ.clear()
		const _keyBRMQvIf = -1.293795073765727;
		const _returnValueQqovhIm = await _stacklYLzEsZ.has(_keyBRMQvIf)
		const _returnValueHoUPPBp = await equalArrays(_arrayeEwB0wF, _otherklOeEIc, _bitmaskq7utrvO, _customizerehMlVmM, _equalFuncW5DPyn, _stacklYLzEsZ)
	});

	it('test for equalArrays', async () => {
		const _arrayValueMp0sf5N = "X6UMAkAFCsLp5Er5KsuQK4pv";
		const _arrayValuecsEWzWa = false;
		const _arrayValueWWcLgyG = undefined;
		const _arrayo6VCOCT = [_arrayValueMp0sf5N, _arrayValuecsEWzWa, _arrayValueWWcLgyG]
		const _otherJI24JI9 = "YS4f7Lsl6K8WGl3zGykf1kKipK";
		const _bitmaskJWDXL6D = -9.230311308410691;
		const _returnValuevjSeq4F = "eFbKUMz7jdNIqvg";
		const _customizerKY9sU2u = () => { return _returnValuevjSeq4F };
		const _returnValuexFyWTAv = false;
		const _equalFuncO0kUHCe = () => { return _returnValuexFyWTAv };
		const _returnValueJf8lKmo = undefined;
		const _entriesmjMbzhF = () => { return _returnValueJf8lKmo };
		const _stackQ6Doiew = new Stack(_entriesmjMbzhF)
		const _returnValueehrjdCk = await _stackQ6Doiew.clear()
		const _returnValuesg0vpDm = await equalArrays(_arrayo6VCOCT, _otherJI24JI9, _bitmaskJWDXL6D, _customizerKY9sU2u, _equalFuncO0kUHCe, _stackQ6Doiew)
	});

	it('test for equalArrays', async () => {
		const _arrayValueoRNreT = {
		
	}
		const _arrayValueIGT4HOL = null;
		const _arrayValueHabYTuQ = [_arrayValueoRNreT, _arrayValueIGT4HOL]
		const _arrayBssq5aE = [_arrayValueHabYTuQ]
		const _lengthTVYI1mr = 6.704366851106677;
		const _othern7dLA3C = {
			"length": _lengthTVYI1mr
	}
		const _bitmaskCRCDcqv = 7.413228545141578;
		const _returnValueUmEkf2q = undefined;
		const _customizerT2NGpgv = () => { return _returnValueUmEkf2q };
		const _arrayValueNzX5RSK = true;
		const _returnValueTExkUpS = null;
		const _arrayValuei1UHEWn = () => { return _returnValueTExkUpS };
		const _arrayValueNhM7kEz = undefined;
		const _returnValueMoHE0yn = null;
		const _arrayValueaxoviHz = () => { return _returnValueMoHE0yn };
		const _arrayValuedJNEEdX = [_arrayValueNzX5RSK, _arrayValuei1UHEWn, _arrayValueNhM7kEz, _arrayValueaxoviHz]
		const _returnValueIbde7T0 = [_arrayValuedJNEEdX]
		const _equalFuncJ6Hcyn7 = () => { return _returnValueIbde7T0 };
		const _entriese9B5BvW = null;
		const _stackSIpksVY = new ListCache(_entriese9B5BvW)
		const _keyLADr44E = -2.6436344853413187;
		const _valuecX3XBb8 = 4.921748714376658;
		const _returnValuen7Mn8c = await _stackSIpksVY.set(_keyLADr44E, _valuecX3XBb8)
		const _key2IEIKC = true;
		const _returnValueIhyutjd = await _stackSIpksVY.delete(_key2IEIKC)
		const _keyNSqne7q = null;
		const _valuemdxs3D = 5.542960977951633;
		const _returnValueq8hhkRM = await _stackSIpksVY.set(_keyNSqne7q, _valuemdxs3D)
		const _returnValuePrWFpR = await _stackSIpksVY.clear()
		const _returnValueMZjmBKv = await equalArrays(_arrayBssq5aE, _othern7dLA3C, _bitmaskCRCDcqv, _customizerT2NGpgv, _equalFuncJ6Hcyn7, _stackSIpksVY)
	});

	it('test for equalArrays', async () => {
		const _returnValueL72lris = undefined;
		const _arrayzBFZ7Eo = () => { return _returnValueL72lris };
		const _otheroBOjhjo = "j96fPTT52tB4uexkyM9oW7vlKFuP79jaYoa9mNKwnbhQgRgDXEpy10zt6aKDp9qsTS9lMwrAv48kJrIyOFtTviwzA";
		const _bitmaskQAM24d2 = 9.2485844239031;
		const _returnValueHImgnbH = false;
		const _customizerGBjysd = () => { return _returnValueHImgnbH };
		const _returnValuescTQQgj = undefined;
		const _equalFunclz0KfN = () => { return _returnValuescTQQgj };
		const _returnValueZ8wAOIz = 6.184343912937813;
		const _arrayValuexHuLXex = () => { return _returnValueZ8wAOIz };
		const _arrayValueExgcHUe = "13T5lSEYbZbOFQOwheArMD5lluo4hXhPY";
		const _arrayValueXAOhENn = {
		
	}
		const _entriesQ51mMJ = [_arrayValuexHuLXex, _arrayValueExgcHUe, _arrayValueXAOhENn]
		const _stacktULJocv = new Stack(_entriesQ51mMJ)
		const _keyBYIatFo = "mBC88MchLnwmO0KBG2s7UZz8YHpEeX4aBfGZIkHiYUfNt3iP3iiISwhcifNOsWSSjP1V66";
		const _returnValueDvGsPg = await _stacktULJocv.get(_keyBYIatFo)
		const _returnValueysuKbZI = await equalArrays(_arrayzBFZ7Eo, _otheroBOjhjo, _bitmaskQAM24d2, _customizerGBjysd, _equalFunclz0KfN, _stacktULJocv)
	});

	it('test for equalArrays', async () => {
		const _arrayESOzzP = "4FfqELWDMYfffrGhRwwmPcRctCNqTGAdGxHttJG2WvKzJPDKd9haxcTyKX1VZAD8KzJeKafxutJ";
		const _otherOmZKSDb = "6y63w9P50A3AGkltD9WYm3mv8a3mXidkKkY4jEP38yorfmm7jbtoTbaLhm28UBmcCRh70rFjC4dNlj";
		const _bitmaskdzTnEti = -7.829602019085476;
		const _returnValuexlo1oMg = undefined;
		const _customizerZQdSnQG = () => { return _returnValuexlo1oMg };
		const _returnValueHtRJEWs = null;
		const _equalFuncsnlmm8Y = () => { return _returnValueHtRJEWs };
		const _entriesDk8P88l = null;
		const _stackDZAoCW1 = new Hash(_entriesDk8P88l)
		const _returnValueKiBK0jl = true;
		const _keyvt1xKDo = () => { return _returnValueKiBK0jl };
		const _returnValuebS699sU = await _stackDZAoCW1.get(_keyvt1xKDo)
		const _keyMY9bT95 = undefined;
		const _returnValueIjARYGK = await _stackDZAoCW1.get(_keyMY9bT95)
		const _keywYwU75K = "a3lSvliUH1YncWnGCg7fBhgJkxknSTiKbAgXBNAqvb3fvG";
		const _returnValueQJ4il9D = await _stackDZAoCW1.delete(_keywYwU75K)
		const _returnValuexf5Jah9 = await equalArrays(_arrayESOzzP, _otherOmZKSDb, _bitmaskdzTnEti, _customizerZQdSnQG, _equalFuncsnlmm8Y, _stackDZAoCW1)
	});

	it('test for equalArrays', async () => {
		const _arrayValuezbnECeh = true;
		const _arrayUG8wzah = [_arrayValuezbnECeh]
		const _arrayValueiZzsfK1 = true;
		const _arrayValueJiyP3xT = true;
		const _arrayValueUtHyh09 = null;
		const _arrayValueNJNdUml = -4.680691192398781;
		const _arrayValueVOniOy = [_arrayValueJiyP3xT, _arrayValueUtHyh09, _arrayValueNJNdUml]
		const _otherXSA3mQZ = [_arrayValueiZzsfK1, _arrayValueVOniOy]
		const _bitmaskJr3Up80 = -3.120243895498529;
		const _returnValuei5JvsfQ = undefined;
		const _customizerq0rhoHH = () => { return _returnValuei5JvsfQ };
		const _returnValuenHqPex = -5.456039672890204;
		const _equalFuncHmP3xjE = () => { return _returnValuenHqPex };
		const _arrayValueUKwl1VN = "XXshQwjbhKBKqidHZ9IwztadVJn";
		const _returnValueyUKW3Ta = true;
		const _returnValue015YkR = () => { return _returnValueyUKW3Ta };
		const _arrayValuejyHaYS0 = () => { return _returnValue015YkR };
		const _arrayValueUaxv72e = false;
		const _arrayValuegG0QIFx = {
		
	}
		const _returnValuevSNPN6i = [_arrayValueUKwl1VN, _arrayValuejyHaYS0, _arrayValueUaxv72e, _arrayValuegG0QIFx]
		const _entriesoOcIiEg = () => { return _returnValuevSNPN6i };
		const _stacknV6EJK = new ListCache(_entriesoOcIiEg)
		const _keya2jMVFa = true;
		const _returnValueeT9z8op = await _stacknV6EJK.delete(_keya2jMVFa)
		const _arrayValueeJuMvrB = -8.424421326497065;
		const _arrayValueRmBz92L = undefined;
		const _returnValuewkE2gRK = null;
		const _arrayValuel9fSLZ = () => { return _returnValuewkE2gRK };
		const _arrayValueR70ythR = undefined;
		const _arrayValuevgM3P0s = {
		
	}
		const _arrayValueA6M2fT1 = "qdNhhVKITvtXO4sbQVOnqPEeRcwDRWi2ThP1ZDIUrxxXfuJgJrh39H8zDZCVaYzLGUU4";
		const _arrayValuexjfKqCD = -7.444704832030985;
		const _arrayValuedW3kZff = [_arrayValueA6M2fT1, _arrayValuexjfKqCD]
		const _arrayValueN3guidF = [_arrayValuel9fSLZ, _arrayValueR70ythR, _arrayValuevgM3P0s, _arrayValuedW3kZff]
		const _arrayValueu92Wq2 = null;
		const _arrayValuetvl53xS = 5.185889985413892;
		const _returnValueeDHM9UZ = undefined;
		const _arrayValuehQoQB5p = () => { return _returnValueeDHM9UZ };
		const _arrayValued02fD4Z = [_arrayValueu92Wq2, _arrayValuetvl53xS, _arrayValuehQoQB5p]
		const _arrayValued2igvAk = [_arrayValueRmBz92L, _arrayValueN3guidF, _arrayValued02fD4Z]
		const _arrayValueF2Mjhg0 = undefined;
		const _keyCoQkkVf = [_arrayValueeJuMvrB, _arrayValued2igvAk, _arrayValueF2Mjhg0]
		const _returnValueu9PvXfi = await _stacknV6EJK.delete(_keyCoQkkVf)
		const _returnValueONvGmIm = await equalArrays(_arrayUG8wzah, _otherXSA3mQZ, _bitmaskJr3Up80, _customizerq0rhoHH, _equalFuncHmP3xjE, _stacknV6EJK)
	});
})