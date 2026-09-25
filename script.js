/* ===================================================== */
/* ======================= UI ========================== */
/* ===================================================== */

const openBtn =
  document.createElement("button");

openBtn.id = "openPopup";

openBtn.innerText = "+";

document.body.appendChild(openBtn);

/* ===================================================== */
/* ====================== POPUP ======================== */
/* ===================================================== */

const popup =
  document.createElement("div");

popup.id = "popup";

popup.innerHTML = `

<input
  type="text"
  id="taskInput"
  placeholder="Goal Name"
/>

<input
  type="date"
  id="dateInput"
/>

<div class="label">
  Card Color
</div>

<div
  class="colorRow"
  id="bgColors"
></div>

<div class="label">
  Text Color
</div>

<div
  class="colorRow"
  id="textColors"
></div>

<div class="label">
  Progress Color
</div>

<div
  class="colorRow"
  id="progressColors"
></div>

<button id="addBtn">
  Add Goal
</button>

`;

document.body.appendChild(popup);

/* ===================================================== */
/* ======================= QUOTES ====================== */
/* ===================================================== */
/* ===================================================== */
/* ======================= QUOTES ====================== */
/* ===================================================== */

const quotes = [

"إن الإجابة الوحيدة على الهزيمة هي الانتصار.",
"الحلم هو مجرد حلم أما الهدف فهو حلم له خطه وموعد نهائي لتحقيقه.",
"في لفظة القمة شيء يقول لك قم.",
"الشخص الحكيم هو الذي يصنع فرصاً أكثر من تلك التي ضاعت منه أو التي فشل فيها.",
"إن ما يسعى إليه الإنسان السامي يكمن في ذاته هو، أما الدنيء فيسعى لما لدى الآخرين.",
"ضع نصب عينيك أن الحياة لن تمنحك شيء فشلت فيه أنت.",
"إنها أمور بسيطة تلك التي توجد خلفنا أو أمامنا فهي لا تقارن بما يكمن داخلنا.",
"لعله من عجائب الحياة أنك إذا رفضت كل ما هو دون مستوى القمة فإنك دائماً تصل إليها.",
"ولكي ننجح يجب أن نؤمن أولاً بأننا نستطيع أن نفعل ذلك.",
"لا تكن أسهل ما في الحياة ولا تكن أصعب ما فيها بل كن أنت الحياة في أسمى معانيها.",
"لقد خلقنا لنمارس الإصرار هكذا نستطيع أن نعرف من نحن.",
"أنا فقط الذي يمكنني تغيير حياتي فلا أحد يستطيع أن يفعل ذلك بدلاً مني.",
"الأمل هو اليأس من اليأس.",
"الحكمة هي أن تعرف ما الذي يجب أن تفعله.",
"بدل أن تلعن الظلام أوقد شمعة.",
"عليك أن تفعل الأشياء التي تعتقد أنه ليس باستطاعتك أن تفعلها.",
"ما الفشل إلا هزيمة مؤقتة تخلق لك فرص النجاح.",
"ليس من المهم بطء خطواتك طالما أنك لا تتوقف.",
"ربما تفشل إذا خاطرت ولكن من المؤكد أنك ستفشل إذا لم تخاطر.",
"الفشل لن يتغلب علي إذا كان عزمي على النجاح قوياً بما فيه الكفاية.",
"تعود على العادات الحسنة وهي سوف تصنعك.",
"ليس الأمر أني عبقري كل ما هنالك أني أجاهد مع المشاكل لفترة أطول.",
"التفاؤل هو الإيمان الذي يؤدي إلى الإنجاز.",
"ليس هناك أي شيء ضروري لتحقيق النجاح أكثر من المثابرة.",
"سر المضي قدماً هو البدء.",
"دائماً ما يبدو الأمر مستحيلاً حتى يتم تحقيقه.",
"عليك أن تؤمن بنفسك وبقدراتك.",
"ابدأ من حيث أنت واستخدم ما لديك وافعل ما تستطيع.",
"الشيء الذي تستطيع أن تحلم به يمكنك أن تحققه.",
"إذا كنت تمر بأوقات عصيبة تابع مسيرتك.",
"ضع أهدافاً كبيرة ولا تتوقف حتى تصل إليها.",
"لا يمكنك عبور البحر فقط عن طريق الوقوف والتحديق في الماء.",
"لم يتأخر الوقت أبداً على وضع هدف آخر أو حلم جديد.",
"ما تفعله اليوم يمكن أن يحسن كل ما تبذله في الغد.",
"إذا سقطت بالأمس قف اليوم.",
"أكبر ضعف هو الاستسلام.",
"أفضل طريقة للنجاح هي المحاولة أكثر من مرة.",
"رحلة الألف ميل تبدأ بخطوة واحدة.",
"وجه عينيك على النجوم وقدميك على الأرض.",
"قد نواجه العديد من الهزائم ولكن يجب ألا نهزم.",
"تحديد الأهداف هو الخطوة الأولى لتحويل غير المرئي إلى مرئي.",
"كل يوم جديد يأتي معه قوة جديدة وأفكار جديدة.",
"الشجاعة هي إتقان الخوف وليست غياب الخوف.",
"الهروب هو السبب الوحيد في الفشل.",
"لا تراقب الساعة استمر في المضي قدماً.",
"العمل الجيد أفضل من القول الجيد.",
"إذا لم تفشل فلن تعمل بجد.",
"نحن نسقط لكي ننهض ونهزم لنصنع نصراً أعظم.",
"إذا لم تحاول أن تفعل شيئاً أبعد مما أتقنته فلن تتقدم.",
"يجب أن تثق بنفسك.",
"المعرفة ليست كافية يجب أن نطبقها.",
"رحلة النجاح لا تتطلب البحث عن أرض جديدة ولكنها تتطلب الاهتمام بالنجاح.",
"إذا أردت أن تنجح في حياتك فاجعل المثابرة صديقك الحميم.",
"إذا عرفنا كيف فشلنا نفهم كيف ننجح.",
"الأبطال لا يصنعون في صالات التدريب بل من الإرادة والحلم والرؤية.",
"المثابرة والنجاح توأمان.",
"النجاح يحققه فقط الذين يواصلون المحاولة بنظرة إيجابية.",
"كلما لاح النجاح نتيجة التخطيط الجيد اعتبره الناس حظاً.",
"إن النجاح لا يتطلب عذراً والفشل لا يترك مبررات.",
"لا أحد منا يمكن أن يحقق النجاح بأن يعمل لوحده.",
"نحن من نصنع النجاح أو الفشل وليس الظروف.",
"الطموح اللامحدود هو الوقود الذي يساعد الإنسان.",
"الفرق الوحيد بين الناجح والفاشل هو أن الناجح يريد ما لا يريده الفاشل.",
"اليأس هو آخر محاولة قبل النجاح.",
"كل ما نحتاجه لتحقيق النجاح هو الجهل والثقة.",
"إذا لم تضع أمامك أهدافاً واضحة فلا تلومن إلا نفسك.",
"البعض منا لديه مدارج للنجاح وإن لم تجدها فشيدها بنفسك.",
"أفصح الخطباء هو النجاح.",
"النجاح هو الانتقال من فشل إلى فشل دون فقدان الأمل.",
"سر النجاح يكمن في النظر للأشياء بطريقة مختلفة.",
"من طلب العلا سهر الليالي.",
"الرجل الذي حمل جبلاً بدأ بحمل الحجارة الصغيرة.",
"النجاح هو الطريق ذاته وليس الهدف.",
"من سعى جنى ومن نام رأى الأحلام.",
"ليس شرطاً أن تكون صغيراً لتنال النجاح بل أن تكون جاداً.",
"من الضروري أن تعتقد أن النجاح والفشل غير نهائيين.",
"تذكر دوماً ما أنت بارع فيه وتمسك به.",
"التدريب هو أفضل المعلمين.",
"المنافسة الحقيقية بينك وبين نفسك.",
"ومن يهب صعود الجبال يعش أبد الدهر بين الحفر.",
"الفشل ليس عند الخسارة بل عند الانسحاب.",
"فن أن تكون مرة شجاعاً ومرة حذراً هو فن النجاح.",
"الجهد المتواصل هو مفتاح إطلاق قدراتنا الكامنة.",
"النجاح هو نتيجة الشعور بالسعادة.",
"الشخص المحترف يفعل أفضل ما بوسعه حتى عندما لا يرغب.",
"تصرف كما لو أنه من المستحيل أن تفشل.",
"سر النجاح على الدوام هو أن تسير إلى الأمام.",
"لا نحقق الأعمال بالأمنيات وإنما بالإرادة.",
"ضع قلبك في كل عمل تقوم به.",
"أحب ما تعمل كي تعمل ما تحب.",
"التردد أكبر عقبة في طريق النجاح.",
"إذا كنت تستطيع تخيل صورة ما يمكنك أن تجعلها واقعاً.",
"التعلم من الفشل هو الطريق الحقيقي للنجاح.",
"عندما تصل إلى معنى النجاح تجد أنه يعني الإصرار.",
"الناجح من يستطيع رؤية ما هو أبعد من الآخرين.",
"لكي تنجح يجب أن تكون رغبتك في النجاح أكبر من خوفك.",
"استثمر في تطوير نفسك لتضمن مستقبلك.",
"لا تؤجل عمل اليوم إلى الغد.",
"لا أقيس نجاح الإنسان بمدى صعوده بل بمدى نهوضه بعد السقوط.",
"من تأنى نال ما تمنى.",
"لا يهم كم هو صغير الإنجاز الذي حققته.",
"من لا يعمل لا يخطئ."

];

/* خلك مكمل بنفس كودك القديم بعد quotes بدون تغيير أي شيء */

/* ===================================================== */
/* ======================= COLORS ====================== */
/* ===================================================== */

const bgPalette = [

  "#0f172a",
  "#1e293b",
  "#3b0764",
  "#581c87",
  "#7f1d1d",
  "#14532d",
  "#0c4a6e",
  "#1d4ed8",
  "#78350f",
  "#831843",
  "#065f46",
  "#4338ca"
];

const textPalette = [

  "#ffffff",
  "#60a5fa",
  "#f472b6",
  "#facc15",
  "#4ade80",
  "#fb7185",
  "#c084fc",
  "#22d3ee",
  "#f97316"
];

const progressPalette = [

  "#60a5fa",
  "#f472b6",
  "#facc15",
  "#4ade80",
  "#fb7185",
  "#c084fc",
  "#22d3ee",
  "#f97316",
  "#ef4444",
  "#14b8a6"
];

let selectedBg =
  bgPalette[0];

let selectedText =
  textPalette[0];

let selectedProgress =
  progressPalette[0];

/* ===================================================== */
/* ===================== ELEMENTS ====================== */
/* ===================================================== */

const bgContainer =
  document.getElementById(
    "bgColors"
  );

const textContainer =
  document.getElementById(
    "textColors"
  );

const progressContainer =
  document.getElementById(
    "progressColors"
  );

const taskInput =
  document.getElementById(
    "taskInput"
  );

const dateInput =
  document.getElementById(
    "dateInput"
  );

const addBtn =
  document.getElementById(
    "addBtn"
  );

/* ===================================================== */
/* ==================== COLOR PICKERS ================== */
/* ===================================================== */

function createColorOptions(
  palette,
  container,
  callback
) {

  palette.forEach(color => {

    const item =
      document.createElement("div");

    item.className =
      "colorOption";

    item.style.background =
      color;

    item.onclick = () => {

      callback(color);

      container
        .querySelectorAll(
          ".colorOption"
        )
        .forEach(el =>
          el.classList.remove(
            "active"
          )
        );

      item.classList.add(
        "active"
      );
    };

    container.appendChild(
      item
    );
  });

  container
    .children[0]
    .classList.add("active");
}

createColorOptions(

  bgPalette,

  bgContainer,

  color => {

    selectedBg = color;
  }
);

createColorOptions(

  textPalette,

  textContainer,

  color => {

    selectedText = color;
  }
);

createColorOptions(

  progressPalette,

  progressContainer,

  color => {

    selectedProgress =
      color;
  }
);

/* ===================================================== */
/* ======================= STORAGE ===================== */
/* ===================================================== */

let tasks = [];

loadTasks();

function saveTasks() {

  chrome.storage.local.set({
    tasks: tasks
  });
}

function loadTasks() {

  chrome.storage.local.get(
    ["tasks"],
    (result) => {

      if (result.tasks) {

        tasks =
          result.tasks;

        tasks.forEach(task => {

          createTask(task);
        });
      }
    }
  );
}

/* ===================================================== */
/* ====================== OPEN POPUP =================== */
/* ===================================================== */

openBtn.onclick = () => {

  popup.classList.toggle(
    "show"
  );
};

/* ===================================================== */
/* ======================= ADD TASK ==================== */
/* ===================================================== */

addBtn.onclick = () => {

  const name =
    taskInput.value;

  const date =
    dateInput.value;

  if (!name || !date)
    return;

  const today =
    new Date();

  const selectedDate =
    new Date(date);

  today.setHours(
    0,0,0,0
  );

  selectedDate.setHours(
    0,0,0,0
  );

  if (selectedDate <= today) {

    alert(
      "Choose a future date 🚫"
    );

    return;
  }

  const task = {

    id: Date.now(),

    name: name,

    date: date,

    bgColor:
      selectedBg,

    textColor:
      selectedText,

    progressColor:
      selectedProgress,

    top:
      (window.innerHeight / 2) - 180,

    left:
      (window.innerWidth / 2) - 140
  };

  tasks.push(task);

  saveTasks();

  createTask(task);

  popup.classList.remove(
    "show"
  );

  taskInput.value = "";

  dateInput.value = "";
};

/* ===================================================== */
/* ===================== CREATE TASK =================== */
/* ===================================================== */

function createTask(task) {

  const card =
    document.createElement("div");

  card.className =
    "task";

  card.style.top =
    `${task.top}px`;

  card.style.left =
    `${task.left}px`;

  card.style.background =
    `
    linear-gradient(
      145deg,
      ${task.bgColor},
      rgba(15,23,42,0.72)
    )
    `;

  card.style.color =
    task.textColor;

  card.innerHTML = `

<button class="deleteBtn">
  ✕
</button>

<h3>${task.name}</h3>

<div class="remainBox">

  <div class="remainLabel">
    ⏳ REMAIND
  </div>

  <div class="countdown">
    0
  </div>

  <div class="daysText">
    DAYS
  </div>

</div>

<div class="progressWrap">

  <div class="progressRing">

    <div class="progressInner">

      <div class="progressPercent">
        0%
      </div>

      <div class="progressText">
        COMPLETE
      </div>

    </div>

  </div>

</div>

<div class="quoteBox">

  ${
    quotes[
      Math.floor(
        Math.random() *
        quotes.length
      )
    ]
  }

</div>

`;

  addResizeHandles(card);

  document.body.appendChild(card);

  /* ================= DELETE ================= */

  const deleteBtn =
    card.querySelector(
      ".deleteBtn"
    );

  deleteBtn.onclick = () => {

    card.remove();

    tasks =
      tasks.filter(
        t => t.id !== task.id
      );

    saveTasks();
  };

  /* ================= COUNTDOWN ================= */

  const countdown =
    card.querySelector(
      ".countdown"
    );

  const progressRing =
    card.querySelector(
      ".progressRing"
    );

  const progressPercent =
    card.querySelector(
      ".progressPercent"
    );

  function update() {

    const today =
      new Date();

    const target =
      new Date(task.date);

    today.setHours(
      0,0,0,0
    );

    target.setHours(
      0,0,0,0
    );

    const diff =
      target - today;

    const days =
      Math.ceil(
        diff /
        (1000 * 60 * 60 * 24)
      );

    countdown.innerHTML =
      `${days}`;

    const totalDays = 365;

    let progress =

      100 -
      ((days / totalDays) * 100);

    if (progress < 0)
      progress = 0;

    if (progress > 100)
      progress = 100;

    progress =
      Math.floor(progress);

    progressPercent.innerHTML =
      `${progress}%`;

    progressRing.style.background =
      `
      conic-gradient(
        ${task.progressColor} ${progress}%,
        rgba(255,255,255,0.08) ${progress}%
      )
      `;
  }

  update();

  setInterval(update, 60000);

  /* ================= DRAG ================= */

  let isDragging =
    false;

  let offsetX = 0;

  let offsetY = 0;

  card.addEventListener(
    "mousedown",
    (e) => {

      if (
        e.target.classList.contains(
          "resize-handle"
        )
      ) return;

      isDragging = true;

      offsetX =
        e.clientX -
        card.offsetLeft;

      offsetY =
        e.clientY -
        card.offsetTop;
    }
  );

  document.addEventListener(
    "mousemove",
    (e) => {

      if (!isDragging)
        return;

      card.style.left =
        `${e.clientX - offsetX}px`;

      card.style.top =
        `${e.clientY - offsetY}px`;
    }
  );

  document.addEventListener(
    "mouseup",
    () => {

      if (!isDragging)
        return;

      isDragging = false;

      task.left =
        card.offsetLeft;

      task.top =
        card.offsetTop;

      saveTasks();
    }
  );
}

/* ===================================================== */
/* ==================== RESIZE SYSTEM ================== */
/* ===================================================== */

function addResizeHandles(card) {

  const right =
    document.createElement("div");

  right.className =
    "resize-handle resize-right";

  const bottom =
    document.createElement("div");

  bottom.className =
    "resize-handle resize-bottom";

  const corner =
    document.createElement("div");

  corner.className =
    "resize-handle resize-corner";

  card.appendChild(right);

  card.appendChild(bottom);

  card.appendChild(corner);
}
/* ===================================================== */
/* ================= NEW TAB THEMES ==================== */
/* ===================================================== */

const themeColors =
document.querySelectorAll(
".themeColor"
);

themeColors.forEach(
color => {

color.addEventListener(
"click",
() => {

const selectedColor =
color.dataset.color;

/* ===== SAVE ===== */

localStorage.setItem(
"himmah-theme",
selectedColor
);

/* ===== APPLY ===== */

applyTheme(
selectedColor
);
}
);
}
);

/* ===================================================== */
/* ================= APPLY THEME ======================= */
/* ===================================================== */

function applyTheme(color) {

document.body.style.background =

`
linear-gradient(
180deg,
${color},
#020617
)
`;

/* ===== GLOW ===== */

const glow =
document.querySelector(
".bgGlow"
);

if (glow) {

glow.style.background =

`
radial-gradient(
circle,
${color}55,
transparent 70%
)
`;
}
}

