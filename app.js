let readMode="single";let textMode="normal";
const stems=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],branches=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const stemElements={"甲":"木","乙":"木","丙":"火","丁":"火","戊":"土","己":"土","庚":"金","辛":"金","壬":"水","癸":"水"};
const stemYinYang={"甲":"陽","乙":"陰","丙":"陽","丁":"陰","戊":"陽","己":"陰","庚":"陽","辛":"陰","壬":"陽","癸":"陰"};
const branchElements={"子":"水","丑":"土","寅":"木","卯":"木","辰":"土","巳":"火","午":"火","未":"土","申":"金","酉":"金","戌":"土","亥":"水"};
const monthBranches=["寅","卯","辰","巳","午","未","申","酉","戌","亥","子","丑"];
const monthStemStartMap={"甲":2,"己":2,"乙":4,"庚":4,"丙":6,"辛":6,"丁":8,"壬":8,"戊":0,"癸":0};
const zokanMap={"子":["癸"],"丑":["己","癸","辛"],"寅":["甲","丙","戊"],"卯":["乙"],"辰":["戊","乙","癸"],"巳":["丙","庚","戊"],"午":["丁","己"],"未":["己","丁","乙"],"申":["庚","壬","戊"],"酉":["辛"],"戌":["戊","辛","丁"],"亥":["壬","甲"]};
const juniunMap={"甲":{"亥":"長生","子":"沐浴","丑":"冠帯","寅":"建禄","卯":"帝旺","辰":"衰","巳":"病","午":"死","未":"墓","申":"絶","酉":"胎","戌":"養"},"乙":{"午":"長生","巳":"沐浴","辰":"冠帯","卯":"建禄","寅":"帝旺","丑":"衰","子":"病","亥":"死","戌":"墓","酉":"絶","申":"胎","未":"養"},"丙":{"寅":"長生","卯":"沐浴","辰":"冠帯","巳":"建禄","午":"帝旺","未":"衰","申":"病","酉":"死","戌":"墓","亥":"絶","子":"胎","丑":"養"},"丁":{"酉":"長生","申":"沐浴","未":"冠帯","午":"建禄","巳":"帝旺","辰":"衰","卯":"病","寅":"死","丑":"墓","子":"絶","亥":"胎","戌":"養"},"戊":{"寅":"長生","卯":"沐浴","辰":"冠帯","巳":"建禄","午":"帝旺","未":"衰","申":"病","酉":"死","戌":"墓","亥":"絶","子":"胎","丑":"養"},"己":{"酉":"長生","申":"沐浴","未":"冠帯","午":"建禄","巳":"帝旺","辰":"衰","卯":"病","寅":"死","丑":"墓","子":"絶","亥":"胎","戌":"養"},"庚":{"巳":"長生","午":"沐浴","未":"冠帯","申":"建禄","酉":"帝旺","戌":"衰","亥":"病","子":"死","丑":"墓","寅":"絶","卯":"胎","辰":"養"},"辛":{"子":"長生","亥":"沐浴","戌":"冠帯","酉":"建禄","申":"帝旺","未":"衰","午":"病","巳":"死","辰":"墓","卯":"絶","寅":"胎","丑":"養"},"壬":{"申":"長生","酉":"沐浴","戌":"冠帯","亥":"建禄","子":"帝旺","丑":"衰","寅":"病","卯":"死","辰":"墓","巳":"絶","午":"胎","未":"養"},"癸":{"卯":"長生","寅":"沐浴","丑":"冠帯","子":"建禄","亥":"帝旺","戌":"衰","酉":"病","申":"死","未":"墓","午":"絶","巳":"胎","辰":"養"}};
const westSigns=[["山羊座",1,20],["水瓶座",2,19],["魚座",3,21],["牡羊座",4,20],["牡牛座",5,21],["双子座",6,22],["蟹座",7,23],["獅子座",8,23],["乙女座",9,23],["天秤座",10,24],["蠍座",11,23],["射手座",12,22],["山羊座",12,32]];
const ichingNames=["乾為天","坤為地","水雷屯","山水蒙","水天需","天水訟","地水師","水地比","風天小畜","天沢履","地天泰","天地否","天火同人","火天大有","地山謙","雷地豫","沢雷随","山風蠱","地沢臨","風地観","火雷噬嗑","山火賁","山地剥","地雷復","天雷无妄","山天大畜","山雷頤","沢風大過","坎為水","離為火","沢山咸","雷風恒","天山遯","雷天大壮","火地晋","地火明夷","風火家人","火沢睽","水山蹇","雷水解","山沢損","風雷益","沢天夬","天風姤","沢地萃","地風升","沢水困","水風井","沢火革","火風鼎","震為雷","艮為山","風山漸","雷沢帰妹","雷火豊","火山旅","巽為風","兌為沢","風水渙","水沢節","風沢中孚","雷山小過","水火既済","火水未済"];
const tarotList=["愚者","魔術師","女教皇","女帝","皇帝","法王","恋人たち","戦車","力","隠者","運命の輪","正義","吊るされた男","死神","節制","悪魔","塔","星","月","太陽","審判","世界"];
const runeList=["フェオ","ウル","ソーン","アンスール","ライド","ケン","ギューフ","ウンジョ","ハガル","ニイド","イス","ヤラ","エイワズ","ペオース","アルジズ","ソウェイル","ティール","ベルカナ","エワズ","マンナズ","ラグズ","イング","ダエグ","オシラ"];
const moonStyles=["感情が深い","安心感重視","自由重視","理想が高い","共感力が強い","慎重で繊細"];
const ascStyles=["第一印象は穏やか","第一印象は華やか","第一印象は知的","第一印象は神秘的","第一印象は柔らかい","第一印象は芯が強い"];
const protectWords=["祓い清めて道ひらく","静かな光に守られる","言葉を慎み吉を招く","心を整え福を迎える","急がずして運を得る","穏やかにして道は通ず"];
const monthNamesJP=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
const kuwoMap=[["戌亥","申酉"],["午未","辰巳"],["寅卯","子丑"]];
const nayinMap={"甲子":"海中金","乙丑":"海中金","丙寅":"炉中火","丁卯":"炉中火","戊辰":"大林木","己巳":"大林木","庚午":"路傍土","辛未":"路傍土","壬申":"剣鋒金","癸酉":"剣鋒金","甲戌":"山頭火","乙亥":"山頭火","丙子":"澗下水","丁丑":"澗下水","戊寅":"城頭土","己卯":"城頭土","庚辰":"白蠟金","辛巳":"白蠟金","壬午":"楊柳木","癸未":"楊柳木","甲申":"泉中水","乙酉":"泉中水","丙戌":"屋上土","丁亥":"屋上土","戊子":"霹靂火","己丑":"霹靂火","庚寅":"松柏木","辛卯":"松柏木","壬辰":"長流水","癸巳":"長流水","甲午":"砂中金","乙未":"砂中金","丙申":"山下火","丁酉":"山下火","戊戌":"平地木","己亥":"平地木","庚子":"壁上土","辛丑":"壁上土","壬寅":"金箔金","癸卯":"金箔金","甲辰":"覆燈火","乙巳":"覆燈火","丙午":"天河水","丁未":"天河水","戊申":"大驛土","己酉":"大驛土","庚戌":"釵釧金","辛亥":"釵釧金","壬子":"桑柘木","癸丑":"桑柘木","甲寅":"大溪水","乙卯":"大溪水","丙辰":"沙中土","丁巳":"沙中土","戊午":"天上火","己未":"天上火","庚申":"石榴木","辛酉":"石榴木","壬戌":"大海水","癸亥":"大海水"};
const $=(id)=>document.getElementById(id);
function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
function seed(str,salt=""){const s=(str||"seed")+salt;let h=0;for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0}return Math.abs(h)}
function pick(arr,key,salt=""){return arr[seed(key,salt)%arr.length]}
function reportNumber(){const d=new Date();return `FIX-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}-${Math.floor(Math.random()*9000+1000)}`}
function setPrintMode(mode){document.body.classList.remove("print-customer","print-internal");document.body.classList.add(mode==="internal"?"print-internal":"print-customer");$("copyType").textContent=mode==="internal"?"内部控え":"お客様控え";}
function signFromDate(dateStr){const d=new Date(dateStr),m=d.getMonth()+1,day=d.getDate();for(const [name,mo,da] of westSigns){if(m<mo||(m===mo&&day<da)) return name;}return "山羊座";}
function westernElement(sign){const map={"牡羊座":"火","獅子座":"火","射手座":"火","牡牛座":"地","乙女座":"地","山羊座":"地","双子座":"風","天秤座":"風","水瓶座":"風","蟹座":"水","蠍座":"水","魚座":"水"};return map[sign]||"水";}
function westernQuality(sign){const map={"牡羊座":"活動","蟹座":"活動","天秤座":"活動","山羊座":"活動","牡牛座":"不動","獅子座":"不動","蠍座":"不動","水瓶座":"不動","双子座":"柔軟","乙女座":"柔軟","射手座":"柔軟","魚座":"柔軟"};return map[sign]||"柔軟";}
function nineStar(dateStr){const d=new Date(dateStr),y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate();const effectiveYear=(m<2||(m===2&&day<4))?y-1:y;let num=11-(effectiveYear%9);if(num>9) num-=9;if(num===0) num=9;return ["一白水星","二黒土星","三碧木星","四緑木星","五黄土星","六白金星","七赤金星","八白土星","九紫火星"][num-1];}
function julianDay(y,m,d){if(m<=2){y-=1;m+=12;}const A=Math.floor(y/100),B=2-A+Math.floor(A/4);return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5;}
function sexagenaryName(index){return stems[index%10]+branches[index%12];}
function getYearPillar(dateStr){const d=new Date(dateStr+"T12:00:00"),y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate();const effectiveYear=(m<2||(m===2&&day<4))?y-1:y;const index=(effectiveYear-1984+60)%60;return {index,stem:stems[index%10],branch:branches[index%12],name:sexagenaryName(index)};}
function getMonthPillar(dateStr){const d=new Date(dateStr+"T12:00:00"),yearP=getYearPillar(dateStr);let m=d.getMonth()+1,day=d.getDate();let astroMonth=m;if(day<4) astroMonth-=1;if(astroMonth<=0) astroMonth+=12;const monthBranch=monthBranches[(astroMonth+10)%12];const startStemIndex=monthStemStartMap[yearP.stem];const monthIndexWithin=monthBranches.indexOf(monthBranch);const stemIndex=(startStemIndex+monthIndexWithin)%10;return {stem:stems[stemIndex],branch:monthBranch,name:stems[stemIndex]+monthBranch};}
function getDayPillar(dateStr){const d=new Date(dateStr+"T12:00:00"),y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate();const jd=julianDay(y,m,day),base=julianDay(1984,2,2),diff=Math.floor(jd-base),index=((diff%60)+60)%60;return {index,stem:stems[index%10],branch:branches[index%12],name:sexagenaryName(index)};}
function getHourBranch(hour){const idx=Math.floor(((hour+1)%24)/2);return branches[idx];}
function getHourPillar(dayStem,timeStr){const hour=timeStr?Number(timeStr.split(":")[0]):12;const hourBranch=getHourBranch(hour);const hourBranchIndex=branches.indexOf(hourBranch);const startMap={"甲":0,"己":0,"乙":2,"庚":2,"丙":4,"辛":4,"丁":6,"壬":6,"戊":8,"癸":8};const stemIndex=(startMap[dayStem]+hourBranchIndex)%10;return {stem:stems[stemIndex],branch:hourBranch,name:stems[stemIndex]+hourBranch};}
function calcBaZi(dateStr,timeStr){const yearP=getYearPillar(dateStr),monthP=getMonthPillar(dateStr),dayP=getDayPillar(dateStr),hourP=getHourPillar(dayP.stem,timeStr||"12:00");return {yearP,monthP,dayP,hourP};}
function yinYangFromPillars(p){const isYangStem=s=>stemYinYang[s]==="陽";let yin=0,yang=0;[p.yearP,p.monthP,p.dayP,p.hourP].forEach(x=>{if(isYangStem(x.stem)) yang++; else yin++; if(["子","寅","辰","午","申","戌"].includes(x.branch)) yang++; else yin++;});return {yin,yang};}
function fiveElementsFromPillars(p){const counts={木:0,火:0,土:0,金:0,水:0};[p.yearP,p.monthP,p.dayP,p.hourP].forEach(x=>{counts[stemElements[x.stem]]+=1;counts[branchElements[x.branch]]+=1;});return counts;}
function fivePercent(counts){const total=Object.values(counts).reduce((a,b)=>a+b,0)||1;const out={};Object.entries(counts).forEach(([k,v])=>out[k]=Math.round(v/total*100));return out;}
function weakestStrongest(counts){const entries=Object.entries(counts).sort((a,b)=>a[1]-b[1]);return {weak:entries[0][0],strong:entries[entries.length-1][0]};}
function getTsuhen(dayStem,otherStem){const dayElem=stemElements[dayStem],otherElem=stemElements[otherStem],samePol=stemYinYang[dayStem]===stemYinYang[otherStem];const generate={木:"火",火:"土",土:"金",金:"水",水:"木"},producedBy={木:"水",火:"木",土:"火",金:"土",水:"金"},control={木:"土",火:"金",土:"水",金:"木",水:"火"},controlledBy={木:"金",火:"水",土:"木",金:"火",水:"土"};if(dayElem===otherElem) return samePol?"比肩":"劫財";if(generate[dayElem]===otherElem) return samePol?"食神":"傷官";if(control[dayElem]===otherElem) return samePol?"偏財":"正財";if(controlledBy[dayElem]===otherElem) return samePol?"偏官":"正官";if(producedBy[dayElem]===otherElem) return samePol?"偏印":"印綬";return "―";}
function getJuniun(dayStem,branch){return (juniunMap[dayStem]&&juniunMap[dayStem][branch])?juniunMap[dayStem][branch]:"―";}
function getKuBou(dayIndex){const group=Math.floor((dayIndex%60)/10);const row=kuwoMap[Math.min(group,2)]||["戌亥","申酉"];return row[group%2]||"戌亥";}
function getNaYin(name){return nayinMap[name]||"―";}
function enrichPillars(p){const dayStem=p.dayP.stem;[p.yearP,p.monthP,p.dayP,p.hourP].forEach(r=>{r.zokan=(zokanMap[r.branch]||[]).join("・");r.tsuhen=r===p.dayP?"日元":getTsuhen(dayStem,r.stem);r.juniun=getJuniun(dayStem,r.branch);r.nayin=getNaYin(r.name);});p.dayP.kubou=getKuBou(p.dayP.index);return p;}
function countTenGods(p){const map={比肩:0,劫財:0,食神:0,傷官:0,偏財:0,正財:0,偏官:0,正官:0,偏印:0,印綬:0};[p.yearP,p.monthP,p.hourP].forEach(r=>{if(map[r.tsuhen]!==undefined) map[r.tsuhen]++;});return map;}
function iching(key){return {base:pick(ichingNames,key,"ich1"),changed:pick(ichingNames,key,"ich2"),line:1+(seed(key,"line")%6)};}
function tarot(key){return pick(tarotList,key,"tarot");}
function rune(key){return pick(runeList,key,"rune");}
function dayMasterProfile(dm){const map={"甲":"まっすぐで誠実、理想を大切にする性質。","乙":"やわらかく繊細で、空気を読む力が高い性質。","丙":"明るく前向きで、表現力が強い性質。","丁":"感受性が深く、心の機微に敏感な性質。","戊":"安定感があり、責任感の強い性質。","己":"受容力と調整力が高く、人を支える性質。","庚":"決断が速く、切り替えの強い性質。","辛":"美意識と繊細さを持ち、質を重視する性質。","壬":"広い視野と柔軟性を持つ性質。","癸":"静かで観察力が高く、内面が深い性質。"};return map[dm]||"自分の軸を大切にする性質。";}
function subTopic(topic,q){if(q.includes("復縁")) return "復縁";if(q.includes("片思い")||q.includes("片想い")) return "片思い";if(q.includes("転職")) return "転職";if(q.includes("独立")||q.includes("起業")) return "独立";return topic||"総合運";}
function actionText(st){const map={"恋愛":"恋愛では相手の反応より、自分が安心できる距離感を基準に動くこと。","復縁":"復縁では相手を追う前に、自分の本音を整えること。","片思い":"片思いでは追いすぎず、自然に印象を残す関わり方を意識すること。","仕事":"仕事では今の環境で活きる力と消耗する部分を切り分けること。","転職":"転職では譲れない条件を先に明確にすること。","独立":"独立では始める前に土台を固めること。","総合運":"日々の整えを大切にすること。"};return map[st]||map["総合運"];}
function timingText(st){const map={"恋愛":"焦らず、流れを見ながら距離を縮める方が良い時です。","復縁":"結論を急がず、相手の態度の変化を見てから動く方が良い時です。","片思い":"自然なやり取りが続いてから動く方が進展しやすい時です。","仕事":"今すぐ大きく変えるより、準備をしてから動くのが良い時です。","転職":"準備が整ってからの方が安定しやすい時です。","独立":"小さく始めて形を育てるのが向いている時です。","総合運":"整った時に小さく動くことが最善の時です。"};return map[st]||map["総合運"];}
function insertTemplate(type){const map={"恋愛":"今後の恋愛運と、動くべき時期を知りたいです。","復縁":"復縁の可能性と、今動くべき時期を知りたいです。","片思い":"片思い中の相手との進展可能性を知りたいです。","仕事":"今後の仕事運と、動くべき方向性を知りたいです。","転職":"転職のタイミングと、今の仕事を続けるべきか知りたいです。","独立":"独立・開業に向く時期と注意点を知りたいです。"};$("question").value=map[type]||"";}
function buildTags(){const tags=["陰陽道","四柱命式","通変星","十二運","空亡","納音","十神数","五行率","大運","流年"];return tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("");}
function buildPillarTable(p){const rows=[["年柱",p.yearP],["月柱",p.monthP],["日柱",p.dayP],["時柱",p.hourP]];return `<table class="table"><thead><tr><th>柱</th><th>干支</th><th>蔵干</th><th>通変星</th><th>十二運</th><th>納音</th></tr></thead><tbody>${rows.map(([name,row])=>`<tr><td>${name}</td><td>${esc(row.name)}</td><td>${esc(row.zokan)}</td><td>${esc(row.tsuhen)}</td><td>${esc(row.juniun)}</td><td>${esc(row.nayin)}</td></tr>`).join("")}</tbody></table>`;}
function buildDaiunList(monthP,gender,yearStemYY){const forward=((gender==="男性"&&yearStemYY==="陽")||(gender==="女性"&&yearStemYY==="陰"));const sIdx=stems.indexOf(monthP.stem),bIdx=branches.indexOf(monthP.branch),list=[];for(let i=1;i<=8;i++){const off=forward?i:-i;list.push(stems[(sIdx+off+10)%10]+branches[(bIdx+off+12)%12]);}return list;}
function calcRyunen(currentYear){const index=(currentYear-1984+60)%60;return sexagenaryName(index);}
function calcRyugetsu(currentYear,currentMonth){const yearIndex=(currentYear-1984+60)%60;const yearStem=stems[yearIndex%10];const monthBranch=monthBranches[(currentMonth+9)%12];const startStemIndex=monthStemStartMap[yearStem];const monthIndexWithin=monthBranches.indexOf(monthBranch);const stemIndex=(startStemIndex+monthIndexWithin)%10;return stems[stemIndex]+monthBranch;}
function calcNichiun(currentDate){const d=new Date(currentDate),y=d.getFullYear(),m=d.getMonth()+1,day=d.getDate();const jd=julianDay(y,m,day),base=julianDay(1984,2,2),diff=Math.floor(jd-base),index=((diff%60)+60)%60;return sexagenaryName(index);}
function makeCompat(main,partner){let score=58;if(main.sign===partner.sign) score+=10;if(main.dayMaster===partner.dayMaster) score+=10;if(main.yearP.branch===partner.yearP.branch) score+=6;if(main.dayElement===partner.dayElement) score+=8;if(main.monthP.branch===partner.monthP.branch) score+=4;if(main.kubou===partner.kubou) score+=4;if(score>100) score=100;return score;}


function explainDayMaster(dm){
  const map={
    "甲":"大木のような性質です。信念が強く、正しさや筋を大切にします。まっすぐ進める時は強いですが、融通が利きにくい時もあります。",
    "乙":"草花のような性質です。柔らかく繊細で、空気を読んで調整する力があります。無理を続けると疲れが出やすいです。",
    "丙":"太陽のような性質です。明るく外向きで、人を照らす表現力があります。勢いが出る反面、熱くなりすぎることもあります。",
    "丁":"灯火のような性質です。感受性が深く、細やかな気づきに優れます。内面の揺れが強い時は休息が必要です。",
    "戊":"山のような性質です。安定感と責任感があり、土台を守る力があります。動きが重くなると頑固さに見えやすいです。",
    "己":"畑の土のような性質です。受容力があり、人を育て支える力があります。抱え込みすぎると消耗しやすいです。",
    "庚":"鉄のような性質です。決断が速く、不要なものを切り分ける力があります。強さが出すぎるときつく見えることがあります。",
    "辛":"宝石のような性質です。美意識と繊細さがあり、質を見抜く力があります。傷つきやすさを抱えやすい面もあります。",
    "壬":"海のような性質です。視野が広く、柔軟で、大きな流れを読む力があります。方向が定まらないと散りやすいです。",
    "癸":"雨や霧のような性質です。静かな観察力があり、内面が深く、相手の心の動きを読みます。溜め込みすぎに注意です。"
  };
  return map[dm] || "";
}
function explainFiveElementBalance(counts, ws){
  const total = Object.values(counts).reduce((a,b)=>a+b,0) || 1;
  const weak = ws.weak, strong = ws.strong;
  const meanings = {
    "木":"行動力・成長力・伸びる力",
    "火":"情熱・表現力・勢い",
    "土":"安定・現実感・継続力",
    "金":"判断力・整理力・決断",
    "水":"知性・柔軟性・感情の流れ"
  };
  return `五行は、その人の気の配分を見ています。今回の命式では「${weak}」が弱めで、これは ${meanings[weak]} が不足しやすいことを示します。反対に「${strong}」が強めで、${meanings[strong]} が前に出やすい状態です。強い要素を抑え、弱い要素を補うほど全体の流れは安定します。`;
}
function explainKubou(k){
  return `空亡（${k}）は、物事が一時的に空回りしやすい領域を見る考え方です。悪いと決めつけるものではなく、\"急がず整えるべき部分\" を示す目印として使います。`;
}
function explainNaYin(n){
  return `納音（${n}）は、干支をさらに五行のイメージへ落とし込んだ読みです。表面の性質だけでなく、命式の“質感”や“奥の気”を読む補助指標です。`;
}
function explainTenGods(tenGods){
  const top = Object.entries(tenGods).sort((a,b)=>b[1]-a[1])[0];
  if(!top) return "";
  const name = top[0];
  const map = {
    "比肩":"自立心・自分の軸が強く出やすい傾向です。",
    "劫財":"競争心・勢い・押し出しが出やすい傾向です。",
    "食神":"やわらかい表現力・楽しむ力が出やすい傾向です。",
    "傷官":"感性・批評眼・繊細さが強く出やすい傾向です。",
    "偏財":"対人力・商才・広く動く力が出やすい傾向です。",
    "正財":"堅実さ・生活感覚・現実処理力が出やすい傾向です。",
    "偏官":"行動力・勝負強さ・突破力が出やすい傾向です。",
    "正官":"責任感・社会性・きちんとした姿勢が出やすい傾向です。",
    "偏印":"発想力・独自性・変化対応が出やすい傾向です。",
    "印綬":"学び・保護・理解力が出やすい傾向です。"
  };
  return `十神では「${name}」が最も目立ちます。これは ${map[name] || "その要素が強いこと"} を意味します。`;
}
function explainYinYang(yy){
  if(yy.yang > yy.yin){
    return `陰陽では陽が強めです。今は前へ出る力、決める力、動き出す力が出やすい時ですが、急ぎすぎると空回りもしやすいです。`;
  } else if(yy.yin > yy.yang){
    return `陰陽では陰が強めです。今は内面を整える力、考える力、受け取る力が強い時ですが、抱え込みすぎには注意が必要です。`;
  }
  return `陰陽はほぼ均衡です。動く時と整える時の切り替えがしやすいバランスです。`;
}
function explainWestern(sign, westElement, westQuality){
  return `西洋補助命式では、太陽星座が ${sign} で、元素は ${westElement}、区分は ${westQuality} です。これは外に見えやすい性格傾向や、物事への基本姿勢を読むための補助情報です。`;
}



function concernSummary(st, ws, yy){
  const weakText = `${ws.weak}が弱め`;
  const yyText = yy.yang > yy.yin ? "陽が強め" : (yy.yin > yy.yang ? "陰が強め" : "陰陽は均衡");
  const map = {
    "恋愛": `恋愛では、気持ちはあるのに伝え方や距離感で迷いやすい流れです。特に ${weakText}・${yyText} のため、焦るより安心感を育てる方がうまく進みます。`,
    "復縁": `復縁では、戻ること自体より「同じ形に戻って大丈夫か」を見直す流れです。${weakText} のため、感情だけで動くとぶれやすいです。`,
    "片思い": `片思いでは、思いの強さは十分ありますが、動く順番が大切です。${yyText} なので、押しすぎか我慢しすぎのどちらかに傾きやすいです。`,
    "仕事": `仕事では、能力不足というより、役割や環境の噛み合わせを調整する時です。${weakText} のため、無理に全部抱えると疲れやすいです。`,
    "転職": `転職では、今すぐ動きたい気持ちがあっても、準備の精度が結果を左右します。${yyText} のため、勢い任せは避けた方が安定します。`,
    "独立": `独立では、理想は見えていても、土台づくりが先です。${weakText} の部分を整えるほど、始めた後の継続力が上がります。`,
    "お金": `お金では、入る額より出ていく流れの整理が重要です。${weakText} のため、気づかない漏れを整えることが先です。`,
    "人間関係": `人間関係では、相手を変えるより自分の境界線を整える時です。${yyText} のため、言いすぎるか黙りすぎるかの偏りに注意です。`,
    "結婚": `結婚では、気持ちだけでなく生活感覚の一致を見ることが大切です。${weakText} のため、条件面を曖昧にしない方が安定します。`,
    "家庭": `家庭では、頑張りすぎている人に負担が寄りやすい流れです。${yyText} のため、役割の偏りを見直すことが必要です。`,
    "健康": `健康では、今は治すより整える意識が大切です。${weakText} のため、基礎的な休息や生活リズムの立て直しが先になります。`,
    "総合運": `総合運では、流れ自体は止まっていませんが、整えながら進む方が成果につながる時です。${weakText} と ${yyText} を意識して動くのが鍵です。`
  };
  return map[st] || map["総合運"];
}

function adviceSummary(st){
  const map = {
    "恋愛": "今は関係を進めることより、相手といて落ち着ける空気をつくることを優先してください。",
    "復縁": "今は結論を迫るより、距離感と関わり方を整え直すことが先です。",
    "片思い": "今は強く押すより、自然に思い出してもらえる接点を増やすことが有効です。",
    "仕事": "今は全部を完璧にこなすより、優先順位をはっきりさせることが大切です。",
    "転職": "今は辞める決断より、次へ行くための条件整理を先にしてください。",
    "独立": "今は大きく始めるより、小さく形にして確かめる方が成功しやすいです。",
    "お金": "今は増やす工夫より、減る原因を止めることを優先してください。",
    "人間関係": "今は理解してもらうことより、自分の線引きを明確にする方が楽になります。",
    "結婚": "今は理想を語るより、現実に続けられる関係かを確認することが大切です。",
    "家庭": "今は我慢で回すより、負担を言葉にして分けることが必要です。",
    "健康": "今は根性で乗り切るより、回復する時間を先に確保してください。",
    "総合運": "今は勢いで決めるより、整えながら少しずつ前へ出る方が良い時です。"
  };
  return map[st] || map["総合運"];
}

function cautionSummary(st){
  const map = {
    "恋愛": "不安になった時に答えを急ぎすぎると、かえって距離が開きやすいです。",
    "復縁": "寂しさだけを理由に戻ろうとすると、同じ課題を繰り返しやすいです。",
    "片思い": "反応が欲しくて動きすぎると、相手に余白を与えにくくなります。",
    "仕事": "責任感から抱え込みすぎると、実力より先に疲れが出ます。",
    "転職": "今の不満だけで次を決めると、条件の見落としが出やすいです。",
    "独立": "理想だけで始めると、継続に必要な仕組みが後回しになります。",
    "お金": "気分で使うことが続くと、思った以上に流れが乱れやすいです。",
    "人間関係": "我慢を重ねすぎると、限界が来た時に一気に切れやすいです。",
    "結婚": "気持ちだけを見て現実条件を曖昧にすると、後からずれが出やすいです。",
    "家庭": "誰か一人の頑張りで回し続けると、疲弊が積み重なります。",
    "健康": "少し無理できる時ほど、後から反動が来やすいです。",
    "総合運": "急いで形にしようとすると、整えるべき部分を飛ばしやすいです。"
  };
  return map[st] || map["総合運"];
}

function nextAction3(st){
  const map = {
    "恋愛": ["気持ちを急いで確認しない","会いやすい空気をつくる","不安な時ほど一度落ち着く"],
    "復縁": ["戻りたい理由を書き出す","相手の変化を観察する","追いすぎない距離感を保つ"],
    "片思い": ["自然な接点を増やす","相手の反応を急がない","自分の生活を整える"],
    "仕事": ["優先順位を3つに絞る","抱えすぎているものを減らす","自分の強みを再確認する"],
    "転職": ["譲れない条件を整理する","履歴書や職務経歴を整える","勢いだけで辞めない"],
    "独立": ["小さく試す","固定費を確認する","継続導線をつくる"],
    "お金": ["毎月の漏れを確認する","固定費を見直す","感情買いを減らす"],
    "人間関係": ["無理な相手と距離を取る","言いたいことを短く伝える","背負いすぎない"],
    "結婚": ["生活観を確認する","将来像を言葉にする","感情だけで決めない"],
    "家庭": ["役割分担を言語化する","一人で抱え込まない","休む時間を決める"],
    "健康": ["睡眠を優先する","生活リズムを整える","無理な予定を減らす"],
    "総合運": ["急いで決めない","整えることを優先する","小さく前進する"]
  };
  return map[st] || map["総合運"];
}

function baseReportHeader(){return '<div class="reportHeader"><div class="reportTitle">鑑定書</div><div class="reportSub">PROFESSIONAL FORTUNE READING DOCUMENT</div></div><h3>まだ鑑定結果はありません</h3><p>左の情報を入力して、「鑑定結果を作成する」を押してください。</p>';}
function generateReading(){
  const name=$("name").value.trim()||"ご相談者";
  const birthDate=$("birthDate").value.trim();
  const birthTime=$("birthTime").value.trim()||"12:00";
  const topic=$("topic").value.trim()||"総合運";
  const gender=$("gender").value.trim()||"女性";
  const question=$("question").value.trim();
  if(!birthDate){alert("ご本人の生年月日を入力してください。");return;}
  if(!question){alert("相談内容を入力してください。");return;}

  $("reportNumber").textContent=reportNumber();
  $("reportDate").textContent=new Date().toLocaleDateString("ja-JP");
  $("memoView").textContent=$("memo").value.trim()||"未入力";
  $("proposalMemoView").textContent=$("proposalMemo").value.trim()||"未入力";

  const now=new Date(),currentYear=now.getFullYear(),currentMonth=now.getMonth()+1,st=subTopic(topic,question),key=`${name}|${birthDate}|${birthTime}|${topic}|${question}`;
  const sign=signFromDate(birthDate),westElement=westernElement(sign),westQuality=westernQuality(sign),moon=pick(moonStyles,key,"moon"),asc=pick(ascStyles,key,"asc");
  const pillars=enrichPillars(calcBaZi(birthDate,birthTime)),yy=yinYangFromPillars(pillars),counts=fiveElementsFromPillars(pillars),percent=fivePercent(counts),ws=weakestStrongest(counts),dayMaster=pillars.dayP.stem,dayElement=stemElements[dayMaster],dmProfile=dayMasterProfile(dayMaster),kyusei=nineStar(birthDate),iCh=iching(key),tarotCard=tarot(key),runeName=rune(key),guard=pick(protectWords,key,"guard"),daiun=buildDaiunList(pillars.monthP,gender,stemYinYang[pillars.yearP.stem]),ryunen=calcRyunen(currentYear),ryugetsu=calcRyugetsu(currentYear,currentMonth),nichiun=calcNichiun(now),tenGods=countTenGods(pillars);

  let html=`<div class="reportHeader"><div class="reportTitle">鑑定書</div><div class="reportSub">PROFESSIONAL FORTUNE READING DOCUMENT</div></div><p><b>ご相談者：</b>${esc(name)}</p><p><b>相談テーマ：</b>${esc(topic)}</p><p><b>相談内容：</b><br>${esc(question).replace(/\n/g,"<br>")}</p><div>${buildTags()}</div>`;

  if(readMode==="compat"){
    const partnerBirthDate=$("partnerBirthDate").value.trim();
    const partnerBirthTime=$("partnerBirthTime").value.trim()||"12:00";
    if(!partnerBirthDate){alert("お相手の生年月日を入力してください。");return;}
    const pPillars=enrichPillars(calcBaZi(partnerBirthDate,partnerBirthTime));
    const pSign=signFromDate(partnerBirthDate);
    const partner={sign:pSign,dayMaster:pPillars.dayP.stem,dayElement:stemElements[pPillars.dayP.stem],yearP:pPillars.yearP,monthP:pPillars.monthP,kubou:pPillars.dayP.kubou};
    const main={sign,dayMaster,dayElement,yearP:pillars.yearP,monthP:pillars.monthP,kubou:pillars.dayP.kubou};
    const score=makeCompat(main,partner);
    const message=score>=76?"この縁は、命式・星性・五行・空亡の呼応が出やすく、丁寧に育てるほど深まりやすい相性です。":"この縁は、惹かれ合う部分と調整が必要な部分の両方を持っています。違いを否定せず、安心できる言葉を重ねるほど安定します。";
    html+=`<div class="callout">${esc(message)}</div><div class="reportBlock"><h3>相性の本格計算</h3><div class="reportMiniGrid"><div class="miniBox"><div class="miniBoxLabel">ご本人</div><div class="miniBoxValue">${esc(sign)} / ${esc(dayMaster)}</div></div><div class="miniBox"><div class="miniBoxLabel">お相手</div><div class="miniBoxValue">${esc(pSign)} / ${esc(partner.dayMaster)}</div></div><div class="miniBox"><div class="miniBoxLabel">ご本人空亡</div><div class="miniBoxValue">${esc(pillars.dayP.kubou)}</div></div><div class="miniBox"><div class="miniBoxLabel">お相手空亡</div><div class="miniBoxValue">${esc(pPillars.dayP.kubou)}</div></div></div><div class="callout">総合相性 ${score}点</div></div>`;
  } else {
    const yyText=yy.yang>yy.yin?"陽気が先に立ちやすく、勢いと急ぎに注意が必要な時":"陰気が深まりやすく、抱え込みや迷いに注意が必要な時";
    html+=`<div class="reportBlock"><h3>まず結論</h3><div class="callout">${esc(concernSummary(st, ws, yy))}</div><div class="callout">${esc(adviceSummary(st))}</div><div class="callout">${esc(cautionSummary(st))}</div></div><div class="reportBlock"><h3>今やると良いこと 3つ</h3><div class="reportMiniGrid">${nextAction3(st).map((x,i)=>`<div class="miniBox"><div class="miniBoxLabel">${i+1}</div><div class="miniBoxValue">${esc(x)}</div></div>`).join("")}</div></div><p>${esc(name)}様の現在の気勢を見ると、陰 ${yy.yin} に対し陽 ${yy.yang} が現れており、${yyText}です。</p><p>今回の${esc(st)}では、日主 ${esc(dayMaster)} の性質が強く働きます。${esc(dmProfile)}</p><div class="callout">${esc(explainYinYang(yy))}</div><div class="reportBlock"><h3>日主の詳しい意味</h3><p>${esc(explainDayMaster(dayMaster))}</p></div><div class="callout">空亡は ${esc(pillars.dayP.kubou)}、日柱納音は ${esc(pillars.dayP.nayin)} です。${esc(actionText(st))}</div><div class="reportBlock"><h3>この部分の見方</h3><p>${esc(explainKubou(pillars.dayP.kubou))}</p><p>${esc(explainNaYin(pillars.dayP.nayin))}</p></div><div class="reportBlock"><h3>四柱詳細</h3>${buildPillarTable(pillars)}</div><div class="reportBlock"><h3>追加計算</h3><div class="reportMiniGrid"><div class="miniBox"><div class="miniBoxLabel">空亡</div><div class="miniBoxValue">${esc(pillars.dayP.kubou)}</div></div><div class="miniBox"><div class="miniBoxLabel">年柱納音</div><div class="miniBoxValue">${esc(pillars.yearP.nayin)}</div></div><div class="miniBox"><div class="miniBoxLabel">月柱納音</div><div class="miniBoxValue">${esc(pillars.monthP.nayin)}</div></div><div class="miniBox"><div class="miniBoxLabel">日柱納音</div><div class="miniBoxValue">${esc(pillars.dayP.nayin)}</div></div></div></div><div class="reportBlock"><h3>十神出現数</h3><div class="reportMiniGrid5">${Object.entries(tenGods).map(([k,v])=>`<div class="miniBox"><div class="miniBoxLabel">${esc(k)}</div><div class="miniBoxValue">${v}</div></div>`).join("")}</div></div><div class="reportBlock"><h3>運勢レイヤー</h3><div class="reportMiniGrid">${daiun.slice(0,4).map((x,i)=>`<div class="miniBox"><div class="miniBoxLabel">${i+1}運</div><div class="miniBoxValue">${esc(x)}</div></div>`).join("")}</div><div class="reportMiniGrid" style="margin-top:10px"><div class="miniBox"><div class="miniBoxLabel">${currentYear}年の流年</div><div class="miniBoxValue">${esc(ryunen)}</div></div><div class="miniBox"><div class="miniBoxLabel">${monthNamesJP[currentMonth-1]}の流月</div><div class="miniBoxValue">${esc(ryugetsu)}</div></div><div class="miniBox"><div class="miniBoxLabel">本日の日運</div><div class="miniBoxValue">${esc(nichiun)}</div></div><div class="miniBox"><div class="miniBoxLabel">今年の読み</div><div class="miniBoxValue">${esc(timingText(st))}</div></div></div></div><div class="reportBlock"><h3>五行バランス</h3><div class="reportMiniGrid5">${["木","火","土","金","水"].map(k=>`<div class="miniBox"><div class="miniBoxLabel">${k}</div><div class="miniBoxValue">${counts[k]} / ${percent[k]}%</div></div>`).join("")}</div><p style="margin-top:12px">五行では「${esc(ws.weak)}」がやや弱く、「${esc(ws.strong)}」が強めです。弱い要素を補う動きを意識すると流れが整いやすくなります。</p><div class="callout">${esc(explainFiveElementBalance(counts, ws))}</div></div><div class="reportBlock"><h3>補助占術</h3><div class="reportMiniGrid"><div class="miniBox"><div class="miniBoxLabel">九星気学</div><div class="miniBoxValue">${esc(kyusei)}</div></div><div class="miniBox"><div class="miniBoxLabel">易断</div><div class="miniBoxValue">${esc(iCh.base)} → ${esc(iCh.changed)}</div></div><div class="miniBox"><div class="miniBoxLabel">太陽星座</div><div class="miniBoxValue">${esc(sign)} / ${esc(westElement)} / ${esc(westQuality)}</div></div><div class="miniBox"><div class="miniBoxLabel">月傾向</div><div class="miniBoxValue">${esc(moon)}</div></div><div class="miniBox"><div class="miniBoxLabel">外的印象</div><div class="miniBoxValue">${esc(asc)}</div></div><div class="miniBox"><div class="miniBoxLabel">タロット</div><div class="miniBoxValue">${esc(tarotCard)}</div></div><div class="miniBox"><div class="miniBoxLabel">ルーン</div><div class="miniBoxValue">${esc(runeName)}</div></div><div class="miniBox"><div class="miniBoxLabel">守りの言葉</div><div class="miniBoxValue">${esc(guard)}</div></div></div></div>`;
    if(textMode==="long"){
      html+=`<div class="callout">今年の運気は、${esc(timingText(st))} また、空亡 ${esc(pillars.dayP.kubou)} と日柱納音 ${esc(pillars.dayP.nayin)} を合わせると、今は勢いよりも調整力を活かすほど流れが整いやすい局面です。</div>`;
    }
  }
  $("result").innerHTML=html;
}


function explainDayMaster(dm){
  const map={
    "甲":"大木のような性質です。信念が強く、正しさや筋を大切にします。まっすぐ進める時は強いですが、融通が利きにくい時もあります。",
    "乙":"草花のような性質です。柔らかく繊細で、空気を読んで調整する力があります。無理を続けると疲れが出やすいです。",
    "丙":"太陽のような性質です。明るく外向きで、人を照らす表現力があります。勢いが出る反面、熱くなりすぎることもあります。",
    "丁":"灯火のような性質です。感受性が深く、細やかな気づきに優れます。内面の揺れが強い時は休息が必要です。",
    "戊":"山のような性質です。安定感と責任感があり、土台を守る力があります。動きが重くなると頑固さに見えやすいです。",
    "己":"畑の土のような性質です。受容力があり、人を育て支える力があります。抱え込みすぎると消耗しやすいです。",
    "庚":"鉄のような性質です。決断が速く、不要なものを切り分ける力があります。強さが出すぎるときつく見えることがあります。",
    "辛":"宝石のような性質です。美意識と繊細さがあり、質を見抜く力があります。傷つきやすさを抱えやすい面もあります。",
    "壬":"海のような性質です。視野が広く、柔軟で、大きな流れを読む力があります。方向が定まらないと散りやすいです。",
    "癸":"雨や霧のような性質です。静かな観察力があり、内面が深く、相手の心の動きを読みます。溜め込みすぎに注意です。"
  };
  return map[dm] || "";
}
function explainFiveElementBalance(counts, ws){
  const total = Object.values(counts).reduce((a,b)=>a+b,0) || 1;
  const weak = ws.weak, strong = ws.strong;
  const meanings = {
    "木":"行動力・成長力・伸びる力",
    "火":"情熱・表現力・勢い",
    "土":"安定・現実感・継続力",
    "金":"判断力・整理力・決断",
    "水":"知性・柔軟性・感情の流れ"
  };
  return `五行は、その人の気の配分を見ています。今回の命式では「${weak}」が弱めで、これは ${meanings[weak]} が不足しやすいことを示します。反対に「${strong}」が強めで、${meanings[strong]} が前に出やすい状態です。強い要素を抑え、弱い要素を補うほど全体の流れは安定します。`;
}
function explainKubou(k){
  return `空亡（${k}）は、物事が一時的に空回りしやすい領域を見る考え方です。悪いと決めつけるものではなく、\"急がず整えるべき部分\" を示す目印として使います。`;
}
function explainNaYin(n){
  return `納音（${n}）は、干支をさらに五行のイメージへ落とし込んだ読みです。表面の性質だけでなく、命式の“質感”や“奥の気”を読む補助指標です。`;
}
function explainTenGods(tenGods){
  const top = Object.entries(tenGods).sort((a,b)=>b[1]-a[1])[0];
  if(!top) return "";
  const name = top[0];
  const map = {
    "比肩":"自立心・自分の軸が強く出やすい傾向です。",
    "劫財":"競争心・勢い・押し出しが出やすい傾向です。",
    "食神":"やわらかい表現力・楽しむ力が出やすい傾向です。",
    "傷官":"感性・批評眼・繊細さが強く出やすい傾向です。",
    "偏財":"対人力・商才・広く動く力が出やすい傾向です。",
    "正財":"堅実さ・生活感覚・現実処理力が出やすい傾向です。",
    "偏官":"行動力・勝負強さ・突破力が出やすい傾向です。",
    "正官":"責任感・社会性・きちんとした姿勢が出やすい傾向です。",
    "偏印":"発想力・独自性・変化対応が出やすい傾向です。",
    "印綬":"学び・保護・理解力が出やすい傾向です。"
  };
  return `十神では「${name}」が最も目立ちます。これは ${map[name] || "その要素が強いこと"} を意味します。`;
}
function explainYinYang(yy){
  if(yy.yang > yy.yin){
    return `陰陽では陽が強めです。今は前へ出る力、決める力、動き出す力が出やすい時ですが、急ぎすぎると空回りもしやすいです。`;
  } else if(yy.yin > yy.yang){
    return `陰陽では陰が強めです。今は内面を整える力、考える力、受け取る力が強い時ですが、抱え込みすぎには注意が必要です。`;
  }
  return `陰陽はほぼ均衡です。動く時と整える時の切り替えがしやすいバランスです。`;
}
function explainWestern(sign, westElement, westQuality){
  return `西洋補助命式では、太陽星座が ${sign} で、元素は ${westElement}、区分は ${westQuality} です。これは外に見えやすい性格傾向や、物事への基本姿勢を読むための補助情報です。`;
}



function concernSummary(st, ws, yy){
  const weakText = `${ws.weak}が弱め`;
  const yyText = yy.yang > yy.yin ? "陽が強め" : (yy.yin > yy.yang ? "陰が強め" : "陰陽は均衡");
  const map = {
    "恋愛": `恋愛では、気持ちはあるのに伝え方や距離感で迷いやすい流れです。特に ${weakText}・${yyText} のため、焦るより安心感を育てる方がうまく進みます。`,
    "復縁": `復縁では、戻ること自体より「同じ形に戻って大丈夫か」を見直す流れです。${weakText} のため、感情だけで動くとぶれやすいです。`,
    "片思い": `片思いでは、思いの強さは十分ありますが、動く順番が大切です。${yyText} なので、押しすぎか我慢しすぎのどちらかに傾きやすいです。`,
    "仕事": `仕事では、能力不足というより、役割や環境の噛み合わせを調整する時です。${weakText} のため、無理に全部抱えると疲れやすいです。`,
    "転職": `転職では、今すぐ動きたい気持ちがあっても、準備の精度が結果を左右します。${yyText} のため、勢い任せは避けた方が安定します。`,
    "独立": `独立では、理想は見えていても、土台づくりが先です。${weakText} の部分を整えるほど、始めた後の継続力が上がります。`,
    "お金": `お金では、入る額より出ていく流れの整理が重要です。${weakText} のため、気づかない漏れを整えることが先です。`,
    "人間関係": `人間関係では、相手を変えるより自分の境界線を整える時です。${yyText} のため、言いすぎるか黙りすぎるかの偏りに注意です。`,
    "結婚": `結婚では、気持ちだけでなく生活感覚の一致を見ることが大切です。${weakText} のため、条件面を曖昧にしない方が安定します。`,
    "家庭": `家庭では、頑張りすぎている人に負担が寄りやすい流れです。${yyText} のため、役割の偏りを見直すことが必要です。`,
    "健康": `健康では、今は治すより整える意識が大切です。${weakText} のため、基礎的な休息や生活リズムの立て直しが先になります。`,
    "総合運": `総合運では、流れ自体は止まっていませんが、整えながら進む方が成果につながる時です。${weakText} と ${yyText} を意識して動くのが鍵です。`
  };
  return map[st] || map["総合運"];
}

function adviceSummary(st){
  const map = {
    "恋愛": "今は関係を進めることより、相手といて落ち着ける空気をつくることを優先してください。",
    "復縁": "今は結論を迫るより、距離感と関わり方を整え直すことが先です。",
    "片思い": "今は強く押すより、自然に思い出してもらえる接点を増やすことが有効です。",
    "仕事": "今は全部を完璧にこなすより、優先順位をはっきりさせることが大切です。",
    "転職": "今は辞める決断より、次へ行くための条件整理を先にしてください。",
    "独立": "今は大きく始めるより、小さく形にして確かめる方が成功しやすいです。",
    "お金": "今は増やす工夫より、減る原因を止めることを優先してください。",
    "人間関係": "今は理解してもらうことより、自分の線引きを明確にする方が楽になります。",
    "結婚": "今は理想を語るより、現実に続けられる関係かを確認することが大切です。",
    "家庭": "今は我慢で回すより、負担を言葉にして分けることが必要です。",
    "健康": "今は根性で乗り切るより、回復する時間を先に確保してください。",
    "総合運": "今は勢いで決めるより、整えながら少しずつ前へ出る方が良い時です。"
  };
  return map[st] || map["総合運"];
}

function cautionSummary(st){
  const map = {
    "恋愛": "不安になった時に答えを急ぎすぎると、かえって距離が開きやすいです。",
    "復縁": "寂しさだけを理由に戻ろうとすると、同じ課題を繰り返しやすいです。",
    "片思い": "反応が欲しくて動きすぎると、相手に余白を与えにくくなります。",
    "仕事": "責任感から抱え込みすぎると、実力より先に疲れが出ます。",
    "転職": "今の不満だけで次を決めると、条件の見落としが出やすいです。",
    "独立": "理想だけで始めると、継続に必要な仕組みが後回しになります。",
    "お金": "気分で使うことが続くと、思った以上に流れが乱れやすいです。",
    "人間関係": "我慢を重ねすぎると、限界が来た時に一気に切れやすいです。",
    "結婚": "気持ちだけを見て現実条件を曖昧にすると、後からずれが出やすいです。",
    "家庭": "誰か一人の頑張りで回し続けると、疲弊が積み重なります。",
    "健康": "少し無理できる時ほど、後から反動が来やすいです。",
    "総合運": "急いで形にしようとすると、整えるべき部分を飛ばしやすいです。"
  };
  return map[st] || map["総合運"];
}

function nextAction3(st){
  const map = {
    "恋愛": ["気持ちを急いで確認しない","会いやすい空気をつくる","不安な時ほど一度落ち着く"],
    "復縁": ["戻りたい理由を書き出す","相手の変化を観察する","追いすぎない距離感を保つ"],
    "片思い": ["自然な接点を増やす","相手の反応を急がない","自分の生活を整える"],
    "仕事": ["優先順位を3つに絞る","抱えすぎているものを減らす","自分の強みを再確認する"],
    "転職": ["譲れない条件を整理する","履歴書や職務経歴を整える","勢いだけで辞めない"],
    "独立": ["小さく試す","固定費を確認する","継続導線をつくる"],
    "お金": ["毎月の漏れを確認する","固定費を見直す","感情買いを減らす"],
    "人間関係": ["無理な相手と距離を取る","言いたいことを短く伝える","背負いすぎない"],
    "結婚": ["生活観を確認する","将来像を言葉にする","感情だけで決めない"],
    "家庭": ["役割分担を言語化する","一人で抱え込まない","休む時間を決める"],
    "健康": ["睡眠を優先する","生活リズムを整える","無理な予定を減らす"],
    "総合運": ["急いで決めない","整えることを優先する","小さく前進する"]
  };
  return map[st] || map["総合運"];
}

function baseReportHeader(){return '<div class="reportHeader"><div class="reportTitle">鑑定書</div><div class="reportSub">PROFESSIONAL FORTUNE READING DOCUMENT</div></div><h3>まだ鑑定結果はありません</h3><p>左の情報を入力して、「鑑定結果を作成する」を押してください。</p>';}
function bind(){
  $("singleBtn").addEventListener("click",()=>{readMode="single";$("singleBtn").classList.add("active");$("compatBtn").classList.remove("active");$("partnerSection").classList.add("hidden");});
  $("compatBtn").addEventListener("click",()=>{readMode="compat";$("compatBtn").classList.add("active");$("singleBtn").classList.remove("active");$("partnerSection").classList.remove("hidden");});
  $("normalBtn").addEventListener("click",()=>{textMode="normal";$("normalBtn").classList.add("active");$("longBtn").classList.remove("active");});
  $("longBtn").addEventListener("click",()=>{textMode="long";$("longBtn").classList.add("active");$("normalBtn").classList.remove("active");});
  $("generateBtn").addEventListener("click",generateReading);
  $("pdfCustomerBtn").addEventListener("click",()=>{setPrintMode("customer");window.print();});
  $("pdfInternalBtn").addEventListener("click",()=>{setPrintMode("internal");window.print();});
  $("resetBtn").addEventListener("click",()=>{
    ["name","birthDate","birthTime","birthPlace","partnerName","partnerBirthDate","partnerBirthTime","partnerBirthPlace","question","memo","proposalMemo"].forEach(id=>{const el=$(id);if(el) el.value="";});
    $("topic").value="";$("gender").value="";$("result").innerHTML=baseReportHeader();$("reportNumber").textContent="未発行";$("reportDate").textContent="未発行";$("memoView").textContent="未入力";$("proposalMemoView").textContent="未入力";
  });
  document.querySelectorAll(".chip").forEach(btn=>btn.addEventListener("click",()=>insertTemplate(btn.dataset.template)));
}
document.addEventListener("DOMContentLoaded",bind);
