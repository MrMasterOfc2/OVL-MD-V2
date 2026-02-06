const _0x534bbe = function () {
  let _0x377eb2 = true;
  return function (_0x7a9f5e, _0x5c6b8d) {
    const _0x70ba0f = _0x377eb2 ? function () {
      if (_0x5c6b8d) {
        const _0x3f4f55 = _0x5c6b8d.apply(_0x7a9f5e, arguments);
        _0x5c6b8d = null;
        return _0x3f4f55;
      }
    } : function () {};
    _0x377eb2 = false;
    return _0x70ba0f;
  };
}();
const _0x5db31b = _0x534bbe(this, function () {
  return _0x5db31b.toString().search("(((.+)+)+)+$").toString().constructor(_0x5db31b).search("(((.+)+)+)+$");
});
_0x5db31b();
const dotenv = require("dotenv");
dotenv.config({
  'override': true
});
module.exports = {
  'PREFIXE': process.env.PREFIXE || '',
  'NOM_OWNER': process.env.NOM_OWNER || "Ainz",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || '22651463203',
  'MODE': process.env.MODE || "public",
  'SESSION_ID': process.env.SESSION_ID || 'Ovl-MD_R1Xk1dPg_SESSION-ID',
  'STICKER_PACK_NAME': process.env.STICKER_PACK_NAME || "ᴀɪɴᴢ🔅✨",
  'STICKER_AUTHOR_NAME': process.env.STICKER_AUTHOR_NAME || "ᴏᴠʟ-ᴍᴅ-ᴠ𝟸",
  'DATABASE': process.env.DATABASE,
  'NOM_BOT': process.env.NOM_BOT || "🤖 OVL-MD BOT V2"
};
