import * as Tone from 'tone'

//Guitar
const guitarGroove1 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2Fguitar14.mp3?alt=media&token=fec680e6-974f-4745-a1a1-906aeb03402f'
}).toMaster()
const guitarGroove2 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2FguitarGroove2.mp3?alt=media&token=db69e346-fb01-47b0-a599-113acec75b50'
}).toMaster()
const guitarGroove3 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2FguitarGroove3.mp3?alt=media&token=92d3e1cd-d6a8-473e-98a0-580f79f99d3e'
}).toMaster()
const guitarLick1 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2FguitarLick1.mp3?alt=media&token=44d97a4d-65f2-4c7e-8e4a-8273593f062b'
}).toMaster()
const guitarLick2 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2FguitarLick2.mp3?alt=media&token=b225c701-fd84-4856-adcd-940df7c8e0e4'
}).toMaster()
const guitarLick3 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2FguitarLick3.mp3?alt=media&token=8ddd8b28-346e-43fc-8c92-1c2cb5d24788'
}).toMaster()
const guitarLick4 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2FguitarLick4.mp3?alt=media&token=c22c6f58-0e80-4700-80a4-0b4df21d5e7f'
}).toMaster()
const guitarLick5 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2FguitarLick5.mp3?alt=media&token=9c8a1da1-0c82-48c1-b445-ae6cc31d4a3e'
}).toMaster()
const guitarLick6 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2Fguitar1.mp3?alt=media&token=eccd1b5f-4a0f-44a4-9718-8124707f3fad'
}).toMaster()
const guitarLick7 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2Fguitar3.mp3?alt=media&token=d00a1335-759d-4691-9972-8d10f00f71bd'
}).toMaster()
const guitarLick8 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Guitar%2Fguitar7.mp3?alt=media&token=536c5152-c3cf-4c8b-9776-d558f9fbafc5'
}).toMaster()

//Keys
const keysCmaj7 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Keys%2Fcmaj7.mp3?alt=media&token=daf0edae-2ee7-46e9-9cf7-3af6e0f8b9d2'
}).toMaster()
const keysDmin7 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Keys%2Fdmin7.mp3?alt=media&token=654cc19f-158a-436d-bc7b-fadd270d855a'
}).toMaster()
const keysEmin7 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Keys%2Femin7.mp3?alt=media&token=b2673489-d5b0-444d-8802-84eb81d85c93'
}).toMaster()
const keysFmaj7 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Keys%2Ffmaj7.mp3?alt=media&token=3c23e46a-0d23-4545-b6c5-abd9c5a709c1'
}).toMaster()
const keysG7 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Keys%2Fg7.mp3?alt=media&token=2775dd53-adfa-49d3-af65-2a05a40bde2c'
}).toMaster()
const keysAmin7 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Keys%2Famin7.mp3?alt=media&token=6fcde7f2-a2e9-497f-b953-1d91078d8890'
}).toMaster()
const keysBm7b5 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Keys%2Fbm7b5.mp3?alt=media&token=7f81ecfe-afe7-4745-afda-7886640934fd'
}).toMaster()
const keysCmaj7Oct = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Keys%2Fcmaj7Oct.mp3?alt=media&token=3d617347-39bf-425b-8173-aea7033225c2'
}).toMaster()
const minRoll = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Keys%2FminRoll.mp3?alt=media&token=3c835536-9700-4942-9fd4-cdfc77ea1c1b'
}).toMaster()

//Drums
const kick = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Drums%2Fkick.mp3?alt=media&token=bb2eaaf7-136f-48a6-bc2d-0edb58528677'
}).toMaster()
const snare = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Drums%2Fsnare.mp3?alt=media&token=d1a67583-0750-4c12-9285-2914be98ad94'
}).toMaster()
const closedHat = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Drums%2FclosedHat.mp3?alt=media&token=9ab0be4d-c670-49bd-bb6f-bb5e6fbe1ac8'
}).toMaster()

//Vocals
const badBitch = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FbadBitchWhoYouCantKill.mp3?alt=media&token=f6809247-486c-48fa-8870-d0f3cb0b2a33'
}).toMaster()
const lettuceTurnipDaBeet = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FlettuceTurnipTheBeat.mp3?alt=media&token=07800535-53e4-42a7-9ea7-7c980798c754'
}).toMaster()
const itsTime = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FitsTime.mp3?alt=media&token=571177b2-ff7d-4f9c-a5a1-a3292a595404'
}).toMaster()
const turnip = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fturnip.mp3?alt=media&token=7b4196e4-4018-4ae8-be86-1891700b78dd'
}).toMaster()
const daBeat = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FdaBeet.mp3?alt=media&token=7bfb0a4d-e99d-4c6a-b042-89106fbd63c6'
}).toMaster()
const flowerPower = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FflowerPower.mp3?alt=media&token=34ad297d-3439-4d52-bc94-100857dc8e54'
}).toMaster()
const holyGuac = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FholyGuac.mp3?alt=media&token=e0ca8847-33d0-4861-aea7-766657366703'
}).toMaster()
const wikiWiki = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fwikiwiki.mp3?alt=media&token=2e1fd6fb-0c35-468d-9513-78dc484175ad'
}).toMaster()
const oof = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Foof.mp3?alt=media&token=9a2ecbc7-634e-4564-83b8-5e48f915e0b2'
}).toMaster()
const skrrt = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fskrrt.mp3?alt=media&token=f809003e-f210-4569-9db3-ce48f737eb57'
}).toMaster()
const bonkers = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fbonkers.mp3?alt=media&token=139d5105-a34b-4eca-8e6b-8d5d02b8685c'
}).toMaster()
const hummus = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fhummus.mp3?alt=media&token=d8e9fdff-d77e-4591-87bc-7fb2e1fa2a75'
}).toMaster()

//Extra Vocals
const baller = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fballer.mp3?alt=media&token=4b555587-d427-4985-88c4-854904f3b2d2'
}).toMaster()
const bigOof = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FbigOof.mp3?alt=media&token=54303be0-02f0-43b8-8397-ec0868fea393'
}).toMaster()
const bro = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fbro.mp3?alt=media&token=14bf32a2-f867-470a-bd06-7ce11297100f'
}).toMaster()
const cool = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fcool.mp3?alt=media&token=3d656740-64f9-47ab-9609-bc6390072d93'
}).toMaster()
const hahaha = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fhahaha.mp3?alt=media&token=c45337f2-976b-4952-ab87-e29bc8cc6a41'
}).toMaster()
const hotDamn = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FhotDamn.mp3?alt=media&token=4bd5d47c-b61d-45d2-94fe-ca7fd9e4dfb3'
}).toMaster()
const iCantSwim = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FiCantSwim.mp3?alt=media&token=4d176d80-edcd-4534-8dc0-8e68ef87ee27'
}).toMaster()
const lit = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Flit.mp3?alt=media&token=546049ec-97b0-47ad-8d99-15083fdd47c7'
}).toMaster()
const noWay = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FnoWay.mp3?alt=media&token=3ce34169-6d55-48cd-b8da-e26fd4e8f16f'
}).toMaster()
const ohYeah = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FohYeah.mp3?alt=media&token=3e8e5d62-bad3-45cc-a43f-9c52def9a708'
}).toMaster()
const sick = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fsiiick.mp3?alt=media&token=d457bd3c-828b-4321-9770-6f08f4aad29f'
}).toMaster()
const snapCracklePop = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FsnapCracklePop.mp3?alt=media&token=c86e8fc3-81bd-4444-9812-84679550839a'
}).toMaster()

const wow = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fwooow.mp3?alt=media&token=0f573b55-39ac-4998-8a1d-25d2eea94cf1'
}).toMaster()
const yeah = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2Fyeah.mp3?alt=media&token=adb929e6-f6a8-4ffc-8264-de0f68d33496'
}).toMaster()
const youGotIt = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/Emma%2FyouGotIt.mp3?alt=media&token=e6212d6a-7d6e-4b87-93e3-1d0d9e1b58c7'
}).toMaster()

// qRow: {
//   q: {note: kick, label: 'Kick'},
//   w: {note: snare, label: 'Snare'},
//   e: {note: hat, label: 'Hat'},
//   r: {note: chord1, label: 'Chord 1'},
//   t: {note: chord2, label: 'Chord 2'},
//   y: {note: chord3, label: 'Chord 3'},
//   u: {note: chord4, label: 'Chord 4'},
//   i: {note: chord5, label: 'Chord 5'},
//   o: null,
//   p: null,
//   '[': null,
//   ']': null
// },
// aRow: {
//   a: null,
//   s: null,
//   d: null,
//   f: {note: cmaj7, label: 'C Maj 7'},
//   g: {note: dmin7, label: 'D Min 7'},
//   h: {note: emin7, label: 'E Min 7'},
//   j: {note: fmaj7, label: 'F Maj 7'},
//   k: {note: g7, label: 'G7'},
//   l: {note: amin7, label: 'A Min 7'},
//   ';': {note: bmin7b5, label: 'B Min 7'},
//   "'": {note: cmaj7Oct, label: 'C Maj 70ct'}

export const defaultBoard = {
  numberRow: {
    '1': {note: kick, label: 'Kick'},
    '2': {note: snare, label: 'Snare'},
    '3': {note: closedHat, label: 'Hat'},
    '4': {note: lit, label: 'Lit'},
    '5': {note: sick, label: 'Sick'},
    '6': {note: hotDamn, label: 'Hot Damn'},
    '7': {note: hahaha, label: 'Hehehehe'},
    '8': {note: wow, label: 'Wow!'},
    '9': {note: yeah, label: 'Yeah'},
    '0': {note: youGotIt, label: 'You got it!'},
    '-': {note: bigOof, label: 'Big Oof'},
    '=': {note: iCantSwim, label: 'Swim'}
  },
  qRow: {
    q: {note: badBitch, label: 'Bad Bitch'},
    w: {note: lettuceTurnipDaBeet, label: 'Turnip'},
    e: {note: itsTime, label: 'Time'},
    r: {note: turnip, label: 'Turnip2'},
    t: {note: daBeat, label: 'Da Beat'},
    y: {note: flowerPower, label: 'Flowers!'},
    u: {note: holyGuac, label: 'Guac'},
    i: {note: wikiWiki, label: 'Wiki'},
    o: {note: oof, label: 'Oof'},
    p: {note: skrrt, label: 'Skrrt!'},
    '[': {note: bonkers, label: 'Bonkers!'},
    ']': {note: hummus, label: 'Hummus!'}
  },
  aRow: {
    a: {note: guitarGroove1, label: 'guitarGroove1'},
    s: {note: guitarGroove2, label: 'guitarGroove2'},
    d: {note: guitarGroove3, label: 'guitarGroove3'},
    f: {note: guitarLick1, label: 'guitarLick1'},
    g: {note: guitarLick2, label: 'guitarLick2'},
    h: {note: guitarLick3, label: 'guitarLick3'},
    j: {note: guitarLick4, label: 'guitarLick4'},
    k: {note: guitarLick5, label: 'guitarLick5'},
    l: {note: guitarLick6, label: 'guitarLick6'},
    ';': {note: guitarLick7, label: 'guitarLick7'},
    "'": {note: guitarLick8, label: 'guitarLick8'}
  },
  zRow: {
    z: {note: keysCmaj7, label: 'keysCmaj7'},
    x: {note: keysDmin7, label: 'keysDmin7'},
    c: {note: keysEmin7, label: 'keysEmin7'},
    v: {note: keysFmaj7, label: 'keysFmaj7'},
    b: {note: keysG7, label: 'keysG7'},
    n: {note: keysAmin7, label: 'keysAmin7'},
    m: {note: keysBm7b5, label: 'keysBm7b5'},
    ',': {note: keysCmaj7Oct, label: 'keysCmaj7Oct'},
    '.': {note: minRoll, label: 'minRoll'},
    '/': null
  }
}
