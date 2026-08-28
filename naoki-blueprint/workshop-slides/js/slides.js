// ================================================
// naoki-blueprint 1Day CAMP Slides (Dark × Premium)
// For new participants (2026-05-10)
// ================================================

const T = 17;

function ph(num, tag) {
  return '';
}

// 01. 表紙
function slide01Cover() {
  return `<section class="slide hero-slide anim-blur-in" data-section="cover" data-anim-fixed
    data-notes="みなさん、おはようございます。今日は1日でAI動画編集環境を構築して、動画を1本完成させて持ち帰っていただきます。一人でやると5日詰まる作業を、1日で終わらせます。よろしくお願いします。">
    <div class="hero">
      <div class="hero-tag">AI × Video Editing / 1Day CAMP</div>
      <h1 class="hero-title">AI動画編集を、<br/><span class="em">丸投げできる仕組み。</span></h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">Claude Code × Remotion で、撮影したMP4からYouTube動画まで自動化。<br/>1日で環境構築 ＋ 動画1本完成して持ち帰り。</p>
      <div class="hero-meta">Naoki  /  naoki-blueprint</div>
      <div class="big-index">01</div>
    </div>
  </section>`;
}

// 02. 当日のタイムスケジュール
function slide02Schedule() {
  return `<section class="slide" data-section="schedule"
    data-notes="今日のスケジュールは大きく3パートに分かれています。午前は基礎と環境構築。あなたのPCにAI動画編集環境を構築するところまで。お昼を挟んで、午後の前半でBlueprintを配布して編集スタート、テスト動画で一通りの流れを体験していただきます。午後の後半でブラッシュアップ。本番動画でプロファイルやデザインピッカーを使って、あなた専用の動画として仕上げて完成させます。終了後は希望者で懇親会を予定しています。">
    ${ph(2, 'Today’s schedule')}
    <div class="slide-content">
      <h2>今日の<span class="g-primary">スケジュール</span></h2>
      <p class="lead mb-32 text-white">3パート構成。<span class="hl">最後にあなたの動画が1本完成</span>している状態がゴール。</p>
      <div class="grid-3">
        <div class="card card--accent">
          <div class="pill pill--primary">午前</div>
          <div class="card-title mt-16">基礎＆環境構築</div>
          <div class="card-body">
            <span class="text-cyan bold">・</span> AIエージェント基礎<br/>
            <span class="text-cyan bold">・</span> Claude Code セットアップ<br/>
            <span class="text-cyan bold">・</span> ライセンス認証<br/>
            <span class="text-cyan bold">・</span> 音声操作 / SE設定<br/>
            <span class="text-cyan bold">・</span> Whisper 環境構築
          </div>
        </div>
        <div class="card card--warm">
          <div class="pill pill--cool">午後 前半</div>
          <div class="card-title mt-16">Blueprint 配布＆編集スタート</div>
          <div class="card-body">
            <span class="text-cyan bold">・</span> Blueprint 配布<br/>
            <span class="text-cyan bold">・</span> テスト動画で一通り体験<br/>
            <span class="text-cyan bold">・</span> step01〜09 をオートモードで<br/>
            <span class="text-cyan bold">・</span> AI が動画を組み立てる流れを体感
          </div>
        </div>
        <div class="card card--hot">
          <div class="pill pill--hot">午後 後半</div>
          <div class="card-title mt-16">ブラッシュアップ＆完成</div>
          <div class="card-body">
            <span class="text-cyan bold">・</span> 本番動画で再スタート<br/>
            <span class="text-cyan bold">・</span> プロファイルで自分の話し方学習<br/>
            <span class="text-cyan bold">・</span> デザインピッカーで自分色に<br/>
            <span class="text-cyan bold">・</span> <span class="hl">動画1本完成して持ち帰り</span>
          </div>
        </div>
      </div>
      <p class="lead mt-32" style="text-align:center;color:var(--ink-600)">途中で <span class="hl" style="color:var(--white)">ランチ休憩</span> を挟みます。終了後は <span class="hl" style="color:var(--white)">懇親会（任意参加）</span> を予定。</p>
    </div>
  </section>`;
}

// 03. AIが自動でやる6工程
function slide03Features() {
  return `<section class="slide" data-section="features"
    data-notes="naoki-blueprintが自動でやってくれることは6つ。これが従来の動画編集で外注していた作業すべてです。撮影したMP4をフォルダに入れるだけで、ここにある6工程が全部自動で走ります。レンダリング時には音量も-14 LUFSというYouTube標準に自動で揃えてくれます。">
    ${ph(3, 'What it does')}
    <div class="slide-content">
      <h2>AI が自動でやる<span class="g-primary">6つの工程</span></h2>
      <div class="grid-3">
        <div class="feature-tile"><div class="tile-num">01</div><div class="tile-title">無音＋言い直しカット</div><div class="tile-body">FFmpeg で沈黙区間と言い直しを一発削除<br/>音量ベースで発話末尾の切れ防止</div></div>
        <div class="feature-tile"><div class="tile-num">02</div><div class="tile-title">文字起こし</div><div class="tile-body">Speechmatics（enhanced）で word-level<br/>話者分離・台本照合で誤変換を自動修正</div></div>
        <div class="feature-tile"><div class="tile-num">03</div><div class="tile-title">テロップ＋SE 自動配置</div><div class="tile-body">発話の感情に応じてデザインを自動判定<br/>対応する SE フォルダから自動選択</div></div>
        <div class="feature-tile"><div class="tile-num">04</div><div class="tile-title">画像・動画挿入</div><div class="tile-body">グリーンバック置換 / デモ動画 /<br/>AI画像生成（Gemini）/ 感情ベース配置</div></div>
        <div class="feature-tile"><div class="tile-num">05</div><div class="tile-title">BGM 自動配置</div><div class="tile-body">単一 BGM / 区間切替（メイン/CTA/ED）<br/>フェードイン・アウト付き</div></div>
        <div class="feature-tile" style="border-color:rgba(236,72,153,0.4)"><div class="tile-num" style="background:var(--grad-warm);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">06</div><div class="tile-title">レンダリング</div><div class="tile-body">Remotion で MP4 書き出し<br/><span class="hl">-14 LUFS</span> に音量自動調整</div></div>
      </div>
      <p class="lead mt-32 text-white">これが、これまで <span class="hl">外注に出していた作業すべて</span>。</p>
    </div>
  </section>`;
}

// 04. 動画タイプ選択
function slide04TypeProject() {
  return `<section class="slide" data-section="type-project"
    data-notes="naoki-blueprintで作れる動画は2種類。YouTube用の横動画と、ショート向けの縦動画です。横動画は20ステップ、縦動画は14ステップで完成します。両方とも同じ仕組みで、最初に動画タイプを選ぶだけ。途中で切り替える必要はありません。">
    ${ph(4, 'Two video types')}
    <div class="slide-content">
      <h2>2種類の動画が作れる</h2>
      <div class="grid-2 mt-24">
        <div class="card card--accent">
          <div class="pill pill--primary mb-16">YouTube 横動画</div>
          <div class="card-title mt-16">1920×1080</div>
          <div class="card-body"><span class="hl">20ステップ</span><br/>OP・スライド・ワイプ・ハイライト対応<br/>長尺コンテンツ向け</div>
        </div>
        <div class="card card--hot">
          <div class="pill pill--hot mb-16">縦動画</div>
          <div class="card-title mt-16">1080×1920</div>
          <div class="card-body"><span class="hl">14ステップ</span><br/>テロップ重視で情報密度を優先<br/>YouTube Shorts / TikTok / Reels 対応</div>
        </div>
      </div>
      <p class="lead mt-48 text-white">プロジェクト作成時に <span class="hl">1 か 2 を選ぶだけ</span>。あとは同じワークフロー。</p>
    </div>
  </section>`;
}

// 05. 素材の配置
function slide05Assets() {
  return `<section class="slide" data-section="assets"
    data-notes="プロジェクトを作ったら、publicフォルダに素材をドラッグアンドドロップで入れていきます。必須なのは本編動画とBGMとSEの3つだけ。あとは作りたい動画に応じて任意のフォルダを使います。今日はテスト用の動画と本番用の動画、両方持ってきてもらっているので、まずテスト用の方をmain/に入れて練習し、午後後半で本番用に差し替えます。">
    ${ph(5, 'Project assets')}
    <div class="slide-content">
      <h2>素材を <code>public/</code> に置くだけ</h2>
      <div class="card card--hot mt-24">
        <div class="card-title">★ 必須の3フォルダ（これだけ揃えれば動く）</div>
        <div class="card-body">
          <span class="text-pink bold">videos/main/</span>　本編動画（撮影したMP4を入れる）<br/>
          <span class="text-pink bold">bgm/</span>　BGM音源（MP3）<br/>
          <span class="text-pink bold">se/</span>　SE効果音（強調 / ポジティブ / ネガティブ の3サブフォルダ）
        </div>
      </div>
      <h3 style="color:var(--ink-600);font-size:24px;margin-top:32px;letter-spacing:0.1em">任意のフォルダ（必要な演出だけ）</h3>
      <div class="grid-3 mt-16">
        <div class="card">
          <div class="card-title" style="font-size:22px">videos/inserts + overlays/</div>
          <div class="card-body" style="font-size:18px">デモ動画の物理挿入・上に重ね</div>
        </div>
        <div class="card">
          <div class="card-title" style="font-size:22px">videos/greenback/</div>
          <div class="card-body" style="font-size:18px">グリーンバック素材</div>
        </div>
        <div class="card">
          <div class="card-title" style="font-size:22px">videos/opening/</div>
          <div class="card-body" style="font-size:18px">OP動画（横動画のみ）</div>
        </div>
        <div class="card">
          <div class="card-title" style="font-size:22px">images/inserts + overlays/</div>
          <div class="card-body" style="font-size:18px">話者横 720×405・全画面画像</div>
        </div>
        <div class="card">
          <div class="card-title" style="font-size:22px">images/icon + endscreen/</div>
          <div class="card-body" style="font-size:18px">対談用 顔アイコン・エンド画面</div>
        </div>
        <div class="card">
          <div class="card-title" style="font-size:22px">script/</div>
          <div class="card-body" style="font-size:18px">ナレーション台本（推奨）</div>
        </div>
      </div>
    </div>
  </section>`;
}

// 06. オートモードで作業開始
function slide06Start() {
  return `<section class="slide" data-section="start"
    data-notes="作業はオートモードで進めます。プロジェクトフォルダに入ってClaude Codeを起動して、スラッシュコマンドでnew-videoと打つだけ。あとはAIが質問してくるので、答えるだけで20ステップが順番に進みます。途中で止めても大丈夫。次回再開した時はチェックポイントから続きを案内してくれます。">
    ${ph(6, 'Start with auto mode')}
    <div class="slide-content">
      <h2>オートモードで<span class="g-primary">作業スタート。</span></h2>
      <p class="lead mb-16">プロジェクトフォルダに <span class="hl">入ってから</span> Claude Code を起動。</p>
      <div class="code">cd projects/<span class="hi">2026-05-10</span>
claude --dangerously-skip-permissions
/new-video</div>
      <div class="grid-2 mt-32">
        <div class="card card--accent">
          <div class="card-title">🚀 質問に答えるだけ</div>
          <div class="card-body">AIが順番に質問してくるので答えるだけ。step01〜step20 が自動で進む。コマンドを覚える必要なし</div>
        </div>
        <div class="card card--warm">
          <div class="card-title">⏸ 中断しても大丈夫</div>
          <div class="card-body"><code>.auto-checkpoint.json</code> で進捗を保存。<code>/new-video resume</code> で続きから再開</div>
        </div>
      </div>
      <div class="card card--hot mt-32">
        <div class="card-title">⚠ 順番を間違えると…</div>
        <div class="card-body">naoki-blueprint ルートで先に Claude Code を立ち上げると <span class="bold text-white">cwd がズレて</span> 事故る。必ず <code>cd projects/XXX</code> してから <code>claude</code> を起動</div>
      </div>
    </div>
  </section>`;
}

// 07. 横動画 20ステップフルリスト
function slide07WorkflowLong() {
  return `<section class="slide" data-section="workflow-long"
    data-notes="横動画の全20ステップです。左半分のフェーズ1から2が下準備とテロップまで。文字起こしはSpeechmatics enhancedで、word-level精度に加えて話者分離も自動で入ります。右半分のフェーズ3から4で演出を載せていきます。step15の画像挿入はGemini APIでAI画像生成にも対応。step20でハイライト抽出して最終MP4が完成します。全部解説すると2時間かかるので、今日はこの一覧で全体像だけ掴んでください。">
    ${ph(7, 'YouTube / 20 steps')}
    <div class="slide-content">
      <h2>横動画 <span class="g-primary">20ステップ</span> フルリスト</h2>
      <div class="grid-2" style="gap:64px">
        <div class="phase-row">
          <div class="phase-title">Phase 1 / 2　素材準備＋構築</div>
          <div class="step-item">01. 方向性決定（context）</div>
          <div class="step-item">02. 素材確認（assets）</div>
          <div class="step-item">03. 文字起こし（Speechmatics）</div>
          <div class="step-item">04. 台本照合・誤変換修正</div>
          <div class="step-item">05. 無音＆言い直し自動カット</div>
          <div class="step-item">06. カット後の再文字起こし</div>
          <div class="step-item">07. テロップテンプレ設定</div>
          <div class="step-item">08. テロップ自動生成</div>
          <div class="step-item">09. コンポジション統合（Remotion）</div>
          <div class="step-item">10. グリーンバック処理</div>
        </div>
        <div class="phase-row">
          <div class="phase-title">Phase 3 / 4　演出＋出力</div>
          <div class="step-item">11. デモ動画挿入</div>
          <div class="step-item">12. HTMLスライド自動生成</div>
          <div class="step-item">13. スライドキャプチャ＋タイムライン</div>
          <div class="step-item">14. ワイプ位置自動調整</div>
          <div class="step-item">15. 画像挿入（Gemini API対応）</div>
          <div class="step-item">16. 表示パネル（CTA / 箇条書き等）</div>
          <div class="step-item">17. OP・エンドスクリーン連結</div>
          <div class="step-item">18. BGM挿入（区間切替対応）</div>
          <div class="step-item">19. 本編レンダリング</div>
          <div class="step-item">20. ハイライト抽出＋最終MP4</div>
        </div>
      </div>
    </div>
  </section>`;
}

// 08. 縦動画 14ステップフルリスト
function slide08WorkflowShort() {
  return `<section class="slide" data-section="workflow-short"
    data-notes="縦動画は14ステップ。縦動画は情報密度が詰まりすぎるので、スライドもワイプも削っています。1本60秒の動画なら1時間程度で作れます。横動画と同じくオートモードで全部進められます。">
    ${ph(8, 'Shorts / 14 steps')}
    <div class="slide-content">
      <h2>縦動画 <span class="g-warm">14ステップ</span> フルリスト</h2>
      <div class="grid-2" style="gap:64px">
        <div class="phase-row">
          <div class="phase-title">Phase 1 / 2　素材準備＋構築</div>
          <div class="step-item">01. 縦動画指定（context）</div>
          <div class="step-item">02. 素材確認（assets）</div>
          <div class="step-item">03. 文字起こし（Speechmatics）</div>
          <div class="step-item">04. 台本照合・誤変換修正</div>
          <div class="step-item">05. 無音＆言い直し自動カット</div>
          <div class="step-item">06. カット後の再文字起こし</div>
          <div class="step-item">07. テロップテンプレ設定</div>
          <div class="step-item">08. テロップ自動生成</div>
          <div class="step-item">09. 1080×1920 コンポジション</div>
        </div>
        <div class="phase-row">
          <div class="phase-title">Phase 3 / 4　演出＋出力</div>
          <div class="step-item">10. グリーンバック処理</div>
          <div class="step-item">11. デモ動画挿入</div>
          <div class="step-item">12. 画像挿入（Gemini API対応）</div>
          <div class="step-item">13. BGM挿入</div>
          <div class="step-item">14. 1080×1920 レンダリング</div>
        </div>
      </div>
    </div>
  </section>`;
}

// 09. Phase 1 素材準備
function slide09Phase1() {
  return `<section class="slide" data-section="phase1"
    data-notes="フェーズ1は素材準備。文字起こしから無音カットまで。文字起こしはSpeechmatics enhancedで、word-level精度に加えて話者分離も自動で入るので対談動画もOK。step05が終わるとRemotion Studioが自動で起動して、ブラウザでフレーム単位の確認ができるようになります。発話末尾がプツッと切れていないか、不自然な間がないか、耳と目で確認してください。気になったらブラウザのpicker-cutでドラッグ調整→保存するだけ。直接JSON編集も可能です。">
    ${ph(9, 'Phase 1 / Prep')}
    <div class="slide-content">
      <h2>Phase 1　<span class="g-primary">素材準備</span></h2>
      <div class="grid-2">
        <div class="card card--accent">
          <div class="card-title">step01〜02　準備</div>
          <div class="card-body">動画の目的・ターゲット確認。素材が揃っているか検証</div>
        </div>
        <div class="card card--accent">
          <div class="card-title">step03　文字起こし</div>
          <div class="card-body"><span class="text-cyan bold">Speechmatics（enhanced）</span>で word-level + <span class="hl">話者分離</span>。対談動画もOK</div>
        </div>
        <div class="card card--accent">
          <div class="card-title">step04　台本照合</div>
          <div class="card-body">台本と照合して誤変換を修正。固有名詞・数字を重点チェック</div>
        </div>
        <div class="card card--accent">
          <div class="card-title">step05〜06　一括カット</div>
          <div class="card-body">無音 + 言い直しを FFmpeg 一発エンコード。<span class="hl">音量ベースで前後に余韻</span>を残しプツッ防止。<code>picker-cut</code> で手動調整も可</div>
        </div>
      </div>
      <div class="card card--hot mt-32">
        <div class="card-title">🚀 Remotion Studio 自動起動</div>
        <div class="card-body"><code>step05</code> 完了時に <code>localhost:3000</code> で自動起動。<span class="hl">フレーム単位で精密確認</span> → 気になったら <code>transcript_fixed.json</code> 編集 → <code>/step05</code> 再実行</div>
      </div>
    </div>
  </section>`;
}

// 10. Phase 2 動画構築
function slide10Phase2() {
  return `<section class="slide" data-section="phase2"
    data-notes="フェーズ2は動画の骨格作り。テンプレート設定、テロップデータ作成、コンポジション統合の3ステップ。AIが発話の内容と感情を読んで、強調すべき言葉や数字を自動でキャッチして、それぞれに合うデザインを当てていきます。例えば数字+単位は金色のグラデ、ネガティブな言葉は明朝体の白文字、というように。受講生は判断する必要なし。">
    ${ph(10, 'Phase 2 / Build')}
    <div class="slide-content">
      <h2>Phase 2　<span class="g-primary">動画構築</span></h2>
      <div class="grid-3">
        <div class="card">
          <div class="card-title">step07　テンプレ</div>
          <div class="card-body">フォント・サイズ・色・SE を <code>templateConfig.ts</code> に定義</div>
        </div>
        <div class="card">
          <div class="card-title">step08　テロップ</div>
          <div class="card-body">transcript から<span class="bold text-white">一字一句</span>テロップ化。<span class="hl">AI が感情で自動判定</span></div>
        </div>
        <div class="card">
          <div class="card-title">step09　統合</div>
          <div class="card-body">MainComposition.tsx で動画 + テロップ + SE を統合。Studio 起動</div>
        </div>
      </div>
      <div class="card card--accent mt-32">
        <div class="card-title">🎨 テロップは「感情」で自動判定</div>
        <div class="card-body">
          <span class="text-cyan bold">・</span> <span class="bold text-white">数字+単位</span>（1,000万円・3倍・500人）→ 金グラデ強調<br/>
          <span class="text-cyan bold">・</span> <span class="bold text-white">ポジティブ強調</span>(最強・絶対・上達）→ 赤グラデ強調<br/>
          <span class="text-cyan bold">・</span> <span class="bold text-white">ネガティブ・警告</span>（注意・ダメ・失敗）→ 明朝白文字<br/>
          <span class="text-cyan bold">・</span> <span class="bold text-white">他者の発言</span>（口コミ・証言）→ <code>｢｣</code> 引用符付き<br/>
          <span class="text-cyan bold">・</span> 通常の発話 → 紺の通常テロップ（SEなし）
        </div>
      </div>
    </div>
  </section>`;
}

// 11. Phase 3 演出
function slide11Phase3() {
  return `<section class="slide" data-section="phase3"
    data-notes="フェーズ3は演出。ここから先は任意ステップなので、必要な要素だけ使ってもらえばOKです。グリーンバック置換は素人撮影の照明ムラにも対応する3段パイプラインを使っているので、緑が均一じゃなくても綺麗に抜けます。AI画像生成はGeminiで、step15が違反語を自動検出して安全な言い換えを提案してくれます。">
    ${ph(11, 'Phase 3 / Effects')}
    <div class="slide-content">
      <h2>Phase 3　<span class="g-primary">演出</span>　<span style="color:var(--ink-600);font-size:36px">必要な要素だけ使えばOK</span></h2>
      <div class="grid-2">
        <div class="card">
          <div class="card-title">step10　グリーンバック</div>
          <div class="card-body">クロマキー + rembg + despill の3段パイプライン。<span class="hl">素人撮影の照明ムラにも対応</span></div>
        </div>
        <div class="card">
          <div class="card-title">step11　デモ動画挿入</div>
          <div class="card-body">物理挿入（Series分割）と<br/>オーバーレイ（上に重ね）の2方式</div>
        </div>
        <div class="card">
          <div class="card-title">step12〜14　スライド・ワイプ</div>
          <div class="card-body">台本→HTMLスライド自動生成 → 4Kキャプチャ →<br/>動画にタイムライン配置 + ワイプ位置調整</div>
        </div>
        <div class="card card--warm">
          <div class="card-title">step15　AI画像挿入</div>
          <div class="card-body">Gemini で画像生成。<span class="hl">違反語を自動検出</span>して言い換え提案<br/>感情ベースで配置タイミング自動判定</div>
        </div>
      </div>
      <div class="card card--accent mt-32">
        <div class="card-title">step16〜17　仕上げ</div>
        <div class="card-body">箇条書き・CTA・見出しバナー・テーマテロップ → OP/ED 連結で Final Composition 構築</div>
      </div>
    </div>
  </section>`;
}

// 12. Phase 4 BGM・出力
function slide12Phase4() {
  return `<section class="slide" data-section="phase4"
    data-notes="最後のフェーズはBGM・出力・ハイライト。レンダリング時に音量を-14 LUFSというYouTube・TikTok・X共通基準に自動で揃えてくれます。声・SE・BGMのバランスは崩さずに全体音量だけ揃える二段階loudnormを使っています。本編が完成したら、step20でハイライト動画を別途自動生成できます。">
    ${ph(12, 'Phase 4 / Output')}
    <div class="slide-content">
      <h2>Phase 4　<span class="g-primary">BGM・出力</span></h2>
      <div class="grid-2">
        <div class="card card--accent">
          <div class="card-title">step18　BGM 挿入</div>
          <div class="card-body">単一 BGM / 区間切替（メイン・CTA・ED）<br/>フェードイン / アウト付き<br/>足りない場合はループ再生</div>
        </div>
        <div class="card card--hot">
          <div class="card-title">step19　最終レンダリング</div>
          <div class="card-body">Remotion で MP4 書き出し<br/>横: 1920×1080 / 縦: 1080×1920<br/>FPS は元動画から自動検出</div>
        </div>
      </div>
      <div class="card card--warm mt-32">
        <div class="card-title">🔊 ラウドネス正規化</div>
        <div class="card-body"><span class="hl">-14 LUFS / -1 dBTP / LRA 11</span>　YouTube/TikTok/X 共通基準に自動で揃える。声・SE・BGMのバランスは崩さない二段階loudnorm</div>
      </div>
      <div class="card card--accent mt-32">
        <div class="card-title">step20　ハイライト動画（任意）</div>
        <div class="card-body">本編 MP4 からハイライト範囲を自動抽出 → 冒頭に連結して再レンダリング</div>
      </div>
    </div>
  </section>`;
}

// 13. カットピッカー（看板機能① / 4 of 4）
function slide13PickerCut() {
  return `<section class="slide" data-section="picker-cut"
    data-notes="ここからnaoki-blueprintの看板機能、4種のピッカーを1つずつ紹介します。1つ目はカットピッカー。step05のしきい値調整UIで、AIが切った無音区間と言い直しを、ブラウザのタイムラインで波形を見ながらドラッグで微調整できます。気になったカットだけ手動で残す・追加カットする、を直感的に。npm run cut で起動。">
    ${ph(13, 'Killer feature ① / Cut Picker')}
    <div class="picker-page">
      <header class="picker-head">
        <div class="tag" style="color:#22d3ee">🎨 看板機能 ①　4種のピッカー　<span style="color:var(--ink-600);font-weight:500">1 / 4</span></div>
        <h2 class="mt-8"><span class="picker-num-big">①</span> <span class="g-primary">カットピッカー</span> <span class="picker-step-big">/ step05</span></h2>
        <p class="picker-lede">無音・言い直しカットを <span class="hl">波形を見ながらドラッグ調整</span>。 <code>npm run cut</code></p>
      </header>
      <img src="assets/pickers/02-picker-cut.png" alt="カットピッカー" class="picker-fullshot" />
    </div>
  </section>`;
}

// 14. デザインピッカー（看板機能① / 2 of 4）
function slide14PickerDesign() {
  return `<section class="slide" data-section="picker-design"
    data-notes="2つ目はデザインピッカー。step07のテロップテンプレ設定UIで、テロップごとにフォント、色、SEフォルダ、アニメーションをクリックで切り替えられます。テンプレ単位でON/OFFもできるので、自分の動画に必要なテロップだけ使う設定にできます。コードを一切触らない。node picker/server.mjs で起動。">
    ${ph(14, 'Killer feature ① / Design Picker')}
    <div class="picker-page">
      <header class="picker-head">
        <div class="tag" style="color:#22d3ee">🎨 看板機能 ①　4種のピッカー　<span style="color:var(--ink-600);font-weight:500">2 / 4</span></div>
        <h2 class="mt-8"><span class="picker-num-big">②</span> <span class="g-primary">デザインピッカー</span> <span class="picker-step-big">/ step07</span></h2>
        <p class="picker-lede">テロップの <span class="hl">フォント・色・SE・アニメ</span> をクリックで切替。 <code>node picker/server.mjs</code></p>
      </header>
      <img src="assets/pickers/01-design-picker.png" alt="デザインピッカー" class="picker-fullshot" />
    </div>
  </section>`;
}

// 15. テロップピッカー（看板機能① / 3 of 4）
function slide15PickerTelop() {
  return `<section class="slide" data-section="picker-telop"
    data-notes="3つ目はテロップピッカー。step08以降で、テロップの文字とタイミングをブラウザで編集できます。読み間違いの修正、ニュアンス変更、表示時間の調整がドラッグとクリックで完結。文字数上限超過は赤バナーで該当エントリに即遷移できます。npm run telop で起動。">
    ${ph(15, 'Killer feature ① / Telop Picker')}
    <div class="picker-page">
      <header class="picker-head">
        <div class="tag" style="color:#22d3ee">🎨 看板機能 ①　4種のピッカー　<span style="color:var(--ink-600);font-weight:500">3 / 4</span></div>
        <h2 class="mt-8"><span class="picker-num-big">③</span> <span class="g-primary">テロップピッカー</span> <span class="picker-step-big">/ step08〜</span></h2>
        <p class="picker-lede">テロップの <span class="hl">文字 + タイミング</span> をブラウザで編集。 <code>npm run telop</code></p>
      </header>
      <img src="assets/pickers/03-picker-telop.png" alt="テロップピッカー" class="picker-fullshot" />
    </div>
  </section>`;
}

// 16. スライドピッカー（看板機能① / 4 of 4）
function slide16PickerSlide() {
  return `<section class="slide" data-section="picker-slide"
    data-notes="4つ目はスライドピッカー。step12でHTMLスライドを生成した後、色・フォント・サイズをスライダーとカラーピッカーで微調整できます。5ダーク・5ライトのプリセット切替、スライド単位の個別編集も可能。npm run slide-picker で起動。これがv2.24で追加された最新機能です。">
    ${ph(16, 'Killer feature ① / Slide Picker')}
    <div class="picker-page">
      <header class="picker-head">
        <div class="tag" style="color:#22d3ee">🎨 看板機能 ①　4種のピッカー　<span style="color:var(--ink-600);font-weight:500">4 / 4</span></div>
        <h2 class="mt-8"><span class="picker-num-big">④</span> <span class="g-primary">スライドピッカー</span> <span class="picker-step-big">/ step12</span></h2>
        <p class="picker-lede">HTMLスライドの <span class="hl">色・フォント・サイズ</span> をUI調整。 <code>npm run slide-picker</code></p>
      </header>
      <img src="assets/pickers/04-slide-picker.png" alt="スライドピッカー" class="picker-fullshot" />
    </div>
  </section>`;
}

// 17. プロファイル（看板機能②）
function slide17Profile() {
  return `<section class="slide" data-section="profile"
    data-notes="2つ目の看板機能はプロファイル。これが他のAI動画編集ツールにない、naoki-blueprint最大の差別化ポイントです。あなたのNGワード、口癖、専門用語、テロップの好みを一度プロファイルファイルに書いておけば、全ての動画で自動反映されます。動画ごとに毎回教え直す必要なし。動画を作るたびに「次回もこのスタイルで」と確認されて、yesと答えればプロファイルに自動追記されていきます。使えば使うほど、あなた専用のAI編集者に育っていきます。">
    ${ph(17, 'Killer feature ②')}
    <div class="slide-content">
      <div class="tag" style="color:#fbbf24">📝 看板機能 ②</div>
      <h2 class="mt-16"><span class="g-warm">プロファイル</span> で「あなた専用」に育てる</h2>
      <div class="card card--warm mt-32">
        <div class="card-title">⚠ 他のAI動画編集ツールとの最大の違い</div>
        <div class="card-body">普通は<span class="bold text-white">動画ごとに毎回</span>「私はこういう話し方をします」「この言葉は使わないで」と教え直す必要がある。naoki-blueprint は <span class="hl">一度プロファイルに書けば全動画で自動反映</span>。</div>
      </div>
      <div class="grid-2 mt-32">
        <div class="card card--accent">
          <div class="card-title">プロファイルに書く内容</div>
          <div class="card-body">
            <span class="text-cyan bold">・</span> NGワード（使わせない言葉）<br/>
            <span class="text-cyan bold">・</span> 口癖・好む表現<br/>
            <span class="text-cyan bold">・</span> 専門用語の正しい表記<br/>
            <span class="text-cyan bold">・</span> テロップの好み（強調の頻度・スタイル）<br/>
            <span class="text-cyan bold">・</span> カテゴリ別に複数プロファイル可（戦術解説 / 試合実況 等）
          </div>
        </div>
        <div class="card card--hot">
          <div class="card-title">勝手に育つ仕組み</div>
          <div class="card-body">
            動画作成中に「この強調は赤じゃなく金で」と指示<br/>
            → 動画完成時に <span class="hl">「次回もこのスタイルで？」</span> と確認<br/>
            → yes ならプロファイルに自動追記<br/>
            <br/>
            <span class="bold text-white">使うほどあなた専用に育つ</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// 18. 編集者向けの強化機能（v2.20〜v2.26）
function slide18PowerTools() {
  return `<section class="slide" data-section="power-tools"
    data-notes="ピッカーとプロファイル以外にも、編集者目線で「これ欲しかった」という機能が最近4つ追加されました。1つ目はテロップの2行表示。長い発言を綺麗に2行で見せられます。横もショートも対応。2つ目はTextEditベースのテロップ校閲。テロップ全件をテキストファイルに書き出して、TextEditで一気通読・修正→反映できます。Mac標準アプリで快適。3つ目はライセンス認証の自動リカバリ。fingerprint衝突や別PC移行で詰まっても、勝手に修復してくれます。4つ目は/new-video起動時の強制アップデート。修正直後のバグが残ったまま動画作るリスクを構造的に防ぎます。">
    ${ph(18, 'Power tools')}
    <div class="slide-content">
      <div class="tag" style="color:#fbbf24">✨ 編集者向け強化機能（v2.20〜v2.26）</div>
      <h2 class="mt-16"><span class="g-warm">これ欲しかった</span> を最近実装</h2>
      <div class="grid-2 mt-32">
        <div class="card card--accent">
          <div class="card-title">📝 テロップ 2 行表示（<code>\\n</code>）</div>
          <div class="card-body">長い発言を<span class="hl">綺麗に 2 行</span>で見せられる<br/>横版（v2.25）・ショート版（v2.26）両対応<br/>1 行 = 1 SVG 方式で各行のグラデが独立</div>
        </div>
        <div class="card card--accent">
          <div class="card-title">📄 TextEdit ベースのテロップ校閲</div>
          <div class="card-body">全テロップを <code>telop-review.txt</code> に書き出し<br/>TextEdit で<span class="hl">一気通読・修正</span> → 反映<br/><code>npm run telop-export</code> / <code>telop-apply</code></div>
        </div>
        <div class="card card--hot">
          <div class="card-title">🔐 ライセンス認証の自動リカバリ</div>
          <div class="card-body">fingerprint 衝突・別 PC 移行で詰まっても<br/><span class="hl">勝手に修復</span>してくれる（v2.20〜）<br/>困ったら <code>/fix-license</code></div>
        </div>
        <div class="card card--hot">
          <div class="card-title">🔄 /new-video 時の強制アップデート</div>
          <div class="card-body">作業開始時に<span class="hl">必ず最新版</span>へ同期<br/>修正直後のバグを残したまま編集するリスクを根絶（v2.23.2）</div>
        </div>
      </div>
    </div>
  </section>`;
}

// 19. 2本目以降は /new-video のみ
function slide19SecondVideo() {
  return `<section class="slide" data-section="second"
    data-notes="2本目以降はもっとシンプル。ライセンス認証は今日のうちに済ませるので、明日以降は naoki-blueprint フォルダで claude を起動して、スラッシュコマンドの new-video を打つだけ。プロジェクト作成からオートモード進行まで、これ1つで全部やってくれます。今日のセミナーが終わったら、まず家に帰って2本目を作ってみてください。">
    ${ph(19, 'For next videos')}
    <div class="slide-content">
      <h2>2本目以降は、<span class="g-primary">1コマンドだけ。</span></h2>
      <p class="lead mb-24">ライセンス認証は今日で完了。明日以降は <span class="hl">naoki-blueprint フォルダで</span>:</p>
      <div class="code">
<span class="cmt"># naoki-blueprint フォルダで Claude Code を起動して</span>
claude --dangerously-skip-permissions

<span class="cmt"># そのまま new-video コマンドを打つだけ</span>
/new-video</div>
      <div class="grid-2 mt-32">
        <div class="card card--accent">
          <div class="card-title">/new-video が全部やる</div>
          <div class="card-body">プロジェクト名と動画タイプを聞かれる → フォルダ自動作成 → そのままオートモードで step01 へ進む</div>
        </div>
        <div class="card card--warm">
          <div class="card-title">途中で止めても安心</div>
          <div class="card-body">チェックポイントが自動保存される。次回 <code>/new-video resume</code> で続きから再開</div>
        </div>
      </div>
      <p class="lead mt-32 text-white">あとは <span class="hl">質問に答えるだけ</span>。コマンドを覚える必要なし。</p>
    </div>
  </section>`;
}

// 20. サポート体制
function slide20Support() {
  return `<section class="slide" data-section="support"
    data-notes="今日で終わりじゃありません。Chatworkのグループで1ヶ月間、私が直接お応えします。エラーが出た時、2本目を作る時の質問、何でも聞いてください。1ヶ月経過後は個別でご案内します。">
    ${ph(20, 'Support')}
    <div class="slide-content" style="align-items:center;text-align:center">
      <h2 style="text-align:center">サポート窓口</h2>
      <div class="pill pill--primary" style="margin-bottom:40px">Chatwork グループ</div>
      <div style="display:flex;align-items:baseline;gap:24px;justify-content:center">
        <span class="g-primary" style="font-family:var(--font-num);font-size:220px;font-weight:800;letter-spacing:-0.04em;line-height:1">1</span>
        <span style="font-size:64px;font-weight:700;color:var(--white)">ヶ月間</span>
      </div>
      <p class="lead" style="text-align:center;max-width:1200px;margin-top:48px">
        参加者専用の Chatwork グループで、質問・相談いつでもOK。<br/>
        本セミナーから<span class="hl">1ヶ月間</span>は私が直接お応えします。
      </p>
      <p style="text-align:center;font-size:24px;color:var(--ink-600);margin-top:32px">1ヶ月経過後は個別にご案内させていただきます</p>
    </div>
  </section>`;
}

// 21. クロージング
function slide21Closing() {
  return `<section class="slide hero-slide anim-fade-up" data-section="closing" data-anim-fixed
    data-notes="最後まで参加いただきありがとうございました。今日学んだことを使って、ぜひ動画制作を習慣にしてください。自動化で浮いた時間で、次のコンテンツを作る。これが正しい使い方です。また次のセミナーでお会いしましょう。">
    <div class="hero">
      <div class="hero-tag">Thank you for joining</div>
      <h1 class="hero-title">動画制作を、<br/><span class="em-warm">習慣に。</span></h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">自動化で浮いた時間で、次のコンテンツを作ろう。<br/>また次のセミナーで会いましょう。</p>
      <div class="hero-meta">Naoki  /  AI × Video Editing</div>
      <div class="big-index">21</div>
    </div>
  </section>`;
}

// === Register ===
window.slideFactories = [
  slide01Cover,
  slide02Schedule,
  slide03Features,
  slide04TypeProject,
  slide05Assets,
  slide06Start,
  slide07WorkflowLong,
  slide08WorkflowShort,
  slide09Phase1,
  slide10Phase2,
  slide11Phase3,
  slide12Phase4,
  slide13PickerCut,
  slide14PickerDesign,
  slide15PickerTelop,
  slide16PickerSlide,
  slide17Profile,
  slide18PowerTools,
  slide19SecondVideo,
  slide20Support,
  slide21Closing
];

window.agendaItems = [
  { id: 'cover', label: '表紙' },
  { id: 'schedule', label: '今日のスケジュール' },
  { id: 'features', label: 'AIが自動でやる6工程' },
  { id: 'type-project', label: '横/縦の2種類' },
  { id: 'assets', label: '素材の配置' },
  { id: 'start', label: 'オートモード作業開始' },
  { id: 'workflow-long', label: '横動画 20ステップ' },
  { id: 'workflow-short', label: 'ショート 14ステップ' },
  { id: 'phase1', label: 'Phase 1 / 素材準備' },
  { id: 'phase2', label: 'Phase 2 / 動画構築' },
  { id: 'phase3', label: 'Phase 3 / 演出' },
  { id: 'phase4', label: 'Phase 4 / BGM・出力' },
  { id: 'picker-cut', label: '🎨 ① カットピッカー' },
  { id: 'picker-design', label: '🎨 ② デザインピッカー' },
  { id: 'picker-telop', label: '🎨 ③ テロップピッカー' },
  { id: 'picker-slide', label: '🎨 ④ スライドピッカー' },
  { id: 'profile', label: '📝 プロファイル' },
  { id: 'power-tools', label: '✨ 編集者向け強化機能' },
  { id: 'second', label: '2本目以降' },
  { id: 'support', label: 'サポート窓口' },
  { id: 'closing', label: 'クロージング' }
];
