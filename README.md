html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>大阪 介護・看護 人材紹介営業CRM</title>
  <script src="https://tailwindcss.com"></script>
  <style>
    body { font-family: "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800">

  <!-- ヘッダー -->
  <header class="bg-teal-700 text-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
      <div>
        <h1 class="text-xl font-bold tracking-wide">大阪 介護・看護 人材紹介営業CRM</h1>
        <p class="text-xs text-teal-100">大阪府公式オープンデータ（介護事業所台帳・医療機能表）対応版</p>
      </div>
      <div class="flex items-center gap-2">
        <label class="bg-teal-600 hover:bg-teal-500 text-white text-sm px-3 py-2 rounded cursor-pointer border border-teal-400 transition">
          <span>📂 大阪府CSVを取込</span>
          <input type="file" id="csvInput" accept=".csv" class="hidden" />
        </label>
        <button onclick="exportCSV()" class="bg-white text-teal-800 hover:bg-teal-50 text-sm font-semibold px-3 py-2 rounded shadow-sm transition">
          ⬇ 営業履歴をCSV出力
        </button>
      </div>
    </div>
  </header>

  <!-- メインコンテンツ -->
  <main class="max-w-7xl mx-auto px-4 py-6">

    <!-- KPIサマリー -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6" id="kpiBoard">
      <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <div class="text-xs text-slate-500">登録事業所数</div>
        <div class="text-2xl font-bold text-slate-800" id="kpiTotal">0</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <div class="text-xs text-slate-500">未接触</div>
        <div class="text-2xl font-bold text-slate-500" id="kpiUntouched">0</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <div class="text-xs text-slate-500">架電済・資料送付</div>
        <div class="text-2xl font-bold text-blue-600" id="kpiCalled">0</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <div class="text-xs text-slate-500">商談・アポ獲得</div>
        <div class="text-2xl font-bold text-amber-600" id="kpiAppt">0</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 col-span-2 md:col-span-1">
        <div class="text-xs text-slate-500">基本契約締結済</div>
        <div class="text-2xl font-bold text-emerald-600" id="kpiContract">0</div>
      </div>
    </div>

    <!-- 検索・絞り込みフィルター -->
    <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">キーワード（施設名・法人名・住所）</label>
          <input type="text" id="searchInput" placeholder="例：豊中、医療法人〇〇、訪問看護" class="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-teal-600">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">エリア（二次医療圏・市区町村）</label>
          <select id="areaFilter" class="w-full border border-slate-300 rounded px-3 py-2 text-sm bg-white">
            <option value="">すべて表示</option>
            <option value="豊能">豊能圏域（豊中・吹田・池田・箕面・能勢・豊能）</option>
            <option value="三島">三島圏域（高槻・茨木・摂津・島本）</option>
            <option value="大阪市">大阪市全域（24区）</option>
            <option value="北河内">北河内圏域（枚方・寝屋川・守口・門真ほか）</option>
            <option value="中河内">中河内圏域（東大阪・八尾・柏原）</option>
            <option value="南河内">南河内圏域（松原・羽曳野・藤井寺・富田林ほか）</option>
            <option value="堺市">堺市全域（7区）</option>
            <option value="泉州">泉州圏域（岸和田・和泉・泉佐野ほか）</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">施設種別・サービス類型</label>
          <select id="typeFilter" class="w-full border border-slate-300 rounded px-3 py-2 text-sm bg-white">
            <option value="">すべて表示</option>
            <option value="病院">病院・有床診療所（看護師需要大）</option>
            <option value="訪問看護">訪問看護ステーション</option>
            <option value="特養">特別養護老人ホーム（特養）</option>
            <option value="老健">介護老人保健施設（老健）</option>
            <option value="有料・サ高住">有料老人ホーム・サ高住</option>
            <option value="デイ・居宅">デイサービス・グループホーム</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-600 mb-1">営業ステータス</label>
          <select id="statusFilter" class="w-full border border-slate-300 rounded px-3 py-2 text-sm bg-white">
            <option value="">すべて表示</option>
            <option value="未接触">未接触</option>
            <option value="架電済">架電済（担当者不在/資料送付）</option>
            <option value="アポ獲得">アポ獲得・商談中</option>
            <option value="契約済">契約済（求人票あり）</option>
            <option value="NG">NG・当面見送り</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 事業所一覧テーブル -->
    <div class="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-600">
              <th class="p-3">ステータス</th>
              <th class="p-3">事業所名 / 開設法人名</th>
              <th class="p-3">種別・規模</th>
              <th class="p-3">所在地・電話番号</th>
              <th class="p-3">募集職種・条件メモ</th>
              <th class="p-3 text-center">操作</th>
            </tr>
          </thead>
          <tbody id="facilityTableBody" class="divide-y divide-slate-200 text-sm">
            <!-- JSで動的に描画 -->
          </tbody>
        </table>
      </div>
    </div>

    <!-- 出典・コンプライアンス表示 -->
    <footer class="mt-8 text-xs text-slate-500 border-t border-slate-200 pt-4 flex flex-col sm:flex-row justify-between gap-2">
      <div>
        出典：大阪府オープンデータ（介護保険事業所台帳・医療機能表・高齢者施設一覧）を加工して作成
      </div>
      <div class="text-amber-700 font-medium">
        ※職業安定法遵守：紹介成約者の「お祝い金」支給禁止／就職後2年間の転職勧奨（引き抜き）禁止
      </div>
    </footer>
  </main>

  <!-- 営業履歴・詳細編集モーダル -->
  <div id="editModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center p-4 z-50">
    <div class="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl">
      <div class="flex justify-between items-start mb-4">
        <div>
          <span id="modalCorp" class="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded"></span>
          <h2 id="modalName" class="text-lg font-bold text-slate-800 mt-1"></h2>
          <p id="modalAddress" class="text-xs text-slate-500"></p>
        </div>
        <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600 text-xl font-bold">&times;</button>
      </div>

      <form id="editForm" class="space-y-4">
        <input type="hidden" id="editId">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">営業ステータス</label>
            <select id="editStatus" class="w-full border border-slate-300 rounded px-3 py-2 text-sm">
              <option value="未接触">未接触</option>
              <option value="架電済">架電済（資料送付）</option>
              <option value="アポ獲得">アポ獲得・商談中</option>
              <option value="契約済">契約済（求人票あり）</option>
              <option value="NG">NG・当面見送り</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">想定紹介手数料率（%）</label>
            <input type="text" id="editFee" placeholder="例：年収の25% / 一律60万" class="w-full border border-slate-300 rounded px-3 py-2 text-sm">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">採用担当者名・役職</label>
            <input type="text" id="editContactPerson" placeholder="例：事務長 田中様 / 看護部長" class="w-full border border-slate-300 rounded px-3 py-2 text-sm">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">急募職種</label>
            <input type="text" id="editRoles" placeholder="例：正看護師(夜勤可)、介護福祉士" class="w-full border border-slate-300 rounded px-3 py-2 text-sm">
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">商談・ヒアリングメモ（給与水準・夜勤体制・人間関係など）</label>
          <textarea id="editNotes" rows="3" placeholder="例：来月オープン予定のサ高住。正看護師2名急募。紹介手数料25%で基本契約書のドラフト送付済。" class="w-full border border-slate-300 rounded px-3 py-2 text-sm"></textarea>
        </div>

        <div class="flex justify-between items-center pt-2 border-t border-slate-100">
          <a id="modalMapLink" href="#" target="_blank" class="text-xs text-blue-600 hover:underline">📍 Googleマップで周辺環境を確認</a>
          <div class="flex gap-2">
            <button type="button" onclick="closeModal()" class="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded">キャンセル</button>
            <button type="submit" class="px-4 py-2 text-sm bg-teal-700 hover:bg-teal-800 text-white font-bold rounded shadow">保存する</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <script>
    // サンプル初期データ（大阪府内の実在構造に準拠したテストデータ）
    const initialData = [
      {
        id: "27100001",
        name: "北摂総合ケア病院",
        corp: "医療法人 北摂会",
        area: "豊能",
        municipality: "豊中市",
        address: "大阪府豊中市新千里東町1-2-3",
        phone: "06-6831-0001",
        type: "病院",
        scale: "一般120床・療養60床",
        status: "アポ獲得",
        roles: "正看護師（病棟夜勤）",
        fee: "年収の25%",
        contactPerson: "看護部長 佐藤様",
        notes: "急性期病棟の夜勤専従・常勤看護師を2名急募。来週火曜14時に訪問商談予定。"
      },
      {
        id: "27700042",
        name: "訪問看護ステーション千里",
        corp: "株式会社 ケアサポート大阪",
        area: "豊能",
        municipality: "吹田市",
コードは注意してご使用ください。
address: "大阪府吹田市江坂町2-5-10",
phone: "06-6388-0002",
type: "訪問看護",
scale: "看護師8名・PT3名",
status: "契約済",
roles: "正看護師（オンコール対応可）",
fee: "年収の30%",
contactPerson: "管理者 鈴木様",
notes: "精神科訪問看護も強化中。自動車運転免許必須。求職者2名推薦済み。"
},
{
id: "27900115",
name: "特別養護老人ホーム なにわの郷",
corp: "社会福祉法人 大阪福祉会",
area: "大阪市",
municipality: "大阪市北区",
address: "大阪府大阪市北区天満1-8-15",
phone: "06-6351-0003",
type: "特養",
scale: "定員80名（ユニット型）",
status: "架電済",
roles: "介護福祉士・初任者研修",
fee: "年収の20%",
contactPerson: "施設長 高橋様",
notes: "無資格未経験も相談可。法人本部（中央区）で一括採用しているため本部へ資料送付済。"
},
{
id: "27700208",
name: "介護老人保健施設 茨木ヒルズ",
corp: "医療法人 慈愛会",
area: "三島",
municipality: "茨木市",
address: "大阪府茨木市駅前3-4-12",
phone: "072-622-0004",
type: "老健",
scale: "入所定員100名",
status: "未接触",
roles: "准看護師・介護福祉士",
fee: "",
contactPerson: "",
notes: "大阪府介護事業所台帳より抽出。在宅復帰強化型老健。"
},
{
id: "27700399",
name: "サービス付き高齢者向け住宅 さくら堺",
corp: "株式会社 関西ライフケア",
area: "堺市",
municipality: "堺市北区",
address: "大阪府堺市北区中百舌鳥町5-10",
phone: "072-255-0005",
type: "有料・サ高住",
scale: "居室50室",
status: "未接触",
roles: "介護職員（夜勤専従含む）",
fee: "",
contactPerson: "",
notes: "新規開設リストより抽出。同法人が泉州エリアにも3施設運営。"
}
];
// ローカルストレージから読み込み（なければ初期データ）
let facilities = JSON.parse(localStorage.getItem('osaka_care_crm_v1')) || initialData;
function saveData() {
localStorage.setItem('osaka_care_crm_v1', JSON.stringify(facilities));
updateKPI();
renderTable();
}
// KPI更新
function updateKPI() {
document.getElementById('kpiTotal').textContent = facilities.length;
document.getElementById('kpiUntouched').textContent = facilities.filter(f => f.status === '未接触').length;
document.getElementById('kpiCalled').textContent = facilities.filter(f => f.status === '架電済').length;
document.getElementById('kpiAppt').textContent = facilities.filter(f => f.status === 'アポ獲得').length;
document.getElementById('kpiContract').textContent = facilities.filter(f => f.status === '契約済').length;
}
// ステータスバッジの色分け
function getStatusBadge(status) {
const styles = {
'未接触': 'bg-slate-100 text-slate-600 border-slate-300',
'架電済': 'bg-blue-50 text-blue-700 border-blue-200',
'アポ獲得': 'bg-amber-50 text-amber-700 border-amber-300',
'契約済': 'bg-emerald-50 text-emerald-700 border-emerald-300',
'NG': 'bg-rose-50 text-rose-700 border-rose-200'
};
return <span class="px-2 py-1 text-xs font-bold rounded border ${styles[status] || styles['未接触']}">${status}</span>;
}
// テーブル描画
function renderTable() {
const keyword = document.getElementById('searchInput').value.toLowerCase();
const area = document.getElementById('areaFilter').value;
const type = document.getElementById('typeFilter').value;
const status = document.getElementById('statusFilter').value;
const filtered = facilities.filter(f => {
const matchKeyword = !keyword ||
f.name.toLowerCase().includes(keyword) ||
f.corp.toLowerCase().includes(keyword) ||
f.address.toLowerCase().includes(keyword) ||
(f.notes && f.notes.toLowerCase().includes(keyword));
const matchArea = !area || f.area === area || f.address.includes(area);
const matchType = !type || f.type === type;
const matchStatus = !status || f.status === status;
return matchKeyword && matchArea && matchType && matchStatus;
});
const tbody = document.getElementById('facilityTableBody');
tbody.innerHTML = '';
if (filtered.length === 0) {
tbody.innerHTML = <tr><td colspan="6" class="p-8 text-center text-slate-400">条件に一致する事業所がありません</td></tr>;
return;
}
filtered.forEach(f => {
const tr = document.createElement('tr');
tr.className = "hover:bg-slate-50 transition";
tr.innerHTML = `
${getStatusBadge(f.status)}
`;
tbody.appendChild(tr);
});
}
// モーダル制御
function openModal(id) {
const f = facilities.find(item => item.id === id);
if (!f) return;
document.getElementById('editId').value = f.id;
document.getElementById('modalCorp').textContent = f.corp || '法人情報なし';
document.getElementById('modalName').textContent = f.name;
document.getElementById('modalAddress').textContent = ${f.address} / TEL: ${f.phone};
document.getElementById('modalMapLink').href = https://google.com{encodeURIComponent(f.name + ' ' + f.address)};
document.getElementById('editStatus').value = f.status || '未接触';
document.getElementById('editFee').value = f.fee || '';
document.getElementById('editContactPerson').value = f.contactPerson || '';
document.getElementById('editRoles').value = f.roles || '';
document.getElementById('editNotes').value = f.notes || '';
const modal = document.getElementById('editModal');
modal.classList.remove('hidden');
modal.classList.add('flex');
}
function closeModal() {
const modal = document.getElementById('editModal');
modal.classList.add('hidden');
modal.classList.remove('flex');
}
document.getElementById('editForm').addEventListener('submit', function(e) {
e.preventDefault();
const id = document.getElementById('editId').value;
const idx = facilities.findIndex(item => item.id === id);
if (idx !== -1) {
facilities[idx].status = document.getElementById('editStatus').value;
facilities[idx].fee = document.getElementById('editFee').value;
facilities[idx].contactPerson = document.getElementById('editContactPerson').value;
facilities[idx].roles = document.getElementById('editRoles').value;
facilities[idx].notes = document.getElementById('editNotes').value;
saveData();
}
closeModal();
});
// CSVインポート機能（大阪府公式CSVの標準列を自動マッピング）
document.getElementById('csvInput').addEventListener('change', function(e) {
const file = e.target.files[0];
if (!file) return;
const reader = new FileReader();
reader.onload = function(event) {
const text = event.target.result;
const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
if (lines.length < 2) return alert('CSVデータが空です');
const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
let addedCount = 0;
for (let i = 1; i < lines.length; i++) {
const cols = lines[i].split(',').map(c => c.replace(/"/g, '').trim());
const row = {};
headers.forEach((h, idx) => row[h] = cols[idx] || '');
// 大阪府CSVの一般的な列名に対応
const id = row['事業所番号'] || row['医療機関コード'] || row['id'] || ('OSK-' + Date.now() + '-' + i);
const name = row['事業所名'] || row['医療機関名'] || row['施設名'] || row['name'];
if (!name) continue;
if (!facilities.some(f => f.id === id)) {
facilities.push({
id: id,
name: name,
corp: row['法人名'] || row['開設者名'] || row['corp'] || '',
area: row['圏域'] || '大阪府',
municipality: row['市区町村'] || '',
address: (row['所在地'] || row['住所'] || ''),
phone: row['電話番号'] || row['TEL'] || '',
type: row['サービス種類'] || row['施設種別'] || '介護・医療',
scale: row['定員'] || row['病床数'] || '',
status: '未接触',
roles: '',
fee: '',
contactPerson: '',
notes: '大阪府公式CSVよりインポート'
});
addedCount++;
}
}
saveData();
alert(${addedCount}件の事業所データを新規追加しました！);
};
// Shift-JISの大阪府CSVにも対応できるようまずはUTF-8で読み込み（文字化け時はExcelでUTF-8保存を推奨）
reader.readAsText(file, 'UTF-8');
});
// CSVエクスポート機能
function exportCSV() {
const headers = ['事業所番号', '営業ステータス', '事業所名', '法人名', '種別', '所在地', '電話番号', '募集職種', '紹介手数料', '担当者', '商談メモ'];
const rows = facilities.map(f => [
f.id, f.status, f.name, f.corp, f.type, f.address, f.phone, f.roles, f.fee, f.contactPerson, f.notes
].map(v => "${(v || '').replace(/"/g, '""')}").join(','));
const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
const blob = new Blob([bom, [headers.join(','), ...rows].join('\n')], { type: 'text/csv;charset=utf-8;' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 大阪介護看護_営業リスト_${new Date().toISOString().slice(0,10)}.csv;
a.click();
}
// フィルターイベント登録
['searchInput', 'areaFilter', 'typeFilter', 'statusFilter'].forEach(id => {
document.getElementById(id).addEventListener('input', renderTable);
});
// 初期描画
updateKPI();
renderTable();



---

### 2. 大阪府公式データの取り込み手順

このアプリに実データを投入するには、以下の大阪府公式ページからCSVをダウンロードして、画面右上の **「📂 大阪府CSVを取込」** ボタンから読み込ませます。

1. **介護事業所・訪問看護ステーション（最も重要）**
   * **取得元：** [大阪府 介護保険事業所台帳情報の公表](https://osaka.lg.jp "大阪府 介護保険事業所台帳情報の公表")
   * **ポイント：** 「訪問看護」「特別養護老人ホーム」「介護老人保健施設」などのCSVをダウンロードします（休業・廃止事業所が除外された最新リストです）。
2. **病院・有床診療所（看護師紹介向け）**
   * **取得元：** [大阪府 医療機能表](https://osaka.lg.jp "大阪府 医療機能表") または [厚生労働省 医療情報ネットのオープンデータ](https://mhlw.go.jp "厚生労働省 医療情報ネットのオープンデータ")
   * **ポイント：** 大阪府の8つの二次医療圏（豊能・三島・北河内・中河内・南河内・堺市・泉州・大阪市）ごとに病院の病床数・診療科目・住所が一覧化されています。

> **文字化け防止のコツ：** 大阪府の公式CSVは文字コードが「Shift-JIS」で配布されていることが多いため、一度Excelで開いて「CSV UTF-8（コンマ区切り）」で保存し直してからアプリに取り込むと綺麗に日本語表示されます。

---

### 3. 人材紹介営業に特化した実装機能

* **法人名（開設者）での一括検索：** 医療法人や社会福祉法人は、本部人事部が一括採用を行っているケースが多いため、法人名で絞り込んで「本部開拓」ができる設計にしています。
* **ワンタップ架電＆Googleマップ連携：** スマホで開けば電話番号タップで即発信でき、モーダル画面から「Googleマップで周辺環境を確認（駅からの距離や競合施設の把握）」へ1クリックで遷移できます。
* **ブラウザ自動保存＆CSV出力：** 入力した商談メモや手数料率（20%〜30%など）はブラウザに自動保存され、いつでもExcel用のCSVとして書き出せます。

<FollowUp>
このアプリをさらに現場向けに拡張する場合、次のどちらを進めましょうか？
* 大阪府が配布している**複数CSV（介護台帳＋医療機能表）を自動で結合・クレンジングするPythonスクリプト**の作成
* 複数人の営業担当者でリアルタイムにデータを共有するための**クラウドデータベース（Supabase / Googleスプレッドシート連携）化**の手順
</FollowUp>




