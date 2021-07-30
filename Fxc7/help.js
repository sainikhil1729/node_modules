const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { return`╭──────「 *_rules_* 」
┴
│× ꜱᴘᴀᴍ
│× phone
│violate? ʙʟᴏᴄᴋ!
│type #ᴍᴇɴᴜ
│to view dns bot features
┬
╰──────「 *_sainikhil_* 」
`
}

exports.help = help

// bot active counter
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (6060));
  var minutes = Math.floor(seconds % (6060) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} hour ${pad(minutes)} minute ${pad(seconds)} Seconds`
}

// info bot 
const bottt = (prefix) => {
return `
*if you want to use this bot, please join the owner sainikhil bot group*

https://chat.whatsapp.com/CVKfa6nywQLCXiEzwFE8PG
`
}
exports.bottt = bottt
// donation menu
const donasi = (name) => { 
	return `       
╭──────「 *_donation_* 」
┴
│√ paytm : 9912272293
│√ googlepay : 9912272293
│
│\`\`\`ᴘᴜʟꜱᴀ\`\`\`
│5ᴋ invite bots to the group for 1 month
┬
╰──────「 *_sainikhil_* 」
`
}
exports.donasi = donasi
// language list
const bahasa = (prefix) => {
return `
List of Languages ​​For Command ${prefix}tts

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*sorry ${pushname2} Today's limit is over*\ɴ*the limit is reset every hour 12:00 midnight*`
}

const limitcount = (limitCounts) => {
        return`
Limit your: *${limitCounts}*
`
}

exports.limitend = limitend
exports.limitcount = limitcount
