let readMode='single';
let textMode='normal';
let timerSeconds=0;
let timerHandle=null;
const storageKey='MOA_BUSINESS_APP_V1';
const stems=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const branches=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const stemElements={'甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土','庚':'金','辛':'金','壬':'水','癸':'水'};
const stemYinYang={'甲':'陽','乙':'陰','丙':'陽','丁':'陰','戊':'陽','己':'陰','庚':'陽','辛':'陰','壬':'陽','癸':'陰'};
const branchElements={'子':'水','丑':'土','寅':'木','卯':'木','辰':'土','巳':'火','午':'火','未':'土','申':'金','酉':'金','戌':'土','亥':'水'};
const monthBranches=['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑'];
const monthStemStartMap={'甲':2,'己':2,'乙':4,'庚':4,'丙':6,'辛':6,'丁':8,'壬':8,'戊':0,'癸':0};
const zokanMap={'子':['癸'],'丑':['己','癸','辛'],'寅':['甲','丙','戊'],'卯':['乙'],'辰':['戊','乙','癸'],'巳':['丙','庚','戊'],'午':['丁','己'],'未':['己','丁','乙'],'申':['庚','壬','戊'],'酉':['辛'],'戌':['戊','辛','丁'],'亥':['壬','甲']};
const westSigns=[['山羊座',1,20],['水瓶座',2,19],['魚座',3,21],['牡羊座',4,20],['牡牛座',5,21],['双子座',6,22],['蟹座',7,23],['獅子座',8,23],['乙女座',9,23],['天秤座',10,24],['蠍座',11,23],['射手座',12,22],['山羊座',12,32]];
const ichingNames=['乾為天','坤為地','水雷屯','山水蒙','水天需','天水訟','地水師','水地比','風天小畜','天沢履','地天泰','天地否','天火同人','火天大有','地山謙','雷地豫','沢雷随','山風蠱','地沢臨','風地観','火雷噬嗑','山火賁','山地剥','地雷復','天雷无妄','山天大畜','山雷頤','沢風大過','坎為水','離為火','沢山咸','雷風恒','天山遯','雷天大壮','火地晋','地火明夷','風火家人','火沢睽','水山蹇','雷水解','山沢損','風雷益','沢天夬','天風姤','沢地萃','地風升','沢水困','水風井','沢火革','火風鼎','震為雷','艮為山','風山漸','雷沢帰妹','雷火豊','火山旅','巽為風','兌為沢','風水渙','水沢節','風沢中孚','雷山小過','水火既済','火水未済'];
const tarotList=['愚者','魔術師','女教皇','女帝','皇帝','法王','恋人たち','戦車','力','隠者','運命の輪','正義','吊るされた男','死神','節制','悪魔','塔','星','月','太陽','審判','世界'];
const runeList=['フェオ','ウル','ソーン','アンスール','ライド','ケン','ギューフ','ウンジョ','ハガル','ニイド','イス','ヤラ','エイワズ','ペオース','アルジズ','ソウェイル','ティール','ベルカナ','エワズ','マンナズ','ラグズ','イング','ダエグ','オシラ'];
const monthNamesJP=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
const moonStyles=['感情が深い','安心感重視','自由重視','理想が高い','共感力が強い','慎重で繊細'];
const ascStyles=['第一印象は穏やか','第一印象は華やか','第一印象は知的','第一印象は神秘的','第一印象は柔らかい','第一印象は芯が強い'];
const protectWords=['祓い清めて道ひらく','静かな光に守られる','言葉を慎み吉を招く','心を整え福を迎える','急がずして運を得る','穏やかにして道は通ず'];
const $=(id)=>document.getElementById(id);
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function seed(str,salt=''){const s=(str||'seed')+salt;let h=0;for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0}return Math.abs(h)}
function pick(arr,key,salt=''){return arr[seed(key,salt)%arr.length]}
function reportNumber(){const d=new Date();return `MOA-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${Math.floor(Math.random()*9000+1000)}`}
function setPrintMode(mode){document.body.classList.remove('print-customer','print-internal');document.body.classList.add(mode==='internal'?'print-internal':'print-customer');$('copyType').textContent=mode==='internal'?'内部控え':'お客様控え';}
function signFromDate(dateStr){const d=new Date(dateStr),m=d.getMonth()+1,day=d.getDate();for(const [name,mo,da] of westSigns){if(m<mo||(m===mo&&day<da)) return name;}return '山羊座';}
function westernElement(sign){const map={'牡羊座':'火','獅子座':'火','射手座':'火','牡牛座':'地','乙女座':'地','山羊座':'地','双子座':'風','天秤座':'風','水瓶座':'風','蟹座':'水','蠍座':'水','魚座':'水'};return map[sign]||'水';}
function westernQuality(sign){const map={'牡羊座':'活動','蟹座':'活動','天秤座':'活動','山羊座':'活動','牡牛座':'不動','獅子座':'不動','蠍座':'不動','水瓶座':'不動','双子座':'柔軟','乙女座':'柔軟','射手座':'柔軟','魚座':'柔軟'};return map[sign]||'柔軟';}
function nineStar(dateStr){const d=new Date(dateStr),y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate();const effectiveYear=(m<2||(m===2&&day<4))?y-1:y;let num=11-(effectiveYear%9);if(num>9) num-=9;if(num===0) num=9;return ['一白水星','二黒土星','三碧木星','四緑木星','五黄土星','六白金星','七赤金星','八白土星','九紫火星'][num-1];}
function julianDay(y,m,d){if(m<=2){y-=1;m+=12;}const A=Math.floor(y/100),B=2-A+Math.floor(A/4);return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5;}
function sexagenaryName(index){return stems[index%10]+branches[index%12];}
function getYearPillar(dateStr){const d=new Date(dateStr+'T12:00:00'),y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate();const effectiveYear=(m<2||(m===2&&day<4))?y-1:y;const index=(effectiveYear-1984+60)%60;return {index,stem:stems[index%10],branch:branches[index%12],name:sexagenaryName(index)};}
function getMonthPillar(dateStr){const d=new Date(dateStr+'T12:00:00'),yearP=getYearPillar(dateStr);let m=d.getMonth()+1,day=d.getDate();let astroMonth=m;if(day<4) astroMonth-=1;if(astroMonth<=0) astroMonth+=12;const monthBranch=monthBranches[(astroMonth+10)%12];const startStemIndex=monthStemStartMap[yearP.stem];const monthIndexWithin=monthBranches.indexOf(monthBranch);const stemIndex=(startStemIndex+monthIndexWithin)%10;return {stem:stems[stemIndex],branch:monthBranch,name:stems[stemIndex]+monthBranch};}
function getDayPillar(dateStr){const d=new Date(dateStr+'T12:00:00'),y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate();const jd=julianDay(y,m,day),base=julianDay(1984,2,2),diff=Math.floor(jd-base),index=((diff%60)+60)%60;return {index,stem:stems[index%10],branch:branches[index%12],name:sexagenaryName(index)};}
function getHourBranch(hour){const idx=Math.floor(((hour+1)%24)/2);return branches[idx];}
function getHourPillar(dayStem,timeStr){const hour=timeStr?Number(timeStr.split(':')[0]):12;const hourBranch=getHourBranch(hour);const hourBranchIndex=branches.indexOf(hourBranch);const startMap={'甲':0,'己':0,'乙':2,'庚':2,'丙':4,'辛':4,'丁':6,'壬':6,'戊':8,'癸':8};const stemIndex=(startMap[dayStem]+hourBranchIndex)%10;return {stem:stems[stemIndex],branch:hourBranch,name:stems[stemIndex]+hourBranch};}
function calcBaZi(dateStr,timeStr){const yearP=getYearPillar(dateStr),monthP=getMonthPillar(dateStr),dayP=getDayPillar(dateStr),hourP=getHourPillar(dayP.stem,timeStr||'12:00');return {yearP,monthP,dayP,hourP};}
function yinYangFromPillars(p){const isYangStem=s=>stemYinYang[s]==='陽';let yin=0,yang=0;[p.yearP,p.monthP,p.dayP,p.hourP].forEach(x=>{if(isYangStem(x.stem)) yang++; else yin++; if(['子','寅','辰','午','申','戌'].includes(x.branch)) yang++; else yin++;});return {yin,yang};}
function fiveElementsFromPillars(p){const counts={木:0,火:0,土:0,金:0,水:0};[p.yearP,p.monthP,p.dayP,p.hourP].forEach(x=>{counts[stemElements[x.stem]]+=1;counts[branchElements[x.branch]]+=1;});return counts;}
function weakestStrongest(counts){const entries=Object.entries(counts).sort((a,b)=>a[1]-b[1]);return {weak:entries[0][0],strong:entries[entries.length-1][0]};}
function getTsuhen(dayStem,otherStem){const dayElem=stemElements[dayStem],otherElem=stemElements[otherStem],samePol=stemYinYang[dayStem]===stemYinYang[otherStem];const generate={木:'火',火:'土',土:'金',金:'水',水:'木'},producedBy={木:'水',火:'木',土:'火',金:'土',水:'金'},control={木:'土',火:'金',土:'水',金:'木',水:'火'},controlledBy={木:'金',火:'水',土:'木',金:'火',水:'土'};if(dayElem===otherElem) return samePol?'比肩':'劫財';if(generate[dayElem]===otherElem) return samePol?'食神':'傷官';if(control[dayElem]===otherElem) return samePol?'偏財':'正財';if(controlledBy[dayElem]===otherElem) return samePol?'偏官':'正官';if(producedBy[dayElem]===otherElem) return samePol?'偏印':'印綬';return '―';}
function enrichPillars(p){const dayStem=p.dayP.stem;[p.yearP,p.monthP,p.dayP,p.hourP].forEach(r=>{r.zokan=(zokanMap[r.branch]||[]).join('・');r.tsuhen=r===p.dayP?'日元':getTsuhen(dayStem,r.stem);});return p;}
function iching(key){return {base:pick(ichingNames,key,'ich1'),changed:pick(ichingNames,key,'ich2')};}
function tarot(key){return pick(tarotList,key,'tarot');}
function rune(key){return pick(runeList,key,'rune');}
function subTopic(topic,q){if(q.includes('復縁')) return '復縁';if(q.includes('片思い')||q.includes('片想い')) return '片思い';if(q.includes('転職')) return '転職';if(q.includes('独立')||q.includes('起業')) return '独立';return topic||'総合運';}
function actionText(st){const map={'恋愛':'安心できる距離感を基準に動くこと。','復縁':'相手を追う前に自分の本音を整えること。','片思い':'追いすぎず自然に印象を残すこと。','仕事':'活きる力と消耗する部分を切り分けること。','転職':'譲れない条件を先に明確にすること。','独立':'始める前に土台を固めること。','総合運':'日々の整えを大切にすること。'};return map[st]||map['総合運'];}
function specialistNotice(st){if(st==='健康'){return '健康に関する表示は参考情報です。症状、治療、薬、診断に関する判断は医療機関へ相談してください。';}if(st==='お金'){return '金銭や投資に関する表示は参考情報です。投資判断や契約判断は専門家へ相談してください。';}return '表示内容は参考情報です。重要な判断は占い結果のみで断定せず、必要に応じて専門家へ相談してください。';}
function safeOpeningText(st,name){const map={'恋愛':`${name}様の恋愛について、今の流れを参考情報として整理します。`,'復縁':`${name}様の復縁について、感情面と関係性の流れを参考情報として整理します。`,'片思い':`${name}様の片思いについて、距離感と動く順番を参考情報として見ていきます。`,'仕事':`${name}様の仕事について、環境との相性と負担感を参考情報として見ていきます。`,'転職':`${name}様の転職について、準備状況と流れを参考情報として見ていきます。`,'独立':`${name}様の独立について、始め方と土台づくりを参考情報として整理します。`,'総合運':`${name}様の全体の流れについて、参考情報として今の傾向を整理します。`};return map[st]||map['総合運'];}
function concernSummary(st,ws,yy){const weakText=`${ws.weak}が弱め`;const yyText=yy.yang>yy.yin?'陽が強め':(yy.yin>yy.yang?'陰が強め':'陰陽は均衡');const map={'恋愛':`恋愛では、気持ちはあるのに伝え方や距離感で迷いやすい流れです。特に ${weakText}・${yyText} のため、焦るより安心感を育てる方が進みやすいです。`,'復縁':`復縁では、戻れるかより「戻った後に同じ苦しさを繰り返さないか」を見る流れです。`,'片思い':`片思いでは、思いの強さは十分ありますが、動く順番が大切です。`,'仕事':`仕事では、能力不足というより、役割や環境の噛み合わせを調整する時です。`,'転職':`転職では、今すぐ動きたい気持ちがあっても、準備の精度が結果を左右します。`,'独立':`独立では、理想は見えていても、土台づくりが先です。`,'総合運':`総合運では、流れ自体は止まっていませんが、整えながら進む方が成果につながる時です。`};return map[st]||map['総合運'];}
function adviceSummary(st){const map={'恋愛':'今は関係を進めることより、落ち着ける空気をつくることを優先してください。','復縁':'今は結論を迫るより、距離感と関わり方を整え直すことが先です。','片思い':'今は強く押すより、自然に思い出してもらえる接点を増やすことが有効です。','仕事':'今は優先順位をはっきりさせることが大切です。','転職':'今は辞める決断より、次へ行くための条件整理を先にしてください。','独立':'今は大きく始めるより、小さく形にして確かめる方が成功しやすいです。','総合運':'今は勢いで決めるより、整えながら少しずつ前へ出る方が良い時です。'};return map[st]||map['総合運'];}
function cautionSummary(st){const map={'恋愛':'不安になった時に答えを急ぎすぎると、かえって距離が開きやすいです。','復縁':'寂しさだけを理由に戻ろうとすると、同じ課題を繰り返しやすいです。','片思い':'反応が欲しくて動きすぎると、相手に余白を与えにくくなります。','仕事':'責任感から抱え込みすぎると、実力より先に疲れが出ます。','転職':'今の不満だけで次を決めると、条件の見落としが出やすいです。','独立':'理想だけで始めると、継続に必要な仕組みが後回しになります。','総合運':'急いで形にしようとすると、整えるべき部分を飛ばしやすいです。'};return map[st]||map['総合運'];}
function nextAction3(st){const map={'恋愛':['気持ちを急いで確認しない','会いやすい空気をつくる','不安な時ほど一度落ち着く'],'復縁':['戻りたい理由を書き出す','相手の変化を観察する','追いすぎない距離感を保つ'],'片思い':['自然な接点を増やす','相手の反応を急がない','自分の生活を整える'],'仕事':['優先順位を3つに絞る','抱えすぎているものを減らす','自分の強みを再確認する'],'転職':['譲れない条件を整理する','履歴書や職務経歴を整える','勢いだけで辞めない'],'独立':['小さく試す','固定費を確認する','継続導線をつくる'],'総合運':['急いで決めない','整えることを優先する','小さく前進する']};return map[st]||map['総合運'];}
function buildTags(){const tags=['四柱命式','通変星','九星気学','易','西洋補助','タロット','ルーン'];return tags.map(t=>`<span class='tag'>${esc(t)}</span>`).join('');}
function buildPillarTable(p){const rows=[['年柱',p.yearP],['月柱',p.monthP],['日柱',p.dayP],['時柱',p.hourP]];return `<table class='table'><thead><tr><th>柱</th><th>干支</th><th>蔵干</th><th>通変星</th></tr></thead><tbody>${rows.map(([name,row])=>`<tr><td>${name}</td><td>${esc(row.name)}</td><td>${esc(row.zokan)}</td><td>${esc(row.tsuhen)}</td></tr>`).join('')}</tbody></table>`;}
function calcRyunen(currentYear){const index=(currentYear-1984+60)%60;return sexagenaryName(index);}
function calcRyugetsu(currentYear,currentMonth){const yearIndex=(currentYear-1984+60)%60;const yearStem=stems[yearIndex%10];const monthBranch=monthBranches[(currentMonth+9)%12];const startStemIndex=monthStemStartMap[yearStem];const monthIndexWithin=monthBranches.indexOf(monthBranch);const stemIndex=(startStemIndex+monthIndexWithin)%10;return stems[stemIndex]+monthBranch;}
function makeCompat(main,partner){let score=58;if(main.sign===partner.sign) score+=10;if(main.dayMaster===partner.dayMaster) score+=10;if(main.yearP.branch===partner.yearP.branch) score+=6;if(main.dayElement===partner.dayElement) score+=8;if(main.monthP.branch===partner.monthP.branch) score+=4;if(score>100) score=100;return score;}
function getRelationshipLabels(){
  const preset = $('relationshipPreset') ? $('relationshipPreset').value : '';
  const map = {
    triangle: {a:'お相手A', b:'お相手B', titleA:'お相手A情報', titleB:'お相手B情報', summary:'三角関係'},
    family: {a:'家族A', b:'家族B', titleA:'家族A情報', titleB:'家族B情報', summary:'家族関係'},
    couple_child: {a:'配偶者', b:'お子様', titleA:'配偶者情報', titleB:'お子様情報', summary:'夫婦と子ども'},
    parent_child: {a:'親', b:'子', titleA:'親情報', titleB:'子情報', summary:'親子関係'},
    siblings: {a:'兄弟姉妹A', b:'兄弟姉妹B', titleA:'兄弟姉妹A情報', titleB:'兄弟姉妹B情報', summary:'兄弟姉妹関係'},
    friends: {a:'ご友人A', b:'ご友人B', titleA:'ご友人A情報', titleB:'ご友人B情報', summary:'友人関係'}
  };
  return map[preset] || {a:'お相手A', b:'お相手B', titleA:'お相手A情報', titleB:'お相手B情報', summary:'3人関係'};
}
function applyRelationshipPreset(){
  const rel = getRelationshipLabels();
  if($('partnerALabelTitle')) $('partnerALabelTitle').textContent = rel.titleA;
  if($('partnerBLabelTitle')) $('partnerBLabelTitle').textContent = rel.titleB;
  if($('partnerName')) $('partnerName').placeholder = rel.a + '名';
  if($('partner2Name')) $('partner2Name').placeholder = rel.b + '名';
}
function pairSummaryLabel(score){
  if(score>=80) return '強い縁';
  if(score>=68) return '良好';
  if(score>=55) return '調整型';
  return '慎重に見る';
}
function pairAdviceFromScore(score){
  if(score>=80) return '感情だけでなく現実面を整えるほど、良い縁として育ちやすい関係です。';
  if(score>=68) return '相性は良好です。違いを活かす意識を持つと安定しやすいです。';
  if(score>=55) return '惹かれ合う面はありますが、距離感や役割分担の整理が必要です。';
  return '感情の勢いより、事実関係と境界線を丁寧に整えることが大切です。';
}

function deepThemeReading(st, name, ws, yy, sign, westElement, tarotCard, runeName){
  const weak = ws.weak;
  const strong = ws.strong;
  const yinYang = yy.yang > yy.yin ? '陽が強めで、外へ動く力が先に出やすい状態' : (yy.yin > yy.yang ? '陰が強めで、内面へ抱え込みやすい状態' : '陰陽が比較的均衡している状態');
  const cardLine = tarotMeaning(tarotCard);
  const runeLine = runeMeaning(runeName);
  const common1 = `${name}様の流れを深く見ると、表面の出来事よりも「今どこで心が揺れやすいか」を整えることが重要です。`;
  const common2 = `命式では ${strong} の気が強く、${weak} の気が弱めに出ているため、得意なやり方で進みやすい一方、足りない部分を後回しにすると不安定さが出やすくなります。`;
  const common3 = `また、西洋補助では ${sign} / ${westElement} の性質が出ており、自分らしい動き方がはっきりしている反面、合わないやり方を無理に続けると消耗しやすいです。`;
  const common4 = `補助占術ではタロットが「${tarotCard}」、ルーンが「${runeName}」を示しており、${cardLine} ${runeLine}`;
  const map = {
    '恋愛': [
      `${common1} 恋愛では、相手の気持ちを知りたい思いが強くなっても、今は「関係が進むか」より「安心して関われるか」を先に見る時です。`,
      `${common2} ${yinYang} のため、好きな時ほど心の揺れ幅が大きくなりやすく、相手の反応ひとつで希望と不安が行き来しやすいでしょう。`,
      `${common3} 恋愛運を整える鍵は、追いすぎないことと、我慢しすぎないことの中間を選ぶことです。`,
      `${common4} 今は結論を急がず、自然な接点の質を上げるほど流れが良くなります。`
    ],
    '不倫問題': [
      `${common1} 不倫問題では、感情の深さそのものより、「この関係が自分の生活をどう揺らしているか」を直視する時です。`,
      `${common2} ${yinYang} のため、気持ちに引っ張られやすい時期ほど、現実整理が遅れやすくなります。`,
      `${common3} 今の課題は、好きかどうかだけではなく、境界線・責任・今後の現実面をどう扱うかです。`,
      `${common4} 今は答えを急ぐより、事実関係と自分の限界線を整理することが大切です。`
    ],
    '復縁': [
      `${common1} 復縁では、戻りたい気持ちが強いほど「戻った後に何が変わるのか」を見直す必要があります。`,
      `${common2} ${yinYang} のため、過去の情が今の判断を強く左右しやすく、寂しさと愛情が混ざりやすい時です。`,
      `${common3} 復縁運を上げる鍵は、連絡の量ではなく、関係の質と自分の軸を整えることにあります。`,
      `${common4} 今は相手の反応を追うより、自分の本音を整理する方が、結果的に流れを整えやすいです。`
    ],
    '片思い': [
      `${common1} 片思いでは、気持ちの強さは十分でも、動く順番を間違えると伝わりにくい時です。`,
      `${common2} ${yinYang} のため、勢いで動く日と、急に慎重になる日との差が出やすいでしょう。`,
      `${common3} 今は大きく進めるより、「相手にとって自然に受け取りやすい接点」を増やす方が流れに合っています。`,
      `${common4} 片思いは、思いの強さよりも、今の距離感に合った伝え方が鍵になります。`
    ],
    '仕事': [
      `${common1} 仕事では、能力の有無より「今の役割が自分に合っているか」「抱えすぎていないか」を見直す時です。`,
      `${common2} ${yinYang} のため、責任感が先に出る一方で、疲れを自覚するのが遅れやすい傾向があります。`,
      `${common3} 仕事運を整えるには、全部を頑張ることより、何を続けて何を減らすかをはっきりさせることが必要です。`,
      `${common4} 今は評価を追うより、自分が無理なく継続できる形へ整える方が、結果として運気を安定させます。`
    ],
    '転職': [
      `${common1} 転職では、「今が嫌だから離れたい」だけで決めるより、「次で何を守りたいか」を明確にする時です。`,
      `${common2} ${yinYang} のため、勢いが先に出る日ほど条件整理が甘くなりやすいでしょう。`,
      `${common3} 転職運を強める鍵は、理想だけでなく、働き方・収入・負担感の現実条件をはっきりさせることです。`,
      `${common4} 今は辞める決断を急ぐより、次へ進む土台を整える方が良い流れです。`
    ],
    '独立': [
      `${common1} 独立では、やりたいことの強さよりも、続けられる形を作れるかが運の分かれ目になります。`,
      `${common2} ${yinYang} のため、始める勢いは出やすい一方で、土台や仕組みづくりが後回しになりやすいです。`,
      `${common3} 独立運を整えるには、小さく試しながら残るものを見極めることが必要です。`,
      `${common4} 今は大きく始めるより、現実的に続けられる形を作る方が、長く良い流れを保てます。`
    ],
    'お金': [
      `${common1} お金の流れでは、増やすこと以上に、漏れている部分を知ることが重要です。`,
      `${common2} ${yinYang} のため、気持ちに引っ張られて使いやすい時と、逆に不安から止めすぎる時の差が出やすいです。`,
      `${common3} 金運を整えるには、気分で動く部分を減らし、固定的な支出と生活習慣を見直すことが先です。`,
      `${common4} 今は攻めるより守りを固める方が、結果として安定しやすい時です。`
    ],
    '人間関係': [
      `${common1} 人間関係では、相手を変えるより、自分がどこまで引き受けるかを見直す時です。`,
      `${common2} ${yinYang} のため、言いすぎるか、逆に抱え込みすぎるかの偏りが出やすいでしょう。`,
      `${common3} 対人運を守る鍵は、無理を優しさと勘違いしないことです。`,
      `${common4} 今は理解してもらう努力より、自分の境界線を整えることが大切です。`
    ],
    '結婚': [
      `${common1} 結婚では、気持ちの有無だけでなく、一緒に生活を回せるかを見る時です。`,
      `${common2} ${yinYang} のため、感情の盛り上がりと現実条件の差が見えにくくなることがあります。`,
      `${common3} 結婚運を整えるには、理想や情だけでなく、お金・役割・将来像を言葉にすることが必要です。`,
      `${common4} 今は曖昧な期待より、現実のすり合わせを大切にするほど安定します。`
    ],
    '家庭': [
      `${common1} 家庭では、誰がどれだけ抱えているかの偏りが表面化しやすい時です。`,
      `${common2} ${yinYang} のため、頑張る人に負担が寄りやすく、無言の我慢が積み重なりやすい傾向があります。`,
      `${common3} 家庭運を守るには、感情を溜める前に役割と負担を言葉にすることが必要です。`,
      `${common4} 今は我慢で回すより、整えて長く続ける視点を持つ方が流れに合っています。`
    ],
    '健康': [
      `${common1} 健康面では、今は頑張る力より、整える力を優先する時です。`,
      `${common2} ${yinYang} のため、疲れに気づく前に無理を続けやすい傾向があります。`,
      `${common3} 健康運を守るには、睡眠・食事・生活リズムの土台を先に整えることが必要です。`,
      `${common4} ただし健康に関する表示は参考情報です。症状や治療判断は医療機関へ相談してください。`
    ],
    '総合運': [
      `${common1} 総合運では、流れそのものは止まっていませんが、整えながら進む方が大きく崩れにくい時です。`,
      `${common2} ${yinYang} のため、得意な部分だけで走ると偏りが出やすく、足りない部分の補強が必要です。`,
      `${common3} 今の運気は「勢い」より「順序」が大切で、焦って結論を出すより、小さく確かめながら進む方が合っています。`,
      `${common4} 今は生活と気持ちの両方を整えながら前へ出るほど、運が安定しやすいでしょう。`
    ]
  };
  return (map[st] || map['総合運']).map(x => `<p>${x}</p>`).join('');
}
function futureFlowReading(st, ryunen, ryugetsu, sign){
  const map = {
    '恋愛': `今後は、${ryunen} と ${ryugetsu} の流れから見て、気持ちを急いで形にするより、相手との安心感を育てる流れが強いです。${sign}の性質もあり、自然体でいられる関係ほど長く続きやすいでしょう。`,
    '不倫問題': `今後は、${ryunen} と ${ryugetsu} の流れから見て、感情だけで進むと現実面の負担が重くなりやすいです。今後の安定を考えるなら、整理と区切りの意識が重要になります。`,
    '復縁': `今後は、${ryunen} と ${ryugetsu} の流れから見て、過去の情に戻るより、関係の質を見直すほど流れが整います。`,
    '片思い': `今後は、${ryunen} と ${ryugetsu} の流れから見て、押しすぎず接点を増やすほど進みやすいです。`,
    '仕事': `今後は、${ryunen} と ${ryugetsu} の流れから見て、役割の整理と優先順位の見直しが大切です。`,
    '転職': `今後は、${ryunen} と ${ryugetsu} の流れから見て、条件整理を丁寧にするほど良い選択につながりやすいです。`,
    '独立': `今後は、${ryunen} と ${ryugetsu} の流れから見て、小さく始めて育てるほど安定しやすいです。`,
    '総合運': `今後は、${ryunen} と ${ryugetsu} の流れから見て、勢いより順序を大切にするほど安定しやすいでしょう。`
  };
  return map[st] || map['総合運'];
}

function tarotMeaning(card){const map={'愚者':'新しい流れの始まりです。','魔術師':'今ある道具や才能を活かして形にする時です。','女教皇':'今は表面より内面を見る時です。','女帝':'育てる力が高まる時です。','皇帝':'形にする力が必要です。','法王':'正攻法や信頼できる助言が鍵になります。','恋人たち':'選択がテーマです。','戦車':'前進の力が出ています。','力':'強く押すより、やわらかく制することが鍵です。','隠者':'今は急いで答えを出すより、静かに考える時です。'};return map[card]||'今の流れを映すカードです。';}
function runeMeaning(rune){const map={'フェオ':'豊かさや実りのルーンです。','ウル':'生命力と強さのルーンです。','ソーン':'防御と境界線のルーンです。','アンスール':'言葉と伝達のルーンです。','ライド':'移動と進展のルーンです。'};return map[rune]||'今の流れを映すルーンです。';}
function insertTemplate(type){const map={'恋愛':'今後の恋愛運と、動くべき時期を知りたいです。','復縁':'復縁の可能性と、今動くべき時期を知りたいです。','片思い':'片思い中の相手との進展可能性を知りたいです。','仕事':'今後の仕事運と、動くべき方向性を知りたいです。','転職':'転職のタイミングと、今の仕事を続けるべきか知りたいです。','独立':'独立・開業に向く時期と注意点を知りたいです。'};$('question').value=map[type]||'';}
function baseReportHeader(){return '<div class="reportHeader"><div class="reportTitle">鑑定書</div><div class="reportSub">MOA BUSINESS FORTUNE READING DOCUMENT</div></div><h3>まだ鑑定結果はありません</h3><p>左の情報を入力して、「鑑定結果を作成する」を押してください。</p>';}
function getDb(){try{return JSON.parse(localStorage.getItem(storageKey)||'{"customers":[],"sessions":[]}');}catch(e){return {customers:[],sessions:[]};}}
function setDb(db){localStorage.setItem(storageKey, JSON.stringify(db));refreshDashboard();renderCustomerList();}
function getFormData(){return {readMode,textMode,name:$('name').value,birthDate:$('birthDate').value,birthTime:$('birthTime').value,birthPlace:$('birthPlace').value,topic:$('topic').value,gender:$('gender').value,menuType:$('menuType').value,fee:$('fee').value,reserveDate:$('reserveDate').value,reserveTime:$('reserveTime').value,partnerName:$('partnerName').value,partnerBirthDate:$('partnerBirthDate').value,partnerBirthTime:$('partnerBirthTime').value,partnerBirthPlace:$('partnerBirthPlace').value,partner2Name:($('partner2Name')?$('partner2Name').value:''),partner2BirthDate:($('partner2BirthDate')?$('partner2BirthDate').value:''),partner2BirthTime:($('partner2BirthTime')?$('partner2BirthTime').value:''),partner2BirthPlace:($('partner2BirthPlace')?$('partner2BirthPlace').value:''),relationshipPreset:($('relationshipPreset')?$('relationshipPreset').value:''),caseLabel:($('caseLabel')?$('caseLabel').value:''),question:$('question').value,memo:$('memo').value,proposalMemo:$('proposalMemo').value,followMemo:$('followMemo').value,consent:$('consentCheck').checked};}
function setFormData(data){if(!data)return;readMode=data.readMode||'single';textMode=data.textMode||'normal';$('name').value=data.name||'';$('birthDate').value=data.birthDate||'';$('birthTime').value=data.birthTime||'';$('birthPlace').value=data.birthPlace||'';$('topic').value=data.topic||'';$('gender').value=data.gender||'';$('menuType').value=data.menuType||'';$('fee').value=data.fee||'';$('reserveDate').value=data.reserveDate||'';$('reserveTime').value=data.reserveTime||'';$('partnerName').value=data.partnerName||'';$('partnerBirthDate').value=data.partnerBirthDate||'';$('partnerBirthTime').value=data.partnerBirthTime||'';$('partnerBirthPlace').value=data.partnerBirthPlace||'';if($('partner2Name'))$('partner2Name').value=data.partner2Name||'';if($('partner2BirthDate'))$('partner2BirthDate').value=data.partner2BirthDate||'';if($('partner2BirthTime'))$('partner2BirthTime').value=data.partner2BirthTime||'';if($('partner2BirthPlace'))$('partner2BirthPlace').value=data.partner2BirthPlace||'';if($('relationshipPreset'))$('relationshipPreset').value=data.relationshipPreset||'';if($('caseLabel'))$('caseLabel').value=data.caseLabel||'';applyRelationshipPreset();$('question').value=data.question||'';$('memo').value=data.memo||'';$('proposalMemo').value=data.proposalMemo||'';$('followMemo').value=data.followMemo||'';$('consentCheck').checked=!!data.consent;syncToggles();}
function syncToggles(){
  if(readMode==='single'){
    $('singleBtn').classList.add('active');
    $('compatBtn').classList.remove('active');
    if($('tripleBtn')) $('tripleBtn').classList.remove('active');
    $('partnerSection').classList.add('hidden');
    if($('partnerBSection')) $('partnerBSection').classList.add('hidden');
  }else if(readMode==='compat'){
    $('compatBtn').classList.add('active');
    $('singleBtn').classList.remove('active');
    if($('tripleBtn')) $('tripleBtn').classList.remove('active');
    $('partnerSection').classList.remove('hidden');
    if($('partnerBSection')) $('partnerBSection').classList.add('hidden');
  }else{
    $('singleBtn').classList.remove('active');
    $('compatBtn').classList.remove('active');
    if($('tripleBtn')) $('tripleBtn').classList.add('active');
    $('partnerSection').classList.remove('hidden');
    if($('partnerBSection')) $('partnerBSection').classList.remove('hidden');
  }
  if(textMode==='normal'){
    $('normalBtn').classList.add('active');
    $('longBtn').classList.remove('active');
  }else{
    $('longBtn').classList.add('active');
    $('normalBtn').classList.remove('active');
  }
}
function formatTimer(){const m=String(Math.floor(timerSeconds/60)).padStart(2,'0');const s=String(timerSeconds%60).padStart(2,'0');$('timerView').textContent=`${m}:${s}`;}
function startTimer(){if(timerHandle)return;timerHandle=setInterval(()=>{timerSeconds+=1;formatTimer();},1000);}
function stopTimer(){if(timerHandle){clearInterval(timerHandle);timerHandle=null;}}
function refreshDashboard(){const db=getDb();$('statCustomers').textContent=String(db.customers.length);$('statSessions').textContent=String(db.sessions.length);const today=new Date().toISOString().slice(0,10);$('statToday').textContent=String(db.sessions.filter(x=>x.reserveDate===today).length);formatTimer();}
function renderCustomerList(){const box=$('customerList');const q=($('searchCustomer').value||'').trim().toLowerCase();const db=getDb();const items=db.customers.filter(c=>!q||(c.name||'').toLowerCase().includes(q));box.innerHTML=items.length?items.map(c=>`<div class='listItem' data-id='${esc(c.id)}'><strong>${esc(c.name||'名前未設定')}</strong><div>${esc(c.birthDate||'')}</div><div>${esc(c.topic||'')}</div></div>`).join(''):'<div class="smallText">顧客がまだ保存されていません。</div>';box.querySelectorAll('.listItem').forEach(el=>el.addEventListener('click',()=>loadCustomer(el.dataset.id)));}
function loadCustomer(id){const db=getDb();const c=db.customers.find(x=>x.id===id);if(!c)return;setFormData(c.formData||{});$('saveStatus').textContent='顧客読込済';}
function saveSession(){const name=$('name').value.trim();const birthDate=$('birthDate').value.trim();if(!name||!birthDate){alert('顧客名と生年月日は保存前に入力してください。');return;}const db=getDb();const id=`cust_${birthDate}_${name}`;const formData=getFormData();const customer={id,name,birthDate,topic:$('topic').value,formData};const existing=db.customers.findIndex(c=>c.id===id);if(existing>=0)db.customers[existing]=customer;else db.customers.unshift(customer);db.sessions.unshift({createdAt:new Date().toLocaleString('ja-JP'),name,birthDate,topic:$('topic').value,menuType:$('menuType').value,fee:$('fee').value,reserveDate:$('reserveDate').value,reserveTime:$('reserveTime').value,question:$('question').value,proposalMemo:$('proposalMemo').value,followMemo:$('followMemo').value});setDb(db);$('saveStatus').textContent='履歴保存済';alert('履歴に保存しました。');}
function exportCsv(){const db=getDb();if(!db.sessions.length){alert('履歴がありません。');return;}const headers=['createdAt','name','birthDate','topic','menuType','fee','reserveDate','reserveTime','question','proposalMemo','followMemo'];const rows=[headers.join(',')].concat(db.sessions.map(s=>headers.map(h=>`"${String(s[h]||'').replace(/"/g,'""')}"`).join(',')));const blob=new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8;'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='moa_sessions.csv';a.click();URL.revokeObjectURL(a.href);}
function generateReading(){if(!$('consentCheck').checked){alert('先に「運用確認」にチェックを入れてください。');return;}const name=$('name').value.trim()||'ご相談者';const birthDate=$('birthDate').value.trim();const birthTime=$('birthTime').value.trim()||'12:00';const topic=$('topic').value.trim()||'総合運';const gender=$('gender').value.trim()||'女性';const question=$('question').value.trim();if(!birthDate){alert('ご本人の生年月日を入力してください。');return;}if(!question){alert('相談内容を入力してください。');return;}
$('reportNumber').textContent=reportNumber();$('reportDate').textContent=new Date().toLocaleDateString('ja-JP');$('memoView').textContent=$('memo').value.trim()||'未入力';$('proposalMemoView').textContent=$('proposalMemo').value.trim()||'未入力';$('followMemoView').textContent=$('followMemo').value.trim()||'未入力';
const now=new Date(),currentYear=now.getFullYear(),currentMonth=now.getMonth()+1,st=subTopic(topic,question),key=`${name}|${birthDate}|${birthTime}|${topic}|${question}`;const sign=signFromDate(birthDate),westElement=westernElement(sign),westQuality=westernQuality(sign),moon=pick(moonStyles,key,'moon'),asc=pick(ascStyles,key,'asc');const pillars=enrichPillars(calcBaZi(birthDate,birthTime)),yy=yinYangFromPillars(pillars),counts=fiveElementsFromPillars(pillars),ws=weakestStrongest(counts),dayMaster=pillars.dayP.stem,dayElement=stemElements[dayMaster],kyusei=nineStar(birthDate),iCh=iching(key),tarotCard=tarot(key),runeName=rune(key),guard=pick(protectWords,key,'guard'),ryunen=calcRyunen(currentYear),ryugetsu=calcRyugetsu(currentYear,currentMonth);
let html=`<div class='reportHeader'><div class='reportTitle'>鑑定書</div><div class='reportSub'>MOA BUSINESS FORTUNE READING DOCUMENT</div></div><p><b>ご相談者：</b>${esc(name)}</p><p><b>相談テーマ：</b>${esc(topic)}</p><p><b>メニュー：</b>${esc($('menuType').value||'未設定')} / <b>料金：</b>${esc($('fee').value||'未設定')}</p><p><b>相談内容：</b><br>${esc(question).replace(/\n/g,'<br>')}</p><div class='callout'>${esc(safeOpeningText(st,name))}</div><div class='callout'>${esc(specialistNotice(st))}</div><div>${buildTags()}</div>`;
if(readMode==='compat' || readMode==='triple'){
const relLabels=getRelationshipLabels();
const partnerBirthDate=$('partnerBirthDate').value.trim();
const partnerBirthTime=$('partnerBirthTime').value.trim()||'12:00';
if(!partnerBirthDate){alert(readMode==='triple'?'相手Aの生年月日を入力してください。':'お相手の生年月日を入力してください。');return;}
const pPillars=enrichPillars(calcBaZi(partnerBirthDate,partnerBirthTime));
const pSign=signFromDate(partnerBirthDate);
const partner={name:$('partnerName').value.trim()||relLabels.a,sign:pSign,dayMaster:pPillars.dayP.stem,dayElement:stemElements[pPillars.dayP.stem],yearP:pPillars.yearP,monthP:pPillars.monthP};
const main={name:name,sign,dayMaster,dayElement,yearP:pillars.yearP,monthP:pillars.monthP};
const scoreA=makeCompat(main,partner);
if(readMode==='compat'){
  html+=`<div class='reportBlock'><h3>相性の本格計算</h3><div class='callout'>${esc(name)}様と${esc(partner.name)}様の相性は ${scoreA}点（${esc(pairSummaryLabel(scoreA))}）です。${esc(pairAdviceFromScore(scoreA))}</div><div class='callout'>この相性では、惹かれ合う力だけでなく、現実面の整えやすさ、感情の揺れやすさ、役割分担のしやすさも重要です。関係を長く安定させたい場合は、気持ちの強さより、日常の安心感を作れるかを見ることが鍵になります。</div><div class='callout'>また、相手への期待が強い時ほど、相手に求めるものと自分が守りたいものを分けて整理する方が、関係は崩れにくくなります。</div></div>`;
}else{
  const partner2BirthDate=$('partner2BirthDate').value.trim();
  const partner2BirthTime=$('partner2BirthTime').value.trim()||'12:00';
  if(!partner2BirthDate){alert('相手Bの生年月日を入力してください。');return;}
  const p2Pillars=enrichPillars(calcBaZi(partner2BirthDate,partner2BirthTime));
  const p2Sign=signFromDate(partner2BirthDate);
  const partner2={name:$('partner2Name').value.trim()||relLabels.b,sign:p2Sign,dayMaster:p2Pillars.dayP.stem,dayElement:stemElements[p2Pillars.dayP.stem],yearP:p2Pillars.yearP,monthP:p2Pillars.monthP};
  const scoreB=makeCompat(main,partner2);
  const scoreAB=makeCompat(partner,partner2);
  const bestPair=[[name, partner.name, scoreA],[name, partner2.name, scoreB],[partner.name, partner2.name, scoreAB]].sort((a,b)=>b[2]-a[2])[0];
  const caseTitle=(($('caseLabel')&&$('caseLabel').value.trim()) || relLabels.summary);
  html+=`<div class='reportBlock'><h3>${esc(caseTitle)} の比較</h3>
    <div class='reportMiniGrid'>
      <div class='miniBox'><div class='miniBoxLabel'>${esc(name)} × ${esc(partner.name)}</div><div class='miniBoxValue'>${scoreA}点 / ${esc(pairSummaryLabel(scoreA))}</div></div>
      <div class='miniBox'><div class='miniBoxLabel'>${esc(name)} × ${esc(partner2.name)}</div><div class='miniBoxValue'>${scoreB}点 / ${esc(pairSummaryLabel(scoreB))}</div></div>
      <div class='miniBox'><div class='miniBoxLabel'>${esc(partner.name)} × ${esc(partner2.name)}</div><div class='miniBoxValue'>${scoreAB}点 / ${esc(pairSummaryLabel(scoreAB))}</div></div>
      <div class='miniBox'><div class='miniBoxLabel'>最も強い縁</div><div class='miniBoxValue'>${esc(bestPair[0])} × ${esc(bestPair[1])}</div></div>
    </div>
    <div class='callout'>${esc(name)}様と${esc(partner.name)}様：${esc(pairAdviceFromScore(scoreA))}</div>
    <div class='callout'>${esc(name)}様と${esc(partner2.name)}様：${esc(pairAdviceFromScore(scoreB))}</div>
    <div class='callout'>${esc(partner.name)}様と${esc(partner2.name)}様：${esc(pairAdviceFromScore(scoreAB))}</div>
    <div class='callout'>3人読みでは、相性の強さだけでなく、現実面・境界線・役割の整理しやすさも一緒に見ることが大切です。</div><div class='callout'>特に3人関係は、誰と誰が近いかだけではなく、「どの関係がいちばん不安定になりやすいか」「誰が我慢を抱えやすいか」を見ることが大切です。感情の強さだけで動くと、ひとつの関係を整えようとして別の関係まで崩れやすくなるため、今後は優先順位を明確にしたうえで整理を進める方が安全です。</div>
  </div>`;
}
}else{html+=`<div class='reportBlock'><h3>まず結論</h3><div class='callout'>${esc(concernSummary(st,ws,yy))}</div><div class='callout'>${esc(adviceSummary(st))}</div><div class='callout'>${esc(cautionSummary(st))}</div></div><div class='reportBlock'><h3>今やると良いこと 3つ</h3><div class='reportMiniGrid'>${nextAction3(st).map((x,i)=>`<div class='miniBox'><div class='miniBoxLabel'>${i+1}</div><div class='miniBoxValue'>${esc(x)}</div></div>`).join('')}</div></div><div class='reportBlock'><h3>深く読む鑑定</h3>${deepThemeReading(st,name,ws,yy,sign,westElement,tarotCard,runeName)}</div><div class='reportBlock'><h3>今後の流れ</h3><div class='callout'>${esc(futureFlowReading(st,ryunen,ryugetsu,sign))}</div></div><div class='reportBlock'><h3>四柱詳細</h3>${buildPillarTable(pillars)}</div><div class='reportBlock'><h3>運勢レイヤー</h3><div class='reportMiniGrid'><div class='miniBox'><div class='miniBoxLabel'>流年</div><div class='miniBoxValue'>${esc(ryunen)}</div></div><div class='miniBox'><div class='miniBoxLabel'>流月</div><div class='miniBoxValue'>${esc(ryugetsu)}</div></div><div class='miniBox'><div class='miniBoxLabel'>開運の鍵</div><div class='miniBoxValue'>${esc(actionText(st))}</div></div><div class='miniBox'><div class='miniBoxLabel'>九星気学</div><div class='miniBoxValue'>${esc(kyusei)}</div></div></div></div><div class='reportBlock'><h3>補助占術</h3><div class='reportMiniGrid'><div class='miniBox'><div class='miniBoxLabel'>太陽星座</div><div class='miniBoxValue'>${esc(sign)} / ${esc(westElement)} / ${esc(westQuality)}</div></div><div class='miniBox'><div class='miniBoxLabel'>月傾向</div><div class='miniBoxValue'>${esc(moon)}</div></div><div class='miniBox'><div class='miniBoxLabel'>外的印象</div><div class='miniBoxValue'>${esc(asc)}</div></div><div class='miniBox'><div class='miniBoxLabel'>易断</div><div class='miniBoxValue'>${esc(iCh.base)} → ${esc(iCh.changed)}</div></div><div class='miniBox'><div class='miniBoxLabel'>タロット</div><div class='miniBoxValue'>${esc(tarotCard)}</div></div><div class='miniBox'><div class='miniBoxLabel'>ルーン</div><div class='miniBoxValue'>${esc(runeName)}</div></div><div class='miniBox'><div class='miniBoxLabel'>タロットの意味</div><div class='miniBoxValue'>${esc(tarotMeaning(tarotCard))}</div></div><div class='miniBox'><div class='miniBoxLabel'>ルーンの意味</div><div class='miniBoxValue'>${esc(runeMeaning(runeName))}</div></div></div></div>`;}
$('result').innerHTML=html;$('saveStatus').textContent='作成済';}
function resetForm(){['name','birthDate','birthTime','birthPlace','menuType','fee','reserveDate','reserveTime','relationshipPreset','caseLabel','partnerName','partnerBirthDate','partnerBirthTime','partnerBirthPlace','partner2Name','partner2BirthDate','partner2BirthTime','partner2BirthPlace','question','memo','proposalMemo','followMemo'].forEach(id=>{const el=$(id);if(el)el.value='';});$('topic').value='';$('gender').value='';if($('relationshipPreset'))$('relationshipPreset').value='';if($('caseLabel'))$('caseLabel').value='';$('consentCheck').checked=false;applyRelationshipPreset();$('result').innerHTML=baseReportHeader();$('reportNumber').textContent='未発行';$('reportDate').textContent='未発行';$('memoView').textContent='未入力';$('proposalMemoView').textContent='未入力';$('followMemoView').textContent='未入力';$('saveStatus').textContent='未保存';}
function bind(){ $('singleBtn').addEventListener('click',()=>{readMode='single';syncToggles();}); $('compatBtn').addEventListener('click',()=>{readMode='compat';syncToggles();}); if($('tripleBtn')) $('tripleBtn').addEventListener('click',()=>{readMode='triple';syncToggles();}); $('normalBtn').addEventListener('click',()=>{textMode='normal';syncToggles();}); $('longBtn').addEventListener('click',()=>{textMode='long';syncToggles();}); $('generateBtn').addEventListener('click',generateReading); $('saveSessionBtn').addEventListener('click',saveSession); $('startTimerBtn').addEventListener('click',startTimer); $('stopTimerBtn').addEventListener('click',stopTimer); $('exportCsvBtn').addEventListener('click',exportCsv); $('resetBtn').addEventListener('click',resetForm); $('pdfCustomerBtn').addEventListener('click',()=>{setPrintMode('customer');window.print();}); $('pdfInternalBtn').addEventListener('click',()=>{setPrintMode('internal');window.print();}); $('searchCustomer').addEventListener('input',renderCustomerList); document.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>insertTemplate(btn.dataset.template))); if($('relationshipPreset')) $('relationshipPreset').addEventListener('change',applyRelationshipPreset); syncToggles(); applyRelationshipPreset(); refreshDashboard(); renderCustomerList(); }
document.addEventListener('DOMContentLoaded',bind);
