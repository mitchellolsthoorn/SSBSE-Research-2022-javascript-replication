export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordoIMZdLR = undefined;
		const _candidatesUsltfNr = {
		
	}
		const _returnValueCmXhCeq = await suggestSimilar(_wordoIMZdLR, _candidatesUsltfNr)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValuezg8Iy2e = true;
		const _arrayValueoLqEubE = true;
		const _wordcAYwlaO = [_arrayValuezg8Iy2e, _arrayValueoLqEubE]
		const _candidatesGigwZhS = false;
		const _returnValuedNCRoxU = await suggestSimilar(_wordcAYwlaO, _candidatesGigwZhS)
	});

	it('test for suggestSimilar', async () => {
		const _wordLJFsz0T = "39iitz2Ig36zkvNBI7xso1umsh1eDYer8MblSOzTJLq5lB5aCQSHvn1AfRcKny";
		const _candidatesXDdTMdu = "GJBIGfxup9HVJSlDAEZCWopZCyQfUk4OzbFhNJBGAU";
		const _returnValuevQrCUAq = await suggestSimilar(_wordLJFsz0T, _candidatesXDdTMdu)
	});

	it('test for suggestSimilar', async () => {
		const _wordcriK3Km = "pWW2pIAvF5SEVnrMIk8d8kx0jLXQCw1CssbiJL0AmvG";
		const _arrayValueuo3MJd = "oHDY2kHGtMPil9vmYfoKct2JJ0e2ofNa7B70xg44wd3FfiFR4B7bplFDGaH9xHU3AdHaKnHEaQnhrIfNDXx";
		const _arrayValuet2gR5fY = 7.086966262503932;
		const _candidatesshNncMd = [_arrayValueuo3MJd, _arrayValuet2gR5fY]
		const _returnValuev93M24A = await suggestSimilar(_wordcriK3Km, _candidatesshNncMd)
	});

	it('test for suggestSimilar', async () => {
		const _wordz78SMz7 = "FyIbjvGsr6WBLPJcY9aEo42ll4ksSiUgkjJWFTtsEgE6DDe7K";
		const _arrayValueE3veofj = "jYXGLxOB21k6TCyhcAxyopkfd83rdeldJ0LvxeicjFJGQpuUJPCse4y5";
		const _arrayValueIw1ul0I = "pibICTXIgRPgHqz2wdocH3HJsVTeYFEYCc7G6ReFCO6w8QHXWMSxQxXBhBMAJDoOKkm3YKt35LpUMeo5lICatz0U";
		const _arrayValuekOrhcbT = 3.0892763829283343;
		const _arrayValuePTsY8bm = "8KeEr05FZlFRxWWp6EUyxyQr43thT0yz8Rja8sOpHgFFZQYSrJn";
		const _candidatesX9Pd8oQ = [_arrayValueE3veofj, _arrayValueIw1ul0I, _arrayValuekOrhcbT, _arrayValuePTsY8bm]
		const _returnValueVRRtbzr = await suggestSimilar(_wordz78SMz7, _candidatesX9Pd8oQ)
	});
})