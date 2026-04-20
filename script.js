// ==================== البيانات ====================
let coursesData = {
    courses: [
        {
            id: "nadhari",
            name: "اساسيات التمريض - نظري",
            description: "المفاهيم الأساسية والنظريات التمريضية",
            icon: "📖",
            bookUrl: "",
            chapters: ["مدخل إلى التمريض", "تاريخ وتطور التمريض", "النظريات التمريضية", "المعايير الأخلاقية", "التواصل المهني", "التوثيق والتسجيل", "السلامة المهنية"],
            lectures: []
        },
        {
            id: "amali",
            name: "اساسيات التمريض - عملي",
            description: "المهارات السريرية والإجراءات العملية",
            icon: "💉",
            bookUrl: "",
            chapters: ["المهارات التمريضية الأساسية"],
            lectures: []
        },
        {
            id: "tashreeh",
            name: "التشريح",
            description: "دراسة تركيب الجسم البشري",
            icon: "🧠",
            bookUrl: "",
            chapters: ["الجهاز الهيكلي", "الجهاز العضلي", "الجهاز العصبي", "الجهاز الدوري", "الجهاز التنفسي", "الجهاز الهضمي", "الجهاز البولي"],
            lectures: [
                { title: "شرح الجهاز الهيكلي", url: "https://youtu.be/example1" },
                { title: "شرح الجهاز العصبي", url: "https://youtu.be/example2" },
                { title: "شرح الجهاز الدوري", url: "https://youtu.be/example3" }
            ]
        },
        {
            id: "ahyaa",
            name: "الاحياء",
            description: "الأساسيات البيولوجية للجسم",
            icon: "🔬",
            bookUrl: "",
            chapters: ["مقدمة في علم الأحياء", "الخلية", "الوراثة", "التمثيل الغذائي", "الأحياء الدقيقة", "جهاز المناعة", "الجهاز الهرموني", "التكاثر", "النمو والتطور", "علم البيئة"],
            lectures: []
        }
    ]
};

// بيانات الأسئلة
let quizData = {
    nadhari: {
        0: [
            { question: "ما هو تعريف التمريض؟", options: ["مهنة مساعدة", "علم وفن", "مجرد وظيفة", "تطبيب"], correct: 1 },
            { question: "من هي مؤسسة التمريض الحديث؟", options: ["كلارا بارتون", "فلورنس نايتينجيل", "ماري سيكول", "مارجريت سانجر"], correct: 1 }
        ]
    },
    tashreeh: {
        0: [
            { question: "كم عدد عظام الإنسان البالغ؟", options: ["200", "206", "210", "215"], correct: 1 },
            { question: "أي من هذه ليس جزءاً من الجهاز الهيكلي؟", options: ["الجمجمة", "القفص الصدري", "الكبد", "العمود الفقري"], correct: 2 }
        ]
    },
    ahyaa: {
        0: [
            { question: "ما هي الوحدة الأساسية للحياة؟", options: ["النسيج", "العضو", "الخلية", "الجزيء"], correct: 2 }
        ]
    }
};

// حفظ واسترجاع البيانات
function saveData() {
    localStorage.setItem('nursingCourses', JSON.stringify(coursesData));
    localStorage.setItem('nursingQuizzes', JSON.stringify(quizData));
}

function loadData() {
    const savedCourses = localStorage.getItem('nursingCourses');
    const savedQuizzes = localStorage.getItem('nursingQuizzes');
    if (savedCourses) coursesData = JSON.parse(savedCourses);
    if (savedQuizzes) quizData = JSON.parse(savedQuizzes);
}

// جلسة المستخدم
let currentUser = localStorage.getItem('nursingUser');
if (!currentUser) {
    currentUser = "زائر_" + Math.floor(Math.random() * 1000);
    localStorage.setItem('nursingUser', currentUser);
}

// ==================== نظام الصفحات (Routing) ====================
let currentRoute = {
    page: 'home', // home, course, chapter, lectures, book, quiz
    courseId: null,
    chapterIndex: null
};

function navigateTo(page, params = {}) {
    // تحديث URL
    let url = `#${page}`;
    if (params.courseId) url += `/${params.courseId}`;
    if (params.chapterIndex !== undefined) url += `/${params.chapterIndex}`;
    window.location.hash = url;
    
    // تحديث الحالة الحالية
    currentRoute = { page, ...params };
    
    // عرض الصفحة المناسبة
    renderPage();
}

function renderPage() {
    const main = document.getElementById('mainContent');
    
    switch(currentRoute.page) {
        case 'home':
            renderHome(main);
            break;
        case 'course':
            renderCourse(main, currentRoute.courseId);
            break;
        case 'chapter':
            renderChapter(main, currentRoute.courseId, currentRoute.chapterIndex);
            break;
        case 'lectures':
            renderLectures(main, currentRoute.courseId);
            break;
        case 'book':
            renderBook(main, currentRoute.courseId);
            break;
        case 'quiz':
            renderQuiz(main, currentRoute.courseId, currentRoute.chapterIndex);
            break;
        default:
            renderHome(main);
    }
}

// استمع لتغيرات الـ Hash
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    const parts = hash.split('/');
    
    if (!hash || parts[0] === 'home') {
        currentRoute = { page: 'home' };
    } else if (parts[0] === 'course' && parts[1]) {
        currentRoute = { page: 'course', courseId: parts[1] };
    } else if (parts[0] === 'chapter' && parts[1] && parts[2]) {
        currentRoute = { page: 'chapter', courseId: parts[1], chapterIndex: parseInt(parts[2]) };
    } else if (parts[0] === 'lectures' && parts[1]) {
        currentRoute = { page: 'lectures', courseId: parts[1] };
    } else if (parts[0] === 'book' && parts[1]) {
        currentRoute = { page: 'book', courseId: parts[1] };
    } else if (parts[0] === 'quiz' && parts[1] && parts[2]) {
        currentRoute = { page: 'quiz', courseId: parts[1], chapterIndex: parseInt(parts[2]) };
    } else {
        currentRoute = { page: 'home' };
    }
    
    renderPage();
});

// ==================== عرض الصفحات ====================
function renderHome(container) {
    const course = coursesData.courses.find(c => c.id === currentRoute.courseId);
    
    container.innerHTML = `
        <div class="welcome-card">
            <div class="avatar">👩‍⚕️</div>
            <div class="user-greeting">
                <h3>مرحباً، ${currentUser}</h3>
                <p>اختر المساق الذي ترغب بدراسته</p>
            </div>
        </div>
        
        <h2 class="section-title">📚 المساقات المتاحة</h2>
        <div class="courses-grid" id="coursesGrid"></div>
    `;
    
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = coursesData.courses.map(c => `
        <div class="course-card" data-course-id="${c.id}">
            <div class="course-icon">${c.icon}</div>
            <h3>${c.name}</h3>
            <p>${c.description}</p>
        </div>
    `).join('');
    
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => navigateTo('course', { courseId: card.dataset.courseId }));
    });
}

function renderCourse(container, courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) return navigateTo('home');
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <span class="breadcrumb">${course.name}</span>
        </div>
        
        <div class="welcome-card">
            <div class="avatar">${course.icon}</div>
            <div class="user-greeting">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
            </div>
        </div>
        
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
            <button class="add-btn" id="chaptersBtn">📖 الشباتر والدروس</button>
            <button class="add-btn" id="lecturesBtn">🎥 المحاضرات</button>
            <button class="add-btn" id="bookBtn">📕 الكتاب المقرر</button>
            <button class="add-btn" id="quizzesBtn">📝 الاختبارات</button>
        </div>
        
        <div id="dynamicContent"></div>
    `;
    
    document.getElementById('backBtn').addEventListener('click', () => navigateTo('home'));
    document.getElementById('chaptersBtn').addEventListener('click', () => {
        document.getElementById('dynamicContent').innerHTML = renderChaptersList(course);
    });
    document.getElementById('lecturesBtn').addEventListener('click', () => {
        navigateTo('lectures', { courseId: course.id });
    });
    document.getElementById('bookBtn').addEventListener('click', () => {
        navigateTo('book', { courseId: course.id });
    });
    document.getElementById('quizzesBtn').addEventListener('click', () => {
        document.getElementById('dynamicContent').innerHTML = renderQuizzesList(course);
    });
    
    // عرض الشباتر افتراضياً
    document.getElementById('dynamicContent').innerHTML = renderChaptersList(course);
}

function renderChaptersList(course) {
    return `
        <h2 class="section-title">📖 الشباتر والدروس</h2>
        <div class="chapters-grid">
            ${course.chapters.map((ch, idx) => `
                <div class="chapter-item" data-chapter="${idx}">
                    <div class="chapter-name">
                        <span class="chapter-icon">📘</span>
                        ${ch}
                    </div>
                    <span class="quiz-badge">اختبار</span>
                </div>
            `).join('')}
        </div>
    ` + `
    <script>
        document.querySelectorAll('.chapter-item').forEach(el => {
            el.addEventListener('click', () => {
                const idx = el.dataset.chapter;
                window.navigateTo('chapter', { courseId: '${course.id}', chapterIndex: idx });
            });
        });
    <\/script>
    `;
}

function renderQuizzesList(course) {
    return `
        <h2 class="section-title">📝 الاختبارات</h2>
        <div class="chapters-grid">
            ${course.chapters.map((ch, idx) => `
                <div class="chapter-item" data-quiz="${idx}">
                    <div class="chapter-name">
                        <span class="chapter-icon">📝</span>
                        اختبار: ${ch}
                    </div>
                    <span class="quiz-badge">ابدأ</span>
                </div>
            `).join('')}
        </div>
    ` + `
    <script>
        document.querySelectorAll('.chapter-item').forEach(el => {
            el.addEventListener('click', () => {
                const idx = el.dataset.quiz;
                window.navigateTo('quiz', { courseId: '${course.id}', chapterIndex: idx });
            });
        });
    <\/script>
    `;
}

function renderChapter(container, courseId, chapterIndex) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course || !course.chapters[chapterIndex]) return navigateTo('home');
    
    const chapterName = course.chapters[chapterIndex];
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
            <span class="breadcrumb">${course.name} / ${chapterName}</span>
        </div>
        
        <div class="welcome-card">
            <div class="avatar">📖</div>
            <div class="user-greeting">
                <h3>${chapterName}</h3>
                <p>ملخصات وشرح مفصل للشابتر</p>
            </div>
        </div>
        
        <div style="background: var(--card-bg); border-radius: 16px; padding: 20px; margin-top: 15px;">
            <p style="font-size: 0.85rem; line-height: 1.6;">📝 محتوى الشابتر قيد التجهيز...</p>
            <button class="submit-btn" id="takeQuizBtn" style="margin-top: 20px;">📝 إجراء اختبار الشابتر</button>
        </div>
    `;
    
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
    document.getElementById('takeQuizBtn').addEventListener('click', () => navigateTo('quiz', { courseId, chapterIndex }));
}

function renderLectures(container, courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) return navigateTo('home');
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
            <span class="breadcrumb">${course.name} / المحاضرات</span>
        </div>
        
        <h2 class="section-title">🎥 محاضرات يوتيوب</h2>
        <button class="add-btn" id="addLectureBtn">+ إضافة محاضرة جديدة</button>
        <div class="lectures-grid" id="lecturesGrid"></div>
    `;
    
    function renderLecturesList() {
        const grid = document.getElementById('lecturesGrid');
        if (!grid) return;
        grid.innerHTML = (course.lectures || []).map((lec, idx) => `
            <div class="lecture-item">
                <a href="${lec.url}" target="_blank" class="lecture-link">🎬 ${lec.title}</a>
                <button class="delete-lecture" data-idx="${idx}" style="background: #e74c3c; color: white; border: none; padding: 4px 12px; border-radius: 15px; cursor: pointer; font-size: 0.7rem;">حذف</button>
            </div>
        `).join('');
        
        document.querySelectorAll('.delete-lecture').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.idx);
                course.lectures.splice(idx, 1);
                saveData();
                renderLecturesList();
            });
        });
    }
    
    renderLecturesList();
    
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
    document.getElementById('addLectureBtn').addEventListener('click', () => {
        const title = prompt("أدخل عنوان المحاضرة:");
        const url = prompt("أدخل رابط اليوتيوب:");
        if (title && url) {
            if (!course.lectures) course.lectures = [];
            course.lectures.push({ title, url });
            saveData();
            renderLecturesList();
        }
    });
}

function renderBook(container, courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) return navigateTo('home');
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
            <span class="breadcrumb">${course.name} / الكتاب المقرر</span>
        </div>
        
        <div class="book-card">
            <div style="font-size: 48px; margin-bottom: 15px;">📕</div>
            <h3 style="margin-bottom: 10px;">الكتاب المقرر</h3>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 20px;">${course.name}</p>
            ${course.bookUrl ? `<a href="${course.bookUrl}" target="_blank" class="book-link">📥 تحميل الكتاب</a>` : '<p style="color: #e74c3c;">⚠️ لم يتم إضافة رابط الكتاب بعد</p>'}
            <button class="add-btn" id="editBookBtn" style="margin-top: 20px; display: block; margin-left: auto; margin-right: auto;">✏️ تعديل رابط الكتاب</button>
        </div>
    `;
    
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
    document.getElementById('editBookBtn').addEventListener('click', () => {
        const newUrl = prompt("أدخل رابط الكتاب (PDF أو رابط مباشر):", course.bookUrl);
        if (newUrl) {
            course.bookUrl = newUrl;
            saveData();
            renderBook(container, courseId);
        }
    });
}

function renderQuiz(container, courseId, chapterIndex) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course || !course.chapters[chapterIndex]) return navigateTo('home');
    
    const chapterName = course.chapters[chapterIndex];
    const questions = quizData[courseId]?.[chapterIndex] || [];
    
    container.innerHTML = `
        <div class="nav-bar">
            <button class="back-btn" id="backBtn">↩ رجوع</button>
            <button class="back-btn" id="backToCourse">📚 العودة للمساق</button>
            <span class="breadcrumb">${course.name} / اختبار ${chapterName}</span>
        </div>
        
        <div class="quiz-container">
            <h2 style="font-size: 1rem; margin-bottom: 15px;">📝 اختبار: ${chapterName}</h2>
            ${questions.length === 0 ? '<p style="text-align: center; color: #e74c3c;">⚠️ لا توجد أسئلة لهذا الشابتر بعد</p>' : `
                <div id="quizQuestions"></div>
                <button class="submit-btn" id="submitQuiz">تأكيد الإجابات</button>
                <div id="quizResult"></div>
            `}
        </div>
    `;
    
    if (questions.length > 0) {
        const quizDiv = document.getElementById('quizQuestions');
        quizDiv.innerHTML = questions.map((q, idx) => `
            <div class="question-item">
                <div class="question-text">${idx+1}. ${q.question}</div>
                <div class="options">
                    ${q.options.map((opt, optIdx) => `
                        <label class="option">
                            <input type="radio" name="q${idx}" value="${optIdx}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        document.getElementById('submitQuiz').addEventListener('click', () => {
            let score = 0;
            questions.forEach((q, idx) => {
                const selected = document.querySelector(`input[name="q${idx}"]:checked`);
                if (selected && parseInt(selected.value) === q.correct) score++;
            });
            const resultDiv = document.getElementById('quizResult');
            const percent = Math.round(score/questions.length*100);
            resultDiv.innerHTML = `
                <div class="result-box" style="background: ${percent >= 60 ? '#4caf50' : '#e74c3c'}; color: white;">
                    ✅ نتيجتك: ${score} من ${questions.length} (${percent}%)
                    ${percent >= 60 ? '🎉 ممتاز! اجتزت الاختبار' : '📚 حاول مراجعة الشابتر مرة أخرى'}
                </div>
            `;
        });
    }
    
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
}

// ==================== الوضع الليلي ====================
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    themeToggle.textContent = '☀️';
} else {
    document.body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    }
});

// ربط navigateTo بالـ window
window.navigateTo = navigateTo;

// ==================== بدء التشغيل ====================
loadData();
if (window.location.hash) {
    window.dispatchEvent(new Event('hashchange'));
} else {
    navigateTo('home');
}
saveData();
