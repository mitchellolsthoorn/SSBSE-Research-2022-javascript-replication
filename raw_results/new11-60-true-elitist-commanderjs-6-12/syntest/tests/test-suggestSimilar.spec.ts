export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValueaQ93XnL = undefined;
		const _startsWithZqZNtTh = () => { return _returnValueaQ93XnL };
		const _returnValueOe4TlwI = undefined;
		const _sliceW24PZfK = () => { return _returnValueOe4TlwI };
		const _lengthD4aLYiH = 9.005322410671692;
		const _wordxvau8qF = {
			"startsWith": _startsWithZqZNtTh,
		"slice": _sliceW24PZfK,
		"length": _lengthD4aLYiH
	}
		const _lengthQhxWII = undefined;
		const _returnValueZP34IP0 = -8.084168752389788;
		const _mappPUgexr = () => { return _returnValueZP34IP0 };
		const _returnValuezXMHNdv = []
		const _forEachxX1v716 = () => { return _returnValuezXMHNdv };
		const _candidatesKhOMpHG = {
			"length": _lengthQhxWII,
		"map": _mappPUgexr,
		"forEach": _forEachxX1v716
	}
		const _returnValueuCHJuBP = await suggestSimilar(_wordxvau8qF, _candidatesKhOMpHG)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueZF4EKX = true;
		const _startsWithnufPthH = () => { return _returnValueZF4EKX };
		const _returnValueKo5le3 = false;
		const _sliceAe763SD = () => { return _returnValueKo5le3 };
		const _lengthmeM6Ybx = 8.219340878625726;
		const _wordvTjDl6r = {
			"startsWith": _startsWithnufPthH,
		"slice": _sliceAe763SD,
		"length": _lengthmeM6Ybx
	}
		const _returnValuewIJLWT8 = -0.17496926575915772;
		const _candidatesSa33Fs = () => { return _returnValuewIJLWT8 };
		const _returnValueB2aDAtt = await suggestSimilar(_wordvTjDl6r, _candidatesSa33Fs)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuevF5gz4 = undefined;
		const _startsWithbMAzyKy = () => { return _returnValuevF5gz4 };
		const _returnValueabaU48H = undefined;
		const _sliceR7ia3le = () => { return _returnValueabaU48H };
		const _lengthxYrvnYP = 8.735073234243057;
		const _wordNpKCmRv = {
			"startsWith": _startsWithbMAzyKy,
		"slice": _sliceR7ia3le,
		"length": _lengthxYrvnYP
	}
		const _candidatesE0ASmy = "XS5VBT2CfyN2tgVzxa6QGfPocO1Eru1Sg3cIncDDIzSg75vCqkl0wmKk7S";
		const _returnValueBu640tI = await suggestSimilar(_wordNpKCmRv, _candidatesE0ASmy)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuesuGs8Mj = "io9Pos6t7QmWzs4zR9AMrvu3qQDMsc5kWx1ve9CeeIGmOczH42s";
		const _startsWithJ6QccWE = () => { return _returnValuesuGs8Mj };
		const _returnValueuru3isi = false;
		const _sliceI8MLcNA = () => { return _returnValueuru3isi };
		const _lengthhaPr13D = -5.17958144742297;
		const _wordx0ADL6l = {
			"startsWith": _startsWithJ6QccWE,
		"slice": _sliceI8MLcNA,
		"length": _lengthhaPr13D
	}
		const _candidateskmqT9D9 = "EmxbhqU5Er8TCtjSBbtfBNkR1tjdErw4vUPYfQ4QvtTE28eOuEpFLMjydTX5OBIxbwINqKkQnbATr2Aocj";
		const _returnValueHHAsJMh = await suggestSimilar(_wordx0ADL6l, _candidateskmqT9D9)
	});

	it('test for suggestSimilar', async () => {
		const _wordfnq0uUe = "VULzaypY2Ym3RRzDcwQBStCMjPDTORbzkD4TTYili3kP";
		const _arrayValueJLLHolM = true;
		const _arrayValuelVPNCv9 = {
		
	}
		const _arrayValuej6fzNw = [_arrayValuelVPNCv9]
		const _candidatesqUUDvS = [_arrayValueJLLHolM, _arrayValuej6fzNw]
		const _returnValueCjYcKf9 = await suggestSimilar(_wordfnq0uUe, _candidatesqUUDvS)
	});

	it('test for suggestSimilar', async () => {
		const _wordaiNYwzT = "Bvwgugc96hosShLyEzgXnbYFqAiswSbNOJIEZcvjlru2Y1lACQCyoojeK7p4BlqiTqBIqGb7kENvG7zh9hBh5hsMHI7";
		const _arrayValuedgnn04w = "X0O0lzvQArJBVnZKhXNYUOELbc050mgiHkAwAo0ibMkVVwswE6c6kTG";
		const _arrayValueHygKPOq = false;
		const _candidatesCc5EA4X = [_arrayValuedgnn04w, _arrayValueHygKPOq]
		const _returnValuejVDpOnN = await suggestSimilar(_wordaiNYwzT, _candidatesCc5EA4X)
	});
})