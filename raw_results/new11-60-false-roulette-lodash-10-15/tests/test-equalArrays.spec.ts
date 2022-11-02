export {}
import Hash from "../../benchmark/top10npm/lodash/.internal/Hash.js";
import equalArrays from "../../.syntest/instrumented/benchmark/top10npm/lodash/.internal/equalArrays.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import MapCache from "../../benchmark/top10npm/lodash/.internal/MapCache.js";
import ListCache from "../../benchmark/top10npm/lodash/.internal/ListCache.js";
import Stack from "../../benchmark/top10npm/lodash/.internal/Stack.js";

describe('equalArrays', () => {
	it('test for equalArrays', async () => {
		const _arraywfMb6u = "U1HKdtkeoNXIHeGYaXfqOVSz6Pb35NWgSaZiBu6ZJV8danTzfOsFklSUxGpaeeVjRY6vaerQ9IcU9J4NewfIyQly";
		const _arrayValuenDc2gmI = {
		
	}
		const _arrayValueUFZ14ir = "n58SslHU88DoZmbQ7UdQUmTu3dql8jqS1SUPYFTnLdkesNKfsIRB34RGVwa96lWt3PujT2tVzoLdyWMeuvI";
		const _arrayValueh4eQaA4 = undefined;
		const _otherqMmPwdQ = [_arrayValuenDc2gmI, _arrayValueUFZ14ir, _arrayValueh4eQaA4]
		const _bitmaskYXV2F3 = -6.730820574635233;
		const _returnValueoeto7yd = "WdgOLsENBv9fjep8V9e1xi6ZhaORWadWWM80pro7NAhJDxbMXPjvCcwjorxIueTmOGg91a6pLjWunur";
		const _customizerNaTZeW = () => { return _returnValueoeto7yd };
		const _returnValueZ0QIIuH = undefined;
		const _equalFuncCcDXb1v = () => { return _returnValueZ0QIIuH };
		const _arrayValueBH8GfQZ = null;
		const _arrayValueA4Dkyt8 = [_arrayValueBH8GfQZ]
		const _arrayValueT6h60ef = false;
		const _arrayValuetextDRD = 8.460924476019379;
		const _arrayValueUq8dWr = {
		
	}
		const _arrayValueLO6IxF = [_arrayValueUq8dWr]
		const _entriesyHWdhhz = [_arrayValueA4Dkyt8, _arrayValueT6h60ef, _arrayValuetextDRD, _arrayValueLO6IxF]
		const _stackmJd7b1 = new Hash(_entriesyHWdhhz)
		const _keyTR6HKFH = false;
		const _valuez10iolL = undefined;
		const _returnValueM16AJOw = await _stackmJd7b1.set(_keyTR6HKFH, _valuez10iolL)
		const _keymXTjWf = undefined;
		const _returnValueySE2ilS = await _stackmJd7b1.has(_keymXTjWf)
		const _arrayValueUeJEwKP = true;
		const _keyzZaPyUw = [_arrayValueUeJEwKP]
		const _returnValuezZjn1cs = await _stackmJd7b1.delete(_keyzZaPyUw)
		const _keyuDp7Y0 = true;
		const _returnValuePytMQ4J = await _stackmJd7b1.get(_keyuDp7Y0)
		const _returnValueiONXPEM = await equalArrays(_arraywfMb6u, _otherqMmPwdQ, _bitmaskYXV2F3, _customizerNaTZeW, _equalFuncCcDXb1v, _stackmJd7b1)
	});

	it('test for equalArrays', async () => {
		const _returnValueTH78N2s = {
		
	}
		const _returnValueS44puwT = () => { return _returnValueTH78N2s };
		const _array1ccchR = () => { return _returnValueS44puwT };
		const _otherduO6wZo = "197vou2QkbKMG1JFq4CwkQg8F9MxfrPv7IKWpkByxihFqKevB";
		const _bitmaskqjuXY1X = 1.72265603170068;
		const _customizerGtY0YfB = {
		
	}
		const _returnValuekDkWW8O = null;
		const _equalFuncfolU6VQ = () => { return _returnValuekDkWW8O };
		const _stackWH1HZXI = "CQRLGWX27QtzklGLOBhWx";
		const _returnValuebHWN2Xr = await equalArrays(_array1ccchR, _otherduO6wZo, _bitmaskqjuXY1X, _customizerGtY0YfB, _equalFuncfolU6VQ, _stackWH1HZXI)
	});

	it('test for equalArrays', async () => {
		const _arrayValueZ4B27u0 = "vGU5CuHWeJgtQgk5iF6BMTmKUMDFrmbI4R4uC5BL2zneg83i83Y16NvcMFjZOyfL2EfZvWN7HIPTFE3HQ";
		const _arrayValueVyb7CaA = undefined;
		const _arrayligbNZH = [_arrayValueZ4B27u0, _arrayValueVyb7CaA]
		const _otheryCSeAf5 = "atReonoR";
		const _bitmaskKRZvJiA = 5.1859966471774825;
		const _returnValueWhkSwV = {
		
	}
		const _customizerEKG4vz = () => { return _returnValueWhkSwV };
		const _returnValueJlP7HGp = -1.5986122834010104;
		const _equalFuncrVclJ52 = () => { return _returnValueJlP7HGp };
		const _returnValueIvMnCBX = []
		const _getDVlRbwR = () => { return _returnValueIvMnCBX };
		const _arrayValuea9Poobt = null;
		const _arrayValueyIrlUKO = "UAHrvKv5VRbJUNSu";
		const _arrayValuePanuMgE = {
		
	}
		const _returnValuet3Ifkh = [_arrayValuea9Poobt, _arrayValueyIrlUKO, _arrayValuePanuMgE]
		const _returnValuejQtK9ql = () => { return _returnValuet3Ifkh };
		const _setqA70RcC = () => { return _returnValuejQtK9ql };
		const _stackznCxqWe = {
			"get": _getDVlRbwR,
		"set": _setqA70RcC
	}
		const _returnValueLF0qe79 = await equalArrays(_arrayligbNZH, _otheryCSeAf5, _bitmaskKRZvJiA, _customizerEKG4vz, _equalFuncrVclJ52, _stackznCxqWe)
	});

	it('test for equalArrays', async () => {
		const _arrayValueS6E3VGX = null;
		const _lengthaMfhfv = [_arrayValueS6E3VGX]
		const _arrayNUd6WQy = {
			"length": _lengthaMfhfv
	}
		const _lengthfDDjPkb = {
		
	}
		const _otherrGlGzDd = {
			"length": _lengthfDDjPkb
	}
		const _bitmaskvcHSvaP = -1.1530330206191994;
		const _returnValueAewAbBd = -7.948939054691197;
		const _customizerKxx8jW = () => { return _returnValueAewAbBd };
		const _equalFuncErQMzKP = false;
		const _entrieskWLmBOT = []
		const _stackUzHfscA = new MapCache(_entrieskWLmBOT)
		const _returnValuewqcCria = await _stackUzHfscA.clear()
		const _keypuGsX3 = true;
		const _returnValueJ8XHNS = await _stackUzHfscA.has(_keypuGsX3)
		const _keyzQrocF = null;
		const _arrayValueFBy6Mau = null;
		const _returnValueV7kV4QX = null;
		const _arrayValueqVRfZWX = () => { return _returnValueV7kV4QX };
		const _returnValueI1tD6OU = [_arrayValueFBy6Mau, _arrayValueqVRfZWX]
		const _arrayValueTyfZf3F = () => { return _returnValueI1tD6OU };
		const _arrayValue739CW3 = true;
		const _returnValueCtlJT5m = -9.271375887405984;
		const _arrayValuess1N3DX = () => { return _returnValueCtlJT5m };
		const _arrayValueGhjgbOD = -9.585165066494065;
		const _arrayValueXxuWaAG = {
		
	}
		const _arrayValuezDWORHz = "ypydHLgLBDY7wP7WQHOraobDdl91owJw3oMXCHAmfpQhR";
		const _arrayValueOxJSVIy = [_arrayValuess1N3DX, _arrayValueGhjgbOD, _arrayValueXxuWaAG, _arrayValuezDWORHz]
		const _arrayValueiJ58auR = "6PTSLjMPyLi1qtUVdSM7CBMA7yeEtyJFUIKecis4";
		const _valueC8anl7 = [_arrayValueTyfZf3F, _arrayValue739CW3, _arrayValueOxJSVIy, _arrayValueiJ58auR]
		const _returnValueNq9FXwK = await _stackUzHfscA.set(_keyzQrocF, _valueC8anl7)
		const _returnValueHa0hhMp = await equalArrays(_arrayNUd6WQy, _otherrGlGzDd, _bitmaskvcHSvaP, _customizerKxx8jW, _equalFuncErQMzKP, _stackUzHfscA)
	});

	it('test for equalArrays', async () => {
		const _returnValuewszkiVL = null;
		const _returnValueYtxYOUs = () => { return _returnValuewszkiVL };
		const _arrayVMhv7dI = () => { return _returnValueYtxYOUs };
		const _lengthtuO3m2Z = 8.477728755545797;
		const _otherIJIDsK = {
			"length": _lengthtuO3m2Z
	}
		const _bitmaskHkIKlvZ = -3.349899221322394;
		const _returnValuekhQsgYt = true;
		const _customizergJgkYws = () => { return _returnValuekhQsgYt };
		const _returnValueqwv5xMh = "FijlgDKP9ifhejCrWttAUp9M2y939UUYWtzwxZKP3GB5ArpeNO7OYre";
		const _equalFunczm7vQm = () => { return _returnValueqwv5xMh };
		const _returnValue7K4ByP = "QDgvj4dVciQnzICRa52MkwDnqlLOB2MFNLpltnTIEobpiJ";
		const _entriesuWHSRhh = () => { return _returnValue7K4ByP };
		const _stacko727X2 = new ListCache(_entriesuWHSRhh)
		const _keyIfekKHk = 4.719690816468752;
		const _returnValueLOHcdxu = await _stacko727X2.delete(_keyIfekKHk)
		const _keyBgmiV32 = "11vwPyoOU1vCLl3VgF66xvAgPQmxM7XVMz4HF1mitO";
		const _returnValueJf05pAW = await _stacko727X2.has(_keyBgmiV32)
		const _returnValuemIo4gqW = await equalArrays(_arrayVMhv7dI, _otherIJIDsK, _bitmaskHkIKlvZ, _customizergJgkYws, _equalFunczm7vQm, _stacko727X2)
	});

	it('test for equalArrays', async () => {
		const _arrayValue5pMHOe = {
		
	}
		const _arrayJBF61e = [_arrayValue5pMHOe]
		const _othere0vfv5w = "EXYm9oMz7eeWID";
		const _bitmaskAeZx9zX = 9.428915359686833;
		const _returnValueiaDDTqm = "9PLifHVkWdCt6fMx95Ml6IllFBotsLBz58I";
		const _customizerrA1Lv4Z = () => { return _returnValueiaDDTqm };
		const _arrayValueO0yGPN5 = 4.209784784254154;
		const _equalFuncHLi0ra0 = [_arrayValueO0yGPN5]
		const _entriesUnOw7mj = "7h0rjLCoFvv5dfgLDQuYxKaE2fv9876fvO4ksipcU34Rhf2BGhubb43bZWvHql3VMjYnkW4ru0jDuQf5";
		const _stackef6Yo7Q = new ListCache(_entriesUnOw7mj)
		const _returnValuefQy0NVM = "6LkmettkGsHYRLLJBmV8aOV50HHrzz1T9qpRrxGPomjuqK6qTzq43SQ2MbhCNdZ";
		const _keyEttZBM9 = () => { return _returnValuefQy0NVM };
		const _returnValueuEKrbQ = await _stackef6Yo7Q.delete(_keyEttZBM9)
		const _keykHe9jCU = {
		
	}
		const _returnValuebSAEuQh = await _stackef6Yo7Q.delete(_keykHe9jCU)
		const _returnValueOug3wQE = await _stackef6Yo7Q.clear()
		const _keyuJluCxQ = "GrMb6ipvayW1BuLrh7NwVPuCkWwkJlSdcu3IoD";
		const _returnValuegL7gb7k = await _stackef6Yo7Q.get(_keyuJluCxQ)
		const _keyithlIfQ = undefined;
		const _returnValuegrDS2H3 = await _stackef6Yo7Q.delete(_keyithlIfQ)
		const _returnValueiz0DwDu = await equalArrays(_arrayJBF61e, _othere0vfv5w, _bitmaskAeZx9zX, _customizerrA1Lv4Z, _equalFuncHLi0ra0, _stackef6Yo7Q)
	});

	it('test for equalArrays', async () => {
		const _arrayValuepqvzVU = null;
		const _arrayValueVg0VdMy = "shuwB7TR2v72IsrGFsWRPGf2roLqCbSfpwVtkrtT4eLaPjeAsmClTBRDT0sjiPOtV8WpoL55PiOQr9IPYFxJREPnoDDEitz";
		const _arraylCb5G6 = [_arrayValuepqvzVU, _arrayValueVg0VdMy]
		const _lengthAZw93mW = 5.0705259810286325;
		const _otherx4t4wX = {
			"length": _lengthAZw93mW
	}
		const _bitmaskxORDb4J = -1.7120881784923618;
		const _returnValuel8cJ8cc = undefined;
		const _customizerOBjFnmV = () => { return _returnValuel8cJ8cc };
		const _returnValueqSgw6D = -5.724368491031301;
		const _equalFuncY6UGML8 = () => { return _returnValueqSgw6D };
		const _entriesFP6nw0Y = "35AdMPxfKEFTUcc2Dn9mPmiMBDvvagluIVToFFSPALVYGAwyQg5j8NWzyDXmSxKnJ17VZEW6wat2HxT78";
		const _stackAskRUur = new Hash(_entriesFP6nw0Y)
		const _keypoWGGG = "nND5einDry";
		const _returnValueYL6MJL = await _stackAskRUur.delete(_keypoWGGG)
		const _keyoHJlaX = 9.798185250180357;
		const _returnValuesn3XgpO = await _stackAskRUur.get(_keyoHJlaX)
		const _keyVdWYAOw = null;
		const _returnValuehT3Mmxk = await _stackAskRUur.get(_keyVdWYAOw)
		const _returnValuesL2RiTD = await equalArrays(_arraylCb5G6, _otherx4t4wX, _bitmaskxORDb4J, _customizerOBjFnmV, _equalFuncY6UGML8, _stackAskRUur)
	});

	it('test for equalArrays', async () => {
		const _arrayzDIf4r2 = "a3ze60rtnFMni";
		const _otherVP02ZvS = "ft16CYEzB0zOMbQcRXYAl1cZjVMgwz1okitA9sU5XcsmqnlRxoK90GZbP9";
		const _bitmaskFb98iFL = -7.064055458777149;
		const _returnValueIwlx9yk = undefined;
		const _customizerwLgjzVM = () => { return _returnValueIwlx9yk };
		const _returnValuebsDDGI = -0.46487884697526916;
		const _equalFuncOie2oR2 = () => { return _returnValuebsDDGI };
		const _returnValuexR8VM8D = null;
		const _getmQBsv0I = () => { return _returnValuexR8VM8D };
		const _returnValuefEIu3cR = null;
		const _setFMyumHM = () => { return _returnValuefEIu3cR };
		const _stacksOFnpTF = {
			"get": _getmQBsv0I,
		"set": _setFMyumHM
	}
		const _returnValuetn3ZZhC = await equalArrays(_arrayzDIf4r2, _otherVP02ZvS, _bitmaskFb98iFL, _customizerwLgjzVM, _equalFuncOie2oR2, _stacksOFnpTF)
	});

	it('test for equalArrays', async () => {
		const _lengthRrGOu3L = 0.8945026882331693;
		const _arrayDeUpWot = {
			"length": _lengthRrGOu3L
	}
		const _otherchzCV3 = "sMBm6sAvWJN5e9pYfevSBjmfSO2c59hFkdDUdJah1qLaNi1tIa3SWMFovVtTk2eEG88YjsUP0WOLh28RfRERvVSeHN85Iu526R";
		const _bitmaskJ4BtqCh = -7.312022364944809;
		const _returnValueXrm0i01 = undefined;
		const _customizerXlDkIEj = () => { return _returnValueXrm0i01 };
		const _returnValueNFB47U8 = null;
		const _equalFuncUsEjFXL = () => { return _returnValueNFB47U8 };
		const _entriesUp2oUgp = "YYy79I4aXxpH9dKRqXms5glv8hhTblQJsUWLtTPxW6F6xzkX5zfarWcX5MyR4Qx";
		const _stackECgKL49 = new Stack(_entriesUp2oUgp)
		const _keycfiOxKn = null;
		const _returnValuenbywx2P = await _stackECgKL49.get(_keycfiOxKn)
		const _returnValuegjsiDVs = await _stackECgKL49.clear()
		const _keypQZrcb7 = "xs7OObavDxuRBpQPfXeEaHwCjzbr8qNlfwWbt1TOLVuqaWMTFD55RtDUhvVeFY6BZ4f6dTvzQ6Xvum9YN8GrI9jKPN4YcSo";
		const _returnValuenxsdGUq = await _stackECgKL49.has(_keypQZrcb7)
		const _returnValueJhyYDv8 = await equalArrays(_arrayDeUpWot, _otherchzCV3, _bitmaskJ4BtqCh, _customizerXlDkIEj, _equalFuncUsEjFXL, _stackECgKL49)
	});
})