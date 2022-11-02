export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValueqx3i40L = false;
		const _startsWithkOl2wQN = () => { return _returnValueqx3i40L };
		const _arrayValueE1wPAgE = -4.742533178494519;
		const _arrayValueCJowQMd = undefined;
		const _returnValueZuq8IkS = [_arrayValueE1wPAgE, _arrayValueCJowQMd]
		const _sliceE7K183i = () => { return _returnValueZuq8IkS };
		const _lengthFxE9dCH = 9.386144062554273;
		const _wordEegSs65 = {
			"startsWith": _startsWithkOl2wQN,
		"slice": _sliceE7K183i,
		"length": _lengthFxE9dCH
	}
		const _returnValuefHMmCHv = null;
		const _candidatesaGLLRLo = () => { return _returnValuefHMmCHv };
		const _returnValuerHpl4hW = await suggestSimilar(_wordEegSs65, _candidatesaGLLRLo)
	});

	it('test for suggestSimilar', async () => {
		const _wordSQlb0u8 = "hj5YA9okl4gIADaqbKs6zJRw1l8X9CSw81";
		const _lengthY9CY8vA = -3.016049959487357;
		const _returnValueYtjuLVW = true;
		const _mappiraPo1 = () => { return _returnValueYtjuLVW };
		const _returnValueQEnB3eF = null;
		const _forEachgrae2Ia = () => { return _returnValueQEnB3eF };
		const _candidatesHptWv6k = {
			"length": _lengthY9CY8vA,
		"map": _mappiraPo1,
		"forEach": _forEachgrae2Ia
	}
		const _returnValuerjJDa2J = await suggestSimilar(_wordSQlb0u8, _candidatesHptWv6k)
	});

	it('test for suggestSimilar', async () => {
		const _wordGo4VK6C = "0IqNBLoVRbGmW35hZ9Fwciw0ngsW2A4Jk27IEmjPLAN2Q1I8c6mH";
		const _candidatesUGqlpzH = "RNtvRtLEmMPWnxCgft8TD2JVdd5t86H";
		const _returnValueZBYIC5 = await suggestSimilar(_wordGo4VK6C, _candidatesUGqlpzH)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuehy5DLo = {
		
	}
		const _startsWithk59eT6v = () => { return _returnValuehy5DLo };
		const _returnValueF6kG1zl = -9.716130221442203;
		const _sliceOiLzjbP = () => { return _returnValueF6kG1zl };
		const _lengthC4wzFUB = 0.835577363218821;
		const _wordNf9Ma12 = {
			"startsWith": _startsWithk59eT6v,
		"slice": _sliceOiLzjbP,
		"length": _lengthC4wzFUB
	}
		const _candidatesODAXhid = "Uyj1so";
		const _returnValuek5XfLg = await suggestSimilar(_wordNf9Ma12, _candidatesODAXhid)
	});

	it('test for suggestSimilar', async () => {
		const _wordPYz8qym = "YeNycPM5M8lzD7l27pAJEdGem9Ay9fz8oZLD";
		const _arrayValuetX2LTBT = true;
		const _candidatesDYhyKKF = [_arrayValuetX2LTBT]
		const _returnValuejBjZF47 = await suggestSimilar(_wordPYz8qym, _candidatesDYhyKKF)
	});

	it('test for suggestSimilar', async () => {
		const _wordXka6cfT = "qcu3rLEDR";
		const _arrayValueQF0FeuA = "v9";
		const _arrayValueomEGBZk = undefined;
		const _arrayValueUWL7x6 = "YVYdrBOQOa96fR28";
		const _arrayValuedpGph2e = "GWlpkcYxhdsL79QIJfIo6k28bnl8xVUCt";
		const _arrayValueF3Zr8Fc = undefined;
		const _arrayValues1Tbypb = [_arrayValueF3Zr8Fc]
		const _arrayValuek5ydPzF = [_arrayValueomEGBZk, _arrayValueUWL7x6, _arrayValuedpGph2e, _arrayValues1Tbypb]
		const _candidatesJgR9DYq = [_arrayValueQF0FeuA, _arrayValuek5ydPzF]
		const _returnValuee8DQsZg = await suggestSimilar(_wordXka6cfT, _candidatesJgR9DYq)
	});

	it('test for suggestSimilar', async () => {
		const _wordgE25BUJ = "vFl2Ekp2YhpHYg1NcLU6VdY2439cKhSgilwVSI3jrniPPtNmOLcqweUpuV5uGRPsyBCEuc";
		const _arrayValueX76m0d9 = "MiAN9GnHe2dfjy2MgQrH3fSk6mjoc5pTr82bKvCwbR5YOQaBF1Yrh4kmEGWbVtqFoG4xhXK";
		const _arrayValueVMd43o = null;
		const _candidatesECZxvBx = [_arrayValueX76m0d9, _arrayValueVMd43o]
		const _returnValuetUAWulM = await suggestSimilar(_wordgE25BUJ, _candidatesECZxvBx)
	});
})