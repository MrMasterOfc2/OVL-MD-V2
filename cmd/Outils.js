const _0x38d4c6 = function () {
  let _0x195b0e = true;
  return function (_0x5155f1, _0x14a906) {
    const _0x33ba7f = _0x195b0e ? function () {
      if (_0x14a906) {
        const _0x42da81 = _0x14a906.apply(_0x5155f1, arguments);
        _0x14a906 = null;
        return _0x42da81;
      }
    } : function () {};
    _0x195b0e = false;
    return _0x33ba7f;
  };
}();
const _0xff365 = _0x38d4c6(this, function () {
  return _0xff365.toString().search('(((.+)+)+)+$').toString().constructor(_0xff365).search("(((.+)+)+)+$");
});
_0xff365();
const {
  ovlcmd,
  cmd
} = require("../lib/ovlcmd");
const config = require('../set');
const {
  translate
} = require("@vitalets/google-translate-api");
const prefixe = config.PREFIXE;
const axios = require("axios");
const fs = require('fs');
const path = require("path");
const {
  WA_CONF
} = require('../DataBase/wa_conf');
const {
  TempMail
} = require("tempmail.lol");
const JavaScriptObfuscator = require('javascript-obfuscator');
const {
  exec
} = require("child_process");
const AdmZip = require("adm-zip");
const os = require('os');
const pkg = require("../package");
function stylize(_0x49c129) {
  return _0x49c129.split('').map(_0x279d93 => {
    const _0x5cab14 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(_0x279d93);
    return _0x5cab14 !== -0x1 ? "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ0123456789"[_0x5cab14] : _0x279d93;
  }).join('');
}
const contextInfo = {
  'forwardingScore': 0x1,
  'isForwarded': true,
  'forwardedNewsletterMessageInfo': {
    'newsletterJid': "120363371282577847@newsletter",
    'newsletterName': "ᴏᴠʟ-ᴍᴅ-ᴠ𝟸"
  }
};
ovlcmd({
  'nom_cmd': "test",
  'classe': "Outils",
  'react': '🌟',
  'desc': "Tester la connectivité du bot"
}, async (_0x25fd1f, _0x2de713, {
  ms: _0x28b5fe,
  repondre: _0x521318,
  arg: _0x57eb39
}) => {
  try {
    const _0x1b4fba = fs.readFileSync("./lib/theme.json", "utf8");
    const _0x58e1fb = JSON.parse(_0x1b4fba);
    const [_0x449dcc] = await WA_CONF.findOrCreate({
      'where': {
        'id': '1'
      },
      'defaults': {
        'id': '1',
        'mention': '1'
      }
    });
    const _0x453841 = "🌐 Bienvenue sur *OVL-MD-V2*, votre bot WhatsApp multi-device.\n🔍 Tapez *" + config.PREFIXE + "allmenu* pour voir toutes les commandes disponibles.\n> ©2025 OVL-MD-V2 By *AINZ*";
    let _0x51caad;
    if (_0x449dcc.mention.startsWith('[')) {
      const _0x284d4c = JSON.parse(_0x449dcc.mention);
      _0x51caad = _0x284d4c[Math.floor(Math.random() * _0x284d4c.length)];
    } else {
      if (_0x449dcc.mention.startsWith("http://") || _0x449dcc.mention.startsWith('https://')) {
        const _0x462e2b = JSON.parse(_0x449dcc.mention);
        _0x51caad = _0x462e2b[Math.floor(Math.random() * _0x462e2b.length)];
      } else {
        const _0x44c991 = _0x58e1fb.find(_0x5333c5 => _0x5333c5.id === _0x449dcc.mention);
        if (!_0x44c991) {
          throw new Error("Thème introuvable");
        }
        _0x51caad = _0x44c991.theme[Math.floor(Math.random() * _0x44c991.theme.length)];
      }
    }
    if (_0x51caad.endsWith(".mp4")) {
      await _0x2de713.sendMessage(_0x25fd1f, {
        'video': {
          'url': _0x51caad
        },
        'caption': stylize(_0x453841),
        'gifPlayback': true
      }, {
        'quoted': _0x28b5fe
      });
    } else {
      await _0x2de713.sendMessage(_0x25fd1f, {
        'image': {
          'url': _0x51caad
        },
        'caption': stylize(_0x453841)
      }, {
        'quoted': _0x28b5fe
      });
    }
  } catch (_0x4631db) {
    console.error("Erreur dans test:", _0x4631db);
    const _0x5cfd96 = "🌐 Bienvenue sur *OVL-MD-V2*, votre bot WhatsApp multi-device.\n🔍 Tapez *" + config.PREFIXE + "menu* pour voir toutes les commandes disponibles.\n> ©2025 OVL-MD-V2 By *AINZ*";
    await _0x2de713.sendMessage(_0x25fd1f, {
      'text': stylize(_0x5cfd96)
    }, {
      'quoted': _0x28b5fe
    });
  }
});
ovlcmd({
  'nom_cmd': "description",
  'classe': "Outils",
  'desc': "Menu des commandes : toutes, par catégorie ou détail d’une commande.",
  'alias': ["desc", "help"]
}, async (_0x28c272, _0x401902, _0x3c1608) => {
  try {
    const {
      arg: _0x2dd6c3,
      ms: _0x24eb15
    } = _0x3c1608;
    if (_0x2dd6c3.length) {
      const _0x33327c = _0x2dd6c3[0x0].toLowerCase();
      if (_0x33327c === "all") {
        let _0x490442 = "📚 *Toutes les commandes disponibles :*\n\n";
        cmd.forEach(_0x18b1eb => {
          _0x490442 += "🔹 *" + _0x18b1eb.nom_cmd + "* — _" + _0x18b1eb.desc + "_\nAlias : [" + _0x18b1eb.alias.join(", ") + "]\nClasse : " + _0x18b1eb.classe + "\n\n";
        });
        return await _0x401902.sendMessage(_0x28c272, {
          'text': _0x490442
        }, {
          'quoted': _0x24eb15
        });
      }
      if (_0x33327c === "cat") {
        const _0x10e568 = [...new Set(cmd.map(_0x234c86 => _0x234c86.classe))];
        let _0x2989aa = "📂 *Catégories disponibles :*\n\n";
        _0x10e568.forEach(_0x260f17 => {
          const _0x36e2e1 = cmd.filter(_0x25f5c9 => _0x25f5c9.classe === _0x260f17);
          _0x2989aa += "📁 *" + _0x260f17 + "* (" + _0x36e2e1.length + ")\n";
          _0x36e2e1.forEach(_0x2a120f => {
            _0x2989aa += " ┗ 🧩 *" + _0x2a120f.nom_cmd + "* — _" + _0x2a120f.desc + "_\n";
          });
          _0x2989aa += "\n";
        });
        return await _0x401902.sendMessage(_0x28c272, {
          'text': _0x2989aa
        }, {
          'quoted': _0x24eb15
        });
      }
      if (_0x33327c.startsWith("cat=")) {
        const _0x3f2323 = _0x33327c.split("cat=")[0x1].toLowerCase();
        const _0x45acc8 = [...new Set(cmd.map(_0x4dc215 => _0x4dc215.classe.toLowerCase()))];
        if (!_0x45acc8.includes(_0x3f2323)) {
          return await _0x401902.sendMessage(_0x28c272, {
            'text': "❌ Catégorie *\"" + _0x3f2323 + "\"* introuvable.\nUtilise *desc cat* pour voir les catégories disponibles."
          }, {
            'quoted': _0x24eb15
          });
        }
        const _0x5530b8 = cmd.filter(_0x18d497 => _0x18d497.classe.toLowerCase() === _0x3f2323);
        let _0x2ab7ca = "📁 *Commandes de la catégorie \"" + _0x3f2323 + "\"* (" + _0x5530b8.length + ") :\n\n";
        _0x5530b8.forEach(_0x1044c8 => {
          _0x2ab7ca += "🧩 *" + _0x1044c8.nom_cmd + "* — _" + _0x1044c8.desc + "_\nAlias : [" + _0x1044c8.alias.join(", ") + "]\n\n";
        });
        return await _0x401902.sendMessage(_0x28c272, {
          'text': _0x2ab7ca
        }, {
          'quoted': _0x24eb15
        });
      }
      const _0x5041e9 = cmd.find(_0x249e6b => _0x249e6b.nom_cmd.toLowerCase() === _0x33327c || _0x249e6b.alias.map(_0x1fe67a => _0x1fe67a.toLowerCase()).includes(_0x33327c));
      if (_0x5041e9) {
        const _0x46b636 = "🧩 *Détails de la commande :*\n\n" + ("🔹 *Nom* : " + _0x5041e9.nom_cmd + "\n") + ("📚 *Alias* : [" + _0x5041e9.alias.join(", ") + "]\n") + ("🗂️ *Classe* : " + _0x5041e9.classe + "\n") + ("📝 *Description* : " + _0x5041e9.desc);
        return await _0x401902.sendMessage(_0x28c272, {
          'text': _0x46b636
        }, {
          'quoted': _0x24eb15
        });
      } else {
        return await _0x401902.sendMessage(_0x28c272, {
          'text': "❌ Commande ou alias *\"" + _0x33327c + "\"* introuvable."
        }, {
          'quoted': _0x24eb15
        });
      }
    }
    await _0x401902.sendMessage(_0x28c272, {
      'text': "📖 *Menu d'aide des commandes :*\n\n📌 *desc all* → Toutes les commandes\n📌 *desc cat=[catégorie]* → Commandes d’une seule catégorie\n📌 *desc [commande]* → Détail d'une commande spécifique\n\nExemples :\n• desc all\n• desc cat=groupe\n• desc tagall"
    }, {
      'quoted': _0x24eb15
    });
  } catch (_0xceffad) {
    console.error("Erreur dans description :", _0xceffad);
    await _0x401902.sendMessage(_0x28c272, {
      'text': "❌ Une erreur s’est produite dans le menu description."
    }, {
      'quoted': _0x3c1608.ms
    });
  }
});
ovlcmd({
  'nom_cmd': "theme",
  'classe': "Outils",
  'react': '🎨',
  'desc': "Gérer les thèmes disponibles"
}, async (_0x2480d0, _0x36c52e, _0x228aaf) => {
  const {
    arg: _0x34c057,
    ms: _0x1c4158,
    repondre: _0x460057,
    prenium_id: _0x15a64e
  } = _0x228aaf;
  try {
    if (!_0x15a64e) {
      return _0x460057("Vous n'avez pas le droit d'exécuter cette commande.");
    }
    const _0xfd5eb5 = fs.readFileSync("./lib/theme.json", 'utf8');
    const _0x4b7c97 = JSON.parse(_0xfd5eb5);
    const [_0x883c8f] = await WA_CONF.findOrCreate({
      'where': {
        'id': '1'
      },
      'defaults': {
        'id': '1',
        'mention': '1'
      }
    });
    const _0xbf7f45 = () => {
      const _0x5de170 = config.PREFIXE + "theme 2";
      const _0x38a58f = config.PREFIXE + "theme https://exemple.com/theme1.jpg;https://exemple.com/theme2.png";
      return _0x36c52e.sendMessage(_0x2480d0, {
        'text': "🎨 *Utilisation de la commande thème :*\n\n" + ("• *" + config.PREFIXE + "theme list* : Affiche la liste des thèmes disponibles\n") + ("• *" + config.PREFIXE + "theme <numéro>* : Applique un thème par son numéro\n") + ("• *" + config.PREFIXE + "theme <url>* : Utilise une ou plusieurs images personnalisées (séparées par ; )\n\n") + "📌 *Exemples :*\n" + ("- " + _0x5de170 + "\n") + ("- " + _0x38a58f)
      }, {
        'quoted': _0x1c4158
      });
    };
    if (_0x34c057.length === 0x0) {
      return _0xbf7f45();
    }
    const _0x35f69c = _0x34c057.join(" ").toLowerCase();
    if (_0x35f69c === 'list') {
      let _0xf3ad87 = "*🎨 Liste des thèmes disponibles :*\n";
      _0x4b7c97.forEach((_0x291bd1, _0x363360) => {
        _0xf3ad87 += _0x363360 + 0x1 + ". " + _0x291bd1.nom + "\n";
      });
      return _0x36c52e.sendMessage(_0x2480d0, {
        'image': {
          'url': "https://files.catbox.moe/6xlk10.jpg"
        },
        'caption': _0xf3ad87
      }, {
        'quoted': _0x1c4158
      });
    }
    if (_0x35f69c.startsWith('http://') || _0x35f69c.startsWith('https://')) {
      const _0xa93634 = _0x34c057.join(" ").split(';').map(_0x5c0a9b => _0x5c0a9b.trim()).filter(_0x2a5175 => _0x2a5175.length > 0x0);
      const _0x1611a8 = /^https?:\/\/.+/i;
      for (const _0x1d3ced of _0xa93634) {
        if (!_0x1611a8.test(_0x1d3ced)) {
          return _0x460057("❌ URL invalide : " + _0x1d3ced);
        }
      }
      _0x883c8f.mention = JSON.stringify(_0xa93634);
      await _0x883c8f.save();
      return _0x36c52e.sendMessage(_0x2480d0, {
        'text': "✅ " + _0xa93634.length + " thème(s) personnalisé(s) défini(s)."
      }, {
        'quoted': _0x1c4158
      });
    }
    const _0x59afde = parseInt(_0x35f69c, 0xa);
    if (isNaN(_0x59afde) || _0x59afde < 0x1 || _0x59afde > _0x4b7c97.length) {
      return _0x36c52e.sendMessage(_0x2480d0, {
        'text': "❌ Numéro invalide.\n📌 Utilise *" + config.PREFIXE + "theme list* pour voir les numéros disponibles."
      }, {
        'quoted': _0x1c4158
      });
    }
    const _0x25b7a8 = _0x4b7c97[_0x59afde - 0x1];
    const _0x570968 = _0x25b7a8.id;
    _0x883c8f.mention = _0x570968;
    await _0x883c8f.save();
    return _0x36c52e.sendMessage(_0x2480d0, {
      'text': "✅ Thème *" + _0x25b7a8.nom + "* sélectionné avec succès !"
    }, {
      'quoted': _0x1c4158
    });
  } catch (_0x173f17) {
    console.error("Erreur dans la commande theme :", _0x173f17);
    return _0x36c52e.sendMessage(_0x2480d0, {
      'text': "❌ Une erreur est survenue lors du traitement de la commande."
    }, {
      'quoted': _0x1c4158
    });
  }
});
ovlcmd({
  'nom_cmd': "menu",
  'classe': 'Outils',
  'react': '🔅',
  'desc': "Affiche le menu du bot"
}, async (_0x5a69e3, _0x3eec26, _0x7155b4) => {
  const {
    ms: _0x4bfba7,
    arg: _0x54c475
  } = _0x7155b4;
  try {
    const _0x4560dd = process.uptime();
    const _0xd730d6 = Math.floor(_0x4560dd / 0x15180);
    const _0x1e094d = Math.floor(_0x4560dd / 0xe10 % 0x18);
    const _0xb8d570 = Math.floor(_0x4560dd % 0xe10 / 0x3c);
    const _0x254693 = Math.floor(_0x4560dd % 0x3c);
    let _0x4f951f = '';
    if (_0xd730d6 > 0x0) {
      _0x4f951f += _0xd730d6 + "J ";
    }
    if (_0x1e094d > 0x0) {
      _0x4f951f += _0x1e094d + "H ";
    }
    if (_0xb8d570 > 0x0) {
      _0x4f951f += _0xb8d570 + "M ";
    }
    if (_0x254693 > 0x0) {
      _0x4f951f += _0x254693 + 'S';
    }
    const _0x477cab = new Date();
    const _0x3751bc = _0x477cab.toLocaleDateString("fr-FR");
    const _0x222177 = _0x477cab.toLocaleTimeString("fr-FR");
    const _0x135187 = process.platform;
    const _0xa3123d = {};
    cmd.forEach(_0x4143be => {
      if (!_0xa3123d[_0x4143be.classe]) {
        _0xa3123d[_0x4143be.classe] = [];
      }
      _0xa3123d[_0x4143be.classe].push(_0x4143be);
    });
    const _0x443fa6 = Object.keys(_0xa3123d).sort((_0x36ffc9, _0x44cda7) => _0x36ffc9.localeCompare(_0x44cda7, undefined, {
      'sensitivity': "base"
    }));
    _0x443fa6.forEach(_0x50072f => {
      _0xa3123d[_0x50072f].sort((_0x489fd4, _0x385b8b) => _0x489fd4.nom_cmd.localeCompare(_0x385b8b.nom_cmd, undefined, {
        'numeric': true
      }));
    });
    let _0x59b36e = '';
    if (_0x54c475.length === 0x0) {
      _0x59b36e += "╭──⟪ " + config.NOM_BOT + " ⟫──╮\n├ ߷ Prefix       : " + config.PREFIXE + "\n├ ߷ Owner         : " + config.NOM_OWNER + "\n├ ߷ Commandes     : " + cmd.length + "\n├ ߷ Uptime        : " + _0x4f951f.trim() + "\n├ ߷ Date          : " + _0x3751bc + "\n├ ߷ Time         : " + _0x222177 + "\n├ ߷ Platform    : " + _0x135187 + "\n├ ߷ Developer   : Sahan\n├ ߷ Version       : " + pkg.version + "\n╰──────────────────╯\n\n";
      _0x59b36e += "╭───⟪ Catégories ⟫───╮\n";
      _0x443fa6.forEach((_0x33c296, _0x43365c) => {
        _0x59b36e += "├ ߷ " + (_0x43365c + 0x1) + " • " + _0x33c296 + "\n";
      });
      _0x59b36e += "╰───────────────────╯\n";
      _0x59b36e += "\n💡 Tape *" + config.PREFIXE + "menu <numéro>* ou *" + config.PREFIXE + "menu <nom>* pour voir les commandes d'une catégorie.\n💡 Tape *" + config.PREFIXE + "allmenu* pour voir la liste de toutes les commandes disponibles.\n📌 Exemples :\n• *" + config.PREFIXE + "menu 1*\n• *" + config.PREFIXE + "menu outils*\n\n> ©2025 Sahan maduwantha *MASTER-MD*";
    } else {
      if (_0x54c475[0x0].toLowerCase() === "allmenu") {
        _0x59b36e += "╭──⟪ Toutes les commandes ⟫──╮\n";
        cmd.forEach(_0x3478b3 => {
          _0x59b36e += "├ ߷ [" + _0x3478b3.classe + "] " + _0x3478b3.nom_cmd + "\n";
        });
        _0x59b36e += "╰───────────────────────────╯\n";
      } else {
        const _0x537878 = _0x54c475.join(" ").toLowerCase();
        let _0x5944f4 = null;
        const _0x1eda52 = parseInt(_0x537878, 0xa);
        if (!isNaN(_0x1eda52)) {
          if (_0x1eda52 < 0x1 || _0x1eda52 > _0x443fa6.length) {
            return _0x3eec26.sendMessage(_0x5a69e3, {
              'text': "Catégorie introuvable : " + _0x54c475[0x0]
            }, {
              'quoted': _0x4bfba7
            });
          }
          _0x5944f4 = _0x443fa6[_0x1eda52 - 0x1];
        } else {
          _0x5944f4 = _0x443fa6.find(_0x2b7677 => _0x2b7677.toLowerCase() === _0x537878);
          if (!_0x5944f4) {
            return _0x3eec26.sendMessage(_0x5a69e3, {
              'text': "Catégorie introuvable : " + _0x54c475.join(" ")
            }, {
              'quoted': _0x4bfba7
            });
          }
        }
        _0x59b36e += "╭────⟪ " + _0x5944f4.toUpperCase() + " ⟫────╮\n";
        _0xa3123d[_0x5944f4].forEach(_0x21d03e => {
          _0x59b36e += "├ ߷ " + _0x21d03e.nom_cmd + "\n";
        });
        _0x59b36e += "╰──────────────────╯\n\nTape *" + config.PREFIXE + "menu* pour revenir au menu principal.";
      }
    }
    const [_0x2c67b2] = await WA_CONF.findOrCreate({
      'where': {
        'id': '1'
      },
      'defaults': {
        'id': '1',
        'mention': '1'
      }
    });
    const _0x351bd7 = fs.readFileSync("./lib/theme.json", 'utf8');
    const _0xb6c9c9 = JSON.parse(_0x351bd7);
    let _0x1572b8;
    if (_0x2c67b2.mention.startsWith('[')) {
      const _0x1f1635 = JSON.parse(_0x2c67b2.mention);
      _0x1572b8 = _0x1f1635[Math.floor(Math.random() * _0x1f1635.length)];
    } else {
      if (_0x2c67b2.mention.startsWith("http")) {
        const _0x1ae597 = JSON.parse(_0x2c67b2.mention);
        _0x1572b8 = _0x1ae597[Math.floor(Math.random() * _0x1ae597.length)];
      } else {
        const _0x3bf513 = _0xb6c9c9.find(_0x249268 => _0x249268.id === _0x2c67b2.mention);
        if (!_0x3bf513) {
          throw new Error();
        }
        _0x1572b8 = _0x3bf513.theme[Math.floor(Math.random() * _0x3bf513.theme.length)];
      }
    }
    try {
      if (_0x1572b8 && _0x1572b8.endsWith(".mp4")) {
        await _0x3eec26.sendMessage(_0x5a69e3, {
          'video': {
            'url': _0x1572b8
          },
          'caption': stylize(_0x59b36e),
          'gifPlayback': true
        }, {
          'quoted': _0x4bfba7
        });
      } else {
        if (_0x1572b8) {
          await _0x3eec26.sendMessage(_0x5a69e3, {
            'image': {
              'url': _0x1572b8
            },
            'caption': stylize(_0x59b36e)
          }, {
            'quoted': _0x4bfba7
          });
        } else {
          throw new Error();
        }
      }
    } catch {
      await _0x3eec26.sendMessage(_0x5a69e3, {
        'text': stylize(_0x59b36e)
      }, {
        'quoted': _0x4bfba7
      });
    }
  } catch {
    await _0x3eec26.sendMessage(_0x5a69e3, {
      'text': "Une erreur est survenue lors de la génération du menu."
    }, {
      'quoted': _0x4bfba7
    });
  }
});
ovlcmd({
  'nom_cmd': "allmenu",
  'classe': "Outils",
  'react': '📜',
  'desc': "Affiche toutes les commandes du bot"
}, async (_0x5166b3, _0x1486b7, _0x557c0b) => {
  const {
    ms: _0xed28d8
  } = _0x557c0b;
  try {
    const _0x366f5e = process.uptime();
    const _0x2b0295 = Math.floor(_0x366f5e / 0x15180);
    const _0x5ed3ae = Math.floor(_0x366f5e / 0xe10 % 0x18);
    const _0x5e63c8 = Math.floor(_0x366f5e % 0xe10 / 0x3c);
    const _0x4cdd4a = Math.floor(_0x366f5e % 0x3c);
    let _0x3666ff = '';
    if (_0x2b0295 > 0x0) {
      _0x3666ff += _0x2b0295 + "J ";
    }
    if (_0x5ed3ae > 0x0) {
      _0x3666ff += _0x5ed3ae + "H ";
    }
    if (_0x5e63c8 > 0x0) {
      _0x3666ff += _0x5e63c8 + "M ";
    }
    if (_0x4cdd4a > 0x0) {
      _0x3666ff += _0x4cdd4a + 'S';
    }
    const _0x4d5a96 = new Date();
    const _0x34dc20 = _0x4d5a96.toLocaleDateString("fr-FR");
    const _0x1c32e3 = _0x4d5a96.toLocaleTimeString("fr-FR");
    const _0x2d306e = process.platform;
    const _0x1ea79e = {};
    cmd.forEach(_0x1671e2 => {
      if (!_0x1ea79e[_0x1671e2.classe]) {
        _0x1ea79e[_0x1671e2.classe] = [];
      }
      _0x1ea79e[_0x1671e2.classe].push(_0x1671e2);
    });
    const _0x2dc5ed = Object.keys(_0x1ea79e).sort((_0x1bda4e, _0xd366db) => _0x1bda4e.localeCompare(_0xd366db));
    for (const _0x532ce5 of _0x2dc5ed) {
      _0x1ea79e[_0x532ce5].sort((_0xa8ab, _0x5d3866) => _0xa8ab.nom_cmd.localeCompare(_0x5d3866.nom_cmd, undefined, {
        'numeric': true
      }));
    }
    let _0x985808 = "╭──⟪ " + config.NOM_BOT + " ⟫──╮\n├ ߷ Prefix       : " + config.PREFIXE + "\n├ ߷ Owner         : " + config.NOM_OWNER + "\n├ ߷ Commands  : " + cmd.length + "\n├ ߷ Uptime        : " + _0x3666ff.trim() + "\n├ ߷ Date    : " + _0x34dc20 + "\n├ ߷ Time   : " + _0x1c32e3 + "\n├ ߷ Platform  : " + _0x2d306e + "\n├ ߷ Developer : Sahan\n├ ߷ Version        : " + pkg.version + "\n╰──────────────────╯\n\n";
    for (const _0x119eab of _0x2dc5ed) {
      _0x985808 += "╭──⟪ " + _0x119eab.toUpperCase() + " ⟫──╮\n";
      _0x1ea79e[_0x119eab].forEach(_0x4ebd06 => {
        _0x985808 += "├ ߷ " + _0x4ebd06.nom_cmd + "\n";
      });
      _0x985808 += "╰──────────────────╯\n\n";
    }
    _0x985808 += "> ©2025 OVL-MD-V2 By *AINZ*";
    const [_0x19a7f] = await WA_CONF.findOrCreate({
      'where': {
        'id': '1'
      },
      'defaults': {
        'id': '1',
        'mention': '1'
      }
    });
    const _0x5dd94d = fs.readFileSync("./lib/theme.json", 'utf8');
    const _0x3f6701 = JSON.parse(_0x5dd94d);
    let _0x479f12;
    if (_0x19a7f.mention.startsWith('[')) {
      const _0x1b94ba = JSON.parse(_0x19a7f.mention);
      _0x479f12 = _0x1b94ba[Math.floor(Math.random() * _0x1b94ba.length)];
    } else {
      if (_0x19a7f.mention.startsWith("http://") || _0x19a7f.mention.startsWith("https://")) {
        const _0xeb8d95 = JSON.parse(_0x19a7f.mention);
        _0x479f12 = _0xeb8d95[Math.floor(Math.random() * _0xeb8d95.length)];
      } else {
        const _0xbacd9b = _0x3f6701.find(_0x3f1bf1 => _0x3f1bf1.id === _0x19a7f.mention);
        if (!_0xbacd9b) {
          throw new Error("Thème introuvable");
        }
        _0x479f12 = _0xbacd9b.theme[Math.floor(Math.random() * _0xbacd9b.theme.length)];
      }
    }
    try {
      if (_0x479f12 && _0x479f12.endsWith(".mp4")) {
        await _0x1486b7.sendMessage(_0x5166b3, {
          'video': {
            'url': _0x479f12
          },
          'caption': stylize(_0x985808),
          'gifPlayback': true
        }, {
          'quoted': _0xed28d8
        });
      } else {
        if (_0x479f12) {
          await _0x1486b7.sendMessage(_0x5166b3, {
            'image': {
              'url': _0x479f12
            },
            'caption': stylize(_0x985808)
          }, {
            'quoted': _0xed28d8
          });
        } else {
          throw new Error("Aucun thème trouvé");
        }
      }
    } catch (_0x290b2b) {
      await _0x1486b7.sendMessage(_0x5166b3, {
        'text': stylize(_0x985808)
      }, {
        'quoted': _0xed28d8
      });
    }
  } catch (_0x2264dd) {
    await _0x1486b7.sendMessage(_0x5166b3, {
      'text': "Une erreur est survenue lors de l'affichage du menu complet."
    }, {
      'quoted': _0xed28d8
    });
  }
});
ovlcmd({
  'nom_cmd': 'vv',
  'classe': "Outils",
  'react': '👀',
  'desc': "Affiche un message envoyé en vue unique dans la discussion"
}, async (_0x1733f7, _0x143630, _0x2bd2f9) => {
  const {
    ms: _0xbbeaa1,
    msg_Repondu: _0x2b7196,
    repondre: _0x5bc610
  } = _0x2bd2f9;
  if (!_0x2b7196) {
    return _0x5bc610("Veuillez mentionner un message en vue unique.");
  }
  let _0x6be3dd = Object.keys(_0x2b7196).find(_0xf30aef => _0xf30aef.startsWith("viewOnceMessage"));
  let _0x554ab0 = _0x2b7196;
  if (_0x6be3dd) {
    _0x554ab0 = _0x2b7196[_0x6be3dd].message;
  }
  if (_0x554ab0) {
    if (_0x554ab0.imageMessage && _0x554ab0.imageMessage.viewOnce !== true || _0x554ab0.videoMessage && _0x554ab0.videoMessage.viewOnce !== true || _0x554ab0.audioMessage && _0x554ab0.audioMessage.viewOnce !== true) {
      return _0x5bc610("Ce message n'est pas un message en vue unique.");
    }
  }
  try {
    let _0x2240b2;
    let _0x5d567c = {
      'quoted': _0xbbeaa1
    };
    if (_0x554ab0.imageMessage) {
      _0x2240b2 = await _0x143630.dl_save_media_ms(_0x554ab0.imageMessage);
      await _0x143630.sendMessage(_0x1733f7, {
        'image': {
          'url': _0x2240b2
        },
        'caption': _0x554ab0.imageMessage.caption || ''
      }, _0x5d567c);
    } else {
      if (_0x554ab0.videoMessage) {
        _0x2240b2 = await _0x143630.dl_save_media_ms(_0x554ab0.videoMessage);
        await _0x143630.sendMessage(_0x1733f7, {
          'video': {
            'url': _0x2240b2
          },
          'caption': _0x554ab0.videoMessage.caption || ''
        }, _0x5d567c);
      } else {
        if (_0x554ab0.audioMessage) {
          _0x2240b2 = await _0x143630.dl_save_media_ms(_0x554ab0.audioMessage);
          await _0x143630.sendMessage(_0x1733f7, {
            'audio': {
              'url': _0x2240b2
            },
            'mimetype': "audio/mp4",
            'ptt': false
          }, _0x5d567c);
        } else {
          return _0x5bc610("Ce type de message en vue unique n'est pas pris en charge.");
        }
      }
    }
  } catch (_0x438a1d) {
    console.error("❌ Erreur lors de l'envoi du message en vue unique :", _0x438a1d.message || _0x438a1d);
    return _0x5bc610("Une erreur est survenue lors du traitement du message.");
  }
});
ovlcmd({
  'nom_cmd': "vv2",
  'classe': "Outils",
  'react': '👀',
  'desc': "Affiche un message envoyé en vue unique en inbox"
}, async (_0x4ba6ca, _0x173acb, _0x45bb43) => {
  const {
    ms: _0x3c2c97,
    id_Bot: _0x20e000,
    msg_Repondu: _0x23ce2c,
    repondre: _0x489d61
  } = _0x45bb43;
  if (!_0x23ce2c) {
    return _0x489d61("Veuillez mentionner un message en vue unique.");
  }
  let _0x267643 = Object.keys(_0x23ce2c).find(_0x4779f4 => _0x4779f4.startsWith("viewOnceMessage"));
  let _0x5211e1 = _0x23ce2c;
  if (_0x267643) {
    _0x5211e1 = _0x23ce2c[_0x267643].message;
  }
  if (_0x5211e1) {
    if (_0x5211e1.imageMessage && _0x5211e1.imageMessage.viewOnce !== true || _0x5211e1.videoMessage && _0x5211e1.videoMessage.viewOnce !== true || _0x5211e1.audioMessage && _0x5211e1.audioMessage.viewOnce !== true) {
      return _0x489d61("Ce message n'est pas un message en vue unique.");
    }
  }
  try {
    let _0x2852d7;
    let _0xb6a4a8 = {
      'quoted': _0x3c2c97
    };
    if (_0x5211e1.imageMessage) {
      _0x2852d7 = await _0x173acb.dl_save_media_ms(_0x5211e1.imageMessage);
      await _0x173acb.sendMessage(_0x20e000, {
        'image': {
          'url': _0x2852d7
        },
        'caption': _0x5211e1.imageMessage.caption || ''
      }, _0xb6a4a8);
    } else {
      if (_0x5211e1.videoMessage) {
        _0x2852d7 = await _0x173acb.dl_save_media_ms(_0x5211e1.videoMessage);
        await _0x173acb.sendMessage(_0x20e000, {
          'video': {
            'url': _0x2852d7
          },
          'caption': _0x5211e1.videoMessage.caption || ''
        }, _0xb6a4a8);
      } else {
        if (_0x5211e1.audioMessage) {
          _0x2852d7 = await _0x173acb.dl_save_media_ms(_0x5211e1.audioMessage);
          await _0x173acb.sendMessage(_0x20e000, {
            'audio': {
              'url': _0x2852d7
            },
            'mimetype': "audio/mp4",
            'ptt': false
          }, _0xb6a4a8);
        } else {
          return _0x489d61("Ce type de message en vue unique n'est pas pris en charge.");
        }
      }
    }
  } catch (_0x91572a) {
    console.error("❌ Erreur lors de l'envoi du message en vue unique :", _0x91572a.message || _0x91572a);
    return _0x489d61("Une erreur est survenue lors du traitement du message.");
  }
});
ovlcmd({
  'nom_cmd': "ping",
  'classe': "Outils",
  'react': '🏓',
  'desc': "Mesure la latence du bot."
}, async (_0x4f9cb2, _0x168876, _0x2b441c) => {
  const _0x3ee768 = Date.now();
  const _0x2619c7 = await _0x168876.sendMessage(_0x4f9cb2, {
    'text': "*MASTER MD PING...*"
  }, {
    'quoted': _0x2b441c.ms
  });
  const _0x42303f = Date.now();
  const _0x24ef7d = _0x42303f - _0x3ee768;
  await _0x168876.sendMessage(_0x4f9cb2, {
    'edit': _0x2619c7.key,
    'text': "*🏓 Pong ! Latence : " + _0x24ef7d + "ms*"
  });
});
ovlcmd({
  'nom_cmd': 'uptime',
  'classe': "Outils",
  'react': '⏱️',
  'desc': "Affiche le temps de fonctionnement du bot.",
  'alias': ["upt"]
}, async (_0x1fb8d7, _0x54222c, _0x4a82c8) => {
  const _0x23aa81 = process.uptime();
  const _0x136d66 = Math.floor(_0x23aa81 / 0x15180);
  const _0x5374e3 = Math.floor(_0x23aa81 / 0xe10 % 0x18);
  const _0x41c31c = Math.floor(_0x23aa81 % 0xe10 / 0x3c);
  const _0x4ee9a5 = Math.floor(_0x23aa81 % 0x3c);
  let _0x46a699 = '';
  if (_0x136d66 > 0x0) {
    _0x46a699 += _0x136d66 + "J ";
  }
  if (_0x5374e3 > 0x0) {
    _0x46a699 += _0x5374e3 + "H ";
  }
  if (_0x41c31c > 0x0) {
    _0x46a699 += _0x41c31c + "M ";
  }
  if (_0x4ee9a5 > 0x0) {
    _0x46a699 += _0x4ee9a5 + 'S';
  }
  await _0x54222c.sendMessage(_0x1fb8d7, {
    'text': "⏳ Temps de fonctionnement : " + _0x46a699
  }, {
    'quoted': _0x4a82c8.ms
  });
});
ovlcmd({
  'nom_cmd': 'translate',
  'classe': "Outils",
  'react': '🌍',
  'desc': "Traduit un texte dans la langue spécifiée.",
  'alias': ["trt"]
}, async (_0x410765, _0x4d3b01, _0xbcc25) => {
  const {
    arg: _0x1b249d,
    ms: _0x1462c2,
    msg_Repondu: _0x19212b
  } = _0xbcc25;
  let _0x3cee28;
  let _0x2c57cf;
  if (_0x19212b && _0x1b249d.length === 0x1) {
    _0x3cee28 = _0x1b249d[0x0];
    _0x2c57cf = _0x19212b.conversation || _0x19212b.extendedTextMessage?.["text"];
  } else {
    if (_0x1b249d.length >= 0x2) {
      _0x3cee28 = _0x1b249d[0x0];
      _0x2c57cf = _0x1b249d.slice(0x1).join(" ");
    } else {
      return await _0x4d3b01.sendMessage(_0x410765, {
        'text': "Utilisation : " + prefixe + "translate <langue> <texte> ou répondre à un message avec : " + prefixe + "translate <langue>"
      }, {
        'quoted': _0x1462c2
      });
    }
  }
  try {
    const _0x3583d9 = await translate(_0x2c57cf, {
      'to': _0x3cee28
    });
    await _0x4d3b01.sendMessage(_0x410765, {
      'text': "🌐Traduction (" + _0x3cee28 + ") :\n" + _0x3583d9.text
    }, {
      'quoted': _0x1462c2
    });
  } catch (_0xc25fed) {
    console.error("Erreur lors de la traduction:", _0xc25fed);
    await _0x4d3b01.sendMessage(_0x410765, {
      'text': "Erreur lors de la traduction. Vérifiez la langue et le texte fournis."
    }, {
      'quoted': _0x1462c2
    });
  }
});
ovlcmd({
  'nom_cmd': "capture",
  'classe': "Outils",
  'react': '📸',
  'desc': "Prend une capture d'écran d'un site web."
}, async (_0x2b0065, _0x58f39f, {
  arg: _0x37e25e,
  ms: _0x381476
}) => {
  if (!_0x37e25e[0x0]) {
    return _0x58f39f.sendMessage(_0x2b0065, {
      'text': "Entrez un lien"
    }, {
      'quoted': _0x381476
    });
  }
  const _0x5233b4 = _0x37e25e[0x0];
  try {
    const _0x17a77c = await axios.get('https://eliteprotech-apis.zone.id/ssweb?url=' + encodeURIComponent(_0x5233b4), {
      'responseType': "arraybuffer"
    });
    await _0x58f39f.sendMessage(_0x2b0065, {
      'image': _0x17a77c.data,
      'caption': "Voici la capture d'écran de: " + _0x5233b4
    }, {
      'quoted': _0x381476
    });
  } catch (_0xdc1585) {
    console.error("Erreur lors de la capture de l'écran:", _0xdc1585.message);
    await _0x58f39f.sendMessage(_0x2b0065, {
      'text': "Une erreur est survenue lors de la capture du site. Veuillez réessayer plus tard."
    }, {
      'quoted': _0x381476
    });
  }
});
ovlcmd({
  'nom_cmd': "system_status",
  'classe': "Outils",
  'react': "🖥️",
  'desc': "Affiche les informations du système en temps réel"
}, async (_0x2f1555, _0x4f0853, _0x27b155) => {
  const _0x383e06 = os.platform();
  const _0xeae317 = os.arch();
  const _0x44e007 = os.cpus();
  const _0x514d0f = (os.totalmem() / 1073741824).toFixed(0x2);
  const _0x122595 = (os.freemem() / 1073741824).toFixed(0x2);
  const _0x4f6508 = os.hostname();
  const _0x245cef = os.loadavg();
  const _0x188cf4 = os.uptime();
  const _0x2748c7 = Math.floor(_0x188cf4 / 0x15180);
  const _0x14d292 = Math.floor(_0x188cf4 / 0xe10 % 0x18);
  const _0x4a6f83 = Math.floor(_0x188cf4 % 0xe10 / 0x3c);
  const _0x317768 = Math.floor(_0x188cf4 % 0x3c);
  let _0x78a0e6 = '';
  if (_0x2748c7 > 0x0) {
    _0x78a0e6 += _0x2748c7 + "J ";
  }
  if (_0x14d292 > 0x0) {
    _0x78a0e6 += _0x14d292 + "H ";
  }
  if (_0x4a6f83 > 0x0) {
    _0x78a0e6 += _0x4a6f83 + "M ";
  }
  if (_0x317768 > 0x0) {
    _0x78a0e6 += _0x317768 + 'S';
  }
  const _0x49a4e3 = _0x44e007.map(_0x35b979 => {
    let _0x560e69 = 0x0;
    for (type in _0x35b979.times) {
      _0x560e69 += _0x35b979.times[type];
    }
    const _0x4d3be8 = (0x64 - _0x35b979.times.idle / _0x560e69 * 0x64).toFixed(0x2);
    return _0x4d3be8 + '%';
  }).join(", ");
  const _0x13636c = (0x64 - _0x245cef[0x0] * 0x64 / _0x44e007.length).toFixed(0x2);
  await _0x4f0853.sendMessage(_0x2f1555, {
    'text': "🖥️ *ÉTAT DU SYSTÈME*\n\n" + ("⚡ *Vitesse du serveur*: " + _0x13636c + " %\n") + ("🖧 *Charge Moyenne*: " + _0x245cef.map(_0x6ef2be => _0x6ef2be.toFixed(0x2)).join(", ") + "\n") + ("⏳ *Uptime*: " + _0x78a0e6.trim() + "\n") + ("💻 *Plateforme*: " + _0x383e06 + "\n") + ("🔧 *Architecture*: " + _0xeae317 + "\n") + ("🖧 *Processeur*: " + _0x44e007.length + " Cœur(s) (" + _0x49a4e3 + ")\n") + ("💾 *Mémoire Totale*: " + _0x514d0f + " GB\n") + ("🆓 *Mémoire Libre*: " + _0x122595 + " GB\n") + ("🌐 *Nom de l'Hôte*: " + _0x4f6508 + "\n") + ("🎉 *Version*: OVL-MD " + pkg.version)
  }, {
    'quoted': _0x27b155.ms
  });
});
ovlcmd({
  'nom_cmd': "tempmail",
  'classe': "Outils",
  'react': '📧',
  'desc': "Crée un email temporaire."
}, async (_0x431c01, _0x30aa6a, _0x2da2f3) => {
  const {
    ms: _0x41725a
  } = _0x2da2f3;
  try {
    const _0x3623c7 = new TempMail();
    const _0x289ce3 = await _0x3623c7.createInbox();
    const _0x28340b = "Voici votre adresse email temporaire : " + _0x289ce3.address + "\n\nVotre token est : " + _0x289ce3.token + "\n\nPour récupérer vos messages, utilisez <tempinbox votre-token>.";
    await _0x30aa6a.sendMessage(_0x431c01, {
      'text': _0x28340b
    }, {
      'quoted': _0x41725a
    });
  } catch (_0x215381) {
    console.error(_0x215381);
    return _0x30aa6a.sendMessage(_0x431c01, {
      'text': "Une erreur s'est produite lors de la création de l'email temporaire."
    }, {
      'quoted': _0x41725a
    });
  }
});
ovlcmd({
  'nom_cmd': "tempinbox",
  'classe': "Outils",
  'react': '📩',
  'desc': "Récupère les messages d'un email temporaire."
}, async (_0x5e57b3, _0x1939ac, _0x50b9f6) => {
  const {
    arg: _0x247b5e,
    ms: _0x2aec05
  } = _0x50b9f6;
  if (!_0x247b5e[0x0]) {
    return _0x1939ac.sendMessage(_0x5e57b3, {
      'text': "Pour récupérer les messages de votre email temporaire, fournissez le token qui a été émis."
    });
  }
  try {
    const _0x921b92 = new TempMail();
    const _0xa718b7 = await _0x921b92.checkInbox(_0x247b5e[0x0]);
    if (!_0xa718b7 || _0xa718b7.length === 0x0) {
      return _0x1939ac.sendMessage(_0x5e57b3, {
        'text': "Aucun message trouvé pour ce token."
      }, {
        'quoted': _0x2aec05
      });
    }
    for (let _0x496974 = 0x0; _0x496974 < _0xa718b7.length; _0x496974++) {
      const _0x134489 = _0xa718b7[_0x496974];
      const _0x363fcf = _0x134489.sender;
      const _0x3d14fd = _0x134489.subject;
      const _0x44c61d = new Date(_0x134489.date).toLocaleString();
      const _0x5d498e = _0x134489.body;
      const _0x2ba734 = "👥 Expéditeur : " + _0x363fcf + "\n📝 Sujet : " + _0x3d14fd + "\n🕜 Date : " + _0x44c61d + "\n📩 Message : " + _0x5d498e;
      await _0x1939ac.sendMessage(_0x5e57b3, {
        'text': _0x2ba734
      }, {
        'quoted': _0x2aec05
      });
    }
  } catch (_0x47b73a) {
    console.error(_0x47b73a);
    return _0x1939ac.sendMessage(_0x5e57b3, {
      'text': "Une erreur est survenue lors de la récupération des messages de l'email temporaire."
    }, {
      'quoted': _0x2aec05
    });
  }
});
ovlcmd({
  'nom_cmd': "obfuscate",
  'classe': "Outils",
  'react': '📥',
  'desc': "Obfusque du code JavaScript",
  'alias': ["obf"]
}, async (_0x5a84d0, _0x17d400, _0x4b8b65) => {
  const {
    arg: _0x5057a2,
    repondre: _0xe31a22,
    ms: _0x94bae6
  } = _0x4b8b65;
  if (!_0x5057a2 || _0x5057a2.length === 0x0) {
    return _0xe31a22("Veuillez fournir le code JavaScript à obfusquer.");
  }
  const _0x37c47d = _0x5057a2.join(" ");
  try {
    _0xe31a22("🔄obfucation en cours...");
    const _0xba834 = JavaScriptObfuscator.obfuscate(_0x37c47d, {
      'compact': true,
      'controlFlowFlattening': true
    }).getObfuscatedCode();
    const _0x165a54 = path.join(__dirname, "obfuscate.js");
    fs.writeFileSync(_0x165a54, _0xba834);
    await _0x17d400.sendMessage(_0x5a84d0, {
      'document': {
        'url': _0x165a54
      },
      'mimetype': "application/javascript",
      'fileName': "obfuscate.js"
    }, {
      'quoted': _0x94bae6
    });
    fs.unlinkSync(_0x165a54);
  } catch (_0x5d6521) {
    console.error(_0x5d6521);
    _0xe31a22("Une erreur est survenue lors de l'obfuscation du code.");
  }
});
ovlcmd({
  'nom_cmd': 'qr',
  'classe': "Outils",
  'desc': "Génère un QR code pour obtenir une session_id."
}, async (_0x4f0a0f, _0x1f6892, {
  ms: _0x519074
}) => {
  try {
    const _0x5c1b38 = await axios.get("https://ovl-web.koyeb.app/qr");
    const _0x361b3d = _0x5c1b38.data.qr;
    const _0xd8a28e = path.join(__dirname, 'qr_code.png');
    fs.writeFile(_0xd8a28e, _0x361b3d, "base64", async _0x23fe0d => {
      if (_0x23fe0d) {
        await _0x1f6892.sendMessage(_0x4f0a0f, {
          'text': "❌ Une erreur est survenue lors de la génération du QR code."
        }, {
          'quoted': _0x519074
        });
      } else {
        const _0x389b5c = await _0x1f6892.sendMessage(_0x4f0a0f, {
          'image': {
            'url': _0xd8a28e
          }
        });
        await _0x1f6892.sendMessage(_0x4f0a0f, {
          'text': "✅ Scannez ce QR code dans *WhatsApp > Appareils connectés > Connecter un appareil*."
        }, {
          'quoted': _0x389b5c
        });
      }
    });
  } catch (_0x5ca145) {
    await _0x1f6892.sendMessage(_0x4f0a0f, {
      'text': "❌ Une erreur est survenue lors de la génération du QR code."
    }, {
      'quoted': _0x519074
    });
  }
});
ovlcmd({
  'nom_cmd': "pair",
  'classe': "Outils",
  'desc': "Génère un pair_code pour obtenir une session_id"
}, async (_0x542dc0, _0x267fd6, {
  arg: _0x2cd024,
  ms: _0x17153c
}) => {
  if (!_0x2cd024.length) {
    return await _0x267fd6.sendMessage(_0x542dc0, {
      'text': "❌ Veuillez entrer un numéro de téléphone. Exemple :\n\n`pair 226XXXXXXXX`"
    }, {
      'quoted': _0x17153c
    });
  }
  const _0x1a3dc2 = _0x2cd024.join(" ");
  try {
    const _0x3e5103 = await axios.get("https://ovl-web.koyeb.app/code?number=" + _0x1a3dc2);
    const _0x1a5800 = _0x3e5103.data.code || 'indisponible';
    const _0x11edc5 = await _0x267fd6.sendMessage(_0x542dc0, {
      'text': _0x1a5800
    });
    await _0x267fd6.sendMessage(_0x542dc0, {
      'text': "✅ Entrez ce code dans *WhatsApp > Appareils connectés > Connecter un appareil > Appairer avec un code*."
    }, {
      'quoted': _0x11edc5
    });
  } catch (_0x19d87c) {
    await _0x267fd6.sendMessage(_0x542dc0, {
      'text': "❌ Une erreur est survenue lors de la génération du code."
    }, {
      'quoted': _0x17153c
    });
  }
});
ovlcmd({
  'nom_cmd': "gitclone",
  'classe': "Outils",
  'react': '📥',
  'desc': "clone un repo Git",
  'alias': ["gcl"]
}, async (_0x4c561f, _0x213928, _0x4e0197) => {
  const {
    arg: _0x5f3a10,
    repondre: _0x38b07a,
    ms: _0x517e7a
  } = _0x4e0197;
  if (!_0x5f3a10 || _0x5f3a10.length < 0x1) {
    return _0x38b07a("Veuillez fournir l'URL du dépôt Git à cloner.");
  }
  const _0x6ad81c = _0x5f3a10[0x0];
  const _0xadcc98 = _0x6ad81c + '.git';
  const _0x2c0b60 = _0x5f3a10[0x1] ? _0x5f3a10[0x1] : path.basename(_0xadcc98, '.git');
  const _0x2be4fa = _0x2c0b60 + ".zip";
  const _0x5f0b55 = /^(https?:\/\/|git@)([\w.@:\/-]+)(\.git)(\/?)$/;
  if (!_0x5f0b55.test(_0xadcc98)) {
    return _0x38b07a("URL de dépôt Git invalide.");
  }
  try {
    _0x38b07a("🔄Clonage du dépôt en cours...");
    exec("git clone " + _0xadcc98 + " " + _0x2c0b60, (_0x3f6fe2, _0x599398, _0x5226a8) => {
      if (_0x3f6fe2) {
        return _0x38b07a("Erreur lors du clonage du dépôt : " + _0x3f6fe2.message);
      }
      try {
        const _0x47cac4 = new AdmZip();
        _0x47cac4.addLocalFolder(_0x2c0b60);
        _0x47cac4.writeZip(_0x2be4fa);
        const _0x3fc585 = {
          'document': fs.readFileSync(_0x2be4fa),
          'mimetype': "application/zip",
          'fileName': _0x2c0b60 + ".zip"
        };
        _0x213928.sendMessage(_0x4c561f, _0x3fc585, {
          'quoted': _0x517e7a
        });
        fs.rmSync(_0x2c0b60, {
          'recursive': true,
          'force': true
        });
        fs.unlinkSync(_0x2be4fa);
      } catch (_0x67b891) {
        _0x38b07a("Erreur lors de la compression en zip : " + _0x67b891.message);
      }
    });
  } catch (_0x1ee628) {
    console.error(_0x1ee628);
    _0x38b07a("Une erreur est survenue lors du clonage du dépôt.");
  }
});
ovlcmd({
  'nom_cmd': 'owner',
  'classe': 'Outils',
  'react': '🔅',
  'desc': "Numero du propriétaire du bot"
}, async (_0x1d2128, _0x5dc87d, _0x1b1bab) => {
  const _0x342c61 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + config.NOM_OWNER + "\n" + "ORG:undefined;\n" + "TEL;type=CELL;type=VOICE;waid=" + config.NUMERO_OWNER + ':+' + config.NUMERO_OWNER + "\n" + "END:VCARD";
  _0x5dc87d.sendMessage(_0x1d2128, {
    'contacts': {
      'displayName': config.NOM_OWNER,
      'contacts': [{
        'vcard': _0x342c61
      }]
    }
  }, {
    'quoted': _0x1b1bab.ms
  });
});
ovlcmd({
  'nom_cmd': "developer",
  'classe': "Outils",
  'react': '🔅',
  'desc': "Numero du créateur du bot",
  'alias': ['dev']
}, async (_0x872a1e, _0x50234a, _0x46643c) => {
  _0x50234a.sendMessage(_0x872a1e, {
    'contacts': {
      'displayName': "Ainz",
      'contacts': [{
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:Ainz\nORG:undefined;\nTEL;type=CELL;type=VOICE;waid=22651463203:+22651463203\nEND:VCARD"
      }]
    }
  }, {
    'quoted': _0x46643c.ms
  });
});
ovlcmd({
  'nom_cmd': "support",
  'classe': 'Outils',
  'react': '📩',
  'desc': "Lien vers les groupes de support du bot"
}, async (_0x149261, _0x540b8a, _0x54a33b) => {
  const {
    verif_Groupe: _0x1d3a9a,
    repondre: _0x2ea3a7,
    auteur_Message: _0x26a39f,
    ms: _0x1bf5a7
  } = _0x54a33b;
  const _0x44936b = ["https://chat.whatsapp.com/HzhikAmOuYhFXGLmcyMo62", 'https://chat.whatsapp.com/BP1oOMh0QvR7H3vvO9bRYK'];
  const _0x22024f = "📩 *OVL-MD SUPPORT*\nVoici les liens pour rejoindre les groupes de support:\n\n" + _0x44936b.map(_0x178478 => "🔗 " + _0x178478).join("\n\n");
  if (_0x1d3a9a) {
    await _0x2ea3a7("📩 Les liens d'invitation ont été envoyés en message privé.");
    await _0x540b8a.sendMessage(_0x26a39f, {
      'text': _0x22024f
    }, {
      'quoted': _0x1bf5a7
    });
  } else {
    await _0x540b8a.sendMessage(_0x149261, {
      'text': _0x22024f
    }, {
      'quoted': _0x1bf5a7
    });
  }
});
ovlcmd({
  'nom_cmd': "repo",
  'alias': ['sc', "script", "code_source", "repository"],
  'classe': "Outils",
  'react': '📦',
  'desc': "Affiche les informations et le lien du repository du bot"
}, async (_0x3ec5c9, _0x197b6b, {
  ms: _0x1e472f,
  repondre: _0x359c1a
}) => {
  let _0x49110b;
  try {
    const {
      data: _0x169267
    } = await axios.get('https://api.github.com/repos/Ainz-devs/OVL-MD-V2');
    _0x49110b = "\n╭───⟪ 📦 OVL-MD-V2 ⟫───╮\n│ ⇨ ⭐ Stars       : " + _0x169267.stargazers_count + "\n│ ⇨ 🍴 Forks       : " + _0x169267.forks_count + "\n│ ⇨ 🔄 Dernière MAJ : " + new Date(_0x169267.pushed_at).toLocaleDateString('fr-FR') + "\n│ ⇨ 🔗 Repo        : " + _0x169267.html_url + "\n╰───────────────────╯\n> ©2025 ᴏᴠʟ-ᴍᴅ-ᴠ2 ʙʏ *ᴀɪɴᴢ*";
  } catch (_0x579e60) {
    console.error("Erreur récupération API :", _0x579e60);
    _0x49110b = "\n╭───⟪ 📦 OVL-MD-V2 ⟫───╮\n│ 🔗 Repo : https://github.com/Ainz-devs/OVL-MD-V2\n╰───────────────────╯\n> ©2025 ᴏᴠʟ-ᴍᴅ-ᴠ2 ʙʏ *ᴀɪɴᴢ*";
  }
  try {
    await _0x197b6b.sendMessage(_0x3ec5c9, {
      'image': {
        'url': "https://files.catbox.moe/lojrxz.jpg"
      },
      'caption': _0x49110b,
      'contextInfo': contextInfo
    }, {
      'quoted': _0x1e472f
    });
  } catch (_0x169db5) {
    console.error("Erreur envoi avec image :", _0x169db5);
    await _0x197b6b.sendMessage(_0x3ec5c9, {
      'text': _0x49110b,
      'contextInfo': contextInfo
    }, {
      'quoted': _0x1e472f
    });
  }
});
