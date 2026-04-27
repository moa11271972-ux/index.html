let mode="single", plan="free";
const PAYMENT_LINK = "https://example.com/your-payment-link";
const DEMO_LICENSE_CODE = "MOAMOA2026";
let premiumUnlocked = localStorage.getItem("moa_moa_premium_unlocked") === "true";
const stems=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"], branches=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const stemElements={"甲":"木","乙":"木","丙":"火","丁":"火","戊":"土","己":"土","庚":"金","辛":"金","壬":"水","癸":"水"};
const stemYinYang={"甲":"陽","乙":"陰","丙":"陽","丁":"陰","戊":"陽","己":"陰","庚":"陽","辛":"陰","壬":"陽","癸":"陰"};
const branchElements={"子":"水","丑":"土","寅":"木","卯":"木","辰":"土","巳":"火","午":"火","未":"土","申":"金","酉":"金","戌":"土","亥":"水"};
const monthBranches=["寅","卯","辰","巳","午","未","申","酉","戌","亥","子","丑"], monthStemStartMap={"甲":2,"己":2,"乙":4,"庚":4,"丙":6,"辛":6,"丁":8,"壬":8,"戊":0,"癸":0};
const zokanMap={"子":["癸"],"丑":["己","癸","辛"],"寅":["甲","丙","戊"],"卯":["乙"],"辰":["戊","乙","癸"],"巳":["丙","庚","戊"],"午":["丁","己"],"未":["己","丁","乙"],"申":["庚","壬","戊"],"酉":["辛"],"戌":["戊","辛","丁"],"亥":["壬","甲"]};
const westSigns=[["山羊座",1,20],["水瓶座",2,19],["魚座",3,21],["牡羊座",4,20],["牡牛座",5,21],["双子座",6,22],["蟹座",7,23],["獅子座",8,23],["乙女座",9,23],["天秤座",10,24],["蠍座",11,23],["射手座",12,22],["山羊座",12,32]];
const ichingNames=["乾為天","坤為地","水雷屯","山水蒙","水天需","天水訟","地水師","水地比","風天小畜","天沢履","地天泰","天地否","天火同人","火天大有","地山謙","雷地豫","沢雷随","山風蠱","地沢臨","風地観","火雷噬嗑","山火賁","山地剥","地雷復","天雷无妄","山天大畜","山雷頤","沢風大過","坎為水","離為火","沢山咸","雷風恒","天山遯","雷天大壮","火地晋","地火明夷","風火家人","火沢睽","水山蹇","雷水解","山沢損","風雷益","沢天夬","天風姤","沢地萃","地風升","沢水困","水風井","沢火革","火風鼎","震為雷","艮為山","風山漸","雷沢帰妹","雷火豊","火山旅","巽為風","兌為沢","風水渙","水沢節","風沢中孚","雷山小過","水火既済","火水未済"];
const tarotList=["愚者","魔術師","女教皇","女帝","皇帝","法王","恋人たち","戦車","力","隠者","運命の輪","正義","吊るされた男","死神","節制","悪魔","塔","星","月","太陽","審判","世界"];
const runeList=["フェオ","ウル","ソーン","アンスール","ライド","ケン","ギューフ","ウンジョ","ハガル","ニイド","イス","ヤラ","エイワズ","ペオース","アルジズ","ソウェイル","ティール","ベルカナ","エワズ","マンナズ","ラグズ","イング","ダエグ","オシラ"];
const moonStyles=["感情が深い","安心感重視","自由重視","理想が高い","共感力が強い","慎重で繊細"], ascStyles=["第一印象は穏やか","第一印象は華やか","第一印象は知的","第一印象は神秘的","第一印象は柔らかい","第一印象は芯が強い"], protectWords=["祓い清めて道ひらく","静かな光に守られる","言葉を慎み吉を招く","心を整え福を迎える","急がずして運を得る","穏やかにして道は通ず"];
const $=id=>document.getElementById(id);
function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function seed(str,salt=""){let h=0,s=(str||"seed")+salt;for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0}return Math.abs(h)}
function pick(arr,key,salt=""){return arr[seed(key,salt)%arr.length]}
function signFromDate(dateStr){const d=new Date(dateStr),m=d.getMonth()+1,day=d.getDate();for(const [name,mo,da] of westSigns){if(m<mo||(m===mo&&day<da))return name}return"山羊座"}
function westernElement(sign){return {"牡羊座":"火","獅子座":"火","射手座":"火","牡牛座":"地","乙女座":"地","山羊座":"地","双子座":"風","天秤座":"風","水瓶座":"風","蟹座":"水","蠍座":"水","魚座":"水"}[sign]||"水"}
function westernQuality(sign){return {"牡羊座":"活動","蟹座":"活動","天秤座":"活動","山羊座":"活動","牡牛座":"不動","獅子座":"不動","蠍座":"不動","水瓶座":"不動","双子座":"柔軟","乙女座":"柔軟","射手座":"柔軟","魚座":"柔軟"}[sign]||"柔軟"}
function nineStar(dateStr){const d=new Date(dateStr),y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate(),ey=(m<2||(m===2&&day<4))?y-1:y;let n=11-(ey%9);if(n>9)n-=9;if(n===0)n=9;return["一白水星","二黒土星","三碧木星","四緑木星","五黄土星","六白金星","七赤金星","八白土星","九紫火星"][n-1]}
function julianDay(y,m,d){if(m<=2){y-=1;m+=12}const A=Math.floor(y/100),B=2-A+Math.floor(A/4);return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5}
function sexagenaryName(i){return stems[i%10]+branches[i%12]}
function getYearPillar(dateStr){const d=new Date(dateStr+"T12:00:00"),y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate(),ey=(m<2||(m===2&&day<4))?y-1:y,index=(ey-1984+60)%60;return{index,stem:stems[index%10],branch:branches[index%12],name:sexagenaryName(index)}}
function getMonthPillar(dateStr){const d=new Date(dateStr+"T12:00:00"),yp=getYearPillar(dateStr);let m=d.getMonth()+1,day=d.getDate(),am=m;if(day<4)am-=1;if(am<=0)am+=12;const br=monthBranches[(am+10)%12],start=monthStemStartMap[yp.stem],bi=monthBranches.indexOf(br),si=(start+bi)%10;return{stem:stems[si],branch:br,name:stems[si]+br}}
function getDayPillar(dateStr){const d=new Date(dateStr+"T12:00:00"),jd=julianDay(d.getFullYear(),d.getMonth()+1,d.getDate()),base=julianDay(1984,2,2),diff=Math.floor(jd-base),index=((diff%60)+60)%60;return{index,stem:stems[index%10],branch:branches[index%12],name:sexagenaryName(index)}}
function getHourBranch(h){return branches[Math.floor(((h+1)%24)/2)]}
function getHourPillar(dayStem,timeStr){const hour=timeStr?Number(timeStr.split(":")[0]):12,hb=getHourBranch(hour),hbi=branches.indexOf(hb),startMap={"甲":0,"己":0,"乙":2,"庚":2,"丙":4,"辛":4,"丁":6,"壬":6,"戊":8,"癸":8},si=(startMap[dayStem]+hbi)%10;return{stem:stems[si],branch:hb,name:stems[si]+hb}}
function calcBaZi(dateStr,timeStr){const yearP=getYearPillar(dateStr),monthP=getMonthPillar(dateStr),dayP=getDayPillar(dateStr),hourP=getHourPillar(dayP.stem,timeStr||"12:00");return{yearP,monthP,dayP,hourP}}
function getTsuhen(dayStem,otherStem){const de=stemElements[dayStem],oe=stemElements[otherStem],same=stemYinYang[dayStem]===stemYinYang[otherStem],gen={木:"火",火:"土",土:"金",金:"水",水:"木"},prod={木:"水",火:"木",土:"火",金:"土",水:"金"},ctrl={木:"土",火:"金",土:"水",金:"木",水:"火"},ctrlBy={木:"金",火:"水",土:"木",金:"火",水:"土"};if(de===oe)return same?"比肩":"劫財";if(gen[de]===oe)return same?"食神":"傷官";if(ctrl[de]===oe)return same?"偏財":"正財";if(ctrlBy[de]===oe)return same?"偏官":"正官";if(prod[de]===oe)return same?"偏印":"印綬";return"―"}
function enrichPillars(p){const ds=p.dayP.stem;[p.yearP,p.monthP,p.dayP,p.hourP].forEach(r=>{r.zokan=(zokanMap[r.branch]||[]).join("・");r.tsuhen=r===p.dayP?"日元":getTsuhen(ds,r.stem)});return p}
function yinYangFromPillars(p){let yin=0,yang=0;[p.yearP,p.monthP,p.dayP,p.hourP].forEach(x=>{stemYinYang[x.stem]==="陽"?yang++:yin++;["子","寅","辰","午","申","戌"].includes(x.branch)?yang++:yin++});return{yin,yang}}
function fiveElementsFromPillars(p){const c={木:0,火:0,土:0,金:0,水:0};[p.yearP,p.monthP,p.dayP,p.hourP].forEach(x=>{c[stemElements[x.stem]]++;c[branchElements[x.branch]]++});return c}
function weakestStrongest(c){const e=Object.entries(c).sort((a,b)=>a[1]-b[1]);return{weak:e[0][0],strong:e[e.length-1][0]}}
function percent(c){const total=Object.values(c).reduce((a,b)=>a+b,0)||1,out={};Object.entries(c).forEach(([k,v])=>out[k]=Math.round(v/total*100));return out}
function subTopic(topic,q){if(q.includes("不倫"))return"不倫問題";if(q.includes("復縁"))return"復縁";if(q.includes("片思い")||q.includes("片想い"))return"片思い";if(q.includes("転職"))return"転職";return topic||"総合運"}
function tarotMeaning(card){return {"愚者":"新しい流れの始まりです。","魔術師":"今ある才能を形にする時です。","女教皇":"表面より内面を見る時です。","女帝":"育てる力が高まる時です。","皇帝":"形にする力が必要です。","法王":"正攻法と信頼が鍵です。","恋人たち":"選択がテーマです。","戦車":"前進の力が出ています。","力":"やわらかく制することが鍵です。","隠者":"静かに考える時です。","運命の輪":"流れが変わる節目です。","正義":"バランスが必要です。","星":"希望が戻る流れです。","月":"迷いを整理する時です。","太陽":"明るさが戻る時です。"}[card]||"今の流れを映すカードです。"}
function runeMeaning(rune){return {"フェオ":"豊かさと実りのルーンです。","ウル":"生命力と強さのルーンです。","ソーン":"境界線のルーンです。","アンスール":"言葉と伝達のルーンです。","ライド":"移動と進展のルーンです。","ケン":"気づきと灯りのルーンです。","ギューフ":"縁と贈り物のルーンです。","ウンジョ":"喜びのルーンです。"}[rune]||"今の流れを映すルーンです。"}
function opening(st,name){return {"恋愛":`${name}様の恋愛運を、やさしく見ていきますね。`,"不倫問題":`${name}様の複雑な恋の流れを、感情面と現実面に分けて整理します。`,"復縁":`${name}様の復縁の流れを、焦らず丁寧に見ていきます。`,"片思い":`${name}様の片思いの進み方を、距離感から見ていきます。`,"仕事":`${name}様の仕事運を、役割と流れから見ていきます。`,"転職":`${name}様の転職運を、準備と時期から見ていきます。`}[st]||`${name}様の今の運勢を、全体の流れから見ていきます。`}
function specialist(st){if(st==="健康")return"健康の表示は参考です。症状や治療判断は医療機関へご相談ください。";if(st==="お金")return"金銭・投資の表示は参考です。重要判断は専門家へご相談ください。";if(st==="不倫問題")return"不倫問題は法的判断が関わる場合があります。慰謝料・離婚・親権等は弁護士等へご相談ください。";return"この鑑定は参考表示です。重要な判断は占いだけで断定しないでください。"}
function summary(st,ws,yy){const y=yy.yang>yy.yin?"外へ動く力が強め":(yy.yin>yy.yang?"内面に抱えやすい":"陰陽の均衡が取れやすい");return {"恋愛":`恋愛は、焦って答えを出すより安心感を育てる時です。${ws.weak}が弱めで、${y}ため、相手の反応に揺れすぎないことが大切です。`,"不倫問題":`感情だけで動くと複雑化しやすい時です。${ws.weak}が弱めなので、気持ち・現実・境界線を分けて整理しましょう。`,"復縁":`復縁は、戻れるかだけでなく、戻った後に変われるかを見る時です。`,"片思い":`片思いは、押しすぎず自然な接点を増やすほど流れが良くなります。`,"仕事":`仕事は、役割と優先順位を整えるほど成果につながりやすい時です。`,"転職":`転職は、勢いより条件整理が鍵です。次に守りたいものを明確にしましょう。`,"独立":`独立は、小さく試して形にするほど安定します。`}[st]||`総合運は安定に向かっています。${ws.strong}の力を活かしながら、${ws.weak}を補う行動が開運につながります。`}
function nextActions(st){return {"恋愛":["気持ちを急いで確認しない","会いやすい空気をつくる","不安な時ほど一度落ち着く"],"不倫問題":["事実関係を整理する","自分の限界線を明確にする","感情的な結論を急がない"],"復縁":["戻りたい理由を書き出す","相手の変化を観察する","追いすぎない"],"片思い":["自然な接点を増やす","反応を急がない","生活を整える"],"仕事":["優先順位を3つに絞る","抱えすぎを減らす","強みを再確認する"],"転職":["譲れない条件を整理","準備を整える","勢いで辞めない"]}[st]||["急いで決めない","生活を整える","小さく前進する"]}
function deepReading(st,name,ws,yy,sign,el,card,rune){const y=yy.yang>yy.yin?"陽が強く、外へ動く力が先に出やすい状態":(yy.yin>yy.yang?"陰が強く、内面に抱え込みやすい状態":"陰陽が整いやすい状態");const lines=[`${name}様の命式では、五行の偏りがそのまま行動パターンや迷いやすい場面に出やすくなっています。${ws.strong}が強い時は得意分野で押し切れる反面、${ws.weak}が不足すると決断の軸が揺れやすくなります。`,`西洋補助では${sign}・${el}の性質が出ています。これは表向きの性格というより、人生の選び方や無理をした時に出やすい癖として読むと実感しやすいです。`,`今は${y}です。動く前に心身を整えること、相手や環境に合わせすぎないこと、そして現実的に続けられる選択をすることが開運につながります。`,`タロットは「${card}」。${tarotMeaning(card)} ルーンは「${rune}」。${runeMeaning(rune)} これは命式の弱点を補うための行動ヒントとして扱うと使いやすいです。`];return lines.map(x=>`<p>${x}</p>`).join("")}

const twelveFortuneOrder=["長生","沐浴","冠帯","建禄","帝旺","衰","病","死","墓","絶","胎","養"];
const twelveFortuneStart={"甲":"亥","乙":"午","丙":"寅","丁":"酉","戊":"寅","己":"酉","庚":"巳","辛":"子","壬":"申","癸":"卯"};
const branchIndexMap={"子":0,"丑":1,"寅":2,"卯":3,"辰":4,"巳":5,"午":6,"未":7,"申":8,"酉":9,"戌":10,"亥":11};
const seasonPower={春:{木:3,火:1,土:1,金:0,水:1},夏:{木:1,火:3,土:2,金:0,水:0},秋:{木:0,火:0,土:1,金:3,水:1},冬:{木:1,火:0,土:1,金:1,水:3},土用:{木:0,火:1,土:3,金:1,水:1}};
function seasonFromMonthBranch(br){
  if(["寅","卯"].includes(br))return "春";
  if(["巳","午"].includes(br))return "夏";
  if(["申","酉"].includes(br))return "秋";
  if(["亥","子"].includes(br))return "冬";
  return "土用";
}
function twelveFortune(dayStem,branch){
  const start=twelveFortuneStart[dayStem]||"亥";
  const startIdx=branchIndexMap[start], idx=branchIndexMap[branch];
  const yang=["甲","丙","戊","庚","壬"].includes(dayStem);
  const diff=yang ? (idx-startIdx+12)%12 : (startIdx-idx+12)%12;
  return twelveFortuneOrder[diff];
}
function countTenGodsDeep(p){
  const out={比肩:0,劫財:0,食神:0,傷官:0,偏財:0,正財:0,偏官:0,正官:0,偏印:0,印綬:0};
  [p.yearP,p.monthP,p.hourP].forEach(r=>{if(out[r.tsuhen]!==undefined)out[r.tsuhen]++;});
  return out;
}
function elementRelationship(dayElement){
  const generate={木:"火",火:"土",土:"金",金:"水",水:"木"};
  const producedBy={木:"水",火:"木",土:"火",金:"土",水:"金"};
  const control={木:"土",火:"金",土:"水",金:"木",水:"火"};
  const controlledBy={木:"金",火:"水",土:"木",金:"火",水:"土"};
  return {output:generate[dayElement],resource:producedBy[dayElement],wealth:control[dayElement],officer:controlledBy[dayElement],self:dayElement};
}
function judgeStrength(p,counts){
  const dayEl=stemElements[p.dayP.stem];
  const rel=elementRelationship(dayEl);
  const season=seasonFromMonthBranch(p.monthP.branch);
  let score=0;
  score += counts[dayEl]*2;
  score += counts[rel.resource]*1.5;
  score -= counts[rel.wealth]*1.1;
  score -= counts[rel.officer]*1.2;
  score -= counts[rel.output]*0.6;
  score += (seasonPower[season][dayEl]||0)*1.5;
  score += (seasonPower[season][rel.resource]||0)*0.8;
  if(p.monthP.branch===p.dayP.branch)score+=1.5;
  if(p.yearP.stem===p.dayP.stem||p.hourP.stem===p.dayP.stem)score+=1;
  const label=score>=9?"身強":(score>=6.5?"やや身強":(score>=4.5?"中和":(score>=2.8?"やや身弱":"身弱")));
  return {score:Math.round(score*10)/10,label,dayEl,season,rel};
}
function usefulGods(strength){
  const e=strength.rel;
  if(strength.label==="身強"||strength.label==="やや身強"){
    return {yong:[e.output,e.wealth,e.officer],avoid:[e.self,e.resource],policy:"強い自我やエネルギーを外へ流し、成果・責任・現実化へ向けると運が整いやすい命式です。"};
  }
  if(strength.label==="身弱"||strength.label==="やや身弱"){
    return {yong:[e.resource,e.self],avoid:[e.wealth,e.officer,e.output],policy:"まず支え・学び・休息・味方を整えることで、本来の力が安定して出やすい命式です。"};
  }
  return {yong:[e.output,e.wealth],avoid:["偏りすぎる五行"],policy:"偏りを作らず、表現・実務・人との調和をバランス良く使うことで運が安定します。"};
}
function kubouFromDayIndex(dayIndex){
  const group=Math.floor((dayIndex%60)/10);
  return ["戌亥","申酉","午未","辰巳","寅卯","子丑"][group]||"戌亥";
}
function deepEnrichPillars(p){
  enrichPillars(p);
  const ds=p.dayP.stem;
  [p.yearP,p.monthP,p.dayP,p.hourP].forEach(r=>{r.twelve=twelveFortune(ds,r.branch);});
  p.dayP.kubou=kubouFromDayIndex(p.dayP.index);
  return p;
}
function tenGodMeaning(name){
  const map={
    比肩:"自分軸・独立心・対等意識。強いと自分で決めたい気持ちが出ます。",
    劫財:"仲間・競争・巻き込み力。強いと人間関係やお金の流れが大きく動きます。",
    食神:"楽しみ・表現・安心感。自然体の魅力や生活の豊かさを表します。",
    傷官:"鋭い感性・表現・違和感への反応。才能が出る一方、言葉が強くなることもあります。",
    偏財:"人脈・行動力・流通するお金。広げる力と社交性を表します。",
    正財:"堅実なお金・管理力・生活基盤。積み重ねる力を表します。",
    偏官:"行動力・勝負・責任。プレッシャーの中で力を出す星です。",
    正官:"信用・秩序・社会性。役割や責任を大切にする星です。",
    偏印:"発想・直感・専門性。少し変わった視点や学びの星です。",
    印綬:"学び・保護・資格・評価。支えられながら伸びる力を表します。"
  };
  return map[name]||"";
}
function twelveMeaning(name){
  const map={
    長生:"物事が育ち始める運。素直に吸収し、基礎を作るほど伸びます。",
    沐浴:"感性が揺れやすい運。魅力は出ますが、迷いも出やすいです。",
    冠帯:"見られ方が整う運。表舞台や評価を意識すると力が出ます。",
    建禄:"実力を積み上げる運。仕事・自立・継続に強みがあります。",
    帝旺:"勢いが強い運。リーダー性が出る一方、強引さに注意です。",
    衰:"落ち着きと経験の運。無理に広げず、確実性を重視すると吉です。",
    病:"繊細さと感受性の運。心身の整え方が開運の鍵です。",
    死:"内省と区切りの運。終わらせるものを見極める力があります。",
    墓:"蓄積と保存の運。知識・財・経験を貯めるほど安定します。",
    絶:"切替と独自性の運。普通と違う道に才能が出やすいです。",
    胎:"準備と可能性の運。焦らず育てる段階です。",
    養:"守られ育つ運。人の助けを受け取ることで運が伸びます。"
  };
  return map[name]||"";
}
function flowPillarForYear(y){const index=(y-1984+60)%60;return{index,stem:stems[index%10],branch:branches[index%12],name:sexagenaryName(index)}}
function flowPillarForMonth(y,m){
  const yP=flowPillarForYear(y);
  const br=monthBranches[(m+10)%12];
  const start=monthStemStartMap[yP.stem];
  const bi=monthBranches.indexOf(br);
  const si=(start+bi)%10;
  return{stem:stems[si],branch:br,name:stems[si]+br};
}
function calcDaiunList(birthDate,gender,yearP){
  const y=new Date(birthDate).getFullYear();
  const forward = (gender==="男性" && stemYinYang[yearP.stem]==="陽") || (gender==="女性" && stemYinYang[yearP.stem]==="陰");
  const startAge=8;
  let mi=monthBranches.indexOf(getMonthPillar(birthDate).branch);
  let si=stems.indexOf(getMonthPillar(birthDate).stem);
  const list=[];
  for(let i=0;i<6;i++){
    mi=(mi+(forward?1:-1)+12)%12;
    si=(si+(forward?1:-1)+10)%10;
    list.push({age:startAge+i*10, name:stems[si]+monthBranches[mi], direction:forward?"順行":"逆行"});
  }
  return list;
}
function themeDeepReading(st,strength,yg,counts,tenGods,p,yearFlow,monthFlow){
  const yong=yg.yong.join("・"), avoid=yg.avoid.join("・");
  const base=`日主は${p.dayP.stem}（${stemElements[p.dayP.stem]}）で、判定は「${strength.label}」です。用神候補は ${yong}、注意したい偏りは ${avoid} です。${yg.policy}`;
  const flow=`今年の流れは${yearFlow.name}、今月の流れは${monthFlow.name}です。年運は大きなテーマ、月運は今すぐ出やすい気分や出来事として読みます。`;
  const map={
    恋愛:`恋愛では、日支「${p.dayP.branch}」と官星・財星の出方を重視します。${strength.label}のため、好きな気持ちを急いで形にするより、相手との安心感と現実的な距離を整えることが大切です。${yearFlow.name}の年は、過去のパターンを見直しながら、無理なく続く関係を選ぶほど運が安定します。`,
    不倫問題:`不倫問題では、感情だけでなく、責任・境界線・現実面を強く見ます。${base} 今は好きかどうかだけで結論を出すと迷いが深くなりやすいため、相手の状況、自分の守るべき生活、法的リスクを分けて整理することが大切です。`,
    復縁:`復縁では、日支と大運・年運の重なりを見ます。${flow} 戻りたい気持ちが強い時ほど、以前の別れの原因が命式上の偏りと関係していないかを見直す必要があります。`,
    片思い:`片思いでは、食傷の表現力と官星・財星の受け取られ方を見ます。今は一気に距離を詰めるより、自然に思い出してもらえる接点を増やす方が良い流れです。`,
    仕事:`仕事では、官星・印星・食傷の働きを重視します。${base} ${strength.label}の場合、評価を取りに行くより、役割・専門性・継続できる働き方を整えることで運が強くなります。`,
    転職:`転職では、官星の圧力、印星の支え、食傷の表現を見ます。${flow} 今すぐ辞めるかどうかより、次の環境で自分の用神が活かせるかを見ることが重要です。`,
    独立:`独立では、比劫・食傷・財星の流れを見ます。${base} 自分の力だけで押し切るより、商品化・発信・お金の回収導線まで整えることで運が安定します。`,
    お金:`金運では、財星だけでなく、日主が財を扱える強さがあるかを見ます。${strength.label}なので、攻める前に支出・回収・継続性を整えるほど金運が安定します。`,
    結婚:`結婚では、配偶者星と日支、年運の刺激を見ます。今は理想だけではなく、生活・責任・お金・家族観をすり合わせることが運を整えます。`,
    家庭:`家庭運では、日支と印星・財星のバランスを見ます。抱え込みすぎると不満が溜まりやすいため、役割を言葉にすることが大切です。`,
    総合運:`${base} ${flow} 今は一気に変えるより、弱い五行を補いながら、強い五行を良い形で使うことが開運につながります。`
  };
  return map[st]||map["総合運"];
}
function buildDeepBaziSection(p,counts,st,gender,date){
  const strength=judgeStrength(p,counts);
  const yg=usefulGods(strength);
  const ten=countTenGodsDeep(p);
  const now=new Date();
  const yf=flowPillarForYear(now.getFullYear());
  const mf=flowPillarForMonth(now.getFullYear(),now.getMonth()+1);
  const daiun=calcDaiunList(date,gender||"",p.yearP);
  const tenRows=Object.entries(ten).filter(([k,v])=>v>0).map(([k,v])=>`<tr><td>${k}</td><td>${v}</td><td>${tenGodMeaning(k)}</td></tr>`).join("") || `<tr><td colspan="3">主要な通変星の偏りは少なめです。</td></tr>`;
  const pillarRows=[["年柱",p.yearP],["月柱",p.monthP],["日柱",p.dayP],["時柱",p.hourP]].map(([n,r])=>`<tr><td>${n}</td><td>${r.name}</td><td>${r.zokan}</td><td>${r.tsuhen}</td><td>${r.twelve}</td><td>${twelveMeaning(r.twelve)}</td></tr>`).join("");
  const daiunRows=daiun.map(d=>`<tr><td>${d.age}歳頃〜</td><td>${d.name}</td><td>${d.direction}</td></tr>`).join("");
  const body=themeDeepReading(st,strength,yg,counts,ten,p,yf,mf);
  return `<div class="block">
    <h3>四柱推命・本格分析</h3>
    <div class="badgeLine">
      <span class="badge">日主：${p.dayP.stem}（${stemElements[p.dayP.stem]}）</span>
      <span class="badge">身強身弱：${strength.label}</span>
      <span class="badge">季節：${strength.season}</span>
      <span class="badge">空亡：${p.dayP.kubou}</span>
      <span class="badge">用神候補：${yg.yong.join("・")}</span>
      <span class="badge">忌神候補：${yg.avoid.join("・")}</span>
    </div>
    <div class="readingText"><p>${body}</p></div>
    <table class="deepTable"><thead><tr><th>柱</th><th>干支</th><th>蔵干</th><th>通変星</th><th>十二運</th><th>読み</th></tr></thead><tbody>${pillarRows}</tbody></table>
    <h3 style="margin-top:16px">通変星の出方</h3>
    <table class="deepTable"><thead><tr><th>星</th><th>数</th><th>意味</th></tr></thead><tbody>${tenRows}</tbody></table>
    <h3 style="margin-top:16px">大運の流れ</h3>
    <table class="deepTable"><thead><tr><th>時期</th><th>大運</th><th>進み方</th></tr></thead><tbody>${daiunRows}</tbody></table>
    <div class="lock">大運は簡易計算です。本格鑑定では節入り日時・出生地・流派により開始年齢が変わる場合があります。</div>
  </div>`;
}


function dayMasterProfile(stem){
  const map={
    "甲":{core:"大樹のように真っすぐ伸びる人。筋を通し、長期的に積み上げるほど運が開きます。",shadow:"頑固になりすぎると、曲げられずに苦しくなります。",key:"信頼できる目標を決め、焦らず育てること。"},
    "乙":{core:"草花のようにしなやかに伸びる人。人との調和や感性を活かすほど魅力が出ます。",shadow:"気を遣いすぎると、自分の本音が見えにくくなります。",key:"優しさと境界線を両立させること。"},
    "丙":{core:"太陽のように明るく照らす人。表に出るほど運が動きます。",shadow:"気分で動きすぎると、継続が弱くなります。",key:"明るさを現実の行動に落とすこと。"},
    "丁":{core:"灯火のように繊細で深い人。小さな気づきや美意識が強みです。",shadow:"不安を抱え込むと、考えすぎになりやすいです。",key:"安心できる場所で才能を磨くこと。"},
    "戊":{core:"山のように安定感がある人。人を受け止め、土台を作る力があります。",shadow:"変化を嫌いすぎると、停滞しやすくなります。",key:"守るものと変えるものを分けること。"},
    "己":{core:"田畑のように育てる力がある人。細やかな配慮と現実感覚が強みです。",shadow:"抱え込みすぎると、疲れが遅れて出ます。",key:"自分の回復時間を確保すること。"},
    "庚":{core:"鉄のように決断力がある人。白黒をつけ、切り開く力があります。",shadow:"強く言いすぎると、周囲との摩擦が出ます。",key:"決断に温かさを添えること。"},
    "辛":{core:"宝石のように洗練された人。美意識・観察力・品の良さが魅力です。",shadow:"完璧を求めすぎると、自分も相手も苦しくなります。",key:"磨くことと許すことの両立。"},
    "壬":{core:"大河のように器が大きい人。情報・移動・人脈で運が広がります。",shadow:"流されすぎると、軸がぼやけます。",key:"自由の中に目的を持つこと。"},
    "癸":{core:"雨露のように繊細で知的な人。直感・学び・共感力が強みです。",shadow:"不安が強いと、行動前に迷いすぎます。",key:"小さく試して安心を増やすこと。"}
  };
  return map[stem]||{core:"個性を活かして進む人です。",shadow:"偏りに注意が必要です。",key:"バランスを整えること。"};
}
function monthCommandReading(monthBranch,dayEl){
  const season=seasonFromMonthBranch(monthBranch);
  const map={
    春:"成長・挑戦・人とのつながりがテーマです。始める力はありますが、焦りすぎると散らかります。",
    夏:"表現・情熱・注目がテーマです。魅力は出やすいですが、熱くなりすぎると疲れます。",
    秋:"整理・決断・結果がテーマです。現実的な判断に強い一方、厳しくなりすぎないことが大切です。",
    冬:"内省・準備・情報収集がテーマです。深く考える力はありますが、動き出しが遅れやすいです。",
    土用:"安定・調整・生活基盤がテーマです。守る力はありますが、変化を怖がりすぎないことが必要です。"
  };
  return `月令は${season}の気です。${map[season]} 日主の${dayEl}がこの季節でどう働くかを見ると、今世で伸ばすべき力と疲れやすい場面が見えます。`;
}
function topicStars(st,dayStem){
  const map={
    恋愛:["官星・財星","相手に求める安心感、惹かれ方、関係を形にする力を見ます。"],
    不倫問題:["官星・財星・日支","感情だけでなく、責任・境界線・生活への影響を見ます。"],
    復縁:["日支・印星・官星","過去の縁、戻る理由、同じ問題を繰り返さないかを見ます。"],
    片思い:["食傷・官星・財星","気持ちの伝え方、相手に届く表現、距離感を見ます。"],
    仕事:["官星・印星・食傷","役割、評価、専門性、働き方の向き不向きを見ます。"],
    転職:["官星・印星・財星","今の環境の圧力、次の安定性、収入面を見ます。"],
    独立:["比劫・食傷・財星","自力、発信、商品化、回収力を見ます。"],
    お金:["財星・比劫","お金を扱う力、出入り、守り方を見ます。"],
    結婚:["配偶者星・日支","生活として続く相性、責任、家庭観を見ます。"],
    家庭:["日支・印星・財星","家庭内の役割、支え合い、負担の偏りを見ます。"],
    総合運:["日主・月令・用神","本質、現在の流れ、整えるべき偏りを見ます。"]
  };
  const v=map[st]||map["総合運"];
  return {label:v[0],desc:v[1]};
}
function flowInteractionReading(p,flow,kind){
  const dayStem=p.dayP.stem, dayBranch=p.dayP.branch;
  const god=getTsuhen(dayStem,flow.stem);
  const rels=branchRelation(dayBranch,flow.branch);
  let text=`${kind}の干支は${flow.name}です。天干は日主から見ると「${god}」で、${tenGodMeaning(god)||"今の流れに影響を与える星です。"}`;
  if(rels.length){
    text+=` 地支では日支との間に ${rels.map(r=>r.type).join("・")} が出ます。${rels.map(r=>r.text).join(" ")}`;
  }else{
    text+=" 地支の強い冲・刑・害は少なめで、急激な変化よりも積み重ねが出やすい流れです。";
  }
  return text;
}
function directAnswer(st,strength,yg){
  const y=yg.yong.join("・");
  const avoid=yg.avoid.join("・");
  const common=`結論として、今は「${y}」を補う行動が鍵です。逆に「${avoid}」へ偏る動きは迷いや停滞を生みやすいです。`;
  const map={
    恋愛:`${common} 恋愛は急展開を狙うより、安心して続く関係づくりが優先です。相手の反応を追いすぎるより、自分の生活と心を整えた方が結果的に魅力が伝わります。`,
    不倫問題:`${common} 不倫問題は、気持ちの強さだけで進めると現実面の負担が大きくなります。今は秘密を深めるより、事実・責任・今後の選択肢を分けて整理する時です。`,
    復縁:`${common} 復縁は可能性だけを見るより、戻った後に同じ問題を繰り返さないかが重要です。相手を動かすより、自分の状態を整える方が流れが変わります。`,
    片思い:`${common} 片思いは勢いより接点の質です。急に気持ちを出し切るより、自然に信頼が増える関わり方が向いています。`,
    仕事:`${common} 仕事は評価を取りに行くより、役割と強みを一致させる時です。今の不満は才能不足ではなく、使い方のズレから来ている可能性があります。`,
    転職:`${common} 転職は感情だけで動くと後悔が出やすいです。次の職場で何を守りたいか、何を捨てたいかを明確にすると運が動きます。`,
    独立:`${common} 独立は向いている可能性がありますが、勢いだけでは弱いです。商品・集客・回収導線を作ってから進めると安定します。`,
    お金:`${common} 金運は増やす前に漏れを止める時です。感情で使うお金と未来に残るお金を分けるほど安定します。`,
    結婚:`${common} 結婚は気持ちだけでなく生活設計が鍵です。お金・家族・役割を言葉にできる相手かどうかを見てください。`,
    家庭:`${common} 家庭は我慢で保つより、役割を見直す時です。言わなくても分かるはず、を減らすことが開運です。`,
    総合運:`${common} 今は大きく勝負するより、弱い部分を補い、強い部分を正しい方向へ流すことで運が育ちます。`
  };
  return map[st]||map["総合運"];
}
function ngActions(st){
  const base=["焦って結論を出すこと","感情だけで約束すること","疲れている時に大きな判断をすること"];
  const topic={
    恋愛:["相手の反応を試すこと","不安から連絡を増やしすぎること"],
    不倫問題:["秘密の関係を勢いで深めること","法的・生活面の確認を後回しにすること"],
    復縁:["寂しさだけで連絡すること","過去の原因を見ないまま戻ろうとすること"],
    仕事:["全部を抱え込むこと","評価されたい一心で無理を続けること"],
    転職:["辞めることだけを目的にすること","条件整理なしで応募すること"],
    独立:["準備なしで大きく始めること","売上導線を作らずに走ること"]
  };
  return [...(topic[st]||[]),...base].slice(0,5);
}
function threeMonthPlan(st,yg){
  const y=yg.yong[0]||"木";
  const elementPlan={
    木:["学び直し・情報整理をする","人に相談し、選択肢を広げる","成長できる環境へ一歩近づく"],
    火:["発信・表現を増やす","魅力や実績を見える形にする","人との温かい交流を増やす"],
    土:["生活リズムとお金の管理を整える","約束・計画を具体化する","続けられる仕組みを作る"],
    金:["不要なものを整理する","契約・条件・境界線を確認する","決断を先延ばしにしない"],
    水:["休息と情報収集を優先する","感情を流す時間を作る","柔軟に動ける余白を作る"]
  };
  const base=elementPlan[y]||elementPlan["木"];
  const topicAdd={
    恋愛:"恋愛では、関係を急がず安心感を増やすこと。",
    不倫問題:"不倫問題では、気持ち・現実・リスクを紙に分けて整理すること。",
    復縁:"復縁では、連絡前に別れの原因と改善点を書き出すこと。",
    仕事:"仕事では、今の役割と本当に得意な作業を分けて考えること。",
    転職:"転職では、譲れない条件を3つに絞ること。",
    独立:"独立では、小さく売れる商品と集客導線を作ること。"
  };
  return [...base,topicAdd[st]||"小さく整えながら前へ進むこと。"];
}
function buildQuestionAnswerSection(st,p,counts,date,gender){
  const strength=judgeStrength(p,counts);
  const yg=usefulGods(strength);
  const prof=dayMasterProfile(p.dayP.stem);
  const topic=topicStars(st,p.dayP.stem);
  const now=new Date();
  const yf=flowPillarForYear(now.getFullYear());
  const mf=flowPillarForMonth(now.getFullYear(),now.getMonth()+1);
  const monthRead=monthCommandReading(p.monthP.branch,stemElements[p.dayP.stem]);
  const answer=directAnswer(st,strength,yg);
  const ng=ngActions(st).map(x=>`<li>${x}</li>`).join("");
  const plan=threeMonthPlan(st,yg).map((x,i)=>`<p><b>${i+1}か月目：</b>${x}</p>`).join("");
  return `<div class="answerBox">
    <h3>相談への深い答え</h3>
    <div class="answerLead">${answer}</div>
    <div class="deepColumns">
      <div class="deepNote"><b>日主の本質</b><br>${prof.core}<br><br><b>影の出方</b><br>${prof.shadow}<br><br><b>開運の鍵</b><br>${prof.key}</div>
      <div class="deepNote"><b>この相談で見る星</b><br>${topic.label}<br>${topic.desc}<br><br><b>月令から見る本質</b><br>${monthRead}</div>
    </div>
    <div class="timelineBox"><b>今年の流れ</b><br>${flowInteractionReading(p,yf,"今年")}</div>
    <div class="timelineBox"><b>今月の流れ</b><br>${flowInteractionReading(p,mf,"今月")}</div>
    <div class="ngBox"><b>今してはいけないこと</b><ul>${ng}</ul></div>
    <div class="timelineBox"><b>3か月以内の動き方</b>${plan}</div>
  </div>`;
}

function relationLabels(){const preset=$("relationshipPreset").value;return {triangle:{a:"お相手A",b:"お相手B",summary:"三角関係"},family:{a:"家族A",b:"家族B",summary:"家族関係"},couple_child:{a:"配偶者",b:"お子様",summary:"夫婦と子ども"},parent_child:{a:"親",b:"子",summary:"親子関係"},friends:{a:"ご友人A",b:"ご友人B",summary:"友人関係"}}[preset]||{a:"お相手A",b:"お相手B",summary:"3人関係"}}
function applyRelationshipPreset(){const r=relationLabels();$("partnerName").placeholder=r.a+"名";$("partner2Name").placeholder=r.b+"名";$("partnerALabelTitle").textContent=r.a+"情報";$("partnerBLabelTitle").textContent=r.b+"情報"}

const liuhePairs=[["子","丑"],["寅","亥"],["卯","戌"],["辰","酉"],["巳","申"],["午","未"]];
const chongPairs=[["子","午"],["丑","未"],["寅","申"],["卯","酉"],["辰","戌"],["巳","亥"]];
const haiPairs=[["子","未"],["丑","午"],["寅","巳"],["卯","辰"],["申","亥"],["酉","戌"]];
const xingPairs=[["子","卯"],["寅","巳"],["巳","申"],["丑","戌"],["戌","未"],["辰","辰"],["午","午"],["酉","酉"],["亥","亥"]];
const sanheGroups=[["申","子","辰","水"],["亥","卯","未","木"],["寅","午","戌","火"],["巳","酉","丑","金"]];
const fangheGroups=[["寅","卯","辰","木"],["巳","午","未","火"],["申","酉","戌","金"],["亥","子","丑","水"]];
function pairIncludes(pair,a,b){return (pair[0]===a&&pair[1]===b)||(pair[0]===b&&pair[1]===a)}
function branchRelation(a,b){
  const out=[];
  if(liuhePairs.some(p=>pairIncludes(p,a,b)))out.push({type:"支合",score:10,kind:"good",text:"自然に惹かれ合いやすく、安心感を作りやすい関係です。"});
  if(chongPairs.some(p=>pairIncludes(p,a,b)))out.push({type:"冲",score:-12,kind:"warn",text:"価値観や生活リズムがぶつかりやすく、急な変化が出やすい関係です。"});
  if(haiPairs.some(p=>pairIncludes(p,a,b)))out.push({type:"害",score:-8,kind:"warn",text:"悪気はなくても誤解やすれ違いが起きやすい関係です。"});
  if(xingPairs.some(p=>pairIncludes(p,a,b)))out.push({type:"刑",score:-8,kind:"warn",text:"近いほど遠慮がなくなり、言葉や態度が刺さりやすい関係です。"});
  return out;
}
function groupRelation(branchesArr){
  const out=[];
  sanheGroups.forEach(g=>{
    const count=g.slice(0,3).filter(x=>branchesArr.includes(x)).length;
    if(count>=3)out.push({type:"三合",element:g[3],kind:"good",text:`${g[3]}の三合が成立し、同じ目的へ向かうと大きな力を出しやすい組み合わせです。`});
    else if(count===2)out.push({type:"半会",element:g[3],kind:"good",text:`${g[3]}の半会があり、共通目的があると関係がまとまりやすいです。`});
  });
  fangheGroups.forEach(g=>{
    const count=g.slice(0,3).filter(x=>branchesArr.includes(x)).length;
    if(count>=3)out.push({type:"方合",element:g[3],kind:"good",text:`${g[3]}の方合が成立し、家族・組織・仲間としてまとまりやすい力があります。`});
  });
  return out;
}
function advancedPairScore(a,b){
  let base=pairScore(a,b);
  const rels=[
    ...branchRelation(a.yearP.branch,b.yearP.branch),
    ...branchRelation(a.monthP.branch,b.monthP.branch),
    ...branchRelation(a.dayBranch||a.yearP.branch,b.dayBranch||b.yearP.branch)
  ];
  rels.forEach(r=>base+=r.score);
  return Math.max(20,Math.min(100,base));
}
function relationReportHtml(title,aName,bName,a,b,score){
  const rels=[
    ...branchRelation(a.yearP.branch,b.yearP.branch).map(r=>({...r,place:"年支"})),
    ...branchRelation(a.monthP.branch,b.monthP.branch).map(r=>({...r,place:"月支"})),
    ...branchRelation(a.dayBranch||a.yearP.branch,b.dayBranch||b.yearP.branch).map(r=>({...r,place:"日支"}))
  ];
  const good=rels.filter(r=>r.kind==="good");
  const warn=rels.filter(r=>r.kind==="warn");
  const goodHtml=good.length?good.map(r=>`<p><b>${r.place}：${r.type}</b> ${r.text}</p>`).join(""):"<p>強い合は少なめですが、無理なく距離を整えることで安定しやすい関係です。</p>";
  const warnHtml=warn.length?warn.map(r=>`<p><b>${r.place}：${r.type}</b> ${r.text}</p>`).join(""):"<p>大きな冲・刑・害は少なめで、極端な衝突は起きにくい組み合わせです。</p>";
  const care = score>=75
    ? "この関係は良い部分が出やすいので、甘えすぎず感謝を言葉にすることで長く安定します。"
    : score>=55
      ? "この関係は調整型です。好き嫌いだけで判断せず、会う頻度・連絡・役割分担を整えると良くなります。"
      : "この関係は慎重に育てる必要があります。気持ちの強さより、境界線・生活リズム・現実条件を先に整えることが大切です。";
  return `<div class="block"><h3>${title}</h3>
    <div class="lock">${esc(aName)}様 × ${esc(bName)}様：${score}点 / ${pairLabel(score)}<br>${pairAdvice(score)}</div>
    <div class="block relationGood"><h3>良い縁の出方</h3>${goodHtml}</div>
    <div class="block relationWarn"><h3>注意したい出方</h3>${warnHtml}</div>
    <div class="block relationCare"><h3>関係を育てる行動</h3><p>${care}</p></div>
  </div>`;
}
function threePeopleDeepHtml(name,aName,bName,main,a,b,sA,sB,sAB){
  const branchesArr=[main.yearP.branch,main.monthP.branch,main.dayBranch||main.yearP.branch,a.yearP.branch,a.monthP.branch,a.dayBranch||a.yearP.branch,b.yearP.branch,b.monthP.branch,b.dayBranch||b.yearP.branch];
  const groups=groupRelation(branchesArr);
  const groupHtml=groups.length?groups.map(g=>`<p><b>${g.type}（${g.element}）</b> ${g.text}</p>`).join(""):"<p>三合・方合の強い成立は少なめです。関係を安定させるには、目的や役割を言葉で合わせる必要があります。</p>";
  const scores=[[name,aName,sA],[name,bName,sB],[aName,bName,sAB]].sort((x,y)=>y[2]-x[2]);
  const highest=scores[0], lowest=scores[2];
  return `<div class="block">
    <h3>3人関係の本格深読み</h3>
    <div class="growthNote">最も結びつきが出やすいのは <b>${esc(highest[0])}様 × ${esc(highest[1])}様</b>、最も調整が必要なのは <b>${esc(lowest[0])}様 × ${esc(lowest[1])}様</b> です。</div>
    <div class="block relationGood"><h3>三合・方合のまとまり</h3>${groupHtml}</div>
    <div class="block relationCare"><h3>3人関係で大切なこと</h3>
      <p>3人関係では、誰か1人だけが我慢を背負うと全体が崩れやすくなります。相性点が高い組み合わせほど無意識に近くなり、低い組み合わせほど誤解が残りやすいため、言葉・時間・役割を分けて整えることが重要です。</p>
      <p>恋愛や不倫問題の場合は、感情だけで判断せず、生活・責任・法的リスクを切り分けることが必要です。家族関係の場合は、正しさよりも負担の偏りを減らすことが開運になります。</p>
    </div>
  </div>`;
}
function yongActionAdvice(yg,st){
  const y=yg.yong.join("・");
  const base=`用神候補は ${y} です。`;
  const map={
    木:"学び直し、文章化、相談、成長できる環境を選ぶこと。",
    火:"発信、見える化、笑顔、温かい交流、魅力を表に出すこと。",
    土:"生活基盤、約束、貯蓄、継続、現実的な計画を整えること。",
    金:"整理、決断、ルール作り、契約確認、不要なものを手放すこと。",
    水:"休息、情報収集、移動、柔軟性、感情を流す時間を持つこと。"
  };
  return base+" "+yg.yong.map(e=>map[e]||"偏りを整えること。").join(" ");
}

function pairScore(a,b){let s=58;if(a.sign===b.sign)s+=10;if(a.dayMaster===b.dayMaster)s+=10;if(a.yearP.branch===b.yearP.branch)s+=6;if(a.dayElement===b.dayElement)s+=8;if(a.monthP.branch===b.monthP.branch)s+=4;return Math.min(100,s)}
function pairLabel(s){if(s>=80)return"強い縁";if(s>=68)return"良好";if(s>=55)return"調整型";return"慎重に見る"}
function pairAdvice(s){if(s>=80)return"強い引力があります。現実面を整えるほど良い縁として育ちます。";if(s>=68)return"相性は良好です。違いを活かす意識で安定します。";if(s>=55)return"惹かれる面はありますが、距離感の調整が必要です。";return"勢いより、事実と境界線を丁寧に整理しましょう。"}
function buildPillarTable(p){const rows=[["年柱",p.yearP],["月柱",p.monthP],["日柱",p.dayP],["時柱",p.hourP]];return`<table class="table"><thead><tr><th>柱</th><th>干支</th><th>蔵干</th><th>通変星</th></tr></thead><tbody>${rows.map(([n,r])=>`<tr><td>${n}</td><td>${r.name}</td><td>${r.zokan}</td><td>${r.tsuhen}</td></tr>`).join("")}</tbody></table>`}
function chips(){return["四柱推命","九星気学","西洋補助","易","タロット","ルーン"].map(x=>`<span class="tag">✦ ${x}</span>`).join("")}
function scoreStars(n){return"★".repeat(n)+"☆".repeat(5-n)}
function insertTemplate(t){const map={"恋愛":"今後の恋愛運と、動くべき時期を知りたいです。","不倫問題":"不倫関係の今後と、どう整理していくべきかを知りたいです。","復縁":"復縁の可能性と、今動くべき時期を知りたいです。","片思い":"片思い中の相手との進展可能性を知りたいです。","仕事":"今後の仕事運と、動くべき方向性を知りたいです。","転職":"転職のタイミングと、今の仕事を続けるべきか知りたいです。"};$("question").value=map[t]||""}
function syncPlan(){
  if(plan==="premium" && !premiumUnlocked){
    $("premiumBtn").classList.remove("active");
    $("freeBtn").classList.add("active");
  }else{
    $("freeBtn").classList.toggle("active",plan==="free");
    $("premiumBtn").classList.toggle("active",plan==="premium");
  }
}
function syncMode(){$("singleBtn").classList.toggle("active",mode==="single");$("compatBtn").classList.toggle("active",mode==="compat");$("tripleBtn").classList.toggle("active",mode==="triple");$("partnerSection").classList.toggle("hidden",mode==="single");$("partnerBSection").classList.toggle("hidden",mode!=="triple")}
function generateReading(){
  if(!$("consentCheck").checked){alert("運用確認にチェックを入れてください。");return}
  const name=$("name").value.trim()||"あなた", date=$("birthDate").value, time=$("birthTime").value||"12:00", topic=$("topic").value||"総合運", q=$("question").value.trim();
  if(!date){alert("生年月日を入力してください。");return} if(!q){alert("相談内容を入力してください。");return}
  if(plan==="premium" && !premiumUnlocked){plan="free";syncPlan();}
  const st=subTopic(topic,q), key=`${name}${date}${time}${topic}${q}`, sign=signFromDate(date), el=westernElement(sign), qual=westernQuality(sign);
  const p=deepEnrichPillars(calcBaZi(date,time)), yy=yinYangFromPillars(p), counts=fiveElementsFromPillars(p), per=percent(counts), ws=weakestStrongest(counts);
  const kyusei=nineStar(date), ich=pick(ichingNames,key,"ich"), card=pick(tarotList,key,"tarot"), ru=pick(runeList,key,"rune"), moon=pick(moonStyles,key,"moon"), asc=pick(ascStyles,key,"asc"), guard=pick(protectWords,key,"guard");
  let html=`<div class="fortuneCard"><div class="bigLuck"><div class="smallT">総合運</div><div class="daikichi">${plan==="premium"?"深吉":"吉"}</div><p>${esc(opening(st,name))}</p></div><div class="scoreGrid"><div class="scoreBox"><b>恋愛運</b><div class="stars">${scoreStars(4)}</div><small>安心感が鍵</small></div><div class="scoreBox"><b>仕事運</b><div class="stars">${scoreStars(4)}</div><small>努力が実を結ぶ</small></div><div class="scoreBox"><b>金運</b><div class="stars">${scoreStars(3)}</div><small>計画性が吉</small></div></div></div>`;
  html+=`<div class="characters"><div class="charBox"><div class="avatar left"></div><div class="bubble">こんにちは♪ MOA MOAです。<br>${esc(opening(st,name))}</div></div><div class="charBox"><div class="avatar right"></div><div class="bubble">${esc(summary(st,ws,yy))}<br>命式の偏りも見ながら、今の行動を整えていきましょう。</div></div></div>`;
  html+=`<div class="block">${chips()}<div class="lock">${esc(specialist(st))}</div></div>`;
  if(mode==="single"){
    html+=`<div class="block"><h3>今やると良いこと</h3><div class="miniGrid">${nextActions(st).map((a,i)=>`<div class="mini"><div class="k">${i+1}</div><div class="v">${esc(a)}</div></div>`).join("")}</div></div>`;
    html+=`<div class="block"><h3>命式</h3>${buildPillarTable(p)}</div>`;
    html+=buildDeepBaziSection(p,counts,st,$("gender").value,date);
    html+=`<div class="block"><h3>補助占術</h3><div class="miniGrid"><div class="mini"><div class="k">九星</div><div class="v">${kyusei}</div></div><div class="mini"><div class="k">星座</div><div class="v">${sign}<br>${el}/${qual}</div></div><div class="mini"><div class="k">易</div><div class="v">${ich}</div></div><div class="mini"><div class="k">守り</div><div class="v">${guard}</div></div><div class="mini"><div class="k">月傾向</div><div class="v">${moon}</div></div><div class="mini"><div class="k">印象</div><div class="v">${asc}</div></div><div class="mini"><div class="k">タロット</div><div class="v">${card}</div></div><div class="mini"><div class="k">ルーン</div><div class="v">${ru}</div></div></div></div>`;
    if(plan==="premium"){html+=`<div class="block"><h3>深く読む鑑定</h3>${deepReading(st,name,ws,yy,sign,el,card,ru)}</div><div class="block"><h3>五行バランス</h3><div class="miniGrid">${["木","火","土","金","水"].map(k=>`<div class="mini"><div class="k">${k}</div><div class="v">${counts[k]} / ${per[k]}%</div></div>`).join("")}</div></div>`}else{html+=`<div class="lock">有料版では、相談への深い答え・日主の本質・月令・年運月運・3か月行動計画まで表示されます。左の「購入する」から案内を確認できます。</div>`}
  }else{
    const r=relationLabels(), p1Date=$("partnerBirthDate").value, p1Time=$("partnerBirthTime").value||"12:00"; if(!p1Date){alert("お相手Aの生年月日を入力してください。");return}
    const main={name,sign,dayMaster:p.dayP.stem,dayElement:stemElements[p.dayP.stem],dayBranch:p.dayP.branch,yearP:p.yearP,monthP:p.monthP}, p1P=deepEnrichPillars(calcBaZi(p1Date,p1Time)), p1Sign=signFromDate(p1Date);
    const a={name:$("partnerName").value.trim()||r.a,sign:p1Sign,dayMaster:p1P.dayP.stem,dayElement:stemElements[p1P.dayP.stem],dayBranch:p1P.dayP.branch,yearP:p1P.yearP,monthP:p1P.monthP}, sA=advancedPairScore(main,a);
    if(mode==="compat"){
      if(plan==="premium"){
        html+=relationReportHtml("2人相性・本格分析",name,a.name,main,a,sA);
      }else{
        html+=`<div class="block"><h3>2人相性</h3><div class="lock">${esc(name)}様 × ${esc(a.name)}様：${sA}点 / ${pairLabel(sA)}<br>${pairAdvice(sA)}</div></div>`;
        html+=`<div class="lock">有料版では、支合・冲・刑・害まで見た詳しい相性分析を表示します。</div>`;
      }
    }
    else{const p2Date=$("partner2BirthDate").value,p2Time=$("partner2BirthTime").value||"12:00";if(!p2Date){alert("お相手Bの生年月日を入力してください。");return}const p2P=deepEnrichPillars(calcBaZi(p2Date,p2Time)),p2Sign=signFromDate(p2Date),b={name:$("partner2Name").value.trim()||r.b,sign:p2Sign,dayMaster:p2P.dayP.stem,dayElement:stemElements[p2P.dayP.stem],dayBranch:p2P.dayP.branch,yearP:p2P.yearP,monthP:p2P.monthP},sB=advancedPairScore(main,b),sAB=advancedPairScore(a,b),best=[[name,a.name,sA],[name,b.name,sB],[a.name,b.name,sAB]].sort((x,y)=>y[2]-x[2])[0];html+=`<div class="block"><h3>${esc(($("caseLabel").value||r.summary))}の比較</h3><div class="miniGrid"><div class="mini"><div class="k">${esc(name)}×${esc(a.name)}</div><div class="v">${sA}点</div></div><div class="mini"><div class="k">${esc(name)}×${esc(b.name)}</div><div class="v">${sB}点</div></div><div class="mini"><div class="k">${esc(a.name)}×${esc(b.name)}</div><div class="v">${sAB}点</div></div><div class="mini"><div class="k">強い縁</div><div class="v">${esc(best[0])}<br>×<br>${esc(best[1])}</div></div></div></div>`; if(plan==="premium"){
        html+=relationReportHtml("相性分析："+name+"様 × "+a.name,name,a.name,main,a,sA);
        html+=relationReportHtml("相性分析："+name+"様 × "+b.name,name,b.name,main,b,sB);
        html+=relationReportHtml("相性分析："+a.name+"様 × "+b.name,a.name,b.name,a,b,sAB);
        html+=threePeopleDeepHtml(name,a.name,b.name,main,a,b,sA,sB,sAB);
      }else html+=`<div class="lock">有料版では、3人関係の深読みと優先順位まで表示します。</div>`}
  }
  $("result").innerHTML=html;
}
function resetForm(){["name","birthDate","birthTime","birthPlace","partnerName","partnerBirthDate","partnerBirthTime","partnerBirthPlace","partner2Name","partner2BirthDate","partner2BirthTime","partner2BirthPlace","caseLabel","question"].forEach(id=>$(id).value="");$("topic").value="";$("gender").value="";$("relationshipPreset").value="";$("consentCheck").checked=false;applyRelationshipPreset();$("result").innerHTML=`<div class="fortuneCard"><div class="bigLuck"><div class="smallT">総合運</div><div class="daikichi">大吉</div><p>左側に入力して「鑑定する」を押してください。</p></div></div><div class="characters"><div class="charBox"><div class="avatar left"></div><div class="bubble">こんにちは♪ MOA MOAです。今日の運勢を一緒に見ていきます。</div></div><div class="charBox"><div class="avatar right"></div><div class="bubble">生年月日と相談内容を入れると、鑑定結果をお伝えします。</div></div></div>`}
function showPremium(){
  if(!premiumUnlocked){openBuyModal();return;}
  plan="premium";
  syncPlan();
  $("result").innerHTML=`<div class="fortuneCard"><div class="bigLuck"><div class="smallT">有料版</div><div class="daikichi">解放</div><p>深鑑定・2人相性・3人相性・PDF鑑定書が使えます。</p></div></div><div class="lock">有料版が解放されています。鑑定モードを選んで鑑定してください。</div>`;
}

function openBuyModal(){ $("buyModal").classList.add("show"); }
function closeBuyModal(){ $("buyModal").classList.remove("show"); }
function openTermsModal(){ $("termsModal").classList.add("show"); }
function closeTermsModal(){ $("termsModal").classList.remove("show"); }
function goPayment(){
  if(PAYMENT_LINK.includes("example.com")){
    alert("販売前に app.js の PAYMENT_LINK を、Stripe等の決済URLに差し替えてください。");
    return;
  }
  window.open(PAYMENT_LINK, "_blank");
}
function unlockPremium(){
  const code = $("licenseCode").value.trim();
  if(code === DEMO_LICENSE_CODE){
    premiumUnlocked = true;
    localStorage.setItem("moa_moa_premium_unlocked","true");
    plan = "premium";
    syncPlan();
    closeBuyModal();
    alert("有料版を解放しました。");
    showPremium();
  }else{
    alert("ライセンスコードが違います。販売テスト用コードは MOAMOA2026 です。");
  }
}

function bind(){$("freeBtn").onclick=()=>{plan="free";syncPlan()};$("premiumBtn").onclick=()=>{if(!premiumUnlocked){openBuyModal();return;}plan="premium";syncPlan()};$("singleBtn").onclick=()=>{mode="single";syncMode()};$("compatBtn").onclick=()=>{mode="compat";syncMode()};$("tripleBtn").onclick=()=>{mode="triple";syncMode()};$("generateBtn").onclick=generateReading;$("resetBtn").onclick=resetForm;$("pdfBtn").onclick=()=>window.print();$("sampleBtn").onclick=openBuyModal;
$("buyBtn").onclick=openBuyModal;
$("termsBtn").onclick=openTermsModal;
$("unlockBtn").onclick=unlockPremium;
$("closeBuyModalBtn").onclick=closeBuyModal;
$("closeTermsModalBtn").onclick=closeTermsModal;
$("goPaymentBtn").onclick=goPayment;
$("openBuyFromTermsBtn").onclick=()=>{closeTermsModal();openBuyModal();};
$("relationshipPreset").onchange=applyRelationshipPreset;document.querySelectorAll(".chip").forEach(btn=>btn.onclick=()=>insertTemplate(btn.dataset.template));syncPlan();syncMode();applyRelationshipPreset()}
document.addEventListener("DOMContentLoaded",bind);