// بيانات المساقات (يمكنك تعديلها وإضافة المزيد)
let coursesData = {
    courses: [
        {
            id: 1,
            name: "اساسيات التمريض - نظري",
            description: "المفاهيم الأساسية والنظريات التمريضية",
            icon: "📖",
            bookUrl: "https://example.com/book/nursing-theory.pdf",
            chapters: ["مقدمة في التمريض", "التاريخ والفلسفة", "النظريات التمريضية", "المعايير الأخلاقية", "التواصل المهني"],
            lectures: []
        },
        {
            id: 2,
            name: "اساسيات التمريض - عملي",
            description: "المهارات السريرية والإجراءات العملية",
            icon: "💉",
            bookUrl: "https://example.com/book/practical-nursing.pdf",
            chapters: ["العلامات الحيوية", "العناية بالجروح", "إعطاء الأدوية", "التعقيم", "الإنعاش القلبي"],
            lectures: []
        },
        {
            id: 3,
            name: "التشريح",
            description: "دراسة تركيب الجسم البشري",
            icon: "🧠",
            bookUrl: "https://example.com/book/anatomy.pdf",
            chapters: ["الجهاز الهيكلي", "الجهاز العضلي", "الجهاز العصبي", "الجهاز الدوري", "الجهاز التنفسي"],
            lectures: []
        },
        {
            id: 4,
            name: "الاحياء",
            description: "الأساسيات البيولوجية للجسم",
            icon: "🔬",
            bookUrl: "https://example.com/book/biology.pdf",
            chapters: ["الخلية", "الوراثة", "التمثيل الغذائي", "الأحياء الدقيقة", "جهاز المناعة"],
            lectures: []
        }
    ]
};

// بيانات الأسئلة لكل مساق وشابتر
let quizData = {
    1: {
        1: [
            { question: "ما هو تعريف التمريض؟", options: ["مهنة مساعدة", "علم وفن", "مجرد وظيفة", "تطبيب"], correct: 1 },
            { question: "من هي مؤسسة التمريض الحديث؟", options: ["كلارا بارتون", "فلورنس نايتينجيل", "ماري سيكول", "مارجريت سانجر"], correct: 1 }
        ],
        2: [
            { question: "في أي عام ولدت فلورنس نايتينجيل؟", options: ["1810", "1820", "1830", "1840"], correct: 1 }
        ]
    },
    2: {
        1: [
            { question: "ما هي درجة حرارة الجسم الطبيعية؟", options: ["36-37°C", "37-38°C", "35-36°C", "38-39°C"], correct: 0 },
            { question: "ما هو المعدل الطبيعي للنبض؟", options: ["40-60", "60-100", "100-120", "120-140"], correct: 1 }
        ]
    },
    3: {
        1: [
            { question: "كم عدد عظام الإنسان البالغ؟", options: ["200", "206", "210", "215"], correct: 1 },
            { question: "أي من هذه ليس جزءاً من الجهاز الهيكلي؟", options: ["الجمجمة", "القفص الصدري", "الكبد", "العمود الفقري"], correct: 2 }
        ]
    },
    4: {
        1: [
            { question: "ما هي الوحدة الأساسية للحياة؟", options: ["النسيج", "العضو", "الخلية", "الجزيء"], correct: 2 }
        ]
    }
};

// حفظ البيانات في LocalStorage
function saveData() {
    localStorage.setItem('nursingCourses', JSON.stringify(coursesData));
    localStorage.setItem('nursingQuizzes', JSON.stringify(quizData));
}

// تحميل البيانات
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
document.getElementById('userGreeting').textContent = `مرحباً، ${currentUser}`;

// المتغيرات العامة
let currentCourse = null;
let currentChapterIndex = null;

// عرض المساقات
function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = coursesData.courses.map(course => `
        <div class="course-card" data-course-id="${course.id}">
            <div class="course-icon">${course.icon}</div>
            <h3>${course.name}</h3>
            <p>${course.description}</p>
        </div>
    `).join('');
    
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => showCourseDetail(parseInt(card.dataset.courseId)));
    });
}

// عرض تفاصيل المساق
function showCourseDetail(courseId) {
    currentCourse = coursesData.courses.find(c => c.id === courseId);
    if (!currentCourse) return;
    
    document.getElementById('coursesGrid').parentElement.style.display = 'none';
    document.getElementById('courseDetail').classList.remove('hidden');
    document.getElementById('courseDetailTitle').textContent = `${currentCourse.icon} ${currentCourse.name}`;
    document.getElementById('courseDetailDesc').textContent = currentCourse.description;
    
    renderChapters();
    renderLectures();
    renderBook();
    renderQuizzes();
}

// عرض الشباتر
function renderChapters() {
    const container = document.getElementById('chaptersList');
    container.innerHTML = currentCourse.chapters.map((chapter, idx) => `
        <div class="chapter-card" data-chapter="${idx}">
            <div class="chapter-title">📘 ${chapter}</div>
            <div class="quiz-badge">📝 اختبار الشابتر</div>
        </div>
    `).join('');
    
    document.querySelectorAll('.chapter-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const chapterIdx = parseInt(card.dataset.chapter);
            openQuizForChapter(chapterIdx);
        });
    });
}

// عرض المحاضرات
function renderLectures() {
    const container = document.getElementById('lecturesList');
    if (!currentCourse.lectures) currentCourse.lectures = [];
    
    container.innerHTML = currentCourse.lectures.map((lecture, idx) => `
        <div class="lecture-item">
            <a href="${lecture.url}" target="_blank" class="lecture-link">🎬 ${lecture.title}</a>
            <button class="delete-lecture" data-lecture="${idx}">حذف</button>
        </div>
    `).join('');
    
    document.querySelectorAll('.delete-lecture').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.lecture);
            currentCourse.lectures.splice(idx, 1);
            saveData();
            renderLectures();
        });
    });
}

// عرض الكتاب
function renderBook() {
    const container = document.getElementById('bookLinkContainer');
    if (currentCourse.bookUrl && currentCourse.bookUrl !== "") {
        container.innerHTML = `<a href="${currentCourse.bookUrl}" target="_blank" class="book-link">📥 تحميل الكتاب المقرر</a>`;
    } else {
        container.innerHTML = `<p>⚠️ لم يتم إضافة رابط الكتاب بعد</p>`;
    }
}

// عرض الاختبارات
function renderQuizzes() {
    const container = document.getElementById('quizzesContainer');
    container.innerHTML = currentCourse.chapters.map((chapter, idx) => `
        <div class="quiz-chapter-card">
            <span><strong>${chapter}</strong></span>
            <button class="take-quiz-btn" data-chapter="${idx}">📝 إجراء الاختبار</button>
        </div>
    `).join('');
    
    document.querySelectorAll('.take-quiz-btn').forEach(btn => {
        btn.addEventListener('click', () => openQuizForChapter(parseInt(btn.dataset.chapter)));
    });
}

// فتح الاختبار
function openQuizForChapter(chapterIdx) {
    currentChapterIndex = chapterIdx;
    const chapterName = currentCourse.chapters[chapterIdx];
    const questions = quizData[currentCourse.id]?.[chapterIdx + 1] || [];
    
    if (questions.length === 0) {
        alert("⚠️ لا توجد أسئلة لهذا الشابتر بعد. يمكنك إضافتها لاحقاً!");
        return;
    }
    
    const modal = document.getElementById('quizModal');
    const container = document.getElementById('quizQuestions');
    document.getElementById('modalChapterTitle').textContent = `اختبار: ${chapterName}`;
    
    container.innerHTML = questions.map((q, qIdx) => `
        <div class="question-item">
            <div class="question-text">${qIdx + 1}. ${q.question}</div>
            <div class="options">
                ${q.options.map((opt, optIdx) => `
                    <label class="option">
                        <input type="radio" name="q${qIdx}" value="${optIdx}">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    modal.style.display = 'flex';
    
    document.getElementById('submitQuiz').onclick = () => {
        let score = 0;
        questions.forEach((q, qIdx) => {
            const selected = document.querySelector(`input[name="q${qIdx}"]:checked`);
            if (selected && parseInt(selected.value) === q.correct) score++;
        });
        const resultDiv = document.getElementById('quizResult');
        resultDiv.innerHTML = `<div style="background: ${score/questions.length >= 0.6 ? '#4caf50' : '#e74c3c'}; padding: 15px; border-radius: 12px; color: white;">
            ✅ نتيجتك: ${score} من ${questions.length} (${Math.round(score/questions.length*100)}%)
            ${score/questions.length >= 0.6 ? '🎉 ممتاز! اجتزت الاختبار' : '📚 حاول مراجعة الشابتر مرة أخرى'}
        </div>`;
    };
}

// إضافة محاضرة
document.getElementById('addLectureBtn')?.addEventListener('click', () => {
    const title = prompt("أدخل عنوان المحاضرة:");
    const url = prompt("أدخل رابط اليوتيوب:");
    if (title && url) {
        if (!currentCourse.lectures) currentCourse.lectures = [];
        currentCourse.lectures.push({ title, url });
        saveData();
        renderLectures();
    }
});

// تعديل رابط الكتاب
document.getElementById('editBookBtn')?.addEventListener('click', () => {
    const newUrl = prompt("أدخل رابط الكتاب الجديد (PDF أو رابط مباشر):", currentCourse.bookUrl);
    if (newUrl) {
        currentCourse.bookUrl = newUrl;
        saveData();
        renderBook();
    }
});

// العودة للمساقات
document.getElementById('backToCourses')?.addEventListener('click', () => {
    document.getElementById('coursesGrid').parentElement.style.display = 'block';
    document.getElementById('courseDetail').classList.add('hidden');
    currentCourse = null;
});

// التبويبات
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.getElementById(`${btn.dataset.tab}Tab`).classList.add('active');
    });
});

// تبديل الوضع الليلي/النهاري
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    themeToggle.querySelector('.toggle-icon').textContent = '☀️';
} else {
    document.body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.querySelector('.toggle-icon').textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.querySelector('.toggle-icon').textContent = '🌙';
    }
});

// إغلاق المودال
document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('quizModal').style.display = 'none';
    document.getElementById('quizResult').innerHTML = '';
});

window.onclick = (e) => {
    if (e.target === document.getElementById('quizModal')) {
        document.getElementById('quizModal').style.display = 'none';
    }
};

// تهيئة الصفحة
loadData();
renderCourses();
saveData();
