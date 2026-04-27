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
function deepReading(st,name,ws,yy,sign,el,card,rune){const y=yy.yang>yy.yin?"陽が強く、外へ動く力が先に出やすい状態":(yy.yin>yy.yang?"陰が強く、内面に抱え込みやすい状態":"陰陽が整いやすい状態");const lines=[`${name}様の命式を見ると、${ws.strong}の気が強く、${ws.weak}の気が弱めに出ています。得意な部分で進みやすい反面、足りない部分を後回しにすると迷いが出やすくなります。`,`西洋補助では${sign}・${el}の性質が出ています。自分らしさを大切にするほど運が開きやすく、無理に人に合わせ続けると疲れやすい傾向です。`,`今は${y}です。感情の波を否定するより、整えてから動くことが開運につながります。`,`タロットは「${card}」。${tarotMeaning(card)} ルーンは「${rune}」。${runeMeaning(rune)}`];return lines.map(x=>`<p>${x}</p>`).join("")}
function relationLabels(){const preset=$("relationshipPreset").value;return {triangle:{a:"お相手A",b:"お相手B",summary:"三角関係"},family:{a:"家族A",b:"家族B",summary:"家族関係"},couple_child:{a:"配偶者",b:"お子様",summary:"夫婦と子ども"},parent_child:{a:"親",b:"子",summary:"親子関係"},friends:{a:"ご友人A",b:"ご友人B",summary:"友人関係"}}[preset]||{a:"お相手A",b:"お相手B",summary:"3人関係"}}
function applyRelationshipPreset(){const r=relationLabels();$("partnerName").placeholder=r.a+"名";$("partner2Name").placeholder=r.b+"名";$("partnerALabelTitle").textContent=r.a+"情報";$("partnerBLabelTitle").textContent=r.b+"情報"}
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
  const p=enrichPillars(calcBaZi(date,time)), yy=yinYangFromPillars(p), counts=fiveElementsFromPillars(p), per=percent(counts), ws=weakestStrongest(counts);
  const kyusei=nineStar(date), ich=pick(ichingNames,key,"ich"), card=pick(tarotList,key,"tarot"), ru=pick(runeList,key,"rune"), moon=pick(moonStyles,key,"moon"), asc=pick(ascStyles,key,"asc"), guard=pick(protectWords,key,"guard");
  let html=`<div class="fortuneCard"><div class="bigLuck"><div class="smallT">総合運</div><div class="daikichi">${plan==="premium"?"深吉":"吉"}</div><p>${esc(opening(st,name))}</p></div><div class="scoreGrid"><div class="scoreBox"><b>恋愛運</b><div class="stars">${scoreStars(4)}</div><small>安心感が鍵</small></div><div class="scoreBox"><b>仕事運</b><div class="stars">${scoreStars(4)}</div><small>努力が実を結ぶ</small></div><div class="scoreBox"><b>金運</b><div class="stars">${scoreStars(3)}</div><small>計画性が吉</small></div></div></div>`;
  html+=`<div class="characters"><div class="charBox"><div class="avatar left"></div><div class="bubble">こんにちは♪ MOA MOAです。<br>${esc(opening(st,name))}</div></div><div class="charBox"><div class="avatar right"></div><div class="bubble">${esc(summary(st,ws,yy))}</div></div></div>`;
  html+=`<div class="block">${chips()}<div class="lock">${esc(specialist(st))}</div></div>`;
  if(mode==="single"){
    html+=`<div class="block"><h3>今やると良いこと</h3><div class="miniGrid">${nextActions(st).map((a,i)=>`<div class="mini"><div class="k">${i+1}</div><div class="v">${esc(a)}</div></div>`).join("")}</div></div>`;
    html+=`<div class="block"><h3>命式</h3>${buildPillarTable(p)}</div>`;
    html+=`<div class="block"><h3>補助占術</h3><div class="miniGrid"><div class="mini"><div class="k">九星</div><div class="v">${kyusei}</div></div><div class="mini"><div class="k">星座</div><div class="v">${sign}<br>${el}/${qual}</div></div><div class="mini"><div class="k">易</div><div class="v">${ich}</div></div><div class="mini"><div class="k">守り</div><div class="v">${guard}</div></div><div class="mini"><div class="k">月傾向</div><div class="v">${moon}</div></div><div class="mini"><div class="k">印象</div><div class="v">${asc}</div></div><div class="mini"><div class="k">タロット</div><div class="v">${card}</div></div><div class="mini"><div class="k">ルーン</div><div class="v">${ru}</div></div></div></div>`;
    if(plan==="premium"){html+=`<div class="block"><h3>深く読む鑑定</h3>${deepReading(st,name,ws,yy,sign,el,card,ru)}</div><div class="block"><h3>五行バランス</h3><div class="miniGrid">${["木","火","土","金","水"].map(k=>`<div class="mini"><div class="k">${k}</div><div class="v">${counts[k]} / ${per[k]}%</div></div>`).join("")}</div></div>`}else{html+=`<div class="lock">有料版では、深く読む鑑定・五行バランス・今後の流れまで表示されます。左の「購入する」から案内を確認できます。</div>`}
  }else{
    const r=relationLabels(), p1Date=$("partnerBirthDate").value, p1Time=$("partnerBirthTime").value||"12:00"; if(!p1Date){alert("お相手Aの生年月日を入力してください。");return}
    const main={name,sign,dayMaster:p.dayP.stem,dayElement:stemElements[p.dayP.stem],yearP:p.yearP,monthP:p.monthP}, p1P=enrichPillars(calcBaZi(p1Date,p1Time)), p1Sign=signFromDate(p1Date);
    const a={name:$("partnerName").value.trim()||r.a,sign:p1Sign,dayMaster:p1P.dayP.stem,dayElement:stemElements[p1P.dayP.stem],yearP:p1P.yearP,monthP:p1P.monthP}, sA=pairScore(main,a);
    if(mode==="compat"){html+=`<div class="block"><h3>2人相性</h3><div class="lock">${esc(name)}様 × ${esc(a.name)}様：${sA}点 / ${pairLabel(sA)}<br>${pairAdvice(sA)}</div></div>`; if(plan!=="premium")html+=`<div class="lock">有料版では、2人の関係維持ポイントまで詳しく表示します。</div>`}
    else{const p2Date=$("partner2BirthDate").value,p2Time=$("partner2BirthTime").value||"12:00";if(!p2Date){alert("お相手Bの生年月日を入力してください。");return}const p2P=enrichPillars(calcBaZi(p2Date,p2Time)),p2Sign=signFromDate(p2Date),b={name:$("partner2Name").value.trim()||r.b,sign:p2Sign,dayMaster:p2P.dayP.stem,dayElement:stemElements[p2P.dayP.stem],yearP:p2P.yearP,monthP:p2P.monthP},sB=pairScore(main,b),sAB=pairScore(a,b),best=[[name,a.name,sA],[name,b.name,sB],[a.name,b.name,sAB]].sort((x,y)=>y[2]-x[2])[0];html+=`<div class="block"><h3>${esc(($("caseLabel").value||r.summary))}の比較</h3><div class="miniGrid"><div class="mini"><div class="k">${esc(name)}×${esc(a.name)}</div><div class="v">${sA}点</div></div><div class="mini"><div class="k">${esc(name)}×${esc(b.name)}</div><div class="v">${sB}点</div></div><div class="mini"><div class="k">${esc(a.name)}×${esc(b.name)}</div><div class="v">${sAB}点</div></div><div class="mini"><div class="k">強い縁</div><div class="v">${esc(best[0])}<br>×<br>${esc(best[1])}</div></div></div></div>`; if(plan==="premium")html+=`<div class="block"><h3>3人関係の深読み</h3><p>${esc(name)}様と${esc(a.name)}様：${pairAdvice(sA)}</p><p>${esc(name)}様と${esc(b.name)}様：${pairAdvice(sB)}</p><p>${esc(a.name)}様と${esc(b.name)}様：${pairAdvice(sAB)}</p><p>3人関係では、相性の強さだけでなく、境界線・役割・我慢の偏りを整えることが大切です。</p></div>`;else html+=`<div class="lock">有料版では、3人関係の深読みと優先順位まで表示します。</div>`}
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