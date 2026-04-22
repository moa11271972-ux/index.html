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



function topicDeepReading(st, counts, ws, dayMaster, ryunen, ryugetsu, nichiun){
  const strong = ws.strong;
  const weak = ws.weak;
  const lines = {
    "恋愛": [
      `恋愛では、今のあなたは「相手を好きかどうか」よりも、「その関係の中で安心していられるか」が重要な時です。`,
      `命式では ${strong} の気が強く、${weak} の気が弱めなので、感情が先に立つ日と、急に慎重になる日との差が出やすいです。`,
      `流年 ${ryunen}・流月 ${ryugetsu}・日運 ${nichiun} を重ねると、今は関係を急進展させるより、無理のない距離で信頼を積む方が長続きしやすい流れです。`,
      `相手の反応に一喜一憂するより、自分が穏やかでいられる関わり方を選ぶほど、恋愛運は整っていきます。`
    ],
    "復縁": [
      `復縁では、「戻れるかどうか」だけを見るより、「戻った後に同じ苦しさを繰り返さないか」を見極めることが大切です。`,
      `日主 ${dayMaster} の性質から見ると、気持ちを抱えたまま耐える力はありますが、その分だけ本音の整理が後回しになりやすいです。`,
      `流年 ${ryunen} は過去の課題を浮かび上がらせ、流月 ${ryugetsu} は感情を揺らしやすいので、今は相手を追う前に自分の本音と境界線を整えることが先です。`,
      `復縁の可能性を高める行動は、連絡回数を増やすことより、関係の質を見直すことにあります。`
    ],
    "片思い": [
      `片思いでは、好きな気持ちの強さは十分でも、動く順番を間違えると伝わりにくい時です。`,
      `${weak} が弱めに出ているため、待つべき時に焦ったり、逆に動いてよい時に遠慮したりしやすい傾向があります。`,
      `流月 ${ryugetsu} は気持ちを前へ出しやすくしますが、日運 ${nichiun} は今すぐ答えを取りにいくより、自然な接点を増やす方が良いと示しています。`,
      `片思いの運気は、相手を追うほどではなく、「思い出してもらえる存在」になるほど動きやすくなります。`
    ],
    "仕事": [
      `仕事では、能力不足が問題というより、役割の重さと環境の噛み合わせを見直す時です。`,
      `${strong} が強く出ているため、責任感や判断力はありますが、背負いすぎると消耗が先に来やすい配置です。`,
      `流年 ${ryunen} は仕事上の方向転換や見直しを促し、流月 ${ryugetsu} は日々の負担を浮き彫りにします。`,
      `今は根性で乗り切ることより、何を続けて何を減らすかをはっきり決めるほど、仕事運は整います。`
    ],
    "転職": [
      `転職では、「もう無理だから辞めたい」という気持ちだけで決めると、次でも似た課題に出会いやすい時です。`,
      `命式では ${weak} を補う準備が必要で、勢いよりも条件整理の丁寧さが結果を左右しやすいです。`,
      `流年 ${ryunen} は転換期の気を持っていますが、流月 ${ryugetsu} は足元確認を求めています。`,
      `今は辞める判断を急ぐより、譲れない条件・働き方・収入ラインをはっきりさせるほど良い転職につながります。`
    ],
    "独立": [
      `独立では、やりたいことは見えていても、土台と継続性をどこまで作れるかが勝負になる時です。`,
      `${strong} が強い命式は、始める勢いはありますが、${weak} が弱いと続ける仕組みや生活基盤が後回しになりやすいです。`,
      `流年 ${ryunen} は新しい看板を立てる気を持ち、流月 ${ryugetsu} は形にする実務を求めています。`,
      `今は大きく始めるより、小さく試して残るものを見極める方が、結果として独立運を強めます。`
    ],
    "お金": [
      `お金では、入る量を増やすこと以上に、漏れていく流れを整えることが先です。`,
      `${weak} が弱い配置は、管理や継続にムラが出やすく、${strong} が強いと気分や勢いで使いやすい面が出ます。`,
      `流月 ${ryugetsu} は収支の偏りを表に出しやすく、日運 ${nichiun} は細かい管理の必要性を示しています。`,
      `今は増やす工夫の前に、固定費、習慣的な出費、曖昧なお金の使い方を見直すほど金運が安定します。`
    ],
    "人間関係": [
      `人間関係では、相手に合わせ続けることが優しさではなくなる時があります。`,
      `命式では ${strong} が強めなので、支える力や関わる力はありますが、その分だけ負担の線引きが曖昧になりやすいです。`,
      `流月 ${ryugetsu} は言葉の行き違いを増やしやすく、日運 ${nichiun} は感情的に返すより一呼吸置く方が良いと示しています。`,
      `今は分かってもらう努力より、自分の無理を無理と言えることの方が対人運を守ります。`
    ],
    "結婚": [
      `結婚では、気持ちがあるかどうかだけではなく、一緒に生活を回せるかを見るべき時です。`,
      `${weak} が弱い今は、理想や情で進めると、後から現実面のずれが目立ちやすいです。`,
      `流年 ${ryunen} は人生の形を考えやすく、流月 ${ryugetsu} は条件や役割を具体化する流れです。`,
      `今はロマンよりも生活観・お金・将来像をきちんと確認するほど、結婚運は安定します。`
    ],
    "家庭": [
      `家庭では、誰か一人が我慢して回している状態なら、そろそろ見直しの時です。`,
      `${strong} が強いと責任を背負いやすく、${weak} が弱いと助けを求めることが遅れやすいです。`,
      `流月 ${ryugetsu} は役割の偏りを目立たせやすく、日運 ${nichiun} は小さな不満を溜めない方が良いと伝えています。`,
      `今は頑張り続けることより、負担を言葉にして分けることの方が家庭運を守ります。`
    ],
    "健康": [
      `健康では、無理が限界を超える前に整えることが大切な時です。`,
      `${weak} が弱めのため、疲れを感じてからでは回復が遅れやすく、${strong} が強いとつい無理を押してしまいやすいです。`,
      `流月 ${ryugetsu} は体の声を表に出しやすく、日運 ${nichiun} も回復優先を勧めています。`,
      `今は治すことを急ぐより、睡眠・食事・体温・生活リズムの基礎を整えるほど運気も落ち着きます。`
    ],
    "総合運": [
      `総合運では、流れそのものは止まっていませんが、整えながら進む方が大きく崩れにくい時です。`,
      `${strong} が強く ${weak} が弱い今は、得意な部分だけで走ると偏りが出やすく、足りない部分の補強が運を安定させます。`,
      `流年 ${ryunen}・流月 ${ryugetsu}・日運 ${nichiun} を重ねると、今は拡大より調整、勢いより順序が大切です。`,
      `急いで答えを出すより、生活と気持ちの両方を整えながら前へ出るほど総合運は強くなります。`
    ]
  };
  return (lines[st] || lines["総合運"]).map(x => `<p>${x}</p>`).join("");
}



function westernLoveStyle(sign){
  const map = {
    "牡羊座":"恋愛では直感が強く、気持ちが動くとストレートに出やすいタイプです。",
    "牡牛座":"恋愛では安心感と継続性を重視し、ゆっくり信頼を育てるタイプです。",
    "双子座":"恋愛では会話やテンポを大切にし、知的な刺激で気持ちが動きやすいタイプです。",
    "蟹座":"恋愛では情の深さが強く、心を許した相手にはとても一途なタイプです。",
    "獅子座":"恋愛では愛情表現が分かりやすく、特別感のある関係を求めやすいタイプです。",
    "乙女座":"恋愛では細やかな気遣いができ、慎重に関係を深めるタイプです。",
    "天秤座":"恋愛ではバランス感覚があり、対等で心地よい関係を求めやすいタイプです。",
    "蠍座":"恋愛では感情が深く、一度本気になると強い結びつきを望むタイプです。",
    "射手座":"恋愛では自由さと前向きさを大切にし、重くなりすぎない関係を好むタイプです。",
    "山羊座":"恋愛では誠実さと現実感を重視し、将来性のある関係を選びやすいタイプです。",
    "水瓶座":"恋愛では距離感と個性を大切にし、友達の延長のような自然さを求めやすいタイプです。",
    "魚座":"恋愛では共感力が強く、気持ちの通じ合いを何より大切にするタイプです。"
  };
  return map[sign] || "";
}

function westernWorkStyle(sign){
  const map = {
    "牡羊座":"仕事では決断が速く、先頭に立つ役割で力を出しやすいです。",
    "牡牛座":"仕事では安定した積み上げが得意で、継続力に強みがあります。",
    "双子座":"仕事では情報処理や会話力が強く、変化の多い環境に向きます。",
    "蟹座":"仕事では気配りと守る力が強く、支援や調整で評価されやすいです。",
    "獅子座":"仕事では存在感と表現力があり、前に出る役割で輝きやすいです。",
    "乙女座":"仕事では分析力と正確さがあり、細部を整える役割に強いです。",
    "天秤座":"仕事では対人調整やバランス感覚があり、橋渡し役に向いています。",
    "蠍座":"仕事では集中力と探究心が強く、深く掘る仕事に向きます。",
    "射手座":"仕事では視野が広く、挑戦や新しい企画に向いています。",
    "山羊座":"仕事では責任感と現実処理力があり、結果を積み上げやすいです。",
    "水瓶座":"仕事では発想が独自で、新しい仕組みづくりに向いています。",
    "魚座":"仕事では感受性と共感力があり、人の心に寄り添う役割に強いです。"
  };
  return map[sign] || "";
}

function westernCommunication(sign){
  const map = {
    "牡羊座":"伝え方は率直で、回りくどい表現より短く明快な方が合います。",
    "牡牛座":"伝え方は落ち着いていて、安心できる言い回しが伝わりやすいです。",
    "双子座":"伝え方は軽やかで、テンポの良い会話に強みがあります。",
    "蟹座":"伝え方は感情がにじみやすく、共感を含む言葉が合います。",
    "獅子座":"伝え方は分かりやすく華やかで、熱量が伝わりやすいです。",
    "乙女座":"伝え方は丁寧で具体的で、細かい配慮が言葉に出やすいです。",
    "天秤座":"伝え方は柔らかく、場の空気を崩さない言い方が得意です。",
    "蠍座":"伝え方は深く、言葉数は少なくても重みが出やすいです。",
    "射手座":"伝え方は前向きで、率直さと明るさが出やすいです。",
    "山羊座":"伝え方は実務的で、必要なことをきちんと伝える傾向があります。",
    "水瓶座":"伝え方は個性的で、独自の視点が言葉に出やすいです。",
    "魚座":"伝え方はやわらかく、相手の感情に合わせる傾向があります。"
  };
  return map[sign] || "";
}

function westernTopicReading(st, sign, westElement, westQuality){
  const common = `太陽星座 ${sign}、元素 ${westElement}、区分 ${westQuality} から見ると、今の動き方はその人らしさが表に出やすい時です。`;
  const map = {
    "恋愛": `${common} 恋愛では ${westernLoveStyle(sign)} 今は自分らしい愛し方を無理に変えるより、合う距離感を選ぶ方が良い流れです。`,
    "復縁": `${common} 復縁では ${westernCommunication(sign)} 今は気持ちを強く押すより、伝え方を整えることが重要です。`,
    "片思い": `${common} 片思いでは ${westernLoveStyle(sign)} 今は相手との空気が合うかを見ながら少しずつ近づく方が向いています。`,
    "仕事": `${common} 仕事では ${westernWorkStyle(sign)} 自分の得意な役割に戻るほど流れが整いやすいです。`,
    "転職": `${common} 転職では ${westernWorkStyle(sign)} 合わない環境から離れるだけでなく、合う働き方を明確にすることが大切です。`,
    "独立": `${common} 独立では ${westernWorkStyle(sign)} 自分らしさが強みになる一方で、続け方を現実的に整えることも必要です。`,
    "お金": `${common} 金運では、使い方にも性格が出やすい時です。お金の扱いも自分の癖を知ることが安定につながります。`,
    "人間関係": `${common} 対人では ${westernCommunication(sign)} 自分の自然な伝え方を活かしながら、相手に伝わる形へ少し整えることが鍵です。`,
    "結婚": `${common} 結婚では ${westernLoveStyle(sign)} 恋愛の勢いだけでなく、長く続く関係かを現実的に見る視点が大切です。`,
    "家庭": `${common} 家庭では ${westernCommunication(sign)} 役割を感覚で抱えるより、言葉にして分けると安定しやすいです。`,
    "健康": `${common} 健康では、自分の性格に合う整え方を選ぶ方が続きます。無理に一般論へ合わせすぎないことが大切です。`,
    "総合運": `${common} 今は東洋命式で出ている流れと、西洋で出る性格傾向の両方を合わせると、より自分らしい動き方が見えやすい時です。`
  };
  return map[st] || map["総合運"];
}



function pseudoPlanetSign(dateStr, offset){
  const baseSigns = ["牡羊座","牡牛座","双子座","蟹座","獅子座","乙女座","天秤座","蠍座","射手座","山羊座","水瓶座","魚座"];
  const d = new Date(dateStr + "T12:00:00");
  const idx = (d.getMonth()*31 + d.getDate() + offset) % 12;
  return baseSigns[idx];
}

function mercuryStyle(sign){
  const map = {
    "牡羊座":"考えたことをすぐ言葉にしやすく、率直でスピード感のある伝え方になりやすいです。",
    "牡牛座":"言葉は落ち着いていて、慎重に選んでから話す傾向があります。",
    "双子座":"会話の回転が速く、情報をつなげて話すのが得意です。",
    "蟹座":"気持ちを汲んだ伝え方ができ、感情を含んだ会話になりやすいです。",
    "獅子座":"自分の考えを分かりやすく表現し、印象に残る話し方になりやすいです。",
    "乙女座":"細かく整理して説明するのが得意で、正確さが出やすいです。",
    "天秤座":"相手とのバランスを見て話せるため、柔らかい会話が得意です。",
    "蠍座":"言葉に深みがあり、本質を見抜いた話し方になりやすいです。",
    "射手座":"広い視点で話し、前向きでストレートな表現になりやすいです。",
    "山羊座":"必要なことを端的にまとめ、現実的に伝える傾向があります。",
    "水瓶座":"独自の視点が強く、発想の面白さが言葉に出やすいです。",
    "魚座":"やわらかく感覚的に伝え、相手の気持ちに寄り添う話し方になりやすいです。`
  };
  return map[sign] || "";
}

function venusStyle(sign){
  const map = {
    "牡羊座":"好きになると分かりやすく、恋愛では勢いよく動きやすいです。",
    "牡牛座":"恋愛では安心感と心地よさを大事にし、長く続く関係を好みます。",
    "双子座":"恋愛では会話とテンポを重視し、軽やかな距離感に惹かれやすいです。",
    "蟹座":"恋愛では情が深く、守りたい・支えたい気持ちが強く出やすいです。",
    "獅子座":"恋愛では特別感や愛情表現を重視し、分かりやすい関係を好みます。",
    "乙女座":"恋愛では慎重で、細やかな気遣いを通じて愛情を示すタイプです。",
    "天秤座":"恋愛では美意識とバランスを大事にし、心地よい関係に惹かれます。",
    "蠍座":"恋愛では一途さが強く、深く結ばれる関係を望みやすいです。",
    "射手座":"恋愛では自由さと明るさを求め、重すぎない関係が合いやすいです。",
    "山羊座":"恋愛では誠実さと現実感を重視し、将来性を見て関係を選びます。",
    "水瓶座":"恋愛では距離感と個性を大切にし、自然体でいられる関係を好みます。",
    "魚座":"恋愛では共感と優しさを大切にし、心のつながりを強く求めます。"
  };
  return map[sign] || "";
}

function marsStyle(sign){
  const map = {
    "牡羊座":"動き出しが速く、迷うより先に行動しやすいです。",
    "牡牛座":"行動はゆっくりでも、一度決めると粘り強く続けやすいです。",
    "双子座":"行動に軽快さがあり、同時に複数のことを動かしやすいです。",
    "蟹座":"感情が動くと行動力が出やすく、守る対象があると強くなります。",
    "獅子座":"自信を持てる場では堂々と動けて、存在感のある行動になりやすいです。",
    "乙女座":"段取りを整えてから動くため、無駄の少ない行動になりやすいです。",
    "天秤座":"周囲との関係を見ながら動くため、調整型の行動になりやすいです。",
    "蠍座":"一度決めると集中して深く進めるため、粘り強い行動力があります。",
    "射手座":"先を見ながら大きく動く力があり、挑戦に向かいやすいです。",
    "山羊座":"現実的な目標へ向けて、着実に積み上げる行動になりやすいです。",
    "水瓶座":"自分なりのやり方で動くため、型にとらわれない行動力があります。",
    "魚座":"感覚や空気を見ながら動くため、流れに合わせた行動になりやすいです。"
  };
  return map[sign] || "";
}

function westernPlanetTopicReading(st, mercurySign, venusSign, marsSign){
  const base = `水星 ${mercurySign} は伝え方、金星 ${venusSign} は愛し方や好み、火星 ${marsSign} は行動の出方を示します。`;
  const map = {
    "恋愛": `${base} 恋愛では特に金星と火星の影響が強く、好きになった時の出方と関係の進め方にその特徴が出やすいです。`,
    "復縁": `${base} 復縁では水星の伝え方がとても重要です。気持ちがあっても、言葉の選び方で流れが変わりやすいです。`,
    "片思い": `${base} 片思いでは金星が惹かれ方を、火星が近づき方を表します。押す・待つのバランスを見る助けになります。`,
    "仕事": `${base} 仕事では水星が考え方と伝達力、火星が実行力として出やすく、働き方の癖が見えます。`,
    "転職": `${base} 転職では水星で条件整理、火星で実際に動くタイミングを見ると判断しやすくなります。`,
    "独立": `${base} 独立では火星の行動力と水星の伝達力が強く関わります。考えを形にする力が鍵です。`,
    "総合運": `${base} 東洋の命式と合わせると、性格だけでなく具体的な動き方や伝え方が見えやすくなります。`
  };
  return map[st] || map["総合運"];
}



function tarotMeaning(card){
  const map = {
    "愚者":"新しい流れの始まりです。固定観念を外し、軽やかに動くことで道が開けやすい時です。",
    "魔術師":"今ある道具や才能を活かして形にする時です。自分から動くほど流れが出ます。",
    "女教皇":"今は表面より内面を見る時です。直感や静かな気づきを大切にしてください。",
    "女帝":"育てる力が高まる時です。愛情・豊かさ・受け取る力がテーマになります。",
    "皇帝":"形にする力が必要です。ルール、責任、現実的な決断が運を安定させます。",
    "法王":"正攻法や信頼できる助言が鍵になります。基本に戻るほど整います。",
    "恋人たち":"選択がテーマです。好き嫌いだけでなく、本当に心が向く方を選ぶ時です。",
    "戦車":"前進の力が出ています。迷いを減らし、方向を決めるほど進みやすいです。",
    "力":"強く押すより、やわらかく制することが鍵です。感情との付き合い方が大切です。",
    "隠者":"今は急いで答えを出すより、静かに考えることで本質が見えます。",
    "運命の輪":"流れが変わる節目です。良い悪いより、タイミングを読むことが大切です。",
    "正義":"バランスと公平さが必要です。感情だけでなく、客観的な判断が鍵になります。",
    "吊るされた男":"今は無理に進めるより、見方を変える時です。待つ意味があります。",
    "死神":"終わりと再生のカードです。手放すことで新しい流れが入ります。",
    "節制":"極端を避け、ちょうどよい整え方が必要です。焦らず調和を意識してください。",
    "悪魔":"執着や依存に気づく時です。縛られているものを見直す必要があります。",
    "塔":"思い込みが崩れやすい時です。痛みの後に、本当の形が見えやすくなります。",
    "星":"希望が戻る流れです。少し先を見て、素直な願いを大切にしてください。",
    "月":"不安や迷いが出やすい時です。今は全部を決めず、様子を見ることも必要です。",
    "太陽":"明るさと結果が見えやすい時です。素直に前へ出るほど流れが強まります。",
    "審判":"やり直しや再評価の時です。過去を活かして次へ進むチャンスがあります。",
    "世界":"ひとつの完成形に近づいています。区切りをつけて次の段階へ進む時です。"
  }
  return map[card] || "今の流れを映すカードです。"
}

function runeMeaning(rune){
  const map = {
    "フェオ":"豊かさや実りのルーンです。得たものをどう活かすかがテーマです。",
    "ウル":"生命力と強さのルーンです。基礎体力や勢いを整える時です。",
    "ソーン":"防御と境界線のルーンです。無理に進まず、守ることも大切です。",
    "アンスール":"言葉と伝達のルーンです。会話やメッセージに鍵があります。",
    "ライド":"移動と進展のルーンです。止まっていた流れが動きやすいです。",
    "ケン":"気づきと灯りのルーンです。見えなかったことが見えやすくなります。",
    "ギューフ":"贈与と縁のルーンです。人との循環が運を開きます。",
    "ウンジョ":"喜びのルーンです。気持ちが軽くなる方向が正解に近いです。",
    "ハガル":"急な変化のルーンです。乱れの中で本質が見える時です。",
    "ニイド":"不足や必要性のルーンです。今足りないものを知ることが先です。",
    "イス":"停止のルーンです。今は無理に動くより整える時です。",
    "ヤラ":"収穫のルーンです。時間をかけたものが形になりやすいです。",
    "エイワズ":"変化と忍耐のルーンです。過渡期を越える力があります。",
    "ペオース":"見えない流れのルーンです。偶然や裏側の動きに意味があります。",
    "アルジズ":"守護のルーンです。無理を避け、守られている流れを信じてよい時です。",
    "ソウェイル":"成功と太陽のルーンです。自信を持って進むほど光が出ます。",
    "ティール":"勝負と正義のルーンです。覚悟を決めるほど道が通ります。",
    "ベルカナ":"育成と回復のルーンです。急ぐより育てることが大切です。",
    "エワズ":"協力と前進のルーンです。ひとりより二人三脚で進む方が良い時です。",
    "マンナズ":"自己理解のルーンです。自分を知ることが突破口になります。",
    "ラグズ":"感情と流れのルーンです。無理に固めず自然な流れを読むことが必要です。",
    "イング":"内側で育つ実りのルーンです。準備が整い、次の芽が出る前です。",
    "ダエグ":"転換と夜明けのルーンです。状況が切り替わる兆しがあります。",
    "オシラ":"土台と継承のルーンです。守るべきもの、残すべきものがテーマです。"
  }
  return map[rune] || "今の流れを映すルーンです。"
}

function tarotTopicReading(st, card){
  const common = tarotMeaning(card);
  const map = {
    "恋愛": `タロットでは「${card}」が出ています。${common} 恋愛では今、感情だけでなく流れのタイミングを読むことが大切です。`,
    "復縁": `タロットでは「${card}」が出ています。${common} 復縁では、戻ることの意味をよく見直す必要があります。`,
    "片思い": `タロットでは「${card}」が出ています。${common} 片思いでは、今の一歩が重すぎないかを見ることが大切です。`,
    "仕事": `タロットでは「${card}」が出ています。${common} 仕事では、今は方向性や役割を整えるサインとして読むと良いです。`,
    "転職": `タロットでは「${card}」が出ています。${common} 転職では、勢いだけでなく流れの変わり目を見極める時です。`,
    "独立": `タロットでは「${card}」が出ています。${common} 独立では、今のカードが始め方や整え方のヒントになります。`,
    "総合運": `タロットでは「${card}」が出ています。${common} 全体運として、今の流れを一言で表す象徴です。`
  };
  return map[st] || map["総合運"];
}

function runeTopicReading(st, rune){
  const common = runeMeaning(rune);
  const map = {
    "恋愛": `ルーンでは「${rune}」が出ています。${common} 恋愛では、今の関係の育て方や距離感の整え方に意味があります。`,
    "復縁": `ルーンでは「${rune}」が出ています。${common} 復縁では、今必要なのは連絡の量より関係の質です。`,
    "片思い": `ルーンでは「${rune}」が出ています。${common} 片思いでは、焦りより流れを読むことが大切です。`,
    "仕事": `ルーンでは「${rune}」が出ています。${common} 仕事では、役割や環境との相性を見るヒントになります。`,
    "転職": `ルーンでは「${rune}」が出ています。${common} 転職では、今足りない準備や動き方を示しています。`,
    "独立": `ルーンでは「${rune}」が出ています。${common} 独立では、土台を固めるべきか進むべきかのヒントになります。`,
    "総合運": `ルーンでは「${rune}」が出ています。${common} 今の全体運の流れを象徴的に表しています。`
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
  const sign=signFromDate(birthDate),westElement=westernElement(sign),westQuality=westernQuality(sign),moon=pick(moonStyles,key,"moon"),asc=pick(ascStyles,key,"asc"),mercurySign=pseudoPlanetSign(birthDate,3),venusSign=pseudoPlanetSign(birthDate,7),marsSign=pseudoPlanetSign(birthDate,11);
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
    html+=`<div class="reportBlock"><h3>まず結論</h3><div class="callout">${esc(concernSummary(st, ws, yy))}</div><div class="callout">${esc(adviceSummary(st))}</div><div class="callout">${esc(cautionSummary(st))}</div></div><div class="reportBlock"><h3>今やると良いこと 3つ</h3><div class="reportMiniGrid">${nextAction3(st).map((x,i)=>`<div class="miniBox"><div class="miniBoxLabel">${i+1}</div><div class="miniBoxValue">${esc(x)}</div></div>`).join("")}</div></div><div class="reportBlock"><h3>${esc(st)}を深く読む</h3>${topicDeepReading(st, counts, ws, dayMaster, ryunen, ryugetsu, nichiun)}</div><p>${esc(name)}様の現在の気勢を見ると、陰 ${yy.yin} に対し陽 ${yy.yang} が現れており、${yyText}です。</p><p>今回の${esc(st)}では、日主 ${esc(dayMaster)} の性質が強く働きます。${esc(dmProfile)}</p><div class="callout">${esc(explainYinYang(yy))}</div><div class="reportBlock"><h3>日主の詳しい意味</h3><p>${esc(explainDayMaster(dayMaster))}</p></div><div class="callout">空亡は ${esc(pillars.dayP.kubou)}、日柱納音は ${esc(pillars.dayP.nayin)} です。${esc(actionText(st))}</div><div class="reportBlock"><h3>この部分の見方</h3><p>${esc(explainKubou(pillars.dayP.kubou))}</p><p>${esc(explainNaYin(pillars.dayP.nayin))}</p></div><div class="reportBlock"><h3>四柱詳細</h3>${buildPillarTable(pillars)}</div><div class="reportBlock"><h3>追加計算</h3><div class="reportMiniGrid"><div class="miniBox"><div class="miniBoxLabel">空亡</div><div class="miniBoxValue">${esc(pillars.dayP.kubou)}</div></div><div class="miniBox"><div class="miniBoxLabel">年柱納音</div><div class="miniBoxValue">${esc(pillars.yearP.nayin)}</div></div><div class="miniBox"><div class="miniBoxLabel">月柱納音</div><div class="miniBoxValue">${esc(pillars.monthP.nayin)}</div></div><div class="miniBox"><div class="miniBoxLabel">日柱納音</div><div class="miniBoxValue">${esc(pillars.dayP.nayin)}</div></div></div></div><div class="reportBlock"><h3>十神出現数</h3><div class="reportMiniGrid5">${Object.entries(tenGods).map(([k,v])=>`<div class="miniBox"><div class="miniBoxLabel">${esc(k)}</div><div class="miniBoxValue">${v}</div></div>`).join("")}</div></div><div class="reportBlock"><h3>運勢レイヤー</h3><div class="reportMiniGrid">${daiun.slice(0,4).map((x,i)=>`<div class="miniBox"><div class="miniBoxLabel">${i+1}運</div><div class="miniBoxValue">${esc(x)}</div></div>`).join("")}</div><div class="reportMiniGrid" style="margin-top:10px"><div class="miniBox"><div class="miniBoxLabel">${currentYear}年の流年</div><div class="miniBoxValue">${esc(ryunen)}</div></div><div class="miniBox"><div class="miniBoxLabel">${monthNamesJP[currentMonth-1]}の流月</div><div class="miniBoxValue">${esc(ryugetsu)}</div></div><div class="miniBox"><div class="miniBoxLabel">本日の日運</div><div class="miniBoxValue">${esc(nichiun)}</div></div><div class="miniBox"><div class="miniBoxLabel">今年の読み</div><div class="miniBoxValue">${esc(timingText(st))}</div></div></div></div><div class="reportBlock"><h3>五行バランス</h3><div class="reportMiniGrid5">${["木","火","土","金","水"].map(k=>`<div class="miniBox"><div class="miniBoxLabel">${k}</div><div class="miniBoxValue">${counts[k]} / ${percent[k]}%</div></div>`).join("")}</div><p style="margin-top:12px">五行では「${esc(ws.weak)}」がやや弱く、「${esc(ws.strong)}」が強めです。弱い要素を補う動きを意識すると流れが整いやすくなります。</p><div class="callout">${esc(explainFiveElementBalance(counts, ws))}</div></div><div class="reportBlock"><h3>西洋占いの詳しい読み</h3><div class="reportMiniGrid"><div class="miniBox"><div class="miniBoxLabel">太陽星座</div><div class="miniBoxValue">${esc(sign)}</div></div><div class="miniBox"><div class="miniBoxLabel">元素</div><div class="miniBoxValue">${esc(westElement)}</div></div><div class="miniBox"><div class="miniBoxLabel">区分</div><div class="miniBoxValue">${esc(westQuality)}</div></div><div class="miniBox"><div class="miniBoxLabel">月傾向</div><div class="miniBoxValue">${esc(moon)}</div></div><div class="miniBox"><div class="miniBoxLabel">外的印象</div><div class="miniBoxValue">${esc(asc)}</div></div><div class="miniBox"><div class="miniBoxLabel">恋愛傾向</div><div class="miniBoxValue">${esc(westernLoveStyle(sign))}</div></div><div class="miniBox"><div class="miniBoxLabel">仕事傾向</div><div class="miniBoxValue">${esc(westernWorkStyle(sign))}</div></div><div class="miniBox"><div class="miniBoxLabel">伝え方</div><div class="miniBoxValue">${esc(westernCommunication(sign))}</div></div></div><div class="callout">${esc(westernTopicReading(st, sign, westElement, westQuality))}</div><div class="reportMiniGrid" style="margin-top:10px"><div class="miniBox"><div class="miniBoxLabel">水星</div><div class="miniBoxValue">${esc(mercurySign)}</div></div><div class="miniBox"><div class="miniBoxLabel">金星</div><div class="miniBoxValue">${esc(venusSign)}</div></div><div class="miniBox"><div class="miniBoxLabel">火星</div><div class="miniBoxValue">${esc(marsSign)}</div></div><div class="miniBox"><div class="miniBoxLabel">水星の意味</div><div class="miniBoxValue">${esc(mercuryStyle(mercurySign))}</div></div><div class="miniBox"><div class="miniBoxLabel">金星の意味</div><div class="miniBoxValue">${esc(venusStyle(venusSign))}</div></div><div class="miniBox"><div class="miniBoxLabel">火星の意味</div><div class="miniBoxValue">${esc(marsStyle(marsSign))}</div></div></div><div class="callout">${esc(westernPlanetTopicReading(st, mercurySign, venusSign, marsSign))}</div></div><div class="reportBlock"><h3>補助占術</h3><div class="reportMiniGrid"><div class="miniBox"><div class="miniBoxLabel">九星気学</div><div class="miniBoxValue">${esc(kyusei)}</div></div><div class="miniBox"><div class="miniBoxLabel">易断</div><div class="miniBoxValue">${esc(iCh.base)} → ${esc(iCh.changed)}</div></div><div class="miniBox"><div class="miniBoxLabel">タロット</div><div class="miniBoxValue">${esc(tarotCard)}</div></div><div class="miniBox"><div class="miniBoxLabel">ルーン</div><div class="miniBoxValue">${esc(runeName)}</div></div><div class="miniBox"><div class="miniBoxLabel">守りの言葉</div><div class="miniBoxValue">${esc(guard)}</div></div></div><div class="reportMiniGrid" style="margin-top:10px"><div class="miniBox"><div class="miniBoxLabel">タロットの意味</div><div class="miniBoxValue">${esc(tarotMeaning(tarotCard))}</div></div><div class="miniBox"><div class="miniBoxLabel">ルーンの意味</div><div class="miniBoxValue">${esc(runeMeaning(runeName))}</div></div></div><div class="callout">${esc(tarotTopicReading(st, tarotCard))}</div><div class="callout">${esc(runeTopicReading(st, runeName))}</div></div>`;
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



function topicDeepReading(st, counts, ws, dayMaster, ryunen, ryugetsu, nichiun){
  const strong = ws.strong;
  const weak = ws.weak;
  const lines = {
    "恋愛": [
      `恋愛では、今のあなたは「相手を好きかどうか」よりも、「その関係の中で安心していられるか」が重要な時です。`,
      `命式では ${strong} の気が強く、${weak} の気が弱めなので、感情が先に立つ日と、急に慎重になる日との差が出やすいです。`,
      `流年 ${ryunen}・流月 ${ryugetsu}・日運 ${nichiun} を重ねると、今は関係を急進展させるより、無理のない距離で信頼を積む方が長続きしやすい流れです。`,
      `相手の反応に一喜一憂するより、自分が穏やかでいられる関わり方を選ぶほど、恋愛運は整っていきます。`
    ],
    "復縁": [
      `復縁では、「戻れるかどうか」だけを見るより、「戻った後に同じ苦しさを繰り返さないか」を見極めることが大切です。`,
      `日主 ${dayMaster} の性質から見ると、気持ちを抱えたまま耐える力はありますが、その分だけ本音の整理が後回しになりやすいです。`,
      `流年 ${ryunen} は過去の課題を浮かび上がらせ、流月 ${ryugetsu} は感情を揺らしやすいので、今は相手を追う前に自分の本音と境界線を整えることが先です。`,
      `復縁の可能性を高める行動は、連絡回数を増やすことより、関係の質を見直すことにあります。`
    ],
    "片思い": [
      `片思いでは、好きな気持ちの強さは十分でも、動く順番を間違えると伝わりにくい時です。`,
      `${weak} が弱めに出ているため、待つべき時に焦ったり、逆に動いてよい時に遠慮したりしやすい傾向があります。`,
      `流月 ${ryugetsu} は気持ちを前へ出しやすくしますが、日運 ${nichiun} は今すぐ答えを取りにいくより、自然な接点を増やす方が良いと示しています。`,
      `片思いの運気は、相手を追うほどではなく、「思い出してもらえる存在」になるほど動きやすくなります。`
    ],
    "仕事": [
      `仕事では、能力不足が問題というより、役割の重さと環境の噛み合わせを見直す時です。`,
      `${strong} が強く出ているため、責任感や判断力はありますが、背負いすぎると消耗が先に来やすい配置です。`,
      `流年 ${ryunen} は仕事上の方向転換や見直しを促し、流月 ${ryugetsu} は日々の負担を浮き彫りにします。`,
      `今は根性で乗り切ることより、何を続けて何を減らすかをはっきり決めるほど、仕事運は整います。`
    ],
    "転職": [
      `転職では、「もう無理だから辞めたい」という気持ちだけで決めると、次でも似た課題に出会いやすい時です。`,
      `命式では ${weak} を補う準備が必要で、勢いよりも条件整理の丁寧さが結果を左右しやすいです。`,
      `流年 ${ryunen} は転換期の気を持っていますが、流月 ${ryugetsu} は足元確認を求めています。`,
      `今は辞める判断を急ぐより、譲れない条件・働き方・収入ラインをはっきりさせるほど良い転職につながります。`
    ],
    "独立": [
      `独立では、やりたいことは見えていても、土台と継続性をどこまで作れるかが勝負になる時です。`,
      `${strong} が強い命式は、始める勢いはありますが、${weak} が弱いと続ける仕組みや生活基盤が後回しになりやすいです。`,
      `流年 ${ryunen} は新しい看板を立てる気を持ち、流月 ${ryugetsu} は形にする実務を求めています。`,
      `今は大きく始めるより、小さく試して残るものを見極める方が、結果として独立運を強めます。`
    ],
    "お金": [
      `お金では、入る量を増やすこと以上に、漏れていく流れを整えることが先です。`,
      `${weak} が弱い配置は、管理や継続にムラが出やすく、${strong} が強いと気分や勢いで使いやすい面が出ます。`,
      `流月 ${ryugetsu} は収支の偏りを表に出しやすく、日運 ${nichiun} は細かい管理の必要性を示しています。`,
      `今は増やす工夫の前に、固定費、習慣的な出費、曖昧なお金の使い方を見直すほど金運が安定します。`
    ],
    "人間関係": [
      `人間関係では、相手に合わせ続けることが優しさではなくなる時があります。`,
      `命式では ${strong} が強めなので、支える力や関わる力はありますが、その分だけ負担の線引きが曖昧になりやすいです。`,
      `流月 ${ryugetsu} は言葉の行き違いを増やしやすく、日運 ${nichiun} は感情的に返すより一呼吸置く方が良いと示しています。`,
      `今は分かってもらう努力より、自分の無理を無理と言えることの方が対人運を守ります。`
    ],
    "結婚": [
      `結婚では、気持ちがあるかどうかだけではなく、一緒に生活を回せるかを見るべき時です。`,
      `${weak} が弱い今は、理想や情で進めると、後から現実面のずれが目立ちやすいです。`,
      `流年 ${ryunen} は人生の形を考えやすく、流月 ${ryugetsu} は条件や役割を具体化する流れです。`,
      `今はロマンよりも生活観・お金・将来像をきちんと確認するほど、結婚運は安定します。`
    ],
    "家庭": [
      `家庭では、誰か一人が我慢して回している状態なら、そろそろ見直しの時です。`,
      `${strong} が強いと責任を背負いやすく、${weak} が弱いと助けを求めることが遅れやすいです。`,
      `流月 ${ryugetsu} は役割の偏りを目立たせやすく、日運 ${nichiun} は小さな不満を溜めない方が良いと伝えています。`,
      `今は頑張り続けることより、負担を言葉にして分けることの方が家庭運を守ります。`
    ],
    "健康": [
      `健康では、無理が限界を超える前に整えることが大切な時です。`,
      `${weak} が弱めのため、疲れを感じてからでは回復が遅れやすく、${strong} が強いとつい無理を押してしまいやすいです。`,
      `流月 ${ryugetsu} は体の声を表に出しやすく、日運 ${nichiun} も回復優先を勧めています。`,
      `今は治すことを急ぐより、睡眠・食事・体温・生活リズムの基礎を整えるほど運気も落ち着きます。`
    ],
    "総合運": [
      `総合運では、流れそのものは止まっていませんが、整えながら進む方が大きく崩れにくい時です。`,
      `${strong} が強く ${weak} が弱い今は、得意な部分だけで走ると偏りが出やすく、足りない部分の補強が運を安定させます。`,
      `流年 ${ryunen}・流月 ${ryugetsu}・日運 ${nichiun} を重ねると、今は拡大より調整、勢いより順序が大切です。`,
      `急いで答えを出すより、生活と気持ちの両方を整えながら前へ出るほど総合運は強くなります。`
    ]
  };
  return (lines[st] || lines["総合運"]).map(x => `<p>${x}</p>`).join("");
}



function westernLoveStyle(sign){
  const map = {
    "牡羊座":"恋愛では直感が強く、気持ちが動くとストレートに出やすいタイプです。",
    "牡牛座":"恋愛では安心感と継続性を重視し、ゆっくり信頼を育てるタイプです。",
    "双子座":"恋愛では会話やテンポを大切にし、知的な刺激で気持ちが動きやすいタイプです。",
    "蟹座":"恋愛では情の深さが強く、心を許した相手にはとても一途なタイプです。",
    "獅子座":"恋愛では愛情表現が分かりやすく、特別感のある関係を求めやすいタイプです。",
    "乙女座":"恋愛では細やかな気遣いができ、慎重に関係を深めるタイプです。",
    "天秤座":"恋愛ではバランス感覚があり、対等で心地よい関係を求めやすいタイプです。",
    "蠍座":"恋愛では感情が深く、一度本気になると強い結びつきを望むタイプです。",
    "射手座":"恋愛では自由さと前向きさを大切にし、重くなりすぎない関係を好むタイプです。",
    "山羊座":"恋愛では誠実さと現実感を重視し、将来性のある関係を選びやすいタイプです。",
    "水瓶座":"恋愛では距離感と個性を大切にし、友達の延長のような自然さを求めやすいタイプです。",
    "魚座":"恋愛では共感力が強く、気持ちの通じ合いを何より大切にするタイプです。"
  };
  return map[sign] || "";
}

function westernWorkStyle(sign){
  const map = {
    "牡羊座":"仕事では決断が速く、先頭に立つ役割で力を出しやすいです。",
    "牡牛座":"仕事では安定した積み上げが得意で、継続力に強みがあります。",
    "双子座":"仕事では情報処理や会話力が強く、変化の多い環境に向きます。",
    "蟹座":"仕事では気配りと守る力が強く、支援や調整で評価されやすいです。",
    "獅子座":"仕事では存在感と表現力があり、前に出る役割で輝きやすいです。",
    "乙女座":"仕事では分析力と正確さがあり、細部を整える役割に強いです。",
    "天秤座":"仕事では対人調整やバランス感覚があり、橋渡し役に向いています。",
    "蠍座":"仕事では集中力と探究心が強く、深く掘る仕事に向きます。",
    "射手座":"仕事では視野が広く、挑戦や新しい企画に向いています。",
    "山羊座":"仕事では責任感と現実処理力があり、結果を積み上げやすいです。",
    "水瓶座":"仕事では発想が独自で、新しい仕組みづくりに向いています。",
    "魚座":"仕事では感受性と共感力があり、人の心に寄り添う役割に強いです。"
  };
  return map[sign] || "";
}

function westernCommunication(sign){
  const map = {
    "牡羊座":"伝え方は率直で、回りくどい表現より短く明快な方が合います。",
    "牡牛座":"伝え方は落ち着いていて、安心できる言い回しが伝わりやすいです。",
    "双子座":"伝え方は軽やかで、テンポの良い会話に強みがあります。",
    "蟹座":"伝え方は感情がにじみやすく、共感を含む言葉が合います。",
    "獅子座":"伝え方は分かりやすく華やかで、熱量が伝わりやすいです。",
    "乙女座":"伝え方は丁寧で具体的で、細かい配慮が言葉に出やすいです。",
    "天秤座":"伝え方は柔らかく、場の空気を崩さない言い方が得意です。",
    "蠍座":"伝え方は深く、言葉数は少なくても重みが出やすいです。",
    "射手座":"伝え方は前向きで、率直さと明るさが出やすいです。",
    "山羊座":"伝え方は実務的で、必要なことをきちんと伝える傾向があります。",
    "水瓶座":"伝え方は個性的で、独自の視点が言葉に出やすいです。",
    "魚座":"伝え方はやわらかく、相手の感情に合わせる傾向があります。"
  };
  return map[sign] || "";
}

function westernTopicReading(st, sign, westElement, westQuality){
  const common = `太陽星座 ${sign}、元素 ${westElement}、区分 ${westQuality} から見ると、今の動き方はその人らしさが表に出やすい時です。`;
  const map = {
    "恋愛": `${common} 恋愛では ${westernLoveStyle(sign)} 今は自分らしい愛し方を無理に変えるより、合う距離感を選ぶ方が良い流れです。`,
    "復縁": `${common} 復縁では ${westernCommunication(sign)} 今は気持ちを強く押すより、伝え方を整えることが重要です。`,
    "片思い": `${common} 片思いでは ${westernLoveStyle(sign)} 今は相手との空気が合うかを見ながら少しずつ近づく方が向いています。`,
    "仕事": `${common} 仕事では ${westernWorkStyle(sign)} 自分の得意な役割に戻るほど流れが整いやすいです。`,
    "転職": `${common} 転職では ${westernWorkStyle(sign)} 合わない環境から離れるだけでなく、合う働き方を明確にすることが大切です。`,
    "独立": `${common} 独立では ${westernWorkStyle(sign)} 自分らしさが強みになる一方で、続け方を現実的に整えることも必要です。`,
    "お金": `${common} 金運では、使い方にも性格が出やすい時です。お金の扱いも自分の癖を知ることが安定につながります。`,
    "人間関係": `${common} 対人では ${westernCommunication(sign)} 自分の自然な伝え方を活かしながら、相手に伝わる形へ少し整えることが鍵です。`,
    "結婚": `${common} 結婚では ${westernLoveStyle(sign)} 恋愛の勢いだけでなく、長く続く関係かを現実的に見る視点が大切です。`,
    "家庭": `${common} 家庭では ${westernCommunication(sign)} 役割を感覚で抱えるより、言葉にして分けると安定しやすいです。`,
    "健康": `${common} 健康では、自分の性格に合う整え方を選ぶ方が続きます。無理に一般論へ合わせすぎないことが大切です。`,
    "総合運": `${common} 今は東洋命式で出ている流れと、西洋で出る性格傾向の両方を合わせると、より自分らしい動き方が見えやすい時です。`
  };
  return map[st] || map["総合運"];
}



function pseudoPlanetSign(dateStr, offset){
  const baseSigns = ["牡羊座","牡牛座","双子座","蟹座","獅子座","乙女座","天秤座","蠍座","射手座","山羊座","水瓶座","魚座"];
  const d = new Date(dateStr + "T12:00:00");
  const idx = (d.getMonth()*31 + d.getDate() + offset) % 12;
  return baseSigns[idx];
}

function mercuryStyle(sign){
  const map = {
    "牡羊座":"考えたことをすぐ言葉にしやすく、率直でスピード感のある伝え方になりやすいです。",
    "牡牛座":"言葉は落ち着いていて、慎重に選んでから話す傾向があります。",
    "双子座":"会話の回転が速く、情報をつなげて話すのが得意です。",
    "蟹座":"気持ちを汲んだ伝え方ができ、感情を含んだ会話になりやすいです。",
    "獅子座":"自分の考えを分かりやすく表現し、印象に残る話し方になりやすいです。",
    "乙女座":"細かく整理して説明するのが得意で、正確さが出やすいです。",
    "天秤座":"相手とのバランスを見て話せるため、柔らかい会話が得意です。",
    "蠍座":"言葉に深みがあり、本質を見抜いた話し方になりやすいです。",
    "射手座":"広い視点で話し、前向きでストレートな表現になりやすいです。",
    "山羊座":"必要なことを端的にまとめ、現実的に伝える傾向があります。",
    "水瓶座":"独自の視点が強く、発想の面白さが言葉に出やすいです。",
    "魚座":"やわらかく感覚的に伝え、相手の気持ちに寄り添う話し方になりやすいです。`
  };
  return map[sign] || "";
}

function venusStyle(sign){
  const map = {
    "牡羊座":"好きになると分かりやすく、恋愛では勢いよく動きやすいです。",
    "牡牛座":"恋愛では安心感と心地よさを大事にし、長く続く関係を好みます。",
    "双子座":"恋愛では会話とテンポを重視し、軽やかな距離感に惹かれやすいです。",
    "蟹座":"恋愛では情が深く、守りたい・支えたい気持ちが強く出やすいです。",
    "獅子座":"恋愛では特別感や愛情表現を重視し、分かりやすい関係を好みます。",
    "乙女座":"恋愛では慎重で、細やかな気遣いを通じて愛情を示すタイプです。",
    "天秤座":"恋愛では美意識とバランスを大事にし、心地よい関係に惹かれます。",
    "蠍座":"恋愛では一途さが強く、深く結ばれる関係を望みやすいです。",
    "射手座":"恋愛では自由さと明るさを求め、重すぎない関係が合いやすいです。",
    "山羊座":"恋愛では誠実さと現実感を重視し、将来性を見て関係を選びます。",
    "水瓶座":"恋愛では距離感と個性を大切にし、自然体でいられる関係を好みます。",
    "魚座":"恋愛では共感と優しさを大切にし、心のつながりを強く求めます。"
  };
  return map[sign] || "";
}

function marsStyle(sign){
  const map = {
    "牡羊座":"動き出しが速く、迷うより先に行動しやすいです。",
    "牡牛座":"行動はゆっくりでも、一度決めると粘り強く続けやすいです。",
    "双子座":"行動に軽快さがあり、同時に複数のことを動かしやすいです。",
    "蟹座":"感情が動くと行動力が出やすく、守る対象があると強くなります。",
    "獅子座":"自信を持てる場では堂々と動けて、存在感のある行動になりやすいです。",
    "乙女座":"段取りを整えてから動くため、無駄の少ない行動になりやすいです。",
    "天秤座":"周囲との関係を見ながら動くため、調整型の行動になりやすいです。",
    "蠍座":"一度決めると集中して深く進めるため、粘り強い行動力があります。",
    "射手座":"先を見ながら大きく動く力があり、挑戦に向かいやすいです。",
    "山羊座":"現実的な目標へ向けて、着実に積み上げる行動になりやすいです。",
    "水瓶座":"自分なりのやり方で動くため、型にとらわれない行動力があります。",
    "魚座":"感覚や空気を見ながら動くため、流れに合わせた行動になりやすいです。"
  };
  return map[sign] || "";
}

function westernPlanetTopicReading(st, mercurySign, venusSign, marsSign){
  const base = `水星 ${mercurySign} は伝え方、金星 ${venusSign} は愛し方や好み、火星 ${marsSign} は行動の出方を示します。`;
  const map = {
    "恋愛": `${base} 恋愛では特に金星と火星の影響が強く、好きになった時の出方と関係の進め方にその特徴が出やすいです。`,
    "復縁": `${base} 復縁では水星の伝え方がとても重要です。気持ちがあっても、言葉の選び方で流れが変わりやすいです。`,
    "片思い": `${base} 片思いでは金星が惹かれ方を、火星が近づき方を表します。押す・待つのバランスを見る助けになります。`,
    "仕事": `${base} 仕事では水星が考え方と伝達力、火星が実行力として出やすく、働き方の癖が見えます。`,
    "転職": `${base} 転職では水星で条件整理、火星で実際に動くタイミングを見ると判断しやすくなります。`,
    "独立": `${base} 独立では火星の行動力と水星の伝達力が強く関わります。考えを形にする力が鍵です。`,
    "総合運": `${base} 東洋の命式と合わせると、性格だけでなく具体的な動き方や伝え方が見えやすくなります。`
  };
  return map[st] || map["総合運"];
}



function tarotMeaning(card){
  const map = {
    "愚者":"新しい流れの始まりです。固定観念を外し、軽やかに動くことで道が開けやすい時です。",
    "魔術師":"今ある道具や才能を活かして形にする時です。自分から動くほど流れが出ます。",
    "女教皇":"今は表面より内面を見る時です。直感や静かな気づきを大切にしてください。",
    "女帝":"育てる力が高まる時です。愛情・豊かさ・受け取る力がテーマになります。",
    "皇帝":"形にする力が必要です。ルール、責任、現実的な決断が運を安定させます。",
    "法王":"正攻法や信頼できる助言が鍵になります。基本に戻るほど整います。",
    "恋人たち":"選択がテーマです。好き嫌いだけでなく、本当に心が向く方を選ぶ時です。",
    "戦車":"前進の力が出ています。迷いを減らし、方向を決めるほど進みやすいです。",
    "力":"強く押すより、やわらかく制することが鍵です。感情との付き合い方が大切です。",
    "隠者":"今は急いで答えを出すより、静かに考えることで本質が見えます。",
    "運命の輪":"流れが変わる節目です。良い悪いより、タイミングを読むことが大切です。",
    "正義":"バランスと公平さが必要です。感情だけでなく、客観的な判断が鍵になります。",
    "吊るされた男":"今は無理に進めるより、見方を変える時です。待つ意味があります。",
    "死神":"終わりと再生のカードです。手放すことで新しい流れが入ります。",
    "節制":"極端を避け、ちょうどよい整え方が必要です。焦らず調和を意識してください。",
    "悪魔":"執着や依存に気づく時です。縛られているものを見直す必要があります。",
    "塔":"思い込みが崩れやすい時です。痛みの後に、本当の形が見えやすくなります。",
    "星":"希望が戻る流れです。少し先を見て、素直な願いを大切にしてください。",
    "月":"不安や迷いが出やすい時です。今は全部を決めず、様子を見ることも必要です。",
    "太陽":"明るさと結果が見えやすい時です。素直に前へ出るほど流れが強まります。",
    "審判":"やり直しや再評価の時です。過去を活かして次へ進むチャンスがあります。",
    "世界":"ひとつの完成形に近づいています。区切りをつけて次の段階へ進む時です。"
  }
  return map[card] || "今の流れを映すカードです。"
}

function runeMeaning(rune){
  const map = {
    "フェオ":"豊かさや実りのルーンです。得たものをどう活かすかがテーマです。",
    "ウル":"生命力と強さのルーンです。基礎体力や勢いを整える時です。",
    "ソーン":"防御と境界線のルーンです。無理に進まず、守ることも大切です。",
    "アンスール":"言葉と伝達のルーンです。会話やメッセージに鍵があります。",
    "ライド":"移動と進展のルーンです。止まっていた流れが動きやすいです。",
    "ケン":"気づきと灯りのルーンです。見えなかったことが見えやすくなります。",
    "ギューフ":"贈与と縁のルーンです。人との循環が運を開きます。",
    "ウンジョ":"喜びのルーンです。気持ちが軽くなる方向が正解に近いです。",
    "ハガル":"急な変化のルーンです。乱れの中で本質が見える時です。",
    "ニイド":"不足や必要性のルーンです。今足りないものを知ることが先です。",
    "イス":"停止のルーンです。今は無理に動くより整える時です。",
    "ヤラ":"収穫のルーンです。時間をかけたものが形になりやすいです。",
    "エイワズ":"変化と忍耐のルーンです。過渡期を越える力があります。",
    "ペオース":"見えない流れのルーンです。偶然や裏側の動きに意味があります。",
    "アルジズ":"守護のルーンです。無理を避け、守られている流れを信じてよい時です。",
    "ソウェイル":"成功と太陽のルーンです。自信を持って進むほど光が出ます。",
    "ティール":"勝負と正義のルーンです。覚悟を決めるほど道が通ります。",
    "ベルカナ":"育成と回復のルーンです。急ぐより育てることが大切です。",
    "エワズ":"協力と前進のルーンです。ひとりより二人三脚で進む方が良い時です。",
    "マンナズ":"自己理解のルーンです。自分を知ることが突破口になります。",
    "ラグズ":"感情と流れのルーンです。無理に固めず自然な流れを読むことが必要です。",
    "イング":"内側で育つ実りのルーンです。準備が整い、次の芽が出る前です。",
    "ダエグ":"転換と夜明けのルーンです。状況が切り替わる兆しがあります。",
    "オシラ":"土台と継承のルーンです。守るべきもの、残すべきものがテーマです。"
  }
  return map[rune] || "今の流れを映すルーンです。"
}

function tarotTopicReading(st, card){
  const common = tarotMeaning(card);
  const map = {
    "恋愛": `タロットでは「${card}」が出ています。${common} 恋愛では今、感情だけでなく流れのタイミングを読むことが大切です。`,
    "復縁": `タロットでは「${card}」が出ています。${common} 復縁では、戻ることの意味をよく見直す必要があります。`,
    "片思い": `タロットでは「${card}」が出ています。${common} 片思いでは、今の一歩が重すぎないかを見ることが大切です。`,
    "仕事": `タロットでは「${card}」が出ています。${common} 仕事では、今は方向性や役割を整えるサインとして読むと良いです。`,
    "転職": `タロットでは「${card}」が出ています。${common} 転職では、勢いだけでなく流れの変わり目を見極める時です。`,
    "独立": `タロットでは「${card}」が出ています。${common} 独立では、今のカードが始め方や整え方のヒントになります。`,
    "総合運": `タロットでは「${card}」が出ています。${common} 全体運として、今の流れを一言で表す象徴です。`
  };
  return map[st] || map["総合運"];
}

function runeTopicReading(st, rune){
  const common = runeMeaning(rune);
  const map = {
    "恋愛": `ルーンでは「${rune}」が出ています。${common} 恋愛では、今の関係の育て方や距離感の整え方に意味があります。`,
    "復縁": `ルーンでは「${rune}」が出ています。${common} 復縁では、今必要なのは連絡の量より関係の質です。`,
    "片思い": `ルーンでは「${rune}」が出ています。${common} 片思いでは、焦りより流れを読むことが大切です。`,
    "仕事": `ルーンでは「${rune}」が出ています。${common} 仕事では、役割や環境との相性を見るヒントになります。`,
    "転職": `ルーンでは「${rune}」が出ています。${common} 転職では、今足りない準備や動き方を示しています。`,
    "独立": `ルーンでは「${rune}」が出ています。${common} 独立では、土台を固めるべきか進むべきかのヒントになります。`,
    "総合運": `ルーンでは「${rune}」が出ています。${common} 今の全体運の流れを象徴的に表しています。`
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
