export {}
import equalArrays from "../../.syntest/instrumented/benchmark/top10npm/lodash/.internal/equalArrays.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Hash from "../../benchmark/top10npm/lodash/.internal/Hash.js";
import Stack from "../../benchmark/top10npm/lodash/.internal/Stack.js";
import ListCache from "../../benchmark/top10npm/lodash/.internal/ListCache.js";

describe('equalArrays', () => {
	it('test for equalArrays', async () => {
		const _returnValueeFykQEA = true;
		const _arrayc0FW2S2 = () => { return _returnValueeFykQEA };
		const _arrayValueenrpJ5 = "uE6XYhn7EpdhYMuWpnjm261vOvpuUBwKtOSitX51OT4y7BFOnn4";
		const _arrayValue1tWDgz = [_arrayValueenrpJ5]
		const _returnValueg8rFfOA = 2.795656241778799;
		const _arrayValueggoMxX = () => { return _returnValueg8rFfOA };
		const _arrayValueGgfByy7 = true;
		const _arrayValue9pnOu9 = [_arrayValueggoMxX, _arrayValueGgfByy7]
		const _returnValue3qY86H = {
		
	}
		const _arrayValueHTIOi6I = () => { return _returnValue3qY86H };
		const _otherFyQPhxz = [_arrayValue1tWDgz, _arrayValue9pnOu9, _arrayValueHTIOi6I]
		const _bitmaskoFyFn35 = -9.527071806954009;
		const _returnValuex2dUe7I = false;
		const _customizerZZWYwBS = () => { return _returnValuex2dUe7I };
		const _returnValueUnCQn2d = false;
		const _returnValueARHNyGw = () => { return _returnValueUnCQn2d };
		const _arrayValue8v1MRJ = () => { return _returnValueARHNyGw };
		const _arrayValueavAShmJ = [_arrayValue8v1MRJ]
		const _arrayValueHNAXEuV = null;
		const _arrayValueulOQpX7 = null;
		const _returnValueZP7ufBV = [_arrayValueavAShmJ, _arrayValueHNAXEuV, _arrayValueulOQpX7]
		const _equalFuncG0J0Fvl = () => { return _returnValueZP7ufBV };
		const _stackSNQJHdw = "FSltIREIkxM2gTE3PBoqRJ61jj59gCyX2x64N";
		const _returnValueQNQarx = await equalArrays(_arrayc0FW2S2, _otherFyQPhxz, _bitmaskoFyFn35, _customizerZZWYwBS, _equalFuncG0J0Fvl, _stackSNQJHdw)
	});

	it('test for equalArrays', async () => {
		const _lengthg4xGnYv = 5.847910191482075;
		const _arrayc6zFXeT = {
			"length": _lengthg4xGnYv
	}
		const _lengthblanK3M = -5.2948139367406455;
		const _othervHD2U8m = {
			"length": _lengthblanK3M
	}
		const _bitmaskCmFHh2F = -0.09865114258131591;
		const _arrayValueR2QtXi = null;
		const _arrayValuegMRLf81 = 0.2748640094830339;
		const _arrayValueZBuM85e = true;
		const _returnValueGqDiOJ8 = [_arrayValueR2QtXi, _arrayValuegMRLf81, _arrayValueZBuM85e]
		const _customizerfpAXBLb = () => { return _returnValueGqDiOJ8 };
		const _returnValueKw7x9RU = {
		
	}
		const _equalFunclWDvzi = () => { return _returnValueKw7x9RU };
		const _entriesCpZwYNl = "Fmb8D";
		const _stackJHJUoYC = new Hash(_entriesCpZwYNl)
		const _arrayValueT16nUtS = undefined;
		const _arrayValueU9zTSsB = undefined;
		const _keyL83xF1w = [_arrayValueT16nUtS, _arrayValueU9zTSsB]
		const _returnValueBvqzERK = await _stackJHJUoYC.get(_keyL83xF1w)
		const _keygoyPCgb = undefined;
		const _valuelA6D1D = undefined;
		const _returnValue7VyfWC = await _stackJHJUoYC.set(_keygoyPCgb, _valuelA6D1D)
		const _returnValuevBQX9OH = {
		
	}
		const _arrayValuejEVc1WX = () => { return _returnValuevBQX9OH };
		const _keyz2GRl5D = [_arrayValuejEVc1WX]
		const _returnValuezZZUSeo = await _stackJHJUoYC.get(_keyz2GRl5D)
		const _returnValuezhjSzzk = await equalArrays(_arrayc6zFXeT, _othervHD2U8m, _bitmaskCmFHh2F, _customizerfpAXBLb, _equalFunclWDvzi, _stackJHJUoYC)
	});

	it('test for equalArrays', async () => {
		const _arrayqP7B6O2 = []
		const _otherJBKghiJ = []
		const _bitmaskhZOMcda = -5.431728247950591;
		const _arrayValueyDUbymA = undefined;
		const _arrayValuerglj72 = {
		
	}
		const _arrayValuetQaXK9R = [_arrayValueyDUbymA, _arrayValuerglj72]
		const _arrayValueLMx6buK = "o3dESzvsq6FOynWiNGcsFOes9E7zlbUdliLcoaSceL95lRTEA28KiQ2aksiqEcm5Gojzujn";
		const _arrayValueBmMMbkK = null;
		const _returnValuepe9uQ2M = [_arrayValuetQaXK9R, _arrayValueLMx6buK, _arrayValueBmMMbkK]
		const _customizerexrsGWN = () => { return _returnValuepe9uQ2M };
		const _equalFuncldbnfJy = {
		
	}
		const _entriesWaOFscC = "RUijsgzdlJ2FQwWy2eYhBwJOEfzqpbJFPY1VGf";
		const _stackeng0DIe = new Stack(_entriesWaOFscC)
		const _returnValueZ1n4jV4 = true;
		const _keyjhQSZAD = () => { return _returnValueZ1n4jV4 };
		const _returnValueLgMGSr = await _stackeng0DIe.has(_keyjhQSZAD)
		const _keyVE8cxyD = "KjDGtvL1LKF9pvtdgWXEEObFHR0PveHvMfroUhFUkrFjdTdmN1kA4ydvTk0kuIzVrEOJdOuBCENmee2h3AyH9eoO";
		const _returnValueH1lupg9 = await _stackeng0DIe.delete(_keyVE8cxyD)
		const _returnValuepT7LUVz = await equalArrays(_arrayqP7B6O2, _otherJBKghiJ, _bitmaskhZOMcda, _customizerexrsGWN, _equalFuncldbnfJy, _stackeng0DIe)
	});

	it('test for equalArrays', async () => {
		const _arrayValuerijgH2 = "PJbMMBcv96si7CQfcGyNvwsXOrLtFKzMx6lDADycJxu7yhAUkBTtdhGWupqom8ChBRDb340szOa8";
		const _returnValuewcILTTZ = [_arrayValuerijgH2]
		const _arrayvJ4uGc5 = () => { return _returnValuewcILTTZ };
		const _otherytmHXg = "DDiq24j3hxTlJoI8fRuOxy";
		const _bitmaskmO43Mmk = -1.4478508134759398;
		const _returnValueJN1bimU = true;
		const _customizerbIlkXyL = () => { return _returnValueJN1bimU };
		const _returnValueZc3BVqO = 8.331906089439709;
		const _equalFuncBF48LiB = () => { return _returnValueZc3BVqO };
		const _returnValueT1rUIdw = 8.888668666805614;
		const _getChcvh0j = () => { return _returnValueT1rUIdw };
		const _returnValuejXqhXFR = {
		
	}
		const _setDjmS5FW = () => { return _returnValuejXqhXFR };
		const _stackvqGtRC4 = {
			"get": _getChcvh0j,
		"set": _setDjmS5FW
	}
		const _returnValuelbIhJp0 = await equalArrays(_arrayvJ4uGc5, _otherytmHXg, _bitmaskmO43Mmk, _customizerbIlkXyL, _equalFuncBF48LiB, _stackvqGtRC4)
	});

	it('test for equalArrays', async () => {
		const _arrayValuefSaI0a8 = undefined;
		const _arrayValuesOObJE1 = "DFRZklCEnCc0QEtKhutY45GExHSMpse4lrk2ZDuovmKBxlu3uyglQRrLtbzFqp5COChG56sxrpoQ9aISvQ5yFWgI8da9";
		const _arrayQgMMRdA = [_arrayValuefSaI0a8, _arrayValuesOObJE1]
		const _arrayValueKLDibDH = false;
		const _arrayValueWpBBOEq = undefined;
		const _arrayValuepT1a9us = [_arrayValueWpBBOEq]
		const _otherPvDn5i1 = [_arrayValueKLDibDH, _arrayValuepT1a9us]
		const _bitmaskdIXTM4 = -0.06922822975970355;
		const _returnValueGNJGbm = 4.6550406425728;
		const _customizerYwmK7mp = () => { return _returnValueGNJGbm };
		const _returnValueHfqrynK = null;
		const _equalFuncE12Kzwg = () => { return _returnValueHfqrynK };
		const _returnValue9aIZqN = false;
		const _getQsjmyiG = () => { return _returnValue9aIZqN };
		const _returnValuexzZzFAv = undefined;
		const _setjIziftc = () => { return _returnValuexzZzFAv };
		const _stackpdE6oP = {
			"get": _getQsjmyiG,
		"set": _setjIziftc
	}
		const _returnValueJjE8oiG = await equalArrays(_arrayQgMMRdA, _otherPvDn5i1, _bitmaskdIXTM4, _customizerYwmK7mp, _equalFuncE12Kzwg, _stackpdE6oP)
	});

	it('test for equalArrays', async () => {
		const _arrayFXAfHke = "lSNOnzaanL3qMjYd2EBFt6rbMolT8yf7";
		const _otherhWWSdjN = "lTAeZ05xALdFkAIa7PjD1LkshMhuGANi6H1nvqY66Uz666qinnCoIAVjWObBDg9oBjpGPyk0szl5c";
		const _bitmask1zDsff = -3.12136383499854;
		const _returnValueHuJJ472 = {
		
	}
		const _customizerjZgGjYj = () => { return _returnValueHuJJ472 };
		const _returnValuexOTjnti = undefined;
		const _equalFuncebsSXik = () => { return _returnValuexOTjnti };
		const _entriescmP7cA = null;
		const _stackeiIdMGE = new Stack(_entriescmP7cA)
		const _returnValueN7pzOBl = await _stackeiIdMGE.clear()
		const _keywFOX3HK = -1.7715773281260692;
		const _valuejzchWps = "xMO3SkoNIJBW8m7mq1mvQa7gvcbxIqPl8o";
		const _returnValueHjSoQk1 = await _stackeiIdMGE.set(_keywFOX3HK, _valuejzchWps)
		const _returnValueJ4o4QSN = await equalArrays(_arrayFXAfHke, _otherhWWSdjN, _bitmask1zDsff, _customizerjZgGjYj, _equalFuncebsSXik, _stackeiIdMGE)
	});

	it('test for equalArrays', async () => {
		const _lengthovjkjQb = 4.243288248022738;
		const _arrayGiRt8wL = {
			"length": _lengthovjkjQb
	}
		const _othermSDx3u = "0tzx4jdKssNQnIyBbMTb1OtCV4B4Npg6egP5U7kj39YH9ylJfBXyaPExDKitR46aCCb68zOVdKVON3115qI49Wh6Efoaxr8H";
		const _bitmaskaCfRpE7 = 5.555937459287687;
		const _returnValuehjzvqm6 = undefined;
		const _customizerznzs6C = () => { return _returnValuehjzvqm6 };
		const _returnValueQSPe0x = 7.0194277744479265;
		const _equalFuncBVBJbR9 = () => { return _returnValueQSPe0x };
		const _lengthtDAx3mG = null;
		const _entriesCYtQQI7 = {
			"length": _lengthtDAx3mG
	}
		const _stackxfM4eMb = new ListCache(_entriesCYtQQI7)
		const _keyGj8rwXj = "lVabQiaX3sFXJCMMABYABwDzCKFqww5G1SUQblb5jUq9k29XdbhQvVwAKkRglGUMQYpF3f9XT7Nuit3adnflbdLfk3tspzzzFg";
		const _valueHvkiK4 = 1.9893901127798959;
		const _returnValueOTQqRwH = await _stackxfM4eMb.set(_keyGj8rwXj, _valueHvkiK4)
		const _keytx9LpIM = undefined;
		const _valueXl3T8M5 = -8.662804051031783;
		const _returnValuedv4ajeq = await _stackxfM4eMb.set(_keytx9LpIM, _valueXl3T8M5)
		const _returnValueHgfgH2h = await equalArrays(_arrayGiRt8wL, _othermSDx3u, _bitmaskaCfRpE7, _customizerznzs6C, _equalFuncBVBJbR9, _stackxfM4eMb)
	});

	it('test for equalArrays', async () => {
		const _arrayValuemKHZhb6 = {
		
	}
		const _arrayValueKcPIyU = null;
		const _arrayDxeZU7K = [_arrayValuemKHZhb6, _arrayValueKcPIyU]
		const _otherMzN0DEr = "5c3yj6hJy8IL54JxTbiYSKpwtEi4AOih";
		const _bitmaskLXCetch = -9.808691990088866;
		const _returnValueUL33Bxu = undefined;
		const _customizerqs0n0E3 = () => { return _returnValueUL33Bxu };
		const _returnValuexPYjVJH = "GeuPuom6BTEwUfN7oTZBbKiIkQrL6KOW";
		const _equalFuncw9GBUf7 = () => { return _returnValuexPYjVJH };
		const _entriesj9E2CKb = "3VpEUh9FL7iVb7xSWoJVoZ9gP3QrCKEEhSVghcwKbNiI86DI7HZAMwSXbR7cOIU9BfKDRUkVrOORVwSLpE5c";
		const _stackqOjrt9 = new ListCache(_entriesj9E2CKb)
		const _keyam1ZL5J = null;
		const _valuenTb7fRv = -9.228236948866979;
		const _returnValueVieScT = await _stackqOjrt9.set(_keyam1ZL5J, _valuenTb7fRv)
		const _keyqBId65q = null;
		const _returnValueexE0Cby = await _stackqOjrt9.delete(_keyqBId65q)
		const _returnValuedz8jwRE = true;
		const _keyUqIekgm = () => { return _returnValuedz8jwRE };
		const _returnValueABhukR4 = await _stackqOjrt9.has(_keyUqIekgm)
		const _keyvC9ncqQ = "P3dcML1UuFM";
		const _returnValueRLHkqm = await _stackqOjrt9.has(_keyvC9ncqQ)
		const _returnValueQCYWUsn = null;
		const _keyBuRTED = () => { return _returnValueQCYWUsn };
		const _returnValueRGncHH7 = await _stackqOjrt9.has(_keyBuRTED)
		const _returnValue5tMGAS = await equalArrays(_arrayDxeZU7K, _otherMzN0DEr, _bitmaskLXCetch, _customizerqs0n0E3, _equalFuncw9GBUf7, _stackqOjrt9)
	});

	it('test for equalArrays', async () => {
		const _arrayValuesHSInBu = 0.22802579837057202;
		const _arrayValueyJeTS0n = null;
		const _arrayxX5XOeD = [_arrayValuesHSInBu, _arrayValueyJeTS0n]
		const _otherAVMEUHK = "W1aN4uL3pvzfa9nEVAnYieUPSoTbSJqbdXusCrmTSYbY3yqnwjdkkDrBilRaE9SfFzCXaEFfBeirR94";
		const _bitmaskRBXiroD = 1.7495540565795338;
		const _returnValuevSol2vz = undefined;
		const _customizerorbI8tC = () => { return _returnValuevSol2vz };
		const _returnValuevlOWs0X = undefined;
		const _equalFuncqE47gH5 = () => { return _returnValuevlOWs0X };
		const _returnValueFO7syyA = undefined;
		const _entriesOsfan4Y = () => { return _returnValueFO7syyA };
		const _stackdAcYL4 = new Hash(_entriesOsfan4Y)
		const _keyKFNOpOB = null;
		const _valueT18Kpld = false;
		const _returnValueFCqznjT = await _stackdAcYL4.set(_keyKFNOpOB, _valueT18Kpld)
		const _arrayValueDoVUip6 = "rozIDB";
		const _arrayValueUQ92wTo = {
		
	}
		const _arrayValuezArj1Zd = -8.594614858867605;
		const _arrayValuemUK3Ha = {
		
	}
		const _keyH5YFgjH = [_arrayValueDoVUip6, _arrayValueUQ92wTo, _arrayValuezArj1Zd, _arrayValuemUK3Ha]
		const _returnValuegi3Znzw = await _stackdAcYL4.delete(_keyH5YFgjH)
		const _keyzPh392r = 7.44684417141417;
		const _returnValueo7uBtBo = await _stackdAcYL4.has(_keyzPh392r)
		const _returnValueGbzSpZv = await equalArrays(_arrayxX5XOeD, _otherAVMEUHK, _bitmaskRBXiroD, _customizerorbI8tC, _equalFuncqE47gH5, _stackdAcYL4)
	});
})