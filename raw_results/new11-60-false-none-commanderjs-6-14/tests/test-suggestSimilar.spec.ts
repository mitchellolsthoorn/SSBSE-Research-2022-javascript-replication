export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordsZA3Wm = false;
		const _candidatesiLbQjuj = null;
		const _returnValueh5XQRZl = await suggestSimilar(_wordsZA3Wm, _candidatesiLbQjuj)
	});

	it('test for suggestSimilar', async () => {
		const _wordxyd5xSw = null;
		const _candidateslXXTAdu = {
		
	}
		const _returnValuem3FLzsi = await suggestSimilar(_wordxyd5xSw, _candidateslXXTAdu)
	});

	it('test for suggestSimilar', async () => {
		const _wordxrlVNqq = "d7fX8QnR6Kd4Y";
		const _candidatesmRITu5R = "fzJNXsrA7lKOHEeaR2AM9O";
		const _returnValueRP2NE1c = await suggestSimilar(_wordxrlVNqq, _candidatesmRITu5R)
	});

	it('test for suggestSimilar', async () => {
		const _wordDtV8LjG = "A5xTfAL2ascz7dbcjDuoAaruexmtAvQuJd7ClCVeLk9FsXbDIWMZhvFCXT4zCoMihWS3KQ05JhUSJov2uDfbWprpxbnzkRaPjQc";
		const _arrayValueeAgHk3c = 3.8415870368830944;
		const _arrayValuei5VoNLS = {
		
	}
		const _arrayValueon1qWwL = undefined;
		const _arrayValueHnnYtS7 = {
		
	}
		const _candidatesGqJIXXU = [_arrayValueeAgHk3c, _arrayValuei5VoNLS, _arrayValueon1qWwL, _arrayValueHnnYtS7]
		const _returnValueCRyIOw = await suggestSimilar(_wordDtV8LjG, _candidatesGqJIXXU)
	});

	it('test for suggestSimilar', async () => {
		const _wordMHIcSiL = "EhUcc7E2KiJd1r3U7mzfxkydQU1FqGO68f2CICnkJs0V1goM4hdc7DcIHA5UOEGjJ18UutObg";
		const _arrayValueUWyr8aL = "PWf54zMLkWPYfVBjrsmum5YLLJVz7F6cPwthPHfzz7NVfDbi2nMcE12QtSbAw4LK955rSw";
		const _arrayValueaPs0LOd = true;
		const _arrayValueuBCmFMq = "8xj5y63GHz4wmAMpo6cUuetsoLFAyREU4kE5HHKKRwxLcHwC98z33184Bo";
		const _arrayValuebkGt3ID = [_arrayValueuBCmFMq]
		const _candidatesELQcNzK = [_arrayValueUWyr8aL, _arrayValueaPs0LOd, _arrayValuebkGt3ID]
		const _returnValuerLHI0pQ = await suggestSimilar(_wordMHIcSiL, _candidatesELQcNzK)
	});

	it('test for suggestSimilar', async () => {
		const _wordHczKs7c = "OaEMI1MKrqRzoESOWCBLOFnUebpQ9MpQQ52L6zBnYKzsqg8CWQ";
		const _arrayValueSqCtDnu = -4.758378720425248;
		const _arrayValuegkeyTKs = null;
		const _arrayValuefmcFbNy = [_arrayValueSqCtDnu, _arrayValuegkeyTKs]
		const _candidatesDX70MPL = [_arrayValuefmcFbNy]
		const _returnValuebMiRTh = await suggestSimilar(_wordHczKs7c, _candidatesDX70MPL)
	});
})