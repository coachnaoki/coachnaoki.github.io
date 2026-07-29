// ================================================
// naoki-blueprint v2 への追い上げアップデート Slides
// For v1 users (2026-05-15)
// ================================================

const T = 18;

function ph(num, tag) {
  return `<div class="page-header"><span class="chapter">${tag}</span></div>`;
}

// 01. 表紙
function slide01Cover() {
  return `<section class="slide hero-slide anim-blur-in" data-section="cover" data-anim-fixed
    data-notes="v1 のままになっている方へ。今日はかなり重要な話をします。v2 はもう、v1 の別ソフトです。何がそんなに変わったのか、10 個まとめてご紹介します。最後にアップデート方法も書いてあります。3 分で読み終わります。">
    <div class="hero">
      <div class="hero-tag">naoki-blueprint v2 / Update Announcement</div>
      <h1 class="hero-title">Blueprint v2<br/><span class="em-warm">10大アップデートのお知らせ</span></h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">v1 のまま、になっていませんか？<br/>v2 はもう、v1 の別ソフトです。3 分でご紹介します。</p>
      <div class="hero-meta">Naoki  /  naoki-blueprint</div>
      <div class="big-index">01</div>
    </div>
  </section>`;
}

// 02. 目次 — 10 大アップデートの全体像
function slide02Contents() {
  return `<section class="slide" data-section="contents"
    data-notes="まず全体像をお見せします。10 大アップデートは大きく 4 つのカテゴリに分かれます。編集 UX、AI 精度、新ユースケース、自動化スピード。それぞれ 2〜3 個の機能で構成されていて、合計で 10 個。これからこの順番でご紹介していきます。">
    ${ph(2, 'Contents')}
    <div class="slide-content">
      <h2>目次 — <span class="g-primary">10 大アップデート</span></h2>
      <p class="lead mb-32 text-white">4 カテゴリ × 10 機能で、<span class="hl">v2 はもう別ソフトに。</span></p>
      <div class="grid-2">
        <div class="card card--accent">
          <div class="pill pill--primary">Chapter 1</div>
          <div class="card-title mt-16">編集 UX が爆速に</div>
          <div class="card-body">
            <span class="text-cyan bold">01</span> カットピッカー<br/>
            <span class="text-cyan bold">02</span> デザインピッカー<br/>
            <span class="text-cyan bold">03</span> テロップピッカー
          </div>
        </div>
        <div class="card" style="border-color:rgba(34,211,238,0.5);background:linear-gradient(180deg,rgba(34,211,238,0.06),rgba(59,130,246,0.03))">
          <div class="pill pill--cool">Chapter 2</div>
          <div class="card-title mt-16">AI 精度がプロ水準</div>
          <div class="card-body">
            <span class="text-cyan bold">04</span> 言い直しカット精度向上<br/>
            <span class="text-cyan bold">05</span> AI スライド動的生成
          </div>
        </div>
        <div class="card" style="border-color:rgba(163,230,53,0.5);background:linear-gradient(180deg,rgba(163,230,53,0.06),rgba(34,211,238,0.03))">
          <div class="pill" style="background:linear-gradient(135deg,var(--lime),var(--cyan));color:#0a0a0c">Chapter 3</div>
          <div class="card-title mt-16">新しいユースケース</div>
          <div class="card-body">
            <span class="text-cyan bold">06</span> 対談動画対応<br/>
            <span class="text-cyan bold">07</span> 音声のみ動画化
          </div>
        </div>
        <div class="card card--warm">
          <div class="pill" style="background:linear-gradient(135deg,var(--gold),var(--orange));color:#0a0a0c">Chapter 4</div>
          <div class="card-title mt-16">自動化・スピード</div>
          <div class="card-body">
            <span class="text-cyan bold">08</span> オートモード (プロファイル)<br/>
            <span class="text-cyan bold">09</span> HW エンコード/デコード<br/>
            <span class="text-cyan bold">10</span> Google 認証 2 台対応
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// 03. 問題提起 — v2 は別ソフト
function slide02Statement() {
  return `<section class="slide" data-section="statement"
    data-notes="正直に言います。v1 と v2、別ソフトです。受講生から「v2 触ったら戻れない」 と言われるくらい変わりました。何がそんなに変わったのか、これから 1 つずつご紹介していきます。">
    ${ph(2, 'The big picture')}
    <div class="slide-content" style="justify-content:center;align-items:center;text-align:center">
      <p class="lead" style="color:var(--ink-600);font-size:32px;letter-spacing:0.12em;margin-bottom:32px">正直に言います。</p>
      <h2 style="font-size:110px;line-height:1.25;text-align:center">v1 と v2 は<br/><span class="g-warm">もう、別ソフト。</span></h2>
      <p class="lead mt-48" style="text-align:center;max-width:1200px;font-size:30px">
        受講生から <span class="hl">「v2 触ったら、もう v1 には戻れない」</span> と言われるくらい、<br/>
        中身が入れ替わりました。
      </p>
      <p class="lead mt-32" style="text-align:center;color:var(--ink-600)">何が変わったのか、10 個まとめます。</p>
    </div>
  </section>`;
}

// 03. 章: 編集 UX
function slide03Chapter1() {
  return `<section class="slide hero-slide anim-fade-up" data-section="chapter-1" data-anim-fixed
    data-notes="まず編集 UX、つまり日々の編集作業そのものが、別次元のスピードになりました。3 つのピッカーが、これまでコードを開かないと出来なかった作業を、すべてブラウザ上で完結させます。">
    <div class="hero">
      <div class="hero-tag">Chapter 1 / 4</div>
      <h1 class="hero-title">編集 UX が、<br/><span class="em">爆速になりました。</span></h1>
      <div class="hero-rule"></div>
      <p class="hero-subtitle">3 つのピッカーで、すべての編集作業をブラウザ上で完結。<br/>コードファイルを開く必要が、なくなりました。</p>
      <div class="big-index">01</div>
    </div>
  </section>`;
}

// 04. テロップピッカー (NEW)
function slide04Picker1Telop() {
  return `<section class="slide" data-section="picker-telop"
    data-notes="まず今日リリースしたばかりの目玉、テロップピッカーです。ブラウザ上にタイムラインが出て、テロップを 1 つ 1 つドラッグで動かせます。テロップの位置、文字、テンプレートを編集できます。これまで telopData.ts を手で書き換えていた作業が、全部マウス操作で済みます。">
    ${ph(6, '#03 Telop Picker — NEW')}
    <div class="slide-content">
      <div class="pill pill--primary" style="background:linear-gradient(135deg,var(--gold),var(--orange));color:#0a0a0c">v2.14.0 リリース</div>
      <h2 class="mt-24">テロップピッカー</h2>
      <p class="lead mb-32 text-white">ブラウザ上で、<span class="hl">テロップの位置・文字・テンプレを一気に編集。</span></p>
      <div class="grid-3">
        <div class="card card--accent">
          <div class="card-title">タイムライン</div>
          <div class="card-body">
            横スクロールで全テロップを一覧。<br/>
            波形の上にバーで配置。<br/>
            <span class="text-cyan bold">ドラッグでタイミング調整</span>
          </div>
        </div>
        <div class="card card--warm">
          <div class="card-title">テキスト編集</div>
          <div class="card-body">
            ダブルクリックで <span class="hl">その場で文字編集</span>。<br/>
            文字数オーバーは即時警告。<br/>
            テンプレも日本語名 + プレビューで選択
          </div>
        </div>
        <div class="card card--hot">
          <div class="card-title">分割 / 結合 / 削除</div>
          <div class="card-body">
            長い文を 2 つに分割。<br/>
            細切れを 1 つに結合。<br/>
            <span class="bold text-white">Undo (50 履歴) 完備</span>
          </div>
        </div>
      </div>
      <p class="lead mt-32 text-white"><code>npm run telop</code> で起動。<span class="hl">ブラウザだけで、テロップ作業完結。</span></p>
    </div>
  </section>`;
}

// 05. カットピッカー
function slide05Picker2Cut() {
  return `<section class="slide" data-section="picker-cut"
    data-notes="2 つ目はカットピッカー。step05 のカット作業がブラウザ上で完結します。音声の波形が見えるので、無音の境界、言い直しの境界が一目で分かります。気に入らないところはドラッグでスライダーを動かすだけ。波形ベースで、編集ソフト並みの操作感を Claude Code の中に持ち込みました。">
    ${ph(4, '#01 Cut Picker')}
    <div class="slide-content">
      <div class="pill pill--cool">v2.12.0+</div>
      <h2 class="mt-24">カットピッカー</h2>
      <p class="lead mb-32 text-white">波形を見ながら、<span class="hl">無音・言い直しの境界をドラッグで調整。</span></p>
      <div class="grid-3">
        <div class="card card--accent">
          <div class="card-title">波形で見える</div>
          <div class="card-body">
            元動画の音声を波形表示。<br/>
            <span class="text-cyan bold">どこが無音か、一目で分かる</span>
          </div>
        </div>
        <div class="card card--warm">
          <div class="card-title">境界ドラッグ</div>
          <div class="card-body">
            カット範囲の端をマウスで掴んで動かす。<br/>
            <span class="hl">語尾の切れ防止</span> も手動で微調整
          </div>
        </div>
        <div class="card card--hot">
          <div class="card-title">即時再分析</div>
          <div class="card-body">
            スライダーでしきい値変更 →<br/>
            <span class="bold text-white">即座に再カット結果</span>
          </div>
        </div>
      </div>
      <p class="lead mt-32" style="color:var(--ink-700)">削除区間スキップ再生で、<span class="hl">カット後の動画</span> を確認しながら調整できます。</p>
    </div>
  </section>`;
}

// 06. デザインピッカー
function slide06Picker3Design() {
  return `<section class="slide" data-section="picker-design"
    data-notes="3 つ目はデザインピッカー。テロップの色バリエーションを切り替えるツールです。例えば normal の文字色を紺から黒に、emphasis の縁取りを赤からゴールドに、といった色違いをブラウザでサクッと選べます。動画ごとに雰囲気を変えたい時に便利です。">
    ${ph(5, '#02 Design Picker')}
    <div class="slide-content">
      <div class="pill pill--primary">v2.9.0+</div>
      <h2 class="mt-24">デザインピッカー</h2>
      <p class="lead mb-32 text-white">テロップの<span class="hl">色バリエーションをサクッと切替。</span></p>
      <div class="grid-2 mt-24">
        <div class="card card--accent">
          <div class="card-title">テンプレ別カラー</div>
          <div class="card-body">
            normal は紺 / 黒 / 茶 / 緑<br/>
            emphasis は赤グラデ / 金グラデ / 青グラデ<br/>
            <span class="text-cyan bold">動画ごとに雰囲気を変えられる</span>
          </div>
        </div>
        <div class="card card--warm">
          <div class="card-title">プレビュー即反映</div>
          <div class="card-body">
            選んだ瞬間に Remotion Studio に反映。<br/>
            気に入らなければ別バリアントへ。<br/>
            <span class="hl">色合わせの試行錯誤がゼロに</span>
          </div>
        </div>
      </div>
      <p class="lead mt-32 text-white" style="text-align:center">3 つのピッカーで、<span class="hl">動画編集の手作業はほぼ消滅。</span></p>
    </div>
  </section>`;
}

// 07. 章: AI 精度
function slide07Chapter2() {
  return `<section class="slide hero-slide anim-fade-up" data-section="chapter-2" data-anim-fixed
    data-notes="次は AI の精度。文字起こしの精度、スライドの自動生成。この 2 つが、v1 とは比較にならないレベルまで進化しました。">
    <div class="hero">
      <div class="hero-tag" style="background:var(--grad-cool);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">Chapter 2 / 4</div>
      <h1 class="hero-title">AI の精度が、<br/><span style="background:var(--grad-cool);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">プロ水準に。</span></h1>
      <div class="hero-rule" style="background:var(--grad-cool)"></div>
      <p class="hero-subtitle">文字起こし精度。スライド自動生成。<br/>どちらも、別物に進化しました。</p>
      <div class="big-index">02</div>
    </div>
  </section>`;
}

// 08. 言い直しカット精度向上 (Speechmatics)
function slide08AsrUpgrade() {
  return `<section class="slide" data-section="asr"
    data-notes="文字起こしエンジンを Whisper から Speechmatics に完全移行しました。理由はシンプルです。Whisper は smoothing といって、明確に言い直した発話を、smooth に綺麗な文章として整形してしまうクセがあります。たとえば 「テロップを、 あ、 テロップを設置します」 と言い直した時に、 Whisper は 「テロップを設置します」 とだけ書き起こす。 これだと言い直しカット機能が動きません。 Speechmatics は verbatim で 「テロップを、 あ、 テロップを設置します」 とそのまま残してくれるので、 言い直しカットがちゃんと機能するようになりました。 利用には Speechmatics API キーの取得をお願いします。 新規登録で 25 ドル分のクレジットが付与されるので (2026年8月〜の新体系・約62時間分)、 普通の使い方なら数年単位で追加費用はかかりません。">
    ${ph(8, '#04 ASR Upgrade')}
    <div class="slide-content">
      <div class="pill pill--cool">v2.13.0</div>
      <h2 class="mt-24">言い直しカット精度が、<span class="g-cool">劇的に向上。</span></h2>
      <p class="lead mb-32 text-white">Whisper → <span class="hl">Speechmatics に完全移行。</span></p>
      <div class="grid-2 mt-16">
        <div class="card" style="border-color:rgba(239,68,68,0.4)">
          <div class="pill" style="background:var(--red);color:#fff">Before: Whisper</div>
          <div class="card-title mt-16">smoothing で言い直しが消える</div>
          <div class="card-body">
            明確に言い直した発話を <span style="color:var(--red);font-weight:700">綺麗な文章に整形</span>。<br/>
            <code>「テロップを、あ、テロップを設置」</code><br/>
            ↓<br/>
            <code>「テロップを設置」</code> しか残らない →<br/>
            <span class="bold" style="color:var(--red)">言い直しカット機能が動かない</span>
          </div>
        </div>
        <div class="card card--accent" style="border-color:rgba(34,211,238,0.5)">
          <div class="pill pill--cool">After: Speechmatics</div>
          <div class="card-title mt-16">verbatim で発話そのまま</div>
          <div class="card-body">
            明確な言い直しを <span class="hl">そのまま全部書き起こす</span>。<br/>
            <code>「テロップを、あ、テロップを設置」</code><br/>
            ↓<br/>
            <code>そのまま記録</code> される →<br/>
            <span class="bold text-white">言い直しカット検出の精度が桁違い</span>
          </div>
        </div>
      </div>
      <p class="lead mt-32 text-white" style="text-align:center">利用には <span class="hl">Speechmatics API キーの取得</span> をお願いします<br/><span style="color:var(--ink-600);font-size:24px">新規登録で $25 分のクレジット付与 (2026年8月〜・約62時間分) ・ 消費後は従量課金</span></p>
    </div>
  </section>`;
}

// 09. AI スライド動的生成
function slide09SlideAi() {
  return `<section class="slide" data-section="slide-ai"
    data-notes="動画内に挿入するスライドは、v1 では 17 種類の固定テンプレートから選ぶ方式でした。v2 では完全廃止。Claude が動画のターゲットとトンマナを読んで、その場でデザインを判断します。テニス中級者向けなら落ち着いた配色、初心者向けなら明るい配色、といった具合に自動で変わります。">
    ${ph(9, '#05 AI Slide Generator')}
    <div class="slide-content">
      <div class="pill pill--primary">v2.0+</div>
      <h2 class="mt-24">AI スライドが、<span class="g-primary">動的生成に。</span></h2>
      <p class="lead mb-32 text-white">17 テンプレ固定方式は<span class="hl">廃止。</span></p>
      <div class="grid-2">
        <div class="card">
          <div class="pill" style="background:var(--ink-400)">Before</div>
          <div class="card-title mt-16">17 テンプレから選ぶ</div>
          <div class="card-body">
            動画ごとにどれを使うか考える。<br/>
            合うテンプレが無ければ妥協。<br/>
            <span style="color:var(--ink-600)">設計の自由度ゼロ</span>
          </div>
        </div>
        <div class="card card--accent">
          <div class="pill pill--primary">After</div>
          <div class="card-title mt-16">Claude が都度デザイン</div>
          <div class="card-body">
            ターゲット・トンマナを読んで判断。<br/>
            配色・レイアウト・フォントを自動選定。<br/>
            <span class="hl">動画ごとに最適化された 1 枚</span>
          </div>
        </div>
      </div>
      <p class="lead mt-32" style="text-align:center;color:var(--ink-700)">スマホ縦画面前提の<span class="hl">視認性ガイド</span> (最低 40px / 本文 2 行) も完全準拠。</p>
    </div>
  </section>`;
}

// 10. 章: 新しいユースケース
function slide10Chapter3() {
  const grad = 'linear-gradient(135deg, var(--lime), var(--cyan))';
  return `<section class="slide hero-slide anim-fade-up" data-section="chapter-3" data-anim-fixed
    data-notes="3 つ目の章は、これまで作れなかった動画タイプが作れるようになりました、という話です。対談動画と、音声だけからの動画化。この 2 つで naoki-blueprint の用途がガラッと広がります。">
    <div class="hero">
      <div class="hero-tag" style="background:${grad};-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">Chapter 3 / 4</div>
      <h1 class="hero-title">新しい動画タイプが、<br/><span style="background:${grad};-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">作れるようになりました。</span></h1>
      <div class="hero-rule" style="background:${grad}"></div>
      <p class="hero-subtitle">対談動画。音声のみ動画化。<br/>naoki-blueprint の用途が、一気に広がります。</p>
      <div class="big-index">03</div>
    </div>
  </section>`;
}

// 11. 対談動画対応
function slide11Dialog() {
  return `<section class="slide" data-section="dialog"
    data-notes="ゲストと対談する動画が、v2 から作れるようになりました。話者分離は Claude が transcript の文脈、 つまり「ですか?」 で終わったら質問者、 「はい」 で始まったら回答者、 といった言葉のパターンを読んで自動判定します。インタビュアー、 つまりあなた自身の発話は normal テンプレ、 ゲストの発話は teal 色の interviewee テンプレで自動色分け。 2 人までの対談に対応しています。">
    ${ph(11, '#06 Dialog Video')}
    <div class="slide-content">
      <div class="pill pill--primary">v2.7.0+</div>
      <h2 class="mt-24">対談動画、<span class="g-primary">作れるようになりました。</span></h2>
      <p class="lead mb-32 text-white">ゲストとの 1on1 動画 / インタビュー動画に (<span class="hl">2 人まで対応</span>)。</p>
      <div class="grid-3">
        <div class="card card--accent">
          <div class="card-title">Claude が文脈で話者判定</div>
          <div class="card-body">
            「ですか?」 で終わる → 質問者<br/>
            「はい」 で始まる → 回答者<br/>
            <span class="text-cyan bold">短い切替も文脈で正確に</span>
          </div>
        </div>
        <div class="card card--warm">
          <div class="card-title">テロップ自動色分け</div>
          <div class="card-body">
            あなたの発話 → <span style="color:var(--blue-light)">紺の normal</span><br/>
            ゲストの発話 → <span style="color:var(--cyan)">teal の interviewee</span><br/>
            <span class="hl">2 人の発話を最後まで一貫して識別</span>
          </div>
        </div>
        <div class="card card--hot">
          <div class="card-title">顔アイコン挿入</div>
          <div class="card-body">
            <code>public/images/icon/</code> に画像を置けば、<br/>
            <span class="bold text-white">発話者に応じて顔アイコン自動切替</span>
          </div>
        </div>
      </div>
      <p class="lead mt-32" style="color:var(--ink-700);text-align:center">video-context.md で <code>dialogVideo: true</code> を選ぶだけ。あとは <span class="hl">全自動</span>。</p>
    </div>
  </section>`;
}

// 12. 音声のみ動画化
function slide12AudioOnly() {
  return `<section class="slide" data-section="audio-only"
    data-notes="さらに、動画ファイルじゃなくて音声ファイルだけからでも動画が作れるようになりました。Voicy や Podcast の原稿、Zoom 録音、こういった音声素材をそのまま動画に。public スラッシュ Audio フォルダに音声ファイルを置くだけ。背景は静止画と波形ビジュアライザで自動生成されます。">
    ${ph(12, '#07 Audio-to-Video')}
    <div class="slide-content">
      <div class="pill pill--cool">v2.11.21+</div>
      <h2 class="mt-24">音声ファイルだけで、<span class="g-cool">動画になる。</span></h2>
      <p class="lead mb-32 text-white">Podcast / Voicy / Zoom 録音の <span class="hl">二次展開に。</span></p>
      <div class="grid-2 mt-16">
        <div class="card card--accent">
          <div class="card-title">入力</div>
          <div class="card-body">
            <code>public/Audio/</code> フォルダに<br/>
            <span class="bold text-white">音声ファイルを 1 つ置くだけ</span> (mp3 / wav / m4a)<br/>
            動画ファイルは不要
          </div>
        </div>
        <div class="card card--warm">
          <div class="card-title">出力</div>
          <div class="card-body">
            <span class="hl">テロップ付き動画 MP4</span><br/>
            背景は静止画 + 波形ビジュアライザ自動生成。<br/>
            既存の動画フロー (step05〜20) と同じ品質
          </div>
        </div>
      </div>
      <p class="lead mt-32" style="text-align:center;color:var(--ink-700)">過去の Podcast 100 本を<span class="hl">動画資産に変換</span>、なんていう使い方も可能。</p>
    </div>
  </section>`;
}

// 13. 章: 自動化・スピード
function slide13Chapter4() {
  return `<section class="slide hero-slide anim-fade-up" data-section="chapter-4" data-anim-fixed
    data-notes="最後の章は、自動化とスピード。プロファイル、ハードウェアエンコード、2 台認証。地味に見えますが、毎日の作業時間が劇的に変わります。">
    <div class="hero">
      <div class="hero-tag" style="background:var(--grad-warm);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">Chapter 4 / 4</div>
      <h1 class="hero-title">自動化と<br/><span class="em-warm">スピードが、別次元に。</span></h1>
      <div class="hero-rule" style="background:var(--grad-warm)"></div>
      <p class="hero-subtitle">プロファイル。HW エンコード。2 台認証。<br/>毎日の作業時間が、目に見えて減ります。</p>
      <div class="big-index">04</div>
    </div>
  </section>`;
}

// 14. オートモード / プロファイル
function slide14Profile() {
  return `<section class="slide" data-section="profile"
    data-notes="動画作成中の改変を、Claude が自動的に記憶します。例えば「emphasis のフォントを Noto Serif JP に変えて」 と指示すると、動画完成時に「次回もこのスタイルでいい?」 と聞かれます。yes と答えれば、次の動画から自動で同じスタイルが適用されます。使えば使うほど、あなた専用に進化していきます。">
    ${ph(14, '#08 Auto Mode / Profile')}
    <div class="slide-content">
      <div class="pill pill--primary">v2.1+</div>
      <h2 class="mt-24">オートモード <span class="g-primary">(プロファイル対応)</span></h2>
      <p class="lead mb-32 text-white">改変が、<span class="hl">次回以降に自動反映。</span></p>
      <div class="grid-2 mt-16">
        <div class="card card--accent">
          <div class="card-title">改変を自動記憶</div>
          <div class="card-body">
            「emphasis のフォント変えて」 と指示すると<br/>
            動画完成時に「次回もこのスタイルで?」 と確認。<br/>
            <span class="hl">yes でプロファイルに自動追記</span>
          </div>
        </div>
        <div class="card card--warm">
          <div class="card-title">使うほど育つ</div>
          <div class="card-body">
            次の動画から自動で同じスタイルが適用。<br/>
            動画タイプ別 (テニス / AI / 雑談) に分けて保存。<br/>
            <span class="bold text-white">あなた専用に進化していく</span>
          </div>
        </div>
      </div>
      <p class="lead mt-32" style="text-align:center;color:var(--ink-700)">3 本目には<span class="hl">「あなた色」</span> が確立されます。</p>
    </div>
  </section>`;
}

// 15. HW エンコード/デコード
function slide15Hardware() {
  return `<section class="slide" data-section="hw"
    data-notes="動画の読み込みと書き出し、どちらも GPU で処理するようになりました。Mac は videotoolbox、Windows は NVIDIA NVENC、Intel QSV、AMD AMF を自動検出。エンコードもデコードも GPU でやるので、レンダリングだけじゃなくて、元動画の読み込みも速くなります。4K HEVC で 15 分の動画が、これまで 10 分以上かかっていたのが、今は 1 分台で書き出し完了します。">
    ${ph(15, '#09 Hardware Encode/Decode')}
    <div class="slide-content">
      <div class="pill pill--cool">v2.x+</div>
      <h2 class="mt-24">HW エンコード/デコード対応。<br/><span class="g-warm">レンダリング約 10 倍速。</span></h2>
      <p class="lead mb-32 text-white">GPU を自動検出して、<span class="hl">読み込みも書き出しも GPU で処理。</span></p>
      <div class="grid-3">
        <div class="card card--accent">
          <div class="card-title">Mac</div>
          <div class="card-body">
            <span class="text-cyan bold">videotoolbox</span><br/>
            Apple Silicon / Intel 自動判別<br/>
            HEVC / H.264 のエンコード + デコード両対応
          </div>
        </div>
        <div class="card card--warm">
          <div class="card-title">Windows</div>
          <div class="card-body">
            <span class="text-cyan bold">NVENC / QSV / AMF</span><br/>
            NVIDIA / Intel / AMD GPU を自動検出<br/>
            最適な GPU を自動選択
          </div>
        </div>
        <div class="card card--hot">
          <div class="card-title">体感速度</div>
          <div class="card-body">
            4K HEVC / 15 分動画 <br/>
            旧: 10 分以上 → 新: <span class="hl">約 1 分</span><br/>
            <span class="bold text-white">10× の速度</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// 16. Google 認証 2 台対応
function slide16TwoDevices() {
  return `<section class="slide" data-section="two-devices"
    data-notes="ライセンス認証が 2 台同時に通るようになりました。MacBook と iMac、自宅 PC と仕事用 PC、両方で同じライセンス ID が使えます。fingerprint v3 で UUID ベースの認証になったので、ホスト名を変えても認証が通らなくなる事故もなくなりました。">
    ${ph(16, '#10 Multi-device Auth')}
    <div class="slide-content">
      <div class="pill pill--primary">v2.8.0+</div>
      <h2 class="mt-24">Google 認証、<span class="g-primary">2 台で使えます。</span></h2>
      <p class="lead mb-32 text-white">メイン機 + サブ機、<span class="hl">両方で同じライセンス。</span></p>
      <div class="grid-2 mt-16">
        <div class="card card--accent">
          <div class="card-title">2 台同時認証</div>
          <div class="card-body">
            MacBook と iMac、自宅 PC と仕事 PC。<br/>
            <span class="hl">どちらでも同じプロジェクトを編集可</span>。<br/>
            外出先で続きの作業もできる
          </div>
        </div>
        <div class="card card--warm">
          <div class="card-title">UUID ベース fingerprint v3</div>
          <div class="card-body">
            ホスト名を変えても認証が通る。<br/>
            旧版で起きていた <span style="color:var(--red);font-weight:700">「同じ PC なのに認証 NG」</span><br/>
            事故が完全に解消
          </div>
        </div>
      </div>
      <p class="lead mt-32" style="text-align:center;color:var(--ink-700)">PC を買い替えた時の<span class="hl">fingerprint 再登録</span> も柔軟に対応できます。</p>
    </div>
  </section>`;
}

// 17. アップデート方法 + 〆
function slide17HowToUpdate() {
  return `<section class="slide" data-section="how-to-update"
    data-notes="ここまでが 10 大アップデート。最後にアップデート方法をお伝えします。v1 をお使いの方は、 v2 系の新しい GitHub リポジトリへのアクセス権限が必要なので、 まずは面談予約サイトから予約をお願いします。すでに v2 を使っている方は、 自動アップデート対応です。 各 step を実行する時に 24 時間ごとに勝手に最新版に同期されます。 手動で即アップデートしたい場合は、 Claude Code 上で bash アップデート.sh を打ってください。 Mac も Windows も共通です。 それでは、 v2 で別次元の動画制作を。">
    ${ph(17, 'How to update')}
    <div class="slide-content">
      <h2>アップデート方法</h2>
      <div class="grid-2 mt-32">
        <div class="card" style="border-color:rgba(250,204,21,0.5);background:linear-gradient(180deg,rgba(250,204,21,0.06),rgba(245,158,11,0.03))">
          <div class="pill" style="background:var(--gold);color:#0a0a0c">v1 の方</div>
          <div class="card-title mt-16">面談予約をお願いします</div>
          <div class="card-body">
            v2 系は新しい GitHub リポジトリで管理。<br/>
            <span class="hl">アクセス権限の付与</span> が必要なため、<br/>
            まずは面談でお話しさせてください。
            <div class="code mt-16" style="font-size:22px;word-break:break-all">https://booking.coach-naoki.com/</div>
          </div>
        </div>
        <div class="card card--accent">
          <div class="pill pill--primary">v2 の方</div>
          <div class="card-title mt-16">通常は自動アップデート</div>
          <div class="card-body">
            各 step 実行時に 24h ごとに自動同期されます。<br/>
            <span class="hl">手動で即アップデート</span> したい場合は、<br/>
            Claude Code 上で 1 行:
            <div class="code mt-16" style="font-size:24px">bash アップデート.sh</div>
            <span style="color:var(--ink-600);font-size:22px">(Mac / Windows 共通)</span>
          </div>
        </div>
      </div>
      <p class="lead mt-32" style="text-align:center;font-size:30px">
        <span class="hl">v2 で、別次元の動画制作を。</span>
      </p>
    </div>
  </section>`;
}

// === Register ===
window.slideFactories = [
  slide01Cover,
  slide02Contents,
  slide02Statement,
  slide03Chapter1,
  slide05Picker2Cut,
  slide06Picker3Design,
  slide04Picker1Telop,
  slide07Chapter2,
  slide08AsrUpgrade,
  slide09SlideAi,
  slide10Chapter3,
  slide11Dialog,
  slide12AudioOnly,
  slide13Chapter4,
  slide14Profile,
  slide15Hardware,
  slide16TwoDevices,
  slide17HowToUpdate,
];

window.agendaItems = [
  { id: 'cover', label: '表紙' },
  { id: 'contents', label: '目次' },
  { id: 'statement', label: 'v2 は別ソフト' },
  { id: 'chapter-1', label: 'Ch.1 編集 UX' },
  { id: 'picker-cut', label: '#01 カットピッカー' },
  { id: 'picker-design', label: '#02 デザインピッカー' },
  { id: 'picker-telop', label: '#03 テロップピッカー' },
  { id: 'chapter-2', label: 'Ch.2 AI 精度' },
  { id: 'asr', label: '#04 言い直しカット精度' },
  { id: 'slide-ai', label: '#05 AI スライド動的生成' },
  { id: 'chapter-3', label: 'Ch.3 新ユースケース' },
  { id: 'dialog', label: '#06 対談動画対応' },
  { id: 'audio-only', label: '#07 音声のみ動画化' },
  { id: 'chapter-4', label: 'Ch.4 自動化・スピード' },
  { id: 'profile', label: '#08 オートモード' },
  { id: 'hw', label: '#09 HW エンコード' },
  { id: 'two-devices', label: '#10 2 台認証' },
  { id: 'how-to-update', label: 'アップデート方法' },
];
