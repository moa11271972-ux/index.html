<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>占い師専用アプリ</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="appShell">
    <header class="appHeader no-print">
      <div class="appHeaderTop">
        <div class="appLogo">✶</div>
        <div class="appTitleArea">
          <div class="appSub">FORTUNE APP</div>
          <h1>占い師専用アプリ</h1>
        </div>
        <div class="appStatus">PRO</div>
      </div>

      <div class="appQuickStats">
        <div class="miniStat">
          <span>全体売上</span>
          <strong id="totalSales">¥0</strong>
        </div>
        <div class="miniStat">
          <span>今月売上</span>
          <strong id="currentMonthSales">¥0</strong>
        </div>
        <div class="miniStat">
          <span>顧客数</span>
          <strong id="totalCustomers">0</strong>
        </div>
        <div class="miniStat">
          <span>予約</span>
          <strong id="todayReservations">0</strong>
        </div>
      </div>
    </header>

    <main class="mobileAppLayout">
      <section class="appPanel inputPanel no-print">
        <div class="panelHeader">
          <h2>鑑定入力</h2>
          <span class="panelBadge">入力</span>
        </div>

        <div class="sectionTitle">鑑定モード</div>
        <div class="switchRow">
          <button type="button" class="switchBtn active" id="singleReadBtn">通常鑑定</button>
          <button type="button" class="switchBtn" id="compatReadBtn">相性鑑定</button>
        </div>

        <div class="sectionTitle">利用モード</div>
        <div class="switchRow">
          <button type="button" class="switchBtn active" id="freeBtn">無料版</button>
          <button type="button" class="switchBtn" id="premiumBtn">有料版</button>
        </div>

        <div class="menuBox" id="modeGuide">
          無料版は短めの体験鑑定向けです。有料版は長文の本格鑑定です。
        </div>

        <div class="sectionTitle">相談テンプレ</div>
        <div class="chipWrap">
          <button type="button" class="chipBtn" data-template="恋愛">恋愛</button>
          <button type="button" class="chipBtn" data-template="復縁">復縁</button>
          <button type="button" class="chipBtn" data-template="片思い">片思い</button>
          <button type="button" class="chipBtn" data-template="仕事">仕事</button>
          <button type="button" class="chipBtn" data-template="転職">転職</button>
          <button type="button" class="chipBtn" data-template="独立">独立</button>
        </div>

        <div class="sectionTitle">ご本人情報</div>
        <div class="row">
          <input id="customerName" class="input draftField" placeholder="お客様名">
          <input id="birthDate" class="input draftField" type="date">
        </div>
        <div class="row">
          <input id="birthTime" class="input draftField" type="time">
          <input id="birthPlace" class="input draftField" placeholder="出生地（例：大阪府）">
        </div>
        <div class="row">
          <select id="gender" class="select draftField">
            <option value="">性別</option>
            <option>女性</option>
            <option>男性</option>
            <option>その他</option>
          </select>
          <select id="topic" class="select draftField">
            <option value="">相談テーマ</option>
            <option>恋愛</option>
            <option>仕事</option>
            <option>お金</option>
            <option>人間関係</option>
            <option>結婚</option>
            <option>家庭</option>
            <option>健康</option>
            <option>総合運</option>
          </select>
        </div>
        <div class="row">
          <input id="customerTag" class="input draftField" placeholder="顧客タグ（例：恋愛/VIP/常連）">
          <input id="lastVisit" class="input draftField" type="date">
        </div>

        <div id="partnerSection" class="hidden">
          <div class="sectionTitle">お相手情報</div>
          <div class="row">
            <input id="partnerName" class="input draftField" placeholder="お相手名">
            <input id="partnerBirthDate" class="input draftField" type="date">
          </div>
          <div class="row">
            <input id="partnerBirthTime" class="input draftField" type="time">
            <input id="partnerBirthPlace" class="input draftField" placeholder="出生地（例：東京都）">
          </div>
          <div class="row">
            <select id="compatTopic" class="select draftField">
              <option value="恋愛">恋愛相性</option>
              <option value="結婚">結婚相性</option>
              <option value="人間関係">人間関係相性</option>
              <option value="仕事">仕事相性</option>
            </select>
            <select id="partnerGender" class="select draftField">
              <option value="">お相手性別</option>
              <option>女性</option>
              <option>男性</option>
              <option>その他</option>
            </select>
          </div>
        </div>

        <div class="sectionTitle">顧客管理情報</div>
        <div class="row">
          <select id="customerStatus" class="select draftField">
            <option value="new">新規</option>
            <option value="repeat">リピーター</option>
            <option value="wait">検討中</option>
            <option value="vip">VIP</option>
          </select>
          <input id="feeMemo" class="input draftField" placeholder="料金メモ（例：60分 8,000円）">
        </div>
        <div class="row">
          <input id="feeAmount" class="input draftField" type="number" min="0" placeholder="売上金額（例：8000）">
          <input id="nextReservation" class="input draftField" type="date">
        </div>
        <div class="row">
          <input id="nextReservationTime" class="input draftField" type="time">
          <select id="tarotMode" class="select draftField">
            <option value="single">タロット1枚引き</option>
            <option value="three">タロット3枚引き</option>
          </select>
        </div>
        <div class="row">
          <input id="followMemo" class="input draftField" placeholder="フォローメモ">
          <input id="sessionMinutes" class="input draftField" type="number" min="0" placeholder="鑑定分数（例：60）">
        </div>

        <div class="sectionTitle">相談内容</div>
        <textarea id="question" class="textarea draftField" placeholder="例：今後の恋愛運と、動くべき時期を知りたい。相手との距離感に迷っている。"></textarea>

        <div class="sectionTitle">占術選択</div>
        <div class="checkGrid">
          <label class="checkItem"><input type="checkbox" class="fortuneCheck" value="四柱推命" checked>四柱推命</label>
          <label class="checkItem"><input type="checkbox" class="fortuneCheck" value="九星気学" checked>九星気学</label>
          <label class="checkItem"><input type="checkbox" class="fortuneCheck" value="西洋占星術" checked>西洋占星術</label>
          <label class="checkItem"><input type="checkbox" class="fortuneCheck" value="易" checked>易</label>
          <label class="checkItem"><input type="checkbox" class="fortuneCheck" value="ルーン" checked>ルーン</label>
          <label class="checkItem"><input type="checkbox" class="fortuneCheck" value="タロット" checked>タロット</label>
        </div>

        <div class="sectionTitle">占い師メモ（内部専用）</div>
        <textarea id="readerMemo" class="textarea draftField" placeholder="対面で感じた印象、注意点、次回提案など"></textarea>

        <div class="sectionTitle">次回提案メモ（内部専用）</div>
        <textarea id="proposalMemo" class="textarea draftField" placeholder="例：次回は相性鑑定、月運、年間運を提案"></textarea>

        <div class="sectionTitle">予約メモ</div>
        <textarea id="reservationMemo" class="textarea draftField" placeholder="例：次回は来月上旬の土曜日希望 / 夜の時間帯が希望"></textarea>

        <div class="sectionTitle">SNS導線</div>
        <input id="instaUrl" class="input draftField" placeholder="Instagram URL">
        <input id="lineUrl" class="input draftField" placeholder="LINE URL" style="margin-top:10px">

        <button class="mainBtn" id="generateBtn">鑑定結果を作成する</button>
        <div class="loading" id="loading">命式・相性・五行・易を計算しています…</div>

        <div class="toolGrid">
          <button type="button" class="subBtn" id="saveCustomerBtn">顧客を保存</button>
          <button type="button" class="subBtn" id="saveHistoryBtn">履歴に保存</button>
          <button type="button" class="subBtn" id="saveReservationBtn">予約保存</button>
          <button type="button" class="subBtn" id="printCustomerBtn">お客様控え</button>
        </div>

        <div class="toolGrid">
          <button type="button" class="subBtn" id="printInternalBtn">内部控え</button>
          <button type="button" class="subBtn" id="backupBtn">JSON保存</button>
          <button type="button" class="subBtn" id="restoreBtn">JSON復元</button>
          <button type="button" class="subBtn" id="exportCustomersBtn">顧客CSV</button>
        </div>

        <div class="toolGrid">
          <button type="button" class="subBtn" id="exportHistoryBtn">履歴CSV</button>
          <button type="button" class="subBtn" id="exportReservationsBtn">予約CSV</button>
          <button type="button" class="dangerBtn" id="clearAllBtn">全データ削除</button>
        </div>

        <input type="file" id="restoreFile" accept="application/json" class="hidden">

        <div class="sectionTitle">おすすめ提案</div>
        <div class="menuBox" id="menuSuggestion">
          まだ鑑定前です。鑑定後におすすめの有料メニュー案内を表示します。
        </div>
      </section>

      <section class="appPanel previewPanel">
        <div class="panelHeader no-print">
          <h2>鑑定プレビュー</h2>
          <span class="panelBadge gold">出力</span>
        </div>

        <div class="resultBox" id="result">
          <div class="reportPaperEdge top"></div>

          <div class="reportHeader">
            <div class="reportHeaderLeft">
              <div class="reportMark">✶</div>
              <div>
                <div class="reportBrand">鑑定書</div>
                <div class="reportSub">Premium Reading Document</div>
              </div>
            </div>

            <div class="reportMetaPanel">
              <div>鑑定番号：<span id="reportNumber">未発行</span></div>
              <div>発行日：<span id="reportDate">未発行</span></div>
              <div>控え種別：<span id="reportCopyType">お客様控え</span></div>
            </div>
          </div>

          <div class="reportIntro">
            この鑑定書は、選択された占術をもとに現在の流れ・本質・行動指針を整理した記録です。
          </div>

          <div id="resultInner">
            <h3>まだ鑑定結果はありません</h3>
            <p>
              左側に情報を入力し、「鑑定結果を作成する」を押してください。<br>
              この版は商品っぽいアプリデザインと高級鑑定書デザインになっています。
            </p>
          </div>

          <div class="internalSection" id="internalOnlyBlock">
            <div class="internalHeader">内部記録</div>
            <div class="internalBox">
              <div><strong>占い師メモ：</strong><span id="internalReaderMemo">未入力</span></div>
              <div style="margin-top:8px;"><strong>次回提案メモ：</strong><span id="internalProposalMemo">未入力</span></div>
            </div>
          </div>

          <div class="reportFooter">
            <div class="reportFooterLine"></div>
            <div class="reportFooterText">
              <div>本鑑定書は参考メッセージを含みます。</div>
              <div id="reportSigner">占い師専用アプリ</div>
            </div>
          </div>

          <div class="reportPaperEdge bottom"></div>
        </div>

        <div class="sectionTitle no-print">月別売上</div>
        <div class="miniCard no-print" id="monthlySalesTable">
          <div class="small">履歴を保存すると、ここに月別売上が表示されます。</div>
        </div>
      </section>

      <section class="appPanel sidePanel no-print">
        <div class="panelHeader">
          <h2>運用管理</h2>
          <span class="panelBadge">管理</span>
        </div>

        <div class="sectionTitle">顧客検索</div>
        <input id="customerSearch" class="input" placeholder="名前で検索">

        <div class="sectionTitle">顧客一覧</div>
        <div class="listWrap" id="customerList"></div>

        <div class="divider"></div>

        <div class="sectionTitle">この顧客の過去履歴</div>
        <div class="listWrap" id="customerHistoryList"></div>

        <div class="divider"></div>

        <div class="sectionTitle">フォロー候補客</div>
        <div class="listWrap" id="followupList"></div>

        <div class="divider"></div>

        <div class="sectionTitle">VIP / 上位候補</div>
        <div class="listWrap" id="rankSuggestionList"></div>

        <div class="divider"></div>

        <div class="sectionTitle">日別スケジュール</div>
        <div class="scheduleToolbar">
          <input id="scheduleDate" class="input" type="date">
          <button type="button" class="subBtn" id="todayScheduleBtn">今日</button>
        </div>
        <div id="scheduleList" class="scheduleList"></div>

        <div class="divider"></div>

        <div class="sectionTitle">予約・導線</div>
        <div class="miniCard" id="reservationPreview">
          <div class="small">顧客を選ぶと、予約メモや案内に使いやすい内容をここに表示します。</div>
        </div>

        <div class="divider"></div>

        <div class="sectionTitle">全体履歴</div>
        <div class="listWrap" id="historyList"></div>
      </section>
    </main>
  </div>

  <script src="app.js"></script>
</body>
</html>
