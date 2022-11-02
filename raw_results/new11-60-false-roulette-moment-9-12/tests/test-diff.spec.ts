export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputFvnRBPX = "zHQOnbjIEjeyoohPpcgka2IuFsaMuJWV25HBXN8Ps1LYIWHL737wP5uE9";
		const _unitszOF98TT = {
		
	}
		const _arrayValue16sCMR = -5.62693011000171;
		const _arrayValueXD551r = true;
		const _arrayValueXjwuPpG = -9.371315988963607;
		const _returnValueVXmdtPI = [_arrayValueXjwuPpG]
		const _arrayValuerQeSw3 = () => { return _returnValueVXmdtPI };
		const _arrayValueziNcxM = [_arrayValueXD551r, _arrayValuerQeSw3]
		const _arrayValuea4ZaVDu = [_arrayValue16sCMR, _arrayValueziNcxM]
		const _arrayValueumhFyn7 = "7hezunStqISPbB3VgRCLtJnztN6UkBvL6A4nj8AsPcgW8sXQ61ZmgJdisYTcAEs0ouOoVGysOq752nMvKm";
		const _arrayValuetlOdvct = null;
		const _asFloatFA1MTTe = [_arrayValuea4ZaVDu, _arrayValueumhFyn7, _arrayValuetlOdvct]
		const _returnValuePNaDHH2 = await diff(_inputFvnRBPX, _unitszOF98TT, _asFloatFA1MTTe)
	});
})