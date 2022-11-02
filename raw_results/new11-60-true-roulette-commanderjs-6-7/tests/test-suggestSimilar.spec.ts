export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValueVt2VAP = undefined;
		const _wordKzD77yf = () => { return _returnValueVt2VAP };
		const _lengthEJCUdPk = -0.2693717935946083;
		const _returnValuezySAKK4 = {
		
	}
		const _mapdxRwXr1 = () => { return _returnValuezySAKK4 };
		const _returnValueXVhojd6 = null;
		const _forEachttJsEx = () => { return _returnValueXVhojd6 };
		const _candidatesnXcLcxq = {
			"length": _lengthEJCUdPk,
		"map": _mapdxRwXr1,
		"forEach": _forEachttJsEx
	}
		const _returnValuesjbhCKm = await suggestSimilar(_wordKzD77yf, _candidatesnXcLcxq)
	});

	it('test for suggestSimilar', async () => {
		const _wordUJ9Xh1m = true;
		const _returnValueV4D7EYa = "kzaIwxPHPK9Ill3E8XzHJYWVxKNI47Q9GXMWGD0NvPaqrt6h21C";
		const _candidatesgncBHES = () => { return _returnValueV4D7EYa };
		const _returnValueZ9NlNdj = await suggestSimilar(_wordUJ9Xh1m, _candidatesgncBHES)
	});

	it('test for suggestSimilar', async () => {
		const _wordOikHV25 = "YWyHd7gOdcp4DG9FHuN2UIs3V22ePwmiUTr4umAdSFb2jaoznwOTg2njtTHRYnCMbbInY8YXc88xOIW66q4zt1";
		const _arrayValueI7rnWI1 = false;
		const _arrayValueLF9J03n = undefined;
		const _candidatesQwdwBHE = [_arrayValueI7rnWI1, _arrayValueLF9J03n]
		const _returnValueiYqwalv = await suggestSimilar(_wordOikHV25, _candidatesQwdwBHE)
	});

	it('test for suggestSimilar', async () => {
		const _wordwnchrUE = "KRxZ5UPMyEXTMxaAHyO3ZjKF2COhcZbJB9Stn9KwrRXbqj";
		const _candidatesRN0j0xa = "7pXkqjFraTOAbYsHngzuxWOx10AFiC1sZIErldb4bn6fyyklYlVo";
		const _returnValueiTnxZBK = await suggestSimilar(_wordwnchrUE, _candidatesRN0j0xa)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueqb7NZyv = 4.041458432121088;
		const _startsWithLUGafF7 = () => { return _returnValueqb7NZyv };
		const _returnValuemcQgwIK = {
		
	}
		const _slicestSkYjy = () => { return _returnValuemcQgwIK };
		const _length7btB4S = 3.3644102741500763;
		const _wordG0y5EzD = {
			"startsWith": _startsWithLUGafF7,
		"slice": _slicestSkYjy,
		"length": _length7btB4S
	}
		const _candidatesWvEfdg = "1N3D13O9wEwCRMochoxHhESXOno9Zstc9WAPCcDAlL";
		const _returnValuejRcnENg = await suggestSimilar(_wordG0y5EzD, _candidatesWvEfdg)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuebA5qbJh = undefined;
		const _startsWithcXTOIdV = () => { return _returnValuebA5qbJh };
		const _returnValuedk2iWJb = null;
		const _sliceMf5zssY = () => { return _returnValuedk2iWJb };
		const _lengthBqsj4K = 7.120703128014938;
		const _wordIk1J7jr = {
			"startsWith": _startsWithcXTOIdV,
		"slice": _sliceMf5zssY,
		"length": _lengthBqsj4K
	}
		const _arrayValueVNC2OtK = "gmU0fVW5GeyfHEKcK7MkS7yBv1jjh5FksW14nsPBGf5k4EVCvvdzHbSnhuVpmXg1huhpmHaHnUB5B";
		const _arrayValuevcLU9r = "NLZTgpwobePROKYxmMwWA3oxzQAeBRKHB7Lw4wxl6wsoubztcfn7EqGYV9t6rQxl2EHLyMtWgyhd";
		const _arrayValueMcUemZb = "KJOng5tG5OB22z9mesIeKOQlIYO2ivNCi1mqWzUtS";
		const _candidatesMcgxGgD = [_arrayValueVNC2OtK, _arrayValuevcLU9r, _arrayValueMcUemZb]
		const _returnValuepf8Ngx = await suggestSimilar(_wordIk1J7jr, _candidatesMcgxGgD)
	});

	it('test for suggestSimilar', async () => {
		const _worduW8LIqA = "Q2wcBYVEh9EjrmKDVZwf8AlnkU1NLIqlmyvToXERFx63StApcBaNewiDtU3XfWdcPq9LK5O61Emv";
		const _arrayValueNkspWM = 0.525439716661678;
		const _arrayValuec3rp10h = "iEMinFxfko3jjk8DzmotlUxJpAQFyoGIFydfX67h7iYrmJfJLaODnuRezUyTYiNFNYbLyuz8WR";
		const _candidatesipBkXoG = [_arrayValueNkspWM, _arrayValuec3rp10h]
		const _returnValueD6raATB = await suggestSimilar(_worduW8LIqA, _candidatesipBkXoG)
	});
})