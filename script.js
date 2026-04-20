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
        ],
        1: [
            { question: "في أي عام تأسست أول مدرسة تمريض حديثة؟", options: ["1850", "1860", "1870", "1880"], correct: 1 }
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

// ==================== نظام الصفحات ====================
let currentRoute = {
    page: 'home',
    courseId: null,
    chapterIndex: null
};

// دالة التنقل الرئيسية
function navigateTo(page, params = {}) {
    let url = `#${page}`;
    if (params.courseId) url += `/${params.courseId}`;
    if (params.chapterIndex !== undefined && params.chapterIndex !== null) url += `/${params.chapterIndex}`;
    window.location.hash = url;
}

// عرض الصفحة حسب المسار
function renderPage() {
    const main = document.getElementById('mainContent');
    if (!main) return;
    
    const hash = window.location.hash.slice(1);
    const parts = hash.split('/');
    const page = parts[0] || 'home';
    
    if (page === 'home' || page === '') {
        renderHome(main);
    } else if (page === 'course' && parts[1]) {
        renderCourse(main, parts[1]);
    } else if (page === 'chapter' && parts[1] && parts[2]) {
        renderChapter(main, parts[1], parseInt(parts[2]));
    } else if (page === 'lectures' && parts[1]) {
        renderLectures(main, parts[1]);
    } else if (page === 'book' && parts[1]) {
        renderBook(main, parts[1]);
    } else if (page === 'quiz' && parts[1] && parts[2]) {
        renderQuiz(main, parts[1], parseInt(parts[2]));
    } else {
        renderHome(main);
    }
}

// ==================== عرض الصفحة الرئيسية ====================
function renderHome(container) {
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
    if (grid) {
        grid.innerHTML = coursesData.courses.map(c => `
            <div class="course-card" data-course-id="${c.id}">
                <div class="course-icon">${c.icon}</div>
                <h3>${c.name}</h3>
                <p>${c.description}</p>
            </div>
        `).join('');
        
        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const courseId = card.getAttribute('data-course-id');
                navigateTo('course', { courseId });
            });
        });
    }
}

// ==================== عرض صفحة المساق ====================
function renderCourse(container, courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) {
        navigateTo('home');
        return;
    }
    
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
        
        <div class="button-group">
            <button class="add-btn" id="chaptersBtn">📖 الشباتر والدروس</button>
            <button class="add-btn" id="lecturesBtn">🎥 المحاضرات</button>
            <button class="add-btn" id="bookBtn">📕 الكتاب المقرر</button>
            <button class="add-btn" id="quizzesBtn">📝 الاختبارات</button>
        </div>
        
        <div id="dynamicContent"></div>
    `;
    
    document.getElementById('backBtn').addEventListener('click', () => navigateTo('home'));
    document.getElementById('chaptersBtn').addEventListener('click', () => {
        const contentDiv = document.getElementById('dynamicContent');
        if (contentDiv) contentDiv.innerHTML = renderChaptersList(course);
    });
    document.getElementById('lecturesBtn').addEventListener('click', () => navigateTo('lectures', { courseId: course.id }));
    document.getElementById('bookBtn').addEventListener('click', () => navigateTo('book', { courseId: course.id }));
    document.getElementById('quizzesBtn').addEventListener('click', () => {
        const contentDiv = document.getElementById('dynamicContent');
        if (contentDiv) contentDiv.innerHTML = renderQuizzesList(course);
    });
    
    const contentDiv = document.getElementById('dynamicContent');
    if (contentDiv) contentDiv.innerHTML = renderChaptersList(course);
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
    `;
}

// ==================== عرض صفحة الشابتر ====================
function renderChapter(container, courseId, chapterIndex) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course || !course.chapters[chapterIndex]) {
        navigateTo('home');
        return;
    }
    
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

// ==================== عرض المحاضرات ====================
function renderLectures(container, courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) {
        navigateTo('home');
        return;
    }
    
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
        
        const lectures = course.lectures || [];
        if (lectures.length === 0) {
            grid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 20px;">لا توجد محاضرات حالياً. أضف محاضرة جديدة!</p>';
            return;
        }
        
        grid.innerHTML = lectures.map((lec, idx) => `
            <div class="lecture-item">
                <a href="${lec.url}" target="_blank" class="lecture-link">🎬 ${lec.title}</a>
                <button class="delete-lecture" data-idx="${idx}">حذف</button>
            </div>
        `).join('');
        
        document.querySelectorAll('.delete-lecture').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
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

// ==================== عرض الكتاب ====================
function renderBook(container, courseId) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course) {
        navigateTo('home');
        return;
    }
    
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
        if (newUrl !== null) {
            course.bookUrl = newUrl;
            saveData();
            renderBook(container, courseId);
        }
    });
}

// ==================== عرض الاختبار ====================
function renderQuiz(container, courseId, chapterIndex) {
    const course = coursesData.courses.find(c => c.id === courseId);
    if (!course || !course.chapters[chapterIndex]) {
        navigateTo('home');
        return;
    }
    
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
        if (quizDiv) {
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
        }
        
        document.getElementById('submitQuiz').addEventListener('click', () => {
            let score = 0;
            questions.forEach((q, idx) => {
                const selected = document.querySelector(`input[name="q${idx}"]:checked`);
                if (selected && parseInt(selected.value) === q.correct) score++;
            });
            const resultDiv = document.getElementById('quizResult');
            const percent = Math.round(score/questions.length*100);
            if (resultDiv) {
                resultDiv.innerHTML = `
                    <div class="result-box" style="background: ${percent >= 60 ? '#4caf50' : '#e74c3c'}; color: white;">
                        ✅ نتيجتك: ${score} من ${questions.length} (${percent}%)
                        ${percent >= 60 ? '🎉 ممتاز! اجتزت الاختبار' : '📚 حاول مراجعة الشابتر مرة أخرى'}
                    </div>
                `;
            }
        });
    }
    
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());
    document.getElementById('backToCourse').addEventListener('click', () => navigateTo('course', { courseId }));
}

// ==================== أحداث إضافية للشباتر والاختبارات ====================
function attachDynamicEvents() {
    // الأحداث للشباتر
    document.querySelectorAll('.chapter-item[data-chapter]').forEach(el => {
        el.removeEventListener('click', handleChapterClick);
        el.addEventListener('click', handleChapterClick);
    });
    
    // الأحداث للاختبارات
    document.querySelectorAll('.chapter-item[data-quiz]').forEach(el => {
        el.removeEventListener('click', handleQuizClick);
        el.addEventListener('click', handleQuizClick);
    });
}

function handleChapterClick(e) {
    const el = e.currentTarget;
    const chapterIndex = el.getAttribute('data-chapter');
    const courseId = getCurrentCourseIdFromPage();
    if (courseId && chapterIndex !== null) {
        navigateTo('chapter', { courseId, chapterIndex: parseInt(chapterIndex) });
    }
}

function handleQuizClick(e) {
    const el = e.currentTarget;
    const chapterIndex = el.getAttribute('data-quiz');
    const courseId = getCurrentCourseIdFromPage();
    if (courseId && chapterIndex !== null) {
        navigateTo('quiz', { courseId, chapterIndex: parseInt(chapterIndex) });
    }
}

function getCurrentCourseIdFromPage() {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb && breadcrumb.textContent) {
        const course = coursesData.courses.find(c => breadcrumb.textContent.includes(c.name));
        if (course) return course.id;
    }
    return null;
}

// ==================== مراقبة التغييرات ====================
function observeDynamicContent() {
    const observer = new MutationObserver(() => {
        attachDynamicEvents();
    });
    
    observer.observe(document.getElementById('mainContent'), { childList: true, subtree: true });
}

// ==================== الوضع الليلي ====================
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
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
}

// ==================== بدء التشغيل ====================
loadData();

window.addEventListener('hashchange', renderPage);
window.addEventListener('load', () => {
    renderPage();
    observeDynamicContent();
});

// حفظ البيانات بشكل دوري
setInterval(s
